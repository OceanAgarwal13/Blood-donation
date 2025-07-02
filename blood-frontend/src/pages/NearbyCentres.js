// components/NearbyCenters.js
import React from 'react';
import { motion } from 'framer-motion';
import centers from '../data/bloodCenters';

export default function NearbyCenters() {

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  };

  return (
    <div className="container mt-4 p-4"
      style={{
        backgroundColor: 'rgba(82, 4, 82, 0.62)',
        backdropFilter: 'blur(10px)',
        color: 'white',
        borderRadius: '1rem',
        boxShadow: '0 0 30px rgb(100, 4, 92)'
      }}
    >
      <h3 className="text-center mb-4 text-warning fw-bold">🏥 Nearest Blood Centres 🏥</h3>

      {Object.entries(centers).map(([city, list]) => (
        <div key={city} className="mb-5">
          <h3 className="text-white fw-bold mb-4 mt-4 pt-4 text-center">🌐 {city} 🌐</h3>
          <div className="row mt-4 mb-4">
            {list.map((c, i) => (
              <motion.div
                className="col-md-6 mb-4"
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <div className="card text-light h-100"
                  style={{
                    border: '1px solid #ffb700',
                    background: 'rgba(83, 82, 78, 0.67)',
                    boxShadow: '0 0 10px #ffb700',
                    borderRadius: '1.5rem'
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title text-warning">{c.name}</h5>
                    <p className="card-text">
                      <strong>📍 Address:</strong> {c.address}<br />
                      <strong>📞 Contact:</strong> {c.contact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
