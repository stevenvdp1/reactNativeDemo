import React from 'react';
import { StyleSheet } from 'react-native';
import { Note, Main } from './src/Views';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {useClearNotes} from './src/Hooks/AssyncStorage'

const Stack = createStackNavigator()

export default function App() {
  const headerOptions = { headerStyle: styles.header, headerTitleStyle: styles.headerTitle, headerTintColor: 'white' }

  // useClearNotes()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Notes" component={Main} options={headerOptions} />
        <Stack.Screen
          name="Note"
          component={Note}
          options={
            ({ route }) => ({
              ...headerOptions,
              title: route.params ? 'Edit Note' : 'New Note',
            })
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#323d54',
  },
  headerTitle: {
    color: 'white'
  }
});
