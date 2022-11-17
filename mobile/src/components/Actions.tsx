import { HStack, ScrollView } from 'native-base'
import { Action } from './Action'

export function Actions() {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <HStack alignItems='center' space={6}>
                <Action
                    iconName="addfolder"
                    title='Entradas'
                />
                <Action
                    iconName="tagso"
                    title='Compras'
                />
                <Action
                    iconName="creditcard"
                    title='Carteira'
                />
                <Action
                    iconName="barcode"
                    title='Boletos'
                />
                <Action
                    iconName="setting"
                    title='Conta'
                />
            </HStack>
        </ScrollView>
    )
}
