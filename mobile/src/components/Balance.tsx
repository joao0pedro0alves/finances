import {HStack, Text, VStack} from 'native-base'
import {MotiView} from 'moti'
import {formatCurrency} from 'react-native-format-currency'

interface BalanceProps {
    data: {
        totalBalance: number
        totalExpense: number
    }
}

export function Balance({data}: BalanceProps) {
    function getFormattedCurrency(amount: number) {
        const formats = formatCurrency({amount, code: 'BRL'})
        return formats[1]
    }

    return (
        <MotiView
            from={{
                rotateX: '-100deg',
                opacity: 0,
            }}
            animate={{
                rotateX: '0deg',
                opacity: 1,
            }}
            transition={{
                type: 'timing',
                duration: 900,
                delay: 200,
            }}
        >
            <HStack
                zIndex={10}
                paddingX="4"
                rounded="md"
                bgColor="white"
                marginX="4"
            >
                <VStack h="24" flex={1} paddingY="4">
                    <Text fontSize="md" color="gray.400">
                        Saldo
                    </Text>

                    <HStack alignItems="center">
                        <Text color="gray.400" mr={1}>
                            R$
                        </Text>
                        <Text fontSize="lg" color="green.500">
                            {getFormattedCurrency(data.totalBalance)}
                        </Text>
                    </HStack>
                </VStack>

                <VStack h="24" flex={1} paddingY="4">
                    <Text fontSize="md" color="gray.400">
                        Gastos
                    </Text>

                    <HStack alignItems="center">
                        <Text color="gray.400" mr={1}>
                            R$
                        </Text>
                        <Text fontSize="lg" color="red.500">
                            {getFormattedCurrency(data.totalExpense)}
                        </Text>
                    </HStack>
                </VStack>
            </HStack>
        </MotiView>
    )
}
