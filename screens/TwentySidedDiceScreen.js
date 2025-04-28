import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const TwentySidedDiceScreen = () => {
  const [diceValue, setDiceValue] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [currentFace, setCurrentFace] = useState(1);
  const animationValue = useRef(new Animated.Value(0)).current;

  const rollDice = () => {
    if (isRolling) return;
    
    setIsRolling(true);
    const newValue = Math.floor(Math.random() * 20) + 1;
    
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

  useEffect(() => {
    if (isRolling) {
      const interval = setInterval(() => {
        setCurrentFace(Math.floor(Math.random() * 20) + 1);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isRolling]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>20-Sided Dice</Text>
      
      <View style={styles.diceContainer}>
        <View style={styles.diceModel}>
          <Text style={styles.diceText}>{isRolling ? currentFace : diceValue}</Text>
        </View>
      </View>
      
      <TouchableOpacity 
        style={[styles.button, isRolling && styles.buttonDisabled]} 
        onPress={rollDice}
      >
        <Text style={styles.buttonText}>{isRolling ? 'Rolling...' : 'Roll Dice'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#181A20', // casino dark
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFE44D', // casino gold
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  diceContainer: {
    width: 140,
    height: 140,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceModel: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FF5722',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#FFE44D',
    shadowColor: '#FFE44D',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    transform: [
      { perspective: 1000 },
      { rotateX: '45deg' },
      { rotateZ: '45deg' }
    ],
  },
  diceText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    transform: [
      { rotateX: '-45deg' },
      { rotateZ: '-45deg' }
    ],
    textShadowColor: '#FFE44D',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6,
  },
  button: {
    backgroundColor: '#FF1A1A',
    padding: 20,
    borderRadius: 25,
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFE44D',
    shadowColor: '#FFE44D',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  buttonDisabled: {
    backgroundColor: '#A5D6A7',
    opacity: 0.7,
  },
  buttonText: {
    color: '#FFE44D',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
});

export default TwentySidedDiceScreen; 