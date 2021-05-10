import React from "react"
import Layout from "../components/Layout"

import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
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
        <section className="featured-recipes">
          <h5>
            Hot and Spicy <span className="entity-pepper">&#127798;</span>
          </h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      filter: { featured: { eq: true } }
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Contact
