import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';

// // ==================== variables ===================================================================== // //

const Stack = createStackNavigator() // //variable untuk membuat stack

// // ==================== exports ======================================================================= // //

export default (props) => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            headerMode="none"
        >
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}