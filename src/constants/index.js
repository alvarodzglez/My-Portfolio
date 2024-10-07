import frontend_dev from '../assets/frontend_dev.png'
import blockchain_dev from '../assets/blockchain_dev.png'
import web3_management from "../assets/web3_management.webp"
import IAG_automation from "../assets/IAG_automation.png"
import DZ_shop from "../assets/DZ_shop.png"
import solidity from "../assets/solidity.png"
import no_image from "../assets/no-image.jpg"
import html_logo from "../assets/html-logo.png"
import javascript_logo from "../assets/javascript-logo.png"
import css_logo from "../assets/css-logo.png"
import tailwind_logo from "../assets/tailwind-logo.png"
import react_logo from "../assets/react-logo.png"
import vue_logo from "../assets/vue-logo.png"
import node_logo from "../assets/node-logo.png"
import solidity_logo from "../assets/solidity-logo.png"
import ganache_logo from "../assets/ganache-logo.png"
import hardhat_logo from "../assets/hardhat-logo.png"
import truffle_logo from "../assets/truffle-logo.png"
import web3_js_logo from "../assets/web3js-logo.png"
import ethers_js_logo from "../assets/ethers-logo.png"
import git_logo from "../assets/git-logo.png"


export const roles = [
    {
      name: "Frontend Developmet",
      icon: frontend_dev,
    },
    {
      name: "Blockchain  Development",
      icon: blockchain_dev
    },
    {
      name: "Web3 Dev. and Management",
      icon: web3_management
    },
    {
        name: "4.0 Industry Engineering",
        icon: IAG_automation
      },
  ];

  export const TechStack = [
    {
      name: "HTML",
      icon: html_logo,
    },
    {
      name: "JavaScript",
      icon: javascript_logo,
    },
    {
      name: "CSS",
      icon: css_logo,
    },
    {
      name: "Tailwind",
      icon: tailwind_logo,
    },
    {
        name: "React",
        icon: react_logo,
      },
      {
        name: "Vue",
        icon: vue_logo,
      },
      {
        name: "Node",
        icon: node_logo,
      },
      {
        name: "Solidity",
        icon: solidity_logo,
      },
      {
        name: "Truffle",
        icon: truffle_logo,
      },
      {
        name: "Hardhat",
        icon: hardhat_logo,
      },
      {
        name: "Ganache",
        icon: ganache_logo,
      },
      {
        name: "Web3.js",
        icon: web3_js_logo,
      },
      {
        name: "Ethers.js",
        icon: ethers_js_logo,
      },
      {
        name: "Git",
        icon: git_logo,
      },
  ];

export const projects = [
    {
      title: "DZ Shop",
      type: "frontend",
      description: "Online shop. Backend simulated with a fake API. Dynamic UI with React, Tailwind CSS for rapid styling, and Vite for lightning-fast development.",
      imgUrl: DZ_shop,
      githubUrl: "https://github.com/alvarodzglez/OnlineDzShop---Vite-React.js-TailwindCSS",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
      ],
    },
    {
      title: "Airbnb 3.0",
      type: "web3",
      description: "Under development...",
      imgUrl: no_image,
      githubUrl: "https://github.com/alvarodzglez",
      tags: [
        
      ],
    },
    {
      title: "Supply Chain",
      type: "blockchain",
      description: "General supply chain smart contract with product registration, step registration, secure tansactions and public querys.",
      imgUrl: solidity,
      githubUrl: "https://github.com/alvarodzglez/SupplyChain--Solidity-Truffle",
      tags: [
        {
          name: "Solidity",
          color: "blue-text-gradient",
        },
        {
          name: "Truffle",
          color: "brown-text-gradient",
        },
      ],
    },
    {
      title: "Crowdfunding",
      type: "blockchain",
      description: "Smart contract that allows project creators to receive funds from backers, with features to handle funding states and ensure only the project author can manage certain actions.",
      imgUrl: solidity,
      githubUrl: "https://github.com/alvarodzglez/SolidityCrowdFunding",
      tags: [
        {
          name: "Solidity",
          color: "blue-text-gradient",
        },
        {
          name: "Truffle",
          color: "brown-text-gradient",
        },
      ],
    },
  ];