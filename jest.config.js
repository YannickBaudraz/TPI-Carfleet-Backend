module.exports = {
  rootDir: './test/auto',
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'ts'],
  transform: { '.[jt]sx?$': 'ts-jest' },
  testRegex: ['\\.test\\.ts$'],
  testPathIgnorePatterns: ['abstract'],
  setupFilesAfterEnv: ['./jest.setup.js'],
};
