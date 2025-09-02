import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImPointRight } from "react-icons/im";

const AchievementsSection = () => {
  const scholarAchievements = [
    {
      title: "Amazon ML Summer School Mentee",
      org: "Amazon",
      date: "Aug 2025",
      details: [
        "Selected among the top students in India for Amazon’s advanced machine learning program led by Amazon scientists.",
        "Completed an intensive 8-module Amazon-led curriculum on advanced ML concepts, covering deep learning, generative AI, reinforcement learning, and real-world ML use cases at Amazon.",
      ],
    },
    {
      title: "Women Engineers (WE) Scholar",
      org: "TalentSprint & Google",
      date: "Feb 2024 – Feb 2026",
      details: [
        "Selected for Cohort 6, among the top 1% from 30,000+ applicants nationwide.",
        "Attended a 21-day bootcamp at IIIT Hyderabad, enhancing skills in coding, documentation, and communication.",
        "Participated in the WE Immersion Week, engaging with Googlers and learning from their experiences.",
      ],
    },
  ];

  const otherAchievements = [
    "Awarded the 2025 Shubhra Kar Linux Foundation LiFT Scholarship, an international scholarship program.",
    "Finalist in Google Girl Hackathon 2025, ranked among the top 76 out of 58,000+ applicants.",
    "Secured 4th place in Smart Delhi Ideathon 2025, awarded by the Hon’ble Lieutenant Governor of Delhi.",
    "Selected for Google Student Upskilling Launchpad 2025, an exclusive program on DSA and interview preparation.",
    "Runner-up at the Ideathon conducted by NSUT IIF and Girlscript Foundation.",
    "Best All-Women’s Team in NinjaSprint Ideathon conducted by Coding Ninjas.",
    "Secured 3rd place in Intellection, a research-based event at IITM Paradox in Margazhi’24.",
    "Earned a SheCodes Scholarship 2024, gaining hands-on experience in web development.",
  ];

  return (
    <div className="container my-5">
      {/* Scholar Achievements */}
      <h4 className="mb-4 fw-bold text-purple">Scholar Achievements</h4>
      <div className="row g-4">
        {scholarAchievements.map((item, i) => (
          <div className="col-md-6" key={i}>
            <div className="scholar-card h-100 shadow-sm rounded-4 p-4">
              <h5 className="fw-bold text-purple">{item.title}</h5>
              <p className="mb-1 text-subhead">
                <strong>{item.org}</strong> | <small>{item.date}</small>
              </p>
              <ul className="mt-2">
                {item.details.map((point, j) => (
                  <li className="text-details" key={j}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scholar-card {
          background: rgba(255, 255, 255, 0.1);
          border-left: 5px solid #cb30e0;
          transition: transform 0.3s ease;
        }
        .scholar-card:hover {
          transform: translateY(-5px);
        }
        .text-purple {
          color: #cb30e0;
        }
        .text-subhead {
          color: #adb5bd;
        }
        .text-details {
          color: white;
          margin-bottom: 0.5rem;
        }
      `}</style>

        {/* Other Achievements */}
      <h4 className="mt-5 mb-3 fw-bold text-purple">Other Achievements</h4>
      <div className="row g-4">
        {otherAchievements.map((ach, i) => (
          <div key={i} className="col-md-6">
            <div className="achievement-card p-3 shadow-sm rounded-4 d-flex align-items-start">
              <div className="icon-wrapper me-2">
                <ImPointRight className="text-purple fs-5" />
              </div>
              <div className="achievement-text">{ach}</div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .achievement-card {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid #cb30e0;
          transition: transform 0.3s, background 0.3s;
        }
        .achievement-card:hover {
          transform: translateY(-5px);
          background: rgba(203, 48, 224, 0.2);
        }
        .icon-wrapper {
          width: 28px; /* keeps all text aligned */
          text-align: center;
          flex-shrink: 0;
        }
        .achievement-text {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default AchievementsSection;
