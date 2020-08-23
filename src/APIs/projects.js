import { v4 as uuid } from "uuid";

// projects are reverse chronological
export const projects = [
  {
    id: uuid(),
    isOriginal: true,
    projectName: "Mass Messaging",
    projectDescription: "Message multiple contacts",
    projectScreenshot: "https://miro.medium.com/max/5360/1*d7_iZtG8vNH0OJrAc1SwIQ.png",
    categories: [
      {
        category: "Front End",
        list: ["React", "Material-UI"]
      },
      {
        category: "Back End",
        list: ["Node", "Twilio"]
      },
      {
        category: "Deployment",
        list: ["Heroku"]
      }
    ],
    designURL: "https://www.figma.com/proto/pxqLUwT1KJqejEKhR0dKoU/Mass-Messaging?node-id=4%3A31&scaling=min-zoom",
    liveURL: null,
    repoURL: null,
  },
  {
    id: uuid(),
    isOriginal: true,
    projectName: "Computer Store",
    projectDescription: "Form to customise a computer",
    projectScreenshot: null,
    categories: [
      {
        category: "Front End",
        list: ["Angular", "Bootstrap"]
      },
      {
        category: "Back End",
        list: ["Github pages"]
      }
    ],
    designURL: "https://www.figma.com/proto/UME5pAh8R8hY6JCD58wiWD/Computers?node-id=1%3A2&scaling=min-zoom",
    liveURL: null,
    repoURL: null
  },
  {
    id: uuid(),
    isOriginal: true,
    projectName: "Theia",
    projectDescription: "Top down live viewer for VR application",
    projectScreenshot: null,
    categories: [],
    designURL: "https://www.figma.com/proto/HlXIScNHZlq7h4OabiUivE/TheiaDesign?node-id=16%3A4&scaling=min-zoom",
    liveURL: null,
    repoURL: null
  },
  {
    id: uuid(),
    isOriginal: false,
    projectName: "Flyin",
    projectDescription: "Trip browsing site",
    projectScreenshot: "https://alex0n0.github.io/FrontEndDevGallery/public/media/flyin_reference.png",
    categories: [
      {
        category: "Front End",
        list: ["HTML", "CSS", "JS"]
      },
      {
        category: "Deployment",
        list: ["Github Pages"]
      },
    ],
    designURL: "https://alex0n0.github.io/FrontEndDevGallery/public/media/flyin_reference.png",
    liveURL: "https://alex0n0.github.io/FrontEndDevGallery/flyin.html",
    repoURL: "https://github.com/alex0n0/FrontEndDevGallery"
  },
  {
    id: uuid(),
    isOriginal: true,
    projectName: "OrderAway",
    projectDescription: "OrderAway is a SaaS for restaurants to create accounts and access table side ordering interfaces that directly display orders on a kitchen screen.",
    projectScreenshot: "https://alex0n0.github.io/portfolio/assets/res/screenshot_orderaway.png",
    categories: [
      {
        category: "Front End",
        list: ["React", "Bootstrap"]
      },
      {
        category: "Back End",
        list: ["Node", "MySQL"]
      },
      {
        category: "Deployment",
        list: ["Heroku"]
      }
    ],
    designURL: null,
    liveURL: "https://beanstalk03.herokuapp.com/",
    repoURL: "https://github.com/alex0n0/OrderAway"
  },
  {
    id: uuid(),
    isOriginal: true,
    projectName: "Clicker Game",
    projectDescription: "Clicker game is a Batman themed memory game built using React.js requiring you to click on each option only once.",
    projectScreenshot: "https://alex0n0.github.io/portfolio/assets/res/screenshot_reactclickergame.png",
    categories: [
      {
        category: "Front End",
        list: ["React", "Bootstrap"]
      },
      {
        category: "Back End",
        list: ["Node", "MySQL"]
      },
      {
        category: "Deployment",
        list: ["Heroku"]
      }
    ],
    designURL: null,
    liveURL: "https://beanstalk88.herokuapp.com/",
    repoURL: "https://github.com/alex0n0/reactclickergame"
  },
  {
    id: uuid(),
    isOriginal: true,
    projectName: "Automender",
    projectDescription: "Automender is a SaaS application where customers can make appointments with mechanic centres registered with the service.",
    projectScreenshot: "https://alex0n0.github.io/portfolio/assets/res/screenshot_automender.png",
    categories: [
      {
        category: "Front End",
        list: ["React", "Bootstrap"]
      },
      {
        category: "Back End",
        list: ["Node", "MySQL"]
      },
      {
        category: "Deployment",
        list: ["Heroku"]
      }
    ],
    designURL: null,
    liveURL: "https://afternoon-refuge-07267.herokuapp.com/",
    repoURL: "https://github.com/nick-ramsay/project-two"
  },
  {
    id: uuid(),
    isOriginal: true,
    projectName: "Eat Da Burger",
    projectDescription: "Eat Da Burger is a Heroku hosted, Node server delivered, webpage with dedicated API routes for create/read/update functionality.",
    projectScreenshot: "https://alex0n0.github.io/portfolio/assets/res/screenshot_eatdaburger.png",
    categories: [
      {
        category: "Front End",
        list: ["React", "Bootstrap"]
      },
      {
        category: "Back End",
        list: ["Node", "MySQL"]
      },
      {
        category: "Deployment",
        list: ["Heroku"]
      }
    ],
    designURL: null,
    liveURL: "https://beanstalk99.herokuapp.com/",
    repoURL: "https://github.com/alex0n0/eat-da-burger"
  },
  {
    id: uuid(),
    isOriginal: true,
    projectName: "Bamazon",
    projectDescription: "Bamazon is a command line application with a customer and manager interface for purchasing and managing inventory.",
    projectScreenshot: "https://alex0n0.github.io/portfolio/assets/res/screenshot_bamazon.png",
    categories: [
      {
        category: "Back End",
        list: ["JS", "Node CLI"]
      }
    ],
    designURL: null,
    liveURL: null,
    repoURL: "https://github.com/alex0n0/bamazon-cli"
  },
  {
    id: uuid(),
    isOriginal: true,
    projectName: "LIRI Bot",
    projectDescription: "LIRI Bot is a command line application for making searches to a variety of APIs. This application is run in the terminal (MacOS/Linux), command line (Windows).",
    projectScreenshot: "https://alex0n0.github.io/portfolio/assets/res/screenshot_liri_bot.png",
    categories: [
      {
        category: "Back End",
        list: ["JS", "Node CLI"]
      }
    ],
    designURL: null,
    liveURL: null,
    repoURL: "https://github.com/alex0n0/LIRI_Bot"
  },
  {
    id: uuid(),
    isOriginal: true,
    projectName: "Star Wars RPG",
    projectDescription: "One vs all”–style browser based game.",
    projectScreenshot: "https://alex0n0.github.io/portfolio/assets/res/screenshot_star_wars_rpg_game.png",
    categories: [
      {
        category: "Front End",
        list: ["HTML", "CSS", "JS"]
      },
    ],
    designURL: null,
    liveURL: "https://alex0n0.github.io/Star-Wars-RPG-Game/",
    repoURL: "https://github.com/alex0n0/Star-Wars-RPG-Game"
  },
];
