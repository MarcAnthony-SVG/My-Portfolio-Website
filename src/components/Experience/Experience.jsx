import React from 'react';
import { Jobs } from '../../Data/Employment';
import '../Experience/Experience.css';

function Experience() {

  return (
    <section className="experience-section">
      <div>
        <h1>Experience</h1>
      </div>
      <div className="info-container">
        {Jobs.map((job) => (
          <div className="parent-container">
              <div className="experience-uppercontainer">
                <img
                  className="logos"
                  src={job.CompanyLogo}
                  alt="{job.CompanyLogo}"
                />
                <ul className="experience-uppercontainer-list">
                  <li>Company: {job.Company}</li>
                  <li>Duration: {job.Duration}</li>
                  <li>Location: {job.Location}</li>
                </ul>
              </div>
              <div className="experience-midcontainer">
                <div className="experience-details">
                  <h4>{job.Position}</h4>
                  <p>{job.Purpose}</p>
                  <ul className="experience-skills-list">
                    {job.BulletPoints.map((bp) => (
                      <li>{bp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
        ))}
      </div>
    </section>
  );
}
export default Experience;
