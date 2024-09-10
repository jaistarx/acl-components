module.exports = {
  preset: 'ts-jest',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/src/configs/setup-tests.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/configs/file-transformer.js',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: ['node_modules/(?!(.*\\.mjs$|@mui/x-date-pickers|@babel/runtime/helpers/esm))'],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy',
    '^@acl/(.*)$': '<rootDir>/src/@acl/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!<rootDir>/src/@acl/**'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
