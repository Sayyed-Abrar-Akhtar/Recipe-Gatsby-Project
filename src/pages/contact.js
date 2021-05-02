import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              lorem ipsum dolor olre lorem ipsum dolor olre lorem ipsum dolor
              olre lorem ipsum dolor olre{" "}
            </p>
            <p>Lorem ipsum dolor olre lorem ipsum dolor</p>
            <p>
              lorem ipsum dolor olre lorem ipsum dolor olre lorem ipsum dolor
              olre lorem ipsum dolor olre{" "}
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
