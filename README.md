# Corona Case Map

Visualize the spread of COVID-19 cases in real-time with this interactive global map.

## Features

Real-time data updates: Stay informed with the latest case numbers.\
Interactive Mapbox globe: Explore the world with smooth zooming, rotating, and panning.\
Color-coded markers: Visualize case severity with a heatmap-like intensity based on infection count.\
Customizable filters: Focus on specific regions and time periods to uncover trends and patterns.\
User-friendly interface: Easy to navigate and explore.

## Built with

HTML\
CSS\
JavaScript\
Mapbox GL JS

# Getting Started

## Clone or download this repository
Obtain a Mapbox access token
https://docs.mapbox.com/help/getting-started/access-tokens/: https://docs.mapbox.com/help/getting-started/access-tokens/

Create a .env file in the project root and add your token\
REACT_APP_MAPBOX_TOKEN=YOUR_MAPBOX_TOKEN

## Install dependencies
Bash\
npm install


## Start the development server
Bash\
npm start


# Additional Information about Dependencies
## Fetch API

Purpose: Fetches data from external sources, enabling dynamic updates and interactions within web applications.\
## Role in Corona Case Mapping\
Retrieves the latest case data from the data.json file every 20 seconds.\
Ensures the map visualization reflects the most recent information, showcasing real-time trends.\
## Benefits\
Simplifies data retrieval compared to older methods like XMLHttpRequest.\
Offers a flexible and powerful interface for handling network requests.\
Supports modern JavaScript features like Promises for cleaner code.\
## Mapbox GL JS\

Purpose: Creates interactive, customizable maps for the web using Mapbox's map styles and vector tiles.\
## Role in Corona Case Mapping\
Renders the interactive 3D globe visualization.\
Applies the "dark-v10" map style for visually appealing presentation.\
Positions markers on the map based on latitude and longitude from the fetched data.\
Assigns varying marker colors to represent case severity, creating a heatmap-like effect.\
## Benefits
Provides high-performance map rendering with smooth panning and zooming.\
Offers pre-designed map styles and tools for visual customization.\
Simplifies map interaction and marker management.\
## Collaboration\

Fetch API retrieves data: Fetches the latest case information from the specified data source.\
Mapbox GL JS renders the map: Uses the fetched data to update markers and visual elements, creating an accurate and engaging representation of the pandemic's spread.
## Contribute

We welcome contributions!\
Please see the CONTRIBUTING.md file for guidelines.
