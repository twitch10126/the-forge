# [the-forge](https://twitch10126.github.io/the-forge)

[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/twitch10126/the-forge)](https://www.github.com/twitch10126/the-forge/commits/main)
[![GitHub last commit](https://img.shields.io/github/last-commit/twitch10126/the-forge)](https://www.github.com/twitch10126/the-forge/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/twitch10126/the-forge)](https://www.github.com/twitch10126/the-forge)

## Overview

This website is designed for gym owners who want a professional and easy to navigate platform that attracts new members, showcases why their gym stands out, and provides an intuitive user experience.

Built using **HTML, CSS**, and **Bootstrap**, the site ensures mobile responsiveness, clean navigation, and strong call-to-action elements to encourage sign-ups.

**Site Mockups**

![screenshot](documentation/mockups/the-forge-mockups.png)

## UX

### The 5 Planes of UX

#### 1. Strategy Plane

##### Purpose

- Encourage users to join The Forge and experience the benefits of membership firsthand
- Deliver a seamless and engaging user experience that keeps members informed.

##### Primary User Needs

- Discover what The Forge is all about, our purpose, classes, and impact.
- Become part of the community and stay up to date with the latest classes.
- Access responsive, easy to navigate content that works smoothly across all devices.

##### Business Goals

- Grow our customer base and welcome new users into our community.
- Increase engagement in classes and strengthening members connections.

#### 2. Scope Plane

##### Features

- A full list of features can be viewed in detail below.

##### Content Requirements

- Clear, Why us section about why members should choose us.
- Gallery showcasing the gyms equipment and atmosphere.
- Class schedule and descriptions.
- Forms for membership sign-up and booking.

#### 3. Structure Plane

##### Information Architecture

- **Navigation Menu**:
  - Accessible links in the navbar.
- **Hierarchy**:
  - Clear call-to-action buttons.
  - Prominent placement of social media links in the footer.

##### User Flow

1. User lands on the home page → learns about why they should join us.
2. Navigates to the classes page → sees classes they can join and a schedule with Book now button.
3. Books class via Booking page.
4. Browses the gallery → explores the available equipment and atmosphere.
5. Signs up via the sign-up page.

#### 4. Skeleton Plane

##### Wireframe Suggestions

- A full list of [Wireframes](#wireframes) can be viewed in detail below.

#### 5. Surface Plane

##### Visual Design Elements

- **[Colours](#colour-scheme)**: see below
- **[Typography](#typography)**: see below

### Colour Scheme

I used [coolors.co](https://coolors.co/1f2129-6c4c37-9e8875-e1d9d9) to generate my color palette.

- `#1F2129` primary color.
- `#6C4C37` secondary color.
- `#9E8875` highlight.
- `#E1D9D9` highlight light.

![screenshot](documentation/palette/the-forge-colors.png)

### Typography

- [Teko](https://fonts.google.com/specimen/Teko) was used for the primary headers and titles.
- [Oswald](https://fonts.google.com/specimen/Oswald) was used for all other secondary text.
- [Font Awesome](https://fontawesome.com) icons were used throughout the site, such as the why us section of the homepage and the social media icons in the footer.

## User Stories

| Target                    | Expectation                                                                                                    | Outcome                                                                                 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| As a potential gym member | I want to see a gallery of people enjoying workouts                                                            | so that I can get a feel for the gym's atmosphere before joining.                       |
| As an existing member     | I want to book a fitness class online                                                                          | so that I can secure a spot and plan my schedule in advance.                            |
| As a visitor              | I want to read reviews and testimonials sorted by most recent                                                  | so that I can gain insights into others' experiences before signing up.                 |
| As a gym owner            | I want a website that is easy to navigate, showcases the benefits of choosing my gym, and attracts new members | so that potential customers can quickly understand our value and sign up.               |
| As a user                 | I would like to follow the gym on various platforms (e.g., Instagram, Facebook, Twitter)                       | so that I can stay updated with new classes.                                            |
| As a user                 | I would like the website to be fully responsive                                                                | so that I can easily navigate and access information from my phone, tablet, or desktop. |
| As a user                 | I would like to see a 404 error page if I get lost                                                             | so that it's obvious that I've stumbled upon a page that doesn't exist.                 |
| As a user                 | I would like to see a success page when submitting a form                                                      | so that it's obvious that the form has been submitted.                                  |

## Wireframes

To follow best practice, wireframes were developed for mobile, tablet, and desktop sizes.
I've used [Balsamiq](https://balsamiq.com/wireframes) to design my site wireframes.

| Page    | Mobile                                                      | Tablet                                                      | Desktop                                                      |
| ------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------ |
| Home    | ![screenshot](documentation/wireframes/mobile-homepage.png) | ![screenshot](documentation/wireframes/tablet-homepage.png) | ![screenshot](documentation/wireframes/desktop-homepage.png) |
| Gallery | ![screenshot](documentation/wireframes/mobile-gallery.png)  | ![screenshot](documentation/wireframes/tablet-gallery.png)  | ![screenshot](documentation/wireframes/desktop-gallery.png)  |
| Signup  | ![screenshot](documentation/wireframes/mobile-signup.png)   | ![screenshot](documentation/wireframes/tablet-signup.png)   | ![screenshot](documentation/wireframes/desktop-signup.png)   |
| Success | ![screenshot](documentation/wireframes/mobile-success.png)  | ![screenshot](documentation/wireframes/tablet-success.png)  | ![screenshot](documentation/wireframes/desktop-success.png)  |
| 404     | ![screenshot](documentation/wireframes/mobile-404.png)      | ![screenshot](documentation/wireframes/tablet-404.png)      | ![screenshot](documentation/wireframes/desktop-404.png)      |
| Booking | ![screenshot](documentation/wireframes/mobile-booking.png)  | ![screenshot](documentation/wireframes/tablet-booking.png)  | ![screenshot](documentation/wireframes/desktop-booking.png)  |
| Classes | ![screenshot](documentation/wireframes/mobile-classes.png)  | ![screenshot](documentation/wireframes/tablet-classes.png)  | ![screenshot](documentation/wireframes/desktop-classes.png)  |

## Features

### Existing Features

| Feature    | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Screenshot                                                                                                     |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Navbar     | Featured on all seven pages, the full responsive navigation bar includes links to the Logo, Home page, Classes page, Gallery, Contact and Signup page, and is identical in each page to allow for easy navigation. On the smallest screens, a burger icon is used to toggle the navbar so it doesn't take up too much space. This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the "back" button. The navbar is also `fixed`, so it stays in view even if the user has scrolled to the bottom of the page. | ![screenshot](documentation/features/navbar-mobile.png) ![screenshot](documentation/features/navbar-large.png) |
| Hero Image | The landing includes a photo with text-overlay, ensuring users immediately grasp the essence of _The Forge_. This section introduces the user to the strength and resilience built within the community. A clear call-to-action button (Sign Up) is strategically placed to encourage engagement and membership.                                                                                                                                                                                                                                                                                         | ![screenshot](documentation/features/hero-image.png)                                                           |
| Why Us     | The _Why Us_ section will allow the user to see the benefits of joining _The Forge_, as well as the benefits of exercising overall. The user will see the value of signing up for _The Forge_. This should encourage the user to consider going to the gym as their form of exercise.                                                                                                                                                                                                                                                                                                                    | ![screenshot](documentation/features/why-us.png)                                                               |
| Schedule   | This section will allow the user to see exactly when the classes will happen, the duration, difficulty level and how many slots are available. This section will be updated as these times and slots change to keep the user up to date.                                                                                                                                                                                                                                                                                                                                                                 | ![screenshot](documentation/features/schedule.png)                                                             |
| Footer     | The footer includes links to the relevant social media sites for _The Forge_. The links will open in a new tab to allow easy navigation for the user. The footer is valuable to the user, as it encourages them to keep connected via social media.                                                                                                                                                                                                                                                                                                                                                      | ![screenshot](documentation/features/footer.png)                                                               |
| Gallery    | The gallery will provide the user with images to see what equipment is available and users exercising. This section is valuable to the user, as they will be able to easily identify the types of equipment that _The Forge_ has on offer. It's responsive so no images stretch or skew, showing images stacked by 1 on mobile, tablets and images appear in a carousel on desktop.                                                                                                                                                                                                                      | ![screenshot](documentation/features/gallery.png)                                                              |
| Sign up    | This page will allow the user to sign up to _The Forge_ and start their fitness journey with the community. The user will be asked to submit their full name, email address, number, date of birth and gender.                                                                                                                                                                                                                                                                                                                                                                                           | ![screenshot](documentation/features/signup.png)                                                               |
| Booking    | This page will allow the user to book a class and start their fitness journey with the community. The user will be asked to submit their full name, email address, class and date they would like to attend.                                                                                                                                                                                                                                                                                                                                                                                             | ![screenshot](documentation/features/booking.png)                                                              |
| Success    | The Success page will give the illusion that the signup form was submitted successfully to _The Forge_. Due to the lack of a database or email system so far, this is a fake confirmation page, and will encourage users to go back to the homepage.                                                                                                                                                                                                                                                                                                                                                      | ![screenshot](documentation/features/success.png)                                                              |
| 404        | The 404 error page will indicate when a user has somehow navigated to a page that doesn't exist. This replaces the default GitHub Pages 404 page, and ties-in with the look and feel of _The Forge_ site by using the standard navbar and footer.                                                                                                                                                                                                                                                                                                                                                        | ![screenshot](documentation/features/404-page.png)                                                             |
| Classes    | The classes section shows users which classes are available, a description of each class and the difficulty level. This section is important to the user as all information regarding classes is easy to find.                                                                                                                                                                                                                                                                                                                                                                                           | ![screenshot](documentation/features/classes.png)                                                              |

### Future Features

- **Personalized User Profiles**: Allow users to create accounts where they can track their journey progress, view personal stats, and share their achievements.
- **Training Plans**: Offer customizable training plans for gym goers of all levels (beginner, intermediate, advanced) with notifications and reminders.
- **Payment**: Integrate an option for members to pay for upcoming classes or memberships directly through the site.
- **Achievements & Badges**: Introduce a gamification system where users earn badges or achievements for reaching milestones (e.g., personal bests, attending classes).
- **Weekly Challenges**: Implement weekly fitness challenges or group challenges to keep users motivated and engaged.
- **Club Merchandise Store**: Introduce an online store where users can purchase branded fitness gear like shirts, jackets, or trousers.
- **Push Notifications**: Allow users to opt-in for mobile push notifications for schedule updates, new events, or motivational reminders.
- **Member Forums or Groups**: Introduce discussion boards or group chats for members to connect, discuss upcoming classes, or share training tips.

## Tools & Technologies

| Tool / Tech                                                                                                             | Use                                                                         |
| ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [![badge](https://img.shields.io/badge/Markdown_Builder-grey?logo=markdown&logoColor=000000)](https://markdown.2bn.dev) | Generate README and TESTING templates.                                      |
| [![badge](https://img.shields.io/badge/Git-grey?logo=git&logoColor=F05032)](https://git-scm.com)                        | Version control. (`git add`, `git commit`, `git push`)                      |
| [![badge](https://img.shields.io/badge/GitHub-grey?logo=github&logoColor=181717)](https://github.com)                   | Secure online code storage.                                                 |
| [![badge](https://img.shields.io/badge/VSCode-grey?logo=htmx&logoColor=007ACC)](https://code.visualstudio.com)          | Local IDE for development.                                                  |
| [![badge](https://img.shields.io/badge/HTML-grey?logo=html5&logoColor=E34F26)](https://en.wikipedia.org/wiki/HTML)      | Main site content and layout.                                               |
| [![badge](https://img.shields.io/badge/CSS-grey?logo=css3&logoColor=1572B6)](https://en.wikipedia.org/wiki/CSS)         | Design and layout.                                                          |
| [![badge](https://img.shields.io/badge/GitHub_Pages-grey?logo=githubpages&logoColor=222222)](https://pages.github.com)  | Hosting the deployed front-end site.                                        |
| [![badge](https://img.shields.io/badge/Bootstrap-grey?logo=bootstrap&logoColor=7952B3)](https://getbootstrap.com)       | Front-end CSS framework for modern responsiveness and pre-built components. |
| [![badge](https://img.shields.io/badge/Balsamiq-grey?logo=barmenia&logoColor=CE0908)](https://balsamiq.com/wireframes)  | Creating wireframes.                                                        |
| [![badge](https://img.shields.io/badge/Font_Awesome-grey?logo=fontawesome&logoColor=528DD7)](https://fontawesome.com)   | Icons.                                                                      |
| [![badge](https://img.shields.io/badge/ChatGPT-grey?logo=openai&logoColor=75A99C)](https://chat.openai.com)             | Help debug, troubleshoot, and explain things.                               |

## Agile Development Process

### GitHub Projects

[GitHub Projects](https://www.github.com/twitch10126/the-forge/projects) served as an Agile tool for this project. Through it, EPICs, User Stories, issues/bugs, and Milestone tasks were planned, then subsequently tracked on a regular basis using the Kanban project board.

![screenshot](documentation/projects/project.png)


### GitHub Issues

[GitHub Issues](https://www.github.com/twitch10126/the-forge/issues) served as an another Agile tool. There, I managed my User Stories and Milestone tasks, and tracked any issues/bugs.

| Link                                                                                                                                                                       | Screenshot                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [![GitHub issues](https://img.shields.io/github/issues/twitch10126/the-forge)](https://www.github.com/twitch10126/the-forge/issues)                                        | ![screenshot](documentation/projects/open-issues.png)   |
| [![GitHub closed issues](https://img.shields.io/github/issues-closed/twitch10126/the-forge)](https://www.github.com/twitch10126/the-forge/issues?q=is%3Aissue+is%3Aclosed) | ![screenshot](documentation/projects/closed-issues.png) |

### MoSCoW Prioritization

I've decomposed my Epics into User Stories for prioritizing and implementing them. Using this approach, I was able to apply "MoSCoW" prioritization and labels to my User Stories within the Issues tab.

- **Must Have**: guaranteed to be delivered.
- **Should Have**: adds significant value, but not vital. 
- **Could Have**: has small impact if left out. 
- **Won't Have**: not a priority for this iteration - future features.

## Testing

> [!NOTE]
> For all testing, please refer to the [TESTING.md](TESTING.md) file.

## Deployment

### GitHub Pages

The site was deployed to GitHub Pages. The steps to deploy are as follows:

- In the [GitHub repository](https://www.github.com/twitch10126/the-forge), navigate to the "Settings" tab.
- In Settings, click on the "Pages" link from the menu on the left.
- From the "Build and deployment" section, click the drop-down called "Branch", and select the **main** branch, then click "Save".
- The page will be automatically refreshed with a detailed message display to indicate the successful deployment.
- Allow up to 5 minutes for the site to fully deploy.

The live link can be found on [GitHub Pages](https://twitch10126.github.io/the-forge).

### Local Development

This project can be cloned or forked in order to make a local copy on your own system.

#### Cloning

You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://www.github.com/twitch10126/the-forge).
2. Locate and click on the green "Code" button at the very top, above the commits and files.
3. Select whether you prefer to clone using "HTTPS", "SSH", or "GitHub CLI", and click the "copy" button to copy the URL to your clipboard.
4. Open "Git Bash" or "Terminal".
5. Change the current working directory to the location where you want the cloned directory.
6. In your IDE Terminal, type the following command to clone the repository:
   - `git clone https://www.github.com/twitch10126/the-forge.git`
7. Press "Enter" to create your local clone.

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://www.github.com/twitch10126/the-forge)

**Please Note**: in order to directly open the project in Gitpod, you should have the browser extension installed. A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).

#### Forking

By forking the GitHub Repository, you make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository. You can fork this repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://www.github.com/twitch10126/the-forge).
2. At the top of the Repository, just below the "Settings" button on the menu, locate and click the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account!

### Local VS Deployment

There are no remaining major differences between the local version when compared to the deployed version online.

## Credits

### Content

| Source                                                                    | Notes                                                                                        |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [Markdown Builder](https://markdown.2bn.dev)                              | Help generating Markdown files                                                               |
| [W3schools](https://www.w3schools.com/)                                   | I used w3schools to remind me of inputs                                                      |
| [Rosie Resumé](https://codeinstitute.net)                                 | Code Institute walkthrough project inspiration                                               |
| [Bootstrap](https://getbootstrap.com)                                     | Various components / responsive front-end framework                                          |
| [ChatGPT](https://chatgpt.com)                                            | Help with code logic, explanations and text for paragraphs                                   |
| [CloudConvert](https://cloudconvert.com/webp-converter)                   | Converting images to `.webp`                                                                 |
| [Boardwalk games project](https://github.com/twitch10126/boardwalk-games) | I used the script from this project to close the burger icon once an in-page link is clicked |

### Media

| Source                                                                                                                             | Notes                          |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| [favicon.io](https://favicon.io)                                                                                                   | Generating the favicon         |
| [Font Awesome](https://fontawesome.com)                                                                                            | Icons used throughout the site |
| [Pexels](https://www.pexels.com/photo/person-holding-barbell-841130)                                                               | Hero image                     |
| [Pexels](https://unsplash.com/photos/three-women-kneeling-inside-building-at-daytime-ZXq7xoo98b0)                                  | Why us image                   |
| [Pexels](https://www.pexels.com/photo/black-kettle-bell-lot-416717)                                                                | Kettlebell gallery image       |
| [Pexels](https://www.pexels.com/photo/black-dumbbell-lot-260352)                                                                   | Weights gallery image          |
| [Pexels](https://www.pexels.com/photo/woman-in-white-tank-top-sitting-on-black-exercise-equipment-6389869/)                        | Rowing-machine gallery image   |
| [Pexels](https://www.pexels.com/photo/man-and-woman-holding-battle-ropes-1552242)                                                  | Ropes gallery image            |
| [Pexels](https://www.pexels.com/photo/an-on-treadmill-1954524)                                                                     | Treadmill gallery image        |
| [Unsplash](https://unsplash.com/photos/woman-sitting-on-yoga-mat-with-in-front-of-girl-during-daytime-HHXdPG_eTIQ)                 | Women-yoga-tutor gallery image |
| [Unsplash](https://unsplash.com/photos/women-taking-exercise-on-black-stationary-bikes-in-front-of-gray-concrete-wall-A_ftsTh53lM) | Spin class image               |
| [Unsplash](https://www.pexels.com/photo/woman-doing-exercise-inside-gym-2247179)                                                   | Weight training class image    |
| [Unsplash](https://unsplash.com/photos/women-doing-exercise-raising-left-hands-while-holding-dumbbells-inside-room-WGN6ZEFEZbs)    | Zumba class image              |
| [Unsplash](https://www.pexels.com)                                                                                                 | Yoga class image               |
| [TinyPNG](https://tinypng.com)                                                                                                     | Compressing images < 5MB       |
| [CompressPNG](https://compresspng.com)                                                                                             | Compressing images > 5MB       |

### Acknowledgements

- I would like to thank my Code Institute mentor, [Tim Nelson](https://www.github.com/TravelTimN) for the support throughout the development of this project.
- I would like to thank the [Code Institute](https://codeinstitute.net) Tutor Team for their Guidance through the course.
- I would like to thank the [Code Institute Slack community](https://code-institute-room.slack.com) for the moral support; it kept me going during periods of self doubt and impostor syndrome.
- I would like to thank my tutor, Nick sutton for supporting me in my career change towards becoming a software developer.
- I would like to thank my partner, for believing in me, and allowing me to make this transition into software development.
