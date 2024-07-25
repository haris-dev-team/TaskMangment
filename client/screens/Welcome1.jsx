import { View, Text, Image, TouchableOpacity, ScrollView, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Welcome1 = () => {


    const navigation = useNavigation()

    const onPress_Handle = () => {
        navigation.navigate('Welcome2')
    }
    const login_OnPress_Handle = () => {
        navigation.navigate('Login')
    }
    return (
        <View style={{ flex: 1, backgroundColor: "#f7f7f7" }}>
            <ScrollView>
                <Image resizeMode='cover' source={require("../assets/image1.jpeg")} style={{ height: 350 }} />
                <View style={{ paddingHorizontal: 40 }}>
                    <Text style={{ fontSize: 25, color: "#756ef3" }}>
                        Task Mangment
                    </Text>
                    <Text style={{ fontSize: 40, marginTop: 10, letterSpacing: 3, color: "#323133" }}>
                        Let's create a <Text style={{ color: "#756ef3" }}>space</Text> for your workflows
                    </Text>
                    <View style={{ justifyContent: "flex-start", alignItems: "center", paddingVertical: 10, flexDirection: "row" }}>
                        <Text style={{ width: 20, textAlign: "center", borderWidth: 2, height: 1, borderRadius: 2, borderColor: "#7062ff" }}>

                        </Text>
                        <Text style={{ width: 5, textAlign: "center", borderWidth: 2, height: 1, borderRadius: 2, marginHorizontal: 2, borderColor: "#c1bdbd" }}>

                        </Text>
                        <Text style={{ width: 5, textAlign: "center", borderWidth: 2, height: 1, borderRadius: 2, marginHorizontal: 2, borderColor: "#c1bdbd" }}>

                        </Text>
                    </View>

                </View>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", height: 215, alignItems: "flex-end" }}>
                    <TouchableOpacity onPress={login_OnPress_Handle}>
                        <Text style={{ marginVertical: 47, marginLeft: 40, fontSize: 20, color: "#002055" }}>Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPress_Handle}>
                        <View style={{
                            width: 120,
                            height: 120,
                            backgroundColor: '#7c6ff2',
                            borderTopLeftRadius: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                color: '#ffffff',
                                fontSize: 20,
                                position: 'absolute',
                            }}>→</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export { Welcome1 }