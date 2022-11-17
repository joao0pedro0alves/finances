import { ITransaction } from '../@types'

export const transactions: ITransaction[] = [
    {
        id: '6',
        title: 'Depósito Vale',
        value: 1800,
        createdAt: new Date(),
        type: 'deposit'
    },
    {
        id: '1',
        title: 'Fatura Cartão Mais',
        value: 259,
        createdAt: new Date(),
        type: 'expense'
    },
    {
        id: '2',
        title: 'Aluguel',
        value: 735,
        createdAt: new Date(),
        expiratedAt: new Date(),
        type: 'expense'
    },
    {
        id: '3',
        title: 'Fogão',
        value: 217,
        createdAt: new Date(),
        expiratedAt: new Date(),
        type: 'expense'
    },
    {
        id: '4',
        title: 'JN Móveis 1/6',
        value: 70,
        createdAt: new Date(),
        expiratedAt: new Date(),
        type: 'expense'
    },
    {
        id: '5',
        title: 'Veterinário',
        value: 200,
        createdAt: new Date(),
        expiratedAt: new Date(),
        type: 'expense'
    },
]
