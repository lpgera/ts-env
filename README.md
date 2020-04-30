# ts-env

An environment variable reader for TypeScript. Simple and minimal. ✨

[![npm package](https://img.shields.io/npm/v/%40lpgera%2Fts-env.svg)](https://www.npmjs.com/package/@lpgera/ts-env)
[![Actions Status](https://github.com/lpgera/ts-env/workflows/Tests/badge.svg)](https://github.com/lpgera/ts-env/actions)
[![Coverage Status](https://coveralls.io/repos/github/lpgera/ts-env/badge.svg?branch=master)](https://coveralls.io/github/lpgera/ts-env?branch=master)
[![Dependencies](https://img.shields.io/david/lpgera/ts-env)]()

## Install

This package requires `typescript` to be installed.

```bash
# with npm
npm install @lpgera/ts-env

# or with Yarn
yarn add @lpgera/ts-env
```

## Usage example

```typescript
import tsEnv from '@lpgera/ts-env'

// Type of optionalString will be: string | undefined
const optionalString = tsEnv.string('STRING')

// Type of requiredString will be: string
// If a string cannot be read, an error will be thrown
const requiredString = tsEnv.stringOrThrow('STRING')
```

## API

### .string(key: string): string | undefined

Reads a string value from `process.env[key]`.

### .stringOrThrow(key: string): string

Reads a string value from `process.env[key]`.
Throws an error if it's `undefined`.

### .boolean(key: string): boolean | undefined

Reads a boolean value from `process.env[key]`.
"0" and "false" are considered `false`, "1" and "true" are considered `true`.
Everything else will be read as `undefined`.

### .booleanOrThrow(key: string): boolean

Reads a boolean value from `process.env[key]`.
"0" and "false" are considered `false`, "1" and "true" are considered `true`.
Everything else will result in an error thrown.

### .number(key: string): number | undefined

Reads a number value from `process.env[key]`.
If a number cannot be parsed, it will return `undefined`.

### .numberOrThrow(key: string): number

Reads a number value from `process.env[key]`.
If a number cannot be parsed, an error will be thrown.
