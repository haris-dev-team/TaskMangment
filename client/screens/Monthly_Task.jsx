import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Material_Community_Icons from "react-native-vector-icons/Feather"
import Ant from "react-native-vector-icons/AntDesign"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import { useNavigation } from '@react-navigation/native'
export default function Monthly_Task() {

    const navigation = useNavigation()
    const onPress_Handle = () => {
        navigation.navigate('Today-Task')
    }
    const back_Handle = () => {
        navigation.goBack()
    }
    return (
        <ScrollView>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, marginHorizontal: 30 }}>
                <TouchableOpacity onPress={back_Handle}>
                    <Ant name='left' size={20} color='black' />
                </TouchableOpacity>
                <Text style={{ color: "black", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                    Monthly Task
                </Text>
                <Material_Community_Icons name="edit-3" size={20} color="black" />
            </View>
            <View style={{ marginHorizontal: 25, marginVertical: 30, }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ fontSize: 40, color: "black" }}>
                        September, 12  ✍
                    </Text>
                    <TouchableOpacity style={{ borderRadius: 20, padding: 5, backgroundColor: "#756EF3" }} onPress={onPress_Handle}>
                        <EvilIcons color="white" size={30} name='calendar' />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 20 }}>15 task today</Text>
            </View>
            <ScrollView horizontal>
                <TouchableOpacity style={{ marginVertical: 20, borderWidth: 1, marginLeft: 20, alignItems: "center", paddingVertical: 35, paddingHorizontal: 15, borderRadius: 10, borderColor: "#b7b7b7" }} onPress={onPress_Handle}>
                    <Text style={{ fontSize: 20 }}>
                        19
                    </Text>
                    <Text style={{ fontSize: 20 }}>
                        sat
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginVertical: 20, marginHorizontal: 15, alignItems: "center", paddingVertical: 35, paddingHorizontal: 15, borderRadius: 10, backgroundColor: "#756EF3" }}>
                    <Text style={{ fontSize: 20, color: "white" }}>
                        19
                    </Text>
                    <Text style={{ fontSize: 20, color: "white" }}>
                        sat
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginVertical: 20, borderWidth: 1, marginHorizontal: 0, alignItems: "center", paddingVertical: 35, paddingHorizontal: 15, borderRadius: 10, borderColor: "#b7b7b7" }}>
                    <Text style={{ fontSize: 20 }}>
                        19
                    </Text>
                    <Text style={{ fontSize: 20 }}>
                        sat
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginVertical: 20, borderWidth: 1, marginHorizontal: 15, alignItems: "center", paddingVertical: 35, paddingHorizontal: 15, borderRadius: 10, borderColor: "#b7b7b7" }}>
                    <Text style={{ fontSize: 20 }}>
                        19
                    </Text>
                    <Text style={{ fontSize: 20 }}>
                        sat
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginVertical: 20, borderWidth: 1, marginHorizontal: 0, alignItems: "center", paddingVertical: 35, paddingHorizontal: 15, borderRadius: 10, borderColor: "#b7b7b7" }}>
                    <Text style={{ fontSize: 20 }}>
                        19
                    </Text>
                    <Text style={{ fontSize: 20 }}>
                        sat
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginVertical: 20, borderWidth: 1, marginHorizontal: 15, alignItems: "center", paddingVertical: 35, paddingHorizontal: 15, borderRadius: 10, borderColor: "#b7b7b7" }}>
                    <Text style={{ fontSize: 20 }}>
                        19
                    </Text>
                    <Text style={{ fontSize: 20 }}>
                        sat
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginVertical: 20, borderWidth: 1, marginHorizontal: 0, alignItems: "center", paddingVertical: 35, paddingHorizontal: 15, borderRadius: 10, borderColor: "#b7b7b7" }}>
                    <Text style={{ fontSize: 20 }}>
                        19
                    </Text>
                    <Text style={{ fontSize: 20 }}>
                        sat
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginVertical: 20, borderWidth: 1, marginHorizontal: 15, alignItems: "center", paddingVertical: 35, paddingHorizontal: 15, borderRadius: 10, borderColor: "#b7b7b7" }}>
                    <Text style={{ fontSize: 20 }}>
                        19
                    </Text>
                    <Text style={{ fontSize: 20 }}>
                        sat
                    </Text>
                </TouchableOpacity>



            </ScrollView>
        </ScrollView>
    )
}