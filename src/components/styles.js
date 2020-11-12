import {StyleSheet, Dimensions} from 'react-native';

export const question = StyleSheet.create({});

export const category = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    marginBottom: 0,
  },
  container: {
    backgroundColor: '#1e88e5',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    maxHeight: Dimensions.get('window').height * 0.6,
  },
  textWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 10,
    fontSize: 15,
    marginLeft: 5
  },
});

export const timer = StyleSheet.create({});
