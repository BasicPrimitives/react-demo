import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { provideHooks } from 'redial';
import { connect } from 'react-redux';
import { isLoaded, load } from 'redux/modules/changelog';
import MDReactComponent from 'markdown-react-js';

/* eslint-disable max-len */
@provideHooks({
  fetch: ({ store: { dispatch, getState } }) => !isLoaded(getState()) ? dispatch(load()).catch(() => null) : Promise.resolve()
})
@connect(
  (state) => ({ markdown: state.changelog.markdown }),
  { load }
)
class Changelog extends Component {
  static propTypes = {
    markdown: PropTypes.string.isRequired
  };

  render() {
    const { markdown } = this.props;
    return <div className="container">
      <h1>Changelog</h1>
      <Helmet>
        <title>- Changelog</title>
        <meta name="description" content="Products update changelog." />
      </Helmet>
      <MDReactComponent text={markdown} />
    </div>
  }
}

export default Changelog;
