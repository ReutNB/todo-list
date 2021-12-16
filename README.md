# TodoList

This project was generated using [Nx](https://nx.dev).

## Task
### TODO App
Your task is to create a simple todo app.

You have the backend service ready (NestJs)

The app should look nice - but nothing special :relaxed:

**Features:**
1. the user should be able to view all tasks in a table view
2. the user should be able to add a task
3. the user should be able to update a task
4. the user should be able to mark a task as complete from the table view and remove it from the list

**Optional:**
1. the user should be able to view only overdue tasks
2. the user should be able to sort tasks by priority

**Bonus task:**

Add cypress test (automate test) to the add task capability

## Development server

### API - NestJS
Run `npm run start:api` to start the api server
(no need to touch it, you can change things if you like)

all apis are available in **http://localhost:3333/api/task**

see `apps/src/app/task/task.controller` for api endpoints

### UI - Angular
Run `ng serve` to run angular dev server. Navigate to http://localhost:4800/.



## Cypress

In order to run cypress tests, you should run the dev-servers

and then run `npm run e2e:open` to open cypress runner and run tests

