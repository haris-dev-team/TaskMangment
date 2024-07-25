import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Ant from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import { Chat_Data } from '../utils/Chat'
export default function Chat() {
  const navigation = useNavigation()

  const onPress_Handle = () => {
    navigation.goBack()
  }
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, marginHorizontal: 30 }}>
          <TouchableOpacity onPress={onPress_Handle}>
            <Ant name='left' size={20} color='black' />
          </TouchableOpacity>
          <Text style={{ color: "black", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
            Chat
          </Text>
          <TouchableOpacity>
            <Ant name='plus' size={20} color='black' />
          </TouchableOpacity>
        </View>
        <View style={styles.searchSection}>
          <Entypo name='magnifying-glass' style={styles.searchIcon} size={20} color="black" />
          <TextInput style={styles.input} placeholder='Search' />
        </View>
        {
          Chat_Data.map((elem, i) => {
            return (
              <View key={i} style={styles.main}>
                <View >
                  <View style={styles.main1}>
                    <Image style={styles.image} source={elem.image} />
                    <View style={styles.main1_view}>
                      <Text style={styles.main1_text}>{elem.name}</Text>
                      <Text style={styles.active}>{elem.title}</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={styles.main2}>
                  <EvilIcons name='camera' color="black" size={40} />
                </TouchableOpacity>
              </View>
            )
          })
        }
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 50,
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 15
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    fontSize: 20
  },
  main: {
    flex: 1,
    paddingVertical: 30,
    marginHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderTopWidth: 0,
    borderEndWidth: 0,
    borderStartWidth: 0

  },
  main1: {
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 60,
    height: 60,
  },
  main1_text: {
    fontSize: 20,
    color: "black"
  },
  main1_view: {
    marginHorizontal: 10,

  },
  active: {
    fontSize: 15
  },
  main2: {

  }
})