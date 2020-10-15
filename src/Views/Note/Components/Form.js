import React, { useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default function Form(props) {
    let notesInput = useRef(null)

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Title'
                placeholderTextColor='#fff'
                autoFocus
                style={[styles.textInput, styles.title]}
                blurOnSubmit={false}
                onChangeText={text => props.setNote((current)=>{ return {...current, title: text }})}
                value={props.title}
                onSubmitEditing={() => notesInput.focus()}
            />
            <TextInput
                ref={(input) => { notesInput = input }}
                placeholder='Note'
                placeholderTextColor='#fff'
                style={[styles.textInput, styles.note]}
                onChangeText={text => props.setNote((current)=>{ return {...current, note: text }})}
                value={props.note}
                multiline
                autoCorrect={false}
                autoCompleteType={'off'}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#191a1c',
        alignItems: 'flex-start',
        paddingLeft: 10,
    },
    textInput: {
        marginTop: 10,
        marginBottom: 10,
        color: 'white'
    },
    title: {
        fontSize: 25
    },
    note: {
        fontSize: 15
    }
})