import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const storedId = localStorage.getItem('userId');
      if (!storedId) {
        navigate('/');
        return;
      }

      const userId = parseInt(storedId);

      try {
        // Try donor API first
        const donorRes = await axios.get('http://127.0.0.1:8000/api/users/');
        const donorMatch = donorRes.data.find((user) => user.id === userId);

        if (donorMatch) {
          setProfile(donorMatch);
          return;
        }

        // Try emergency API if donor not found
        const emergencyRes = await axios.get('http://127.0.0.1:8000/api/emergency-users/');
        const emergencyMatch = emergencyRes.data.find((user) => user.id === userId);

        if (emergencyMatch) {
          setProfile(emergencyMatch);
          return;
        }

        // If no match at all
        navigate('/');
      } catch (err) {
        console.error('Error fetching profile:', err);
        navigate('/');
      }
    };

    fetchUserProfile();
  }, [navigate]);

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.clear();
      navigate('/');
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  if (!profile) {
    return <p className="text-center text-light mt-5">Loading profile...</p>;
  }

  return (
    <motion.div
      className="container mt-5"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div
        className="bg-dark text-light p-5"
        style={{
          boxShadow: '0 0 40px #1f1b1baf',
          borderRadius: '2rem',
        }}
      >
        <h2 className="text-center text-warning mb-4">👤 Profile 👤</h2>
        <div className="row">
          {Object.entries(profile).map(([key, value], index) => {
            if (key === 'id' || key === 'password') return null;
            return (
              <div key={index} className="col-md-6 mb-3">
                <div className="p-3 bg-light bg-opacity-10 border-start border-warning border-3 rounded">
                  <strong>{key.replace(/_/g, ' ').toUpperCase()}:</strong>
                  <span className="float-end">{String(value)}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-danger px-4" onClick={handleLogout}>
            🚪 Logout
          </button>
        </div>
      </div>
    </motion.div>
  );
}
