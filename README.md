# Movie Time API
An api where tou can select your favotites movies

## Demo
Link to the web page: https://frosty-cray-ae1c5a.netlify.app/

## Getting Started

### Prerequisites
To install the project you should have:
* Nodejs 12.19.0 
* npm 6.14.8

### Install all the dependencies
First, change to the root directory of the project, you will see 2 main diretories **BACKEND** and **FRONTEND**, in **BACKEND** there is 3 directories so, in order to install
the dependencies you have to go to **API_SERVER**, **AUTH_SERVER**, **PROXY_SERVER** and **FRONTEND** (the first three are in the **BACKEND** directory) and inside each one execute the next command:
```
npm i
```

---

### Backend
In **BACKEND** directory the 3 directories that are there correspond to the 3 servers that this project needs to work and they are:
* API_SERVER
* AUTH_SERVER
* PROXY_SERVER

The **API_SERVER** is in charge to communicate with the database and fetch or manipulate the movie records base on the user rigths and the route selected. The **AUTH_SERVER**
is use to register the user, authenticate the user and generate the jwt to let the user use the API routes base on their privilages. At last the **PROXY_SERVER** is use to 
comunicate the **BACKEND** with the **FRONTEND** and generate the cookies where the jwt will store, this last server is pretend be use only to the final user, to use the admin
user is recomended connect dirrectly the **AUTH_SERVER** to authenticate and generate the jwt in order to connect with the **API_SERVER**.

First, you have to execute the script ***ApiKeys.js*** in **AUTH_SERVER** directory , this script will create the user roles to use the API, one for the common user and another 
for the admins. The only thing you need to pass to the script is the data of you MongoDB instance, it could be in a cloud or local instance thats depens on you.

Second, to start each server you have to create a ***.env*** file in the root directory of each them, to fill this file you have to seek in the ***.env-example*** of each server 
directory to see what environment variables it needs. In the ***.env-example*** explains what is use for each environment variable. After you finish to create the ***.env*** 
files for the thre servers you can turn up them with the next comand:
```
npx nodemon
```
Of course you need to run this command in the root rirectory for the three servers one by one and I recoment you to start with the **API SERVER** and **AUTH SERVER** because
the **PROXY SERVER** depends of the first two.

If everything goes right you can visit the direction of the servers in the browser and their should give you a **Not Found in a JSON response**.

---

### Frontend

First, from the FRONTEND directory you need go to the **config** directory, inside there is a index where you will see 2 variables, the first one **proxyUrl** is the url of the 
proxy server nesesary to make all the requests to the API and authenticate. The second variable is **movieFilter** this is an array with should have 3 categories of the movie 
list you want to apper in the home page to the user can select. After set the variables now you have to fallow the next instructions base on your needs.

#### Development ambient:
If you want to start a dev ambient you should be at the root directory and execute the the next command in the console:
```
npm run build:dev
```
After executing the previous command you will notice a new directory called dist, this is where are the React bundles.
Now to run a dev server:
```
npm run start-server:dev
```
After that go head to your web browser and write `localhost:8080` the web page should be up and ready to use.

#### Production ambient
To build a production bundle you can run the next command:
```
npm run build:production
```
After run the previous command all the bundle generated will be in the dist directory, you can put all the content from dist in your web server ready to use.

## Backend Built With
* @hapi/boom 9.1.1
* bcrypt 5.0.0
* body-parser 1.19.0
* cors 2.8.5
* dotenv 8.2.0
* express 4.17.1
* joi 17.3.0
* mongodb 3.6.3
* jsonwebtoken 8.5.1
* passport 0.4.1
* passport-jwt 4.0.0
* passport-http 0.3.0
* nodemon 2.0.6^
* axios 0.21.1
* cookie-parser 1.4.5    

## Frontend Built With
* React 17.0.0
* Babel 7.12.3
* Sass 1.27.0
* Webpack 5.1.3

## External resources
* DB: https://www.mongodb.com/cloud/atlas

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
