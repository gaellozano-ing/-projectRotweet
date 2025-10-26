import React from 'react';
import { View , FlatList } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../Styles/HomeStyles';
import globalStyles, { colors } from '../Styles/GlobalStyles';
import TweetCard from '../Screens/TweetCard';
import { useState } from 'react';
import tweetCardStyles from '../Styles/TweetCardStyles';


const HomeScreen = () => {
    const [tweets, setTweets] = useState([
    {
      id: '1',
      user: 'Gael',
      handle: '@gaelrotom',
      content: 'Mi primer tweet en RoTweet!',
      time: '2h',
    },
    {
      id: '2',
      user: 'Rotom',
      handle: '@rotom_ai',
      content: 'Analizando la red social...',
      time: '3h',
    },
  ]);
     return (
     <View style={[globalStyles.container, styles.feedContainer]}>
      <Icon
        name="twitter"
        size={40}
        color={colors.primary}
        style={{ alignSelf: 'center', marginBottom: 10 }}
      />

      <FlatList
        data={tweets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TweetCard tweet={item} />}
        ListHeaderComponent={
          <Text style={[globalStyles.titleText, styles.headerText]}>
            Inicio
          </Text>
        }
        
        ItemSeparatorComponent={() =>  <View style={tweetCardStyles.separator} /> }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;