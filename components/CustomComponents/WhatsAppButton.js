"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/CustomComponents/WhatsappButton.module.css";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [countryValue, setCountryValue] = useState("");
  const [originValue, setOriginValue] = useState("");

  // Read origin & country from the URL on the client only
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);

    const origin = params.get("origin");
    const country = params.get("country");

    // ---- origin ----
    if (origin) {
      const lower = origin.toLowerCase();
      if (lower === "meta") {
        setOriginValue("Meta");
      } else if (lower === "google") {
        setOriginValue("Google Ads");
      } else {
        setOriginValue(origin); // keep raw value as fallback
      }
    } else {
      setOriginValue("");
    }

    // ---- country ----
    if (country) {
      const formattedCountry = country
        .replace(/_/g, " ")
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase());

      setCountryValue(formattedCountry);
    } else {
      setCountryValue("");
    }
  }, []);

  const saveToBitrix = async () => {
    console.log("Debug – origin:", originValue);
    console.log("Debug – country:", countryValue);

    const payload = {
      fields: {
        TITLE: "Dubai Hills Estate EN Landing Page From Whatsapp Button",
        UF_CRM_1760777561731: originValue, // Origin
        NAME: "",
        PHONE_TEXT: "",
        PHONE: [
          {
            VALUE: "",
            VALUE_TYPE: "WORK",
          },
        ],
        EMAIL: [
          {
            VALUE: "",
            VALUE_TYPE: "WORK",
          },
        ],
        SOURCE_DESCRIPTION: "",
        SOURCE_ID: "WEB",
        ASSIGNED_BY_ID: 25,
        UF_CRM_1754652292782:
          "Dubai Hills Estate EN Landing Page From Whatsapp Button",
        UF_CRM_1761206533: countryValue, // Country
      },
      params: {
        REGISTER_SONET_EVENT: "Y",
      },
    };

    try {
      await fetch(
        "https://crm.shiroestate.ae/rest/25/btnspp9oeepo8jt6/crm.lead.add.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      console.log("Bitrix lead saved from WhatsApp button.");
    } catch (error) {
      console.error("Bitrix lead failed:", error);
    }
  };

  const sendEmail = async () => {
    const payloadEmail = {
      LANDING_PAGE:
        "Dubai Hills Estate EN Landing Page From Whatsapp Button",
      ORIGIN: originValue,
      COUNTRY: countryValue,
      NAME: "",
      PHONE_TEXT: "",
      EMAIL: "",
      MESSAGE: "",
    };

    try {
      const res = await fetch("/api/send-email-whatsapp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payloadEmail),
      });

      const data = await res.json();
      console.log("Email sent:", data);
    } catch (err) {
      console.error("Error sending email:", err);
    }
  };

  return (
    <div className={styles.whatsappContainer}>
      <div
        style={{
          position: "relative",
          display: "inline-block",
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {showTooltip && (
          <div
            style={{
              position: "absolute",
              bottom: "110%",
              backgroundColor: "#25d366",
              color: "#ffffff",
              padding: "8px 12px",
              borderRadius: "6px",
              whiteSpace: "nowrap",
              zIndex: 9999,
              fontSize: "14px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            className="whatsapp_message"
          >
            Reach us on WhatsApp for Instant Property Guidance!
          </div>
        )}

        <Link
          href="https://wa.me/971588888461?text=Hello%2C%20I%E2%80%99m%20interested%20in%20your%20Real%20Estate%20Expertise.%20How%20can%20Shiro%20Estate%20assist%20me%20with%20my%20Next%20Purchase%3F&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsapp_button}
          onClick={() => {
            // fire and forget – don’t block the WhatsApp redirect
            saveToBitrix();
            sendEmail();
          }}
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp Chat"
            priority
            width={100}
            height={100}
            className={styles.whatsapp_icon}
          />
        </Link>
      </div>
    </div>
  );
};

export default WhatsAppButton;
