import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel, Grid, Row, Col
} from 'react-bootstrap';
import Helmet from 'react-helmet';

class Home extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const largeHierarchyImage = require('./carousel/demo_large_hierarchy.png');
    const dynamicLoadingImage = require('./carousel/demo_dynamic_loading.png');
    const verticalLayoutImage = require('./carousel/demo_vertical_layout.png');
    const crossTeamGroupImage = require('./carousel/demo_cross_team_group.png');
    const partnersImage = require('./carousel/demo_partners.png');
    const familyWithAnnotationsImage = require('./carousel/demo_family_with_annotations.png');
    return (
      <Grid fluid>
        <Row>
          <Col lgPush={3} lg={6} mdPush={3} md={8} smPush={3} sm={9}>
            <Helmet title="Introduction" />
            <h2>Organizational Chart, Family &amp; Dependencies Diagrams</h2>
            <Carousel>
              <Carousel.Item>
                <Link to="/largehierarchy">
                  <img src={largeHierarchyImage} width={900} height={500} alt="Large hierarchy" />
                </Link>
                <Carousel.Caption className={styles.carouselCaption}>
                  <h3>Large Organizational Chart</h3>
                  <p>Demonstrates visualization and navigation between large number of nodes in diagram.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Link to="/dynamicloading">
                  <img src={dynamicLoadingImage} width={900} height={500} alt="Dynamic Nodes Loading" />
                </Link>
                <Carousel.Caption className={styles.carouselCaption}>
                  <h3>Dynamic Nodes Loading</h3>
                  <p>Demonstrates navigation with dynamic diagram nodes loading.</p>
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
                  <p>Viewing cross functional group on organizational diagram</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Link to="/partners">
                  <img src={partnersImage} width={900} height={500} alt="Partners &amp; Annotations" />
                </Link>
                <Carousel.Caption className={styles.carouselCaption}>
                  <h3>Partners &amp; Annotations</h3>
                  <p>Organizational chart provides simplified support for multiple parents, multiple managers or multiple co-heads in hierarchy</p>
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
            <h3>Supported Diagrams</h3>
            <ul>
              <li>Hierarchy Visualization</li>
              <li>Organizational Chart</li>
              <li>Multi-parent hierarchical chart</li>
              <li>Family Tree</li>
              <li>Dependencies Diagram</li>
              <li>PERT chart</li>
              <li>Financial Ownership Diagram</li>
            </ul>
            <h3>Pure JavaScript</h3>
            <ul>
              <li>100% client side JavaScript layout and rendering.</li>
              <li>Implemented in pure JavaScript without dependency on 3d party libraries.</li>
              <li>
                Works in all major modern browsers Internet Explorer, Edge, Chrome, Firefox, Safari
                and mobile browsers. Supports graphics rendering in SVG and Canvas modes depending on user options.
              </li>
            </ul>
            <h3>PDF support</h3>
            <ul>
              <li>
                100% JavaScript in-browser or NodeJS PDF rendering based <a href="http://pdfkit.org/">PDFkit</a> (MIT) library.
              </li>
            </ul>
            <h3>Free for Non-commercial</h3>
            <p>
              Do you want to use Basic Primitives Diagram for a personal website, a school site or a non-profit organization?
              Then you don't need the author's permission, just go on and use Basic Primitives Diagram.
              For commercial websites and projects, see License and Pricing.
            </p>
            <h3>Open</h3>
            <p>
              One of the key features of Basic Primitives Diagram that under any of the licenses,
              free or not, you are allowed to download the source code and make your own edits.
              This allows personal modifications and a great flexibility. The comprehensive set of samples,
              demos and unit tests guarantees quality of the library's source code.
            </p>
            <h2>Facilitates visual data analytics of hierarchical and topological dependencies</h2>
            <p>
              Business Intelligence systems and applications are designed for two major areas: Reporting and Analytics.
              Reporting applications are meant to be a legal statements, so reported data should be 100% complete,
              it should not have any discrepancy in form of omitted data, improperly rounded values or excessive
              abbreviations. On the other side, applications designed for data analytics should show only the most
              valuable and related data to current user focus and gracefully degrade details for less relevant data.
              So control provide API options for visual data analysis of diagrams:
            </p>
            <h3>Auto layout</h3>
            <p>
              The main problem of diagrams drawn in graphics editor is in sparse distribution of items on layout.
              Large gaps between nodes make chart hard to overview, edit and navigate. Sometimes the chart is so big
              that it could have screen size intervals between items. This issue makes the whole idea of visualizing
              diagrams useless. At the same time computer UI allows to scale and fit visualization into screen,
              but in that case items become small and unreadable. The primary goal of our approach to Organizational
              chart and other diagrams visualization is to resolve these issues and make good use of them at the same
              time. The widget finds the best way to display a large hierarchy within available screen space without
              scrolling or with minimal scrolling not affecting usability.
            </p>
            <dl>
              <dt>Diagram shape overview</dt>
              <dd>
                Widget minimizes items in order to fit diagram visualization into available screen space and
                provides user with  possibility to overview general diagram layout.
              </dd>
              <dt>User focus navigation goes node by node</dt>
              <dd>
                Chart displays cursor item and its neighbors full size and minimizes all other less relevant nodes.
                By clicking on neighboring nodes user will move the focus of interest to the newly selected part of the diagram.
              </dd>
              <dt>Pinning of items in diagram</dt>
              <dd>
                All selected/check marked items are always displayed full size, all other items stay minimized,
                so it allows to pin/select items in different branches and show them side by side within
                available screen space for location comparison.
              </dd>
              <dt>Diagram design consistency</dt>
              <dd>
                Auto layout without user's manual editing provides visual consistency across all diagramming documents.
                All users have various skills and preferences, so auto layout provides consistent diagrams visualization.
              </dd>
              <dt>Always up to date</dt>
              <dd>
                Your application diagrams will not be affected by changes in Widget's layout algorithms
                and application data. Your visualizations will be always up to date and in sync with your data.
              </dd>
              <dt>Context annotations</dt>
              <dd>
                Every time we make changes to diagram we need to visualize performed modification otherwise
                it is hard to trace changes before and after modification. So in order to visualize diagram
                transition from one state to another control provides annotations. Annotations are API elements
                attached to diagram nodes and are drawn in front or in the background of them. Annotations don't change
                nodes placement, so controls redraw them instantaneously without diagram layout. The general logic of
                annotations is that they are not supposed to be displayed for every node in diagram, application is supposed
                to create them and add to diagram in the context of current user cursor or operation, user perform with data.
                Annotations compared to diagram layout itself have minimal conflict resolution abilities. So it is very easy
                to clutter diagram with excessive number of annotations. But they come very handy when we need to add
                context specific visuals.
              </dd>
            </dl>
            <h3>Provides simple API for the most common use cases</h3>
            <dl>
              <dt>Default item template</dt>
              <dd>
                Controls provide built-in item template and render diagrams with minimal options defined. Define items
                collection and run.
              </dd>
              <dt>Items selection check boxes</dt>
              <dd>
                Diagrams provide nodes selection API similar to regular tree control available in every UI framework.
                So it can replace existing tree control in your application UI and provide extra usability enhancements
                not achivable with standard UI components.
              </dd>
              <dt>User buttons panel</dt>
              <dd>
                Modern UI keeps context buttons as close to its target as possible, we may see this UI design pattern everywhere,
                it is easy to implement with HTML containers. Basic Primitives layout engine works with fixed size nodes, and hardcoded intervals
                between rows and nodes, so in order to achive the same UI concept control's API supports template options preserving
                extra space around cursor node in diagram and places context action buttons inside of it.
              </dd>
              <dt>Vertical node titles</dt>
              <dd>
                Another out of the box optional decoration in form of rotated 90 degree text box on the side of node.
              </dd>
              <dt>Labels</dt>
              <dd>
                Chart scales diagram from full sized HTML nodes down to simple markers with labels. Markers and labels are the most simple form
                of node template, specially optimized for fast rendering.
              </dd>
            </dl>
            <h3>Flexible API for more complex use cases</h3>
            <ul>
              <li>Customizable item, highlight and cursor content templates</li>
              <li>
                Custom layout parent/child relation types: Adviser, Assistant and various partners.
                Multiple parents, multiple managers or co-heads visualization.
              </li>
              <li>Custom children and leaves layout: Vertical, Horizontal and Matrix</li>
              <li>Left/Right layout alignment support.</li>
              <li>Events</li>
            </ul>
            <h3>Compatible</h3>
            <ul>
              <li>Works in AngularJS and ReactJS</li>
              <li>Works in jQuery UI widgets.</li>
              <li>Supports customization of diagram nodes with nested components using various frameworks and templates</li>
            </ul>
            <h3>Dynamic</h3>
            <ul>
              <li>
                Through a full API you can add, remove and modify individual items and their
                properties at any other time after organizational chart rendering. Widget update time is as fast as its navigation.
              </li>
            </ul>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
