import JS from "./images/js.png";
import Redux from "./images/redux.png";
import CSS from "./images/css.png";
import ReactIcon from "./images/react.png";
import Sass from "./images/sass.png";
import Rest from "./images/rest.png";
import graph from "./images/graphql.png";
import Pickle from "./images/pickle.png";
import StyledComponents from "./images/styledComponents.png";

const Projects = [
  {
    title: "Rick and Morty",
    description: [
      {
        paragraph: ` I decided to create this website where you can find every character from the TV show Rick and Morty.
        All the data presented in this project is from the open source Rick and Morty API.`,
      },
      {
        paragraph: `  I realized an infinite scroll single page application on React JS.
        The SPA fetches data from the RESTful API and manages the requested data with Redux.
        Using React Router allows me to redirect the user to any character by typing its ID, and from the GraphQL API I
        request the information of the selected character.`,
      },
    ],

    techs: [
      { name: "React", icon: ReactIcon },
      { name: "GraphQL", icon: graph },
      { name: "REST", icon: Rest },
      { name: "Redux", icon: Redux },
      { name: "Sass", icon: Sass },
    ],
    pictureSm: "pickle",
    pictureLg: "./images/RickLaptop.png",
    url: "https://cecam92.github.io/RickandMorty/",
    repository: "https://github.com/cecam92/RickandMorty",
  },
  {
    title: "Petgram",
    description: [
      {
        paragraph: `Petgram is a pet version of Instagram. Here you can find pets per category and save their pictures to your favorites
        if you sign in.`,
      },
      {
        paragraph: `This project was styled with Styled Components, request data with GraphQL from a local API and uses React Context to manage the state of the session storage, in other words, maintain and checked if the user has log in and enable the favorite section.
         `,
      },
    ],
    techs: [
      { name: "React", icon: ReactIcon },
      { name: "Styled Components", icon: StyledComponents },
      { name: "GraphQL", icon: graph },
      { name: "JavaScript", icon: JS },
    ],
    pictureSm: "petgram",
    pictureLg: "petgram",
    url: "http://cecam92-petgram.netlify.app/",
    repository: "https://github.com/cecam92/petgram",
  },
  {
    title: "CryptoTracker",
    description: [
      {
        paragraph: `CryptoTracker is an IOS and Android mobile application developed in React Native.
        This app tracks the price of crypto coins in the market.`,
      },
      {
        paragraph: `CryptoTracker shows the behaviour of currencies over the last hour,
        their price in USD and their value relative to other coins.
          This data is gathered from an open source RESTful API.
        `,
      },
    ],
    techs: [
      { name: "React Native", icon: ReactIcon },
      { name: "REST", icon: Rest },
      { name: "CSS", icon: CSS },
      { name: "JavaScript", icon: JS },
    ],
    pictureSm: "crypto",
    repository: "https://github.com/cecam92/CryptoTracker",
  },
];

export default Projects;
