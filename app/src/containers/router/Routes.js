import {Switch, Route} from 'react-router-dom';

import HomePage from '../home-page/Home';
import MusicPage from '../music-page/Music';
import NotFoundPage from '../NotFoundPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/home" component={HomePage}/>
      <Route path="/music" component={MusicPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  );
};

export default Routes;
