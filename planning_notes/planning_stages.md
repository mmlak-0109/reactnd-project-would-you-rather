Views:
- Signin
- Home
- Unanswered Question
- Answered Question
- New Question
- Leaderboard

Components by Page:
- SignIn
  - App: overall container for the page
  - Nav: displays navigation buttons
  - Sign-in: displays welcome message, selection form, and submit button
- Home
  - App: overall container for the page
  - Nav: displays navigation buttons
  - AuthedUserInfo: Shows name of user and logout button
  - Questions List Toggle:
    - Buttons at top toggle between answered and unanswered questions
- Unanswered Question
  - App: overall container for the page
  - Nav: displays navigation buttons
  - AuthedUserInfo: Shows name of user and logout button
  - Unanswered Qustion: shows question and answer choices ans submit button
- Answered Question
  - App: overall container for the page
  - Nav: displays navigation buttons
  - AuthedUserInfo: Shows name of user and logout button
  - Answered Question: displays answer results (% and raw totals) plus a way to tell what your answer was
- New Question
  - App: overall container for the page
  - Nav: displays navigation buttons
  - AuthedUserInfo: Shows name of user and logout button
  - Create New Question: A prompt of "Would you rather..." with two input areas for separate answers
- Leaderboard
  - App: overall container for the page
  - Nav: displays navigation buttons
  - AuthedUserInfo: Shows name of user and logout button
  - Leaderboard: list of users, sorted in order of most points, with breakdown of number of questions anwered and created

All Components:
- App
- Navigation
- AuthedUserInfo
- SignIn
- Home
  - Questions List
    - Question preview
- Answered Question
- Unanswered Question
- New Question
- Leaderboard
  - User Points Info

Events Breakdown
- SignIn
  - *get* the **users**
  - *set* the **authedUser**
- Home
  - Questions List
    - *get* the **questions**
      - Filter into 2 lists based on the "answers" section for the authedUser
    - *get* the **authedUser**
      - use to filter questions into separate lists
- Question 