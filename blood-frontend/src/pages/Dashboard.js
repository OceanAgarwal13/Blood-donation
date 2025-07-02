import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

export default function DonorReceiverDashboard() {
  const barData = {
    labels: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    datasets: [
      {
        label: 'Donors',
        backgroundColor: 'rgba(255,99,132,0.6)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        data: [40, 10, 30, 5, 8, 2, 50, 12]
      },
      {
        label: 'Receivers',
        backgroundColor: 'rgba(54,162,235,0.6)',
        borderColor: 'rgba(54,162,235,1)',
        borderWidth: 1,
        data: [35, 8, 28, 6, 9, 1, 48, 10]
      }
    ]
  };

  const pieDataDonors = {
    labels: ['O+', 'A+', 'B+', 'Others'],
    datasets: [{
      label: 'Donor %',
      data: [35, 30, 25, 10],
      backgroundColor: ['#ff6384', '#36a2eb', '#4bc0c0', '#9966ff'],
      hoverOffset: 6
    }]
  };

  const pieDataReceivers = {
    labels: ['O+', 'A+', 'B+', 'Others'],
    datasets: [{
      label: 'Receiver %',
      data: [34, 32, 22, 12],
      backgroundColor: ['#ffcd56', '#ff6384', '#36a2eb', '#9966ff'],
      hoverOffset: 6
    }]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 }
    })
  };

  return (
    <Container className="my-5">
      <motion.h2
        className="text-center fw-bold text-warning mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        📊 Donor & Receiver Dashboard 📊
      </motion.h2>

      <motion.h5 className="text-center text-light mb-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        This dashboard offers a detailed visualization of blood group trends, donor statistics, and receiver needs. By analyzing this data, organizations can better manage donation drives, raise awareness, and ensure critical supply during emergencies.
      </motion.h5>

      <Row className="mb-5">
        <motion.div className="col-md-12" variants={fadeIn} initial="hidden" animate="visible" custom={1}>
          <div className="bg-dark p-4 mt-4 mb -4 " style={{boxShadow:'0 0 40px #1f1b1baf',borderRadius:'2rem'}}>
            <h3 className="text-danger text-center mb-3">📈 Donor vs Receiver by Blood Group 📈</h3>
            <p className="text-light mb-4">
              <strong style={{color:'yellow'}}>Insight :</strong> The bar chart compares the number of registered donors and receivers across all blood types. O+ leads both charts due to its high population prevalence. AB- is the rarest and consistently low, which needs targeted awareness.
              <br />
              <strong style={{color:'yellow'}}>Tip :</strong> Encourage rare blood type holders to donate at least twice a year. Their contribution is lifesaving.
            </p>
            <Bar data={barData} options={chartOptions} />
          </div>
        </motion.div>
      </Row>

      <Row className="g-4">
        <motion.div className="col-md-6" variants={fadeIn} initial="hidden" animate="visible" custom={2}>
          <div className="bg-dark p-4 mt-4 mb -4 " style={{boxShadow:'0 0 40px #1f1b1baf',borderRadius:'2rem'}}>
            <h3 className="text-danger text-center mb-3">🩸 Donor Distribution 🩸</h3>
            <p className="text-light mb-4">
              <strong style={{color:'yellow'}}>Analysis :</strong> Over 90% of donations come from just three blood groups—O+, A+, and B+. This presents a challenge during crises for AB- or B- patients.
              <br />
              <strong style={{color:'yellow'}}>Call to Action :</strong> Promote donation awareness in colleges, offices, and public gatherings to diversify donor groups.
            </p>
            <Pie data={pieDataDonors} options={chartOptions} />
          </div>
        </motion.div>

        <motion.div className="col-md-6" variants={fadeIn} initial="hidden" animate="visible" custom={3}>
          <div className="bg-dark p-4 mt-4 mb -4 " style={{boxShadow:'0 0 40px #1f1b1baf',borderRadius:'2rem'}}>
            <h3 className="text-danger text-center mb-3">🧬 Receiver Demand 🧬</h3>
            <p className="text-light mb-4">
              <strong style={{color:'yellow'}}>Interpretation :</strong> The demand chart closely mirrors the donor chart, with O+ and A+ topping the list. However, there's a shortfall in Rh-negative supply.
              <br />
              <strong style={{color:'yellow'}}>Solution :</strong> Establish an emergency call bank for rare types and partner with hospitals for immediate access during trauma cases.
            </p>
            <Pie data={pieDataReceivers} options={chartOptions} />
          </div>
        </motion.div>
      </Row>

      <Row className="mt-5">
        <motion.div className="col-12" variants={fadeIn} initial="hidden" animate="visible" custom={4}>
          <div className="bg-dark p-4 mt-4 mb -4 " style={{boxShadow:'0 0 40px #1f1b1baf',borderRadius:'2rem'}}>
            <h3 className="text-danger text-center mb-3">🧬 Health & Safety Notes 🧬</h3>
            <ul className="text-light ps-3">
              <li>Donors should hydrate and eat iron-rich food before donating.</li>
              <li>A healthy adult can donate blood every 3 months.</li>
              <li>Screening ensures all donations are safe and virus-free.</li>
              <li>Every donation can save up to 3 lives — plasma, platelets, and red cells.</li>
              <li>Encourage group donations to build a community of lifesavers.</li>
            </ul>
          </div>
        </motion.div>
      </Row>

      <Row className="mt-5">
  <motion.div className="col-12" variants={fadeIn} initial="hidden" animate="visible" custom={5}>
    <div className="bg-dark p-4 mt-4 mb -4 " style={{boxShadow:'0 0 40px #1f1b1baf',borderRadius:'2rem'}}>
      <h3 className="text-danger text-center mb-3">📅 Donation Frequency Trends 📅</h3>
      <p className="text-light">
        Studies show that most voluntary donors donate only once a year. However, a healthy adult can donate:
        <ul className="text-light ps-4">
          <li><strong style={{color:'yellow'}}>Whole Blood :</strong> every 3 months</li>
          <li><strong style={{color:'yellow'}}>Platelets :</strong> every 15 days</li>
          <li><strong style={{color:'yellow'}}>Plasma :</strong> every 28 days</li>
        </ul>
        <strong style={{color:'yellow'}}>Tip :</strong> Encourage reminders and annual blood donation goals (e.g., "3 donations = 9 lives").
      </p>
    </div>
  </motion.div>
</Row>

<Row className="mt-4">
  <motion.div className="col-12" variants={fadeIn} initial="hidden" animate="visible" custom={6}>
    <div className="bg-dark p-4 mt-4 mb -4 " style={{boxShadow:'0 0 40px #1f1b1baf',borderRadius:'2rem'}}>
      <h3 className="text-danger text-center mb-3">🧬 Importance of Rare Blood Groups 🧬</h3>
      <p className="text-light">
        While O+ and A+ are common, types like <strong>AB- and B-</strong> make up less than 2% of the population. These types are crucial in:
        <ul className="text-light ps-4">
          <li>Neonatal care</li>
          <li>Emergency trauma surgeries</li>
          <li>Organ transplant procedures</li>
        </ul>
        <strong style={{color:'yellow'}}>Action :</strong> Build a registry of rare blood donors and maintain contact during emergencies.
      </p>
    </div>
  </motion.div>
</Row>

<Row className="mt-4">
  <motion.div className="col-12" variants={fadeIn} initial="hidden" animate="visible" custom={7}>
    <div className="bg-dark p-4 mt-4 mb -4 " style={{boxShadow:'0 0 40px #1f1b1baf',borderRadius:'2rem'}}> 
      <h3 className="text-danger text center mb-3">🤝 Community Impact 🤝</h3>
      <p className="text-light">
        One organized camp can collect over 100 units of blood. Hospitals, colleges, and NGOs partnering together have helped increase donations by over <strong >40%</strong> annually in some states.
        <br />
        <strong style={{color:'yellow'}}>Strategy :</strong> Promote group pledges and gamify donations (e.g., badges for 5/10 donations) to enhance recurring engagement.
      </p>
    </div>
  </motion.div>
</Row>

    </Container>
  );
}
