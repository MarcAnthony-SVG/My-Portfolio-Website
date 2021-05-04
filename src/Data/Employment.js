const GalvanizeInternPurpose = '';
const GalvanizeInternBulletPoints = [
  'Developed front end website architecture for several projects',
  'Stayed upto date with current javascript frameworks',
  'Worked independently and with other developers to create and mantain servers and databases',
  'Participated in educational opportunities and studied diffrent programing techniques',
];
const GalvanizeInternAchievements = [];
const HelpDeskGeneralPurpose =
  'Provide students support and customer service on company-supported computer software applications and platforms. Troubleshoot problems and advise on the appropriate action.';

const HelpDeskBulletPoints = [
  `Developed and reinforced student's technical skills and knowledge of programmatic concepts by answering requests`,
  'Helped students understand technical and algorithmic problem-solving abilities through individual and group tutoring sessions',
  'Collaborated with other Galvanize instructors to implement effective educational strategies for students',
  "Monitored and responded to incoming requests related to student's technical and conceptual issues",
  'Trained students on how to set up and use new technologies',
  'Diagnose basic and advanced software issues stemming from syntactical errors to significant conceptual errors',
  'Kept a detailed log of all student interactions, providing feedback on student technical skills, soft skills, and team skills to assist in their development as future software engineers.',
];
const HelpDeskAchievements = [
  'Maintained around a 4.5/5 star rating with my students',
  'Assisted over 35 students',
  'Answered 370+ tickets',
];
const IntelAnalystPurpose = `Graduated Advanced Individual Training (AIT) for intelligence analyst after completing 10-week Basic Training.
  Classroom and field instruction covers topics including:`;

const IntelAnalystBulletPoints = [
  'Critical thinking',
  'Using computer systems',
  'Intelligence Analysis',
  'Military symbology',
  'Preparing maps, charts and intelligence reports',
  'Intelligence Collection',
  'Record Keeping',
];
const IntelAnalystAchievements = [];
const FMVAnalystPurpose = `Produced detailed analytical products to build Patterns of Life (PoL) and target descriptions.
Conducted order of battle analysis, Activity-Based Intelligence (ABI), Battle Damage Assessment (BDA), Storyboards, Vehicle Follows, and 360-degree graphics.`;
const FMVAnalystBulletPoints = [
  'Compiled intel for use in briefings to high-level government personnel',
  'Good analytical writing skills',
  'Produced imagery-derived graphic products and reports for distribustion',
  'Work several shift styles to include Panama,Dupont and Continental ',
  'Lead a team of 3 soldiers, providing technical exploitation and conducted all-source intelligence analysis',
];
const FMVAnlaystAcheivements = [
  'Certified Screener',
  'Certified Team Lead',
  'Certified Multi Source Analyst (MSA)',
];

var GalvanizeIntern = {
  Company: 'Galvanize',
  CompanyLogo:
    'https://portfolio-website-marc.s3.us-east-2.amazonaws.com/GalvanizeLogo.jpg',
  Duration: `Aug 2020 - Sept 2020`,
  Location: `Austin, Texas`,
  Purpose: GalvanizeInternPurpose,
  BulletPoints: GalvanizeInternBulletPoints,
  Achievments: GalvanizeInternAchievements,
  Photos: [],
};
var GalvanizeHelpDesk = {
  Company: 'Galvanize',
  CompanyLogo:
    'https://portfolio-website-marc.s3.us-east-2.amazonaws.com/GalvanizeLogo.jpg',
  Duration: `Sept 2020 - Mar 2021`,
  Location: `Austin, Texas - Remote`,
  Purpose: HelpDeskGeneralPurpose,
  BulletPoints: HelpDeskBulletPoints,
  Achievments: HelpDeskAchievements,
  Photos: [],
};
var IntelAnalyst = {
  Company: 'United States Army',
  CompanyLogo:
    'https://portfolio-website-marc.s3.us-east-2.amazonaws.com/ArmyLogo.png',
  Duration: `Jan 2015 - Aug 2020`,
  Location: `Fort Hood, TX`,
  Purpose: IntelAnalystPurpose,
  BulletPoints: IntelAnalystBulletPoints,
  Achievments: IntelAnalystAchievements,
  Photos: [],
};
var FMVAnalyst = {
  Company: 'United States Army',
  CompanyLogo:
    'https://portfolio-website-marc.s3.us-east-2.amazonaws.com/ArmyLogo.png',
  Duration: `Aug 2015 - Aug 2018`,
  Location: `Fort Gordon, GA`,
  Purpose: FMVAnalystPurpose,
  BulletPoints: FMVAnalystBulletPoints,
  Acheivements: FMVAnlaystAcheivements,
  Photos: [],
};
var Jobs = [IntelAnalyst, FMVAnalyst, GalvanizeIntern, GalvanizeHelpDesk,];

module.exports.Jobs = Jobs;
