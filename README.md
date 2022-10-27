
# CSPN, Milestone Project 2

## Inspiration


## Technologies
### Front-End
**Technologies Used**

- Material-UI
- Redux
- React
- Axios

-----

### Back-end
**Technologies Used**

 - Express
 - MongoDB Atlas
 - Mongoose
 - Heroku
 - Node
 
**Testing**
- MongoDB Compass
- Postman
- Heroku CLI
- Nodemon
- Dotenv

## Usage

### Front-end


---

### Back-end

**All API calls are made to https://cspn-sports.herokuapp.com/**

**Routes**

On all create routes refer below for what the model expects for data.
Pass all data through the request body.

**/posts**

| method | route | response |
| --- | --- | --- |
| GET | /posts | returns all posts without related comments |
| GET | /posts/:id| returns post with matching ID and all related comments
| GET | /posts/sports/:sport | returns all posts with matching sport type
| POST | /posts | creates new post and returns created post
| PUT | /posts/:id | updates post based on id and returns a confirmation message
| DELETE | /posts/:id | deletes a post and all related comments based on id and returns a confirmation message

**/comments**

| method | route | response |
| --- | --- | --- |
| GET | /comments | returns all comments |
| GET | /comments/:id | returns comment with matching ID
| POST | /comments | creates new comment and returns created comment
| PUT | /comments/:id | updates comment based on id and returns a confirmation message
| DELETE | /comments/:id | deletes a comment based on id and returns a confirmation message

**/users**

| method | route | response |
| --- | --- | --- |
| GET | /users | returns all users |
| GET | /users/:id | returns user with matching ID and all related posts and comments
| POST | /users/register | creates new user and returns created user
| POST | /users/auth | attempts to log in with provided username and password, returns "success" on success and "failed" on failure
| PUT | /users/:id | updates user based on id and returns a confirmation message
| DELETE | /users/:id | deletes a user and all related posts and comments based on id and returns a confirmation message

---

**Database**

Database holds Posts, Comments and Users.

**Posts**

Has a virtual field referencing all comments with matching post ID.
| property | datatype | required | other |
| -------- | -------- | -------- | ----- |
| name | string | no | defaults to anonymous |
| user | mongo objectID | yes | references existing user by ID |
| sport | string | yes | values: soccer, baseball, basketball, football, other |
| post | string | yes |  |
| image | string | no | defaults to null|

**Comments**

| property | datatype | required | other |
| -------- | -------- | -------- | ----- |
| name | string | no | defaults to anonymous |
| user | mongo objectID | yes | references existing user by ID |
| comment | string | yes |  |
| post | mongo objectID | yes | references existing post by ID |

**Users**

Has virtual fields referencing all comments and posts with matching user IDs.
| property | datatype | required | other |
| -------- | -------- | -------- | ----- |
| username | string | yes | must be unique |
| email | string | yes | must be unique |
| password | string | yes |  |


## Bugs and Unfinished Features
### Front-End
---
### Back-end
