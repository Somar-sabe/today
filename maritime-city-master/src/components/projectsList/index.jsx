'use client'
import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from './ProjectsList.module.css'; // Ensure this CSS module exists
import { ShieldCheck, TrendingUp, CalendarClock } from "lucide-react";
import ContactFormModal from '../contactModule/contactFormModule';
// ✅ FX + formatting helpers
const formatMoney = (amount, currency) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);

const parsePriceAED = (priceStr) => {
  if (!priceStr) return 0;
  const s = String(priceStr).toUpperCase();
  if (s.includes("TBA") || s.includes("N/A")) return 0;

  const cleaned = s.replace(/,/g, "").trim(); // remove commas
  const m = cleaned.match(/(\d+(\.\d+)?)(\s*)?([MK])?/i);
  if (!m) return 0;

  let val = parseFloat(m[1]);
  const unit = (m[4] || "").toUpperCase();
  if (unit === "M") val *= 1_000_000;
  if (unit === "K") val *= 1_000;
  return Number.isFinite(val) ? val : 0;
};


export const projects = [


  {
    id: "1",
    title: "Rosehill by Emaar",
    location: "Dubai, Dubai Hills Estate",
    developerName: "Emaar Properties",
    announcement: "Aug 13, 2025",
    bookingStart: "Aug 13, 2025",
    constructionStart: "Late 2025",
    delivery: "June 2029",

    image: "/rosa.jpg",
    simage: "/rosshil.jpg",
    timage: "/rozzahi.jpg",
    developerLogo: "/original.png",
    bedrooms: "1 - 3 Beds",
    price: "1.6M AED (from)",
    salesStart: "N/A",
    href: "/projects/rosehill-by-emaar",
    describ: "Refined apartments in Dubai Hills Estate with a calm, green community vibe and strong Emaar branding.",
    describb: "Good for end-users and long-term investors targeting Dubai Hills demand and resale strength.",
  },

  {
    id: "2",
    title: "Montiva at Emaar Green Gate",
    location: "Dubai, Dubai Creek Harbour (The Lagoons)",
    developerName: "Emaar Properties",
    announcement: "Expected 2025",
    bookingStart: "Expected late 2025",
    constructionStart: "Expected early 2026",
    image: "/mntsom.webp",
    simage: "/montay.webp",
    timage: "/montsma.webp",
    developerLogo: "/original.png",
    bedrooms: "1 - 3 Beds",
    price: "1.9M AED (from)",
    delivery: "Q3 2029",
    salesStart: "N/A",
    href: "/projects/montiva-emaar-green-gate",
    describ: "Modern Emaar tower in Dubai Creek Harbour (Green Gate) with strong community planning and creek-area growth potential.",
    describb: "Solid mid-range entry for buyers who want Creek Harbour branding without ultra-luxury pricing.",
  },

  {
    id: "3",
    title: "Damac Islands Phase 2",
    location: "Dubai, Dubai Land, Damac Islands 2",
    developerName: "Damac Properties",
    announcement: "Expected 2025",
    bookingStart: "Expected late 2025",
    constructionStart: "Expected early 2026",
    image: "/iland.webp",
    simage: "/iland2.webp",
    timage: "/iland3.webp",
    developerLogo: "https://new-projects-media.propertyfinder.com/developer/1063a07c-d94f-496b-9a24-5ea7409fe3d1/logo/image/O3p2VHWzQX9-Duzqi1vbOjp2tSlHIwJ1sjRjvTA7h68=/original.png",
    bedrooms: "Townhouses & Villas",
    price: "2.8M AED (from)",
    delivery: "Q2 2030",
    salesStart: "N/A",
    href: "/projects/damac-islands-phase-2",
    describ: "Island-themed community offering premium townhouses and villas with a resort-style positioning.",
    describb: "Best for buyers who want a lifestyle community and payment-plan driven purchase structure.",
  },

  {
    id: "4",
    title: "VOXA by Pantheon",
    location: "Dubai, Jumeirah Village Triangle",
    developerName: "Pantheon Development",
    announcement: "Expected 2025",
    bookingStart: "Expected late 2025",
    constructionStart: "Expected early 2026",

    image: "/voxavox.webp",
    simage: "/voxa.webp",
    timage: "/voxaf.jpg",
    developerLogo: "https://new-projects-media.propertyfinder.com/developer/1063a07c-d94f-496b-9a24-5ea7409fe3d1/logo/image/O3p2VHWzQX9-Duzqi1vbOjp2tSlHIwJ1sjRjvTA7h68=/original.png",
    bedrooms: "Studio - 4 Beds",
    price: "639,000 AED (from)",
    delivery: "Q3 2028",
    salesStart: "N/A",
    href: "/projects/voxa-by-pantheon",
    describ: "Boutique-style development in JVT with studio + 1BR options popular for entry investors.",
    describb: "Strong for rental-yield focus buyers targeting JVT demand and affordable ticket sizes.",
  },

  {
    id: "5",
    title: "Auresta Tower (Tiger)",
    location: "Dubai, Jumeirah Village Circle (District 11)",
    developerName: "Tiger Properties",
    announcement: "Expected 2025",
    bookingStart: "Expected late 2025",
    constructionStart: "Expected early 2026",

    image: "/aorst.webp",
    simage: "/aursta.webp",
    timage: "/aurtsa.webp",

    developerLogo: "/tiger.webp",
    bedrooms: "Studio - 3 Beds",
    price: "755,000 AED (from)",
    delivery: "Q4 2028",
    salesStart: "N/A",
    href: "/projects/auresta-tower-jvc",
    describ: "High-rise tower in JVC with studio/1BR options designed for urban living and investor demand.",
    describb: "Good option if you want JVC entry pricing and steady rental demand in a busy community.",
  },
  {
    id: "6",
    title: "Shahrukhz by Danube",
    location: "Dubai, Sheikh Zayed Road",
    developerName: "Danube Properties",
    image: "/dano.webp",
    simage: "/dana.webp",
    timage: "/daona.webp",
    developerLogo:"/OIP.jfif",
    bedrooms: "Office Units (Commercial)",
    price: "AED 1.9M (from)",
    delivery: "2029",
    salesStart: "N/A",
    href: "/projects/shahrukhz-by-danube",
    describ:
      "Premium commercial tower on Sheikh Zayed Road positioned for visibility, access, and corporate demand.",
    describb:
      "Strong fit for commercial investors and businesses seeking a landmark address and long-term value.",
  },
  {
    id: "7",
    title: "Sobha Siniya Island",
    location: "umm al quwain",
    image: "/seny.png",
        simage: "/senya.png",
        timage: "/syno.png",
   developerName: "Sobha Realty" , 
    developerLogo: "/New SOBHA Logo black.png",
    bedrooms: "5 - 6 Beds",
    price: "18M AED",
    delivery: "Q2 2027",
    salesStart: "1 Aug 2024",
     href: "/projects/Sobha Siniya Island",
     describ:"Sobha Real Estate LLC's latest luxury community project, Sobha Siniya Island is nestled in the calm and picturesque Umm Al Quwain. This luxury development is poised to redefine affluent living with its exquisite architecture, superb location, and a variety of world-class amenities."
  },
  {
    id: "8",
    title: "Albero",
    location: "Dubai, Dubai Creek Harbour (The Lagoons)",
    image: "/alber.jpg",
        simage: "/albera.jpg",
        timage: "/alberao.jpg",
developerName: "Emaar Properties",
developerLogo: "/original.png",
   bedrooms: "1 - 2 - 3 beds",
    price: "1.8M AED",
    delivery: "N/A",
    salesStart: "N/A",
     href: "/projects/Albero",
     describ:"Albero at Dubai Creek Harbour is the debut residential development in the Green Gate District by Emaar Properties, offering 1, 2, and 3-bedroom apartments. This nature-inspired community blends Dubai’s urban energy with waterfront serenity, creating a harmonious living experience."
  },  
  
  {
    id: "9",
    title: "The Horizon at Sobha Central",
    location: "Dubai, Jumeirah Lake Towers",
    image: "/horizon.jpg",
    simage: "/horiz.jpg",
    timage: "/horz.jpg",
    developerLogo: "/New SOBHA Logo black.png",
    bedrooms: "1 - 2 Beds",
    price: "1.7 M AED",
    delivery: "December 2029",
    salesStart: "1 Aug 2024",
     href: "/projects/The Horizon at Sobha Central",
     describ:"Rising gracefully along Dubai’s iconic Sheikh Zayed Road, The Horizon at Sobha Central is a visionary residential project by Sobha Realty, redefining the standards of luxury urban living in the city. Located in the heart of Jumeirah Lake Towers (JLT), this high-rise marvel seamlessly blends modern architecture with a vibrant, connected lifestyle. The development offers residents a rare combination of serene lake views, exceptional design, and unmatched convenience—all set within a dynamic, multicultural neighborhood. With its future-ready amenities, sustainable features, and strategic position, The Horizon is not just a place to live, but a place to thrive.",
      developerName: "Sobha Realty"
    },
  {
    id: "10",
    title: "Grand Polo Club and Resort",
    location: "Dubai, Dubai Investment Park (DIP)",
    image: "https://new-projects-media.propertyfinder.com/project/7f021336-9454-4ddd-bf7b-7b10df538e92/gallery/image/bDUStukh6kvUDWsLnNp09PE41SWA_fAxFHyH_-FRKKA=/medium.webp",
        simage: "https://new-projects-media.propertyfinder.com/project/7f021336-9454-4ddd-bf7b-7b10df538e92/gallery/image/bDUStukh6kvUDWsLnNp09PE41SWA_fAxFHyH_-FRKKA=/medium.webp",
        timage: "https://new-projects-media.propertyfinder.com/project/7f021336-9454-4ddd-bf7b-7b10df538e92/gallery/image/bDUStukh6kvUDWsLnNp09PE41SWA_fAxFHyH_-FRKKA=/medium.webp",
    developerName: "Emaar Properties" ,
 developerLogo: "/original.png",
  bedrooms: "3 - 5 Beds",
    price: "5.7M AED",
    delivery: "Q2 2029",
    salesStart: "1 Apr 2025",
    href: "/projects/grand-polo-club-and-resort",
    describ:"Emaar Properties, a name synonymous with luxury and excellence, is pleased to present its newest project, Grand Polo Club and Resort. This elite resort project is set to be built in Dubai Investment Park 2 (DIP 2), near the stunning Oasis, and promises to redefine luxury living in Dubai."

  },

  {
    id: "11",
    title: "Skyvue Spectra",
    developerName: "Sobha Realty" ,
    location: "Dubai, Bukadra, Sobha Hartland II",
    image: "https://new-projects-media.propertyfinder.com/project/e3d2776c-0712-4b51-95e3-3849919cd6ea/gallery/image/qs2w4MbAVwDwVW1I_9GkTANyY1fNfKklWvUr7BMeoE4=/medium.webp",
    simage: "https://new-projects-media.propertyfinder.com/project/e3d2776c-0712-4b51-95e3-3849919cd6ea/gallery/image/qs2w4MbAVwDwVW1I_9GkTANyY1fNfKklWvUr7BMeoE4=/medium.webp",
    timage: "https://new-projects-media.propertyfinder.com/project/e3d2776c-0712-4b51-95e3-3849919cd6ea/gallery/image/qs2w4MbAVwDwVW1I_9GkTANyY1fNfKklWvUr7BMeoE4=/medium.webp",
    developerLogo: "/New SOBHA Logo black.png",
    bedrooms: "1 - 3 Beds",
    price: "1,700,000 AED (from)",
    delivery: "Q1 2029",
    salesStart: "N/A",
    href: "/projects/Skyvue Spectra",
    describ:
      "Skyvue Spectra is an off-plan residential tower in Sobha Hartland II offering modern apartments with community views and strong connectivity to central Dubai.",
    describb:
      "A lifestyle-focused development with curated amenities, designed for families and investors seeking long-term value."
  },

  {
    id: "12",
    title: "Creek Bay",
    location: "Dubai, Dubai Creek Harbour (The Lagoons)",
    developerName: "Emaar Properties" ,
    image: "https://new-projects-media.propertyfinder.com/project/e57c8538-d93d-4cf5-a27a-f19bf42682c7/gallery/image/g_yd-gPAd_AWLLn7mBNIdhgGoq4-7ndJOuAe7BGA6cg=/medium.webp",
    simage: "https://new-projects-media.propertyfinder.com/project/e57c8538-d93d-4cf5-a27a-f19bf42682c7/gallery/image/g_yd-gPAd_AWLLn7mBNIdhgGoq4-7ndJOuAe7BGA6cg=/medium.webp",
    timage: "https://new-projects-media.propertyfinder.com/project/e57c8538-d93d-4cf5-a27a-f19bf42682c7/gallery/image/g_yd-gPAd_AWLLn7mBNIdhgGoq4-7ndJOuAe7BGA6cg=/medium.webp",
    developerLogo: "/original.png",
    bedrooms: "1 - 3 Beds",
    price: "2,530,000 AED (from)",
    delivery: "Q2 2030",
    salesStart: "N/A",
    href: "/projects/Creek Bay",
    describ:
      "Creek Bay is a waterfront community project at Dubai Creek Harbour with residential apartments and promenade-style living.",
    describb:
      "Ideal for buyers looking for water views, modern master planning, and proximity to key Dubai destinations."
  },

  {
    id: "13",
    title: "Samana Hills South Phase 3",
    location: "Dubai, Dubai Industrial City, Samana Hills South",
    developerName: "Samana Developers" ,
    image: "https://new-projects-media.propertyfinder.com/project/daa6b40f-cc91-4613-9fd9-e9e844c6a08c/gallery/image/8uxMK-zhLTQCfIGRG4FkhCFrX6XHJBbpRdmNS0uOtIo=/medium.webp",
    simage: "https://new-projects-media.propertyfinder.com/project/daa6b40f-cc91-4613-9fd9-e9e844c6a08c/gallery/image/8uxMK-zhLTQCfIGRG4FkhCFrX6XHJBbpRdmNS0uOtIo=/medium.webp",
    timage: "https://new-projects-media.propertyfinder.com/project/daa6b40f-cc91-4613-9fd9-e9e844c6a08c/gallery/image/8uxMK-zhLTQCfIGRG4FkhCFrX6XHJBbpRdmNS0uOtIo=/medium.webp",
    developerLogo: "/samanadev.png",
    bedrooms: "Studio, 1 - 2 Beds",
    price: "987,778 AED (from)",
    delivery: "Q4 2028",
    salesStart: "N/A",
    href: "/projects/Samana Hills South Phase 3",
    describ:
      "Samana Hills South Phase 3 offers studios and apartments in Dubai Industrial City with a modern mid-rise design and lifestyle amenities.",
    describb:
      "A value-driven entry point for investors seeking newer communities with long-term growth potential."
  },

  {
    id: "14",
    title: "Golf Hillside",
    location: "Dubai, Dubai Hills Estate",
    developerName: "Emaar Properties" ,
    image: "https://new-projects-media.propertyfinder.com/project/95b2c926-61cd-4d05-93fc-b21071762d9b/gallery/image/H0aj4WhnEBrEH2RdUo8HYrPoiJd_BBjaOg5mWnsErFQ=/medium.webp",
    simage: "https://new-projects-media.propertyfinder.com/project/95b2c926-61cd-4d05-93fc-b21071762d9b/gallery/image/H0aj4WhnEBrEH2RdUo8HYrPoiJd_BBjaOg5mWnsErFQ=/medium.webp",
    timage: "https://new-projects-media.propertyfinder.com/project/95b2c926-61cd-4d05-93fc-b21071762d9b/gallery/image/H0aj4WhnEBrEH2RdUo8HYrPoiJd_BBjaOg5mWnsErFQ=/medium.webp",
developerLogo: "/original.png",
bedrooms: "1 - 3 Beds",
    price: "2,816,888 AED (from)",
    delivery: "Q4 2028",
    salesStart: "N/A",
    href: "/projects/Golf Hillside",
    describ:
      "Golf Hillside is an off-plan apartment development in Dubai Hills Estate focused on green living, walkability, and premium community infrastructure.",
    describb:
      "A strong option for end-users who want parks, retail access, and a polished master-planned environment."
  },

  {
    id: "15",
    title: "Golf Meadow",
    location: "Dubai, Dubai South (Dubai World Central), EMAAR South",
    developerName: "Emaar Properties" ,
    image: "https://new-projects-media.propertyfinder.com/project/e1a77fbb-7139-4a07-8572-281d7d80bd8f/gallery/image/-b4WtEC_q3HhSXpI5p1Ru3GLuuXUOCk9_14mA6AwmSg=/medium.webp",
    simage: "https://new-projects-media.propertyfinder.com/project/e1a77fbb-7139-4a07-8572-281d7d80bd8f/gallery/image/-b4WtEC_q3HhSXpI5p1Ru3GLuuXUOCk9_14mA6AwmSg=/medium.webp",
    timage: "https://new-projects-media.propertyfinder.com/project/e1a77fbb-7139-4a07-8572-281d7d80bd8f/gallery/image/-b4WtEC_q3HhSXpI5p1Ru3GLuuXUOCk9_14mA6AwmSg=/medium.webp",
   developerLogo: "/original.png",
    bedrooms: "1 - 3 Beds",
    price: "3,045,888 AED (from)",
    delivery: "Q3 2029",
    salesStart: "N/A",
    href: "/projects/Golf Meadow",
    describ:
      "Golf Meadow in Emaar South offers modern residences positioned for long-term growth near Dubai South’s strategic development zones.",
    describb:
      "Designed as a lifestyle community with open spaces, family amenities, and convenient connectivity."
  },

  {
    id: "16",
    title: "Altan",
    location: "Dubai, Dubai Creek Harbour (The Lagoons)",
    developerName: "Emaar Properties" ,
    image: "https://new-projects-media.propertyfinder.com/project/1719d912-0e4a-4137-b018-4a1051705184/gallery/image/zeuTnh3O7eSY8suOc9rgb-nR8Vyc4yOJ7imrLkhwoIc=/medium.webp",
    simage: "https://new-projects-media.propertyfinder.com/project/1719d912-0e4a-4137-b018-4a1051705184/gallery/image/zeuTnh3O7eSY8suOc9rgb-nR8Vyc4yOJ7imrLkhwoIc=/medium.webp",
    timage: "https://new-projects-media.propertyfinder.com/project/1719d912-0e4a-4137-b018-4a1051705184/gallery/image/zeuTnh3O7eSY8suOc9rgb-nR8Vyc4yOJ7imrLkhwoIc=/medium.webp",
developerLogo: "/original.png",
 bedrooms: "1 - 3 Beds",
    price: "3,270,888 AED (from)",
    delivery: "Q3 2029",
    salesStart: "N/A",
    href: "/projects/Altan",
    describ:
      "Altan is a new residential release at Dubai Creek Harbour offering a modern urban waterfront lifestyle.",
    describb:
      "Attractive for buyers who want strong branding, marina vibe, and long-term capital appreciation potential."
  },

  {
    id: "17",
    title: "City Walk Crestlane Phase 5",
    location: "Dubai, City Walk",
    developerName: "Meraas" ,
    image: "https://new-projects-media.propertyfinder.com/project/d7356e52-a954-4ba1-8343-722be388feb7/gallery/image/aYB_etCJyr7pX-7qmpUv5nurwArnoklSxbR2twSNBJA=/medium.webp",
    simage: "https://new-projects-media.propertyfinder.com/project/d7356e52-a954-4ba1-8343-722be388feb7/gallery/image/aYB_etCJyr7pX-7qmpUv5nurwArnoklSxbR2twSNBJA=/medium.webp",
    timage: "https://new-projects-media.propertyfinder.com/project/d7356e52-a954-4ba1-8343-722be388feb7/gallery/image/aYB_etCJyr7pX-7qmpUv5nurwArnoklSxbR2twSNBJA=/medium.webp",
    developerLogo: "https://new-projects-media.propertyfinder.com/developer/831c8b0f-8adb-4fa5-94e9-0b123aa91a1a/logo/image/Khm513Li-0EP7_xCCxbyA3QlHudwwiTkvOG5Rz5KI1Y=/original.png",
    bedrooms: "1 - 4 Beds",
    price: "2,800,000 AED (from)",
    delivery: "Q2 2030",
    salesStart: "N/A",
    href: "/projects/City Walk Crestlane Phase 5",
    describ:
      "Crestlane Phase 5 is a premium City Walk address combining modern architecture with an urban lifestyle location close to key Dubai landmarks.",
    describb:
      "Ideal for buyers wanting an inner-city community feel with upscale finishes and walkable amenities."
  },
  {
  id: "18",
  title: "Ramada Residences by Wyndham",
  location: "Dubai, Al Jaddaf",
  developerName: "BNW Developments",
  announcement: "Oct 3, 2025",
  bookingStart: "Oct 2025",
  constructionStart: "N/A",
  delivery: "Q1 2026",

  image: "https://bnw.ae/_next/image?q=60&url=%2F_next%2Fstatic%2Fmedia%2FbannerDesktop2.df2e4f32.jpg&w=3840",
  simage: "https://bnw.ae/_next/image?q=75&url=%2F_next%2Fstatic%2Fmedia%2Fgallery7.07469e14.jpg&w=3840",
  timage: "https://bnw.ae/_next/image?q=75&url=%2F_next%2Fstatic%2Fmedia%2Fgallery2.fa354617.jpg&w=3840",
  developerLogo: "/bww.jfif",

  bedrooms: "1 - 2 Beds",
  price: "1.85M AED (from)",
  salesStart: "Now Selling",
  href: "/projects/ramada-residences-by-wyndham-al-jaddaf",

  describ:
    "Prestigious fully furnished 1 & 2-bedroom residences in Al Jaddaf, built around BNW’s ‘Architecture of Belonging’—modern luxury with smart space planning, natural light, and practical layouts (B+G+Podium+11).",
  describb:
    "Premium amenities include an open-air pool with cabanas, gym, Zen garden, kids’ area, residents’ lounge, yoga/meditation zone, BBQ area, open-air theatre, concierge, and EV charging—plus strong connectivity to key Dubai landmarks."
}
,

  {
    id: "19",
    title: "Damac Riverside Views - Marine 4",
    location: "Dubai, Dubai Investment Park 2 (DIP 2)",
    developerName: "DAMAC Properties",
    image: "https://new-projects-media.propertyfinder.com/project/d74d61c7-85be-499e-9cd5-26012139ee93/gallery/image/3f6rAS33d0N-qpKKENyQn67PKSGxnW6cl_D6oO8sW8w=/medium.webp",
    simage: "https://new-projects-media.propertyfinder.com/project/d74d61c7-85be-499e-9cd5-26012139ee93/gallery/image/3f6rAS33d0N-qpKKENyQn67PKSGxnW6cl_D6oO8sW8w=/medium.webp",
    timage: "https://new-projects-media.propertyfinder.com/project/d74d61c7-85be-499e-9cd5-26012139ee93/gallery/image/3f6rAS33d0N-qpKKENyQn67PKSGxnW6cl_D6oO8sW8w=/medium.webp",
    developerLogo: "https://new-projects-media.propertyfinder.com/developer/1063a07c-d94f-496b-9a24-5ea7409fe3d1/logo/image/O3p2VHWzQX9-Duzqi1vbOjp2tSlHIwJ1sjRjvTA7h68=/original.png",
    bedrooms: "N/A",
    price: "1,331,000 AED (from)",
    delivery: "Q1 2029",
    salesStart: "N/A",
    href: "/projects/Damac Riverside Views - Marine 4",
    describ:
      "Marine 4 is another Riverside Views release positioned in DIP 2 with contemporary architecture and community amenities.",
    describb:
      "A good fit for buyers who want a newer planned community with a modern lifestyle theme."
  },

  {
    id: "20",
    title: "The Element at Sobha One",
    developerName: "Sobha Realty" ,
    location: "Dubai, Mohammed Bin Rashid City, Sobha Hartland",
    image: "https://new-projects-media.propertyfinder.com/project/50a6d69c-f554-431f-a897-800275dd9209/gallery/image/2Y--A6TTPBvj1AB6MPymffWh5wSzslmZH_Nf3nk0DHI=/medium.webp",
    simage: "https://new-projects-media.propertyfinder.com/project/50a6d69c-f554-431f-a897-800275dd9209/gallery/image/2Y--A6TTPBvj1AB6MPymffWh5wSzslmZH_Nf3nk0DHI=/medium.webp",
    timage: "https://new-projects-media.propertyfinder.com/project/50a6d69c-f554-431f-a897-800275dd9209/gallery/image/2Y--A6TTPBvj1AB6MPymffWh5wSzslmZH_Nf3nk0DHI=/medium.webp",
    developerLogo: "/New SOBHA Logo black.png",
    bedrooms: "1 - 4 Beds",
    price: "1,820,000 AED (from)",
    delivery: "Q4 2029",
    salesStart: "N/A",
    href: "/projects/The Element at Sobha One",
    describ:
      "The Element at Sobha One is a high-rise residential project in MBR City offering premium apartments and a central Dubai location.",
    describb:
      "Designed for modern living with access to key areas, landscaped surroundings, and signature Sobha finishes."
  },
    {
    id: "21",
    title: "Eden House Dubai Hills",
    location: "Dubai, Dubai Hills Estate",
    image: "https://new-projects-media.propertyfinder.com/project/578bdec2-92d4-4e8e-ba68-637bda60ce52/gallery/image/rsSxbUb6rhQ10tBi1zoo7el9mL41sezm6Bd9pXtN11k=/medium.webp",
    simage:"https://new-projects-media.propertyfinder.com/project/578bdec2-92d4-4e8e-ba68-637bda60ce52/gallery/image/v5IATe9NUVk_jpNqRZ6M7tLwz_DXJgTJAfh1wRLXpzg=/medium.webp",
    timage:"https://new-projects-media.propertyfinder.com/project/578bdec2-92d4-4e8e-ba68-637bda60ce52/master_plan/image/WE4J3WFIXjkax5rgJdRKtRCaxu6ymVeTlQGhExD1mhc=/medium.webp",
    developerLogo: "https://new-projects-media.propertyfinder.com/developer/2269ee70-991e-466a-b9dc-4156967cad11/logo/image/ojJKskmcrFI5CHRVNI7vOoWHa1gOsMVEUmW2uJ_V80g=/original.png",
    bedrooms: "5 - 6 Beds",
    developerName: "H&H Development",
    price: "18M AED",
    delivery: "Q2 2027",
    salesStart: "1 Aug 2024",
    href: "/projects/Eden House Dubai Hills",
    describ: "Welcome to Eden House Dubai, an exceptional residential community introduced by H&H Development. Situated within the prestigious Dubai Hills Estate, this project epitomizes modern living in a natural setting, promising an unparalleled lifestyle experience. Collaborating with world-renowned Hopkins Architects, Eden House Dubai Hills presents a luxurious array of 32 villas, each embodying the essence of organic architecture.",
  describb:"Nestled in the heart of Dubai Hills Estate, Eden House Dubai Hills enjoys a strategic location that guarantees connectivity and convenience. The area is known for its lush greenery and expansive landscapes, providing residents with a tranquil environment while remaining close to the city's pulse."
  },
  {
    id: "22",
    title: "Jumeirah Residences Emirates Towers",
    location: "Dubai, Sheikh Zayed Road",
    image: "https://new-projects-media.propertyfinder.com/project/085d1528-dc12-41c7-9581-335397e1a570/gallery/image/pd6EkN3HFrIQZoBRLI7bhvDhySCZ_DCt8fZi7TMrtD0=/medium.webp",
     simage:"https://new-projects-media.propertyfinder.com/project/085d1528-dc12-41c7-9581-335397e1a570/gallery/image/pd6EkN3HFrIQZoBRLI7bhvDhySCZ_DCt8fZi7TMrtD0=/medium.webp",
    timage:"https://new-projects-media.propertyfinder.com/project/085d1528-dc12-41c7-9581-335397e1a570/gallery/image/pd6EkN3HFrIQZoBRLI7bhvDhySCZ_DCt8fZi7TMrtD0=/medium.webp",
 developerName: "Meraas",
    developerLogo: "https://new-projects-media.propertyfinder.com/developer/831c8b0f-8adb-4fa5-94e9-0b123aa91a1a/logo/image/Khm513Li-0EP7_xCCxbyA3QlHudwwiTkvOG5Rz5KI1Y=/original.png",
    bedrooms: "1 - 4 Beds",
    price: "3.5M AED",
    delivery: "August 2030",
    salesStart: "1 Aug 2024",
    href: "/projects/Jumeirah Residences Emirates Towers",
    describ:"Rising along the iconic Sheikh Zayed Road, Jumeirah Residences Emirates Towers is set to become a new symbol of architectural brilliance and elevated living in the heart of Dubai. Developed by Meraas Holding in collaboration with Jumeirah Hotel, this exceptional project blends hospitality excellence with residential luxury. Offering panoramic skyline views, cutting-edge design, and an unbeatable location near the Museum of the Future and DIFC, this landmark development is tailored for global citizens who value sophistication, comfort, and connectivity in equal measure."
  },
  {
    id: "23",
    title: "Avra and Aurora",
    location: "Dubai, Dubai Hills Estate",
    image: "https://new-projects-media.propertyfinder.com/project/1c6b87b0-a0fe-4ffd-bf2b-016f110376f7/gallery/image/6LT0QqlkoAyczInzBXBV-B-TDw4kJtUM5jTYRwUcq8k=/medium.webp",
     simage: "https://new-projects-media.propertyfinder.com/project/1c6b87b0-a0fe-4ffd-bf2b-016f110376f7/gallery/image/6LT0QqlkoAyczInzBXBV-B-TDw4kJtUM5jTYRwUcq8k=/medium.webp",
      timage: "https://new-projects-media.propertyfinder.com/project/1c6b87b0-a0fe-4ffd-bf2b-016f110376f7/gallery/image/6LT0QqlkoAyczInzBXBV-B-TDw4kJtUM5jTYRwUcq8k=/medium.webp",
developerName: "H&H Development",
    developerLogo: "https://new-projects-media.propertyfinder.com/developer/2269ee70-991e-466a-b9dc-4156967cad11/logo/image/ojJKskmcrFI5CHRVNI7vOoWHa1gOsMVEUmW2uJ_V80g=/original.png",
    bedrooms: "5 Beds",
    price: "44M AED",
    delivery: "June 2028",
    salesStart: "N/A",
    href: "/projects/avra-and-aurora",
    describ:"Within the tranquil Eden Hills community of Dubai Hills Estate, H&H Development's Avra and Aurora redefine what it means to live in luxury. This exclusive collection of ultra-luxury residences, which feature French-inspired architectural genius by Caprini & Pellerin, is the pinnacle of sophistication, peace, and creativity. For individuals looking for tranquility and prestige in Dubai's most upscale residential area, Avra and Aurora offer an unparalleled lifestyle offering with their expansive customized living areas, state-of-the-art smart technologies, and wellness-focused designs.for those seeking both prestige and peace in Dubai's most refined residential destination."
  },
  
  {
    id: "24",
    title: "The Wilds Moringa Mansions",
    location: "Dubai, Dubai Land, The Wilds by Aldar",
    image: "https://new-projects-media.propertyfinder.com/project/37059a6c-85db-4419-bb94-0d28479008b3/gallery/image/O6QzrfxzPr6FiW397QnqxolzXgatlv5GmeGP7vLCQdk=/medium.webp",
        simage: "https://new-projects-media.propertyfinder.com/project/37059a6c-85db-4419-bb94-0d28479008b3/gallery/image/O6QzrfxzPr6FiW397QnqxolzXgatlv5GmeGP7vLCQdk=/medium.webp",
        timage: "https://new-projects-media.propertyfinder.com/project/37059a6c-85db-4419-bb94-0d28479008b3/gallery/image/O6QzrfxzPr6FiW397QnqxolzXgatlv5GmeGP7vLCQdk=/medium.webp",
    developerName: "Aldar" ,
    developerLogo: "https://new-projects-media.propertyfinder.com/developer/d0853b8e-c92f-4b7e-a4e2-a5b67955ba7d/logo/image/4EAQeGiiljC7AFMFwYJm8DDrbCI1Uqto4xE372zwJ8o=/original.png",
    bedrooms: "", // Not available in the given HTML
    price: "39M AED",
    delivery: "Q3 2029",
    salesStart: "", // Not available in the given HTML
    href: "/aldar-properties-pjsc/moringa-mansions",
    describ:"The Wilds – Moringa Mansions is a distinguished collection of ultra-luxurious 5 and 6-bedroom mansions located in the heart of Dubailand. Designed by the world-renowned Nabil Gholam Architects, these exceptional residences offer a perfect blend of architectural excellence and nature-infused living. Spread across expansive plots ranging from 15,182 to 19,411 sq. ft., each mansion features state-of-the-art smart home systems, bespoke interiors, and breathtaking views of Central Park. With a deep focus on sustainable design and wellness-centric services, Moringa Mansions is more than a home—it’s a sanctuary of modern elegance and conscious luxury."
  }, 
  {
    id: "25",
    title: "Sunset Bay phase 3 By Imtiaz",
    location: "Dubai, Deira, Dubai Islands, Sunset Bay 3",
    image: "https://new-projects-media.propertyfinder.com/project/c43fa289-9a9e-4bd2-a7d9-8f87ecc81bd8/gallery/image/IfZQ6txzoKO_fEyhAK4GAUBtg-dtlDkUSMvL-x6HnJg=/big.webp",
        simage: "https://new-projects-media.propertyfinder.com/project/37059a6c-85db-4419-bb94-0d28479008b3/gallery/image/O6QzrfxzPr6FiW397QnqxolzXgatlv5GmeGP7vLCQdk=/medium.webp",
        timage: "https://new-projects-media.propertyfinder.com/project/37059a6c-85db-4419-bb94-0d28479008b3/gallery/image/O6QzrfxzPr6FiW397QnqxolzXgatlv5GmeGP7vLCQdk=/medium.webp",
 developerName: "Imtiaz Developments",
    developerLogo: "https://new-projects-media.propertyfinder.com/developer/3fadc15f-708b-4d93-90bc-4aa9086d16f2/logo/image/LYPK0EVx4_03jTZaAXVs0uzJmaEcb8ZHyQCtXsh-VwQ=/original.png",
    bedrooms: "1 - 3 Beds",
    price: "1.9M Aed",
    delivery: "March 2027",
    salesStart: "March 20, 2025",
     href: "/projects/Sunset Bay phase 3 By Imtiaz",
     describ:"Sunset Bay Phase 3 by Imtiaz Developments is a prestigious waterfront project in Dubai Islands, designed to redefine luxury living. As part of the successful Sunset Bay series, this 11-story residential tower features contemporary architecture by Jouzy Consulting Engineers and offers breathtaking Arabian Gulf views."
  },
  {
    id: "26",
    title: "The Hillgate",
    location: "Dubai, Dubai Silicon Oasis",
    developerName: "Ellington Properties",

    image:
      "https://new-projects-media.propertyfinder.com/project/50a6d69c-f554-431f-a897-800275dd9209/gallery/image/2Y--A6TTPBvj1AB6MPymffWh5wSzslmZH_Nf3nk0DHI=/medium.webp",
    simage:
      "https://new-projects-media.propertyfinder.com/project/50a6d69c-f554-431f-a897-800275dd9209/gallery/image/2Y--A6TTPBvj1AB6MPymffWh5wSzslmZH_Nf3nk0DHI=/medium.webp",
    timage:
      "https://new-projects-media.propertyfinder.com/project/50a6d69c-f554-431f-a897-800275dd9209/gallery/image/2Y--A6TTPBvj1AB6MPymffWh5wSzslmZH_Nf3nk0DHI=/medium.webp",

developerLogo: "/New SOBHA Logo black.png",
    bedrooms: "Studio - 3 Beds",
    price: "850,000 AED (from)",
    delivery: "Q4 2027",
    href: "/projects/the-hillgate",

    describ:
      "Design-led residences by Ellington with modern interiors and strong rental demand.",
    describb:
      "Good mid-range option for investors targeting Silicon Oasis tech and academic community."
  },

  {
    id: "27",
    title: "Mercer House",
    location: "Dubai, Jumeirah Lake Towers (JLT)",
    developerName: "Ellington Properties",

    image:
      "https://new-projects-media.propertyfinder.com/project/085d1528-dc12-41c7-9581-335397e1a570/gallery/image/pd6EkN3HFrIQZoBRLI7bhvDhySCZ_DCt8fZi7TMrtD0=/medium.webp",
    simage:
      "https://new-projects-media.propertyfinder.com/project/085d1528-dc12-41c7-9581-335397e1a570/gallery/image/pd6EkN3HFrIQZoBRLI7bhvDhySCZ_DCt8fZi7TMrtD0=/medium.webp",
    timage:
      "https://new-projects-media.propertyfinder.com/project/085d1528-dc12-41c7-9581-335397e1a570/gallery/image/pd6EkN3HFrIQZoBRLI7bhvDhySCZ_DCt8fZi7TMrtD0=/medium.webp",
developerLogo: "/New SOBHA Logo black.png",
    bedrooms: "Studio - 4 Beds",
    price: "1,900,000 AED (from)",
    delivery: "Q3 2028",
    href: "/projects/mercer-house",

    describ:
      "Premium twin-tower development with resort-style amenities and luxury finishes.",
    describb:
      "Prime JLT lifestyle project close to Marina and Metro with strong capital appreciation."
  },

  {
    id: "28",
    title: "BAYZ 102",
    location: "Dubai, Business Bay",
    developerName: "Danube Properties",

    image:
      "/bayz.webp",
    simage:
      "/bayzz.webp",
    timage:
      "/bayzzz.webp",

    developerLogo:"/OIP.jfif",
    bedrooms: "1Bed - 3 Beds",
    price: "2,400,000 AED (from)",
    delivery: "Q4 2029",
    href: "/projects/bayz-102",

    describ:
      "102-storey landmark residential tower in Business Bay with furnished apartments.",
    describb:
      "Excellent for investors seeking Downtown proximity and strong rental returns."
  },
{
  id: "29",
  title: "Kanyon by Beyond",
  location: "Dubai, Dubai Maritime City",
  developerName: "Beyond",

  image:
    "/kanon.webp",

  simage:
    "/kanonn.webp",

  timage:
    "/kanonnn.webp",

  developerLogo:
    "https://new-projects-media.propertyfinder.com/developer/831c8b0f-8adb-4fa5-94e9-0b123aa91a1a/logo/image/Khm513Li-0EP7_xCCxbyA3QlHudwwiTkvOG5Rz5KI1Y=/original.png",

  bedrooms: "1 - 3 Beds",
  price: "2.4M AED (from)",
  delivery: "Q2 2029",
  salesStart: "N/A",

  href: "/projects/kanyon-by-beyond",

  describ:
    "Kanyon by Beyond is a waterfront residential project in Dubai Maritime City with premium 1–3 bedroom layouts and resort-style amenities.",

  describb:
    "Strong choice for buyers targeting future growth in Maritime City with a branded developer product."
}

,
  {
    id: "30",
    title: "Binghatti Sky Flame",
    location: "Dubai, JVC",
    developerName: "Binghatti",

    image:
      "/binghatti_one.webp",
    simage:
      "/binghatti_one.webp",
    timage:
      "/binghatti_one.webp",
 developerLogo:
      "https://new-projects-media.propertyfinder.com/developer/db16d589-88c5-4428-899b-db54b1d7ef7a/logo/image/R9cUN2yisO8tn7iOykZ1i_JjpbtuMvZjLYbLY7sV8fE%3D/original.png",

    bedrooms: "Studio - 2BR Royal Suite",
    price: "1,200,000 AED (from)",
    delivery: "TBA",
    salesStart: "5 Feb 2026 – 2:00 PM",
    href: "/projects/binghatti-sky-flame",

    describ:
      "EOI bookings now live with AED 20,000 reservation and a flexible 70:30 payment plan.",

    describb:
      "Up to 6% broker commission on bulk and cash deals. Ideal early launch investment opportunity."
  },

  {
    id: "31",
    title: "Binghatti Mercedes (Studio)",
    location: "Dubai, Meydan",
    developerName: "Binghatti",

    image:
      "/benz.jpg",
    simage:
      "/benz.jpg",
    timage:
      "/benz.jpg",
 developerLogo:
      "https://new-projects-media.propertyfinder.com/developer/db16d589-88c5-4428-899b-db54b1d7ef7a/logo/image/R9cUN2yisO8tn7iOykZ1i_JjpbtuMvZjLYbLY7sV8fE%3D/original.png",

    bedrooms: "Studio",
    price: "TBA",
    delivery: "TBA",
    salesStart: "TBA",
    href: "/projects/binghatti-mercedes-meydan",

    describ:
      "Premium branded studios in Meydan offering modern design and strong rental demand.",

    describb:
      "Affordable entry-level investment with excellent long-term appreciation potential."
  },
  


  {
    id: "34",
    title: "Artistry One Residences",
    location: "Dubai, Dubai Design District (d3)",
    developerName: "Select Group",
    image:
      "https://new-projects-media.propertyfinder.com/project/5c214948-5eae-42f9-a4d7-a53c3901778a/gallery/image/zfteh7F8IuLdvnm3GkneVYlE3oOxBSuC2zoLbH7VhYU%3D/big.webp",
    simage:
      "https://new-projects-media.propertyfinder.com/project/5c214948-5eae-42f9-a4d7-a53c3901778a/gallery/image/-G54xxZ42E0EyIT3j7UTFLKl7yOfmRVIN_--4zPb4fs%3D/medium.webp",
    timage:
      "https://new-projects-media.propertyfinder.com/project/5c214948-5eae-42f9-a4d7-a53c3901778a/master_plan/image/FwlzINQn5IA5pqP80kcMkXxAv3A0R7UbN3lXr8D1WOQ%3D/medium.webp",
    developerLogo:
      "/selectgr.png",
    bedrooms: "Apartment, Penthouse",
    price: "AED 2.2M (from)",
    delivery: "Q1 2029",
    salesStart: "N/A",
    announcement:"September 2025",
    href: "/projects/artistry-one-residences",
    describ:
      "Design-district luxury residences by Select Group with upscale positioning and modern layouts.",
    describb:
      "Solid for premium end-users and investors aiming for d3 growth and strong future resale.",
  },

  {
    id: "35",
    title: "Vivanti Residences",
    location: "Dubai, Jumeirah Village Circle (District 11)",
    developerName: "Meteora Developers",
    image:
      "https://new-projects-media.propertyfinder.com/project/18c88fa0-583b-4ce6-b4c6-1bcf0bf06207/gallery/image/E_1NNhjIFUxQfDWhJfmc1vZXQmwnVfnk9WEuHBeeM2c%3D/big.webp",
    simage:
      "https://new-projects-media.propertyfinder.com/project/18c88fa0-583b-4ce6-b4c6-1bcf0bf06207/master_plan/image/dm8LlqE-Q4hsmlSeH1gD1CLBmRzKOR_LiWZV0T_7yk4%3D/medium.webp",
    timage:
      "https://new-projects-media.propertyfinder.com/project/18c88fa0-583b-4ce6-b4c6-1bcf0bf06207/gallery/image/E_1NNhjIFUxQfDWhJfmc1vZXQmwnVfnk9WEuHBeeM2c%3D/big.webp",
    developerLogo:
      "/meter.webp",
    bedrooms: "Studio - 3 Beds",
    price: "AED 650,000 (from)",
    delivery: "Q3 2028",
    salesStart: "Jan 1, 2025",
    href: "/projects/vivanti-residences",
    describ:
      "Modern JVC living with a broad unit mix and entry pricing that fits both end-users and investors.",
    describb:
      "Good for rental yield strategies in JVC and buyers looking for mid-market growth potential.",
  },



]
;
// ✅ Replace EVERYTHING you pasted with this block (includes Handover filter)

