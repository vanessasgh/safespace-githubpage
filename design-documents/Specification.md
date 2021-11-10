# PROBLEM
Suicide is a leading cause of death among college students. The research done by Vector Solutions suggests suicide to be the second highest cause of death among college students (2018). In Washington State alone, Katherine Long from the Seattle Times reports that “...more than one in 10 [students] have thought of suicide...” (2018). These statistics portray suicide as a large problem among college students deserving additional attention.

The negative impacts of suicide goes beyond that of just the victim. A ripple effect on those associated with the victim in any way also has seemingly limitless consequences ranging from the development of mental disorders to the lack of productivity at the victim's occupational establishment. According to the U.S. Department of Veteran Affairs in their article “Postvention as Prevention: Understanding the Impact of Suicide”, they claim that “Those bereaved by suicide have a greater probability of attempting suicide than those bereaved by other causes…” as various studies suggest (2020).

Motives of suicide cannot be pinpointed to one or two roots as every case of suicide is influenced by a multitude of factors. The most common causes identified by the World Health Organization’s article on suicide are related to alcohol and drug use, mental/physical health, relationships, and financial stress (2021). Of these causes, college students seem to suffer from poor mental health the most which could be influenced by the other causes outlined such as use of drugs/alcohol, relationships, and financial stress. The Illinois Department of Public Health claims that National Survey of College Counseling Centers 2013 reported that out of 69 student deaths by suicide, 48 percent of students suffered from depression out of 69 students deaths. The WHO article on suicide also mentions that “The prevention of suicide has not been adequately addressed due to a lack of awareness of suicide as a major public health problem and the taboo in many societies to openly discuss it.” This “stigma”, as some may call it, seems to be a major contributing factor to suicide as it increased the difficulty in identifying suicidal thinkers.

Existing solutions the WHO lists such as the Suicide Prevention Hotline still seem to have little impact on the problem as they require courage from suicidal thinkers to openly identify themselves and risk judgement from others. While follow-ups have shown positive results, the amount of people suffering from suicide, suicidal thoughts, and suicidal tendencies are staying relatively constant. Moreover, universities have their own counselors to prevent college suicides. However, as stated by Vector Solutions, 80% to 90% of college students who died from suicides did not receive help from counselors. This shows that current solutions are not sufficient towards reducing the amount of suicides for college students (2018).

**Sources:**

Illinois Department of Public Health. (2013). SUICIDE and COLLEGE STUDENTS. https://www.dph.illinois.gov/sites/default/files/publications/suicide-ncollege-students-050216.pdf

Long, K. (2018, January 29). Study: Nearly a third of Washington college students have experienced depression. The Seattle Times. https://www.seattletimes.com/seattle-news/education/study-nearly-a-third-of-washington-college-students-have-experienced-depression/

U.S. Department of Veteran Affairs. (2020). Postvention as Prevention: Understanding the Impact of Suicide. https://www.mentalhealth.va.gov/suicide_prevention/docs/Literature_Review_FSTP_Postvention_as_Prevention_508_FINAL_9-18-2019.pdf

Vector Solutions. (2020, September 6). Suicide Second Highest Cause of College Deaths. https://www.vectorsolutions.com/resources/blogs/suicide-second-highest-cause-of-death-among-college-students/

World Health Organization. (2021, June 17). Suicide. https://www.who.int/news-room/fact-sheets/detail/suicide

# SOLUTION SUMMARY
We plan to carry out our mission of dismantling the stigma around discussion of suicidal thoughts among college students through a website titled SafeSpace. SafeSpace’s main blog feature allows users to share and read stories and/or respond to daily prompts focused on current feelings, affirmation brainstorming, past experiences, and much more with the option of staying anonymous. Positive stories from peers who are or were in the same shoes can be encouraging and motivational. Fostering this community would provide a space where these college students will be able to avoid judgment when speaking about suicide. Building self-understanding, receiving solace from others with similar points of distress, and increasing comfortability of suicidal discussion are three objectives that our website hopes to accomplish. After comfortability and understanding are established, they will be able to advance the identification that they are a victim of suicidal thoughts by utilizing an outreach page full of professional resources from those dedicated to assisting individuals who may have anxiety concerning schoolwork to financial troubles. This space encourages the act of speaking out and asking for help, a very real problem lacking sufficient attention.

# DESIGN SPECIFICATION

## ONBOARDING
Users will have a straightforward way to identify whether our web application is for them through our onboarding screen. The first impression our website has on potential users will be especially for people with unstable mental states, where they may feel anxious or exhausted to find resources to help themselves. We designed this page with simplicity in mind. A big welcome message will greet the user in readable typography and a 1 sentence description of our website will accompany it--a restructure of our mission statement is the most likely candidate for our website description. With captioned credit, we also plan to add a short video regarding what Suicidal Ideation is for people who find themselves confused and unsure when it comes to their feelings. Assuming the user consumes the information top-down, they will be met with a large “Get Started” button at the bottom of the page where they will be able to access the account creation/sign in pages and essentially get started with our page!

