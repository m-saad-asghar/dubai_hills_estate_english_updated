// pages/api/verify-recaptcha.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { recaptchaToken, name, email } = req.body;

    if (!recaptchaToken) {
      return res.status(400).json({ message: "reCAPTCHA token is missing" });
    }

    // Verify token with Google
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const params = new URLSearchParams();
    params.append("secret", secret);
    params.append("response", recaptchaToken);

    const googleRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      body: params,
    });

    const data = await googleRes.json();

    if (!data.success) {
      console.warn("reCAPTCHA verification failed", data["error-codes"]);
      return res.status(403).json({ message: "reCAPTCHA verification failed" });
    }

    // ✅ Token verified → do something with the lead
    // Example: log lead or send to your CRM
    console.log("Lead submitted:", { name, email });

    return res.status(200).json({ success: true, message: "Lead submitted successfully" });
  } catch (err) {
    console.error("reCAPTCHA API error:", err);
    return res.status(500).json({ message: "Server error verifying reCAPTCHA" });
  }
}
