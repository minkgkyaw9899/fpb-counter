/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, PixelRatio, Text, View} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        gap: 32,
      }}>
      <Text style={{fontSize: 24 / PixelRatio.getFontScale()}}>
        You click button {count} {count === 1 ? 'time' : 'times'}
      </Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={() => setCount(count + 1)} title="Click me" />
      </View>
    </View>
  );
};

export default App;
