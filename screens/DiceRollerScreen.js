import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { COLORS, STYLES, SIZES, FONTS } from '../styles/theme';

const DiceRollerScreen = ({ navigation }) => {
  const [diceValue, setDiceValue] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const animationValue = useRef(new Animated.Value(0)).current;

  const rollDice = () => {
    if (isRolling) return;
    
    setIsRolling(true);
    const newValue = Math.floor(Math.random() * 6) + 1;
    
    // Reset animation
    animationValue.setValue(0);
    
    // Create rapid face-changing animation
    Animated.sequence([ 
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ]).start(() => {
      setDiceValue(newValue);
      setIsRolling(false);
    });
  };

  const renderDiceFace = (value) => {
    const dotStyle = {
      width: 25, // increased size for dots
      height: 25, // increased size for dots
      borderRadius: 12.5, // rounded circle
      backgroundColor: '#FFF',
      position: 'absolute',
    };

    const positions = {
      1: [{ top: '50%', left: '50%' }],
      2: [{ top: '25%', left: '25%' }, { top: '75%', left: '75%' }],
      3: [{ top: '25%', left: '25%' }, { top: '50%', left: '50%' }, { top: '75%', left: '75%' }],
      4: [{ top: '25%', left: '25%' }, { top: '25%', left: '75%' }, { top: '75%', left: '25%' }, { top: '75%', left: '75%' }],
      5: [{ top: '25%', left: '25%' }, { top: '25%', left: '75%' }, { top: '50%', left: '50%' }, { top: '75%', left: '25%' }, { top: '75%', left: '75%' }],
      6: [{ top: '25%', left: '25%' }, { top: '25%', left: '75%' }, { top: '50%', left: '25%' }, { top: '50%', left: '75%' }, { top: '75%', left: '25%' }, { top: '75%', left: '75%' }],
    };

    return positions[value].map((pos, index) => (
      <View
        key={index}
        style={[
          dotStyle,
          {
            top: pos.top,
            left: pos.left,
            transform: [{ translateX: -12.5 }, { translateY: -12.5 }],
          },
        ]}
      />
    ));
  };

  const [currentFace, setCurrentFace] = useState(1);

  useEffect(() => {
    if (isRolling) {
      const interval = setInterval(() => {
        setCurrentFace(Math.floor(Math.random() * 6) + 1);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isRolling]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>6-Sided Dice</Text>
      
      <View style={styles.diceContainer}>
        {renderDiceFace(isRolling ? currentFace : diceValue)}
      </View>
      
      <TouchableOpacity 
        style={[styles.button, isRolling && styles.buttonDisabled]} 
        onPress={rollDice}
      >
        <Text style={styles.buttonText}>{isRolling ? 'Rolling...' : 'Roll Dice'}</Text>
      </TouchableOpacity>

      <View style={styles.otherOptionsContainer}>
        <Text style={styles.otherOptionsTitle}>Other Dice Options</Text>
        <View style={styles.otherOptionsButtons}>
          <TouchableOpacity
            style={[styles.otherOptionButton, { backgroundColor: '#FF5722' }] }
            onPress={() => navigation.navigate('TwentySidedDice')}
          >
            <Text style={styles.otherOptionButtonText}>20-Sided Dice</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.padding,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...FONTS.h1,
    color: COLORS.casinoGold,
    marginBottom: SIZES.padding,
    textAlign: 'center',
    textShadowColor: COLORS.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  diceContainer: {
    width: 150,
    height: 150,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    marginBottom: SIZES.padding * 2,
    ...STYLES.card,
    position: 'relative',
  },
  button: {
    ...STYLES.button,
    width: '100%',
    maxWidth: 300,
    marginBottom: SIZES.padding * 2,
  },
  buttonDisabled: {
    backgroundColor: COLORS.darkGray,
    opacity: 0.7,
  },
  buttonText: {
    ...STYLES.buttonText,
  },
  otherOptionsContainer: {
    width: '100%',
    maxWidth: 300,
    marginTop: SIZES.padding,
    ...STYLES.card,
  },
  otherOptionsTitle: {
    ...FONTS.h3,
    color: COLORS.casinoGold,
    textAlign: 'center',
    marginBottom: SIZES.padding,
  },
  otherOptionsButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  otherOptionButton: {
    ...STYLES.button,
    flex: 1,
  },
  otherOptionButtonText: {
    ...STYLES.buttonText,
  },
});

export default DiceRollerScreen;
