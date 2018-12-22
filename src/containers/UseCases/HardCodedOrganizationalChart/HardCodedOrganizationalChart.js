import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Media from 'react-bootstrap/lib/Media';
import { TutorialOrgDiagram } from 'components';
import primitives from 'basicprimitives';

// eslint-disable-next-line react/prefer-stateless-function
class HardCodedOrganizationalChart extends Component {
  render() {
    const styles = require('./HardCodedOrganizationalChart.scss');
    const config = {
      pageFitMode: primitives.common.PageFitMode.FitToPage,
      cursorItem: 0,
      hasSelectorCheckbox: primitives.common.Enabled.True,
      items: [
        {
          id: 0,
          parent: null,
          title: 'Scott Aasrud',
          description: 'VP, Public Sector',
          image: '/photos/a.png'
        },
        {
          id: 1,
          parent: 0,
          title: 'Ted Lucas',
          description: 'VP, Human Resources',
          image: '/photos/b.png'
        },
        {
          id: 2,
          parent: 0,
          title: 'Fritz Stuger',
          description: 'Business Solutions, US',
          image: '/photos/c.png'
        }
      ]
    };

    return (
      <div>
        <Media>
          <Media.Heading>
            Hard Coded Organizational Diagram
          </Media.Heading>
          <Media.Body>
            <p>Basic Primitives diagramming component library implemented in JavaScript without
              dependencies on 3d party libraries and frameworks. It renders diagrams in
              browsers optionally using SVG, Canvas and HTML templates. By default it provides
              very basic node template which you can see in the following example.
              It serves only one purpose to make first time user experience as simple as possible,
              software engineer is supposed to provide nodes having basically only id,
              name and parent id defined, so it is enough to render first diagram.</p>
            <p>Basic Primitives controls use existing HTML elements as placeholders on
              the web page to draw diagrams. The only HTML element which can serve
              as a placeholder is div. When you resize placeholder chart will
              not update its content automatically, it will not shrink or expand in size,
              in order to have the chart adopt to the new placeholder size you have
              to explicitly call "update" method on its API. In order to create or update diagram
              you have to pass configuration object or set individual options on its API and then call
              "update" method to apply changes. The configuration object consists of options
              and collections of various objects like items, annotations, etc., the API
              objects are referenced by unique ids. For convenience, all configuration objects
              are based on their own JavaScript prototype, so you can instantiate them and browse
              their default properties. Since we are in JavaScript world, all configuration objects can
              be defined in form of regular JSON objects as well.</p>
            <p>Basic Primitives controls are statefull components, that means they reuse as much
              as possible between rendering cycles, but React as every other modern
              framework assumes rendering function to be a pure function returning single DIV
              element, which it merges into DOM itself. So in order to integrate  Basic Primitives
              controls into React we have to create wrapper component which
              creates Div placeholder and calls Basic Primitives Control to render its content.
            </p>
            <p>This sample diagram page demonstrates following integration issues:</p>
            <ul>
              <li><a href="https://www.npmjs.com/package/basicprimitives">Basic Primitives Control</a> adding to the React component</li>
              <li>React component properties declaration and passing Basic Primitives Control Configuration as hardcoded JSON object</li>
              <li>Control placeholder reference with <a href="https://reactjs.org/docs/refs-and-the-dom.html">Refs and the DOM</a></li>
              <li>Control creation and destruction with <a href="https://reactjs.org/docs/state-and-lifecycle.html">React State and Lifecycle API methods</a></li>
              <li>Control update on placeholder size changed event, using <a href="https://github.com/que-etc/resize-observer-polyfill">ResizeObserver Polyfill</a></li>
            </ul>
          </Media.Body>
        </Media>
        <Helmet title="Hard Coded React Organizational Chart" />

        <TutorialOrgDiagram config={config} className={styles.placeholder} />
      </div>
    );
  }
}

export default HardCodedOrganizationalChart;