// ============================
// ✅ HELPERS
// ============================

const parseBeds = (bedsStr) => {
  if (!bedsStr) return [];
  const nums = String(bedsStr).match(/\d+/g);
  return nums ? nums.map(Number) : [];
};

const parseHandoverYear = (deliveryStr) => {
  if (!deliveryStr) return null;

  const s = String(deliveryStr).toUpperCase();
  if (s.includes("TBA") || s.includes("N/A")) return null;

  const m = s.match(/\b(20\d{2})\b/);
  return m ? Number(m[1]) : null;
};

// extract clean area name from location
const extractArea = (loc) => {
  if (!loc) return "";
  const parts = loc.split(",").map((x) => x.trim());
  return parts.length > 1 ? parts[parts.length - 1] : parts[0];
};


// ============================
// ✅ COMPONENT
// ============================

const ProjectsList = () => {

  // -------------------------
  // Filters
  // -------------------------

  const [searchTerm, setSearchTerm] = useState("");
const [budget, setBudget] = useState(""); 
// مثال للقيم: "", "0-1000000", "1000000-1500000", "1500000-2000000", "2000000+"
  const [selectedBeds, setSelectedBeds] = useState("");
  const [handover, setHandover] = useState("");
const [activeIndex, setActiveIndex] = useState(-1);
const [openContact, setOpenContact] = useState(false);
const [selectedProject, setSelectedProject] = useState(null);
  // autocomplete UI
  const [searchOpen, setSearchOpen] = useState(false);


  // -------------------------
  // Currency
  // -------------------------

  const [currency, setCurrency] = useState("AED");
  const [fx, setFx] = useState({ AED: 1, USD: 0.2722, EUR: 0.25 });

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(
          "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/aed.json",
          { cache: "no-store" }
        );

        if (!res.ok) return;

        const data = await res.json();

        if (!cancelled) {
          setFx((p) => ({
            ...p,
            USD: data?.aed?.usd || p.USD,
            EUR: data?.aed?.eur || p.EUR,
          }));
        }
      } catch {}
    })();

    return () => (cancelled = true);
  }, []);

  const selectedToAed = (v) =>
    currency === "AED" ? v : v / (fx[currency] || 1);

  const aedToSelected = (v) =>
    currency === "AED" ? v : v * (fx[currency] || 1);


  // -------------------------
  // Areas list for autocomplete
  // -------------------------

  const allAreas = useMemo(() => {
    const set = new Set();

    projects.forEach((p) => {
      const a = extractArea(p.location);
      if (a) set.add(a);
    });

    return [...set].sort();
  }, []);


  // -------------------------
  // Suggestions (areas + titles)
  // -------------------------
