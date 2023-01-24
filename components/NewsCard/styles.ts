import {Platform, StyleSheet} from 'react-native';

const boxShadow: any = Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  android: {elevation: 6},
});

export default StyleSheet.create({
  container: {
    height: 240,
    marginBottom: 18,
    backgroundColor: '#eee',
    borderRadius: 24,
    marginHorizontal: 16,
    ...boxShadow,
  },
  imageContainer: {flex: 1},
  image: {
    flex: 1,
    borderRadius: 24,
    height: 300,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    height: 160,
    paddingLeft: 16,
    paddingRight: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    color: '#fff',
    paddingBottom: 24,
  },
  scoreContainer: {
    position: 'absolute',
    top: 8,
    right: 10,
    zIndex: 19,
  },
  score: {
    position: 'absolute',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 30,
    color: '#fff',
    width: 30,
    height: 30,
    textAlign: 'center',
  },
  subText: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  timestamp: {
    color: '#eee',
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'right',
  },
  author: {
    color: '#eee',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'left',
  },
  twelvePointBurst: {},
  twelvePointBurstMain: {
    width: 30,
    height: 30,
    backgroundColor: '#81B622',
  },
  twelvePointBurst30: {
    width: 30,
    height: 30,
    position: 'absolute',
    backgroundColor: '#81B622',
    top: 0,
    right: 0,
    transform: [{rotate: '30deg'}],
  },
  twelvePointBurst60: {
    width: 30,
    height: 30,
    position: 'absolute',
    backgroundColor: '#81B622',
    top: 0,
    right: 0,
    transform: [{rotate: '60deg'}],
  },
});
