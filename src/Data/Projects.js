// const placeholder = require("../components/OldProjects/images/placeholder.png");
const RealEstate = require('../components/Projects/Images/RealEstateApp.png');
const MentorMii = require('../components/Projects/Images/MentorMii.png');

var Projects = [
  {
    id: 1,
    image: RealEstate,
    title: `Real Estate Website`,
    text: `A website I created to use libraries, frameworks, and APIs
that I hadn’t used before, to challenge myself as a developer
and improve upon my skills.`,
  },
  {
    id: 2,
    image: MentorMii,
    title: `MentorMii`,
    text: `A full-stack web application that connects those seeking
        mentorship with a variety of skills with mentors that can
        teach them those skills. Served as the Project Manager for a
        team of six developers, managed tickets with Trello,
        facilitated workflow, and tracked performance and progress,
        ensuring completion of the application.`,
  },
  {
    id: 3,
    image: 'image',
    title: `RottenHuevos`,
    text: `A full-stack e-commerce application and alternative to Newegg.
        I served as a software developer focusing on the front-end.`,
  },
  {
    id: 4,
    image: 'image',
    title: `Tattoo M3`,
    text: `Newest Addition: Coming Soon.`,
  },
];

module.exports = Projects;
