import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import LangChangeToggle from "../components/panel/lang-change-toggle"
import {
  faAngleLeft,
  faAngleRight,
  faEnvelope,
  faLink,
  faFilePdf,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import "./index.scss";
import Footer from "../components/footer";
import Header from "../components/header";

library.add(
  faFacebook,
  faGithub,
  faLinkedin,
  faEnvelope,
  faLink,
  faFilePdf,
  faMinus,
  faPlus,
  faAngleLeft,
  faAngleRight,
);
config.autoAddCss = false;

const LayoutWrapper = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 90%;
  max-width: 1000px;
`;

//todo <LangChangeToggle/>
const Layout = (props) => (
  <LayoutWrapper>
    <Helmet>
      <title>Andrey Chernov</title>
      <meta
        name="description"
        content={`
          Andrey Chernov. I&#39;m an Senior Android software engineer and technical manager @ Drom.
          I'm interested in Android, iOS, JVM backend development as well as
          solving challanging application performance problems.
        `}
      />
    </Helmet>
    <Header activePage={props.location.pathname} />
    {props.children}
    <Footer activePage={props.location.pathname} />
  </LayoutWrapper>
);

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.element.isRequired,
};

export default Layout;
