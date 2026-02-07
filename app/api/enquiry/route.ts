/**
 * @fileoverview Enquiry API route handler for Doon International School
 * @description Handles enquiry form submissions and sends formatted emails to school administration
 * @author Doon International School Development Team
 */

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * POST /api/enquiry
 *
 * Handles enquiry form submissions from the website contact/enquiry forms.
 * Processes parent/guardian information, student details, and enquiry content,
 * then sends a formatted HTML email to school administration.
 *
 * Process Flow:
 * 1. Parse and validate incoming JSON request body
 * 2. Check for required fields (parentName, email, phone, interestedGrade, enquiryType, preferredContact, message)
 * 3. Configure Gmail SMTP transporter using environment variables
 * 4. Generate responsive HTML email with enquiry details
 * 5. Send email to school administration
 * 6. Return success/error response to client
 *
 * Email Features:
 * - Responsive HTML design with school branding
 * - Structured sections for parent, student, and enquiry information
 * - Direct reply-to functionality
 * - Quick action links for phone and email
 * - Submission timestamp in IST timezone
 * - Professional formatting with school colors
 *
 * Environment Variables Required:
 * - GMAIL_USER: Gmail address for sending emails
 * - GMAIL_APP_PASSWORD: Gmail app password for authentication
 *
 * @param {NextRequest} request - Next.js request object containing form data
 * @returns {Promise<NextResponse>} JSON response with success message or error details
 *
 * @throws {Error} When email sending fails or validation errors occur
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Parse JSON request body containing form data
    const body = await request.json();

    // Destructure form fields from request body
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
    } = body;

    // Validate that all required fields are present
    // This prevents incomplete enquiries from being processed
    if (!parentName || !email || !phone || !interestedGrade || !enquiryType || !preferredContact || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure nodemailer transporter with Gmail SMTP settings
    // Uses environment variables for security (not hardcoded credentials)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
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
      to: process.env.GMAIL_USER, // Send to the same Gmail account
      subject: `New Enquiry: ${enquiryType} - ${parentName}`,
      html: emailHtml,
      replyTo: email, // Allow direct reply to the enquirer's email
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Enquiry submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending enquiry email:', error);
    return NextResponse.json(
      { error: 'Failed to send enquiry' },
      { status: 500 }
    );
  }
}
