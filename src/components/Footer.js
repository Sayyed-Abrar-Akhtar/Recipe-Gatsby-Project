import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>Simple Recipe.</span> Built with{" "}
        <a href="http://www.gatsbyjs.com">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
