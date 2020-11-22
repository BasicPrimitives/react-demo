import React from 'react';
import Helmet from 'react-helmet';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import initRedux from './redux/initRedux';
import { createHistory, LocationProvider }from "@reach/router";
import routes from './routes';
import apiClient from './helpers/apiClient';
import reportWebVitals from './reportWebVitals';
import ReactGA from "react-ga";

ReactGA.initialize('UA-35196769-1');

const client = apiClient();

const helpers = {
  client
}

const history = createHistory(window);

history.listen( window => {
  ReactGA.pageview(window.location.pathname + window.location.hash);
});

function AppWrapper(props) {
  const { children } = props;

  //const location = useLocation();
  const [redux] = React.useState(() =>
    initRedux({}, helpers),
  );

  let fonts = ['https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'];

  return (
    <React.Fragment>
      <Helmet>
        {fonts.map((font) => (
          <link rel="stylesheet" href={font} key={font} />
        ))}
      </Helmet>
      <ReduxProvider store={redux}>
        <DndProvider backend={HTML5Backend}>
          <LocationProvider history={history}>
            {children}
          </LocationProvider>
        </DndProvider>
      </ReduxProvider>
    </React.Fragment>
  );
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

ReactDOM.render(
  <AppWrapper>
    {routes}
  </AppWrapper>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
