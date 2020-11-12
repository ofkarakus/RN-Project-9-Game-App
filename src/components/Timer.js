import React from 'react';
import {Animated} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

const Timer = (props) => {
  return (
    <CountdownCircleTimer
      onComplete={() => {
        props.onTimeIsUp();
      }}
      isPlaying
      duration={props.duration}
      colors={[
        ['#1b5e20', 0.2],
        ['#e65100', 0.4],
        ['#7b1fa2', 0.4],
      ]}>
      {({remainingTime, animatedColor}) => (
        <Animated.Text style={{color: animatedColor, fontSize: 50}}>
          {remainingTime}
        </Animated.Text>
      )}
    </CountdownCircleTimer>
  );
};

export {Timer};
