import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import {result} from './styles'
import {useSelector} from 'react-redux'

const Result = () => {

  const score = useSelector(state => state.score)

  return (
    <SafeAreaView style={result.container}>
      <Text style={result.text}>Your score is {score}</Text>
    </SafeAreaView>
  )
}

export {Result}
