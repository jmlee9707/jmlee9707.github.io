/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require('path')

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {}

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        '@/content': path.resolve(__dirname, 'content/'),
        '@/src': path.resolve(__dirname, 'src/'),
        '@/assets': path.resolve(__dirname, 'assets/'),
        '@/components': path.resolve(__dirname, 'src/components/'),
        '@/styles': path.resolve(__dirname, 'src/styles/'),
      },
    },
  })
}
