import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, ScrollView } from 'react-native'
import React, { useState, version } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ant from "react-native-vector-icons/AntDesign"
import { Team_Members_Data } from '../utils/Team_Members_Utils'
export default function Create_Task() {
    const [urgent, setUrgent] = useState(false)
    const [running, setRunning] = useState(false)
    const [ongoing, setOngoing] = useState(false)

    const navigation = useNavigation()

    const custom_Styling = urgent == false ? styles.main_5_main_texts : styles.main_5_main_texts_onPress
    const custom_Styling1 = running == false ? styles.main_5_main_texts : styles.main_5_main_texts_onPress
    const custom_Styling2 = ongoing == false ? styles.main_5_main_texts : styles.main_5_main_texts_onPress


    const urgent_Handle = () => {
        setUrgent(true)
        setRunning(false)
        setOngoing(false)
    }

    const running_Handle = () => {
        setUrgent(false)
        setRunning(true)
        setOngoing(false)

    }
    const ongoing_Handle = () => {
        setUrgent(false)
        setRunning(false)
        setOngoing(true)
    }
    const onPress_Handle = () => {
        navigation.goBack()
    }
    return (
        <ScrollView style={{ flex: 1 }}>
            <View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, marginHorizontal: 30 }}>
                    <TouchableOpacity onPress={onPress_Handle}>
                        <Ant name='left' size={20} color='black' />
                    </TouchableOpacity>
                    <Text style={{ color: "black", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                        Create Task
                    </Text>
                    <View>
                    </View>
                </View>
                <View style={styles.main}>
                    <Text style={styles.text_1}>
                        Task Name
                    </Text>
                    <TextInput style={styles.TextInput1} placeholder='Enter your Task' />

                </View>
                <View style={styles.main_2}>
                    <Text style={styles.main_2_Text}>Team Member</Text>
                    <View style={styles.main_2_main}>
                        {Team_Members_Data.map((elem, i) => {
                            return (
                                <TouchableOpacity key={i} style={styles.main_2_main_1}>
                                    <Image resizeMode='cover' style={{ width: 50, height: 50 }} source={elem.image_url} />
                                    <Text>
                                        {elem.text}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })}

                        <TouchableOpacity style={styles.main_2_main_1}>
                            <Ant name='pluscircleo' size={45} />
                            <Text></Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.main_3}>
                    <Text style={styles.main_3_text}> Date</Text>

                    <Text style={styles.main_3_text_1} >
                        November 01, 2021
                    </Text>
                </View>
                <View style={styles.main_4}>
                    <View style={{ marginVertical: 13 }}>
                        <Text style={{ fontSize: 20 }}>Start Time</Text>
                        <Text style={{ borderWidth: 1, fontSize: 30, color: "black", paddingHorizontal: 23, paddingVertical: 10, borderRadius: 18 }}>
                            9:30 am
                        </Text>
                    </View>
                    <View style={{ marginVertical: 13 }}>
                        <Text style={{ fontSize: 20 }}>End Time</Text>
                        <Text style={{ borderWidth: 1, fontSize: 30, color: "black", paddingHorizontal: 23, paddingVertical: 10, borderRadius: 18 }}>
                            3:30 pm
                        </Text>
                    </View>
                </View>
                <View style={styles.main_5}>
                    <Text style={styles.main_5_text}>
                        Board
                    </Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <TouchableOpacity onPress={urgent_Handle}>
                            <Text style={custom_Styling}>Urgent</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={running_Handle}>
                            <Text style={custom_Styling1}>Running</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ongoing_Handle}>
                            <Text style={custom_Styling2}>ongoing</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginHorizontal: 50, borderRadius: 20, backgroundColor: "#756EF3", marginTop: 30 }}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 30, paddingVertical: 8, textAlign: "center", color: "white" }}>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    main: {
        marginHorizontal: 20
    },
    text_1: {
        fontSize: 30,
        marginVertical: 15,
        color: "black"


    },
    TextInput1: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        fontSize: 25,
        paddingLeft: 20

    },
    main_2: {
        marginHorizontal: 20
    },
    main_2_Text: {
        fontSize: 30,
        marginVertical: 15,
        color: "black"
    },
    main_2_main: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    },
    main_2_main_1: {
        justifyContent: "center",
        alignItems: "center"
    },
    main_3: {
        marginHorizontal: 20
    },
    main_3_text: {
        fontSize: 30,
        marginVertical: 15,
        color: "black"
    },
    main_3_text_1: {
        fontSize: 30,
        color: "black",
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 12,
        paddingVertical: 8

    },
    main_4: {
        flexDirection: "row",
        marginHorizontal: 20,
        justifyContent: "space-between"
    },
    main_5: {
        marginHorizontal: 20,

    },
    main_5_text: {
        fontSize: 30,
        color: "black"
    },
    main_5_main_texts: {
        borderWidth: 1, fontSize: 25, paddingVertical: 8, paddingHorizontal: 8, borderRadius: 10, color: "black", marginVertical: 15
    },
    main_5_main_texts_onPress: {
        borderWidth: 1, fontSize: 25, paddingVertical: 8, paddingHorizontal: 8, borderRadius: 10, color: "black", marginVertical: 15, borderColor: "#756EF3"
    }
})