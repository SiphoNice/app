import { Image, StyleSheet, Platform, Text, View } from "react-native";
import Login from "../Screens/LoginScreen/Login";
import {
  ClerkProvider,
  ClerkLoaded,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-expo";
import { StatusBar } from "expo-status-bar";
import * as SecureStore from 'expo-secure-store'

const tokenCache = {
  async getToken(key: string) {
    try {
      const item = await SecureStore.getItemAsync(key)
      if (item) {
        console.log(`${key} was used 🔐 \n`)
      } else {
        console.log('No values stored under key: ' + key)
      }
      return item
    } catch (error) {
      console.error('SecureStore get item error: ', error)
      await SecureStore.deleteItemAsync(key)
      return null
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value)
    } catch (err) {
      return
    }
  },
}

export default function HomeScreen() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey="pk_test_aW5ub2NlbnQtbWF5Zmx5LTk2LmNsZXJrLmFjY291bnRzLmRldiQ">
      <ClerkLoaded>
        <View style={styles.container}></View>
        <SignedIn>
          <Text>You are now signed in...</Text>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </ClerkLoaded>
      <StatusBar style="auto" />
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 20,
  },
});
