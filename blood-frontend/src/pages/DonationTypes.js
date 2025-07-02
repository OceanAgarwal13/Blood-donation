import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DonationTypes() {
  const types = [
    {
      name: "Whole Blood",
      description:
        "Whole blood donation is the most common type. It's typically used for trauma patients and people undergoing surgery. The process takes about 8–10 minutes, and you can donate every 3 months.",
      img: "./images/donation1.png",
    },
    {
      name: "Platelet Donation",
      description:
        "Platelet donation is crucial for cancer patients, organ transplant recipients, and people with blood disorders. The process takes 1.5–2.5 hours and can be done every 7 days, up to 24 times a year.",
      img: "./images/donation2.png",
    },
    {
      name: "Plasma Donation",
      description:
        "Plasma is the liquid part of blood that carries cells and proteins. It's often used for burn, shock, or trauma patients. The donation takes about 1 hour and can be done every 28 days.",
      img: "./images/donation3.png",
    },
    {
      name: "Double Red Cell Donation",
      description:
        "This type of donation collects twice the red blood cells but returns your plasma and platelets. It's especially helpful for trauma and surgery patients. Takes around 30 minutes longer than whole blood and can be done every 4 months.",
      img: "./images/donation4.png",
    },
  ];

  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < types.length) {
      const timer = setTimeout(() => setStep(step + 1), 1500); // smoother delay
      return () => clearTimeout(timer);
    }
  }, [step]);

  const variants = {
    initial: { opacity: 0, scale: 0.8, filter: 'blur(5px)' },
    animate: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.9,
        ease: [0.6, 0.05, 0.01, 0.99], // smooth cubic bezier
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      filter: 'blur(4px)',
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  if (step < types.length) {
    const type = types[step];

    return (
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{
          backgroundColor: 'rgba(82, 4, 82, 0.9)',
          color: 'white',
          overflow: 'hidden',
        }}
      >
        <AnimatePresence>
  <div
    className="d-flex justify-content-center align-items-center vh-100"
    style={{
      backgroundColor: 'rgba(82, 4, 82, 0.9)',
      color: 'white',
      overflow: 'hidden',
    }}
  >
    <motion.div
      key={step}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      layout
      className="p-4 text-center"
      style={{
        backgroundColor: 'rgba(43, 42, 38, 0.96)',
        borderRadius: '1rem',
        boxShadow: '0 0 20px rgb(214, 166, 8)',
        width: '90%',
        maxWidth: '700px',
      }}
    >
      <img
        src={type.img}
        alt={type.name}
        style={{
          width: '100%',
          height: '300px',
          objectFit: 'cover',
          borderRadius: '1rem',
          marginBottom: '1rem',
        }}
      />
      <h2 className="text-warning">{type.name}</h2>
      <p className="mt-3">{type.description}</p>
    </motion.div>
  </div>
</AnimatePresence>
      </div>
    );
  }

  return (
    <div className="container mt-4 p-4"
      style={{
        backgroundColor: 'rgba(82, 4, 82, 0.62)',
        backdropFilter: 'blur(10px)',
        borderRadius: '1rem',
        boxShadow: '0 0 30px rgb(100, 4, 92)',
        color: 'white'
      }}
    >
      <h3 className="text-center mb-4 text-warning fw-bold">🩸 All Types of Blood Donation 🩸</h3>
      <div className="row">
        {types.map((type, i) => (
          <div key={i} className="col-md-6 mb-4">
            <div
              className="card h-100"
              style={{
                backgroundColor: 'rgba(43, 42, 38, 0.86)',
                border: '2px solid rgb(214, 166, 8)',
                borderRadius: '1rem',
                boxShadow: '0 0 10px rgb(214, 166, 8)'
              }}
            >
              <img
                src={type.img}
                alt={type.name}
                className="card-img-top"
                style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body text-light">
                <h5 className="card-title text-warning">{type.name}</h5>
                <p className="card-text">{type.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
