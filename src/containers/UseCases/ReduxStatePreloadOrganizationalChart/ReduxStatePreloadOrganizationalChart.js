import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import {
  Media,
  Panel,
  ButtonGroup,
  Button
} from 'react-bootstrap';
import { TutorialOrgDiagram } from 'components';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { isLoaded, load, setCursorItem } from 'redux/modules/PreloadOrgDiagram';

@provideHooks({
  fetch: ({ store: { dispatch, getState } }) => !isLoaded(getState())
    ? dispatch(load()).catch(() => null)
    : Promise.resolve()
})
@connect(
  state => ({ config: state.preloadOrgDiagram }),
  { setCursorItem }
)
class ReduxStatePreloadOrganizationalChart extends Component {
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
    const styles = require('./ReduxStatePreloadOrganizationalChart.scss');
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
              <Button onClick={() => setCursorItem(0)}>Harry Harter</Button>
              <Button onClick={() => setCursorItem(1)}>Fannie Carter</Button>
              <Button onClick={() => setCursorItem(2)}>Brent Hill</Button>
              <Button onClick={() => setCursorItem(3)}>Kelly Ward</Button>
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

export default ReduxStatePreloadOrganizationalChart;
