# Testing Plan

## Manual Acceptance Testing

Acceptance testing will be done manually (with a few non-functional requirements being done automatically) by the product designer after each pull request is merged. If any failures are found upon testing, the designer will open a new Github Issue describing the problem, and directly alert the developer working on that feature.

This testing script is divided up into features, which match this team's milestones. Each time this testing script is run, tests for all completed features will be run. This will ensure that no new defects are introduced to existing functionality.
Tests will be run in the following contexts:
- Safari browser on iPhone8
- Chrome browser on Mac Pro running MacOS Big Sur
- Firefox browser on Razer Blade Stealth running Windows 10

If for any reason the product designer is unable to fulfill their acceptance testing duties, the PM will immediately be notified and the team will work together to resolve any issues that come up. If difficulties in any area arise, the team will also utilize communication and work together to ensure we create the best MVP we are capable of. 

### Navigation Bar Static Elements (Due November 7)
This covers requirements 1.0, 1.1.1, 1.2, 1.2.1, 1.2.1.1, 1.2.2, 1.2.2.1, 1.2.3, 1.2.3.1,  1.2.4, 1.2.4.1, 1.2.4.2, 1.2.4.3, 1.2.4.4, 1.2.4.4.1, 1.2.4.4.2, 1.2.4.4.2.1, 1.2.4.4.3, 1.2.4.4.3.1, 1.2.4.5, 1.3, 2.1, 3.1, 4.1, 5.1.1, 5.2.1, 6.1, 7.1

1. The navigation bar should display a Home, Resources, About Us, and profile icon tab.
2. Clicking the circular logo on the top left from any page on SafeSpace directs user back to the onboarding page; users are not logged out. 
3. The Navigation Bar stays in the same place when the user visits the Home tab or Feed & Posting page, Resources Page, About Us Page, User Profile Page.
4. Clicking the profile icon tab prompts a dropdown of choices: Sign In for not logged in users and View Profile and Log Out for logged in users.

### Onboarding Static Elements (Due November 7)
This covers requirements 2.0, 2.2, 2.3, 2.4, 2.5, 2.5.1, 2.5.2, 2.6, 2.6.1, 2.7, 2.7.1, 2.8
1. The user visits the Onboarding page.
2. The page should display a header “Welcome to SafeSpace” and accompanying description “Anonymously share and read feelings and stories around suicide.”
3. The page should be able to play a video on suicidal ideation; clicking the video title redirects the user to the original posting page of the video.
4. Clicking the “Get Started” button redirects users to Sign in form.

### About Us Static Elements (Due November 7)
This covers requirements 3.0, 3.2, 3.3, 3.3.1, 3.3.1.1, 3.4, 3.4.1, 3.4.2, 3.4.3, 3.5, 3.5.1, 3.5.1.1, 3.5.1.2, 3.5.2, 3.5.2.1, 3.5.2.2 
1. The user visits the About Us page. 
2. The page should display a title “About Us” at the center of the page and headers “Our Mission”, “Our Team”, and “Contact Us”. “Our Mission” header is accompanied by mission details description of “A World Health Organization article on suicide mentions ‘The prevention of suicide has not been adequately addressed due to a lack of awareness of suicide as a major public health problem and the taboo in many societies to openly discuss it.’ This ‘stigma’, as some may call it, seems to be a major contributing factor to suicide as it increases the difficulty in identifying suicidal thinkers. Our mission with this web application is to help dismantle the stigma around suicidal discussion and provide a unique support system to victims of suicidal thoughts and tendencies in colleges/universities.”.
3. Clicking WHO article “A World Health Organization article on suicide”  in mission description details redirects user to respective article website.
4. The page should display the first and last names of all team members, respective pronouns and software development roles on the team under “Our Team”.
5. The page should display the organization email and phone number under “Contact Us”, and clicking each respective method of contact gives users the option to email or call the organization.

