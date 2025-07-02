import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid
} from 'recharts';
import {
  Card, ListGroup, Badge, Button
} from 'react-bootstrap';
import '../App.css';

export default function DonationHistory() {
  const history = [
    { date: "2025-03-15", camp: "Youth Camp", location: "Gwalior", type: "Whole Blood" },
    { date: "2024-12-02", camp: "Govt Drive", location: "Jhansi", type: "Plasma" },
    { date: "2024-07-19", camp: "NSS Camp", location: "Gwalior", type: "Platelets" },
    { date: "2023-11-09", camp: "Red Cross", location: "Jodhpur", type: "Whole Blood" } // ❌ will be excluded
  ];

  const filteredHistory = history.filter(entry =>
    entry.location === "Gwalior" || entry.location === "Jhansi"
  );

  const donationTypesCount = filteredHistory.reduce((acc, curr) => {
    acc[curr.type] = (acc[curr.type] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(donationTypesCount).map(type => ({
    type,
    count: donationTypesCount[type]
  }));

  const registeredCamps = [
    { name: "Youth Blood Drive", city: "Jhansi", date: "2025-07-14" },
  ];

  const filteredCamps = registeredCamps.filter(
    camp => camp.city === "Gwalior" || camp.city === "Jhansi"
  );

  return (
    <div className="container mt-4 donation-history-container">
      <h2 className="text-white text-center mb-4">🩸 Donor History 🩸</h2>

      {filteredHistory.length > 0 ? (
        <>
          <Card className="mb-4 mt-4 glass-card">
            <Card.Body>
              <h4 className="mb-3 text-bold text-warning">📅 Last Donation :</h4>
              <p className="fw-semibold text-white">
                {filteredHistory[0].date} at {filteredHistory[0].camp} ({filteredHistory[0].location})
              </p>

              <h4 className="mb-3 text-bold text-warning">📊 Total Donations :</h4>
              <Badge bg="danger" className="fs-6">{filteredHistory.length}</Badge>
            </Card.Body>
          </Card>

          <Card className="mb-4 glass-card">
            <Card.Body>
              <h4 className="mb-3 text-bold text-warning">🏥 Registered Camps :</h4>
              <ListGroup>
                {filteredCamps.map((camp, idx) => (
                  <ListGroup.Item key={idx} className="glass-list text-white">
                    {camp.name} - {camp.city} ({camp.date})
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="mb-4 glass-card">
            <Card.Body>
              <h4 className="mb-3 text-bold text-warning">📈 Types of Donation :(Filtered)</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="type" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#ff4757" />
                </BarChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>

          <Card className="mb-4 glass-card">
            <Card.Body>
              <h4 className="mb-3 text-bold text-warning">📜 Certificates :</h4>
              <ListGroup>
                {filteredHistory.map((entry, idx) => (
                  <ListGroup.Item key={idx} className="glass-list text-white">
                    Certificate for <strong>{entry.camp}</strong> - {entry.location}
                    <Button size="sm" variant="outline-danger" className="ms-2">Download</Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </>
      ) : (
        <div className="text-center text-muted">No donations recorded for Gwalior or Jhansi.</div>
      )}
    </div>
  );
}
