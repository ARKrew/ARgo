import { StackNavigator } from 'react-navigation';
import Login from '../scenes/unauthorized/Login';

const Root = StackNavigator({
    Unauthorized: { screen: Login }
}, {
        headerMode: 'screen',
        navigationOptions: {
            header: null,
        }
    });

export default Root;
