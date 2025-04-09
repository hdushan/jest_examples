/** @type {import('jest').Config} */

export default {
  verbose: true,
  collectCoverage: true,
  coverageReporters: ["text"],
  collectCoverageFrom: [
    "**/src/*.js",
    "**/src/*.mjs",
    "!**/src/*.test.js",
    "!**/src/*.test.mjs",
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
  testEnvironment: 'node',
  transform: {
    "^.+\\.[m]?js$": "babel-jest"
  },
  moduleFileExtensions: ['js', 'mjs'],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
    "**/?(*.)+(spec|test).mjs"
  ],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  }
};
