const inspect = require("util").inspect;

module.exports = function (eleventyConfig) {

  // Watch for sass file changes
  eleventyConfig.addWatchTarget("src/sass/");

  // Let some files pass through to public
  eleventyConfig.addPassthroughCopy("src/_redirects");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/images");

  // Allow for inspection
  eleventyConfig.addFilter("debug", (content) => `${inspect(content)}`);

  // Return a subset of an array based on attr
  eleventyConfig.addFilter("allButCurrent", function (arr, currPage) {
    // Filters out current page
    const pageArr = arr.filter((page) => page.url !== currPage);
    return pageArr;
  });

  // Helper to sort pages collection by frontmatter "order"
  eleventyConfig.addCollection("orderedPages", function (collection) {
    return collection.getFilteredByTag("pages").sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });

  // Helper to sort products collection by frontmatter "order"
  eleventyConfig.addCollection("orderedProducts", function (collection) {
    return collection.getFilteredByTag("products").sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });

  return {
    addPassthroughCopy: true,
    templateFormats: ["md", "njk", "html"],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: "/",

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
    },
  };

};