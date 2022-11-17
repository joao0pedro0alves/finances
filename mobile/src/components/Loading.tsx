import {Center, Spinner} from 'native-base'

export function Loading() {
    return (
        <Center flex={1} backgroundColor="purple.500">
            <Spinner color="white" />
        </Center>
    )
}
