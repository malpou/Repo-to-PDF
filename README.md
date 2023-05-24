# Repo-to-PDF

Repo-to-PDF is a tool that allows you to convert a GitHub repository into a PDF file. It clones the repository, processes the files, and then creates a PDF.

## Installation

To use Repo-to-PDF, you have two options: cloning the repository from GitHub or installing it directly using NPX. Choose the method that suits you best.

### Cloning the Repository

1. Clone the repository:
```shell
git clone https://github.com/BankkRoll/Repo-to-PDF
```

2. Navigate to the Repo-to-PDF directory:
```shell
cd Repo-to-PDF
```

3. Install the dependencies:
```shell
npm install
```

### Installing with NPX

1. Install Repo-to-PDF using NPX:
```shell
npx repo2pdf
```

This will download and install the latest version of Repo-to-PDF from the NPM registry.

## Usage

Once you have installed Repo-to-PDF, you can use it to generate PDF files from GitHub repositories.

1. The script will install and start running. You will just follow the prompt:

You will be prompted to provide the following information:
- The URL of the GitHub repository
- The name of the output PDF file
- Whether or not you wish to keep the cloned repository after generating the PDF

The script will then clone the repository, process the files, and generate a PDF document based on the provided information.

Please note that you need to have Node.js installed on your system in order to run Repo-to-PDF.


## Configuration

Repo-to-PDF automatically ignores certain file types and directories (e.g., `.png`, `.git`). To customize the files and directories to ignore, edit the `excludedNames` and `excludedExtensions` variables in `clone.js`.


## Troubleshooting / FAQ

**Q: I'm getting an error "Failed to install [package-name]". What should I do?**
A: Make sure you have Node.js and npm installed on your system. Try running the following command to install the required package manually:
```shell
npm install [package-name]
```

**Q: How can I customize the styling of the generated PDF?**
A: You can modify the code in `clone.js` to change the font, font size, colors, and other styling options for the PDF document.
- Edit the `excludedExtensions` variable in `clone.js` to exclude certain file types from the PDF conversion.


## Contributing

We welcome contributions! Here's how you can help:

- **Report bugs:** If you find a bug, please create an issue on GitHub describing the problem.
- **Suggest enhancements:** If you think of a way to improve Repo-to-PDF, we'd love to hear about it! Create an issue on GitHub to share your ideas.
- **Write code:** If you'd like to contribute code to fix a bug or implement a new feature, please fork the repository, make your changes, and submit a pull request.

## License

Repo-to-PDF is open source software, licensed under the MIT License. See the `LICENSE` file for more information.
