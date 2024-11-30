# AnimeKey OTT Platform
This is a Animekey OTT TV platform built using React.js.This application provides a full-featured OTT experience, including user authentication, movie and series browsing, video playback, user profiles, and content categorization.

## Table of Contents
1. Project Overview
2. Features
3. Tech Stack
4. Setup & Installation
5. Third-Party Libraries
6. Project Structure
7. API Documentation
8. License

## Project Overview
The Animekey OTT TV platform is designed to provide users with a seamless streaming experience. Users can browse through a vast collection of movies and series, watch trailers, manage watchlists, and even set preferences for subtitles, audio, and playback settings.

## Features
- User Authentication: user can login by scanning QR code from  animekey ott app and by email id created on animekey ott app.

- Content Browsing: Browse movies, series, and genres. Search by title discription and more.

- Playlists & Watchlists: Create and manage personal playlists and watchlists.

- Video Playback: Smooth video playback with subtitle, audio options, speed option and quality resolution option .

- Multi-language Support: Subtitle and audio track management.

- Profile Management: content visible according to user profile like parent or kid and also have parental lock pin to login and change profile.


# Tech Stack
- Frontend: React.js
- UI:SCSS
- Authentication: Scannig by QR code (with custom OTP flow)
- Video Playback: Video.js
- Backend: REST APIs built with PHP

# Setup & Installation
Prerequisites
- Npm : 8.19.4
- Node: v16.20.2
- React: 18.3.1
- .env file with required environment variables

# Installation
- Clone the repository: git clone http://gitlab.appinvent.in/animekey/animekey_lgos.git
- cd animekey_lgos
- Install dependencies
- npm install
- Setup environment variables
- Create a .env.local file at the root of the project and add the following variables:
         REACT_APP_API_URL=https://your-domain.com
         REACT_APP_BASIC_AUTH_USERL= username 
         REACT_APP_BASIC_AUTH_PASSWORD= password
- npm run start
- The project should be running at http://localhost:3000.

# Third-Party Libraries

1. QRCode : genrating QR code for logining user.
2. SCSS: Responsive, utility-first CSS framework.
3. Video.js: Video player for handling movie and series playback.
4. Axios: For handling API requests with centralized error handling.
5. Firebase Analytics: For movies and series views.

# Project Structure
├──assests # variable for scss and colors
├── components     # Reusable UI components
├── pages          # React.js pages
│   ├── ContentDetail  # movies and series detail screen with discription, rating and watch video button
│   ├── Home       # Home page
│   ├── MyList     # watchlist listing and detail pages
│   ├── Login      # login by email and qr code
│   ├── Profile    # User login profile detail
│   ├── Search     # Search input to seach movie and series
│   ├── Series     # Series listing and detail pages
│   ├── GenereList # Genere listing and detail pages
│
├── public         # Static files
├── styles         # Global and component-specific styles
├── utils          # Utility functions (API calls, helpers)
├── index.ts       # Static files
├── app.ts         # Routing management
└── README.md      # Project README file

# API Documentation
The backend API endpoints are as follows:

ONBOARD_DEVICE: `/media/v1/device`,- Handles OTP verification and session creation.
LOGOUT_SESSION: `/media/v1/sessions/logout`, for logout 
EMAIL_TOKEN: `/media/v1/accounts/signin`, for login by email
CATEGORY_LIST: `/media/v1/contents/home`, fetch all category for movies and series
SERIES_LIST: `/media/v1/contents/filter`,fetch all series list
GENERE_LIST: `/media/v1/contents/catalogue`,fetch all genere list
CONTENT_VIEW: `/media/v1/contents/view`, fetch detail of movie and series
MY_LIST_LISTING: `/media/v1/watch-list/my-list`, fetch watchlisted list 
PROFILE_LIST: `/media/v1/customers/profiles/list`, fetch profile list
USER_PROFILE: `media/v1//customers/profile`,Manages user data.

# interview-test-skill-mine-reactjs
