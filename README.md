# Project Description## Overview

The project is a web application built using **React**. The application is designed to be a single-page application (SPA).

## Technical Requirements
  - **Front-end Framework**: React (version 18.3.1)
  - **Router**: React Router DOM (version 6.26.0)
  - **State Management**: React Redux (version 9.1.2), Redux Toolkit (version 2.2.7)
  - **Build Tool**: Vite (version 5.4.0)

## Key Features and Functionalities

1. **Home Page**:
  - A hero section with a background video
  - A team section with a carousel
  - A rockets section with a list of rockets
2. **Rocket Page**: 
  - A page with details for a specific rocket
3. **Favorite Rocket Page**: 
  - A page for saved rockets (accessible only to registered users)
4. **Error Page**: 
  - A 404 error page with a countdown timer that redirects to the home page after 5 seconds
5. **User Features**: 
  - Registration and user authentication

## Dependencies

  - **axios**: For making HTTP requests to APIs
  - **formik**: For building forms and handling form data
  - **react-countup**: For animating numbers and counters
  - **react-loader-spinner**: For displaying loading spinners
  - **react-player**: For playing videos
  - **styled-components**: For styling components and layout
  - **swiper**: For building carousels and sliders
  - **react-hot-toast**: For displaying toasts
  - **redux-persist**: For persisting redux state

## Deployment

  - **Build Tool**: Vite
  - **Deployment Strategy**: Netlify

### Deployment on Netlify with GitHub Integration and Custom Domain

To deploy updates to the React web application on Netlify, integrating with GitHub and setting up a custom domain, follow these steps:

1.**Commit Changes to GitHub**:
    - Ensure all changes are committed to the GitHub repository where the React project is hosted.

2.**Set Up Continuous Deployment on Netlify**:
    - Log in to your Netlify account or create one if you haven't already.
    - Connect your Netlify account to GitHub to allow Netlify to access your repository.
    - Choose the repository with your React project on GitHub for deployment.

3.**Configure Deploy Settings**:
    - Specify the branch to deploy: `"main"`.
    - Define build commands: `"npm run build"` and publish directories: `"dist"`. For a React application built with Vite, default settings should suffice.

4.**Set Up Custom Domain**:
    - When deploying the project, specify your own domain name in the corresponding field.

5.**Monitor Deployment Progress**:
    - Netlify will initiate the deployment process, building your React application and publishing it to the specified domain.
    - Track deployment progress in the Netlify dashboard.

6.**Access the Deployed Application**:
    - Once deployment is complete, access your updated React web application using your custom domain.

7.**Automatic Deployment**:
    - Enable automatic deployments. Go to **Build status** => **Active builds**. This way, any new commits to the selected branch trigger automatic deployments on Netlify.
