import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import HomeScreen from '../screens/homescreen';
import DetailsScreen from '../screens/detailsscreen';
import FirstScreen from '../screens/firstscreen';


const AppNavigator = createDrawerNavigator({
    Home: {
        screen: FristScreen
    },
    Details: {
        screen: DetailsScreen
    }
});

export default createAppContainer(AppNavigator);