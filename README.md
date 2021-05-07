# Movie Time API
In this API you could select from a list of movies your favotites to store it in a MongoDB instance and check it later, the only thing you need to do first is signin with a 
valid email in order to start to use the API.

## Demo
Link to the web page: https://build-in-movietime-frontend.vercel.app/

## Getting Started

### Prerequisites
To install the project you should have:
* Nodejs 12.19.0 
* npm 6.14.8

### Install all the dependencies
First, change to the root directory of the project, you will see 2 main diretories **BACKEND** and **FRONTEND**, in **BACKEND** there is 3 directories so, in order to install
the dependencies you have to go to **API_SERVER**, **AUTH_SERVER**, **PROXY_SERVER** and **FRONTEND** (this three are in the **BACKEND** directory) and inside each one execute 
the next command:
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

First, from the **FRONTEND** directory you need go to the **config** directory, inside there is a index where you will see 2 variables, the first one **proxyUrl** is the url of 
the proxy server nesesary to make all the requests to the API and authenticate. The second variable is **movieFilter** this is an array that should have 3 categories of the 
movie list you want to apper in the home page to the user can select. After set the variables now you have to fallow the next instructions base on your needs.

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

## Usage like admin
At this point you had to been inserted the user roles in you MongoDB instance using the **ApiKeys.js** scripts in your **AUTH_SERVER** directory, when you do that, you should to 
copy the token from the DB record that have more user roles because thats the admin one. Now follow the next steps to login in the **AUTH_SERVER** and get a JWT.


### Login
To login directly using the **AUTH SERVER** you will need to use the basic authentication (you can read more about it in
https://en.wikipedia.org/wiki/Basic_access_authentication), you will need a random Hex string with 40 characters  generate by your own, this string will be use like you 
challange code to generate a new JWT in the future when you need it. If everything goes right the server will return a code string separate with ":", the first part of the 
string is your user id and the second one is you challange code you did send.

Route to ***post***:
```
your_auth_server_url/auth/login
```
Request example:
```
Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
Content-Type: application/json
{
  "verify": "7c618594ffbccb2aa623c94acdc7aa46694a7dfe"
}
```
If everything goes right the server will return something like this:
```
{
  "name": "Username", 
  "code": "b7a862fd251e6b4465a5486e:b7a862fd251e6b4465a548667b03511075b530ca"
}
```

### Generate a JWT
Now, with the code the **AUTH SERVER** return to you, you can generate a JWT. To do that you need to send the Api key for the admin user you previously inserted and your code 
you did get by login. The JWT the server return to you is only valid by a period of time (time you should have configure when you turn up the servers) so, when it expires
you have to repeat this step.

Route to ***post***:
```
your_auth_server_url/auth/token
```
Request example:
```
Content-Type: application/json
{
  "code": "b7a862fd251e6b4465a5486e:b7a862fd251e6b4465a548667b03511075b530ca",
  "apiKey": "e44ea8b5f074daec0cf3a2c1f40d162fd0b59dd7"
}
```
If everything goes right the server will return something like this:
```
{
  "jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDBkMmI4NjVjZTIyNDAwMDk1N2VmNTciLCJzY29wZXMiOlsibW92aWVzOnJlYWQiLCJtb3ZpZXM6Y3JlYXRlIiwibW92aWVzOnVwZGF0ZSIsIm1vdmllczpkZWxldGUiLCJ1c2VyLW1vdmllczpyZWFkIiwidXNlci1tb3ZpZXM6Y3JlYXRlIiwidXNlci1tb3ZpZXM6ZGVsZXRlIl0sImlhdCI6MTYxMTg4MTAzNiwiZXhwIjoxNjExODgxOTM2fQ.ARO3ewVP6akcI0ErH7a4SN2E2ZT0QPNCSEXx6VTR6I0"
}
```

### Request to the API
At last, everytime to made a request to your **API SERVER** you have to include the Authorization header with a Bearer token that in this case is the JWT (you can read more 
aboue that here https://swagger.io/docs/specification/authentication/bearer-authentication/) this will allow you to fetch and manipulate the data from your API and do whatever 
you want like an admin. Just remenber that the token will expire after a time and you will have to generate another in order you could requests to the **API SERVER**.

Route to ***request***:
```
your_api_server_url/name_of_the_route
```
Request example:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDBkMmI4NjVjZTIyNDAwMDk1N2VmNTciLCJzY29wZXMiOlsibW92aWVzOnJlYWQiLCJtb3ZpZXM6Y3JlYXRlIiwibW92aWVzOnVwZGF0ZSIsIm1vdmllczpkZWxldGUiLCJ1c2VyLW1vdmllczpyZWFkIiwidXNlci1tb3ZpZXM6Y3JlYXRlIiwidXNlci1tb3ZpZXM6ZGVsZXRlIl0sImlhdCI6MTYxMTg4MTAzNiwiZXhwIjoxNjExODgxOTM2fQ.ARO3ewVP6akcI0ErH7a4SN2E2ZT0QPNCSEXx6VTR6I0
Content-Type: <Base on the method>
{
  <Base on the method>
}
```
If everything goes right the server will return something like this:
```
{
  <Base on the method>
}
```

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
* React 17.0.1
* Babel 7.12.10
* Sass 1.32.2
* Webpack 5.11.1
* Axios 0.21.1
* React DOM 17.0.1
* React Redux 7.2.2
* React Router DOM 5.2.0

## External resources
* DB: https://www.mongodb.com/cloud/atlas

## License
This project is licensed under the GNU General Public License v3.0 - see the LICENSE.md file for details.
