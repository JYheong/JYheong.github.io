const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {


		// Copy the contents of the `public` folder to the output folder
	// For example, `./public/css/` ends up in `_site/css/`
	eleventyConfig
		.addPassthroughCopy({
			"./public/": "/"
		})
		.addPassthroughCopy("./content/feed/pretty-atom-feed.xsl");

	// Run Eleventy when these files change:
	// https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

	// Watch CSS files
	// eleventyConfig.addWatchTarget("./css/**/*.css");


	eleventyConfig.addPassthroughCopy("./styles/") // https://robmc.dev/blog/add-css-to-your-eleventy-site/
	eleventyConfig.addWatchTarget("./styles/");

	// Watch images for the image pipeline.
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpg,jpeg,gif}");



	eleventyConfig.addPlugin(eleventyNavigationPlugin);


	return {
		dir: {
			input: ".",
		}
	}
};