const suggestions = useMemo(() => {
  const q = searchTerm.trim().toLowerCase();

  // ✅ لما يكون فاضي: اعرض default list
  if (!q) {
    const defaultAreas = allAreas.slice(0, 8).map((a) => ({
      type: "Area",
      value: a,
      label: a,
    }));

    const defaultProjects = projects.slice(0, 8).map((p) => ({
      type: "Project",
      value: p.title,
      label: p.title,
    }));

    // remove duplicates
    const seen = new Set();
    return [...defaultAreas, ...defaultProjects].filter((x) => {
      if (seen.has(x.value)) return false;
      seen.add(x.value);
      return true;
    });
  }

  const areaMatches = allAreas
    .filter((a) => a.toLowerCase().includes(q))
    .slice(0, 6)
    .map((a) => ({
      type: "Area",
      value: a,
      label: a,
    }));

  const projectMatches = projects
    .filter((p) => String(p.title || "").toLowerCase().includes(q))
    .slice(0, 6)
    .map((p) => ({
      type: "Project",
      value: p.title,
      label: p.title,
    }));

  const seen = new Set();
  return [...areaMatches, ...projectMatches].filter((x) => {
    if (seen.has(x.value)) return false;
    seen.add(x.value);
    return true;
  });
}, [searchTerm, allAreas]);


  // -------------------------
  // FILTERING
  // -------------------------

  const filteredProjects = useMemo(() => {
    const q = searchTerm.toLowerCase();

    return projects.filter((project) => {

      const title = project.title.toLowerCase();
      const location = project.location.toLowerCase();

      if (q && !(title.includes(q) || location.includes(q))) return false;

      // price


// budget
const priceAed = parsePriceAED(project.price);

if (budget && priceAed) {
  // budget stored in AED
  let minAed = 0;
  let maxAed = Infinity;

  if (budget.includes("+")) {
    // "2000000+"
    minAed = Number(budget.replace("+", "")) || 0;
  } else {
    // "1000000-1500000"
    const [minStr, maxStr] = budget.split("-");
    minAed = Number(minStr) || 0;
    maxAed = Number(maxStr) || Infinity;
  }

  // ⚠️ budget values are AED. Convert price to AED already, so compare directly.
  if (priceAed < minAed || priceAed > maxAed) return false;
}


      // beds
      if (selectedBeds) {
        const bedsArr = parseBeds(project.bedrooms);
        if (!bedsArr.includes(Number(selectedBeds))) return false;
      }

      // handover
      if (handover) {
        const y = parseHandoverYear(project.delivery);

        if (handover === "unknown" && y !== null) return false;
        if (handover === "2030+" && (y === null || y < 2030)) return false;
        if (!["unknown", "2030+"].includes(handover) && y !== Number(handover))
          return false;
      }

      return true;
    });
}, [searchTerm, budget, selectedBeds, handover, currency, fx]);



  // -------------------------
  // Pagination
  // -------------------------

  const INITIAL_COUNT = 9;
  const LOAD_STEP = 9;

  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  useEffect(() => {
    setVisibleCount(INITIAL_COUNT);
  }, [searchTerm, budget, selectedBeds, handover, currency]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const canLoadMore = visibleCount < filteredProjects.length;


  // -------------------------
  // USE IN JSX
  // -------------------------

  /*
  Search input props:

  onFocus={() => setSearchOpen(true)}
  onBlur={() => setTimeout(() => setSearchOpen(false), 120)}

  Suggestions:

  {searchOpen && suggestions.map(s => (
      <div onClick={()=>{setSearchTerm(s); setSearchOpen(false)}}>
        {s}
      </div>
  ))}
  */



 return (
  <section className={styles.projectsSection}>
    <div className={styles.wrap}>
      {/* Header */}
    <div className={styles.headRow}>
  <div>
    <h2 className={styles.title}>Dubai Premier Off-Plan Properties</h2>
    <p className={styles.subtitle}>
      Curated selection of new developments with exclusive payment plans — from
      affordable studios to ultra-luxury villas.
    </p>
  </div>


</div>

<div className={styles.badgesRow}>
  <div className={styles.badgeItem}>
    <ShieldCheck size={18} className={styles.badgeIcon} />
    <span className={styles.badgeText}>Trusted developers</span>
  </div>

  <div className={styles.badgeItem}>
    <TrendingUp size={18} className={styles.badgeIcon} />
    <span className={styles.badgeText}>High ROI potential</span>
  </div>

  <div className={styles.badgeItem}>
    <CalendarClock size={18} className={styles.badgeIcon} />
    <span className={styles.badgeText}>2026–2029 handover</span>
  </div>
    <div className="currencyWrap">
    <span className="currencyLabel">Currency</span>

    <div className="selectShell">
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="currencySelect"
        aria-label="Change currency"
      >
        <option value="AED">AED</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>

      <span className="chev" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path
            d="M6 8l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>

  
  </div>
</div>

      {/* Filters */}
      <div className={styles.filters}>
<div className={styles.searchWrap}>
  <div className={styles.searchAuto}>
    <input
      type="text"
      placeholder="Search by title or location"
      value={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value);
        setActiveIndex(-1);
        setSearchOpen(true);
      }}
      onFocus={() => {
        setSearchOpen(true);
        setActiveIndex(-1);
      }}
      onClick={() => {
        // ✅ لو ضغط عليه وهو فاضي، برضو افتح القائمة
        setSearchOpen(true);
      }}
      onBlur={() => setTimeout(() => setSearchOpen(false), 150)}
      onKeyDown={(e) => {
        if (!searchOpen || suggestions.length === 0) return;

        if (e.key === "ArrowDown") {
          e.preventDefault();
          setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1));
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          setActiveIndex((i) => Math.max(i - 1, 0));
        }
        if (e.key === "Enter") {
          if (activeIndex >= 0) {
            e.preventDefault();
            const chosen = suggestions[activeIndex];
            setSearchTerm(chosen.value);
            setSearchOpen(false);
          }
        }
        if (e.key === "Escape") setSearchOpen(false);
      }}
      className={styles.search}
    />

    {/* ✅ show dropdown even when empty */}
    {searchOpen && suggestions.length > 0 && (
      <div className={styles.suggestBox}>
        {suggestions.map((s, idx) => (
          <button
            key={`${s.type}-${s.value}-${idx}`}
            type="button"
            className={`${styles.suggestItem} ${
              idx === activeIndex ? styles.suggestActive : ""
            }`}
            onMouseDown={(e) => e.preventDefault()} // keeps focus
            onClick={() => {
              setSearchTerm(s.value);
              setSearchOpen(false);
            }}
          >
            <span className={styles.suggestBadge}>{s.type}</span>
            <span className={styles.suggestMain}>{s.label}</span>
          </button>
        ))}
      </div>
    )}
  </div>
