import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Media from 'react-bootstrap/lib/Media';
import ReactDOM from 'react-dom';
import { OrgDiagram } from 'components';
import primitives from 'basicprimitives';

// eslint-disable-next-line react/prefer-stateless-function
class ItemTemplate extends Component {
  state = {
    pageFitMode: primitives.common.PageFitMode.FitToPage,
    hasSelectorCheckbox: primitives.common.Enabled.True,
    cursorItem: 0,
    templates: [
      {
        name: 'contactTemplate2',
        itemSize: { width: 220, height: 120 },
        minimizedItemSize: { width: 3, height: 3 },
        highlightPadding: {
          left: 2,
          top: 2,
          right: 2,
          bottom: 2
        }
      },
      {
        name: 'contactTemplate',
        itemSize: { width: 220, height: 120 },
        minimizedItemSize: { width: 3, height: 3 },
        highlightPadding: {
          left: 2,
          top: 2,
          right: 2,
          bottom: 2
        }
      }
    ],
    items: [
      {
        id: 0,
        parent: null,
        title: 'Scott Aasrud',
        description: 'VP, Public Sector',
        phone: '(123) 456-78-90',
        email: 'itema@org.com',
        image: '/photos/a.png',
        templateName: 'contactTemplate',
        itemTitleColor: 'red',
        groupTitle: 'Group 2'
      },
      {
        id: 1,
        parent: 0,
        title: 'Ted Lucas',
        description: 'VP, Human Resources',
        image: '/photos/b.png',
        groupTitle: 'Group 1'
      },
      {
        id: 2,
        parent: 0,
        title: 'Fritz Stuger',
        phone: '(123) 654-78-90',
        email: 'itemc@org.com',
        description: 'Business Solutions, US',
        image: '/photos/c.png',
        templateName: 'contactTemplate2',
        groupTitle: 'Group 3'
      }
    ]
  };

  render() {
    const styles = require('./ItemTemplate.scss');
    const {
      pageFitMode,
      cursorItem,
      hasSelectorCheckbox,
      templates,
      items
    } = this.state;

    return (
      <div>
        <Helmet title="Item Template" />
        <Media>
          <Media.Heading>
            Item Template
          </Media.Heading>
          <Media.Body>
            <h5>Configuration Classes</h5>
            <p>
              When we define node templates we can define Content Template, Cursor Template and Highlight
              Templates in one configuration object. This make sense since if we decide to customize
              cursor or highlight templates most likely we are going to make them item template specific.
              At the same time control does not require all 3 of them to be defined.
              If cursor or highlight templates properties are not set in template configuration
              object, then control uses internal default template for all of them.
              Generally all 3 templates can be set to null, so default templates are gonna be used
              by control. See template configuration properties in the following classes:
            </p>
            <ul>
              <li>primitives.orgdiagram.ItemConfig</li>
              <li>primitives.famdiagram.Config</li>
              <li>primitives.orgdiagram.Config</li>
              <li>primitives.famdiagram.TemplateConfig</li>
              <li>primitives.orgdiagramTemplateConfig</li>
            </ul>
            <h5>Usage of React rendering engine</h5>
            <p>
              React rendering cycle assumes creation of virtual in-memory DOM of rendered elements and then
              it merges them into DOM updating it where it is needed. No changes means no updates of DOM.
              Basic Primitives Diagram component positions nodes placeholders and then calls onItemRender
              function to let user populate nodes contents. The rendering function provides reference to data item,
              DOM element and name of template it should use.
            </p>
            <p>
              Basic Primitives Controls internally across all elements use JSON ML as a templates definition,
              see following web site for more details <a href="http://www.jsonml.org/">http://www.jsonml.org/</a>.
              This is only 3d party MIT licensed code included into our code base, everything else is 100% authentic.
              We adopted it with minor modifications, in general it works by its original design.
              The following code snipped demonstrates usage of JSON ML in code. Since we are in React world
              the primary way to render contents of elements is to use React <a href="https://reactjs.org/docs/introducing-jsx.html">JSX</a>,
              so the following organizational chart component uses custom node templates rendered with ReactDOM using JSX template.
            </p>
            <h5>Size</h5>
            <p>
              Control deals with fixed size layout, it makes no guesses about content and size of nodes.
              So we don't support in any form nodes auto sizing. In order to support such feature control
              should measure content of every node before rendering cycle. Taking into account that nodes
              visibility depends on available space it is going to be infinite loop of diagram layout and
              nodes measure iterations. The more space we provide to nodes the less number of diagram nodes
              is going to be visible. So control expect that node size is hard valued in template configuration.
            </p>
          </Media.Body>
        </Media>
        <div>
          <OrgDiagram
            className={styles.placeholder}
            config={{
              pageFitMode,
              cursorItem,
              hasSelectorCheckbox,
              templates,
              items
            }}
            onItemRender={({ context, element, templateName }) => { // eslint-disable-line no-unused-vars
              switch (templateName) {
                case 'contactTemplate':
                  ReactDOM.render(
                    <div className={`bp-item bp-corner-all bt-item-frame ${styles.contact_template}`}>
                      <div className={`bp-item bp-corner-all bp-title-frame ${styles.background}`} style={{ backgroundColor: context.itemTitleColor }}>
                        <div className={`bp-item bp-title ${styles.title}`}>
                          {context.title}
                        </div>
                      </div>
                      <div className={`bp-item bp-photo-frame ${styles.photo_frame}`}>
                        <img className={styles.photo} src={context.image} alt={context.title} />
                      </div>
                      <div className={`bp-item ${styles.phone}`}>{context.phone}</div>
                      <div className={`bp-item ${styles.email}`}>{context.email}</div>
                      <div className={`bp-item ${styles.description}`}>{context.description}</div>
                    </div>,
                    element
                  );
                  break;
                case 'contactTemplate2':
                  ReactDOM.render(
                    <div className={`bp-item bp-corner-all bt-item-frame ${styles.contact_template2}`}>
                      <div className={`bp-item bp-corner-all bp-title-frame ${styles.background}`} style={{ backgroundColor: context.itemTitleColor }}>
                        <div className={`bp-item bp-title ${styles.title}`}>
                          {context.title}
                        </div>
                      </div>
                      <div className={`bp-item bp-photo-frame ${styles.photo_frame}`}>
                        <img className={styles.photo} src={context.image} alt={context.title} />
                      </div>
                      <div className={`bp-item ${styles.phone}`}>{context.phone}</div>
                      <div className={`bp-item ${styles.email}`}>{context.email}</div>
                      <div className={`bp-item ${styles.description}`}>{context.description}</div>
                    </div>,
                    element
                  );
                  break;
                default:
                  break;
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default ItemTemplate;
