const nodemailer = require('nodemailer');
const { pool } = require('../config/db');



/**
 * POST /api/enquiry
 * Handles enquiry form submissions and sends formatted emails to school administration
 */
const submitEnquiry = async (req, res) => {
  try {
    const {
      parentName,
      email,
      phone,
      studentName,
      currentGrade,
      interestedGrade,
      enquiryType,
      preferredContact,
      message,
    } = req.body;

    // Validate required fields
    if (!parentName || !email || !phone || !interestedGrade || !enquiryType || !preferredContact || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
      });
    }

    // Configure nodemailer transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email HTML content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Enquiry - Doon International School</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #002B6B, #FFD700); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .field-label { font-weight: bold; color: #002B6B; }
            .field-value { background: white; padding: 8px; border-radius: 4px; border: 1px solid #ddd; }
            .urgent { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 4px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔔 New Enquiry Received</h1>
              <p>Doon International School</p>
            </div>

            <div class="content">
              <div class="urgent">
                <strong>Action Required:</strong> Please respond to this enquiry within 24 hours.
              </div>

              <h2>Parent/Guardian Information</h2>
              <div class="field">
                <div class="field-label">Name:</div>
                <div class="field-value">${parentName}</div>
              </div>
              <div class="field">
                <div class="field-label">Email:</div>
                <div class="field-value">${email}</div>
              </div>
              <div class="field">
                <div class="field-label">Phone:</div>
                <div class="field-value">${phone}</div>
              </div>
              <div class="field">
                <div class="field-label">Preferred Contact Method:</div>
                <div class="field-value">${preferredContact}</div>
              </div>

              <h2>Student Information</h2>
              <div class="field">
                <div class="field-label">Student Name:</div>
                <div class="field-value">${studentName || 'Not provided'}</div>
              </div>
              <div class="field">
                <div class="field-label">Current Grade:</div>
                <div class="field-value">${currentGrade || 'Not provided'}</div>
              </div>
              <div class="field">
                <div class="field-label">Grade Interested In:</div>
                <div class="field-value">${interestedGrade}</div>
              </div>

              <h2>Enquiry Details</h2>
              <div class="field">
                <div class="field-label">Type of Enquiry:</div>
                <div class="field-value">${enquiryType}</div>
              </div>
              <div class="field">
                <div class="field-label">Message:</div>
                <div class="field-value" style="white-space: pre-wrap;">${message}</div>
              </div>

              <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">

              <p><strong>Submission Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              <p><strong>Source:</strong> Website Enquiry Form</p>

              <div style="margin-top: 20px; padding: 15px; background: #e8f4fd; border-radius: 4px;">
                <p><strong>💡 Quick Actions:</strong></p>
                <ul>
                  <li>Reply to: <a href="mailto:${email}">${email}</a></li>
                  <li>Call: <a href="tel:${phone}">${phone}</a></li>
                  <li>Check enquiry type: ${enquiryType}</li>
                </ul>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Email options
    const mailOptions = {
      from: `"Doon International School" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Enquiry: ${enquiryType} - ${parentName}`,
      html: emailHtml,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully',
    });
  } catch (error) {
    console.error('Error sending enquiry email:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to send enquiry',
    });
  }
};

/**
 * POST /api/admission-enquiry
 * Handles the new modern admission enquiry form submissions
 */
const admissionEnquiry = async (req, res) => {
  try {
    const {
      childFirstName,
      classId,
      studentGender,
      childDateOfBirth,
      fatherFirstName,
      motherFirstName,
      category,
      mobileNumber,
      address,
      email
    } = req.body;

    // Validate required fields
    if (
      !childFirstName || !classId || !studentGender || !childDateOfBirth ||
      !fatherFirstName || !motherFirstName || !category || !mobileNumber ||
      !address || !email
    ) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Save to database
    try {
      const { pool } = require('../config/db'); // Explicitly import inside function
      const query = `
        INSERT INTO admission_enquiry (
          childFirstName, classId, studentGender, childDateOfBirth,
          fatherFirstName, motherFirstName, category, mobileNumber,
          address, email
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      await pool.execute(query, [
        childFirstName,
        classId,
        studentGender,
        childDateOfBirth,
        fatherFirstName,
        motherFirstName,
        category,
        mobileNumber,
        address,
        email
      ]);
    } catch (dbError) {
      console.error('Database Insertion Failed:', dbError.message);
      return res.status(500).json({
        success: false,
        message: 'Database error: ' + dbError.message
      });
    }

    // Email bypass logic: Send email in the background without awaiting it for the response
    const sendEmail = async () => {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
          },
        });

        const emailHtml = `
          <h2>New Admission Enquiry Received</h2>
          <p><strong>Student Name:</strong> ${childFirstName}</p>
          <p><strong>Class:</strong> ${classId}</p>
          <p><strong>Gender:</strong> ${studentGender}</p>
          <p><strong>DOB:</strong> ${childDateOfBirth}</p>
          <p><strong>Father's Name:</strong> ${fatherFirstName}</p>
          <p><strong>Mother's Name:</strong> ${motherFirstName}</p>
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>Mobile:</strong> ${mobileNumber}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Address:</strong> ${address}</p>
        `;

        await transporter.sendMail({
          from: `"Doon International School" <${process.env.GMAIL_USER}>`,
          to: process.env.GMAIL_USER,
          subject: `Admission Enquiry: ${childFirstName} - Class ${classId}`,
          html: emailHtml,
        });
        console.log('✅ Admission enquiry email sent');
      } catch (emailErr) {
        console.error('❌ Email bypass (ignored):', emailErr.message);
      }
    };

    // Trigger email sending but don't wait for it
    sendEmail();

    // Send successful response immediately
    return res.status(201).json({
      success: true,
      message: 'Admission enquiry submitted successfully'
    });
  } catch (error) {
    console.error('General Error in admissionEnquiry:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error: ' + error.message
    });
  }
};

module.exports = { submitEnquiry, admissionEnquiry };