### Resources Static Elements (Due November 7)
This covers requirements 4.0, 4.2, 4.3, 4.3.1, 4.3.1.1, 4.3.1.2, 4.3.2, 4.3.2.1, 4.3.2.2, 4.4, 4.4.1, 4.4.1.1, 4.4.1.2, 4.4.2, 4.4.2.1, 4.4.2.2, 4.5, 4.5.1, 4.5.1.1, 4.6
1. The user visits the Resources page.
2. The page should display a title “Resources” at the center of the page, and headers “First Steps to Recovery”, “Building Better Habits”, and “Getting Help Near You”, and pages “I’m Having Thoughts of Suicide” and “Tips for building better mental health”
3. The page should be able to play a video on a story about suicidal recovery video: https://www.youtube.com/watch?v=h2au58zB_kk . Clicking said video link redirects users to the YouTube page of the video.
4. The page should be able to display an article from Save.org’s “I’m Having Thoughts of Suicide”: https://save.org/find-help/im-having-suicidal-thoughts/ . Clicking said article link redirects users to the original article page.
5. The page should be able to play a video on habits to improve mental health: https://www.youtube.com/watch?v=3QIfkeA6HBY . Clicking said video link redirects users to the YouTube page of the video.
6. The page should be able to display an article from Save.org’s “I’m Having Thoughts of Suicide”: https://save.org/find-help/im-having-suicidal-thoughts/ Clicking said article link redirects users to the original article page. 
7. The page should be able to play a video on a video Mental Health America’s “31 Tips To Boost Your Mental Health”: https://www.mhanational.org/31-tips-boost-your-mental-health Clicking said video link redirects users to the original article page. 
8. The page should display a search text box able to take in and delete text next to a “Submit” button below “Getting Help Near You”.
9. The page should display a static image from Google Maps API for all McLean Hospital locations in the U.S. 

### User Authentication Static Elements (Due November 7)
#### Sign In 
This covers requirements 5.1.2, 5.1.3, 5.1.4, 5.1.5, 5.1.11, 5.1.11.1, 5.1.11.2
1. The user visits the Sign In page.
2. The page should display a header “Sign In” at the top of the page.
3. The page should display two text boxes labeled Email and Password above a Sign In button.
4. The page will display the text “Don’t have an account? Sign Up” below the Sign In button.
5. Clicking the “Don’t have an account? Sign Up” hyperlink will redirect users to the Sign Up page.
#### Sign Up
This covers requirements 5.2.2, 5.2.3, 5.2.3.1, 5.2.4, 5.2.4.1, 5.2.5, 5.2.5.1, 5.2.7, 5.2.7.1, 5.2.7.2, 5.2.7.3, 5.2.8, 5.2.14, 5.2.14.1, 5.2.14.2
1. The page should display the header “Sign Up” about the input textboxes. 
2. The page should display five text boxes respectively labeled Email, Username, Password, Confirm Password, and College of Attendance above a “Create Account” button. 
3. The user will be presented with a dropdown list of suggestions of colleges upon entering of college of attendance name into the College of Attendance text box.
4. The page should display “By signing up, you agree to Terms of Service and Privacy Policy” with “Terms of Service” and “Privacy Policy” being hyperlinked underlined when hovered over.
5. Clicking on the hyperlinks will open a new tab for the user to the page with the appropriate information.
6. Privacy policy page will display static privacy policy text
7. Terms of service page will display static terms of service text
### Feed & Posting Static Elements (Due November 7)
This covers requirements: 6.0, 6.1.2, 6.1.2.1, 6.1.2.1.1, 6.2, 6.2.2, 6.3, 6.3.1, 6.3.1.1, 6.4, 6.4.1, 6.4.1.1, 6.4.1.1, 6.4.1.1.1.3,  6.4.1.2, 6.4.1.2.1, 6.4.1.2.2, 6.5.1, 6.5.2
1. The user visits the feed page.
2. The user is presented with a header with the text "Feed".
3. Below the header, there's a search text box with a magnifying glass shaped button on the far right that acts as a submit button.
4. The post data cards should be arranged to fit within the horizontal bounds of the screen. They may extend vertically below the fold, requiring scrolling.
5. Clicking the star button attribute will fill the star in a yellow color; clicking the star button attribute a second time will unfill the star.
6. The page should display a “Post” floating button in the lower right corner of the page
7. If the user is not logged in, a pop-up displaying the text “Want to share your stories too?” with hyperlinks “Create an account” and “Sign In” below overlays the page.
8. The user is redirected to the Sign Up page upon clicking the “Create an account” hyperlink.
9. The user is redirected to the Sign In page upon clicking the “Sign in” hyperlink.

