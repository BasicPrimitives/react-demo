import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import authentication from '@feathersjs/authentication-client';
import axios from 'axios';
import config from './config';

const storage = __SERVER__ ? null : require('localforage');

const host = clientUrl => (__SERVER__ ? `http://${config.apiHost}:${config.apiPort}` : clientUrl);

const configureApp = transport => feathers()
  .configure(transport)
  .configure(authentication({ storage }));

export function createApp(req) {
  if (req === 'rest') {
    return configureApp(rest(host('/api')).axios(axios));
  }

  if (__SERVER__ && req) {
    const app = configureApp(
      rest(host('/api')).axios(
        axios.create({
          headers: {
            Cookie: req.get('cookie'),
            Authorization: req.header('authorization')
          }
        })
      )
    );

    app.set('accessToken', req.cookies && req.cookies['feathers-jwt']);

    return app;
  }
};
