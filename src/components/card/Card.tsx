import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

export interface CardProps {
  index: number;
  color: string;
  onFocus?: (index: number) => void;
}

export const Card = ({index, color, onFocus}: CardProps) => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        onFocus={() => onFocus?.(index)}
        key={index}
        style={[styles.card, {backgroundColor: color}]}
        activeOpacity={0.7}
        tvParallaxProperties={{magnification: 1.1}}
        onPress={() => console.log(`Card ${index} pressed`)}>
        <Text style={styles.text}>Card {index}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 340,
    height: 170,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  card: {
    width: 320,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Card;
