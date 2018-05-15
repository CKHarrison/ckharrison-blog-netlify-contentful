module.exports = {
  siteMetadata: {
    title: "Chris Harrison Blog",
    desc: "A new blog",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "vbnundbotuho",
        accessToken: "e5aa8cf054ae5a9be3ac3d3e4b4b2b1d1d0733f43a798627b333d041b696137b",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/static/assets`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
  ],
};

// pathPrefix: "/ckharrison-blog",
