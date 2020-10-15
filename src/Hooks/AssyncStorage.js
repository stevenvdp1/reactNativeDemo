import AsyncStorage from "@react-native-community/async-storage"

export async function useGetNotes() {
    try {
        const notes = await AsyncStorage.getItem('notes')

        if (notes) return JSON.parse(notes)
        return []
    }
    catch (e) {
        console.log(e)
    }
}

export async function useStoreNote(note) {
    try {
        let notes = await useGetNotes()
        if (note.id) {
            let index = notes.findIndex(n => n.id === note.id)
            notes[index] = note
        }
        else {
            let maxId = Math.max(...notes.map(n => n.id), 0);
            note.id = maxId + 1
            notes.push(note)
        }

        const jsonValue = JSON.stringify(notes)
        await AsyncStorage.setItem('notes', jsonValue)
        return
    }
    catch (e) {

    }
}

export async function useDeleteNote(id) {
    try {
        let notes = await useGetNotes()
        let index = notes.findIndex(n => n.id === id)
        notes.splice(index,1)

        const jsonValue = JSON.stringify(notes)
        await AsyncStorage.setItem('notes', jsonValue)
        return
    }
    catch (e) {

    }
}

export async function useClearNotes() {
    try {
        await AsyncStorage.clear()
    }
    catch (e) {

    }
}