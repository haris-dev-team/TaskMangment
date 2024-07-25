import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Ant from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'
import FontAwesome from "react-native-vector-icons/FontAwesome"
export function Add_Task() {
    const navigation = useNavigation()

    const onPress_Handle = () => {
        navigation.goBack()
    }
    const create_Task_Handle = () => {
        navigation.navigate("Create-Task")
    }
    const create_Team_Handle = () => {
        navigation.navigate("Create-Team")
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, marginHorizontal: 30 }}>
                <TouchableOpacity onPress={onPress_Handle}>
                    <Ant name='left' size={20} color='black' />
                </TouchableOpacity>
                <Text style={{ color: "black", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                    Add Task
                </Text>
                <View>
                </View>
            </View>
            <View style={styles.container}>
                <TouchableOpacity onPress={create_Task_Handle} style={styles.main_1}>
                    <Text><Ionicons name='create-outline' color="black" size={30} /></Text>
                    <Text style={{ fontSize: 30, color: "black" }}>Create Task</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.main_1}>
                    <Text><Ant name='plussquareo' color="black" size={30} /></Text>
                    <Text style={{ fontSize: 30, color: "black" }}>Create Project</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={create_Team_Handle} style={styles.main_1}>
                    <Text><FontAwesome name='users' color="black" size={30} /></Text>
                    <Text style={{ fontSize: 30, color: "black" }}>Create Team</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.main_1}>
                    <Text><Ant name='clockcircleo' color="black" size={30} /></Text>
                    <Text style={{ fontSize: 30, color: "black" }}>Create Event</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main_1: {
        borderWidth: 1,
        marginVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 35,
        marginHorizontal: 20,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 15,
        width: 350
    },
    container: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    }
})