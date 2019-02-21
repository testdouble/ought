// Type definitions for ought 0.0.4
// Project: https://github.com/testdouble/ought
// TypeScript version: 3.3.3

export function equal<T>(actual: T, expected: T, msg?: string): void;

export function notEqual<T>(actual: T, expected: T, msg?: string): void;

interface UserConfig {
  color: boolean;
}

export function config(userConfig: UserConfig): UserConfig;
