import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';
import BloodDetailsSection from './BloodDetailsSection.js';

export default function ChoicePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const carouselEl = document.querySelector('#bloodCarousel');
    if (carouselEl && window.bootstrap) {
      new window.bootstrap.Carousel(carouselEl, {
        interval: 1000,
        ride: 'carousel'
      });
    }
  }, []);

  return (
    <div className="text-center mt-4 pt-4">
      <h2 style={{ color: 'white', fontWeight: 'bolder' }}>🩸 Welcome to the Blood Donation Portal 🩸</h2>
      <p className="mb-4" style={{ color: 'beige'}}>Please select one of the following options:</p>

      <div className="d-flex justify-content-center gap-3 mb-4 pb-4">
        <button className="btn btn-lg choice-btn donate" style={{backgroundColor:'rgb(12, 129, 110)', border:'2px solid white',color:'white', fontWeight:'bolder',boxShadow:'0 0 5px white'}} onClick={() => navigate('/login')}>
          I want to Donate
        </button>
        <button className="btn btn-lg choice-btn receive" style={{backgroundColor:'rgb(143, 9, 31)', border:'2px solid white',color:'white', fontWeight:'bolder',boxShadow:'0 0 5px white'}} onClick={() => navigate('/emergency-login')}>
          I want to Receive
        </button>
      </div>

      {/* Carousel */}
      <div
        id="bloodCarousel"
        className="carousel slide mb-4"
        data-bs-ride="carousel"
        data-bs-interval="1000"
        style={{ margin: '0 auto', width: '95%', borderRadius:'0.5rem' }}
      >
        <div className="carousel-inner">
          {['slider1', 'slider2', 'slider3', 'slider4', 'slider5'].map((img, idx) => (
            <div key={img} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
              <img
                src={`/images/${img}.png`}
                className="d-block w-100"
                style={{ height: '450px', objectFit: 'cover', borderRadius:'0.5rem' }}
                alt={`Slide ${idx + 1}`}
              />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#bloodCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#bloodCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* About Section */}
      <div className="container my-5 p-4" style={{backgroundColor:'wheat', borderRadius:'1.5rem', width:'900px', borde:'3px solid #da044b',boxShadow:'0 0 15px #da044b'}}>
        <h3 className="text-center text-danger mb-3" style={{fontWeight:'bolder',textDecoration:'underline'}}>About Us</h3>
        <p style={{ paddingLeft:'40px', paddingRight:'40px' }}>
          Our Blood Donation Portal is dedicated to connecting donors with recipients in urgent need across nearby cities. 
          Whether you're a donor wanting to save lives, or a recipient seeking hope — our platform is here to help.
          <br />
          <strong>We believe in the power of one drop to change everything.</strong>
        </p>
        <div className="text-center mt-3">
          <button className="btn btn-outline-danger" onClick={() => navigate('/about')}>
            Read More
          </button>
        </div>
      </div>

<BloodDetailsSection />

<div className="container my-5">
  <h2 className="text-center text-white mb-4">📸 Blood Donation Moments 📸</h2>
  <div className="row g-4">
    {[
      '/images/gallery1.png',
      '/images/gallery2.png',
      '/images/gallery3.png',
      '/images/gallery4.png',
      '/images/gallery5.png',
      '/images/gallery6.png',
    ].map((src, index) => (
      <div className="col-12 col-sm-6 col-md-4" key={index}>
        <div className="card h-100 bg-transparent" style={{borderRadius:'1rem', boxShadow:'0 0 5px rgb(207, 27, 87)'}}>
          <div className="image-wrapper" style={{borderRadius:'1rem', overflow: 'hidden'}}>
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="img gallery-img"
              style={{
                height: '230px',
                objectFit: 'cover',
                width: '100%',
                borderRadius: '1rem',
                transition: 'transform 0.5s ease',
              }}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


              {/* Info Strip - Auto sliding cards */}
<div className="py-4 mt-5 overflow-hidden position-relative" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
  <div className="slider d-flex" style={{ animation: 'slide 5s linear infinite' }}>
    {[
      {
        icon: '⏱️',
        title: 'Just One Hour',
        desc: 'Donate blood and save multiple lives within 60 minutes.',
      },
      {
        icon: '🥤',
        title: 'Free Refreshments',
        desc: 'Enjoy healthy drinks and snacks after every donation.',
      },
      {
        icon: '🩸',
        title: 'Safe & Hygienic',
        desc: 'Donation is completely safe with modern practices.',
      },
      {
        icon: '💖',
        title: 'Be Someone\'s Hero',
        desc: 'Your one donation can save up to 3 lives!',
      },
      {
        icon: '📅',
        title: 'Regular Camps',
        desc: 'Join our monthly blood donation camps in your city.',
      },
    ].map((item, index) => (
      <div key={index} className="card text-center mx-2" style={{ width: '280px', minWidth: '280px', borderRadius: '15px', background:'wheat', border:'3px solid rgb(207, 27, 87)', boxShadow:'0 0 15px rgb(207, 27, 87)' }}>
        <div className="card-body">
          <div style={{ fontSize: '30px' }}>{item.icon}</div>
          <h5 className="card-title text-danger mt-2" style={{ fontWeight:'bolder'}}>{item.title}</h5>
          <p className="card-text fw-bold" >{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
}
