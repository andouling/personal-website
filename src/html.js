import PropTypes from "prop-types";
import React from "react";
import favicon from "../static/favicon.ico";

const HTML = (props) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Hi, I'm a student at the Unversity of Waterloo studying software engineering"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" type="image/png" href={favicon} />
      {props.headComponents}
    </head>
    <body>
      <div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
      {props.postBodyComponents}
    </body>
  </html>
);

HTML.propTypes = {
  headComponents: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
  postBodyComponents: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
  body: PropTypes.string.isRequired,
};

export default HTML;
