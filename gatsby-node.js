/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { resolve } = require('path');

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ stage, plugins, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      plugins: [
        plugins.normalModuleReplacement(
          /use-query-params/,
          resolve(__dirname, 'static/use-query-params.js'),
        ),
      ],
    });
  }
};
