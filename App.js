import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, FlatList, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [textName, onChangeTextName] = useState('');
  const [textDesc, onChangeTextDesc] = useState('');
  const [isShow, setShow] = useState(false);
  let name = '';
  let desc = '';

  const list = [{ name: textName, desc: textDesc }];

  return (
    <View style={styles.container}>

      <View style={styles.head}>
      <Text style={styles.textHead}>Họ tên: </Text>
      <Text style={styles.textHead}>MSV: </Text>

      <Button
      style={styles.button}
        title='Thêm mới'
        onPress={() => setShow(true)}
      />
      </View>

<Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}></Image>
{  isShow ? <>
<View style={styles.popUp}>
     
        <TextInput
          style={styles.input}
          value={textName}
          onChangeText={onChangeTextName}

        />

        <TextInput
          style={styles.input}
         onChangeText={onChangeTextDesc}
          value={textDesc}
        />

        <View style={styles.buttonGp}>
          <Button
            title='Hủy'
            onPress={() => setShow(false)}
          />

          <Button
            title='Lưu'
           onPress={() => onChangeTextName} 
           
          />

        </View>

     
      

</View>    
</>
: null
}

      <View style={styles.flatList}>
        <FlatList

          data={list}
          renderItem={({ item }) => (
            <>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>{item.desc}</Text>


            </>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 100
  },

  image: {
    width: 10,
    height: 10,
    marginLeft:200
  },
  text: {
    fontSize: 30,
   
  },
  input: {
    fontSize: 20,
    fontStyle: 'italic',
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonGp: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  flatList: {
    marginTop: 20,
    borderWidth: 1,
    height:100,
    width:200
  },
  textHead: {
    fontSize: 30,
    width: 400,
    marginBottom: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  button: {
    margin: 2000,
    marginLeft: 1000
  },
  head: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },

  popUp: {
    alignItems: 'center',
    margin: 20,
    borderWidth: 1,
    height: 200,
    width: '100%'
  }



});
