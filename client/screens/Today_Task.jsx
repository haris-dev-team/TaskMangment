import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Material_Community_Icons from "react-native-vector-icons/Feather"
import Ant from "react-native-vector-icons/AntDesign"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import { useNavigation } from '@react-navigation/native'
export function Today_Task() {

    const navigation = useNavigation()
    const onPress_Handle = () => {
        navigation.navigate('Monthly-Task')
    }
    const back_handle = () => {
        navigation.goBack()
    }
    return (
        <ScrollView>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, marginHorizontal: 30 }}>
                <TouchableOpacity onPress={back_handle}>
                    <Ant name='left' size={20} color='black' />
                </TouchableOpacity>
                <Text style={{ color: "black", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                    Today Task
                </Text>
                <Material_Community_Icons name="edit-3" size={20} color="black" />
            </View>
            <View style={{ marginHorizontal: 25, marginVertical: 30, }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ fontSize: 40, color: "black" }}>
                        October, 20  ✍
                    </Text>
                    <TouchableOpacity onPress={onPress_Handle}>
                        <EvilIcons color="black" size={30} name='calendar' />
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
            <ScrollView style={{ height: 315 }}>
                <View style={{ borderWidth: 1, borderColor: "#b7b7b7", borderStartWidth: 0, borderEndWidth: 0, paddingVertical: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 10 }}>
                    <Text style={{ paddingHorizontal: 20, fontSize: 20, color: "black" }}>10 am</Text>
                    <View style={{ backgroundColor: "#63b4ff", padding: 5, position: "relative", top: 52, width: 250, gap: 5, borderRadius: 15 }}>
                        <Text style={{ color: "white", fontSize: 15, paddingHorizontal: 15 }}>
                            Wareframe elements ☺
                        </Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ paddingHorizontal: 15, flexDirection: "row" }}>
                                <Image source={require("../assets/av1.png")} />
                                <Image style={{ position: "relative", left: -10 }} source={require("../assets/av2.png")} />
                            </View>
                            <View>
                                <Text style={{ color: "white" }}>10am - 11am</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ borderWidth: 1, borderColor: "#b7b7b7", borderStartWidth: 0, borderEndWidth: 0, paddingVertical: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 10, borderTopWidth: 0 }}>
                    <Text style={{ paddingHorizontal: 20, fontSize: 20, color: "black" }}>11 am</Text>
                    <View style={{ backgroundColor: "#b1d199", padding: 5, position: "relative", top: 52, width: 250, gap: 5, borderRadius: 15 }}>
                        <Text style={{ color: "white", fontSize: 15, paddingHorizontal: 15 }}>
                            Mobile app Design 😍
                        </Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ paddingHorizontal: 15, flexDirection: "row" }}>
                                <Image source={require("../assets/av1.png")} />
                                <Image style={{ position: "relative", left: -10 }} source={require("../assets/av2.png")} />
                                <Image style={{ position: "relative", left: -20 }} source={require("../assets/av3.png")} />
                            </View>
                            <View>
                                <Text style={{ color: "white" }}>11:40am - 12:40pm</Text>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={{ borderWidth: 1, borderColor: "#b7b7b7", borderStartWidth: 0, borderEndWidth: 0, paddingVertical: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 10, borderTopWidth: 0 }}>
                    <Text style={{ paddingHorizontal: 20, fontSize: 20, color: "black" }}>12 pm</Text>
                    <View style={{ backgroundColor: "#ffb661", padding: 5, position: "relative", top: 52, width: 250, gap: 5, borderRadius: 15 }}>
                        <Text style={{ color: "white", fontSize: 15, paddingHorizontal: 15 }}>
                            Design Team call 🤗
                        </Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ paddingHorizontal: 15, flexDirection: "row" }}>
                                <Image source={require("../assets/av1.png")} />
                                <Image style={{ position: "relative", left: -10 }} source={require("../assets/av2.png")} />
                                <Image style={{ position: "relative", left: -20 }} source={require("../assets/av3.png")} />
                            </View>
                            <View>
                                <Text style={{ color: "white" }}>01:20pm - 02:20pm</Text>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={{ borderWidth: 1, borderColor: "#b7b7b7", borderStartWidth: 0, borderEndWidth: 0, paddingVertical: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 10, borderTopWidth: 0 }}>
                    <Text style={{ paddingHorizontal: 20, fontSize: 20, color: "black" }}>01 pm</Text>

                </View>

            </ScrollView>
        </ScrollView>
    )
}