</div>


<div className={styles.selectWrap}>
  <select
    value={budget}
    onChange={(e) => setBudget(e.target.value)}
    className={styles.select}
  >
  <option value="">All Budgets</option>
  <option value="0-1000000">Up to 1M</option>
  <option value="1000000-1500000">1M - 1.5M</option>
  <option value="1500000-2000000">1.5M - 2M</option>
  <option value="2000000-3000000">2M - 3M</option>
  <option value="3000000-5000000">3M - 5M</option>
  <option value="5000000+">5M+</option>
</select>
</div>
<div className={styles.selectWrap}>
        <select
          value={selectedBeds}
          onChange={(e) => setSelectedBeds(e.target.value)}
          className={styles.select}
        >
          <option value="">All Beds</option>
          <option value="1">Studio</option>
          <option value="2">1 Bed</option>
          <option value="3">2 Beds</option>
          <option value="4">3 Beds</option>
          <option value="5">4 Beds</option>
          <option value="6">5 Beds</option>
          <option value="7">Penthouse</option>
          <option value="8">Villa / Townhouse</option>       
          <option value="9">Commercial / Office</option> 
          <option value="10">Plot</option>  
        </select>
        </div>
        <div className={styles.selectWrap}>
<select
  value={handover}
  onChange={(e) => setHandover(e.target.value)}
  className={styles.select}
