import { StatusBar } from 'expo-status-bar';
import {ImageBackground,Alert, TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
const image = {uri: 'https://imgs.search.brave.com/Ngt_j1VqjNbdEebMGUv0LGOhbkjiTUO8g5ZRMbPKqE8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9qb29p/bm4uY29tL2ltYWdl/cy9iYW1ib28tcGxh/bnQtMy5qcGc'};


const Accueil= ({navigation}) => {
    const handleLogin = () => {
        
        navigation.navigate('Login' );
      };
      const handleSigin = () => {
        navigation.navigate('Sigin' );
      };
  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.fixToText}>
               <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}> 
                 <Text style={styles.loginText}> LOGIN</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.loginBtn} onPress={handleSigin}>
                 <Text style={styles.loginText}> SIGN IN</Text>
               </TouchableOpacity>
     </View>
     <View style={styles.bottomView}>
    
              <Text style={styles.text}>A'rosa-je</Text>
              <Text style={{color:'white',textAlign:'center', fontFamilly:"cochin"}}>Explore our Library of plants and flowers</Text>
              <Image style={styles.tinylLogo} source={{uri:'https://cdn.discordapp.com/attachments/1052217403955753075/1074358553403465738/Screenshot_2023-02-08_140631.jpg'}}/>
              </View>
    
               
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000c0',
  },
  text: {
    color: 'white',
    fontSize: 20,
  
    textAlign: 'center',
    
    
  },
  fixToText:{
    color: "#FC0CB",
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
    backgroundColor: '#000000c0',
    marginTop: 465,
    height: 250,
    borderRadius: 80,
  },

  bottomView:{
        
    width: '100%',
    height: 90,
    backgroundColor: '#000000c0',
    justifyContent: 'center',
    
    position: 'absolute',
    bottom: 250, 
    borderRadius: 80,
  
  },
  loginBtn:{
    width: "35%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
    backgroundColor: '#194d33',
    position: 'relative',
    height: 40,
    marginHorizontal: 20,
  },
});
export default Accueil
