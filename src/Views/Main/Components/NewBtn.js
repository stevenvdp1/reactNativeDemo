import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function NewBtn() {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Note')}>
            <AntDesign name="plus" size={30} color="white" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        right: 40,
        bottom: 40,

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#323d54',
        borderColor: '#323d54',
        borderWidth: 3,
        borderRadius: 35,
        width: 70,
        height: 70
    }
})
