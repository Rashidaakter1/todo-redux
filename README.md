
# Todo Application

## Objective

This is a simple Todo application built using React, Redux and Shadcn Ui for managing tasks.

## Links

- [Todo application](https://course-review-server-o92qcqcco.vercel.app/)


## Features
- Add, update, delete, and view tasks.
- Mark tasks as completed or pending.
- Set task priority (high, medium, low).
- Responsive UI built with React, using Redux for state management.


## Tech Stack
- Backend: Node.js, Express.js, MongoDB, Mongoose
- Frontend: React, Redux, TailwindCSS
- API: RESTful API for task management

## Run Locally

Clone the project

```bash
  git clone https://github.com/Rashidaakter1/Course-review-server.git
```

Go to the project directory

```bash
  cd Course-review-server
```

Install dependencies

```bash
  npm install
```

Start the server with development

```bash
  npm run start
```


###  API Endpoints

#### Retrieve a list of all tasks and also use query parameters to see the as your preference

```http
  GET /todos
```

#### Create a new task.

```http
  POST /todos
```

#### Update a task's information.

```http
  PUT /todo/:id
```
#### Delete a task's information.

```http
  DELETE /todo/:id
```


