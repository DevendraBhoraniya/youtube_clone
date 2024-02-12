import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Components/Header'
import Feed from './Feed'
import VideoDetail from './VideoDetail'
import ChannelDetails from './ChannelDetails'
import SearchFeed from './SearchFeed'


const Home = () => {
  return (
    <>
      <div className="text-white">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Feed />} />
            <Route path='/video/:id' element={<VideoDetail />} />
            <Route path='/channel/:id' element={<ChannelDetails />} />
            <Route path='/search/:searchTerm' element={<SearchFeed />} />
          </Routes>
        </Router>
      </div>

    </>
  )
}

export default Home
