import { v4 as uuid } from "uuid";

import jsIcon from "../assets/images/skills/javascript.svg";
import tsIcon from "../assets/images/skills/typescript-icon.svg";
import mochaIcon from "../assets/images/skills/mocha.svg";
import csharpIcon from "../assets/images/skills/c-sharp.svg";

import angularIcon from "../assets/images/skills/angular-icon.svg";
import reactIcon from "../assets/images/skills/react.svg";
import htmlIcon from "../assets/images/skills/html5.svg";
import cssIcon from "../assets/images/skills/css3.svg";
import sassIcon from "../assets/images/skills/sass.svg";
import jqueryIcon from "../assets/images/skills/jquery.png";
import bootstrapIcon from "../assets/images/skills/bootstrap.svg";
import materilauiIcon from "../assets/images/skills/material-ui.svg";
import materializeIcon from "../assets/images/skills/materializecss.svg";

import nodeIcon from "../assets/images/skills/nodejs-icon.svg";
import expressIcon from "../assets/images/skills/express.svg";
import aspdotnetcoreIcon from "../assets/images/skills/aspdotnetcore.png";
import mysqlIcon from "../assets/images/skills/mysql.svg";
import mssqlIcon from "../assets/images/skills/mssql.png";
import mongodbIcon from "../assets/images/skills/mongodb.svg";

import gitIcon from "../assets/images/skills/git.png";
import bitbucketIcon from "../assets/images/skills/bitbucket.svg";
import photoshopIcon from "../assets/images/skills/photoshop.png";
import figmaIcon from "../assets/images/skills/figma.svg";
import unityIcon from "../assets/images/skills/unity.svg";

export default {
  languages: [
    {
      id: uuid(),
      name: "Javascript",
      skillIcon: jsIcon,
    },
    {
      id: uuid(),
      name: "Typescript",
      skillIcon: tsIcon
    },
    {
      id: uuid(),
      name: "C#",
      skillIcon: csharpIcon
    },
    {
      id: uuid(),
      name: null,
      skillIcon: mochaIcon
    },
  ],
  frontEnd: [
    {
      id: uuid(),
      name: "React",
      skillIcon: reactIcon
    },
    {
      id: uuid(),
      name: "Angular",
      skillIcon: angularIcon
    },
    {
      id: uuid(),
      name: "HTML",
      skillIcon: htmlIcon
    },
    {
      id: uuid(),
      name: "CSS",
      skillIcon: cssIcon
    },
    {
      id: uuid(),
      name: null,
      skillIcon: sassIcon
    },
    {
      id: uuid(),
      name: "jQuery",
      skillIcon: jqueryIcon
    },
    {
      id: uuid(),
      name: "Bootstrap",
      skillIcon: bootstrapIcon
    },
    {
      id: uuid(),
      name: "Material-UI",
      skillIcon: materilauiIcon
    },
    {
      id: uuid(),
      name: "Materialize",
      skillIcon: materializeIcon
    },
  ],
  backEnd: [
    {
      id: uuid(),
      name: "Node",
      skillIcon: nodeIcon,
      projectsUsed: 0
    },
    {
      id: uuid(),
      name: null,
      skillIcon: expressIcon
    },
    {
      id: uuid(),
      name: null,
      skillIcon: aspdotnetcoreIcon
    },
    {
      id: uuid(),
      name: "MySQL",
      skillIcon: mysqlIcon
    },
    {
      id: uuid(),
      name: null,
      skillIcon: mssqlIcon
    },
    {
      id: uuid(),
      name: null,
      skillIcon: mongodbIcon
    },
  ],
  design: [
    {
      id: uuid(),
      name: "Figma",
      skillIcon: figmaIcon
    },
    {
      id: uuid(),
      name: "Photoshop",
      skillIcon: photoshopIcon
    },
  ],
  other: [
    {
      id: uuid(),
      name: "Git",
      skillIcon: gitIcon
    },
    {
      id: uuid(),
      name: "Bitbucket",
      skillIcon: bitbucketIcon
    },
    {
      id: uuid(),
      name: "Unity",
      skillIcon: unityIcon
    }
  ]
};