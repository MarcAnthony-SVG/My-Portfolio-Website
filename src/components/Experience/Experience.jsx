import React from 'react';
import { Jobs } from '../../Data/Employment';
import '../Experience/Experience.css';
function Experience() {
  const careers = Jobs;
  return (
    <div className="Experience">
      <div>
        <h1>Experience</h1>
      </div>
      <div className="InfoContainer">
        {careers.map((job) => (
          <div className="ParentContainer">
            <div className="ChildContainer">
              <div className="Experience-UpperContainer">
                <img
                  className="logos"
                  src={job.CompanyLogo}
                  alt="{job.CompanyLogo}"
                />
                <ul className="Experience-UpperContainer-list">
                  <li>Company: {job.Company}</li>
                  <li>Duration: {job.Duration}</li>
                  <li>Location: {job.Location}</li>
                </ul>
              </div>
              <div className="Experience-MidContainer">
                <div className="Experience-Details">
                  <h4>{job.Position}</h4>
                  <p>{job.Purpose}</p>
                  <ul className="Experience-SkillsList">
                    {job.BulletPoints.map((bp) => (
                      <li>{bp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Experience;
