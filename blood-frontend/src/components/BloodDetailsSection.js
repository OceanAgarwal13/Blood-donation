import React from 'react';
import { useNavigate } from 'react-router-dom';

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export default function BloodDetailsSection() {
  const navigate = useNavigate();

  const handleClick = (group) => {
    navigate(`/blood/${group}`);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-white mb-4"> Explore Blood Categories</h2>
      <div className="row justify-content-center">
        {bloodGroups.map((group, idx) => (
          <div
            key={idx}
            className="col-6 col-md-3 mb-4"
            onClick={() => handleClick(group)}
            style={{ cursor: 'pointer', height:'120px' }}
          >
            <div className="card text-center py-4 h-100" style={{fontWeight:'bolder', border:'3px dashed #da044b',boxShadow:'0 0 15px #da044b', borderRadius:'0.5rem', background:'wheat'}}>
              <h4 className="text-danger text-center fw-bold" style={{fontSize:'3.5rem'}}>{group}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
