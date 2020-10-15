import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Note(props) {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Note', props)}>
                {props.title ?<Text style={styles.title}>{props.title}</Text>:null}
                {props.note ?<Text style={styles.note}>{props.note}</Text>:null}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 3,
        padding: 10,
        borderColor: 'white',
        borderRadius: 5,
        borderWidth: 0.2,
        width: '50%'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    note: {
        color: 'white'
    }
})
