import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { View, Text, Box, useTheme } from 'native-base'
import { AntDesign } from '@expo/vector-icons'

interface ActionProps extends TouchableOpacityProps {
    iconName: keyof typeof AntDesign.glyphMap
    title: string
}

export function Action({ iconName, title, ...props }: ActionProps) {
    const {colors, sizes} = useTheme()

    return (
        <TouchableOpacity {...props}>
            <Box alignItems="center">
                <View
                    alignItems="center"
                    justifyContent="center"
                    bgColor="gray.200"
                    rounded="full"
                    h={14}
                    w={14}
                >
                    <AntDesign name={iconName} size={sizes[6]} color={colors.gray[500]} />
                </View>
                <Text fontSize="xs" color="gray.500">
                    {title}
                </Text>
            </Box>
        </TouchableOpacity>
    )
}
