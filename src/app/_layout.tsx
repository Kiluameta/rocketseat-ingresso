import '@/styles/global.css'

import { Slot } from 'expo-router'

import { Loading } from '@/components/loading'

import { 
    useFonts,
    Inter_700Bold,
    Inter_500Medium,
    Inter_400Regular 
} from '@expo-google-fonts/inter'

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Inter_700Bold,
        Inter_500Medium,
        Inter_400Regular 
    })

    if (!fontsLoaded)
        return <Loading/>

    return <Slot/>
}