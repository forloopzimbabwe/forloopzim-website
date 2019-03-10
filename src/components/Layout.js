import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import "../styles";
import "./Navbar/styles.scss";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const TemplateWrapper = ({
  footerData = null,
  navbarData = null,
  children
}) => (
  <div>
    <Helmet>
      <html lang="en" />
      <meta
        name="keywords"
        content="forloopZimbabwe, zimbabwe, programming, meetup"
      />
    </Helmet>
    <div class="header-banner">
      <p>
        Do you want to speak at forloopZimbabwe?{" "}
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          Submit your talk
        </a>
        .
      </p>
    </div>
    <Navbar data={navbarData} />
    <main>{children}</main>
    <Footer data={footerData} />
  </div>
);

export const query = graphql`
  fragment LayoutFragment on Query {
    footerData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "footer" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            logoImage {
              image
              imageAlt
              tagline
            }
            socialLinks {
              image
              imageAlt
              label
              linkURL
            }
          }
        }
      }
    }
    navbarData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "navbar" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            logoImage {
              image
              imageAlt
            }
            menuItems {
              label
              linkType
              linkURL
            }
          }
        }
      }
    }
  }
`;

export default TemplateWrapper;
