import { v4 as uuid } from "uuid";
import screenshot_theia_mobile from "../assets/images/projects/screenshot_theia_desktop.png";
import screenshot_theia_desktop from "../assets/images/projects/screenshot_theia_desktop.png";
import screenshot_flyin_mobile from "../assets/images/projects/screenshot_flyin_mobile.png";
import screenshot_flyin_desktop from "../assets/images/projects/screenshot_flyin_desktop.png";
import screenshot_orderaway_mobile from "../assets/images/projects/screenshot_orderaway_mobile.png";
import screenshot_orderaway_desktop from "../assets/images/projects/screenshot_orderaway_desktop.png";
import screenshot_reactclickergame_mobile from "../assets/images/projects/screenshot_reactclickergame_mobile.png";
import screenshot_reactclickergame_desktop from "../assets/images/projects/screenshot_reactclickergame_desktop.png";
import screenshot_automender_mobile from "../assets/images/projects/screenshot_automender_mobile.png";
import screenshot_automender_desktop from "../assets/images/projects/screenshot_automender_desktop.png";
import screenshot_eatdaburger_mobile from "../assets/images/projects/screenshot_eatdaburger_desktop.png";
import screenshot_eatdaburger_desktop from "../assets/images/projects/screenshot_eatdaburger_desktop.png";
import screenshot_bamazon_mobile from "../assets/images/projects/screenshot_bamazon_desktop.png";
import screenshot_bamazon_desktop from "../assets/images/projects/screenshot_bamazon_desktop.png";
import screenshot_liri_bot_mobile from "../assets/images/projects/screenshot_liri_bot_desktop.png";
import screenshot_liri_bot_desktop from "../assets/images/projects/screenshot_liri_bot_desktop.png";
import screenshot_star_wars_rpg_game_mobile from "../assets/images/projects/screenshot_star_wars_rpg_game_mobile.png";
import screenshot_star_wars_rpg_game_desktop from "../assets/images/projects/screenshot_star_wars_rpg_game_desktop.png";

// projects are reverse chronological
export const projects = [
  {
    id: uuid(),
    isOriginal: true,
    projectName: "Mass Messaging",
    projectDescription: "Message multiple contacts",
    projectScreenshotMobile: null,
    projectScreenshotDesktop: null,
    projectScreenshotAlt: "",
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
    projectScreenshotMobile: null,
    projectScreenshotDesktop: null,
    projectScreenshotAlt: "",
    categories: [
      {
        category: "Front End",
        list: ["Angular", "Bootstrap"]
      },
      {
        category: "Deployment",
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
    projectScreenshotMobile: screenshot_theia_mobile,
    projectScreenshotDesktop: screenshot_theia_desktop,
    projectScreenshotAlt: "",
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
    projectScreenshotMobile: screenshot_flyin_mobile,
    projectScreenshotDesktop: screenshot_flyin_desktop,
    projectScreenshotAlt: "",
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
    designURL: screenshot_flyin_desktop,
    liveURL: "https://alex0n0.github.io/FrontEndDevGallery/flyin.html",
    repoURL: "https://github.com/alex0n0/FrontEndDevGallery"
  },
  {
    id: uuid(),
    isOriginal: true,
    projectName: "OrderAway",
    projectDescription: "OrderAway is a SaaS for restaurants to create accounts and access table side ordering interfaces that directly display orders on a kitchen screen.",
    projectScreenshotMobile: screenshot_orderaway_mobile,
    projectScreenshotDesktop: screenshot_orderaway_desktop,
    projectScreenshotAlt: "",
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
    projectScreenshotMobile: screenshot_reactclickergame_mobile,
    projectScreenshotDesktop: screenshot_reactclickergame_desktop,
    projectScreenshotAlt: "",
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
    projectScreenshotMobile: screenshot_automender_mobile,
    projectScreenshotDesktop: screenshot_automender_desktop,
    projectScreenshotAlt: "",
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
    projectScreenshotMobile: screenshot_eatdaburger_mobile,
    projectScreenshotDesktop: screenshot_eatdaburger_desktop,
    projectScreenshotAlt: "",
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
    projectScreenshotMobile: screenshot_bamazon_mobile,
    projectScreenshotDesktop: screenshot_bamazon_desktop,
    projectScreenshotAlt: "",
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
    projectScreenshotMobile: screenshot_liri_bot_mobile,
    projectScreenshotDesktop: screenshot_liri_bot_desktop,
    projectScreenshotAlt: "",
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
    projectScreenshotMobile: screenshot_star_wars_rpg_game_mobile,
    projectScreenshotDesktop: screenshot_star_wars_rpg_game_desktop,
    projectScreenshotAlt: "",
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
