import { createDefaultPreset, type JestConfigWithTsJest } from 'ts-jest'

const presetConfig = createDefaultPreset()

const jestConfig: JestConfigWithTsJest = {
  ...presetConfig,
  displayName: 'integration tests',
  rootDir: '.',
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  testMatch: ['<rootDir>/**/*.it.test.ts'],
  testEnvironment: 'node',
  clearMocks: true,
  collectCoverage: false,
  transform: {
    '^.+\\.ts$': ['ts-jest', { isolatedModules: true }],
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  cacheDirectory: '<rootDir>/.jest-cache',
  maxWorkers: 1
}

export default jestConfig