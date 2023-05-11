# 🛠️ Module Template

This is a boilerplate template for creating node modules with React, TypeScript, and Rollup.

The template includes a testing environment using Jest and React Testing Library.

## 🌟 Features

- React and TypeScript support
- Rollup bundling configuration
- Jest testing environment with React Testing Library
- ESLint and Prettier for code formatting and linting
- New JSX Transform support for React 17 and above

## 📦 Modules

- `react` and `react-dom`: React library and its DOM manipulation utilities
- `typescript`: A superset of JavaScript that adds static types
- `rollup`: A module bundler for JavaScript applications
- `@babel/core`, `@babel/preset-env`, `@babel/preset-react`, and `@babel/preset-typescript`: Babel compiler and presets for transforming modern JavaScript, TypeScript, and React code, including the new JSX Transform
- `@testing-library/jest-dom` and `@testing-library/react`: Utilities for testing React components with Jest
- `eslint`: A pluggable and configurable linter for JavaScript and TypeScript
- `prettier`: An opinionated code formatter for JavaScript, TypeScript, and more
- `sass`: A popular CSS preprocessor

## 🔧 Configuration Files

### rollup.config.mjs

This file configures Rollup for bundling the library, with input from `./src/index.tsx` and output in CommonJS and ES module formats. The plugins used in this configuration include:

- `@rollup/plugin-commonjs`: Converts CommonJS modules to ES modules
- `@rollup/plugin-node-resolve`: Resolves modules from node_modules
- `rollup-plugin-typescript2`: TypeScript support for Rollup
- `rollup-plugin-peer-deps-external`: Automatically externalizes peerDependencies
- `rollup-plugin-postcss`: Adds PostCSS and Sass support for importing styles
- `@rollup/plugin-babel`: Transforms code using Babel, including the new JSX Transform for React 17 and above
- `@rollup/plugin-eslint`: Lints the code using ESLint

### tsconfig.json

This file configures TypeScript, setting options like output directory, target, and module resolution. It also enables JSX support for React with the "preserve" option, allowing Babel to handle the JSX transformation.

### babel.config.js

This file configures Babel, setting presets for transforming modern JavaScript, TypeScript, and React code, including the new JSX Transform for React 17 and above.

### .eslintrc.json

This file configures ESLint, with support for React and TypeScript. It also includes the `react-hooks` plugin, which enforces the Rules of Hooks in React components.

### jest.config.js

This file configures Jest for testing, setting the test environment to `jsdom` and using Babel for transforming test files, including the new JSX Transform for React 17 and above. It also sets up a module name mapper for handling styles.

## 🚀 Usage

- Install dependencies: `npm install`
- Run tests: `npm run test` or `npm run test:watch`
- Build the library: `npm run build` or `npm run build:watch`
- Run the development server: `npm run dev`

## 📄 License



MIT
