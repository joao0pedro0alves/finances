import {Platform} from 'react-native'
import {useTheme} from 'native-base'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {AntDesign, Ionicons} from '@expo/vector-icons'

import {Home} from '../screens/Home'

const {Navigator, Screen} = createBottomTabNavigator()

export function AppRoutes() {
    const {colors, sizes} = useTheme()

    const size = sizes[6]

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.purple[500],
                tabBarInactiveTintColor: colors.gray[300],
                tabBarStyle: {
                    position: 'absolute',
                    borderTopWidth: 0,
                    backgroundColor: colors.white,
                    paddingTop: 16,
                    height: 64,
                },
                tabBarItemStyle: {
                    position: 'relative',
                    top: Platform.OS === 'android' ? -10 : 0,
                },
            }}
        >
            <Screen
                name="home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color}) => (
                        <AntDesign name='home' color={color} size={size} />
                    ),
                }}
            />
            <Screen
                name="new"
                component={Home}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({color}) => (
                        <Ionicons name='add-circle' color={color} size={sizes[8]} />
                    ),
                }}
            />
            <Screen
                name="profile"
                component={Home}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({color}) => (
                        <AntDesign name='user' color={color} size={size} />
                    ),
                }}
            />
        </Navigator>
    )
}
