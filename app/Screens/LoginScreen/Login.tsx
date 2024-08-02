import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/app/utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../hooks/warmUpBrowser';
import {useOAuth} from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
  const {startOAuthFlow} = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async()=>{
    try{
       const {createdSessionId, signIn, signUp, setActive} = await startOAuthFlow()

       if(createdSessionId && setActive)
       {
         setActive({session:createdSessionId});
       }
       else{

       }
    }
    catch(err)
    {
      console.error("OAuth error", err)
    }
  },[])
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../../../assets/images/image.jpg")}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text
          style={{ fontSize: 18, color: Colors.WHITE, textAlign: "center" }}
        >
          Let's find
          <Text style={{ fontWeight: "bold" }}> professional </Text>people
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: Colors.WHITE,
            fontSize: 14,
            marginTop: 4,
          }}
        >
          The best app to find a{" "}
          <Text style={{ fontStyle: "italic" }}>Specialist</Text>
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={{textAlign:'center', fontSize:17, color: Colors.PRIMARY, fontWeight:'bold'}}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    height: "60%",
    width: "100%",
  },
  subContainer: {
    width: "100%",
    backgroundColor: Colors.PRIMARY,
    height: "40%",
    padding: 30,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 100,
    marginTop:40
  },
});
