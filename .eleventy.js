module.exports = function(eleventyConfig) {
    // Add directories that need to be copied verbatim
    // to the output directory
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/assets");

    return {
        dir: {
          input: "src",
          output: "public"
        }
      };
};
