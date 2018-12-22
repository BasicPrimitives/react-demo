import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Media from 'react-bootstrap/lib/Media';
import { Panel, ButtonGroup, Button } from 'react-bootstrap';
import { TutorialOrgDiagram } from 'components';
import { connect } from 'react-redux';
import { setCursorItem } from 'redux/modules/TutorialOrgDiagram';

@connect(
  state => ({ config: state.tutorialOrgDiagram }),
  { setCursorItem }
)
class ReduxStateBoundOrganizationalChart extends Component {
  static propTypes = {
    config: PropTypes.shape({
      pageFitMode: PropTypes.number.isRequired,
      cursorItem: PropTypes.number.isRequired,
      hasSelectorCheckbox: PropTypes.number.isRequired,
      items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        parent: PropTypes.number,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string,
      })).isRequired,
    }).isRequired,
    setCursorItem: PropTypes.func.isRequired
  };

  render() {
    const styles = require('./ReduxStateBoundOrganizationalChart.scss');
    const { config, setCursorItem } = this.props; // eslint-disable-line no-shadow
    return (
      <div>
        <Helmet title="Redux State Bound Organizational Chart" />
        <Media>
          <Media.Heading>
            Redux State Bound Organizational Chart
          </Media.Heading>
          <Media.Body>
            <p>In this example we move Organizational Chart configuration object
              from component state to global Redux state, so functionality stays the same,
              but control initial configuration migrated to Redux.
            </p>
            <ul>
              <li>See <a href="https://redux.js.org/">React Redux</a></li>
            </ul>
          </Media.Body>
        </Media>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Select cursor item</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <ButtonGroup>
              <Button onClick={() => setCursorItem(0)}>James Nunnally</Button>
              <Button onClick={() => setCursorItem(1)}>Victor Petrie</Button>
              <Button onClick={() => setCursorItem(2)}>Roger Greenlee</Button>
              <Button onClick={() => setCursorItem(3)}>John Drake</Button>
              <Button onClick={() => setCursorItem(null)}>Unselect</Button>
            </ButtonGroup>
          </Panel.Body>
        </Panel>
        <div>
          <TutorialOrgDiagram
            className={styles.placeholder}
            config={config}
            onCursorChanged={(e, data) => {
              setCursorItem(data.context.id);
            }}
          />
        </div>
      </div>
    );
  }
}

export default ReduxStateBoundOrganizationalChart;
