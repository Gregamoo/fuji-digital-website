module.exports = {
  moduleDirectories: ["./node_modules", "src"],
  // other important stuff
  setupFilesAfterEnv: ["./jest-setup.js"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|png|less)$": "<rootDir>/src/mocks/defaultFileMock.js",
  },
};
