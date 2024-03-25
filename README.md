# Project Directory Structure

This repository follows a modern folder structure commonly used in Next.js projects. Below is an overview of the directory layout:

```css
project-root/
│
│
├── src/
│ ├── components/
│ │ ├── Button/
│ │ │ ├── Button.js
│ │ │ ├── Button.module.css
│ │ │ └── index.js
│ │ │
│ │ ├── Nav/
│ │ │ ├── Nav.js
│ │ │ ├── Nav.module.css
│ │ │ └── index.js
│ │ │
│ │ ├── Dropdown/
│ │ │ ├── Dropdown.js
│ │ │ ├── Dropdown.module.css
│ │ │ └── index.js
│ │ │
│ │ └── ...
│ │
│ ├── layouts/
│ │ ├── DefaultLayout/
│ │ │ ├── DefaultLayout.js
│ │ │ ├── DefaultLayout.module.css
│ │ │ └── index.js
│ │ │
│ │ └── ...
│ │
│ ├── pages/
│ │ ├── index.js
│ │ ├── about.js
│ │ ├── contact.js
│ │ └── ...
│ │
│ ├── utils/
│ │ ├── api.js
│ │ ├── helpers.js
│ │ └── ...
│ │
│ └── ...
│
├── public/
│ ├── images/
│ │ └── ...
│ └── ...
│
├── styles/
│ ├── globals.css
│ ├── layout.css
│ └── ...
│
├── ...
│
├── package.json
└── ...
```

## Directory Structure

- **pages**: Contains all the Next.js pages. Each file here represents a route in your application.

- **src**: All source code resides under this directory.

  - **components**: Contains all reusable components. Each component is encapsulated within its own directory, including its JavaScript file, CSS module file (if using CSS modules for scoped styles), and an index file for easy importing.

  - **layouts**: Houses layout components that define the structure of your pages. Each layout is contained within its own directory, similarly to components.

  - **pages**: This folder mirrors the structure in the root `pages` directory. This allows for more complex page layouts or configurations, keeping pages organized and maintainable.

  - **utils**: Utility functions, helper functions, and other utilities are placed here. Keeping them organized helps maintain a clear separation of concerns.

- **public**: Static assets, such as images, are placed in the `public` directory. This structure maintains compatibility with Next.js's automatic asset optimization.

- **styles**: Contains CSS files for styling your application.
