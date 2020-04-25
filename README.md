# MERN Authentication Boilerplate

## A basic authentication boilerplate created with the **MERN** (MongoDB, Express, React, Node) stack and Redux.

### Based on the MVC pattern utilizing Models, Routes, Controllers and Views.

![MVC](./MVC-Example.png)

### Getting Started

1. Clone the repo and use your CLI to `cd auth-boilerplate` into it.
2. Type `yarn install` or `npm install` inside the root folder to install the dependencies in your `package.json` file.
3. Type `cd client` to move into the client folder and install your client-side dependencies with `yarn install` or `npm install`.
4. Get a MongoDB test DataBase set up: <https://www.mongodb.com/cloud/atlas>, create a collection called `products` and import the `/data/products.json` file into your db for some test data. Copy your MongoDB connection string. You will need it in step 5.
5. Change your `env.example` file to `.env`. Replace `<Your MongoDB connection string>` with the MongoDB connection string you've copied in step 4 and replace `<password>` with your actual password.
6. Inside your `.env` file, add a secret for the `passport-jwt` authentication strategy.
7. Sign up with an email testing service such as <https://mailtrap.io> and enter the username and password inside the `.env` file for `MAIL_USER` and `MAIL_PASS` respectively. If you use any other service than mailtrap, open the `mailer.js` file and make changes accordingly.

8. Type `yarn dev` or `npm dev` in your root folder to run your frontend and backend servers.

Happy Coding! 🙃👨‍💻👩‍💻🙏🍭
