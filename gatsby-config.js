module.exports = {
  siteMetadata: {
    title: `Cesar Martinez`,
    description: `Cesar Martinez Portfolio`,
    author: `Cesar Martinez`,
    siteUrl: "https://culimbo.com",
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
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: "https://www.culimbo.com",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
  ],
};
