import { useState } from 'react'
import { View, Image, StatusBar, Alert } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'

import { colors } from '@/styles/colors'

import { Input } from '@/components/input'
import { Button } from '@/components/button'

export default function Home(){

    const [code, setCode] = useState('')
    const [btnState, setBtnState] = useState(true)

    function handleAccessCredential() {
    }

    function checkCode(e: string) {
        setCode(e)

        if(!e?.trim())
            setBtnState(true)
        else
            setBtnState(false)
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