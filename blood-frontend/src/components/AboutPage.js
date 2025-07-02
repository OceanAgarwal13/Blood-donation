import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-bootstrap';

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  };

  const sections = [
    {
      title: "🌐 Our Mission",
      content: "We aim to build a strong network of voluntary blood donors and streamline the donation process through technology. We believe in creating awareness, encouraging regular donation, and ensuring timely availability."
    },
    {
      title: "📱 Key Features",
      content: (
        <ul>
          <li>Register as a Donor or Receiver in seconds</li>
          <li>View nearby available donors instantly</li>
          <li>Emergency Request System</li>
          <li>Login with Contact or Email</li>
          <li>Search by Blood Group & Location</li>
          <li>Chatbot and Smart Suggestions</li>
        </ul>
      )
    },
    {
      title: "🛡️ Safety & Privacy",
      content: "Donor privacy and safety are our top priorities. We follow secure authentication and only share necessary information to ensure a safe and respectful interaction."
    },
    {
      title: "📢 Get Involved",
      content: "Whether you're a first-time donor or a regular lifesaver, BloodVital is here to guide and support your journey. Spread the word, save lives, and be a part of this mission."
    }
  ];

  return (
    <div className="container my-5 text-white">
      <h1 className="text-center mb-4 fw-bold text-warning">💉 About BloodVital 💉</h1>

      <motion.p
        className="lead text-center mb-5 px-md-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.16)',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 0 20px rgba(59, 4, 36, 0.66)',
          fontWeight: 'bold',
          color: 'wheat'
        }}
      >
        BloodVital is a dedicated platform connecting lifesavers with those in urgent need of blood.
        Our mission is to ensure that no life is lost due to the unavailability of blood.
      </motion.p>

      <div className="row g-4">
        {sections.map((section, index) => (
          <motion.div
            className="col-md-6"
            key={index}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={index + 1}
          >
            <div style={cardStyle}>
              <h4 style={{ color: 'wheat' }}>{section.title}</h4>
              <div>{section.content}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* World Blood Donor Day Section */}
      <motion.div
        className="mt-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div style={cardStyle}>
        <h2 className="text-center text-warning fw-bold my-4">🌍 World Blood Donor Day 🌍</h2>
        <h5 className="text-center text-light mb-4 px-3">
          Celebrated every year on <strong style={{color:'yellow'}}>14th June</strong>, World Blood Donor Day raises awareness of the need for safe blood and recognizes the heroes who save lives every day by donating blood voluntarily.
        </h5>

        <Carousel
          variant="dark"
          fade
          controls={false}          // hides next/prev icons
  indicators={true}         // keeps the bottom dots (optional)
  interval={1000}           // autoplay every 3 seconds
  pause={false}  
          style={{
            borderRadius: '1rem',
            overflow: 'hidden',
            boxShadow: '0 0 25px rgba(255,255,255,0.15)',
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
            <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/About1.png"
              alt="world donor day"
              style={{ height: '450px', objectFit: 'cover' }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/about2.png"
              alt="Celebration stage"
              style={{ height: '450px', objectFit: 'cover' }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/about3.png"
              alt="Volunteers spreading awareness"
              style={{ height: '450px', objectFit: 'cover' }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/about4.png"
              alt="honors"
              style={{ height: '450px', objectFit: 'cover' }}
            />
          </Carousel.Item>
        </Carousel>
        </div>
      </motion.div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.16)',
  padding: '20px',
  borderRadius: '15px',
  boxShadow: '0 0 20px rgba(59, 4, 36, 0.66)',
  height: '100%'
};
