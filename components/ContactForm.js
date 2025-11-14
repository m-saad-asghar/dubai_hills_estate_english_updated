'use client';

import React, { useState, useEffect, useRef } from 'react';
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useRouter, useSearchParams } from 'next/navigation';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // reCAPTCHA (Component 1 specific)
  const recaptchaRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [captchaError, setCaptchaError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    bedrooms: '',
    duration: '',
    purpose: '',
  });

  const [phoneError, setPhoneError] = useState('');
  const [submitMessage, setSubmitMessage] = useState(null);
  const [disableBtn, setDisableBtn] = useState(false);
  const [countryValue, setCountryValue] = useState('');
  const [originValue, setOriginValue] = useState('');

  useEffect(() => {
    const origin = searchParams.get('origin');
    const country = searchParams.get('country');

    if (origin) {
      if (origin.toLowerCase() === 'meta') {
        setOriginValue('Meta');
      } else if (origin.toLowerCase() === 'google') {
        setOriginValue('Google Ads');
      } else {
        setOriginValue('');
      }
    } else {
      setOriginValue('');
    }

    if (country) {
      const formattedCountry = country
        .replace(/_/g, ' ')
        .toLowerCase()
        .replace(/\b\w/g, function (char) {
          return char.toUpperCase();
        });
      setCountryValue(formattedCountry);
    } else {
      setCountryValue('');
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
    if (token) {
      setCaptchaError('');
    }
  };

   const handleSubmit = async (e) => {
        e.preventDefault();

        // ✅ Check captcha FIRST
        if (!captchaToken) {
            setCaptchaError("Please verify that you are not a robot.");
            return;
        }

        if (!formData.phone) {
            setPhoneError("Phone number is required");
            return;
        } else if (formData.phone.length < 9 || formData.phone.length > 15) {
            setPhoneError("Phone number must be between 9 and 15 characters");
            return;
        } else {
            setPhoneError("");
        }

        let phone = formData.phone.replace(/^(\d{1,3})0/, '$1');
        formData.phone = phone

        const payload_email = {
            LANDING_PAGE: "Dubai Hills Estate EN Landing Page",
            ORIGIN: originValue,
            COUNTRY: countryValue,
            NAME: formData.name,
            PHONE_TEXT: formData.phone,
            EMAIL: formData.email,
            // COUNTRY_OF_RESIDENCE: formData.country_of_residence,
            BEDROOMS: formData.bedrooms,
            DURATION: formData.duration,
            PURPOSE: formData.purpose,
            // RECAPTCHA_TOKEN: captchaToken, // (optional if you later validate server-side)
        };

        const payload = {
            fields: {
                TITLE: `Dubai Hills Estate EN Landing Page`,
                UF_CRM_1760777561731: originValue,
                NAME: formData.name,
                PHONE_TEXT: formData.phone,
                PHONE: [
                    {
                        VALUE: formData.phone,
                        VALUE_TYPE: "WORK",
                    },
                ],
                EMAIL: [
                    {
                        VALUE: formData.email,
                        VALUE_TYPE: "WORK",
                    },
                ],
                SOURCE_DESCRIPTION: formData.message,
                SOURCE_ID: "WEB",
                ASSIGNED_BY_ID: 25,
                UF_CRM_1754652292782: "Dubai Hills Estate EN Landing Page",
                UF_CRM_1761206533: countryValue,
                // UF_CRM_1761918592: formData.country_of_residence,
                UF_CRM_1761918627: formData.bedrooms,
                UF_CRM_1761918741: formData.duration,
                UF_CRM_1761918805: formData.purpose,
            },
            params: {
                REGISTER_SONET_EVENT: "Y",
            },
        };

        async function sendLeadEmail() {
            try {
                const res = await fetch("/api/send-email", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload_email),
                });

                const data = await res.json();
                console.log("Email sent:", data);
            } catch (err) {
                console.error("Error sending email:", err);
            }
        }

        try {
            setDisableBtn(true);
            setSubmitMessage(null);

            const response = await fetch(
                "https://crm.shiroestate.ae/rest/25/btnspp9oeepo8jt6/crm.lead.add.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            const result = await response.json();
            setDisableBtn(false);

            if (result.result) {
              router.push('/thank-you');
              await sendLeadEmail();
                // Reset form
                // Reset this form's captcha only
                setCaptchaToken(null);
                if (recaptchaRef.current) {
                    recaptchaRef.current.reset();
                }
                await sendLeadEmail();
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    bedrooms: '',
                    duration: '',
                    purpose: '',
                });
            } else {
                setDisableBtn(false);
                toast.error(
                    "Something Went Wrong. Please Try Again.",
                    {
                        duration: 5000,
                    }
                );
            }
        } catch (error) {
            setDisableBtn(false);
            console.error("Error submitting lead:", error);
            toast.error(
                "Something Went Wrong. Please Try Again.",
                {
                    duration: 5000,
                }
            );
        }
    };

  return (
    <>
      <div>
        <section className="banner_form_container" id="contact-form">
          <div className="contact-page__bottom">
            <div className="contact-two contact-page-form">
              <div className="">
                <div className="contact-two__inner">
                  <div className="contact-two__inner-box">
                    <form
                      onSubmit={handleSubmit}
                      className="contact-page__form contact-form-validated"
                    >
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="contact-page__input-box">
                            <label className="form_label">Full Name*</label>
                            <input
                              type="text"
                              placeholder="Enter Full Name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              autoComplete="off"
                              autoCorrect="off"
                              spellCheck="false"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="contact-page__input-box">
                            <label className="form_label">Email*</label>
                            <input
                              type="email"
                              placeholder="Enter Your Email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              autoComplete="off"
                              autoCorrect="off"
                              spellCheck="false"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="contact-page__input-box">
                            <label className="form_label">
                              Phone Number* (With Country Code)
                            </label>
                            <PhoneInput
                                                            name="phone"
                                                            country={"gb"}
                                                            value={formData.phone}
  onChange={(value) =>
    setFormData({
      ...formData,
      phone: value,
    })
  }
                                                            countryCodeEditable={false}
                                                            required
                                                            inputStyle={{
                                                                width: "100%",
                                                                borderRadius: "0",
                                                                border: phoneError ? "1px solid red" : "1px solid #000", // Visual error feedback
                                                                height: "60px",
                                                            }}
                                                        />
                            <p className='error_msg' style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{phoneError}</p>
                          </div>
                        </div>
                        <div
                          className="col-xl-6 col-lg-6 col-md-6 col-sm-12"
                          style={{ marginBottom: 20 }}
                        >
                          <div className="contact-page__input-box dropdown_styling">
                            <label className="form_label">Number of Bedrooms*</label>
                            <select
                              name="bedrooms"
                              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-5 focus:ring-blue-500"
                              value={formData.bedrooms}
                              onChange={handleChange}
                              autoComplete="off"
                              autoCorrect="off"
                              spellCheck="false"
                              required
                            >
                              <option value="">Select Bedrooms</option>
                              <option value="1 Bedroom">1 Bedroom</option>
                              <option value="2 Bedrooms">2 Bedrooms</option>
                              <option value="3 Bedrooms">3 Bedrooms</option>
                              <option value="Townhouse">Townhouse</option>
                              <option value="Villa">Villa</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div
                          className="col-xl-6 col-lg-6 col-md-6 col-sm-12"
                          style={{ marginBottom: 20 }}
                        >
                          <div className="contact-page__input-box dropdown_styling">
                            <label className="form_label">
                              How Soon You are Looking to Buy*
                            </label>
                            <select
                              name="duration"
                              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-5 focus:ring-blue-500"
                              value={formData.duration}
                              onChange={handleChange}
                              autoComplete="off"
                              autoCorrect="off"
                              spellCheck="false"
                              required
                            >
                              <option value="">Select One</option>
                              <option value="Immediately">Immediately</option>
                              <option value="3 Months">3 Months</option>
                              <option value="6 Months">6 Months</option>
                              <option value="1 Year">1 Year</option>
                              <option value="More than a Year">More than a Year</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="contact-page__input-box dropdown_styling">
                            <label className="form_label">
                              What is the Purpose of Buying?*
                            </label>
                            <select
                              name="purpose"
                              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-5 focus:ring-blue-500"
                              value={formData.purpose}
                              onChange={handleChange}
                              autoComplete="off"
                              autoCorrect="off"
                              spellCheck="false"
                              required
                            >
                              <option value="">Select One</option>
                              <option value="Self-Use">Self-Use</option>
                              <option value="Investment">Investment</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        {/* reCAPTCHA in the previously empty column */}
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 captcha_container">
                          <div>
                            <ReCAPTCHA
                              ref={recaptchaRef}
                              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                              onChange={handleCaptchaChange}
                            />
                            {captchaError && (
                              <p
                                style={{
                                  color: 'red',
                                  fontSize: '14px',
                                  marginTop: '5px',
                                }}
                              >
                                {captchaError}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 btn_styling">
                          <div className="contact-page__btn submit_btn">
                            <button
                              className="thm-btn_submit"
                              type="submit"
                              disabled={disableBtn}
                              data-loading-text="Please wait..."
                            >
                              <span className="txt">SUBMIT</span>
                            </button>
                          </div>

                          {/* {submitMessage && (
                            <div
                              style={{
                                marginTop: '15px',
                                padding: '10px',
                                backgroundColor: submitMessage.includes('Thank you')
                                  ? '#22c55e'
                                  : '#ef4444',
                                color: 'white',
                                borderRadius: '4px',
                                textAlign: 'center',
                              }}
                            >
                              {submitMessage}
                            </div>
                          )} */}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*End Contact Two */}
          </div>
        </section>
      </div>
    </>
  );
}
