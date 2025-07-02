import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../App.css';

export default function GalleryPage() {
  const photos = [
    { id: 1, title: "Blood Drive 2024", img: "./images/collage1.png" },
    { id: 2, title: "Volunteers in Action", img: "./images/collage2.png" },
    { id: 3, title: "Health Checkup Camp", img: "./images/collage3.png" },
    { id: 4, title: "Plasma Donation Awareness", img: "./images/collage4.png" },
    { id: 5, title: "NSS Camp Activities", img: "./images/collage5.png" },
    { id: 6, title: "Organizing Team", img: "./images/collage6.png" },
    { id: 7, title: "Donor Registration Desk", img: "./images/collage7.png" },
    { id: 8, title: "Student Volunteers", img: "./images/collage8.png" },
    { id: 9, title: "Medical Team in Action", img: "./images/collage9.png" },
    { id: 10, title: "Group Donation Photo", img: "./images/collage10.png" },
  ];

  return (
    <Container className="mt-4 mb-5">
      <h1 className="text-center text-warning mt-4 mb-5 fw-bold">📸 Gallery 📸</h1>

      <h3 className="text-white mb-5">🖼️ Event Photos 🖼️</h3>
      <div className="collage-grid mb-5">
        {photos.map((photo, index) => (
          <motion.div
            className="collage-item"
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px rgba(56, 47, 47, 0.4)",
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <img src={photo.img} alt={photo.title} className="collage-img" />
            <p className="text-center fw-semibold text-light mt-2">{photo.title}</p>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
