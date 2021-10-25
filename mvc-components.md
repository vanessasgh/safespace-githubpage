# System Diagram
![an overview of our system architecture](/spec-images/system-diagram.PNG)

# Users
## User View
- Sign Up Form Component: The form that allows users to create a new user component. Controller "newUserFormHandler" function that handles submission of the form on click of an associated “Create Account” button.
- Sign In Form Component: The form that allows users to log in as an existing user component. Controller "isValidUserHandler" function that handles submission of the form on click of an associated “Sign In” button.
- User Profile Component: Display user information: username, college/university
- Edit User Profile Component: The form that allows users to modify existing user component attributes “username” and “college”.
- Greeting Component: Display post greeting with the username.
- List Post History Component: Displays the posts in the "user post history" data it receives. For each, shows the "date", "content", and "tags" attributes.
- List Saved Posts Component: Displays the posts in the "user saved post" data it receives. For each, shows the “date”, “content”, and “tags” attributes.

## User Controller
- "newUserFormHandler" function handles submission of the user view's "sign up form component". This extracts the attributes from the form fields and passes them in a call to user model's "createUser" function then handles the response and pushes it to the user view.
- “isValidUserHandler” function handles submission of the user view’s “sign in form component”. This extracts attributes from the form fields and passes them in a call to user model’s “getUserInfoByID” function then handles the response and pushes it to the user view.
- “getUserInfoHandler” function handles the user profile page load of the user view’s “user profile component”. This gets user data (username, college/university) from the user model’s “getUserInfoByID” then handles the response and pushes it to the user view.
- “updateUserFormHandler” function handles submission of the user view’s “edit user profile component”. This extracts the attributes from the form fields and passes them in a call to the user model’s “updateUserInfo” function then handles the response and pushes it to the user view.
- “getUserInfoHandler” function handles the home page load of the user view’s “greeting component”. This gets user’s username data from the user model’s “getUserInfoByID” and pushes it to the user view.
- “getUserPostsHandler” function handles the “Post History” tab load on the user profile page of the user view’s “list post history component”. This gets the user's post history data from the user model’s “getUserInfoByID” and pushes it to the user view.
- “getUserSavedPostsHandler” function handles the “Saved Posts” tab load on the user profile page of the user view’s “list saved posts component”. This gets the user's post history data from the user model’s “getUserInfoByID” and pushes it to the user view.

## User Model
- “getUserInfoByID” function constructs a query from the received arguments and makes a request to the database. It returns the user object.
- “createUser” function validates that all necessary attributes for a user have been sent as arguments. If so, it creates a new user in the database with these attributes. It returns the newly created user object.
- “updateUserInfo” function validates that all necessary attributes for a user have been sent as arguments. If so, it modifies an existing user in the database with these attributes. It returns the modified user object.

# Post
## Post View
- Post Form Component: The form that allows users to create a new post component. Controller "newPostFormHandler" function that handles submission of the form on click of an associated “Post” button.
- Search Post Component: The text entry box that allows users to search for an existing post component. Controller "newSearchPostHandler" function that handles search submission of the text entry box on click of “Search” button or enter key.

## Post Controller
- "newPostFormHandler" function handles submission of the post view's "post form component". This extracts the attributes from the form fields and passes them in a call to post model's "createPost" function then handles the response and pushes it to the post view.
- “newSearchPostHandler” function handles searching for existing posts’ view’s “post component”. This extracts the values from existing post components and passes them in a call to post component’s “searchPost” function then pushes them to the post view.

## Post Model
- “createPost” function validates that all necessary attributes for a post have been sent as arguments. If so, it creates a new post in the database with these attributes. It returns the newly created post object.
- “getPostInfoByID” function constructs a query from the received argument and makes a request to the database. It returns the post object.

# Map - Stretch Goal
## Map View
- Search Location Component: The text entry box that allows users to search for existing locations “counselor”, “psychiatrist”, and “therapist” within 50 miles of the location on the responsive map.

## Map Controller
- “getLocationsHandler” function handles submission of the map’s view “search location component”. This extracts the attributes from the form fields and passes them in a call to map model's “getLocation” function then handles the response and pushes it to the map view.

## Map Model
- This object is taken from the Google Maps API along with the spreadsheet of places that offer mental help.
- “getLocation” function will receive the user input and make a request to the Google Maps API. It returns an array of names and locations.

# Components Diagram
![an overview of our components architecture](/spec-images/components-diagram.PNG)
