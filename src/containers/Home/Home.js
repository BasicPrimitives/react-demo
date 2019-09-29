import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Row, Col, Thumbnail
} from 'react-bootstrap';
import Helmet from 'react-helmet';
import { Updates } from 'components';

import { provideHooks } from 'redial';
import { connect } from 'react-redux';
import { isLoaded, load } from 'redux/modules/introduction';
import MDReactComponent from 'markdown-react-js';

/* eslint-disable max-len */
@provideHooks({
  fetch: ({ store: { dispatch, getState } }) => !isLoaded(getState()) ? dispatch(load()).catch(() => null) : Promise.resolve()
})
@connect(
  (state) => ({ markdown: state.introduction.markdown }),
  { load }
)
class Home extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    markdown: PropTypes.string.isRequired
  };
  render() {
    const { markdown } = this.props;
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const largeHierarchyImage = require('./carousel/demo_large_hierarchy.png');
    const dynamicLoadingImage = require('./carousel/demo_dynamic_loading.png');
    const verticalLayoutImage = require('./carousel/demo_vertical_layout.png');
    const crossTeamGroupImage = require('./carousel/demo_cross_team_group.png');
    const partnersImage = require('./carousel/demo_partners.png');
    const orgeditorImage = require('./carousel/demo_orgeditor.png');
    const familyWithAnnotationsImage = require('./carousel/demo_family_with_annotations.png');
    const familyDiagramNodesOrderImage = require('./carousel/demo_family_diagram_nodes_order.png');
    const highlightAnnotationsImage = require('./carousel/demo_instant_highlights.png');
    const patentsImage = require('./carousel/demo_patents.png');
    const financialOwnershipImage = require('./carousel/demo_financial_ownership.png');
    return (
      <Grid fluid>
        <Helmet>
          <title>- Data visualization diagramming components for dependencies visualization and analysis.</title>
          <meta name="description" content="JavaScript, HTML, PDFKit, ReactJS; Organizational Chart, Family Inheritance Chart; Dependencies Visualizations;" />
        </Helmet>
        <Row>
          <Col mdPush={4} md={8} smPush={4} sm={8} lgPush={2} lg={10} >
            <Grid fluid>
              <Row>
                <Col xs={12} md={12} lg={8}>
                  <h1>Basic Primitives Diagrams</h1>
                  <h3>Data visualization diagramming Components for dependencies visualization and analysis</h3>
                </Col>
              </Row>
            </Grid>
            <Grid fluid>
              <Row>
                <Col xs={6} md={4} lg={3}>
                  <Thumbnail href="/largehierarchy" src={largeHierarchyImage} alt="Large Hierarchy Visualization &amp; Navigation">
                    <div className={styles.thumbnailtext}>
                      <h3>Large Hierarchy Visualization</h3>
                      <p>Visualization &amp; navigation of diagram having large number of nodes.</p>
                    </div>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4} lg={3}>
                  <Thumbnail href="/orgeditor" src={orgeditorImage} alt="Organizational Chart Editor">
                    <div className={styles.thumbnailtext}>
                      <h3>Organizational Chart Editor</h3>
                      <p>Fully functional oraganizational chart editing application developed in ReactJS.</p>
                    </div>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4} lg={3}>
                  <Thumbnail href="/dynamicloading" src={dynamicLoadingImage} alt="Dynamic Nodes Loading">
                    <div className={styles.thumbnailtext}>
                      <h3>Dynamic Nodes Loading</h3>
                      <p>Large Hierarchy navigation using dynamic diagram nodes loading.</p>
                    </div>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4} lg={3}>
                  <Thumbnail href="/verticallayout" src={verticalLayoutImage} alt="Vertical Layout Organizational Diagram">
                    <div className={styles.thumbnailtext}>
                      <h3>Org Chart Vertical Layout</h3>
                      <p>Organizational Diagram demonstrating vertical nodes layout</p>
                    </div>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4} lg={3}>
                  <Thumbnail href="/crossteamgroup" src={crossTeamGroupImage} alt="Cross Functional Team">
                    <div className={styles.thumbnailtext}>
                      <h3>Cross Functional Team</h3>
                      <p>Visualization of cross functional group of employees on organizational diagram</p>
                    </div>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4} lg={3}>
                  <Thumbnail href="/highlightannotations" src={highlightAnnotationsImage} alt="Instant Annotations Update">
                    <div className={styles.thumbnailtext}>
                      <h3>Instant Annotations Update</h3>
                      <p>Rendering cycle optimized to specific user changes.</p>
                    </div>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4} lg={3}>
                  <Thumbnail href="/partners" src={partnersImage} alt="Partners &amp; Annotations">
                    <div className={styles.thumbnailtext}>
                      <h3>Partners &amp; Annotations</h3>
                      <p>Demo of limited multiple parents support in Organizational chart.</p>
                    </div>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4} lg={3}>
                  <Thumbnail href="/familychartwithannotations" src={familyWithAnnotationsImage} alt="Family &amp; Annotations">
                    <div className={styles.thumbnailtext}>
                      <h3>Family Chart Auto Layout</h3>
                      <p>Various multiple inheritance diagrams, dependencies diagrams and graphs</p>
                    </div>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4} lg={3}>
                  <Thumbnail href="/familychartitemsordering" src={familyDiagramNodesOrderImage} alt="Family Diagram Nodes Order">
                    <div className={styles.thumbnailtext}>
                      <h3>Family Diagram Nodes Order </h3>
                      <p>User guided family diagram nodes sorting and layout. Childrens and marriages order.</p>
                    </div>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4} lg={3}>
                  <Thumbnail href="/patents" src={patentsImage} alt="Patents Dependencies Visualization">
                    <div className={styles.thumbnailtext}>
                      <h3>Patents Dependencies</h3>
                      <p>Dependencies visualization having massive number of references to grandparents.</p>
                    </div>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4} lg={3}>
                  <Thumbnail href="/financialownership" src={financialOwnershipImage} alt="Business Ownership Visualization">
                    <div className={styles.thumbnailtext}>
                      <h3>Business Ownership Diagram</h3>
                      <p>Multiple inheritance diagram visualizing financial ownership.</p>
                    </div>
                  </Thumbnail>
                </Col>
              </Row>
            </Grid>
            <Grid fluid>
              <Row>
                <Col xs={12} lg={8}>
                  <MDReactComponent text={markdown} />
                </Col>
              </Row>
            </Grid>
          </Col>
          <Col smPull={8} sm={4} mdPull={8} md={4} lgPull={10} lg={2}>
            <Updates />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
