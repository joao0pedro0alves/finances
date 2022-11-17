export interface ITransaction {
    id: string
    title: string
    value: number
    createdAt: Date
    expiratedAt?: Date

    type: 'expense' | 'deposit'
}