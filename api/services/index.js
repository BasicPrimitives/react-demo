import authentication from './authentication';
import demoorganizationalcharts from './demoorganizationalcharts';
import demofamilycharts from './demofamilycharts';
import howtouse from './howtouse';
import users from './users';

export default function services(app) {
  app.configure(authentication);
  app.configure(demoorganizationalcharts);
  app.configure(demofamilycharts);
  app.configure(users);
  app.configure(howtouse);
}
