import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Box, HStack, Text } from 'native-base'
import { AnimatePresence } from 'moti'

import { formatCurrency } from "react-native-format-currency"
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'

import { ITransaction } from '../@types'

interface TransactionProps {
    data: ITransaction
}

export function Transaction({ data }: TransactionProps) {
    const [visible, setVisible] = useState(false)

    function getFormattedCurrency(amount: number) {
        const formats = formatCurrency({ amount, code: "BRL" })
        return formats[1]
    }
    
    const isExpense = data.type === 'expense'
    
    const when = dayjs(data.createdAt).locale(ptBR).format("DD/MM/YYYY")
    const formattedValue = getFormattedCurrency(data.value.toFixed(2) as unknown as number)

    return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => setVisible(!visible)}>
            <Box flex={1} mb={6} pb={1} borderBottomWidth={0.5} borderBottomColor='gray.300'>
                <Text color='gray.400' fontWeight='bold' fontSize='xs'>{when}</Text>

                <HStack justifyContent='space-between'>
                    <Text fontFamily='heading' fontSize='sm'>
                        {data.title}
                    </Text>

                    <AnimatePresence exitBeforeEnter>
                        {
                            visible ? (
                                <Text fontFamily='heading' fontSize='sm' color={isExpense ? 'red.500' : 'green.500'}>
                                    R$ {isExpense ? `-${formattedValue}` : formattedValue}
                                </Text>
                            ) : (
                                <Box 
                                    w={20}
                                    h={4}
                                    bgColor='gray.200'
                                    rounded='sm'
                                />
                            )
                        }
                    </AnimatePresence>

                </HStack>
            </Box>
        </TouchableOpacity>
    )
}
