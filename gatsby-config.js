module.exports = {
  siteMetadata: {
    title: `Cesar Martinez`,
    description: `Cesar Martinez Portfolio`,
    author: `Cesar Martinez`,
    url: "https://culimbo.com",
    image: "/me.png",
    twitterUsername: "@cecam92",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
  ],
};
