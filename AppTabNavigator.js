import React from 'react';
import { Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookDonateScreen from '../screens/BookDonatescreen';
import BookRequestScreen from '../screens/BookRequestscreen';

export const AppTabNavigator=createBottomTabNavigator({
    DonateBooks:{
        screen:BookDonateScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require()}
                style={{width:20, height:20}}/>,
                tabBarLabel:"Donate Book",
        }
    },
    BookRequest:{
        screen:BookRequestScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require()}
                style={{width:20, height:20}}/>,
                tabBarLabel:"Book Request",
        }
    }
})