import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <spangat>Simple Recipe.</spangat>{" "}
        Built with <a href="http://www.gatsbyjs.com">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
