import { View, Text, TouchableOpacity, StyleSheet, Image, Button, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Ant from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import { Profile_Handle_Data } from '../utils/Profile_Handle'
export default function Profile() {
  const navigation = useNavigation()

  const onPress_Handle = () => {
    navigation.goBack()
  }
  const onClick_Handle = () => {
    navigation.navigate('Side-Menu')
  }
  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, marginHorizontal: 30 }}>
          <TouchableOpacity onPress={onPress_Handle}>
            <Ant name='left' size={20} color='black' />
          </TouchableOpacity>
          <Text style={{ color: "black", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
            Profile
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
          <TouchableOpacity onPress={onClick_Handle}>
            <Text style={{ borderWidth: 1, fontSize: 20, marginVertical: 5, paddingHorizontal: 10, borderRadius: 9 }}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.main1}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Entypo name='clock' size={30} color="black" />
            <Text style={{ fontSize: 30, color: "black" }}>
              5
            </Text>
            <Text style={{ fontSize: 20 }}>
              on Going
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Entypo name='check' size={30} color="black" />
            <Text style={{ fontSize: 30, color: "black" }}>
              25
            </Text>
            <Text style={{ fontSize: 20 }}>
              Total Completes
            </Text>
          </View>
        </View>
        {Profile_Handle_Data.map((elem, i) => {
          return (
            <TouchableOpacity key={i} style={styles.main2}>
              <View style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>{elem.title}</Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ant name='right' size={20} color="black" />
              </View>
            </TouchableOpacity>
          )
        })}
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
  main1: {
    justifyContent: "space-around",
    marginHorizontal: 20,
    alignItems: "center",
    flexDirection: "row"
  },
  main2: {
    marginHorizontal: 30,
    borderWidth: 1,
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderRadius: 10
  }
})