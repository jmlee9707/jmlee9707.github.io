
import type { GatsbyConfig } from 'gatsby';
import siteMetadata from './gatsby-site-meta-data';

import { darkTheme, lightTheme } from './src/styles/const';

const config:GatsbyConfig = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-emotion-dark-mode`,
      options: {
          light: lightTheme,
          dark: darkTheme,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}

export default config