import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Screen1: React.FC = () => {
  const gridSize = 5; // 5x5 grid

  const handlePress = (row: number, col: number) => {
    console.log(`Pressed button at row ${row}, column ${col}`);
  };

  return (
    <View style={styles.container}>
      {Array.from({length: gridSize}).map((_, row) => (
        <View key={row} style={styles.row}>
          {Array.from({length: gridSize}).map((_, col) => (
            <TouchableOpacity
              activeOpacity={0.5}
              tvParallaxProperties={{magnification: 1.3}}
              key={col}
              style={styles.cell}
              onPress={() => handlePress(row, col)}>
              <Text style={styles.text}>{`${row},${col}`}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 100,
    height: 100,
    margin: 16,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Screen1;
