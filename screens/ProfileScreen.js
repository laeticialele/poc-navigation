import React,{ useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = () => {
  const [imageUri, setImageUri] = useState(null);
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });}
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImage}>
          <Image source={require('../assets/profile-pic.jpg')} style={styles.image} />
        </View>
        <View style={styles.profileDetails}>
          <Text style={styles.username}>JohnDoe</Text>
          <Text style={styles.bio}>I love React Native!</Text>
          
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>10</Text>
          <Text style={styles.statTitle}>Posts</Text>
        </View>
        
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Ionicons name="md-add-circle-outline" size={25} color="black" />
          <Text style={styles.buttonText}>Add Photo</Text>
        </TouchableOpacity>
        {imageUri && <Image source={{ uri: imageUri }} style={{ width: 400, height: 200 }} />}
        <TouchableOpacity style={styles.button}>
          <Ionicons name="md-settings-outline" size={25} color="black" />
          <Text style={styles.buttonText}>take Photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    marginRight: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileDetails: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  bio: {
    color: '#aaa',
  },
  followButton: {
    backgroundColor: '#3897f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  followButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:"back"
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  stat: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  statTitle: {
    color: '#aaa',
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal:10,
  },
  buttonText: {
  marginLeft: 10,
  },
  
  
});


export default ProfileScreen;



/*import { StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert, } from 'react-native'
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import AjouterImage from './AjouterImage';


const ProfileScreen = () => {

  const navigation = useNavigation();

 const handleAjouter = () => {
    navigation.navigate( 'AjouterImage' );

  };
  const [imageUri, setImageUri] = useState(null);
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };
  return (
     <View> 
      <View style={styles.fixToText}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleAjouter}>
        <Text style={styles.loginText}>ajouter</Text> 
      </TouchableOpacity> 
      
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Supprimer</Text> 
      </TouchableOpacity> 
      </View>
      
        <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Icon name="file-picture-o" size={30} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 400, height: 200 }} />}
    
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  button: {
    backgroundColor: '#a9a9a9',
    borderRadius: 200, // demi-largeur / demi-hauteur
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 3,
    left: 5,
    
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    //color: "#FC0CB",
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
    //backgroundColor: '#000000c0',
    marginTop: 150,
    height: 50,
    borderRadius: 80,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#194d33',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  TextInput: {
    height: 80,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  inputView: {

    height: 45,
    alignItems: "center",
    opacity: 0.4,
  },
  loginBtn:{
    width: "35%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: '#194d33',
    position: 'relative',
    height: 40,
    marginHorizontal: 20,
  },
});


export default ProfileScreen */