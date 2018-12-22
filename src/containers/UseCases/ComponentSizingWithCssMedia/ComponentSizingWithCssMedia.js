import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Media from 'react-bootstrap/lib/Media';
import { TutorialOrgDiagram } from 'components';
import primitives from 'basicprimitives';

// eslint-disable-next-line react/prefer-stateless-function
class ComponentSizingWithCssMedia extends Component {
  render() {
    const styles = require('./ComponentSizingWithCssMedia.scss');
    const scrollbarsImage = require('./scrollbars.png');
    const scrollbars2Image = require('./scrollbars2.png');
    const scrollbars3Image = require('./scrollbars3.png');
    const config = {
      pageFitMode: primitives.common.PageFitMode.None,
      cursorItem: 0,
      hasSelectorCheckbox: primitives.common.Enabled.True,
      items: (() => {
        const items = [
          {
            id: 0,
            parent: null,
            title: 'Title 4',
            description: 'Description',
            image: '/photos/a.png'
          }
        ];

        let id = 1;
        for (let index = 0; index < 4; index += 1) {
          id += 1;
          items.push({
            id,
            parent: 0,
            title: `${id} Title`,
            description: `${id} Description`,
            image: '/photos/c.png'
          });
          const parent = id;
          for (let index2 = 0; index2 < 2; index2 += 1) {
            id += 1;
            items.push({
              id,
              parent,
              title: `${id} Title`,
              description: `${id} Description`,
              image: '/photos/c.png'
            });
          }
        }
        return items;
      })(),
    };

    return (
      <div>
        <Media>
          <Media.Heading>
            Component Sizing with CSS @Media
          </Media.Heading>
          <Media.Body>
            <p>
              The main point of CSS @Media based control sizing is to keep diagram component size less than screen size.
              We want to have diagram to be as large as possible, but we need to avoid situation when user has to scroll diagram
              and page srollbars altogether in order to see diagram content. The first image shows unusable scroll bars.
            </p>
            <p>
              <img src={scrollbarsImage} alt="Unusable scrollbars" />
            </p>
            <p>Having scroll bars enabled for components is fine if they fit into the page view port.
               So we can place diagram component and stack it verticaly with other components on the page.
               The following image shows 2 components having scrollable content, both of them are usable, since user
               can scroll them into the current view port and work with their content scrollbars individually.
            </p>
            <p>
              <img src={scrollbars2Image} alt="Usable scrollbars" />
            </p>
            <p>
              The "classic" and the most popular approach for desktop applications is to fit page and diagram 100%.
              In that case you have to design your web site appropriatly.
            </p>
            <p>
              <img src={scrollbars3Image} alt="Classic desktop layout" />
            </p>
            <p>
              The following sample control hight is sized by CSS @Media rules to be within current page view port size.
              Try to resize your browser window in order to see how it works. The diagraming component has minimum vertical size
              set to hardcoded 250px.
            </p>
            <ul>
              <li>See CSS <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media">@Media</a> for more reference</li>
            </ul>
          </Media.Body>
        </Media>
        <Helmet title="Component Sizing with CSS @Media" />

        <TutorialOrgDiagram config={config} className={styles.placeholder} />
      </div>
    );
  }
}

export default ComponentSizingWithCssMedia;
