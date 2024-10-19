import React from 'react';
import {
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  TVFocusGuideView,
} from 'react-native';

const Screen5: React.FC = () => {
  const DATA = Array.from({length: 20}, (_, index) => ({
    id: index.toString(),
    title: `Item ${index + 1}`,
  }));

  const HEADER_DATA = Array.from({length: 5}, (_, index) => ({
    id: `header-${index}`,
    title: `Header ${index + 1}`,
  }));

  const FOOTER_DATA = Array.from({length: 3}, (_, index) => ({
    id: `footer-${index}`,
    title: `Footer ${index + 1}`,
  }));

  interface CardProps {
    title: string;
    color: string;
  }

  const Card = ({title, color}: CardProps) => (
    <TouchableOpacity
      activeOpacity={0.5}
      tvParallaxProperties={{magnification: 1.1}}
      style={[styles.card, {backgroundColor: color}]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );

  interface HorizontalListProps {
    data: {id: string; title: string}[];
    type: 'header' | 'footer';
  }

  const HorizontalList = ({data, type}: HorizontalListProps) => {
    const cardColor = type === 'header' ? '#a0d8f2' : '#f2a0a0';

    return (
      <TVFocusGuideView autoFocus>
        <FlatList
          data={data}
          horizontal
          keyExtractor={item => item.id}
          renderItem={({item}) => <Card title={item.title} color={cardColor} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 10,
            marginBottom: type === 'footer' ? 300 : 0,
            paddingVertical: 100,
          }}
        />
      </TVFocusGuideView>
    );
  };

  return (
    <TVFocusGuideView autoFocus>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        numColumns={4}
        renderItem={({item}) => <Card title={item.title} color="#e6a2e8" />}
        ListHeaderComponent={
          <HorizontalList data={HEADER_DATA} type={'header'} />
        }
        ListFooterComponent={
          <HorizontalList data={FOOTER_DATA} type={'footer'} />
        }
        contentContainerStyle={styles.container}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
      />
    </TVFocusGuideView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 300,
    padding: 10,
    marginLeft: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card: {
    flex: 1,
    margin: 5,
    height: 270,
    width: 270,
    marginRight: 40,
    backgroundColor: '#e6a2e8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export default Screen5;
