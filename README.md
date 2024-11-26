# Alfaker

> A blazing fast fake data generator for Alfred, powered by Deno and Faker.js. Generate realistic test data without leaving your workflow.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Deno](https://img.shields.io/badge/Deno-1.41-black.svg)](https://deno.land)

## 🚀 Features

- **Zero Dependencies**: Self-contained binary, no Node.js or other runtime required
- **Lightning Fast**: Built with Deno, compiled to native executable
- **Rich Data Types**: 20+ categories of fake data generation
- **Smart Categorization**: Organized interface for quick access
- **Clipboard Ready**: Copy generated data with a single keystroke
- **Type Safe**: Built with TypeScript for reliability

## 🎯 Use Cases

- Quickly fill forms with realistic test data
- Generate placeholder content for designs
- Create sample datasets for testing
- Generate realistic user profiles
- Mock API response data

## ⚡️ Quick Start

1. Download the latest release
2. Double-click to install the Alfred workflow
3. Type `alfaker` followed by the type of data you need
   - `alfaker name` - Generate names
   - `alfaker email` - Generate emails
   - `alfaker address` - Generate addresses

## 🛠 Development

```bash
# Clone the repository
git clone https://github.com/maxifjaved/alfaker.git

# Enter the directory
cd alfaker

# Run in development
deno task dev

# Build
deno task build
```

## 📦 Installation

### Direct Download
Download the latest `.alfredworkflow` file from the [releases page](https://github.com/maxifjaved/alfaker/releases).

### Manual Build
```bash
git clone https://github.com/maxifjaved/alfaker.git
cd alfaker
./build.sh
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📝 License

MIT License - feel free to use this in your own projects!

## 🙏 Acknowledgments

- Built on top of the excellent [Faker.js](https://fakerjs.dev/)
- Powered by [Deno](https://deno.land/)
- Inspired by the Alfred community

---

<p align="center">Made with ❤️ for the Alfred community</p>
