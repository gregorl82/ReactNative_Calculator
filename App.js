import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'coral',
          width: '100%',
          justifyContent: 'flex-end',
          margin: 25,
          paddingRight: 20,
        }}
      >
        <Text>12345678</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <TouchableOpacity>
          <Text>%</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>&divide;</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
        <TouchableOpacity>
          <Text>&radic;</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>&times;</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
        <TouchableOpacity>
          <Text>CE</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
        <TouchableOpacity>
          <Text>C</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
        <TouchableOpacity>
          <Text>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
