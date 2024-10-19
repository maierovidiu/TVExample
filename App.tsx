import React from 'react';
import {StyleSheet, View} from 'react-native';
import TabNavigator from './src/navigation/TabNavigator';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  };

  return (
    <View style={backgroundStyle}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
