/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */

import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import Login from './pages/Login';
import Events from './pages/Events';

const HomeNavigator = createStackNavigator({
  EventList: {
    screen: Events,
  },
});

const DrawerScreens = createDrawerNavigator(
  {
    Eventos: HomeNavigator,
  },
  {
    initialRouteName: 'Eventos',
  },
);

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Login,
      DrawerScreens,
    },
    {
      initialRouteName: 'Login',
    },
  ),
);

export default Routes;
