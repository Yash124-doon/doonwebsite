const { pool } = require('../config/db');
const path = require('path');
const fs = require('fs');

/**
 * Public: Get all open job openings
 * GET /api/career/jobs
 */
const getOpenJobs = async (req, res) => {
  try {
    const [rows] = await pool.execute(
      "SELECT id, title, type, experience, qualification FROM career_jobs WHERE status = 'Open' ORDER BY created_at DESC"
    );

    return res.status(200).json({
      success: true,
      data: rows,
    });
  } catch (error) {
    console.error('Error fetching open jobs:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
};

/**
 * Public: Submit a job application
 * POST /api/career/apply
 */
const applyJob = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      position,
      summary
    } = req.body;

    if (!firstName || !lastName || !email || !position) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields.',
      });
    }

    // Attempt to find the job_id if it matches one of our active jobs
    const [jobs] = await pool.execute(
      "SELECT id FROM career_jobs WHERE title = ? AND status = 'Open' LIMIT 1",
      [position]
    );
    const jobId = jobs.length > 0 ? jobs[0].id : null;

    // Handle resume path
    let resumePath = null;
    if (req.file) {
      resumePath = `/uploads/resumes/${req.file.filename}`;
    }

    const [result] = await pool.execute(
      `INSERT INTO career_applications (job_id, first_name, last_name, email, position, resume_path, summary)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        jobId,
        firstName.trim(),
        lastName.trim(),
        email.trim(),
        position.trim(),
        resumePath,
        summary || null
      ]
    );

    return res.status(201).json({
      success: true,
      message: 'Your application has been submitted successfully.',
      data: { id: result.insertId }
    });
  } catch (error) {
    console.error('Error submitting application:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
};

/**
 * Admin: Get all jobs (all statuses)
 * GET /api/career/admin/jobs
 */
const getAllJobsAdmin = async (req, res) => {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM career_jobs ORDER BY created_at DESC"
    );

    return res.status(200).json({
      success: true,
      data: rows,
    });
  } catch (error) {
    console.error('Error fetching admin jobs:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
};

/**
 * Admin: Create a new job opening
 * POST /api/career/admin/jobs
 */
const createJob = async (req, res) => {
  try {
    const { title, type, experience, qualification, status } = req.body;

    if (!title || !type) {
      return res.status(400).json({
        success: false,
        message: 'Title and Type are required.',
      });
    }

    const [result] = await pool.execute(
      `INSERT INTO career_jobs (title, type, experience, qualification, status)
       VALUES (?, ?, ?, ?, ?)`,
      [
        title.trim(),
        type.trim(),
        experience || null,
        qualification || null,
        status || 'Open'
      ]
    );

    return res.status(201).json({
      success: true,
      message: 'Job opening created successfully.',
      data: { id: result.insertId }
    });
  } catch (error) {
    console.error('Error creating job:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
};

/**
 * Admin: Update a job opening
 * PUT /api/career/admin/jobs/:id
 */
const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, type, experience, qualification, status } = req.body;

    const [existing] = await pool.execute('SELECT id FROM career_jobs WHERE id = ?', [id]);
    if (existing.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Job opening not found.',
      });
    }

    await pool.execute(
      `UPDATE career_jobs SET 
        title = ?, type = ?, experience = ?, qualification = ?, status = ?
       WHERE id = ?`,
      [
        title.trim(),
        type.trim(),
        experience || null,
        qualification || null,
        status || 'Open',
        id
      ]
    );

    return res.status(200).json({
      success: true,
      message: 'Job opening updated successfully.'
    });
  } catch (error) {
    console.error('Error updating job:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
};

/**
 * Admin: Delete a job opening
 * DELETE /api/career/admin/jobs/:id
 */
const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;

    const [existing] = await pool.execute('SELECT id FROM career_jobs WHERE id = ?', [id]);
    if (existing.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Job opening not found.',
      });
    }

    await pool.execute('DELETE FROM career_jobs WHERE id = ?', [id]);

    return res.status(200).json({
      success: true,
      message: 'Job opening deleted successfully.'
    });
  } catch (error) {
    console.error('Error deleting job:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
};

/**
 * Admin: Get all career applications
 * GET /api/career/admin/applications
 */
const getApplications = async (req, res) => {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM career_applications ORDER BY created_at DESC"
    );

    return res.status(200).json({
      success: true,
      data: rows,
    });
  } catch (error) {
    console.error('Error fetching applications:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
};

/**
 * Admin: Delete an application
 * DELETE /api/career/admin/applications/:id
 */
const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;

    const [existing] = await pool.execute('SELECT resume_path FROM career_applications WHERE id = ?', [id]);
    if (existing.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Application not found.',
      });
    }

    // Delete resume file if exists
    if (existing[0].resume_path) {
      const filePath = path.join(__dirname, '../../..', existing[0].resume_path);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await pool.execute('DELETE FROM career_applications WHERE id = ?', [id]);

    return res.status(200).json({
      success: true,
      message: 'Application deleted successfully.'
    });
  } catch (error) {
    console.error('Error deleting application:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
};

module.exports = {
  getOpenJobs,
  applyJob,
  getAllJobsAdmin,
  createJob,
  updateJob,
  deleteJob,
  getApplications,
  deleteApplication
};
