module.exports = {
  setupFiles: [],

  transform: { '^.+\\.js$': 'babel-jest' },

  modulePathIgnorePatterns: ['<rootDir>/coverage/'],

  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/coverage/',
  ],

  testMatch: ['<rootDir>/**/*.spec.js'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/coverage/',
  ],

  watchPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/coverage/',
  ],

  timers: 'fake',
  clearMocks: true,
  resetMocks: false,

  collectCoverage: true,
  collectCoverageFrom: ['**/*.js', '!**/jest.config.js'],
  coverageDirectory: './coverage/cov',
  coverageReporters: ['lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
