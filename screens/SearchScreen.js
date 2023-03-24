

import React, { useState } from 'react';
import { View, TextInput, ScrollView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (text) => {
    setSearchTerm(text);
  }

  // Données simulées pour les résultats de recherche
  const searchData = [
    { name: 'John Doe', username: 'johndoe' },
    { name: 'Jane Doe', username: 'janedoe' },
    { name: 'Bob Smith', username: 'bobsmith' },
    { name: 'Alice Johnson', username: 'alicej' },
    { name: 'Tom Williams', username: 'tomw' },
  ];

  // Filtrer les résultats de recherche en fonction de la chaîne de recherche
  const filteredData = searchData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 20,margin:40,color:'white' }}>
        <Icon name="search" size={20} color="#AAAAAA" style={{ marginRight: 10 }} />
        <TextInput
          style={{ flex: 1 }}
          placeholder="Rechercher"
          onChangeText={handleSearch}
          value={searchTerm}
          
        />
      </View>
      <ScrollView style={{ padding: 10 }}>
        {filteredData.map((item, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text>@{item.username}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
