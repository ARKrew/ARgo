import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';

export const ROUTES = {
  login: 'LoginForm',
  profile: 'Profile'
};

export const AppNavigator = StackNavigator({
    [ROUTES.login]: { screen: LoginForm },
    [ROUTES.profile]: { screen: Profile }
}, {
    cardStyle: {
        backgroundColor: '#fff'
    },
});

export const { router } = AppNavigator;
export const routerInitialState = router.getStateForAction(
    router.getActionForPathAndParams(ROUTES.login)
);
