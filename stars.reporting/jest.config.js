module.exports = {
  preset: 'ts-jest',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/configs/setup-tests.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/configs/file-transformer.js',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy',
    '^@acl/(.*)$': '<rootDir>/src/@acl/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
