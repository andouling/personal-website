import PropTypes from "prop-types";
import React from "react";
import { Link as GatsbyLink } from "gatsby";

// prettier-ignore
const Link = ({ to, notGatsby, children, ...props }) => (
  notGatsby || /(^https?:\/\/)|(mailto)/.test(to)
    ? <a href={to} {...props} target="_blank">{children}</a>
    : <GatsbyLink to={to} {...props}>{children}</GatsbyLink>
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  notGatsby: PropTypes.bool,
};

export default Link;
