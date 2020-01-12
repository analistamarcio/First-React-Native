import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  // Qualquer tipo de navegação deve ser colocada dentro do createAppContainer
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      headerTitleAlign: 'center',
      defaultNavigationOptions: {
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
