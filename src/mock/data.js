import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Cris Co | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Cris Tabuno Co',
  subtitle: 'I`m the Web Developer you need!',
  cta: 'Hire me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.jpg',
  paragraphOne:
    'I am Cris Tabuno Co,an IT- Information Technology Student who is capable of developing a web design to your needs.',
  paragraphTwo:
    'It could be a react app, javascript, or any language you recommend I will surely make it with a better quality and responsiveness.',
  paragraphThree:
    'Extra information about myself is I love to develop games, it could be for PC or Mobile, because of playing so much games it gives me an idea of "What if I will develop my very own game?" thats when I begun developing games that I love. I`m stillnew but I am willing to learn more about it and create my very own website for that game.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'CufaIMG.png',
    title: 'Capstone Project CUFA',
    info: 'CUFA - Cebu Institute of Technology University Facebook Analyzer, is an interactive facebook analysis web application that features a live dashboard for monitoring how the CIT-University pages are performing. Illustrated by different Key performance indicators or KPI`s that displays information on the likes, follows, reach, engagements, post and other metrics. These consolidated information can be filtered whether to display the information on weekly or monthly basis.',
    info2:
      'Sentiment analysis on the facebook page`s post comments and reviews are provided to view on how the audience think the page`s reviews and post comments whether the score is positive, neutral, or negative.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'RobofriendsIMG.PNG',
    title: 'Project Robofriends',
    info: 'Robofriends is a robot version of my friends, A React app that has reacords of the users and has simple functionalities such as Page Scroll, and Search users. The Robots are fully auto generated connected to  Robodash API which can be found in this link: https://robohash.org/',
    info2:
      'The Page is also fully responsive in a way that is flexible to users who have different resolution, PC or mobile view is not a problem to this website.',
    url: 'https://kirisko.github.io/robofriendsNew/',
    repo: 'https://github.com/kirisko/robofriendsNew', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'You can always leave me a mail',
  btn: 'Email Me now',
  email: 'Kirisko26@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
