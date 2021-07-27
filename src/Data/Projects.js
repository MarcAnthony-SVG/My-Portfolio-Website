const RealEstate = require('../components/Projects/Images/RealEstateApp.png');
const MentorMii = require('../components/Projects/Images/MentorMii.png');
const TattooM3 = require('../components/Projects/Images/TattooM3.png');
const RottenHuevos = require('../components/Projects/Images/RottenHuevos.png');

var Projects = [
  {
    id: 1,
    image: RealEstate,
    title: `Real Estate Website`,
    text: `A website I created to use libraries, frameworks, and APIs
that I hadn’t used before, to challenge myself as a developer
and improve upon my skills.`,
    link: 'https://master.d2bv1yyxa7mtkl.amplifyapp.com/',
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
    link: '',
  },
  {
    id: 3,
    image: RottenHuevos,
    title: `RottenHuevos`,
    text: `A full-stack e-commerce application and alternative to Newegg.
        I served as a software developer focusing on the front-end.`,
    link: '',
  },
  {
    id: 4,
    image: TattooM3,
    title: `Tattoo M3`,
    text: `A website that came about from me and my wife's love of tattoos. 
    It was created using Next.js, GraphQL and Apollo-Client/Server. 
    The main concept behind the site was to display images of tattoos from several apis using technologies that I hadn't used before.`,
    link: 'https://tattoo-m3-marcanthony-svg.vercel.app/',
  },
];

module.exports = Projects;
