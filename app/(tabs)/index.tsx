import { Image, StyleSheet, Platform, Text, View } from 'react-native';
import Login from '../Screens/LoginScreen/Login';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
       <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#ffffff",
    paddingTop: 20,
  }
});
