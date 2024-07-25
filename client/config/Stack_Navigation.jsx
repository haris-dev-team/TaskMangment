
import React, { useEffect } from 'react'
import { Welcome } from '../screens/Welcome'
import { Login } from '../screens/Login'
import { SignUp } from '../screens/SignUp'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Welcome1 } from '../screens/Welcome1'
import { Welcome2 } from '../screens/Welcome2'
import { Welcome3 } from '../screens/Welcome3'
import Bottom_Tab_Navigation from './Bottom_Tab_Navigation'
import { Today_Task } from '../screens/Today_Task'
import Monthly_Task from '../screens/Monthly_Task'
import Create_Task from '../screens/Create_Task'
import Create_Team from '../screens/Create_Team'
import Task_Status from '../screens/Task_Status'
import Side_Menu from '../screens/Side_Menu'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { check_auth_service } from '../Services/auth_Services'
import { Loader } from '../assets/Loader'
import { save_tokens_constant } from '../utils/constants'
import { authAction } from '../store/slices/auth_Slice'

const Stack = createNativeStackNavigator()

export const Stack_Navigation = () => {
    const authSlice = useSelector((state) => state.auth)

    const dispatch = useDispatch()

    // const check_initial_auth =

    useEffect(() => {
        //  iife ----->
        ; (async () => {

            const auth_token = await AsyncStorage.getItem(save_tokens_constant) || ''

            if (auth_token) {
                try {
                    const res = await check_auth_service()

                    if (res.data) {
                        dispatch(authAction({ auth: true, profile: res.data.data }))
                    }
                } catch (error) {
                    dispatch(authAction({ auth: false, profile: null }))
                }
            }
            else {
                dispatch(authAction({ auth: false, profile: null }))
            }

        })();

    }, [])
    return (
        authSlice.loading ? <Loader size='large' /> : <NavigationContainer>
            {!authSlice.auth ? (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Welcome" component={Welcome} />
                    <Stack.Screen name="Welcome1" component={Welcome1} />
                    <Stack.Screen name="Welcome2" component={Welcome2} />
                    <Stack.Screen name="Welcome3" component={Welcome3} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Signup" component={SignUp} />
                </Stack.Navigator>
            ) : (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="bottom-tabs" component={Bottom_Tab_Navigation} />
                    <Stack.Screen name='Today-Task' component={Today_Task} />
                    <Stack.Screen name='Monthly-Task' component={Monthly_Task} />
                    <Stack.Screen name='Create-Task' component={Create_Task} />
                    <Stack.Screen name='Create-Team' component={Create_Team} />
                    <Stack.Screen name='Task-Status' component={Task_Status} />
                    <Stack.Screen name='Side-Menu' component={Side_Menu} />
                </Stack.Navigator>
            )}
        </NavigationContainer>

    )
}