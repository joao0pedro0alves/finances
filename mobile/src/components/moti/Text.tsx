import {
    useStyledSystemPropsResolver,
    StyledProps,
    Factory,
    ITextProps,
} from 'native-base'
import {MotiText, MotiProps} from 'moti'

// @ts-ignore

const FactoryMotiNativeBaseText = Factory(MotiText)

type NBMotiText = ITextProps & MotiProps

export function NBMotiText({
    from,
    transition,
    animate,
    children,
    ...props
}: NBMotiText) {
    const ConvertTokenizedStyleToStyle = (StyleObject: StyledProps = {}) => {
        const [style, ...restProp] = useStyledSystemPropsResolver(StyleObject)
        return {...style, ...restProp[0].dataSet}
    }

    const resolvedProps = {
        from: ConvertTokenizedStyleToStyle(from as any),
        animate: ConvertTokenizedStyleToStyle(animate as any),
        transition: {type: 'timing', duration: 1000, delay: 10},
    }

    return (
        // @ts-ignore
        <FactoryMotiNativeBaseText {...resolvedProps} {...props}>
            {children as any}
        </FactoryMotiNativeBaseText>
    )
}
