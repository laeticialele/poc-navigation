import { View, Text } from 'react-native'
import React from 'react'

const AddScreen = () => {
  return (
    <View style={{
        height:'100%',
        backgroundColor:'#54CBFF',
        justifyContent:'center',
        alignItems: 'center'
      }}>
      <Text style={{fontSize:40, fontWeight:'bold', letterSpacing:5}}>AddScreen</Text>
    </View>
  )
}

export default AddScreen