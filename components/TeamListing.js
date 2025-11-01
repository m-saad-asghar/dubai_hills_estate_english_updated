"use client";

import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaMapMarker, FaMapMarkerAlt } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

export default function TeamsListing() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
  {
    id: 1,
    src: "/assets/img/gallery/dubai_hills_estate_1.webp",
    alt: "Gallery Image 1",
    link: "#home",
  },
  {
    id: 2,
    src: "/assets/img/gallery/dubai_hills_estate_2.png",
    alt: "Gallery Image 2",
    link: "#home",
  },
   {
    id: 3,
    src: "/assets/img/gallery/dubai_hills_estate_3.webp",
    alt: "Gallery Image 3",
    link: "#home",
  },
];


  return (
    <div>
      <section className="team-two cont" id="gallery">
        <div className="container gallery_container_styling component_container">
          <div className="row team_listing_styling">
        {images.map((image) => (
  <div key={image.id} className="col-xl-4 col-lg-4">
    <div className="team-two__single">
      <div className="team-two__single-img">
        <div
          className="inner"
          style={{
            overflow: "hidden",
            position: "relative",
            transition: "all 0.3s ease",
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "200px" }}>
  <Image
    src={image.src}
    alt={image.alt}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    style={{ objectFit: "cover", display: "block" }}
    priority
  />
</div>

          <div
            style={{
              position: "absolute",
              bottom: "15px",
              left: "15px",
              color: "#fff",
              zIndex: 2,
              textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
            }}
          >
            <p className="heading_container_styling">
              {image.heading}
            </p>
            <p
              className="location_container_styling"
            >
            </p>
          </div>

          <div
            className="hover-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0)",
              transition: "background-color 0.3s ease",
              zIndex: 1,
            }}
          ></div>

          <button
            className="hover-btn"
            style={{ zIndex: 3, position: "absolute" }}
            onClick={() => {
              const element = document.getElementById("home");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            REGISTER INTEREST
          </button>
        </div>
      </div>
    </div>
  </div>
))}

          </div>

           <div className="about-one__content-bottom" style={{display: "flex", justifyContent: "center"}}>
                                    <div className="about-one__content-bottom-author-box">
                                       <div className="btn-box">
                            <div className="btn-one">
                                <Link className="thm-btn" href="#contact-form">
                                    <span className="txt">REGISTER INTEREST</span>
                                </Link>
                            </div>
                        </div>
                                    </div>
                                </div>
        </div>

      </section>
   </div>
  );
}