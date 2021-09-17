import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Archive from '../screens/Archive';
import { tabBarOptions } from '../styles/mainstyles';






const BottomNavigator = createBottomTabNavigator();





export default function RootNavigaton(){
    
    return (

        <NavigationContainer>

            <BottomNavigator.Navigator 
            initialRouteName="Home"
            screenOptions={tabBarOptions}>

                  <BottomNavigator.Screen 
                  options={{headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )}}
                    name="Home" 
                    component={Home} />

                <BottomNavigator.Screen 
                  options={{headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="archive" color={color} size={size} />
                    )}}
                    name="Archive" 
                    component={Archive} />




            </BottomNavigator.Navigator>

        </NavigationContainer>

    );
}


