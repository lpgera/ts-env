# ts-env

An environment variable reader for TypeScript. Simple and minimal. ✨

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
