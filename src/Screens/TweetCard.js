import React from 'react';
import { View } from 'react-native';
import { Avatar, Text, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import tweetCardStyles from '../Styles/TweetCardStyles';

const TweetCard = ({
  avatarUri = null,
  name = 'RotomFan',
  username = '@rotom',
  content = 'This is a sample RoTweet ⚡',
}) => {
  return (
    <Card style={tweetCardStyles.card}>
      <Card.Content style={tweetCardStyles.contentRow}>
       <Avatar.Image
        size={48}
          source={
          avatarUri
          ?  { uri: avatarUri }
        : undefined // Sin imagen por ahora
  }
/>

        <View style={tweetCardStyles.textContainer}>
          <View style={tweetCardStyles.headerRow}>
            <Text variant="titleMedium" style={tweetCardStyles.name}>
              {name}
            </Text>
            <Text variant="bodySmall" style={tweetCardStyles.username}>
              {username}
            </Text>
          </View>
          <Text variant="bodyMedium" style={tweetCardStyles.tweetText}>
            {content}
          </Text>
          <View style={tweetCardStyles.iconRow}>
            <Icon name="chat-outline" size={20} color="#657786" />
            <Icon name="repeat" size={20} color="#657786" />
            <Icon name="heart-outline" size={20} color="#657786" />
            <Icon name="share-variant" size={20} color="#657786" />
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default TweetCard;