![onboarding screen with welcome message and informational video](/spec-images/onboarding.PNG)

## USER AUTHENTICATION
For the user authentication page, users will need to sign in using their email and password. If either the email address or password is incorrect, an error message will be displayed. For users that do not have an account yet, they can choose the option to sign up. When signing up, users will need to enter their email, password, username, and also the college that they are currently attending. If the chosen username has been taken or they entered an invalid college, an appropriate error message will appear.

![sign-in screen](/spec-images/sign-in1.PNG)

![sign-in screen with error](/spec-images/sign-in2.PNG)

![sign-up screen for email and password](/spec-images/sign-up1.PNG)

![sign-up screen for username and college](/spec-images/sign-up2.PNG)

![sign-up screen username error](/spec-images/sign-up3.PNG)

![sign-up screen college error](/spec-images/sign-up4.PNG)

## FEED & POSTING
A major feature of our website, SafeSpace, is the collection of posts from college students across America. Our search function gives users the option to sort through different tags, a shortcut to sharings on specific topics. If content under a certain tag cannot be found, users are informed of this. After creating an account, we invite university students around the nation to express their thoughts and share their stories, with the option of staying anonymous. Whether through similar experiences or encouraging words from seniors, we hope our users are able to find comfort upon hearing about others undergoing similar experiences. We believe tales of growth can also provide motivation for those who may be especially down or just needing some positive words. An account is not enforced for those who may just be interested in reading posts. For individuals who are ready to add posts to our page, our system generates different greetings every day to welcome their arrival. The idea behind this was to give users an increased feeling of interaction. Posts are sorted by college campus and users are also able to create their own tag, similar to hashtags as categories of posts. Users can also ‘like’ certain posts and access past liked posts from their profile page; this history is not publicly available for others to view. Additionally, users are not given access to the actual profiles of users behind posts and likes; this is an intentional design as we wish to create a safe space where everyone can openly voice their feelings without any fear of identification.

![posting interface with search bar, like, tag, and posting features](/spec-images/postpage1.PNG)

![write a post popup](/spec-images/postpage2.PNG)

![not logged in popup](/spec-images/postpage3.PNG)

![posting interface search error](/spec-images/postpage4.PNG)

## USER PROFILE
With the creation of an user account, users have the freedom to share their personal stories, anonymity optional. User profiles are not public and serve as a portal for users to access past liked posts from others and view their own. Users can change their school of attendance on their profile page, something they chose upon creating an account. Users are able to navigate back to their profile by clicking the profile icon on the upper right from any page on SafeSpace. Signing out is also done here. The navigation bar on the top acts as a direct route to Home (page with posts), Resources, and About Us.

![user profile screen showing post history](/spec-images/user-profile1.PNG)

![user profile screen showing like history](/spec-images/user-profile2.PNG)

![add college popup](/spec-images/user-profile3.PNG)

![account options popup under navigation bar icon](/spec-images/user-profile4.PNG)

## RESOURCES
Being mindful of our development timeline, we are making a semi-static page filled with an abundance of suicidal recovery resources for both who are grieving a suicide of a loved one or experiencing suicidal thoughts. We plan to design the information hierarchically, prioritizing “first step” resources that are recommended by professionals. Once users are more comfortable, they are encouraged to access resources that provide guidance on building better habits and making a full recovery from either their grievances or suicidal tendencies.

![resources screen with links, videos, and interactive map directing user to professional help in their area](/spec-images/resources1.PNG)

The interactive component that comes into play on this page will be a search bar and responsive map. This is placed at the bottom of the page because it requires the courage and initiative from the user to discover their own resources in their area and travel to those locations. Depending on the location they type in, nearby verifiable counselors with contact information, reviews, and a description of their establishment will be displayed on the map for the user to explore. If the user types in a location that cannot be found, they will be met with an error message and no changes will be made to the state of the map.

![resources screen with interactive map search error](/spec-images/resources2.PNG)

## ABOUT US
To address user skepticism, we plan to provide a page detailing everything about our team and our mission. The static “about us” page will display a restructured problem statement that we are addressing the application, a brief description about the people on our team with necessary support contact information, and formal establishment information such as copyright, terms of service, privacy policy. The typography and color scheme will stay consistent and legible to the rest of the web application, and as with many of the other pages, the user may be able to easily navigate to other essential pages on our application using the navigation bar links.

![about screen with information regarding website mission and team](/spec-images/about.PNG)
