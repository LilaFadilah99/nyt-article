# News Article Search Application

## Description

The News Article Search Application is a web-based tool that allows users to search for articles from The New York Times. Using keywords, users can find relevant articles and explore them through a clean and responsive interface. The application fetches data from the NYT Article Search API, displaying search results with a simple, user-friendly design. The app features pagination, so users can navigate through long lists of articles with ease.

This project is fully responsive, ensuring a seamless user experience across all devices, including desktops, tablets, and smartphones. The search functionality is paired with error handling to manage failed API requests or situations when no articles are found.

## Features

- Article Search: Users can enter keywords to search for relevant articles from The New York Times.
- Pagination: The application supports pagination, allowing users to - load more articles with a click of a button, making it easy to browse through large sets of results.
- Responsive Design: The app automatically adapts its layout to different screen sizes, providing a user-friendly experience on desktop, tablet, and mobile.
- Error Handling: If the search fails, an error message is displayed. If no articles are found for the search query, a message prompts users to try another keyword.

## Installation

1. Clone the repository:

```
git clone https://github.com/LilaFadilah99/nyt-article
```

2. Install the dependencies:

```
npm install
```

3. Start the development server:

```
npm run dev
```

## Setting Up Environment Variables

1. Create a .env file in the root of your project.
2. Add the following variables to your .env file:

```
VITE_API_KEY=your_api_key_here
VITE_BASE_URL=The New York Article Search API
```
