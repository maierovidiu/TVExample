import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TVFocusGuideView,
} from 'react-native';

const Screen3: React.FC = () => {
  const elements = Array.from({length: 5}, (_, index) => index + 1);
  return (
    <View style={styles.container}>
      <View>
        <TVFocusGuideView autoFocus style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.5}
            tvParallaxProperties={{magnification: 1.2}}
            style={styles.button}>
            <Text style={styles.text}>Button 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            tvParallaxProperties={{magnification: 1.3}}>
            <Text style={styles.text}>Button 2</Text>
          </TouchableOpacity>
        </TVFocusGuideView>
        <TVFocusGuideView autoFocus style={styles.elemsContainer}>
          {elements.map(el => (
            <TouchableOpacity
              key={el}
              activeOpacity={0.5}
              tvParallaxProperties={{magnification: 1.3}}
              style={styles.el}>
              <Text style={styles.text2}>El {el}</Text>
            </TouchableOpacity>
          ))}
        </TVFocusGuideView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
  },
  button: {
    width: 200,
    height: 100,
    margin: 16,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  elemsContainer: {
    marginTop: 50,
    flexDirection: 'row',
  },
  el: {
    width: 100,
    height: 50,
    margin: 16,
    backgroundColor: '#42cef5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Screen3;
