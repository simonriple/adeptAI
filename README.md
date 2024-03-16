# Adept AI

# Preview 🧸

[Preview](https://Preview/)

## Available Scripts

Install:

```bash
npm install
```

In the project directory, you can run:

```bash
npm run dev
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

```bash
npm run lint
```

Launches the lint runner in the interactive watch mode.<br>

```bash
npm run build
```

Launches the prettier for format a file in-place<br>

```bash
npm run prettier:write

npm run checkcode
```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

## Overview

The project is built using the following technologies:

-   **Next.js**: A React framework for building modern web applications.
-   **Styled-components**: CSS-in-JS library for styling components.
-   **Snyk**: Dependency vulnerability scanning.
-   **Husky**: Git hooks for enforcing code quality.
-   **Prettier**: Code formatting.
-   **ESLint**: JavaScript linting tool.
-   **GitHub Actions (GHA)**: Used for building and deploying the project.
-   **Release Please**: GitHub Action for automated release management.

## Project Structure

The project follows a structured directory layout:

-   **Components**: Reusable React components.
-   **Helpers**: Utility functions.
-   **Pages**: Next.js pages.
-   **Styles**: Styled-components styling.
-   **Utils**: Utility functions related to authentication and authorization.
-   **Types**: Type definitions and interfaces.

## Release Rules

We follow the following release rules to categorize our changes:

-   `feat` and `feature`: New features.
-   `fix`: Bug fixes.
-   `perf`: Performance improvements.
-   `revert`: Reverted changes.
-   `docs`: Documentation updates.
-   `style`: Styling changes.
-   `chore`: Miscellaneous chores.
-   `bump`: Bump package versions.
-   `refactor`: Code refactoring.
-   `test`: Test-related changes.
-   `build`: Build system changes.
-   `ci`: Continuous integration updates.

## Deployment

The project is deployed to XXXXX using XXXXXX configuration. GitHub Actions (GHA) is used for building and deploying the application. We utilize the "release-please" GitHub Action to manage releases automatically.
