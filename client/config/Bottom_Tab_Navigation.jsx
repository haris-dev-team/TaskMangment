import { View, Text } from 'react-native'
import React from 'react'
import Ant from "react-native-vector-icons/AntDesign"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home'
import { Messages } from '../screens/Messages'
import { Add_Task } from '../screens/Add_Task'
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from "react-native-vector-icons/Feather"
import Icon2 from "react-native-vector-icons/AntDesign"
import Chat from '../screens/Chat'
import Profile from '../screens/Profile'
const Tab = createBottomTabNavigator()

export default function Bottom_Tab_Navigation() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#7B61FF"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#fff' }}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#7B61FF",
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home-outline" color={color} size={26} />
                    ),
                    tabBarLabel: ""
                }}
            />
            <Tab.Screen
                name="Projects"
                component={Messages}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Icon1 name="folder" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Add"
                component={Add_Task}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Icon1 name="plus" color={color} size={40} />
                    ),
                }}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Icon name="chatbubble-ellipses-outline" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Icon2 name="user" color={color} size={26} />
                    ),

                }}
            />
        </Tab.Navigator>
    )
}
