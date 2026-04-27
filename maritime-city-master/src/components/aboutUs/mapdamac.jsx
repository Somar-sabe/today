import React, { useState } from "react";
import Head from "next/head";

const locations = [
  {
    id: 1,
    name: "Dubai Sports City",
    time: "15 Minutes",
    image: "assets/images/sports-city.jpg",
    address: "Dubai Sports City, Dubai",
  },
  {
    id: 2,
    name: "Motor City",
    time: "15 Minutes",
    image: "assets/images/motor-city.jpg",
    address: "Motor City, Dubai",
  },
  {
    id: 3,
    name: "Damac Hills",
    time: "15 Minutes",
    image: "assets/images/damac-hills.jpg",
    address: "Damac Hills, Dubai",
  },
  {
    id: 4,
    name: "Expo 2020 Venue",
    time: "20 Minutes",
    image: "assets/images/expo.jpg",
    address: "Expo 2020, Dubai",
  },
  {
    id: 5,
    name: "Al Maktoum International Airport",
    time: "23 Minutes",
    image: "assets/images/maktoum.jpg",
    address: "Al Maktoum Intl Airport, Dubai",
  },
];

const LocationMapSection = () => {
  const [activeLocationId, setActiveLocationId] = useState(1);

  const activeLocation = locations.find(
    (loc) => loc.id === activeLocationId
  );

  return (
    <section id="location-map" className="wow animated">
      <Head>
        <link rel="stylesheet" href="/assets/css/kh.css" />
      </Head>

      <div className="section-head container">
        <span>MAP</span>
        <h2>Nearby Landmarks</h2>
      </div>

      <div className="container">
        {/* Sidebar with location buttons */}
        <div className="sidebar">
          <p>Nearby Places</p>
          <nav>Damac Islands</nav>
          <div id="location-buttons">
            {locations.map((loc) => (
              <button
                key={loc.id}
                className={`location-btn ${
                  loc.id === activeLocationId ? "active" : ""
                }`}
                onClick={() => setActiveLocationId(loc.id)}
              >
                <div className="btn-content">
                  <span className="location-time">{loc.time}</span>
                  <span className="location-name">{loc.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Map Card */}
        <div id="map" className="mapboxgl-map">
          <div id="location-card" className="location-card">
            <img
              id="card-image"
              src={activeLocation.image}
              alt={activeLocation.name}
              loading="lazy"
            />
            <div className="card-content">
              <h3 id="card-title">{activeLocation.name}</h3>
              <div id="card-address" className="address">
                {activeLocation.address}
              </div>
            </div>
          </div>

          {/* Map markers (static images for now) */}
          <div className="mapboxgl-canvas-container">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className={`custom-marker mapboxgl-marker mapboxgl-marker-anchor-center ${
                  loc.id === activeLocationId ? "active" : ""
                }`}
                aria-label="Map marker"
                role="img"
              >
                <img
                  src={loc.image}
                  alt={loc.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </div>
            ))}

            <div
              className="additional-custom-marker mapboxgl-marker mapboxgl-marker-anchor-center"
              style={{
                backgroundImage: "url('assets/images/pointer.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img
                src="assets/images/damac-islands-logo.svg"
                alt="Logo"
                className="additional-marker-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMapSection;
