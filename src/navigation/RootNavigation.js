import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator,BottomTabBar} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Archive from '../screens/Archive';
import Add from '../screens/Add';
import Edit from '../screens/Edit';
import { tabBarOptions } from '../styles/mainstyles';
import { navigationRef } from './navigationRef';






const BottomNavigator = createBottomTabNavigator();



export default function RootNavigaton(){
    
    return (

        <NavigationContainer ref={navigationRef}>

            <BottomNavigator.Navigator 
            initialRouteName="Home"
      
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    height: '8%',
                    backgroundColor: '#1E1B26',
                  },
                  tabBarInactiveTintColor: '#2D3038',
                  tabBarActiveTintColor: '#FFFFFF',
                tabBarButton: [
                  "Edit"
                ].includes(route.name)
                  ? () => {
                      return null;
                    }
                  : undefined,
              })}
            
            
            
            >


                <BottomNavigator.Screen 
                  options={{headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="add" color={color} size={size} />
                    )}}
                    name="Add" 
                    component={Add} />

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
    
            <BottomNavigator.Screen 
                 
                  options={{headerShown: false}}
                    name="Edit" 
                    component={Edit} />                


            </BottomNavigator.Navigator>

            


        </NavigationContainer>

    );
}


