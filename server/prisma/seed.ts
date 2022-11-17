import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    const user  = await prisma.user.create({
        data: {
            name: 'Jhon Doe',
            email: 'john.doe@gmail.com',
            avatarUrl: 'https://github.com/joao0pedro0alves.png'
        }
    })

    await prisma.transaction.create({
        data: {
            title: 'Envio PIX cliente X',
            type: 'expense',
            value: 2500, // multiplicado por 100
            userId: user.id
        }
    })
}

main()
