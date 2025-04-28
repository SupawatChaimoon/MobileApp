import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS, SHADOWS } from '../styles/theme';

const AnimatedDigit = ({ digit, isAnimating, size = 'normal' }) => {
  const [displayDigit, setDisplayDigit] = useState('0');
  const animation = useRef(new Animated.Value(0)).current;
  const [isRolling, setIsRolling] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      setIsRolling(true);
      animation.setValue(0);
      
      Animated.timing(animation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => {
        setIsRolling(false);
        setDisplayDigit(digit);
      });

      // Simulate rolling effect
      const interval = setInterval(() => {
        setDisplayDigit(Math.floor(Math.random() * 10).toString());
      }, 50);

      return () => clearInterval(interval);
    } else {
      setDisplayDigit(digit);
    }
  }, [isAnimating, digit]);

  const containerStyle = [
    styles.container,
    size === 'small' && styles.smallContainer
  ];

  return (
    <View style={containerStyle}>
      <Text style={styles.digitText}>{displayDigit}</Text>
      {isRolling && (
        <Animated.View
          style={[
            styles.overlay,
            {
              opacity: animation.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0.8, 0.4, 0],
              }),
            },
          ]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 100,
    backgroundColor: COLORS.card,
    borderRadius: SIZES.radius * 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.casinoGold,
    overflow: 'hidden',
    ...SHADOWS.medium,
  },
  smallContainer: {
    width: 50,
    height: 70,
  },
  digitText: {
    ...FONTS.h1,
    color: COLORS.text,
    letterSpacing: 2,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.casinoGold,
  },
});

export default AnimatedDigit; 