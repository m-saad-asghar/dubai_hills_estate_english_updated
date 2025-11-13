// app/api/submit-lead/route.js

export async function POST(req) {
  try {
    const body = await req.json();
    const { formData, originValue, countryValue, captchaToken } = body;

    if (!captchaToken) {
      return new Response(
        JSON.stringify({ success: false, message: 'Missing reCAPTCHA token.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 1) Verify reCAPTCHA with Google
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const verifyRes = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(
          captchaToken
        )}`,
      }
    );

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      return new Response(
        JSON.stringify({ success: false, message: 'reCAPTCHA verification failed.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 2) Prepare CRM payloads
    const payloadEmail = {
      LANDING_PAGE: 'Dubai Hills Estate EN Landing Page',
      ORIGIN: originValue,
      COUNTRY: countryValue,
      NAME: formData.name,
      PHONE_TEXT: formData.phone,
      EMAIL: formData.email,
      BEDROOMS: formData.bedrooms,
      DURATION: formData.duration,
      PURPOSE: formData.purpose,
    };

    const payload = {
      fields: {
        TITLE: 'Dubai Hills Estate EN Landing Page',
        UF_CRM_1760777561731: originValue,
        NAME: formData.name,
        PHONE_TEXT: formData.phone,
        PHONE: [
          {
            VALUE: formData.phone,
            VALUE_TYPE: 'WORK',
          },
        ],
        EMAIL: [
          {
            VALUE: formData.email,
            VALUE_TYPE: 'WORK',
          },
        ],
        SOURCE_ID: 'WEB',
        ASSIGNED_BY_ID: 25,
        UF_CRM_1754652292782: 'Dubai Hills Estate EN Landing Page',
        UF_CRM_1761206533: countryValue,
        UF_CRM_1761918627: formData.bedrooms,
        UF_CRM_1761918741: formData.duration,
        UF_CRM_1761918805: formData.purpose,
      },
      params: {
        REGISTER_SONET_EVENT: 'Y',
      },
    };

    // 3) Send lead to Bitrix24 CRM
    const crmRes = await fetch(
      'https://crm.shiroestate.ae/rest/25/btnspp9oeepo8jt6/crm.lead.add.json',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    const crmData = await crmRes.json();

    if (!crmRes.ok || !crmData.result) {
      return new Response(
        JSON.stringify({ success: false, message: 'Failed to create lead in CRM.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 4) Optionally send email via your existing /api/send-email route
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payloadEmail),
      });
    } catch (e) {
      console.error('Error sending email:', e);
      // not fatal for the main lead creation
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('submit-lead error:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Server error.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
