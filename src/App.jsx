import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import AllJobs from './pages/AllJobs'
import MyJobs from './pages/MyJobs'
import JobDetails from './pages/JobDetails'
import Onboarding from './pages/Onboarding'
import PostJobs from './pages/PostJobs'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />} />
        <Route path="jobs" element={<AllJobs />} />
        <Route path="my-jobs" element={<MyJobs />} />
        <Route path="jobs/:id" element={<JobDetails />} />
        <Route path="onboard" element={<Onboarding />} />
        <Route path="post-job" element={<PostJobs />} />
      </Routes>
      <Footer />
    </>
  )
}
