import React from "react";

const IslandSection = () => {
  const islands = [
    {
      id: 1,
      name: "Hawaii",
      description:
        "Vibrant villas with swaying palms, golden sunsets, and surf-inspired living.",
      image:
        "https://damacsislands.com/wp-content/uploads/2025/10/DAMAC-ISLANDS-Digital-Brochure-EN_TRIMMED-12-scaled.jpg",
    },
    {
      id: 2,
      name: "Bali",
      description:
        "Boho-Chic Townhouses: Serene gardens, flowing waterways, and peaceful tranquility.",
      image:
        "https://damacsislands.com/wp-content/uploads/2025/10/DAMAC-ISLANDS-Digital-Brochure-EN_TRIMMED-15-scaled.jpg",
    },
    {
      id: 3,
      name: "Maldives",
      description:
        "Overwater-inspired homes surrounded by turquoise lagoons and white sand beaches.",
      image:
        "https://damacsislands.com/wp-content/uploads/2025/10/DAMAC-ISLANDS-Digital-Brochure-EN_TRIMMED-14-scaled.jpg",
    },
    {
      id: 4,
      name: "Ibiza",
      description:
        "Party vibes and chic beachfront living inspired by the Mediterranean energy.",
      image:
        "https://damacsislands.com/wp-content/uploads/2025/10/DAMAC-ISLANDS-Digital-Brochure-EN_TRIMMED-13-scaled.jpg",
    },
    {
      id: 5,
      name: "Santorini",
      description:
        "Whitewashed elegance with azure domes, capturing the beauty of Greek architecture.",
      image:
        "https://damacsislands.com/wp-content/uploads/2025/10/DAMAC-ISLANDS-Digital-Brochure-EN_TRIMMED-11-scaled.jpg",
    },
    {
      id: 6,
      name: "Costa Brava",
      description:
        "Luxury villas inspired by Spain’s coastal charm, with scenic cliffs and golden bays.",
      image:
        "https://damacsislands.com/wp-content/uploads/2025/10/DAMAC-ISLANDS-Digital-Brochure-EN_TRIMMED-10-scaled.jpg",
    },
  ];

  return (
    <>
      <style>{`
        .islands-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }

        @media (min-width: 768px) {
          .islands-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .island-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .island-card:hover {
          transform: translateY(-6px);
        }

        .island-image {
          width: 100%;
          height: 50vh;
          border-bottom: 2px solid #eee;
        }

        .island-title {
          font-size: 1.6rem;
          margin: 1rem 0 0.5rem;
          color: #333;
        }

        .island-desc {
          font-size: 1rem;
          color: #555;
          padding: 0 1rem 1.5rem;
        }
      `}</style>

      <div className="islands-grid">
        {islands.map((island) => (
          <div className="island-card" key={island.id}>
            <h3 className="island-title">{island.name}</h3>
            <p className="island-desc">{island.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default IslandSection;
