import React from 'react';
import { createRoot } from 'react-dom/client';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import initRedux from './redux/initRedux';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import apiClient from './helpers/apiClient';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light'
  },
});

const client = apiClient();

const helpers = {
  client
}

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
      <ThemeProvider theme={theme}>
        <ReduxProvider store={redux}>
          <DndProvider backend={HTML5Backend}>
            <Router>
              {children}
            </Router>
          </DndProvider>
        </ReduxProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <AppWrapper>
    {routes}
  </AppWrapper>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
