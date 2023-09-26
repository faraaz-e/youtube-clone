### Youtube Clone

Youtube clone app using React

[Click here for App Screenshots](https://github.com/faraaz-e/youtube-clone/#screenshots)

Disclaimer: This App is made for educational purpose only.

### Project Installation & dependencies

- `npx create-react-app app-name`
- `npm i -D tailwindcss`
- `npx tailwindcss init`
- Configure the _tailwind.config.js_ file
- `npm i @reduxjs/toolkit`
- `npm i react-redux`
- `npm i react-router-dom`

### Project Structure

- Head
- Body
- Sidebar
    - MenuItems
- MainContainer
    - ButtonsList
    - VideoContainer
        - VideoCard

### Screenshots

![image](https://github.com/faraaz-e/youtube-clone/assets/61732459/eeeeb1ee-667c-400f-ae23-fa0a6cc6093b)

![image](https://github.com/faraaz-e/youtube-clone/assets/61732459/9d58b541-c05a-404b-9752-4c373d3e546d)

![image](https://github.com/faraaz-e/youtube-clone/assets/61732459/d6855bd1-04e0-4ba4-acef-73a578f41ad4)

#### Notes

Two types of getting Live Data

1. **Web Sockets** : Connection between client(UI) and server establishes to get realtime data (no time intervals to fetch data)
2. **Long/API Polling** : Client fetches data from server at certain time intervals

