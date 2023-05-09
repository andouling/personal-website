import React from "react";
import { Helmet } from "react-helmet";

const HomePage = () => (
  <Helmet>
    <title>Chernov Andrey</title>
    <meta
      name="description"
      content={`
        Hi! I'm an Senior Android software engineer and technical manager @ Drom.
        I'm interested in Android, iOS, JVM backend development as well as
        solving challanging application performance problems.
      `}
    />
  </Helmet>
);

export default HomePage;
