import sendgrid from "@sendgrid/mail";

console.log("SENDGRID_API_KEY:", process.env.SENDGRID_API_KEY); // Add this line to log the API key

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { chosenPackage, firstName, lastName, email, phone, message } =
      req.body;

    console.log("Received form data:", req.body);

    const emailData = {
      to: "samsmobiledetatiling@gmail.com",
      from: "samamiri@hotmail.com", // Use the email address you verified with SendGrid
      subject: `New Contact Request from ${firstName} ${lastName}`,
      text: `
        Chosen Package: ${chosenPackage}
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    try {
      await sendgrid.send(emailData);
      console.log("Email sent successfully");
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, error: "Error sending email" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
}
