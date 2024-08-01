import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/app/utils/Colors'

export default function Login() {
  return (
    <View style={{alignItems:'center'}}>
      <Image source={require('../../../assets/images/image.jpg')}
         style={styles.loginImage}
     />
     <View style={styles.subContainer}>
      <Text style={{fontSize:18,color:Colors.WHITE,textAlign:'center'}}>Let's find 
      <Text style={{fontWeight:'bold' }}> professional </Text>people</Text> 
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginImage:{
    height:'60%',
    width:'100%',
  },
  subContainer:{
    width:'100%',
    backgroundColor:Colors.PRIMARY,
    height:'40%',
    padding: 30,
  }
})
