import { createDefaultPreset, type JestConfigWithTsJest } from "ts-jest";

const presetConfig = createDefaultPreset();

const jestConfig: JestConfigWithTsJest = {
  ...presetConfig,
  displayName: "unit tests",
  rootDir: ".",
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["ts", "js", "json"],
  testMatch: ["<rootDir>/src/**/*.unit.test.ts"],
  testEnvironment: "node",
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts", "!src/**/index.ts"],
  coverageReporters: ["text"],
  transform: {
    "^.+\\.ts$": ["ts-jest", { isolatedModules: true }],
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  cacheDirectory: "<rootDir>/.jest-cache",
  maxWorkers: 1,
};

export default jestConfig;
