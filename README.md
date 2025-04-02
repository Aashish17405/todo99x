<p align="center">
  <img src="https://todo99x.netlify.app/vite1.svg" width="100" />
</p>
<p align="center">
    <h1 align="center">TODO-APPLICATION</h1>
</p>
<p align="center">
    <em><a href="https://todo99x.netlify.app">todo99x.netlify.app</a></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/last-commit/Aashish17405/Todo-Application?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Aashish17405/Todo-Application?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Aashish17405/Todo-Application?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/.ENV-ECD53F.svg?style=flat&logo=dotenv&logoColor=black" alt=".ENV">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<br>
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
</p>
<hr>

## Quick Links

> - [Overview](#overview)
> - [Features](#features)
> - [Repository Structure](#repository-structure)
> - [Getting Started](#getting-started)
>   - [Installation](#installation)
>   - [Running Todo-Application](#running-todo-application)
> - [Contributing](#contributing)
> - [License](#license)
> - [Acknowledgments](#acknowledgments)


---

## Overview

The Todo Application is a web-based task management tool built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application allows users to create, view, update, and delete tasks efficiently. It provides features to categorize tasks into completed and active tasks, enhancing the user's ability to manage their daily activities.

## Features

### 1. Create Todos
- Users can add new todos using an intuitive input field.
- Validation ensures that empty tasks cannot be added.

### 2. View All Todos
- Displays a list of all todos, both completed and incomplete.
- Todos are displayed with a checkbox to mark them as completed or incomplete.

### 3. View Completed Todos
- Users can filter to view only the completed tasks.
- Completed tasks are displayed with a checkbox, which is disabled to prevent further modification.

### 4. View Active Todos
- Users can filter to view only the active (incomplete) tasks.
- Active tasks are displayed with a checkbox to mark them as completed.

### 5. Update Todos
- Users can mark a task as completed or incomplete by clicking on the checkbox.
- The task's status is updated in the backend and the UI is refreshed to reflect the change.

### 6. Delete Todos
- Users can delete tasks from the list.
- A delete button next to each task allows for easy removal of unwanted tasks.

### 7. Responsive Design
- The application is designed to be responsive and works well on both desktop and mobile devices.
- Utilizes modern CSS practices to ensure a seamless user experience across different screen sizes.

### 8. Loading Indicators
- Loading spinners are displayed while data is being fetched or updated to enhance user experience.
- Provides visual feedback to users, indicating that an operation is in progress.

### 9. Notifications
- Success and error notifications using `react-toastify` to inform users about the status of their actions.
- Enhances user experience by providing immediate feedback.

### 10. Navigation
- Simple and intuitive navigation buttons to switch between different views (All Todos, Completed Todos, Active Todos).
- Uses `react-router-dom` for smooth navigation without reloading the page.

---

##  Repository Structure

```sh
└── Todo-Application/
    ├── README.md
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   └── vite1.svg
    ├── server
    │   ├── .env
    │   ├── db.js
    │   ├── index.js
    │   ├── package-lock.json
    │   ├── package.json
    │   └── zod.js
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── assets
    │   │   └── react.svg
    │   ├── components
    │   │   ├── allTodos.jsx
    │   │   ├── completedTodos.jsx
    │   │   ├── createTodos.jsx
    │   │   └── incompleteTodos.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── tailwind.config.js
    └── vite.config.js
```


##  Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **JavaScript**: `version ES14`
* **Node.js**: `version 20.13.1 or higher`
* **npm**: `version 6.x or higher`

###  Installation

1. Clone the Todo-Application repository:

```sh
git clone https://github.com/Aashish17405/Todo-Application
```

2. Change to the project directory:

```sh
cd Todo-Application
```

3. Install the dependencies:

```sh
npm install
```

###  Running Todo-Application

Use the following command to run Todo-Application:

```sh
node app.js
```

###  Tests

To execute tests, run:

```sh
npm test
```


##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/Aashish17405/Todo-Application/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Report Issues](https://github.com/Aashish17405/Todo-Application/issues)**: Submit bugs found or log feature requests for Todo-application.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/Aashish17405/Todo-Application
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

##  License

This project is protected under the [MIT](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## Acknowledgments

- **React Documentation**: The comprehensive and well-organized React documentation was instrumental in helping me understand and implement the various features of the React library. You can find more information [here](https://reactjs.org/docs/getting-started.html).
- **Tailwind CSS Documentation**: The Tailwind CSS documentation provided excellent guidance on utilizing utility-first CSS to build responsive and visually appealing UI components. Check out the documentation [here](https://tailwindcss.com/docs).
- **Open Source Libraries**: The open-source community has been incredibly supportive, providing numerous libraries and tools that significantly contributed to the development of this project.


[Return](#quick-links)

---