
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
**Starting**
1. cd into the my-app directory
2. run `npm install` to install all required packages
3. run `npm start` to automatically run and open the browser

**App**
The "All Posts" button will show a list of all posts present on the database,
 you can click the filter buttons on top to filter by sport.

"Add New Post" will take you to a form to create a new post.

You can register and logout by using the button on the top right.

Reading a post will take you to a more detailed view of the post with
detailed information on the post itself and all comments related.
You can click edit to go to a form and edit a post, or delete
to delete a post. You can also comment from this page and delete
any comments.

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
- Page showing all posts by logged in user is unfinished
- Logging in is a bit buggy and sometimes does not work
---
### Back-end
- Authenticate process is quick and not secure just for testing purposes