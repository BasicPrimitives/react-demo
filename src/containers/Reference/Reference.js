import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import {
  Grid, Col, Row
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { load, isLoaded } from 'redux/modules/reference';
import MDReactComponent from 'markdown-react-js';
import { Version } from 'components';

@provideHooks({
  fetch: ({ store: { dispatch, getState } }) => (!isLoaded(getState(), "readme") ? dispatch(load("readme")).catch(() => null) : Promise.resolve())
})
@connect(
  (state) => ({
    markdown: (state.reference.files["readme"] != null ? state.reference.files["readme"].markdown : ""),
    fileName: "readme"
  }),
  { load }
)
@withRouter
class Reference extends Component {
  static propTypes = {
    route: PropTypes.objectOf(PropTypes.any).isRequired
  };

  constructor() {
    super();
    this.handleIterate = this.handleIterate.bind(this);
    this.key = 0;
  }

  handleIterate(Tag, props, children, level) {
    if (level === 1) {
      props = {
        ...props,
        className: 'first-level-class'
      };
    }
    if (Tag === 'a') {
      let { href } = props;
      if (href.indexOf(".md") > -1) {
        href = "/reference" + (href[0] == "/" ? "" : "/") + href.substr(0, href.indexOf(".md")) + href.substr(href.indexOf(".md") + 3);
        return <Link to={href}>{children}</Link>;
      }
    }
    return <Tag {...props}>{children}</Tag>;
  }

  render() {
    this.key = 0;
    const { markdown } = this.props;
    const { route } = this.props;
    const styles = require('./Reference.scss');
    return (
      <Grid fluid className={styles.appContent}>
        <Row>
          <Col sm={3} md={4}>
            <MDReactComponent text={markdown} onIterate={this.handleIterate} />
            <Version />
          </Col>
          <Col sm={7} md={8}>
            <div>{renderRoutes(route.routes)}</div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Reference;
