import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Material_Community_Icons from "react-native-vector-icons/MaterialCommunityIcons"
import Ant from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { save_tokens_constant } from '../utils/constants'
export function Home() {
    const navigation = useNavigation()
    useEffect(() => {
        const storage = AsyncStorage.getItem(save_tokens_constant)
        console.log(storage)
    }, [])

    const progress = [
        {
            title: "Productivity Mobile App",
            title1: "Create Detail Booking",
            min: "2 min ago",
            progressBar: "60%",
        },
        {
            title: "Banking Mobile App",
            title1: "Revision Home Page",
            min: "5 min ago",
            progressBar: "70%",
        },
        {
            title: "Online Course",
            title1: "Working On Landing Page",
            min: "7 min ago",
            progressBar: "80%",
        },
        {
            title: "Productivity Mobile App",
            title1: "Create Detail Booking",
            min: "2 min ago",
            progressBar: "60%",
        }
    ]
    const onPress_Handle = () => {
        navigation.navigate("Today-Task")
    }
    const Task_Status_Handle = () => {
        navigation.navigate("Task-Status")
    }
    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, marginHorizontal: 30 }}>
                <Material_Community_Icons name='widgets-outline' size={20} color='black' />
                <Text style={{ color: "black", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                    Friday, 26
                </Text>
                <Material_Community_Icons name="bell-outline" size={20} color="black" />
            </View>
            <View style={{ marginHorizontal: 25, marginVertical: 30, }}>
                <Text style={{ fontSize: 40, color: "black" }}>
                    Let’s make a habits together  🙌
                </Text>
            </View>
            <ScrollView horizontal>
                <View style={{ marginLeft: 20, backgroundColor: "#756ef3", borderRadius: 20, paddingVertical: 15 }}>
                    <Text style={{ color: "white", padding: 10, fontSize: 30 }}>
                        Application Design
                    </Text>
                    <Text style={{ color: "white", padding: 10 }}>
                        UI Design Kit
                    </Text>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginVertical: 12, paddingHorizontal: 12 }}>
                        <Image style={{ position: "relative", left: 10 }} source={require("../assets/av1.png")} />
                        <Image source={require("../assets/av2.png")} />
                        <Image style={{ position: "relative", right: 10 }} source={require("../assets/av3.png")} />
                        <View style={{ gap: 5, paddingHorizontal: 20 }}>
                            <Text style={{ color: "white" }}>
                                Progress
                            </Text>
                            <Text style={{ borderWidth: 1, height: 1, borderColor: "white" }}>

                            </Text>
                        </View>
                        <Text style={{ paddingHorizontal: 20, color: "white" }}>
                            50/80
                        </Text>

                    </View>
                </View>
                <View style={{ marginHorizontal: 20, borderRadius: 20, paddingVertical: 15, borderWidth: 1, borderColor: "#c1bbbb" }}>
                    <Text style={{ color: "black", padding: 10, fontSize: 30 }}>
                        Overlay Design
                    </Text>
                    <Text style={{ color: "black", padding: 10 }}>
                        UI Design Kit
                    </Text>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginVertical: 12, paddingHorizontal: 12 }}>
                        <Image style={{ position: "relative", left: 10 }} source={require("../assets/av1.png")} />
                        <Image source={require("../assets/av2.png")} />
                        <Image style={{ position: "relative", right: 10 }} source={require("../assets/av3.png")} />
                        <View style={{ gap: 5, paddingHorizontal: 20 }}>
                            <Text style={{ color: "black" }}>
                                Progress
                            </Text>
                            <Text style={{ borderWidth: 1, height: 1, borderColor: "black" }}>

                            </Text>
                        </View>
                        <Text style={{ paddingHorizontal: 20, color: "black" }}>
                            50/80
                        </Text>

                    </View>
                </View>
            </ScrollView>
            <ScrollView style={{ height: 300 }}>
                <View style={{ marginVertical: 20, marginHorizontal: 20, gap: 10 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 20, color: "black" }}>In Progress</Text>
                        <TouchableOpacity onPress={Task_Status_Handle}>
                            <Ant size={20} color="black" name='right' />
                        </TouchableOpacity>
                    </View>
                    {
                        progress.map((elem, i) => {
                            return <TouchableOpacity key={i} onPress={onPress_Handle}>
                                <View key={i} style={{ flexDirection: "row", borderWidth: 1, paddingHorizontal: 15, paddingVertical: 15, borderRadius: 15, borderColor: "#c1bbbb", justifyContent: "space-between" }}>
                                    <View>
                                        <Text style={{ fontSize: 15 }}>
                                            {elem.title}
                                        </Text>
                                        <Text style={{ fontSize: 20, color: "black", paddingVertical: 5 }}>
                                            {elem.title1}
                                        </Text>
                                        <Text style={{ fontSize: 15 }}>
                                            {elem.min}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            width: 60, height: 60, borderRadius: 50, borderWidth: 4, borderTopColor: '#D1E2FE', borderBottomColor: 'blue', borderRightColor: 'blue', justifyContent: 'center', alignItems: 'center',
                                            borderLeftColor: "#D1E2FE"
                                        }}
                                    ><Text style={{ fontSize: 15 }}>{elem.progressBar}</Text></View>

                                </View>
                            </TouchableOpacity>
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}