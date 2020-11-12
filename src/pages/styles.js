import {StyleSheet, Dimensions} from 'react-native';

export const intro = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d47a1',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  heading: {
    color: 'white',
    fontSize: 70,
    fontFamily: 'RockSalt-Regular',
  },
  btn: {
    backgroundColor: '#fb8c00',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  btnText: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'RockSalt-Regular',
  },
  timerModal: {
    alignItems: 'center',
    backgroundColor: '#1e88e5',
    margin: 0,
  },
});

export const questns = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#0d47a1',
    alignItems: 'center'
  },
  questionWrap: {
    borderWidth: 2,
    borderColor: '#ff9800',
    padding: 10,
    margin: Dimensions.get('window').width * 0.05,
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  questionText: {
    color: 'white',
    fontSize: 25,
  },
  replyWrap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  replyBtn: {
    width: Dimensions.get('window').width * 0.35,
    paddingVertical: 30,
    borderRadius: 10,
    backgroundColor: '#4b830d',
    alignItems: 'center',
    justifyContent: 'center'
  },
  replyText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'RockSalt-Regular',
  }
});

export const result = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d47a1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 50,
    color: 'white'
  }
});
