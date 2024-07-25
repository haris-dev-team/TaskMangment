import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import Ant from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native'
import { login_service } from '../Services/auth_Services'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { save_tokens_constant } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { authAction } from '../store/slices/auth_Slice'
export function Login() {
    const [data, setData] = useState()
    const [focus, setFocus] = useState(false)
    const [blur, setBlur] = useState(false)
    const navigation = useNavigation()

    const customStyle = focus ? styles.onOut : styles.onFocus

    const onChangeText_Handle = (field, value) => {
        setData({ ...data, [field]: value })
    }
    const disptach = useDispatch()

    const signUp_Handle = () => {
        navigation.navigate('Signup')
    }
    const onPress_Handle = () => {
        navigation.goBack()
    }
    const login_Handle = async () => {
        try {
            const response = await login_service(data)
            if (response) {
                const access_token = response.data.access_token
                await AsyncStorage.setItem(save_tokens_constant, access_token)
                disptach(authAction({ auth: true, profile: null }))
                navigation.navigate('bottom-tabs')
            }

            console.log(response.data)
        } catch (error) {
            Alert.alert("Error", "Invalid Credentials")
        }

    }
    return (
        <View style={{ flex: 1, marginVertical: 20 }}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>
                    <View style={{ flexDirection: "row", }}>
                        <TouchableOpacity onPress={onPress_Handle} style={{ width: "40%" }}>
                            <Text style={{}}><Ant name='left' color="#000" size={20} /></Text>
                        </TouchableOpacity>
                        <Text style={{ width: "44%", fontSize: 20, color: "#000" }}>Login</Text>
                    </View>
                </View>
                <View style={{ marginVertical: 50, paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 30, letterSpacing: 1, color: "#002055" }}>
                        Welcome Back
                    </Text>
                    <Text style={{ fontSize: 20, marginVertical: 10 }}>Please inter your email adderss</Text>
                    <Text style={{ fontSize: 20, }}> and password for login</Text>
                </View>
                <View style={{ gap: 20 }}>
                    <TextInput onChangeText={(text) => onChangeText_Handle("email", text)} onBlur={() => setBlur(true)} onFocus={() => setFocus(true)} keyboardType='email-address' style={customStyle} placeholder='Enter Your Email' />
                    <TextInput secureTextEntry onChangeText={(text) => onChangeText_Handle("password", text)} onBlur={() => setBlur(true)} onFocus={() => setFocus(true)} style={customStyle} placeholder='Enter Your password' />
                    <Text style={{ paddingHorizontal: 20, textAlign: "right", color: "#002055", fontSize: 15 }}>Forgot Password?</Text>
                    <TouchableOpacity onPress={login_Handle} style={{ backgroundColor: "#756EF3", marginHorizontal: 10, paddingHorizontal: 20, borderRadius: 15, paddingVertical: 10 }}>
                        <Text style={{ textAlign: "center", fontSize: 20, color: "#fff" }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ paddingHorizontal: 20, textAlign: "center", fontSize: 15 }}>
                        Not Register Yet? <TouchableOpacity onPress={signUp_Handle} style={{ justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "#756EF3" }}>Sign Up</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    onFocus: {
        borderColor: "#000",
        borderWidth: 1, marginHorizontal: 10, paddingHorizontal: 20, fontSize: 20, borderRadius: 15
    },
    onOut: {
        borderColor: "#756ef3",
        borderWidth: 1, marginHorizontal: 10, paddingHorizontal: 20, fontSize: 20, borderRadius: 15
    }
})