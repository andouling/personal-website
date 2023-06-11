import React from "react";
import { Helmet } from "react-helmet";

class ComingSoonPage extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Andrey Chernov</title>
          <meta
            name="description"
            content={`
              Hi! I'm a Senior Android software engineer and technical manager @ Drom.
              I'm interested in Android, iOS, JVM backend development as well as
              solving challenging application performance problems.
            `}
            />
        </Helmet>
        <div style={{height: 500 + "px"}}>
          <div>Coming Soon...</div>
        </div>
      </div>
    );
  }
}

export default ComingSoonPage;