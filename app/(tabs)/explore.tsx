import { Image, StyleSheet, Platform, Text, View } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
    <Text>WThis is the explore page.</Text>
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
