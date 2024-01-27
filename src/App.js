import React from 'react'
import { AppContext } from './context/contextApi'

import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    // Wrap the app around the app context so that all the state is available throughout the project
    <AppContext>

      {/* Routes */}
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" element={<Feed />} />

            {/*  :searchQuery this will be passed dynamically from the URL*/}
            <Route path="/searchResult/:searchQuery" element={<SearchResult />} />

            {/*  :searchQuery this will be passed dynamically from the URL*/}
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>

        </div>
      </BrowserRouter>
      {/* Routes */}

    </AppContext>
  )
}

export default App
