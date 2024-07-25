import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import Ant from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native'
export default function Side_Menu() {


    const navigation = useNavigation()

    return (
        <ScrollView style={{ flex: 1 }}>
            <View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, marginHorizontal: 30 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ant name='left' size={20} color='black' />
                    </TouchableOpacity>
                    <Text style={{ color: "black", alignItems: "center", justifyContent: "center", fontSize: 20 }}>

                    </Text>
                    <View>
                    </View>
                </View>
                <View style={styles.main}>
                    <Image source={require("../assets/Prolile.png")} />
                    <Text style={styles.Profile_Text}>
                        Alvart Ainstain
                    </Text>
                    <Text style={{ fontSize: 15 }}>
                        @albart.ainstain
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ borderWidth: 1, fontSize: 20, marginVertical: 10, paddingHorizontal: 10, borderRadius: 9 }}>
                            View Profile
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 25, fontWeight: "bold", color: "black" }}>Workspace</Text>
                </View>
                <View style={{ marginHorizontal: 20, borderWidth: 1, marginVertical: 20, paddingVertical: 15, flexDirection: "row", justifyContent: "space-around", borderRadius: 12 }}>
                    <Text style={{ fontSize: 20, color: "black" }}>Ui Design</Text>
                    <TouchableOpacity style={{ borderWidth: 1, paddingHorizontal: 12, borderRadius: 9 }}>
                        <Text style={{ fontSize: 18, color: "black" }}>invite</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 25, fontWeight: "bold", color: "black" }}>Manage</Text>
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: 20, marginVertical: 10, justifyContent: "space-between" }}>
                    <View style={{ borderWidth: 1, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10, flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "black" }}>Team</Text>
                        <Text style={{ marginHorizontal: 10, borderWidth: 1, paddingHorizontal: 10, borderRadius: 9, color: "black" }}>8</Text>
                    </View>
                    <View style={{ borderWidth: 1, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10, flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "black" }}>Labels</Text>
                        <Text style={{ marginHorizontal: 10, borderWidth: 1, paddingHorizontal: 10, borderRadius: 9, color: "black" }}>13</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: 20, marginVertical: 15, justifyContent: "space-between" }}>
                    <View style={{ borderWidth: 1, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10, flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "black" }}>Task</Text>
                        <Text style={{ marginHorizontal: 10, borderWidth: 1, paddingHorizontal: 10, borderRadius: 9, color: "black" }}>8</Text>
                    </View>
                    <View style={{ borderWidth: 1, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10, flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "black" }}>Member</Text>
                        <Text style={{ marginHorizontal: 10, borderWidth: 1, paddingHorizontal: 10, borderRadius: 9, color: "black" }}>13</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", marginHorizontal: 45, paddingVertical: 10, borderRadius: 12, backgroundColor: "#756EF3" }}>
                    <Text style={{ fontSize: 20, color: "white" }}>
                        Log Out
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        height: 250,
        justifyContent: "center",
        alignItems: "center"
    },
    Profile_Text: {
        fontSize: 30,
        color: "black",
        paddingVertical: 5,


    },
})