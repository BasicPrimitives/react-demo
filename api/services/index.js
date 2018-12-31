import authentication from './authentication';
import custom from './custom';
import tutorialorganizationalchart from './tutorialorganizationalchart';
import demoorganizationalcharts from './demoorganizationalcharts';
import demofamilycharts from './demofamilycharts';
import users from './users';
import messages from './messages';

export default function services(app) {
  app.configure(authentication);
  app.configure(custom);
  app.configure(tutorialorganizationalchart);
  app.configure(demoorganizationalcharts);
  app.configure(demofamilycharts);
  app.configure(users);
  app.configure(messages);
}
