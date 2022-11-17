import {NativeBaseProvider, StatusBar} from 'native-base'

import {
    useFonts,
    Roboto_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
} from '@expo-google-fonts/roboto'

import {Loading} from './src/components/Loading'

import {THEME} from './src/styles'
import {Home} from './src/screens/Home'
import {SafeAreaView} from 'react-native-safe-area-context'

import 'react-native-reanimated'

export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto_700Bold,
        Roboto_400Regular,
        Roboto_500Medium,
    })

    return (
        <NativeBaseProvider theme={THEME}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={THEME.colors.purple[500]}
                translucent
            />

            <SafeAreaView style={{flex: 1}}>
                {fontsLoaded ? <Home /> : <Loading />}
            </SafeAreaView>
        </NativeBaseProvider>
    )
}
