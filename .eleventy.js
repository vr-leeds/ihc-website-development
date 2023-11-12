const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addPassthroughCopy({
        "node_modules/flowbite/dist/flowbite.min.js": "assets/js/flowbite.min.js"
    });

    return {
      dir: {
        input: "src",
        output: "dist"
      }
    }
}