>
  <option value="">All Handover</option>
  <option value="2026">2026</option>
  <option value="2027">2027</option>
  <option value="2028">2028</option>
  <option value="2029">2029</option>
  <option value="2030+">2030+</option>
  <option value="unknown">TBA / N/A</option>
</select>
</div>
        <button
          type="button"
          className={styles.clearBtn}
          onClick={() => {
            setSearchTerm("");
            setBudget("");
            setSelectedBeds("");
            setHandover("");
          }}
        >
          Search
        </button>

      </div>
<div className={styles.featuredHeader}>
  <span className={styles.badge}>FEATURED</span>
  <h2 className={styles.title}>Premium Opportunities</h2>
</div>

      {/* Grid */}
      <div className={styles.projectGrid}>
        {visibleProjects.map((project) => (
          <Link key={project.id} href={project.href} passHref className={styles.cardLink}>
            <article className={styles.card}>
      <div className={styles.media}>
<Image
  src={project.image}
  alt={project.title}
  fill
  className={styles.image}
  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 33vw, 377px"
  priority={project.id === "1"}
  fetchPriority={project.id === "1" ? "high" : "auto"}
  unoptimized={typeof project.image === "string" && project.image.includes("new-projects-media.propertyfinder.com")}
/>

  {/* Top badges */}
  <div className={styles.badges}>
    <span className={styles.badge}>Off-plan</span>
    {project.delivery ? <span className={styles.badgeLight}>{project.delivery}</span> : null}
  </div>

  {/* Developer logo */}
  {project.developerLogo ? (
    <div className={styles.devBadge}>
     <Image
  src={project.developerLogo}
  alt="Developer"
  width={165}
  height={22}
  className={styles.devLogo}
  sizes="165px"
  unoptimized={typeof project.developerLogo === "string" && project.developerLogo.includes("new-projects-media.propertyfinder.com")}
/>
    </div>
  ) : null}
</div>

              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.meta}>{project.location}</p>

                <div className={styles.specRow}>
                  <span className={styles.pill}>{project.bedrooms || "N/A"}</span>
                  <span className={styles.price}>
  {(() => {
    const aed = parsePriceAED(project.price);
    if (!aed) return project.price || "TBA";
    const converted = aedToSelected(aed);
    const hasFrom = String(project.price || "").toLowerCase().includes("from");
    return `${formatMoney(converted, currency)}${hasFrom ? " (from)" : ""}`;
  })()}
</span>

                </div>

                <div className={styles.actions}>
<button
  type="button"
  className={styles.whatsapp} // keep class if you want same styling (or rename in CSS)
  onClick={(e) => {
    e.preventDefault(); // don't navigate
    setSelectedProject(project);
    setOpenContact(true);
  }}
>
  Request call back
</button>

                  <span className={styles.viewMore}>View details →</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
      <ContactFormModal
  isOpen={openContact}
  setOpen={setOpenContact}
  title={
    selectedProject
      ? `Request a call back — ${selectedProject.title}`
      : "Request a call back"
  }
  ContactType="RequestCallBack"
  onSuccess={() => {
    setOpenContact(false);
    setSelectedProject(null);
  }}
/>
      
{filteredProjects.length > 0 && (
  <div className={styles.loadMoreWrap}>
    <div className={styles.resultsCount}>
      Showing {Math.min(visibleCount, filteredProjects.length)} of {filteredProjects.length}
    </div>

    {canLoadMore && (
      <button
        type="button"
        className={styles.loadMoreBtn}
        onClick={() => setVisibleCount((v) => Math.min(v + LOAD_STEP, filteredProjects.length))}
      >
        Load more
      </button>
    )}
  </div>
)}


    </div>
  <style jsx>{`
      /* ===== Header row alignment (lux spacing) ===== */
      :global(.${styles.headRow}) {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 16px;
      }

      /* ===== Luxury currency control ===== */
      .currencyWrap {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .currencyLabel {
        font-size: 12px;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        font-weight: 700;
        color: rgba(15, 23, 42, 0.7);
        white-space: nowrap;
      }

      .selectShell {
        position: relative;
        display: inline-flex;
        align-items: center;

        border-radius: 14px;
        padding: 2px;

        /* soft luxury frame */
        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.9),
          rgba(255, 255, 255, 0.55)
        );

        border: 1px solid rgba(148, 163, 184, 0.35);
        box-shadow: 0 18px 38px rgba(2, 6, 23, 0.08);
        backdrop-filter: blur(10px);
      }

      .currencySelect {
        appearance: none;
        border: none;
        outline: none;
        background: transparent;

        padding: 12px 44px 12px 14px;
        min-width: 96px;

        border-radius: 12px;

        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;

        color: rgba(15, 23, 42, 0.92);
        cursor: pointer;

        transition: 0.2s ease;
      }

      .chev {
        position: absolute;
        right: 12px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: rgba(15, 23, 42, 0.6);
        pointer-events: none;
        transition: 0.2s ease;
      }

      .selectShell:hover {
        border-color: rgba(148, 163, 184, 0.55);
        box-shadow: 0 22px 46px rgba(2, 6, 23, 0.1);
      }

      .selectShell:hover .chev {
        color: rgba(15, 23, 42, 0.78);
        transform: translateY(0.5px);
      }

      .selectShell:focus-within {
        border-color: rgba(201, 169, 110, 0.55); /* subtle gold */
        box-shadow: 0 0 0 4px rgba(201, 169, 110, 0.16),
          0 24px 52px rgba(2, 6, 23, 0.12);
      }

      /* ===== Mobile ===== */
      @media (max-width: 768px) {
        :global(.${styles.headRow}) {
          align-items: flex-start;
          flex-direction: column;
          gap: 12px;
        }

        .currencyWrap {
          
          justify-content: flex-start;
        }

        .currencyLabel {
          display: none;
        }

        .selectShell {
          width: fit-content;
        }

        .currencySelect {
          padding: 11px 42px 11px 14px;
          min-width: 88px;
        }
      }
    `}</style>
  </section>
);

};

export default ProjectsList;


