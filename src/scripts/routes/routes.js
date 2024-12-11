import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import DetailResto from '../views/pages/detail-resto';
import Playground from '../views/pages/playground';
import Login from '../views/pages/login';

const routes = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': DetailResto,
  '/playground': Playground,
  '/login': Login
};

export default routes;
