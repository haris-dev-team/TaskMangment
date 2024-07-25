import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Image, ProgressBarAndroid } from 'react-native'
import Material_Community_Icons from "react-native-vector-icons/MaterialCommunityIcons"
import React, { useState } from 'react'
import Ant from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native'
import { Projects_Data } from '../utils/Projects_Handling_Data'

export function Messages() {
    const [condition, setCondition] = useState(true)
    const [condition1, setCondition1] = useState(false)
    const [condition2, setCondition2] = useState(false)
    const navigation = useNavigation()
    const custom_Styling = condition == false ? styles.tabs_Text : styles.tabs_Text_On_Press
    const custom_Styling1 = condition1 == false ? styles.tabs_Text : styles.tabs_Text_On_Press
    const custom_Styling2 = condition2 == false ? styles.tabs_Text : styles.tabs_Text_On_Press1
    const condition_Handle = () => {
        setCondition(true)
        setCondition1(false)
        setCondition2(false)
    }
    const condition_Handle1 = () => {
        setCondition1(true)
        setCondition(false)
        setCondition2(false)
    }
    const condition_Handle2 = () => {
        setCondition2(true)
        setCondition(false)
        setCondition1(false)
    }
    const back_Handle = () => {
        navigation.goBack()
    }
    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 15 }}>
                <TouchableOpacity style={{ borderWidth: 1, padding: 5, borderRadius: 25, borderColor: "#b7b7b7" }} onPress={back_Handle} >
                    <Ant name="arrowleft" size={20} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 30, color: "black" }}>
                    Projects
                </Text>
                <TouchableOpacity style={{ borderWidth: 1, padding: 5, borderRadius: 25, borderColor: "#b7b7b7" }}>
                    <Ant name="plus" size={20} color="black" />
                </TouchableOpacity>
            </View>
            <View >
                <TextInput placeholder='Search' style={{ borderWidth: 1, marginHorizontal: 20, height: 40, marginVertical: 30, paddingHorizontal: 15, fontSize: 20, borderRadius: 10 }} />
            </View>
            <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
                <View style={{ flexDirection: "row", gap: 25 }}>
                    <TouchableOpacity onPress={condition_Handle}>
                        <Text style={custom_Styling}>Favourites</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={condition_Handle1}>
                        <Text style={custom_Styling1}>Recents</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={condition_Handle2}>
                        <Text style={custom_Styling2}>All</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 2, justifyContent: "flex-end", alignItems: "flex-end" }}>
                    <TouchableOpacity>
                        <Material_Community_Icons name='widgets-outline' size={25} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{ height: 540 }}>
                {Projects_Data.map((elem, i) => {
                    return (
                        <View key={i} style={styles.projects_View}>
                            <View style={styles.projects_View1}>
                                <Text style={{ fontSize: 20, color: "#000" }}>
                                    {elem.title}
                                </Text>
                                <Text style={{ fontSize: 18 }}>
                                    {elem.title1}
                                </Text>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 5 }}>
                                    <Image resizeMode='cover' source={require("../assets/av3.png")} />
                                    <Image style={{ position: "relative", left: -10 }} resizeMode='cover' source={require("../assets/av4.png")} />
                                    <ProgressBarAndroid
                                        styleAttr="Horizontal"
                                        indeterminate={false}
                                        progress={0.6}
                                        color={elem.color}
                                        style={{
                                            width: 120, height: 10, borderRadius: 10, marginLeft: 10
                                        }} />


                                </View>
                            </View>
                            <View style={styles.projects_View_main}>
                                <Text style={styles.projects_View_main_Text}>{elem.side}</Text>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    tabs_Text: {
        fontSize: 20,
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    tabs_Text_On_Press: {
        fontSize: 20,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#756EF3"
    },
    tabs_Text_On_Press1: {
        fontSize: 20,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#756EF3"
    },
    projects_View: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        justifyContent: "space-between",
        borderRadius: 20,
        flex: 1
    },
    projects_View1: {
        paddingHorizontal: 20,
        paddingVertical: 20

    },
    projects_View_main_Text: {
        fontSize: 20,
        marginVertical: 20,
        borderWidth: 1,
        textAlign: "center",
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 20,
        borderColor: "#B0D97F"

    },
    projects_View_main: {
        flex: 2,
        alignItems: "center"
    }
})