import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "hello@fladumpsterrentals.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "leads@fladumpsterrentals.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message, formType } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Required fields missing." },
        { status: 400 }
      );
    }

    if (formType === "general-inquiry") {
      const { subject } = body;
      await resend.emails.send({
        from: `Florida Dumpster Rentals <${FROM_EMAIL}>`,
        to: NOTIFY_EMAIL,
        subject: `New Inquiry: ${subject || "No subject"} - ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px;">
            <h2 style="color: #16a34a;">New Inquiry - FLADumpsterRentals.com</h2>
            <table style="width: 100%; border-collapse: collapse;">
              ${row("Name", name)}
              ${row("Email", `<a href="mailto:${email}">${email}</a>`)}
              ${row("Phone", phone)}
              ${row("Subject", subject)}
              ${row("Message", message)}
            </table>
            <p style="margin-top: 16px; color: #6b7280; font-size: 14px;">
              From <a href="https://www.fladumpsterrentals.com">FLADumpsterRentals.com</a> &mdash; Contact Form
            </p>
          </div>
        `,
      });
    } else {
      const { businessName, service, location, dumpsterSize, projectTimeline } = body;
      await resend.emails.send({
        from: `Florida Dumpster Rentals <${FROM_EMAIL}>`,
        to: NOTIFY_EMAIL,
        subject: `Quote Request: ${businessName || name} - ${service || "General"} ${location ? `in ${location}` : ""}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px;">
            <h2 style="color: #16a34a;">Quote Request - FLADumpsterRentals.com</h2>
            <table style="width: 100%; border-collapse: collapse;">
              ${row("Name", name)}
              ${row("Business", businessName)}
              ${row("Email", `<a href="mailto:${email}">${email}</a>`)}
              ${row("Phone", phone)}
              ${row("Service Type", service)}
              ${row("Location", location)}
              ${row("Dumpster Size", dumpsterSize)}
              ${row("Project Timeline", projectTimeline)}
              ${row("Message", message)}
            </table>
            <p style="margin-top: 16px; color: #6b7280; font-size: 14px;">
              From <a href="https://www.fladumpsterrentals.com">FLADumpsterRentals.com</a> &mdash; Quote Request Form
            </p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}

function row(label: string, value: string | undefined) {
  return `<tr>
    <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #e5e7eb; vertical-align: top;">${label}</td>
    <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">${value || "Not provided"}</td>
  </tr>`;
}
