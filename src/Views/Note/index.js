import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet } from 'react-native'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useDeleteNote, useStoreNote } from '../../Hooks/AssyncStorage'
import { Form } from './Components';
import { ActionBtn } from '../../Components';

export default function Note({ route }) {

    const [note, setNote] = useState(() => route.params ? { ...route.params } : { title: null, note: null })

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Form {...note} setNote={setNote} />

            <ActionBtn
                icon={<FontAwesome name="check" size={30} color="green" />}
                action={async () => {
                    await useStoreNote(note)
                    navigation.goBack()
                }}
            />
            
            {note.id && <ActionBtn
                icon={<MaterialCommunityIcons name="delete-outline" size={30} color="red" />}
                action={async () => {
                    await useDeleteNote(note.id)
                    navigation.goBack()
                }}
            />}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#191a1c',
        justifyContent: 'space-between',
    }
})