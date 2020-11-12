import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {category} from './styles';
import axios from 'axios';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';

const SelectCategoryModal = (props) => {
  const dispatch = useDispatch();

  const fetchQuestionsData = (selectedCategory) => {
    axios
      .get('https://opentdb.com/api.php?', {
        params: {
          amount: 10,
          category: selectedCategory.id,
          type: 'boolean',
          encode: 'base64',
        },
      })
      .then(({data: {results}}) => {
        dispatch({type: 'SET_QUESTIONS', payload: {questions: results}});
      });
  };

  const renderCategories = ({item}) => {
    return (
      <TouchableOpacity
        style={category.textWrap}
        onPress={() => {
          props.onSelectCategory();
          fetchQuestionsData(item);
        }}>
        <Icon name="open-book" size={20} color="white" />
        <Text style={category.text}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      style={category.modal}
      isVisible={props.visibility}
      onBackdropPress={() => {
        props.onPressBackdrop();
      }}>
      <View style={category.container}>
        <FlatList
          keyExtractor={(item, _) => item.id.toString()}
          data={props.categories}
          renderItem={renderCategories}
        />
      </View>
    </Modal>
  );
};

export {SelectCategoryModal};
