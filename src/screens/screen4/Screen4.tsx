import React, {useRef} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  TVFocusGuideView,
  ListRenderItem,
} from 'react-native';

import Card from '../../components/card/Card';

const Screen4: React.FC = () => {
  const data = Array.from({length: 10}, (_, index) => index);

  const renderItemClassic: ListRenderItem<number> = ({item: index}) => (
    <Card color={'#c73056'} index={index} />
  );

  const ref = useRef<FlatList>(null);

  const onFocus = (index: number) => {
    ref.current?.scrollToIndex({index: index, viewPosition: 0});
  };

  const renderItem: ListRenderItem<number> = ({item: index}) => (
    <Card onFocus={onFocus} index={index} color={'#4CAF50'} />
  );

  return (
    <View style={styles.container}>
      <View>
        <TVFocusGuideView autoFocus style={styles.listContainer}>
          <FlatList
            horizontal
            data={data}
            renderItem={renderItemClassic}
            keyExtractor={(_, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
          />
        </TVFocusGuideView>
        <TVFocusGuideView autoFocus style={styles.listContainer}>
          <FlatList
            ref={ref}
            renderItem={renderItem}
            horizontal
            data={data}
            keyExtractor={(_, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
          />
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
  listContainer: {
    marginTop: 60,
    paddingHorizontal: 16,
  },
  cardContainer: {
    width: 340,
    height: 170,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
});

export default Screen4;
