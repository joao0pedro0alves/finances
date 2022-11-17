import { Box, Text, VStack } from "native-base"

import { transactions } from '../utils/transactions'

import { Balance } from "../components/Balance"
import { Header } from "../components/Header"
import { Transactions } from "../components/Transactions"
import { Actions } from "../components/Actions"

export function Home() {
    return (
        <Box flex={1} bg='gray.100'>
            <Header />

            <VStack bgColor='purple.500' h={12}>
                <Balance 
                    data={{
                        totalBalance: 15000.25,
                        totalExpense: -350.35
                    }}
                />
            </VStack>

            <VStack paddingX={4} mt={16}>
                <Actions />

                <Text mt={4} fontSize='md' fontFamily='heading' color='gray.900'>
                    Últimas movimentações
                </Text>
                
                <Box mt={2}>
                    <Transactions 
                        data={transactions}
                    />
                </Box>
            </VStack>
        </Box>
    )
}
