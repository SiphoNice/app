import { Image, StyleSheet, Platform, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <Text>We are working together....</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#ffffff",
    alignItems:'center',
    justifyContent:'center'
  }
});
