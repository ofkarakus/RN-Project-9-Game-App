import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {SelectCategoryModal, Timer} from '../components';
import {intro} from './styles';
import axios from 'axios';
import Modal from 'react-native-modal';

const Intro = (props) => {
  const [categoryList, setCategoryList] = useState([]);
  const [categoryModalFlag, setCategoryModalFlag] = useState(false);
  const [timerModalFlag, setTimerModalFlag] = useState(false);

  fetchCategoryList = async () => {
    const {
      data: {trivia_categories},
    } = await axios.get('https://opentdb.com/api_category.php');
    setCategoryList(trivia_categories);
  };

  useEffect(() => {
    fetchCategoryList();
  }, []);

  return (
    <SafeAreaView style={intro.container}>
      <Text style={intro.heading}>Trivri!</Text>
      <Modal style={intro.timerModal} isVisible={timerModalFlag}>
        <Timer
          duration={5}
          onTimeIsUp={() => {
            setTimerModalFlag(false);
            props.navigation.navigate('QuestionsPage');
          }}
        />
      </Modal>
      <TouchableOpacity
        style={intro.btn}
        onPress={() => {
          setCategoryModalFlag(true);
        }}>
        <Text style={intro.btnText}>Start</Text>
      </TouchableOpacity>
      <SelectCategoryModal
        categories={categoryList}
        visibility={categoryModalFlag}
        onPressBackdrop={() => {
          setCategoryModalFlag(false);
        }}
        onSelectCategory={() => {
          setCategoryModalFlag(false);
          setTimerModalFlag(true);
        }}
      />
    </SafeAreaView>
  );
};

export {Intro};
