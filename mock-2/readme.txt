# NBA Drafting

# `**Instructions**`

- Read the entire question carefully for at least 15 mins, understand it and then code it.
- Don't jump directly into the code.
- Commit your code every hour with a proper commit message to your repository (we will monitor every commit)
- Use HTML, CSS, and Vanilla JavaScript to solve this question.
- Invest ample time in providing good styles, and don’t use any external libraries.

---

# `**Problem Statement**`

The task is to implement a web app that will list all the NBA players and Teams with pagination.

- Refer to this API documentation - [https://www.balldontlie.io/#introduction](https://www.balldontlie.io/#introduction)
- Your app should have a navbar with two pages, make suitable routes
    - Players page (index.html)
    - Games page (games.html)

---

# `**Players page**`

- Use this API to get the list of all players

```
https://www.balldontlie.io/api/v1/players
```

- Use Postman and check the response.
- On the page, display the details of all the players in the form of cards with the following details and with pagination.
    - Dummy Image (You can get a placeholder image from the web).
    - Full name of the Player.
    - Position of the Player.
    - Team Details Button.
- On clicking on Team Details Button, the following details of that player should be shown as a modal / popup.
    - Team Name
    - Abbreviation of the Team
    - Conference
    - Division
    - City
    
    ![Player Card Reference Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2dc28922-24b3-47b7-abea-07bad049f5a3/Reference_1.png)
    
    Player Card Reference Image
    
    ## Functionalities:
    
    - There should be a search bar at the top of the page where the user can search for a player based on their name.
    - Pagination should be implemented with only 10 cards/players per page. (Minimum 10 Pages).

---

# `**Games page**`

- Use this API to get the list of all games played.

```
https://www.balldontlie.io/api/v1/games
```

- This page should have two date input fields, where the user can choose the start date and end date.
- On selecting the dates, all the games played between those dates should be rendered in the form of cards with all the details as shown in the reference image below.
- If no games are played under that specified timeframe, display “No Games Found”.
- For each of the games, you should append “**WON**”, “**LOST**”, or “**TIE**” along with each team name which should be determined by the ‘Team Score’ obtained from the API data.

![                                                      Games Card UI Reference Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/46172c94-654e-4ffc-adf2-19d182f71a6a/Reference_2.png)

                                                      Games Card UI Reference Image

## Functionalities:

- The user should be able to filter the games based on seasons from 2010 to 2020. (Use select tags, and API for this).
- Pagination should be implemented here as well with 10 cards per page.

---

## Note:

- Maintain the flow of the app as mentioned.
- Error messages should be shown.
- All forms should be validated.
- Good designs will fetch bonus marks.

## Submission

- Please submit deployed link and Github link of the code.
- **Push your code into `masai-repo`, don’t submit personal repo links (submitting personal repo links will lead to disqualification)**
- Please double-check if deployed version works or not (run the deployed version on your laptop and then submit it).
- Any issues in the deployed link will be considered null and void.
- Please verify your submissions are correct.
- Make sure you follow all instructions carefully.
- Submit before the deadline.

### Rubrics / Criteria to be judged upon

- HTML, CSS, Vanilla JavaScript.
- DOM Manipulation.
- Fetch and API Calls.
- Search, Filter, and Pagination Functionality.
- Good Layout and Design.
- Code cleanliness.
- Component structure.