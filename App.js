/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,  { useState, useEffect } from 'react';
import type {Node} from 'react';
import http from "./endpoint";

// import fakeData from "./dummyData.json";
import {
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  // useColorScheme,
  Button,
  View,
  FlatList,
} from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const getData = () => {
 return http.get('/users?page=2');

};


const App: () => Node = () => {
  const [fakeData, setfakeData] = useState()
  const [count, setcount] = useState(0)
  let countB;
  useEffect(() => {
    getData().then(res=> {
      setfakeData(res.data.data);
    }).catch(err=>console.log(err))
  },[]);
const doIncrement = () => {
  countB = count + 1;
  setcount(countB)
console.log('count',count)
}
  return (
   <View>
     <Button title="Tipa mari di" onPress={doIncrement}/>
    <Text>bla bla</Text>
    <Image source={{
    uri: 'https://reactjs.org/logo-og.png', method: 'POST', headers: {
      Pragma: 'no-cache'
    },
    body: 'Your Body goes here'
  }}
  style={{ width: 400, height: 400 }}
    />
     <TouchableOpacity>
        <Text>Simple Get Call</Text>
      </TouchableOpacity>
      <Text>{count}</Text>
     <FlatList
     data={fakeData}
     renderItem={({item}) => { return <Text>{item.first_name}</Text>}}
     keyExtractor={item => item.id}
     />
  
     </View>
  );
};


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
