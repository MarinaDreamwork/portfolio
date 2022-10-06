import EBooksPicture from '../assets/e-books.png';
import HackathonPicture from '../assets/hackathon.png';
import FastCompanyPicture from '../assets/fast-company.png';
import TextileShopPicture from '../assets/e-shop.png';
import GamePicture from '../assets/2048.png';

export const data = [
  { 
    id: 1,
    imgPath: HackathonPicture,
    projectTitle: 'Hackathon app',
    tags: [
      { id: 1.1, background: 'bg-red-500', text: 'HTML' },
      { id: 1.2, background: 'bg-yellow-300', text: 'JavaScript' }
    ],
    description: 'Context menu by JS in Classes',
    buttonLinks: [
      { id: 1.1, name: 'source code', link: 'https://github.com/MarinaDreamwork/Hackathon', background: 'bg-gray-400 opacity-50' }
    ],
    isActive: false
  },
  {
    id: 2,
    imgPath: FastCompanyPicture,
    projectTitle: 'Fast-company app',
    tags: [
      { id: 2.1, background: 'bg-blue-500', text: 'React' },
      { id: 2.2, background: 'bg-yellow-300', text: 'JavaScript' },
      { id: 2.3, background: 'bg-emerald-600', text: 'Node.js' },
      { id: 2.4, background: 'bg-yellow-500', text: 'Express.js' }
    ],
    description: 'App for short meetings',
    buttonLinks: [
      { id: 2.1, name: 'source code', link: 'https://github.com/MarinaDreamwork/fast-company', background: 'bg-gray-400' },
      { id: 2.2, name: 'link to app', link: 'https://fast-company-test-application.herokuapp.com/', background: 'bg-orange-500' }
    ],
    isActive: false
  },
  {
    id: 3,
    imgPath: EBooksPicture,
    projectTitle: 'E-book-shop',
    tags: [
      { id: 3.1, background: 'bg-blue-500', text: 'React' },
      { id: 3.2, background: 'bg-yellow-300', text: 'JavaScript' },
      { id: 3.3, background: 'bg-emerald-600', text: 'Node.js' },
      { id: 3.4, background: 'bg-yellow-500', text: 'Express.js' }
    ],
    description: 'E-commerce project books',
    buttonLinks: [
      { id: 1, name: 'source code', link: 'https://github.com/MarinaDreamwork/Diploma_Fullstack_App', background: 'bg-gray-400' },
      { id: 2, name: 'link to app', link: 'https://books-ecommerce.herokuapp.com/', background: 'bg-orange-500' }
    ],
    isActive: true
  },
  {
    id: 4,
    imgPath: TextileShopPicture,
    projectTitle: 'E-textile-shop',
    tags: [
      { id: 4.1, background: 'bg-blue-500', text: 'React' },
      { id: 4.2, background: 'bg-yellow-300', text: 'JavaScript' },
      { id: 4.3, background: 'bg-emerald-600', text: 'Node.js' },
      { id: 4.4, background: 'bg-yellow-500', text: 'Express.js' },
      { id: 4.5, background: 'bg-blue-300', text: 'Tailwindcss' },
    ],
    description: 'E-commerce project textile',
    buttonLinks: [
      { id: 4.1, name: 'in development mode', link: '', background: 'bg-green-600' },
    ],
    isActive: false
  },
  {
    id: 5,
    imgPath: GamePicture,
    projectTitle: 'Game 2048',
    tags: [
      { id: 5.1, background: 'bg-red-500', text: 'HTML' },
      { id: 5.2, background: 'bg-yellow-300', text: 'JavaScript' },
      { id: 5.3, background: 'bg-sky-700', text: 'CSS' },
    ],
    description: 'Game 2048 in pure JavaScript',
    buttonLinks: [
      { id: 4.1, name: 'in development mode', link: '', background: 'bg-green-600' }
    ],
    isActive: false
  }
];

export const socialLinksData = [
  { id: 1, href: 'mailto:silaevamo@gmail.com', src: 'assets/email.png', alt: 'envelope' },
  { id: 2, href: 'https://github.com/MarinaDreamwork', src: 'assets/github.png', alt: 'gitHub icon' },
  { id: 3, href: 'https://www.linkedin.com/comm/in/marina-trushina-1a9b9777?midToken=AQEiEU4n083c3Q&midSig=1NCImZAPx4pqg1&trk=eml-email_network_conversations_01-header-34-profile&trkEmail=eml-email_network_conversations_01-header-34-profile-null-4jixjl%7El3emtdpb%7End-null-neptune%2Fprofile%7Evanity%2Eview&lipi=urn%3Ali%3Apage%3Aemail_email_network_conversations_01%3BrRpJF7sZQ6iGitL56EuydA%3D%3D', src: 'assets/linkedin.png', alt: 'linkedIn icon'}
];

export const personalDataInfo = [
  { id: 1, text: 'My name is ', boldText: 'Marina Trushina', style: 'text-center', isLinks: false },
  { id: 2, text: 'Once upon a time I have decided to dedicate my life to programming...', isLinks: false },
  { id: 3, text: 'I\'ve started to learn HTML, CSS and JavaScript at the beginning of 2021.', isLinks: false },
  { id: 4, text: 'Now I have an expirience with such technologies/languages/libraries as JavaScript, React, Redux, Redux-Toolkit, axios, Node, Express, bootstrap, TailwindCSS. Now I\'m learning TypeScript.', isLinks: false },
  { id: 5, text: 'I have a lot of plans for my future projects and trying to find an interesting ones. It will be interesting for me to have a deal with blockchain technology in JavaScript.', isLinks: false },
  { id: 6, text: 'My contacts:', style: 'text-center', isLinks: true}
];