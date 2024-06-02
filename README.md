# Software Engineering Community Competition - Official Website

This repository contains the official website for the Software Engineering Community competition. The website is built using Next.js, with Tailwind CSS and the shadcn UI library.

## Features

- Modern UI with Tailwind CSS
- Shadcn UI components
- Contact form with email functionality (development only)

## Development Setup

To run this project locally, follow these steps:

### Prerequisites

- Node.js (>= 12.x)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/Software-Engineering-Community.git
cd Software-Engineering-Community
```

2. Install dependencies:

```bash
yarn install
```

3. Set up environment variables:

Create a .env.local file in the root directory of your project and add the following variables:

```
BASE_PATH=/Software-Engineering-Community
NEXT_PUBLIC_BASE_PATH=/Software-Engineering-Community
NODEMAILER_EMAIL=youremail@gmail.com
NODEMAILER_PASSWORD=*******(App password)
```

_see .env.example file for the required environment variables._

### Running the Development Server

To start the development server, run:

```bash
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

### Sending Emails

For the contact form, a mail service using Nodemailer has been implemented. This is for development purposes only and uses Gmail. You will need to set up the correct verification on Google. Instructions can be found here or by searching on Google.

Note: The email functionality does not work on GitHub Pages but is included for local development.

### Deployment

This project is configured to deploy on GitHub Pages. Ensure that the NEXT_PUBLIC_BASE_PATH environment variable is correctly set in your deployment configuration.

### Contributing

We welcome contributions! Please fork the repository and create a pull request with your changes. Make sure to update the README.md if you make any notable changes to the project.
