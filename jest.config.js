/** @type {import('jest').Config} */
export default {
  verbose: true,
  collectCoverage: true,
  coverageReporters: ["text"],
  collectCoverageFrom: [
    "**/src/*.js",
    "!**/src/*.test.js",
    "!**/node_modules/**",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};
