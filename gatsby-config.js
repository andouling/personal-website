module.exports = {
  siteMetadata: {
    title: "Andrey Chernov",
    author: "Andrey Chernov",
    siteUrl: "https://github.com/andouling",
  },

  plugins: [
    "gatsby-plugin-layout",
    "gatsby-plugin-sass",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-netlify",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/posts`,
        name: "posts",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/projects`,
        name: "projects",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/resume`,
        name: "resume",
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-autolink-headers",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-katex",
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
              showLineNumbers: true,
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 650,
              linkImagesToOriginal: false,
              showCaptions: true,
            },
          },
        ],
      },
    }
  ],
};
