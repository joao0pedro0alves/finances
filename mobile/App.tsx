import {useEffect} from 'react'
import {Platform} from 'react-native'
import {NativeBaseProvider, StatusBar} from 'native-base'
import {SafeAreaView} from 'react-native-safe-area-context'
import * as NavigationBar from 'expo-navigation-bar'

import {
    useFonts,
    Roboto_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
} from '@expo-google-fonts/roboto'

import {AuthContextProvider} from './src/contexts/AuthContext'
import {Loading} from './src/components/Loading'
import {Routes} from './src/routes'

import {THEME} from './src/styles'

import 'react-native-reanimated'

export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto_700Bold,
        Roboto_400Regular,
        Roboto_500Medium,
    })

    useEffect(() => {
        if (Platform.OS === 'android') {
            NavigationBar.setBackgroundColorAsync(THEME.colors.purple[700])
        }
    }, [])

    return (
        <NativeBaseProvider theme={THEME}>
            <AuthContextProvider>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={THEME.colors.purple[500]}
                    translucent
                />

                <SafeAreaView style={{flex: 1}}>
                    {fontsLoaded ? <Routes /> : <Loading />}
                </SafeAreaView>
            </AuthContextProvider>
        </NativeBaseProvider>
    )
}
