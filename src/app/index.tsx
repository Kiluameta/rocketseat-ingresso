import { useState } from 'react'
import { View, Image, StatusBar, Alert } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Link, router, Redirect } from 'expo-router'
import axios from 'axios'

import { ConsultSubscription } from '@/server/api'
import { useBadgeStore } from '@/store/badge-store'

import { colors } from '@/styles/colors'

import { Input } from '@/components/input'
import { Button } from '@/components/button'

export default function Home(){

    const [code, setCode] = useState('')
    const [btnState, setBtnState] = useState(true)
    const [loading, setLoading] = useState(false)

    const badgeStore = useBadgeStore()

    async function handleAccessCredential() {
        try {
            setLoading(true)

            const response = await ConsultSubscription(code)

            badgeStore.save(response.data.badge)

            // if (response.data.badge)
                Alert.alert('Inscrição', 'Inscrição realizada com sucesso!', [
                    { text: 'OK', onPress: () => router.push('/ticket')}
                ])
            
        } catch (e) {

            setLoading(false)

            Alert.alert('Atenção!', 'Ingresso não encontrado!')
        }
    }

    function checkCode(e: string) {
        setCode(e)

        if(!e?.trim())
            setBtnState(true)
        else
            setBtnState(false)
    }

    if (badgeStore.data?.checkInURL){
        return <Redirect href='/ticket' />
    }

    return(
        <View className='flex-1 bg-green-500 items-center justify-center p-8'>
            <StatusBar barStyle='light-content' />
            
            <Image 
                source={require('@/assets/logo.png')} 
                className='h-16'
                resizeMode='contain' 
            />

            <View className='w-full mt-12 gap-3'>
                <Input>
                    <MaterialCommunityIcons 
                        name='ticket-confirmation-outline' 
                        color={colors.green[200]}
                        size={20} 
                    />
                    <Input.Field 
                        placeholder='Código do ingresso' 
                        onChangeText={checkCode} />
                </Input>

                <Button 
                    title='Acessar Credencial'
                    disabled={btnState}
                    onPress={() => handleAccessCredential()}
                    isLoading={loading}
                />

                <Link 
                    href="/register" 
                    className='text-gray-100 text-base font-bold text-center mt-8'
                >
                    Ainda não possui ingresso?
                </Link>
            </View>
        </View>
    )
}