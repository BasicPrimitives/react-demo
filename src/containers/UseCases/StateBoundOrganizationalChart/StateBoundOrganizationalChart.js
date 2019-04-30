import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Media from 'react-bootstrap/lib/Media';
import { Panel, ButtonGroup, Button } from 'react-bootstrap';
import { TutorialOrgDiagram } from 'components';
import primitives from 'basicprimitives';

// eslint-disable-next-line react/prefer-stateless-function
class StateBoundOrganizationalChart extends Component {
  state = {
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

  setCursorItem = itemId => {
    this.setState({ cursorItem: itemId });
  };

  render() {
    const styles = require('./StateBoundOrganizationalChart.scss');
    const {
      pageFitMode, cursorItem, hasSelectorCheckbox, items
    } = this.state;

    return (
      <div>
        <Helmet title="State Bound Organizational Chart" />
        <Media>
          <Media.Heading>State Bound Organizational Chart</Media.Heading>
          <Media.Body>
            <p>
              In this example instead of passing configuration object as a hardcoded JSON object to diagram property we put its properties into component state, so React rerenders
              content every time we make changes in it. We added 4 buttons to change cursorItem property in state object to different values.
            </p>
            <ul>
              <li>
                See React reference on how to work with <a href="https://reactjs.org/docs/faq-state.html">Component State</a>
              </li>
            </ul>
          </Media.Body>
        </Media>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Select cursor item</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <ButtonGroup>
              <Button onClick={() => this.setCursorItem(0)}>Scott Aasrud</Button>
              <Button onClick={() => this.setCursorItem(1)}>Ted Lucas</Button>
              <Button onClick={() => this.setCursorItem(2)}>Fritz Stuger</Button>
              <Button onClick={() => this.setCursorItem(null)}>Unselect</Button>
            </ButtonGroup>
          </Panel.Body>
        </Panel>
        <div>
          <TutorialOrgDiagram
            className={styles.placeholder}
            config={{
              pageFitMode,
              cursorItem,
              hasSelectorCheckbox,
              items
            }}
            onCursorChanged={(e, data) => {
              this.setCursorItem(data.context.id);
            }}
          />
        </div>
      </div>
    );
  }
}

export default StateBoundOrganizationalChart;
