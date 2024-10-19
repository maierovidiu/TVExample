import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export interface TabButtonProps {
  onFocus: () => void;
  label: string;
  index: number;
  stateIndex: number;
}

export const TabButton = ({
  onFocus,
  label,
  index,
  stateIndex,
}: TabButtonProps) => {
  const [isFocused, setisFocused] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleOnFocus = () => {
    setIsSelected(false);
    setisFocused(true);
    onFocus();
  };

  const handleOnBlur = () => {
    setisFocused(false);
    if (index === stateIndex) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      tvParallaxProperties={{magnification: 1.07}}
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}>
      <View
        style={[
          styles.button,
          isSelected
            ? styles.buttonSelected
            : isFocused
            ? styles.buttonFocused
            : styles.buttonDefault,
          {width: 200},
        ]}>
        <Text
          style={[
            styles.text,
            isSelected
              ? styles.textSelected
              : isFocused
              ? styles.textFocused
              : styles.textDefault,
          ]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TabButton;
