import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../App.css'; // Custom animation styles

export default function Suggestions() {
  const { id } = useParams();
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/suggestions/${id}/`);
        setDonors(res.data);
        if (res.data.length === 0) {
          setMessage('No available donors found in your locality at the moment.');
        }
      } catch (error) {
        console.error("Suggestion fetch error:", error.response?.data || error.message);
        setMessage('Error fetching suggestions. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [id]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mt-4 pt-4 mb-5 text-white fw-bold">🩸 Suggested Blood Donors 🩸</h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : message ? (
        <div className="alert alert-warning text-center">{message}</div>
      ) : (
        <div className="row">
          {donors.map((donor, index) => (
            <div key={donor.id} className="col-md-6 mb-4 fade-in-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="card bg-dark" style={{ borderLeft: '10px solid rgb(233, 200, 14)', borderRadius: '1rem', boxShadow:'0 0 10px yellow' }}>
                <div className="card-body">
                  <h5 className="card-title text-warning text-uppercase fw-bold">
                    {donor.name}
                  </h5>
                  <p className="card-text text-white mb-1">
                    <strong>Blood Group:</strong> {donor.blood_group}
                    {donor.rh && <span> ({donor.rh})</span>}
                  </p>
                  <p className="card-text text-white mb-1"><strong>Ward:</strong> {donor.ward}</p>
                  <p className="card-text text-white "><strong>Mobile:</strong> {donor.mobile}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
