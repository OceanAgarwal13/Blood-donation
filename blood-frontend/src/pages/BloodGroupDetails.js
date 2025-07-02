import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const bloodDetails = {
  'A+': {
    receive: ['A+', 'A-', 'O+', 'O-'],
    donate: ['A+', 'AB+'],
    info: `A+ is one of the most common blood types, making up about 30% of the population. 
It is extremely important in emergency and surgical procedures due to its wide compatibility. 
A+ individuals can donate to A+ and AB+ and receive from A+, A-, O+, and O-.`,
  },
  'A-': {
    receive: ['A-', 'O-'],
    donate: ['A+', 'A-', 'AB+', 'AB-'],
    info: `A- is a rare blood type, found in less than 7% of people. 
It is highly valued for its ability to be used for A and AB recipients, especially in Rh-negative cases. 
A- individuals can only receive from A- and O-.`,
  },
  'B+': {
    receive: ['B+', 'B-', 'O+', 'O-'],
    donate: ['B+', 'AB+'],
    info: `B+ accounts for around 9% of the population. 
It plays a vital role in transfusions, particularly in Asian communities where this type is more common. 
B+ individuals can receive from B+, B-, O+, and O-, and can donate to B+ and AB+.`,
  },
  'B-': {
    receive: ['B-', 'O-'],
    donate: ['B+', 'B-', 'AB+', 'AB-'],
    info: `B- is an uncommon type, seen in only about 2% of people. 
It is a crucial donor group for both B and AB recipients due to its Rh-negative compatibility. 
People with B- blood can receive from only B- and O-.`,
  },
  'AB+': {
    receive: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    donate: ['AB+'],
    info: `AB+ is the universal recipient, meaning these individuals can receive red blood cells from any group. 
It is a rare blood type (about 3% of the population) and is often used in complex medical cases. 
However, AB+ donors can only donate to other AB+ individuals.`,
  },
  'AB-': {
    receive: ['A-', 'B-', 'AB-', 'O-'],
    donate: ['AB+', 'AB-'],
    info: `AB- is the rarest blood type, occurring in less than 1% of people. 
These individuals can receive blood from all Rh-negative groups and donate to both AB- and AB+. 
AB- plasma is also considered universal, making it invaluable in emergencies.`,
  },
  'O+': {
    receive: ['O+', 'O-'],
    donate: ['A+', 'B+', 'AB+', 'O+'],
    info: `O+ is the most common blood type globally, present in about 37% of people. 
Its versatility makes it extremely important in emergencies and trauma care. 
O+ individuals can donate to all positive blood groups and receive from O+ and O-.`,
  },
  'O-': {
    receive: ['O-'],
    donate: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    info: `O- is the universal donor, meaning anyone can receive O- red blood cells. 
This makes O- the go-to blood type in emergencies when the patient’s blood type is unknown. 
However, O- individuals can only receive blood from other O- donors.`,
  },
};

export default function BloodGroupDetailsPage() {
  const { group } = useParams();
  const data = bloodDetails[group];

  if (!data) {
    return (
      <motion.div
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'rgba(3, 75, 47, 0.644)',
          borderRadius: '15px',
          padding: '3rem',
          boxShadow: '0 0 30px rgba(0,0,0,0.1)'
        }}
      >
        <h2 className="text-center text-danger">Invalid Blood Group</h2>
        <p className="text-center">The blood group "{group}" is not recognized.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="container mt-4 text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="p-5" style={{ backgroundColor: 'rgba(26, 21, 21, 0.52)', boxShadow: '0 0 30px rgba(69, 73, 3, 0.59)', borderRadius:'2rem' }}>
        <motion.h2
          className="text-center text-warning mb-3"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          🩸 Blood Group: {group} 🩸
        </motion.h2>

        <motion.p
          className="lead mb-4"
          style={{ whiteSpace: 'pre-line' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {data.info}
        </motion.p>

        <div className="row">
          <motion.div
            className="col-md-6 mb-3"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="p-3 bg-success bg-opacity-10 border-start border-success border-4 rounded shadow-sm">
              <h5 className="text-success">Can Donate To:</h5>
              <ul className="mb-0">
                {data.donate.map((g, i) => <li key={i}>{g}</li>)}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="col-md-6 mb-3"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="p-3 bg-primary bg-opacity-10 border-start border-primary border-4 rounded shadow-sm">
              <h5 className="text-primary">Can Receive From:</h5>
              <ul className="mb-0">
                {data.receive.map((g, i) => <li key={i}>{g}</li>)}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
