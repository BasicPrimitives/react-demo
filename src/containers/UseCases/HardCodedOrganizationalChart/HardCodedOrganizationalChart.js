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
          <Media.Heading>Hard Coded Organizational Diagram</Media.Heading>
          <Media.Body>
            <p>
              Basic Primitives controls are statefull components, that means they reuse as much as possible between rendering cycles, but React as every other modern framework
              assumes rendering function to be a pure function returning single DIV element, which it merges into DOM itself. So in order to integrate Basic Primitives controls
              into React we have to create wrapper component which creates Div placeholder and calls Basic Primitives Control to render its content.
            </p>
            <p>This sample diagram page demonstrates following integration issues:</p>
            <ul>
              <li>
                <a href="https://www.npmjs.com/package/basicprimitives">Basic Primitives Control</a> adding to the React component
              </li>
              <li>React component properties declaration and passing Basic Primitives Control Configuration as hardcoded JSON object</li>
              <li>
                Control placeholder reference with <a href="https://reactjs.org/docs/refs-and-the-dom.html">Refs and the DOM</a>
              </li>
              <li>
                Control creation and destruction with <a href="https://reactjs.org/docs/state-and-lifecycle.html">React State and Lifecycle API methods</a>
              </li>
              <li>
                Control update on placeholder size changed event, using <a href="https://github.com/que-etc/resize-observer-polyfill">ResizeObserver Polyfill</a>
              </li>
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
