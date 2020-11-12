import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {Timer} from '../components';
import {useSelector, useDispatch} from 'react-redux';
import {questns} from './styles';
import base64 from 'react-native-base64';

const Questions = (props) => {
  const [questionIndex, setQuestionIndex] = useState(1);
  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const questionOnScreen = useRef(null);
  const forwardQuestion = () => {
    questionOnScreen.current.scrollToIndex({index: questionIndex});
  };

  const renderQuestions = ({item}) => {
    return (
      <View style={questns.questionWrap}>
        <Text style={questns.questionText}>{base64.decode(item.question)}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={questns.container}>
      <Timer
        duration={30}
        onTimeIsUp={() => {
          props.navigation.reset({
            index: 0,
            routes: [{name: 'ResultPage'}],
          });
        }}
        style={questns.timer}
      />
      <View style={{alignSelf: 'stretch'}}>
        <FlatList
          scrollEnabled={false}
          ref={questionOnScreen}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(_, index) => index.toString()}
          data={questions}
          renderItem={renderQuestions}
        />
      </View>
      <View style={questns.replyWrap}>
        <TouchableOpacity
          style={questns.replyBtn}
          onPress={() => {
            if (questionIndex === questions.length) {
              props.navigation.reset({
                index: 0,
                routes: [{name: 'ResultPage'}],
              });
            } else {
              setQuestionIndex(questionIndex + 1);
              forwardQuestion();
            }
            if (
              base64.decode(questions[questionIndex - 1].correct_answer) ==
              'True'
            ) {
              dispatch({type: 'GIVE_POINTS', payload: {result: true}});
            } else {
              dispatch({type: 'GIVE_POINTS', payload: {result: false}});
            }
          }}>
          <Text style={questns.replyText}>True</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (questionIndex === questions.length) {
              props.navigation.reset({
                index: 0,
                routes: [{name: 'ResultPage'}],
              });
            } else {
              setQuestionIndex(questionIndex + 1);
              forwardQuestion();
            }
            if (
              base64.decode(questions[questionIndex - 1].correct_answer) ==
              'False'
            ) {
              dispatch({type: 'GIVE_POINTS', payload: {result: true}});
            } else {
              dispatch({type: 'GIVE_POINTS', payload: {result: false}});
            }
          }}
          style={[questns.replyBtn, {backgroundColor: '#b71c1c'}]}>
          <Text style={questns.replyText}>False</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export {Questions};
