import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {


    const navigation = useNavigation()

    const onPress_Handle = () => {
        navigation.navigate('Welcome1')
    }
    return (
        <View style={{ flex: 1 }}>
            <Image resizeMode='cover' style={{ height: 250, width: "100%" }} source={require("../assets/image4.jpeg")} />
            <View style={{ position: "relative", top: -20, backgroundColor: "white", borderRadius: 30 }}>
                <View style={{ justifyContent: "center", alignItems: "center", paddingVertical: 10, flexDirection: "row" }}>
                    <Text style={{ width: 20, textAlign: "center", borderWidth: 2, height: 1, borderRadius: 2, borderColor: "#7062ff" }}>

                    </Text>
                    <Text style={{ width: 5, textAlign: "center", borderWidth: 2, height: 1, borderRadius: 2, marginHorizontal: 2, borderColor: "#c1bdbd" }}>

                    </Text>
                    <Text style={{ width: 5, textAlign: "center", borderWidth: 2, height: 1, borderRadius: 2, marginHorizontal: 2, borderColor: "#c1bdbd" }}>

                    </Text>
                </View>
                <Text style={{ textAlign: "center", paddingTop: 50, fontSize: 60, color: "#7062ff", paddingBottom: 10 }}>
                    Taskcy
                </Text>
                <Text style={{ textAlign: "center", fontSize: 40, color: "#323133" }}>
                    Building Better Workplaces
                </Text>
                <Text style={{ textAlign: "center", paddingTop: 10, fontSize: 15, color: "#b4b3b7" }}>
                    Create a unique emotional story that
                </Text>
                <Text style={{ textAlign: "center", paddingTop: 10, fontSize: 15, color: "#b4b3b7" }}>
                    describes better than words
                </Text>
                <TouchableOpacity onPress={onPress_Handle} style={{ marginVertical: 50 }}>
                    <Text style={{
                        marginHorizontal: 60, textAlign: "center", fontSize: 30, backgroundColor: "#7062ff", color: "#fff", paddingVertical: 10, borderRadius: 10, shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 9,
                        },
                        shadowOpacity: 0.50,
                        shadowRadius: 12.35,

                        elevation: 5,
                    }}>Get Started
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export { Welcome }