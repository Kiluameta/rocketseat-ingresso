import { 
    ActivityIndicator, 
    Text, 
    TouchableOpacity,
    TouchableOpacityProps 
} from "react-native"

type Props = TouchableOpacityProps & {
    title: string
    isLoading?: boolean
}

export function Button({ title, isLoading = false, ...rest }: Props) {
    return(
        <TouchableOpacity 
            activeOpacity={0.7}
            disabled={isLoading} 
            // className="w-full h-14 bg-orange-500 items-center justify-center rounded-lg"
            style={{height: 56, width: '100%', backgroundColor: 'rgb(244 143 86)', justifyContent: 'center', alignItems: 'center', borderRadius: 8}}
            {...rest}
        >
            { isLoading 
            ? (
                <ActivityIndicator className="text-green-500"/>
            ) : (
                <Text className="text-green-500 text-base font-bold uppercase">
                    {title}
                </Text>
            )}
        </TouchableOpacity> 
    )    
}