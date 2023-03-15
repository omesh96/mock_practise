# Blog App

# `**Instructions**`

- Read the entire question carefully for at least 15 mins, understand it and then code it.
- Don't jump directly into the code.
- Commit your code every 30 minutes with a proper commit message to your repository (we will monitor every commit)
- Use HTML, CSS, and Vanilla JavaScript to solve this question.
- Invest ample time in providing good styles, and don’t use any external libraries.

---

# `**Problem Statement**`

- The task is to build a mini blog app like [dev.to](http://dev.to) where the users can post and manage their blogs.
- Your app should have the following pages
    - Sign-up page
    - Sign-in page
    - Blogs page (Should be a private route)
    - Add blog page (Should be a private route)
    - Leaderboard Page

---

## `**Sign-up Page**`

- The user should be able to signup with the following details
    - Username
    - Avatar (You can user a dummy avatar image)
    - Email
    - Password
- Once the user submits the input data, store that data in JSON server on route **“/users”**
- Once they are successfully signed up, the user should be redirected to the Sign-in page.

---

## `**Sign-in Page**`

- The user should be prompted by a login form, where the user will enter the following credentials
    - Email
    - Password
- When a user fills in credentials, match the entered data with the JSON server data you stored while signing up. Display an alert - if login is a success, show a message in the alert box as `login successful`, else show a message as `login failed`
- After successful login, the user should be redirected to the blogs page.

---

## `**Add Blog Page**`

- The add blog page should be a private route, only users who have successfully authenticated should be able to access this.
- The user should be prompted by a form with the following details
    - Username (should be automatically fetched from the signed in user data, should not be able to modify this field)
    - Title
    - Content (Should be a textarea input field)
    - Category (Should be a **select tag** with “Business”, “Tech”, “Lifestyle”, and “Entertainment” as options).
    - Date (Should be a **date** input field)
    - Post Blog button.
- On clicking the submit button, store the data in JSON server under the route “**/blogs”**.
- Sample JSON
    
    

```json
[
  {
		"id" : 1
    "username": "coreyschafer",
    "title": "Be Present",
    "content": "Turning away from the ledge, he started slowly down the mountain, deciding that he would, that very night, satisfy his curiosity about the man-house. In the meantime, he would go down into the canyon and get a cool drink, after which he would visit some berry patches just over the ridge, and explore among the foothills a bit before his nap-time, which always came just after the sun had walked past the middle of the sky. At that period of the day the sun’s warm rays seemed to cast a sleepy spell over the silent mountainside, so all of the animals, with one accord, had decided it should be the hour for their mid-day sleep.",
		"category" : "Entertainment",
		"date" : "2017-06-01",
		"likes" : 24,
		"comments" : [{username : "Jane", content : "Good One"}, {username : "Bob", content : "Loved It!"}]
  }
]
```

---

## `**Blogs Page**`

![Reference Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/be5ab393-ac30-42bd-8137-55456f1faa52/Blog_Reference_Image_2.png)

                                                                           Reference Image

- The blogs page should be a private route, only users who have successfully authenticated should be able to access this.
- In this page, the user should be able to view the blogs posted by him/her as well as from other users.
- Pagination should be implemented here with only 4 blogs per page.
- The blogs page should also have a create blog button, which when clicked the user should be redirected to the “Add Blog” page.
- For all the blogs posted by the user, who is currently logged in, there should be “Edit” and “Delete” buttons along with the post.
- Clicking on “Edit” the user should be able to edit the text content of that blog. (You can use modal for this)
- Clicking on “Delete” that blog should be deleted from the frontend as well as from JSON-server.

**Note: The user can only edit and delete blogs that are posted by himself.**

- Each of the post should also have a like and add comment button.
- Clicking on like button, increment the count of likes.
- Clicking on add comment button, the user should be able to post a comment.

### `**Functionalities**`

- There should be a search bar at the top of the page, where the user can search for blogs using the title of the blog.
- The user should be able to filter the blogs based on the following Categories
    - Business
    - Tech
    - Lifestyle
    - Entertainment
- The user should be able to sort the blogs based on date
    - Ascending
    - Descending
- The filter and sort functionalities should work together seamlessly.

---

## `**Leaderboard Page**`

- This page should render a table with the following details
    - Username
    - Number of blogs published
    - Total Likes received.
    - Total Comments received.

### **`Submission`**

- Please submit deployed link and GitHub link of code.
- ***Deploy JSON server too.
- Please double check if deployed version works or not (run deployed version on your laptop and then submit it)
- Any issues in deployed link, will be considered null and void.
- Please verify your submissions are correct.
- Make sure you follow all instructions carefully.
- Submit before deadline.

### **`Rubrics`**

### Rubrics / Criteria to be judged upon

- CRUD Operations
- JSON server
- API Requests
- Filter, Search and Sort functionality
- Like and Comment functionality
- Code cleanliness and folder structure.