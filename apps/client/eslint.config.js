import perfectionist from "eslint-plugin-perfectionist";

module.exports = {
  extends: [perfectionist.configs["recommended-alphabetical"], "next/core-web-vitals"],
};
