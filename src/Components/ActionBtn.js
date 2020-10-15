
import React from 'react'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ActionBtn(props) {
    return (
        <TouchableOpacity style={styles.button} onPress={props.action}>
            {props.icon}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#323d54',
        borderColor: '#323d54',
        width: 70,
        height: 70,
        borderWidth: 3,
        borderRadius: 35,
        marginRight: 40,
        marginBottom: 40
    }
})
