import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import Ant from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native'
import { signup_service } from '../Services/auth_Services'
export function SignUp() {
    const [focus, setFocus] = useState(false)
    const [blur, setBlur] = useState(false)
    const navigation = useNavigation()
    const [data, setData] = useState()

    const customStyle = focus ? styles.onOut : styles.onFocus


    const onChange_Hanlde = (field, value) => {
        setData({ ...data, [field]: value })
    }
    const login_Handle = () => {
        navigation.navigate('Login')
    }
    const onPress_Handle = async () => {
        try {
            const response = await signup_service(data)
            console.log(response.data)
            console.log(data)
            alert("user has been successfully saved")
            navigation.navigate('Login')

        } catch (error) {
            console.log({ error })

        }
    }
    return (
        <View style={{ flex: 1, marginVertical: 20 }}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>
                    <View style={{ flexDirection: "row", }}>
                        <TouchableOpacity onPress={login_Handle} style={{ width: "40%" }}>
                            <Text style={{}}><Ant name='left' color="#000" size={20} /></Text>
                        </TouchableOpacity>
                        <Text style={{ width: "44%", fontSize: 20, color: "#000" }}>Sign Up</Text>
                    </View>
                </View>
                <View style={{ marginVertical: 50, paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 30, letterSpacing: 1, color: "#002055" }}>
                        Create Account
                    </Text>
                    <Text style={{ fontSize: 20, marginVertical: 10 }}>Please Inter your Informatioin and </Text>
                    <Text style={{ fontSize: 20, }}>create your account</Text>
                </View>
                <View style={{ gap: 20 }}>
                    <TextInput onChangeText={text => onChange_Hanlde("first_Name", text)} onBlur={() => setBlur(true)} onFocus={() => setFocus(true)} style={customStyle} placeholder='Enter Your First Name' />
                    <TextInput onChangeText={text => onChange_Hanlde("last_Name", text)} onBlur={() => setBlur(true)} onFocus={() => setFocus(true)} style={customStyle} placeholder='Enter Your Last Name (Optionl)' />
                    <TextInput onChangeText={text => onChange_Hanlde("username", text)} onBlur={() => setBlur(true)} onFocus={() => setFocus(true)} style={customStyle} placeholder='Enter Your username' />
                    <TextInput onChangeText={text => onChange_Hanlde("profile_Pic", text)} onBlur={() => setBlur(true)} onFocus={() => setFocus(true)} style={customStyle} placeholder='Enter Your Profile Url' />
                    <TextInput onChangeText={text => onChange_Hanlde("gender", text)} onBlur={() => setBlur(true)} onFocus={() => setFocus(true)} style={customStyle} placeholder='Enter Your Gender' />
                    <TextInput onChangeText={text => onChange_Hanlde("email", text)} keyboardType='email-address' onBlur={() => setBlur(true)} onFocus={() => setFocus(true)} style={customStyle} placeholder='Enter Your email' />
                    <TextInput onChangeText={text => onChange_Hanlde("password", text)} secureTextEntry onBlur={() => setBlur(true)} onFocus={() => setFocus(true)} style={customStyle} placeholder='Enter Your password' />

                    <TouchableOpacity onPress={onPress_Handle} style={{ backgroundColor: "#756EF3", marginHorizontal: 10, paddingHorizontal: 20, borderRadius: 15, paddingVertical: 10 }}>
                        <Text style={{ textAlign: "center", fontSize: 20, color: "#fff" }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ paddingHorizontal: 20, textAlign: "center", fontSize: 15 }}>
                        Have an Account? <TouchableOpacity onPress={login_Handle} style={{ justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "#756EF3" }}> Sign In</Text>
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