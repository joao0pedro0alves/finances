import { HStack, Text, VStack, useTheme, Button, Box } from 'native-base'
import { Feather } from '@expo/vector-icons'
import { MotiView } from 'moti'

export function Header() {
    const { colors, sizes } = useTheme()

    return (
        <Box bgColor="purple.500" h="20">
            <MotiView
                from={{
                    translateY: -100,
                    opacity: 0,
                }}
                animate={{
                    translateY: 0,
                    opacity: 1,
                }}
                transition={{
                    type: 'timing',
                    duration: 800,
                    delay: 200,
                }}
            >
                <VStack bgColor="purple.500" h="20">
                    <HStack
                        paddingX="4"
                        flex={1}
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Text fontSize="md" fontFamily="heading" color="white">
                            João Pedro
                        </Text>

                        <Button
                            width="12"
                            height="12"
                            bgColor="overlay.500"
                            rounded="full"
                            _pressed={{
                                opacity: 0.9,
                            }}
                        >
                            <Feather
                                name="user"
                                size={sizes[6]}
                                color={colors.white}
                            />
                        </Button>
                    </HStack>
                </VStack>
            </MotiView>
        </Box>
    )
}
