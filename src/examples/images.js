import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h2>Constrained / Default</h2>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          height={400}
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
        />
      </article>
      <article>
        <h2>Fixed</h2>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="blurred"
          layout="fixed"
          width={200}
          className="example-img"
          as="div"
        />
      </article>
      <article>
        <h2>Full width</h2>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="dominantColor"
          layout="fullWidth"
          className="example-img"
          as="article"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 1px solid orangered;
  }
  .example-img {
    border-radius: 2px;
  }
  /* @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  } */
`

export default Images
