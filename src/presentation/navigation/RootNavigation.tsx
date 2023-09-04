import React from 'react';
import { StatusBar, View, Text } from 'react-native';

function RootNavigation(): JSX.Element {
  return (
    <View style={{
      flex: 1, backgroundColor: '#333', height: '100%', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <StatusBar barStyle="dark-content" />
      <Text style={{ fontSize: 40, color: '#FFF' }}>Hello World!</Text>
    </View>
  );
}

export default RootNavigation;
