import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import KommunicateChat from '../components/Chatbot'

export default function RootLayout() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <KommunicateChat />
        <Footer />
    </div>
  )
}
