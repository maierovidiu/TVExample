import React from 'react';
import {Dimensions, StyleSheet, View, TVFocusGuideView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from '../screens/screen1/Screen1';
import Screen2 from '../screens/screen2/Screen2';
import Screen3 from '../screens/screen3/Screen3';
import Screen4 from '../screens/screen4/Screen4';
import TabButton from '../components/tab-button/TabButton';

const {width} = Dimensions.get('window');

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#2a93c7',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: (width - 900) / 2,
    width: 950,
    maxHeight: 66,
    position: 'absolute',
    top: 45,
  },
});

const options = {
  screen1: {
    tabBarLabel: 'Screen 1',
  },
  screen2: {
    tabBarLabel: 'Screen 2',
  },
  screen3: {
    tabBarLabel: 'Screen 3',
  },
  screen4: {
    tabBarLabel: 'Screen 4',
  },
  screen5: {
    tabBarLabel: 'Screen 5',
  },
};

function MyTabBar({state, descriptors, navigation}) {
  const tabBarStyle =
    descriptors[state.routes[state.index].key].options?.tabBarStyle;

  return (
    <TVFocusGuideView
      style={[
        {
          position: 'absolute',
          top: 0,
          height: 130,
          width: width,
        },
        tabBarStyle,
      ]}
      autoFocus>
      <View style={[styles.tabBar, tabBarStyle]}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const onFocus = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <TabButton
              key={index}
              index={index}
              stateIndex={state.index}
              onFocus={onFocus}
              label={label}></TabButton>
          );
        })}
      </View>
    </TVFocusGuideView>
  );
}

const AppTabNavigator = () => (
  <BottomTab.Navigator
    screenOptions={{headerShown: false}}
    tabBar={props => <MyTabBar {...props} />}>
    <BottomTab.Screen
      name="Screen1"
      component={Screen1}
      options={options.screen1}
    />
    <BottomTab.Screen
      name="Screen2"
      component={Screen2}
      options={options.screen2}
    />
    <BottomTab.Screen
      name="Screen3"
      component={Screen3}
      options={options.screen3}
    />
    <BottomTab.Screen
      name="Screen4"
      component={Screen4}
      options={options.screen4}
    />
    <BottomTab.Screen
      name="Screen5"
      component={Screen1}
      options={options.screen5}
    />
  </BottomTab.Navigator>
);

const TabStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TabNavigator"
      component={AppTabNavigator}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default TabStack;
