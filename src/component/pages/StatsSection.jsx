import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './StatsSection.css';

const stats = [
  { icon: '💼', number: 50, label: 'Projects Delivered' },
  { icon: '👨‍💻', number: 20, label: 'Happy Clients' },
  { icon: '⏱️', number: 5, label: 'Years Experience' },
  { icon: '🌐', number: 100, label: 'Client Satisfaction %' },
];

const StatsSection = () => {
  return (
    <section className="stats-section py-5 text-center text-white">
      <div className="container">
        <div className="row">
          {stats.map((stat, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="stat-card p-4 shadow">
                <div className="fs-1 mb-2">{stat.icon}</div>
                <h2 className="count fw-bold">{stat.number}+</h2>
                <p className="mb-0 text-dark">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
