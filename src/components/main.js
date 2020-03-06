import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';
import Tab from './tab';

// // ==================== variables ===================================================================== // //

const Stack = createStackNavigator() // //variable untuk membuat stack

// // ==================== exports ======================================================================= // //

export default (props) => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            headerMode="none"
        >
            {/* routes untuk ke login atau tab */}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Menu" component={Tab} />
        </Stack.Navigator>
    )
}