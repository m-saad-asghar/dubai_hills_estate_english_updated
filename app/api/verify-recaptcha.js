export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method Not Allowed" });

  const { token } = req.body;

  if (!token) return res.status(400).json({ message: "No token provided" });

  try {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const params = new URLSearchParams();
    params.append("secret", secret);
    params.append("response", token);

    const googleRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      { method: "POST", body: params }
    );

    const data = await googleRes.json();

    if (!data.success) return res.status(403).json({ success: false, message: "reCAPTCHA failed" });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
}
