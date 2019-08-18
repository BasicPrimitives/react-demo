import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Contact extends Component {
  render() {
    return <div className="container">
      <h1>Contact</h1>
      <Helmet title="Contact" />
      <p>
        <h2>Email addresses</h2>
        <ul>
          <li>Sales and professional services inquiries: <a href="mailto:sales@basicprimitives.com">
            sales@basicprimitives.com
          </a>
          </li>
          <li>Technical support: <a href="mailto:support@basicprimitives.com">
            support@basicprimitives.com
          </a>
          </li>
        </ul>
        <h2>Address</h2>
        <ul>
          <li>
            524 Ridelle Avenue, M6B 1K8, Toronto, ON, Canada
            </li>
        </ul>
      </p>
    </div>
  }
}

export default Contact;
