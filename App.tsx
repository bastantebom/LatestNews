/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Api from './services/api';
import {Author, NewsItem} from './model/news';
import {NewsCard} from './components/NewsCard';
import {FlatList} from 'react-native-gesture-handler';

function App(): JSX.Element {
  const [news, setNews] = useState<Array<NewsItem>>([] as Array<NewsItem>);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isDarkMode = useColorScheme() === 'dark';

  const getNewsItem = async (id: number) => {
    const newsItem: NewsItem = await Api.getNewsItem(id);
    return newsItem;
  };

  const getAuthorDetails = async (id: string) => {
    const author: Author = await Api.getAuthor(id);
    return author;
  };

  const getNews = async () => {
    setIsLoading(true);
    setNews([]);
    const response: number[] = await Api.getNews();
    const randomNews: Array<NewsItem> = [];
    while (randomNews.length < 10) {
      const randomNewsId = Math.floor(Math.random() * response.length) + 1;
      if (!randomNews.some(item => item.id === randomNewsId)) {
        const newsItem = await getNewsItem(response[randomNewsId]);
        const author = await getAuthorDetails(newsItem.by);
        const completeDetails = {
          ...newsItem,
          author,
        };
        randomNews.push(completeDetails);
      }
    }
    const sortedNews = randomNews.sort((a, b) => a.score - b.score);
    setNews(sortedNews);
    setIsLoading(false);
  };

  useEffect(() => {
    getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View style={styles.container}>
        {!isLoading && (
          <>
            <Text style={styles.title}>Latest News</Text>
            <FlatList
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              data={news}
              renderItem={({item}: any) => <NewsCard news={item} />}
              style={styles.list}
            />
          </>
        )}
        {isLoading && (
          <View style={styles.emptyContainer}>
            <Text style={styles.title}>Loading...</Text>
            <ActivityIndicator size="large" />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
    padding: 5,
  },
  container: {
    minHeight: '90%',
  },
  list: {
    marginTop: 10,
    paddingVertical: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default App;
