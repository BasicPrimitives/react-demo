import React, { Component } from 'react';
import Helmet from 'react-helmet';
import {
  Media,
  Well
} from 'react-bootstrap';
import { OrgDiagram } from 'components';
import primitives from 'basicprimitives';

// eslint-disable-next-line react/prefer-stateless-function
class ButtonsPanel extends Component {
  state = {
    clickedButtonInfo: null,
    config: {
      pageFitMode: primitives.common.PageFitMode.FitToPage,
      hasSelectorCheckbox: primitives.common.Enabled.True,
      cursorItem: 0,
      hasButtons: primitives.common.Enabled.True,
      buttons: [
        {
          name: 'delete',
          icon: 'remove',
          tooltip: 'Delete'
        },
        {
          name: 'properties',
          icon: 'cog',
          tooltip: 'Info'
        },
        {
          name: 'add',
          icon: 'user',
          tooltip: 'Add'
        }
      ],
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
    }
  };

  onButtonClick = ({ name, context }) => {
    this.setState({
      clickedButtonInfo: {
        name,
        title: context.title,
        id: context.id
      }
    });
  };

  render() {
    const styles = require('./ButtonsPanel.scss');
    const {
      clickedButtonInfo,
      config
    } = this.state;

    return (
      <div>
        <Helmet title="Buttons Panel" />
        <Media>
          <Media.Heading>
            Buttons Panel
          </Media.Heading>
          <Media.Body>
            <p>
              Basic Primitives diagrams provide simple API to create custom user buttons.
              They are defined in primitives.orgdiagram.Config.buttons collection, of type primitives.orgdiagram.ButtonConfig.
              Option primitives.orgdiagram.Config.hasButtons allows to make buttons visible only for current cursor item
              or for all normal items in diagram. The same option primitives.orgdiagram.ItemConfig.hasButtons in
              item controls buttons visibility for individual items.
            </p>
          </Media.Body>
        </Media>
        <Well>{ (clickedButtonInfo == null ? 'No clicked item' : `User clicked ${clickedButtonInfo.name} button for item ${clickedButtonInfo.title}`) }</Well>
        <div>
          <OrgDiagram
            className={styles.placeholder}
            config={config}
            onButtonClick={this.onButtonClick}
          />
        </div>
      </div>
    );
  }
}

export default ButtonsPanel;
