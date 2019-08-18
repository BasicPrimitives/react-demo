import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Carousel, Grid, Row, Col
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
    return (
      <Grid fluid>
        <Row>
          <Col lgPush={3} lg={6} mdPush={3} md={8} smPush={3} sm={9}>
            <Helmet title="Introduction" />
            <h1>JavaScript/HTML/PDF/React Organizational Chart, Family &amp; Dependencies Diagrams</h1>
            <Carousel>
              <Carousel.Item>
                <Link to="/largehierarchy">
                  <img src={largeHierarchyImage} width={900} height={500} alt="Large hierarchy" />
                </Link>
                <Carousel.Caption className={styles.carouselCaption}>
                  <h3>Large Organizational Chart</h3>
                  <p>Visualization and navigation between large number of nodes in diagram.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Link to="/dynamicloading">
                  <img src={dynamicLoadingImage} width={900} height={500} alt="Dynamic Nodes Loading" />
                </Link>
                <Carousel.Caption className={styles.carouselCaption}>
                  <h3>Dynamic Nodes Loading</h3>
                  <p>Navigation with dynamic diagram nodes loading.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Link to="/orgeditor">
                  <img src={orgeditorImage} width={900} height={500} alt="Organizational Chart Editor" />
                </Link>
                <Carousel.Caption className={styles.carouselCaption}>
                  <h3>Organizational Chart Editor</h3>
                  <p>Fully functional diagram editing application.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Link to="/verticallayout">
                  <img src={verticalLayoutImage} width={900} height={500} alt="Vertical Layout Organizational Diagram" />
                </Link>
                <Carousel.Caption className={styles.carouselCaption}>
                  <h3>Vertical Layout</h3>
                  <p>Organizational Diagram</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Link to="/crossteamgroup">
                  <img src={crossTeamGroupImage} width={900} height={500} alt="Cross Functional Team" />
                </Link>
                <Carousel.Caption className={styles.carouselCaption}>
                  <h3>Cross Functional Team</h3>
                  <p>Visualization of sparce cross functional group of employees on organizational diagram</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Link to="/partners">
                  <img src={partnersImage} width={900} height={500} alt="Partners &amp; Annotations" />
                </Link>
                <Carousel.Caption className={styles.carouselCaption}>
                  <h3>Partners &amp; Annotations</h3>
                  <p>Demostrations of limited multiple parents support in Organizational chart. Annotations.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Link to="/familychartwithannotations">
                  <img src={familyWithAnnotationsImage} width={900} height={500} alt="Family &amp; Annotations" />
                </Link>
                <Carousel.Caption className={styles.carouselCaption}>
                  <h3>Family &amp; Annotations</h3>
                  <p>Visualizes multiple inheritance diagram, dependencies diagrams and graphs.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <MDReactComponent text={markdown} />
          </Col>
          <Col smPull={9} sm={3} mdPull={8} md={3} lgPull={6} lg={3}>
            <Updates />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
