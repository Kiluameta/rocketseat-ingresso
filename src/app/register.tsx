import { useState } from 'react'
import { View, Image, StatusBar } from 'react-native'
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons'
import { Link, router } from 'expo-router'

import { colors } from '@/styles/colors'

import { Input } from '@/components/input'
import { Button } from '@/components/button'

export default function Register(){

    const [btnState, setBtnState] = useState(true)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    function checkName(e: string) {
        setName(e)

        if(!e?.trim() || !email?.trim())
            setBtnState(true)
        else
            setBtnState(false)
    }

    function checkEmail(e: string) {
        setEmail(e)

        if(!e?.trim() || !name?.trim())
            setBtnState(true)
        else
            setBtnState(false)
    }

    function handleRegister() {
        router.push('/ticket')
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
                    <FontAwesome6 
                        name='user-circle' 
                        color={colors.green[200]}
                        size={20} 
                    />
                    <Input.Field 
                        placeholder='Nome completo' 
                        onChangeText={checkName}
                    />
                </Input>
                
                <Input>
                    <MaterialIcons 
                        name='alternate-email' 
                        color={colors.green[200]}
                        size={20} 
                    />
                    <Input.Field 
                        placeholder='E-mail' 
                        keyboardType='email-address' 
                        onChangeText={checkEmail}
                    />
                </Input>

                <Button 
                    title='Acessar Credencial'
                    disabled={btnState}
                    onPress={handleRegister} 
                />

                <Link 
                    href='/' 
                    className='text-gray-100 text-base font-bold text-center mt-8'
                >
                    já possui ingresso?
                </Link>
            </View>
        </View>
    )
}