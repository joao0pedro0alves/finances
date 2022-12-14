import {Button as ButtonNativeBase, IButtonProps, Text} from 'native-base'

interface ButtonProps extends IButtonProps {
    title: string
    type?: 'PRIMARY' | 'SECONDARY'
}

export function Button({title, type = 'PRIMARY', ...props}: ButtonProps) {
    return (
        <ButtonNativeBase
            w="full"
            h={14}
            rounded="sm"
            fontSize="md"
            bg={type === 'SECONDARY' ? 'red.500' : 'purple.500'}
            _pressed={{
                bg: type === 'SECONDARY' ? 'red.600' : 'purple.600',
            }}
            {...props}
        >
            <Text
                fontSize="sm"
                fontFamily="heading"
                textTransform="uppercase"
                color={type === 'SECONDARY' ? 'white' : 'black'}
            >
                {title}
            </Text>
        </ButtonNativeBase>
    )
}
