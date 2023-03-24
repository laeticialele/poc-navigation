import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

const data = [
  { id: '1', image: require('../assets/post1.jpg'), likes: '256', comments: '20' },
  { id: '2', image: require('../assets/post2.jpg'), likes: '128', comments: '10' },
  { id: '3', image: require('../assets/post3.jpg'), likes: '512', comments: '40' },
  { id: '4', image: require('../assets/post4.jpg'), likes: '64', comments: '5' },
];

const HomeScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.post}>
      <Image source={item.image} style={styles.postImage} />
      <View style={styles.postFooter}>
        <View style={styles.postFooterLeft}>
          <TouchableOpacity>
            <Image source={require('../assets/heart.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/comment.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/share.webp')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.postFooterRight}>
          <Text style={styles.likes}>{item.likes} likes</Text>
          <Text style={styles.comments}>{item.comments} comments</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  post: {
    marginBottom: 20,
  },
  postImage: {
    width: '100%',
    height: 400,
  },
  postFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  postFooterLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  postFooterRight: {},
  likes: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  comments: {},
});

export default HomeScreen;
