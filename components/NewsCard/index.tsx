import moment from 'moment';
import React, {useCallback} from 'react';
import {
  Alert,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NewsItem} from '../../model/news';
import styles from './styles';

export const NewsCard: React.FC<{
  news: NewsItem;
}> = ({news}) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(news.url);
    if (supported) {
      await Linking.openURL(news.url);
    } else {
      Alert.alert(`URL is not recognized: ${news.url}`);
    }
  }, [news.url]);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={handlePress}>
      <View style={styles.scoreContainer}>
        <View style={styles.twelvePointBurst}>
          <View style={styles.twelvePointBurstMain} />
          <View style={styles.twelvePointBurst30} />
          <View style={styles.twelvePointBurst60} />
        </View>
        <Text style={styles.score}>{news.score}</Text>
      </View>
      <Image
        source={{
          uri: 'https://picsum.photos/300',
          cache: 'force-cache',
        }}
        resizeMode={'cover'}
        style={styles.image}
      />
      <LinearGradient
        colors={['#0000', '#000A', '#000']}
        style={styles.titleContainer}>
        <Text style={styles.text}>{news.title}</Text>
        <View style={styles.subText}>
          <Text style={styles.author}>
            {news.by} ({news.author.karma})
          </Text>
          <Text style={styles.timestamp}>
            {moment.unix(news.time).format('MM/DD/YYYY')}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};
