# Pyramids Template

[![devDependencies Status](https://david-dm.org/nileninja/pyramids/dev-status.svg)](https://david-dm.org/nileninja/pyramids?type=dev)

**Please open all foundation related issues with this template on the main [Foundation for Sites](https://github.com/zurb/foundation-sites/issues) repo.**

Built on Zurp Foundation. A Gulp-powered build system with these features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript concatenation
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)

This template can be installed with the Foundation CLI, or downloaded and set up manually.

### Using the CLI

Install the Foundation CLI with this command:

```bash
npm install foundation-cli --global
```

The CLI will prompt you to give your project a name. The template will be downloaded into a folder with this name.

Now `cd` to your project name and to start your project run 

```bash
foundation watch
```

### Manual Setup

To manually set up the template, first download it with Git:

```bash
git clone https://github.com/NileNinja/Pyramids.git Pyramids
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd Pyramids
npm install
bower install
```

Finally, run `npm start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `npm run build`.
