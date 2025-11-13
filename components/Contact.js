'use client'
import React, { useState, useEffect } from 'react'
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import Script from "next/script";

// Note: Layout and Link imports are commented out as they were not provided, 
// but you should uncomment them if you use them in your actual Next.js project structure.
// import Layout from "@/components/layout/Layout"
// import Link from "next/link"

export default function Contact() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        // country_of_residence: '',
        bedrooms: '',
        duration: '',
        purpose: '',
    });
    const [phoneError, setPhoneError] = useState('');
    const [captchaError, setCaptchaError] = useState('');
    const [submitMessage, setSubmitMessage] = useState(null); // State for success/error message
     const [isOpen, setOpen] = useState(false)
    const [keepUpdated, setKeepUpdated] = useState(true);
     const [disableBtn, setDisableBtn] = useState(false);
     const searchParams = useSearchParams();
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
    .replace(/\b\w/g, (char) => char.toUpperCase());
  setCountryValue(formattedCountry);
} else {
      setCountryValue('');
    }
  }, [searchParams]);

    const handleChange = (e) => {
        // This handles changes for all standard inputs (name, email, country, select fields)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    

    // New handler for the PhoneInput component
    const handlePhoneChange = (value, data, event, formattedValue) => {
        setFormData({
            ...formData,
            phone: value,
        });
        
        // Basic Phone Validation (using the utility provided by the package is better)
        if (value.length > 0 && !isPossiblePhoneNumber('+' + value)) {
             setPhoneError('Please enter a valid phone number (including country code).');
        } else {
             setPhoneError('');
        }
    };

     const handleSubmit = async (e) => {
  e.preventDefault();

   if (!formData.phone) {
    setPhoneError("Phone number is required");
    return;
} else if (formData.phone.length < 9 || formData.phone.length > 15) {
  setPhoneError("Phone number must be between 9 and 15 characters");
  return;
}else{
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

const token = document.querySelector('textarea[name="g-recaptcha-response"]').value;

  if (!token) {
    setCaptchaError('Please complete the reCAPTCHA');
    return;
  }

  try {
    setDisableBtn(true);
    const response = await fetch(
      "https://crm.shiroestate.ae/rest/25/btnspp9oeepo8jt6/crm.lead.add.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
       body: JSON.stringify({ ...payload, recaptchaToken: token }),
      }
    );

    const result = await response.json();
   setDisableBtn(false);

    if (result.result) {
      router.push('/thank-you');
      setFormData({
          name: '',
        phone: '',
        email: '',
        // country_of_residence: '',
        bedrooms: '',
        duration: '',
        purpose: '',
      });
      await sendLeadEmail();
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
            {/* You might wrap this in your <Layout> component here */}
            <div>
                {/*Start Contact Page */}
                <section className="contact-page" id="contact-form">
                    <div className="contact-page__bottom">
                        {/*Start Contact Two */}
                        <div className="contact-two">
                            <div className="container">
                                <div className="contact-two__inner">
                                    <div className="title-box">
                                        <h2 style={{ color: "#ffffff" }} className='contact_heading_styling'>Request a Call From Our Property Advisor</h2>
                                        <p style={{ color: "#ffffff" }}>Required fields are marked *</p>
                                    </div>
                                    <div className="contact-two__inner-box">
                                        {/* 🎯 FIX 1: Add onSubmit handler */}
                                        <form 
                                            onSubmit={handleSubmit}
                                            className="contact-page__form contact-form-validated"
                                        >
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <label className="form_label">
                                                            Full Name*
                                                        </label>
                                                        <input type="text" placeholder="Enter Full Name" name="name" required
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
                                                        <label className="form_label">
                                                            Email*
                                                        </label>
                                                        <input type="email" placeholder="Enter Your Email" name="email" required
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
                                                        {/* 🎯 FIX 2: Use the dedicated phone handler */}
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
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" style={{ marginBottom: 20 }}>
                                                    <div className="contact-page__input-box dropdown_styling">
                                                        <label className="form_label">
                                                            Number of Bedrooms*
                                                        </label>
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
                                                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" style={{ marginBottom: 20 }}>
                                                    <div className="contact-page__input-box dropdown_styling">
                                                        <label className="form_label">
                                                            How Soon You are Looking to Buy*
                                                        </label>
                                                        <select
                                                            name="duration" // FIX: Removed the extraneous closing comment tag
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
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className='captcha_container'>
                                                      <div className="g-recaptcha" data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}></div>
                                                    </div>
                                                     <p className='error_msg' style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{captchaError}</p>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 btn_styling">
                                                    <div className="contact-page__btn submit_btn">
                                                        <button className="thm-btn_submit" type="submit" disabled={disableBtn}
                                                            data-loading-text="Please wait...">
                                                            <span className="txt">
                                                                SUBMIT
                                                            </span>
                                                        </button>
                                                    </div>
                                                    {/* Success Message Display */}
                                                    {submitMessage && (
                                                        <div style={{ 
                                                            marginTop: '15px', 
                                                            padding: '10px', 
                                                            backgroundColor: submitMessage.includes('Thank you') ? '#22c55e' : '#ef4444', 
                                                            color: 'white', 
                                                            borderRadius: '4px',
                                                            textAlign: 'center'
                                                        }}>
                                                            {submitMessage}
                                                        </div>
                                                    )}
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
                {/*End Contact Page */}
            </div>
            {/* You might close your </Layout> component here */}

<Script
  src="https://www.google.com/recaptcha/api.js"
  strategy="afterInteractive"
/>
        </>
    )
}
