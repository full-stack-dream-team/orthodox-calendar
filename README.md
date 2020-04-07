# Node React Boilerplate

## A basic boilerplate created with the **MERN** (MongoDB, Express, React, Node) stack.

### Based on the MVC pattern utilizing Models, Routes, Controllers and Views.

![MVC](./MVC-Example.png)

### Getting Started

1. Create a Project folder on your computer and use your CLI to `cd your-project-folder-name` into it.
2. Clone both the backend and frontend repositories into your project folder.
3. Navigate to the root of your frontend folder (`cd frontend`) and type `yarn install` or `npm install` to install the dependencies in your `package.json` file. Do the same with your backend.
4. Get a MongoDB test DataBase set up: <https://www.mongodb.com/cloud/atlas>, create a collection called `products` and import the `/backend/data.json` file into your db for some test data. Copy your MongoDB connection string. You will need it in step 5.
5. Create a `.env` file at the root folder of your backend. Add the following:

`NODE_ENV=development`

`DATABASE=<Your MongoDB connection string>`

`PORT=5000`

6. Run `yarn dev` or `npm dev` and both the front- and backend servers will start running!

Happy Coding! 🙃👨‍💻👩‍💻🙏🍭
