
# InnovandoLiving Backend Server - (e-Commerce Strapi Backend)

This project works as the backend for the E-commerce InnovandoLiving. It was designed as a monolithic system due to its small functionalities. Even though it is a small backend system, it works as a starting point for a more robust system if it's required. Feel free to modify as you wish, this project is not under any kind of license.


## Getting Started 🚀

This system was deployed on heroku but also it can be deployed on your favorite system (AWS/GCP/Azure/Digital Ocean/etc...).


### Pre-requisites 📋
- You must have configured a AWS S3 Bucket.

- Config database connection:
Go to config/database.js file and provide the credentials for your database

- Config AWS S3 Bucket
Go to config/plugins.js file and provide the credentials for your AWS S3 Bucket.

- Config JWT Token Key
(1) Go to config/server.js and assign a value in the second parameter if ADMIN_JWT_SECRET doesn't exist.
(2) Go to extensions/user-permissions/config/jwt.js and add a second value if JWT_SECRET doesn't exists.



## Deploy 📦

On Heroku:
* [#1] Go to heroku and sign in with your account, create a New App. 
* [#2] Install Heroku Git in your computer.
* [#3] Log into heroku from your console being inside your project. 
* [#4] Run the commands listed in "Create a new Git repository" in heroku inside of the new app you created in the previous step.
* [#5] Run the commands listed in "Deploy your application" in heroku inside of the new app you created in the previous step.
* [#6] Go to Heroku page and select Settings.
* [#7] Click on "Reveal Config Vars" button
* [#8] Add the following Variables with its values in this section: 
AWS_ACCESS_KEY_ID=<Key value obtained from AWS S3 >
AWS_ACCESS_SECRET=<Key from AWS S3 when we configured our Bucket>

If we follow all the steps described above, we should have our backend online.


## Built with 🛠️

* [MercadoPago](https://www.npmjs.com/package/mercadopago) - This library provides developers with a simple set of bindings to help you integrate Mercado Pago API to a website and start receiving payments..
* [Jwt-Decode](https://www.npmjs.com/package/jwt-decode) - small browser library that helps decoding JWTs token which are Base64Url encoded.
* [Strapi](https://www.npmjs.com/package/strapi) - The most advanced open-source headless CMS to build powerful APIs with no effort.


## Version 📌

We used [SemVer](http://semver.org/) for versioning. Check out the whole version list available [tagsRepo](https://github.com/dguglielmi-git/innovandoliving-backend/tags).


## Author ✒️

* **Daniel Guglielmi** - *Software Engineer* - [dguglielmi-git](https://github.com/dguglielmi-git)


## License 📄

No license required.


## Thanks 🎁

* To anyone who uses this project. 😇 

---
⌨️ with ❤️ by [dguglielmi-git](https://github.com/dguglielmi-git) 😊