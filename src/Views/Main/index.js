import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, Platform, StatusBar, View } from 'react-native'
import { useGetNotes } from '../../Hooks/AssyncStorage'
import { NewBtn, Note } from './Components'

export default function Main({ navigation }) {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        const navListener = navigation.addListener('focus', async () => {
            const n = await useGetNotes()
            setNotes(n)
        })
        return navListener
    }, [navigation])

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
                {notes.map((note) => <Note key={note.id} {...note} />)}
            </ScrollView>
            <NewBtn />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    scroll: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#191a1c',
        flexGrow: 1
    }
})