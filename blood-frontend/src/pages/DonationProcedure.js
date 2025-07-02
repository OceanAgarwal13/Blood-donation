import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserCheck, FaStethoscope, FaTint, FaCoffee, FaCertificate } from 'react-icons/fa';

export default function DonationProcedure() {
  const [activeStep, setActiveStep] = useState(-1);

  const steps = [
    {
      icon: <FaUserCheck size={30} className="text-warning" />,
      title: '1. Registration',
      description:
        'Fill out a donor form online or on-site. Includes personal info, blood group, and consent.',
    },
    {
      icon: <FaStethoscope size={30} className="text-warning" />,
      title: '2. Health Screening',
      description:
        'Vitals and hemoglobin checked to ensure donor safety.',
    },
    {
      icon: <FaTint size={30} className="text-warning" />,
      title: '3. Blood Donation',
      description:
        '350–450 ml blood collected in 15–20 minutes using sterile equipment.',
    },
    {
      icon: <FaCoffee size={30} className="text-warning" />,
      title: '4. Rest & Refreshments',
      description:
        'Relax for 10–15 minutes with snacks to help body recover.',
    },
    {
      icon: <FaCertificate size={30} className="text-warning" />,
      title: '5. Certificate & Donor Card',
      description:
        'Receive a certificate and blood group donor card.',
    },
  ];

  // Animate cards one-by-one
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < steps.length) {
        setActiveStep((prev) => prev + 1);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 500); // Delay between each card

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="container mt-4 p-4"
      style={{
        backgroundColor: 'rgba(82, 4, 82, 0.62)',
        backdropFilter: 'blur(10px)',
        color: 'white',
        borderRadius: '1rem',
        boxShadow: '0 0 30px rgb(100, 4, 92)',
      }}
    >
      <h3 className="text-center mb-5 text-warning fw-bold">💉 Blood Donation Procedure 💉</h3>

      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, filter: 'blur(5px)' }}
          animate={{
            opacity: activeStep >= index ? 1 : 0.3,
            y: activeStep >= index ? 0 : 50,
            filter: activeStep === index ? 'blur(0px)' : activeStep > index ? 'blur(0px)' : 'blur(5px)',
          }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          style={{
            pointerEvents: activeStep >= index ? 'auto' : 'none',
            backgroundColor: 'rgba(32, 31, 26, 0.86)',
            borderLeft: '5px solid rgb(255, 193, 7)',
            borderRadius: '0.75rem',
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.62)',
            marginBottom: '1.5rem',
            padding: '1rem',
          }}
        >
          <div className="d-flex align-items-center mb-2">
            <div className="me-3">{step.icon}</div>
            <h5 className="m-0 text-light fw-bold">{step.title}</h5>
          </div>
          <p className="ms-4 text-light">{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
