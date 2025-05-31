# 🛠️ Module Template

A boilerplate template for creating Node modules with React and TypeScript.

## 🌟 Features

- React and TypeScript support
- Testing environment with Jest and React Testing Library
- Code formatting and linting with ESLint and Prettier
- TypeScript compiler configuration
- Automatic module type definitions

## 📦 Project Structure

```
.
├── src/           # Source code
├── lib/           # Compiled output files
├── tests/         # Test files
├── example/       # Example code
└── types/         # Type definition files
```

## 🔧 Dependencies

### Core Dependencies

- `react` (>=16.8.0)
- `react-dom` (>=16.8.0)

### Development Dependencies

- `typescript`: Static type support
- `jest` & `@testing-library/react`: Testing environment
- `eslint` & `prettier`: Code quality management
- `sass`: CSS preprocessor

## 📦 Packaging

### Module Configuration

The module is configured as an ES module with the following settings in `package.json`:

```json
{
  "type": "module",
  "main": "./lib/index.js",
  "types": "./lib/types/index.d.ts",
  "files": ["lib/**/*"]
}
```

### Distribution Files

When publishing to npm, only the following files are included:

- `lib/` directory containing:
  - Compiled JavaScript files
  - TypeScript declaration files
  - Source maps (if enabled)

### Publishing

1. Update the version in `package.json`
2. Run `npm run build` to compile the latest changes
3. Run `npm publish` to publish to npm registry

## 🚀 Usage

### Installation

```bash
npm install
```

### Development

```bash
# Run linter
npm run lint

# Build
npm run build

# Run tests
npm run test
npm run test:watch
```

### Build

Built files are generated in the `lib` directory:

- `lib/index.js`: Compiled JavaScript file
- `lib/types/index.d.ts`: TypeScript type definitions

## 📝 License

MIT
