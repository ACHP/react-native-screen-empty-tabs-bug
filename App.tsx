import * as React from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import { StatusBar } from 'expo-status-bar';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useMemo} from "react";

enableScreens();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Home Screen</Text>
        {Array(400).fill(true).map((_item, index) => (<Text key={index}>Home item {index}</Text>))}
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

function RandomScreen() {
  return (
    <ScrollView>
      <Text>Random Screen</Text>
      {Array(400).fill(true).map((_item, index) => (<Text key={index}>Random item {index}</Text>))}
      <StatusBar style="auto" />
    </ScrollView>
  );
}


function SettingsScreen() {
  return (
    <ScrollView>
      <Text>Settings Screen</Text>
      {Array(400).fill(true).map((_item, index) => (<Text key={index}>Setting Item {index}</Text>))}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <HomeStackNavigator.Navigator
        initialRouteName="Tabs"
      >
        <HomeStackNavigator.Screen
          name="Tabs"
          component={BottomTabs}
          options={({ route }) => ({
            headerShown: false,
          })}
        />
      </HomeStackNavigator.Navigator>

    </NavigationContainer>
  );
}

export const HomeStackNavigator =
  createNativeStackNavigator();


const BottomTabs = () => {

  return useMemo(
    () => (
      <Tab.Navigator screenOptions={{ headerShown: true, animation: "shift"}} detachInactiveScreens={true}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Random" component={RandomScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    ),
    [],
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
