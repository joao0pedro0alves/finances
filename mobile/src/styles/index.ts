import {extendTheme} from 'native-base'

export const THEME = extendTheme({
    colors: {
        purple: {
            500: '#8000FF',
        },

        white: '#FFFFFF',

        overlay: {
            500: 'rgba(255,255,255,0.5)',
        },
    },
    fonts: {
        heading: 'Roboto_700Bold',
        body: 'Roboto_400Regular',
        medium: 'Roboto_500Medium',
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24,
    },
    sizes: {
        14: 56,
        22: 87,
    },
})
