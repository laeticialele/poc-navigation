import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [formValid, setFormValid] = useState(false);

  const handleMenu = () => {
  
    if (email && password) {
    navigation.navigate('MenuScreen');
    }
    };

    const handleEmailChange = (email) => {
      setEmail(email);
      setFormValid(email && password); 
      };
      
      const handlePasswordChange = (password) => {
      setPassword(password);
      setFormValid(email && password); 
      };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/logo.jpg')} />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="black"
          onChangeText={handleEmailChange}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
        /> 
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={[styles.loginBtn, formValid ? {} : styles.disabledBtn]} onPress={handleMenu}  disabled={!formValid}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#f5f5dc",
    alignItems: "center",
    justifyContent: "center",
    
  },
  image: {
    marginBottom: 40,
    width: 120,
    height: 120,
    opacity: 0.8,
  },
  inputView: {
    backgroundColor: "#194d33",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    opacity: 0.4,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#194d33",
  },
});
export default Login