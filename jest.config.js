const commonTestMatch = ['<rootDir>/src/**/*.(spec|test).[jt]s?(x)'];
const commonTestPathIgnorePatterns = ['<rootDir>/src/development/'];

module.exports = {
  projects: [
    {
      runner: 'jest-runner-eslint',
      displayName: 'lint',
      testMatch: commonTestMatch,
      testPathIgnorePatterns: commonTestPathIgnorePatterns,
    },
    {
      displayName: 'test',
      preset: 'ts-jest',
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: ['<rootDir>/configs/setup-tests.js'],
      transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/configs/file-transformer.js',
      },
      moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
      moduleDirectories: ['node_modules', 'src'],
      transformIgnorePatterns: [
        // NOTE: Allow ES modules from @mui/x-date-pickers and @babel/runtime
        'node_modules/(?!(.*\\.mjs$|@mui/x-date-pickers|@babel/runtime/helpers/esm))',
      ],
      moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy',
        '\\.(svg|jpg|jpeg|png|gif|eot|otf|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/configs/file-transformer.js',
      },
      testMatch: commonTestMatch,
      testPathIgnorePatterns: commonTestPathIgnorePatterns,
    },
  ],
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.[jt]s?(x)',
    '!<rootDir>/src/**/*.(story|type).[jt]s?(x)',
    '!<rootDir>/src/development/**/*',
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  cache: true,
  errorOnDeprecated: true, // NOTE: Warn about deprecated Jest APIs
};