### User Profile Static Elements (Due November 7)
This covers requirements 7.0, 7.1, 7.4, 7.4.1, 7.5
1. The user is logged in.
2. The page should display the username of the user. 
3. The page should display the user’s current chosen university of attendance
4. The page should display an “Edit” button below the university of attendance.
5. Clicking the “Edit” button prompts a pop-up overlaying the page, displaying a new text box for the user to input a different username above a second text box for the user to type/select any university name. 
6. The page should display a “Save” button on the top right and a “Cancel” on the top left.
7. The page should display a tab titled “Posts” that is highlighted when selected. 
8. The page titled “Posts” should display all past posts by the user and may extend vertically below the fold, requiring scrolling. 
9. The page should display a tab titled “Saved Posts” that is highlighted when selected. 
10. The page titled “Saved Posts” should display all past saved posts by the user and may extend vertically below the fold, requiring scrolling.

### Sign up (Due November 14)
This covers requirements 5.2.9, 5.2.10, 5.2.10.1, 5.2.11, 5.2.12, 5.2.13
1. The user visits the Sign Up page.
2. Clicking the “Create Account” button will redirect the user to their respective user account on the Feed & Posting page if all inputted information is valid.
3. Clicking the “Create Account” button will show appropriate error messages if account creation fails.
4. Clicking the “Create Account” button will prompt a check of whether email input matches format a@a.com, if the text input in the Password and Confirm Password text box both match criteria of containing at least 8 total characters, of which contains at least 1 uppercase letter, 1 special character, and 1 number and are matching.  
5. If the user account creation is successful, they The user will remain logged in for the entirety of their visit on SafeSpace unless they click the “Sign Out” button. 
6. If the user account creation fails, appropriate error messages will be displayed underneath the applicable text boxes.
### Sign in (Due November 14)
This covers requirements 5.1.5.1, 5.1.5.2, 5.1.5.3, 5.1.6, 5.1.7, 5.1.8, 5.1.9, 5.1.10
1. The user visits the Sign In page.
2. The page should display an error message of “You typed in an incorrect email and/or password” if the user clicks the Sign In button with any empty or invalid input in either or both text boxes.
3. When the user inputs an email and password combination matching an account in our Firebase database, they will be redirected to their respective user account on the Feed & Posting page.
4. The user will remain logged in for the entirety of their visit on SafeSpace unless they click the “Sign Out” button. 
5. The page will save an user’s email entry upon one unsuccessful login.
6. The page will clear out an user’s password entry upon one unsuccessful login.
7. If the textbox for Email or Password is left blank, clicking “Sign in” will not prompt any change to the webpage. 
8. Clicking “Sign in” with both text boxes populated will prompt an immediate search through our Firebase database to check If the email address entered matches to an user account.
9. If the system is not able to find a matching email address with current user input, the page will display a message of “Account not found. Create an account”. 
10. Clicking the “Account not found. Create an account” hyperlink redirects users to the Sign Up page.
11. If the system is not able to find a matching email and password combination in our Firebase database with what user has entered, an error message of “You typed in an incorrect email and/or password” appears after the user clicks the “Sign in” button.

