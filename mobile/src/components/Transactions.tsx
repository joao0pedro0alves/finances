import { FlatList } from 'native-base'

import { ITransaction } from '../@types'

import { Transaction } from './Transaction'

interface TransactionsProps {
    data: ITransaction[]
}

export function Transactions({data}: TransactionsProps) {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Transaction data={item} />}
            showsVerticalScrollIndicator={false}
        />
    )
}
