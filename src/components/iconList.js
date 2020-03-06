import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

// // ==================== render akhir ======================================================================= // //

const IconList = ({ icons, types, name }) => {
    return (
        <View style={{ alignItems: 'center', width: '25%', marginVertical: 10 }}>
            <Icon
                name={icons}
                size={30}
                type={types}
                color='pink'
                containerStyle={{
                    borderWidth: 2,
                    borderColor: 'red',
                    borderRadius: 45,
                    width: 45,
                    height: 45,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            />
            <Text style={{ fontSize: 10 }}>{name}</Text>
        </View>
    )
}

export default IconList;