import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Ant from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation } from '@react-navigation/native'
export default function Task_Status() {
    const [completed, setCompleted] = useState(true)
    const [inProgess, setInProgess] = useState(false)
    const [toDO, setToDO] = useState(false)

    const custom_Style = completed == false ? styles.main4 : styles.main4_onPress
    const custom_Style1 = inProgess == false ? styles.main4 : styles.main4_onPress
    const custom_Style2 = toDO == false ? styles.main4 : styles.main4_onPress
    const navigation = useNavigation()
    const onPress_Handle = () => {
        navigation.goBack()
    }
    const completed_Hanlde = () => {
        setCompleted(true)
        setInProgess(false)
        setToDO(false)

    }
    const inProgress_Handle = () => {
        setCompleted(false)
        setInProgess(true)
        setToDO(false)

    }
    const toDo_Handle = () => {
        setCompleted(false)
        setInProgess(false)
        setToDO(true)
    }
    return (
        <ScrollView style={{flex:1}}>
            <View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, marginHorizontal: 30 }}>
                    <TouchableOpacity onPress={onPress_Handle}>
                        <Ant name='left' size={20} color='black' />
                    </TouchableOpacity>
                    <Text style={{ color: "black", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                        Task Status
                    </Text>
                    <TouchableOpacity>
                        <Ant name='setting' size={30} />
                    </TouchableOpacity>
                </View>
                <View style={styles.main}>
                    <View style={styles.main1}>
                        <Text style={styles.main1_text}>
                            65%
                        </Text>
                        <Text style={styles.main1_text1}>
                            Cpmplete
                        </Text>
                    </View>
                </View>
                <View style={styles.main2}>
                    <View style={styles.main2_texts}>
                        <Entypo name='dot-single' size={30} color='#B1D199' />
                        <Text style={{ fontSize: 20, color: "black" }}>To Do</Text>
                    </View>
                    <View style={styles.main2_texts}>
                        <Entypo name='dot-single' size={30} color='#FFB35A' />
                        <Text style={{ fontSize: 20, color: "black" }}>In Progress</Text>
                    </View>
                    <View style={styles.main2_texts}>
                        <Entypo name='dot-single' size={30} color='#756EF3' />
                        <Text style={{ fontSize: 20, color: "black" }}>Completed</Text>
                    </View>
                </View>
                <View style={styles.main3}>
                    <Text style={{ fontSize: 25, color: "black" }}>Monthly</Text>
                </View>
                <View style={{ gap: 25 }}>
                    <TouchableOpacity onPress={completed_Hanlde} style={custom_Style}>
                        <View>
                            <Text style={{ fontSize: 20, paddingVertical: 10, color: "black" }}>Completed</Text>
                            <Text style={{ paddingBottom: 10, fontSize: 15, }}>18 Task now - 18 Task Completed</Text>
                        </View>
                        <TouchableOpacity style={{ justifyContent: "center" }}>
                            <Entypo name='dots-three-horizontal' size={20} color="black" />
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={inProgress_Handle} style={custom_Style1}>
                        <View>
                            <Text style={{ fontSize: 20, paddingVertical: 10, color: "black" }}>In Progress</Text>
                            <Text style={{ paddingBottom: 10, fontSize: 15, }}>2 Task now - 1 started</Text>
                        </View>
                        <TouchableOpacity style={{ justifyContent: "center" }}>
                            <Entypo name='dots-three-horizontal' size={20} color="black" />
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toDo_Handle} style={custom_Style2}>
                        <View>
                            <Text style={{ fontSize: 20, paddingVertical: 10, color: "black" }}>To Do</Text>
                            <Text style={{ paddingBottom: 10, fontSize: 15, }}>2 Task now - 1 Upcoming</Text>
                        </View>
                        <TouchableOpacity style={{ justifyContent: "center" }}>
                            <Entypo name='dots-three-horizontal' size={20} color="black" />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
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
    main1: {
        borderWidth: 25,
        padding: 30,
        borderRadius: 150,
        borderStartColor: "#B1D199",
        borderTopColor: "#B1D199",
        borderEndColor: "#FFB35A",
        borderBottomColor: "#756EF3"
    },
    main1_text: {
        textAlign: "center",
        fontSize: 55,
        color: "black"
    },
    main1_text1: {
        fontSize: 20,
        textAlign: "center"
    },
    main2: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,


    },
    main2_texts: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    main3: {
        marginVertical: 30,
        marginHorizontal: 20
    },
    main4: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        borderRadius: 20,
        paddingVertical: 7
    },
    main4_onPress: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        borderRadius: 20,
        paddingVertical: 7,
        borderColor: "#756EF3"
    }
})