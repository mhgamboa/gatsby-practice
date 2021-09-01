import React from "react"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  const currentYear = new Date().getFullYear()

  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>Marcus Gamboa {currentYear}©</p>
      </footer>
    </div>
  )
}