### Created Post Information (Due November 14)
This covers requirements 6.4.1.1, 6.4.1.1.1, 6.4.1.1.1.2, 6.4.1.1.1.3, 6.4.1.1.1.3.1, 6.4.1.1.1.3.2,  6.4.1.1.1.3.3, 6.5.1, 6.5.1.1, 6.5.1.2, 6.5.2,  6.5.2.1, 6.6.1, 6.6.2, 6.6.3
1. The user visits the Feed & Posting page.
2. When the text in the textbox is less than 50 characters, the “Post” button will be greyed out and not able to be clicked.
3. If the user is logged in, clicking the “Post” button prompts a pop-up overlaying the page with text box labeled, “How are you feeling today, username?” and a tags text box labeled “Tags”. 
4. The page should display a “Post” and “Cancel” button to the lower right of the “Tags” text box. 
5. The user’s post will be displayed in the feed with text from the content text box, tags text box, and post time after clicking the Post button and the popup will be closed.
6. The popup will be closed if the user clicks the Cancel button

### Search Posts (Due November 14)
This covers requirements 6.2, 6.2.1, 6.2.1.1, 6.2.1.2
1. The user visits the Feed & Posting page.
2. The page should display post data below the search bar listed in a chronological order, and each post data should be styled as a card, showing post content, tags, time of post, and star button highlighted in yellow to save attributes.
3. If users attempt to click the search button without inputting text, nothing happens
4. If users click the search button after inputting text, the system will search through the database, call and display all previous posts (cards) containing tags or content matching what has been entered in the search box.
5. If no cards are found in the database matching the text entered by the user in the search box, the error message “Sorry, no posts were found matching ‘search text’” is displayed.

### Past Posts (Due November 14)
This covers requirements 7.5.1
1. The user visits the user profile page.
2. The user visits the Past Posts tab. 
3. The user is able to view all previous posts. They may extend vertically below the fold, requiring scrolling. 

### Save Posts (Due November 14)
This covers requirements 6.3.1, 6.3.1.1, 7.6.1, 7.6.2
1. The user visits the user profile page.
2. The user visits the Saved Posts tab.
3. The user is able to view all previously saved posts. They may extend vertically below the fold, requiring scrolling.
4. The user is able to click the star icon attribute attached to all post cards, which unfills the yellow colored-stars and instantly removes the post cards from the Saved Posts tab. 

### Edit Profile (Due November 14)
This covers requirements 7.4.1.1
1. The user visits the profile page. 
2. The user clicks the edit button.
3. If the user enters text into the username text box, the system immediately searches through the database. If the entered text is found in the database, the text “Username already taken” is displayed on the page. If the entered text is less than 3 characters, the text “Invalid Username” is displayed. If the user attempts to enter text exceeding 20 characters, the text they type will not show up on the page. If the entered text is not found in our database and exceeds 3 characters, a green checkmark will appear on the right of the text. 
4. If the user enters text into the university of attendance text box, the system immediately searches through our database and lists suggestions in a dropdown format. Users are able to select a single college of attendance. 
5. Clicking “Save” on the top right will save all changes made by the user.
6. Clicking  “Cancel” on the top left will not save any changes made by the user.

### Usability/Accessibility (Due November 21)
This covers requirements 9.1, 9.2, 9.3, 9.4, 9.5
1. The user will be able to access all website features on an iPhone 8 and desktop.
2. The user will be able to navigate through the entire application using a screen reader.
3. The user will be able to open our application through the latest update of google chrome and mozilla firefox.
W3C Markup Validator returns no HTML errors for our hosted page.

### Performance (Due November 21)
This covers requirements 8.1, 8.2, 8.3
1. Google Page Speed Insights on desktop scores at least 90 for our hosted page
2. The user will be redirected to appropriate pages listed on the navigation bar within 1 second.
3. Sign in, sign up, create post, and edit profile forms will all be appropriately resolved  within 3 seconds of hitting the “submit” button.

### Security (Due November 21)
This covers requirements 10.1, 10.2
1. Passwords do not show up in the firebase database.
2. For a manual SQL Injection test, we will query “University of Washington; DROP TABLE Users” should not drop the Users table.

