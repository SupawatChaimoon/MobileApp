import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, STYLES, SIZES, FONTS } from '../styles/theme';
import AnimatedDigit from '../components/AnimatedDigit';

const LotteryPickerScreen = ({ navigation }) => {
  const [lotteryNumber, setLotteryNumber] = useState('000000');
  const [isAnimating, setIsAnimating] = useState(false);

  const generateLotteryNumber = () => {
    setIsAnimating(true);
    let number = '';
    for (let i = 0; i < 6; i++) {
      number += Math.floor(Math.random() * 10).toString();
    }
    
    // Delay setting the final number to allow animation to complete
    setTimeout(() => {
      setLotteryNumber(number);
      setIsAnimating(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>6-Digit Lottery</Text>
      <View style={styles.numberContainer}>
        {lotteryNumber.split('').map((digit, index) => (
          <AnimatedDigit
            key={index}
            digit={digit}
            isAnimating={isAnimating}
            size="small"
          />
        ))}
      </View>
      
      <TouchableOpacity 
        style={[styles.button, isAnimating && styles.buttonDisabled]} 
        onPress={generateLotteryNumber}
        disabled={isAnimating}
      >
        <Text style={styles.buttonText}>
          {isAnimating ? 'Rolling...' : 'Generate Number'}
        </Text>
      </TouchableOpacity>

      <View style={styles.otherOptionsContainer}>
        <Text style={styles.otherOptionsTitle}>Other Lottery Options</Text>
        <View style={styles.otherOptionsButtons}>
          <TouchableOpacity
            style={[styles.otherOptionButton, { backgroundColor: COLORS.casinoRed }]}
            onPress={() => navigation.navigate('TwoDigitPicker')}
          >
            <Text style={styles.otherOptionButtonText}>2-Digit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.otherOptionButton, { backgroundColor: COLORS.casinoRed }]}
            onPress={() => navigation.navigate('ThreeDigitPicker')}
          >
            <Text style={styles.otherOptionButtonText}>3-Digit</Text>
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
  numberContainer: {
    flexDirection: 'row',
    marginBottom: SIZES.padding * 2,
    gap: SIZES.base,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    ...STYLES.button,
    width: '100%',
    maxWidth: 300,
    marginBottom: SIZES.padding * 2,
  },
  buttonDisabled: {
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
    padding: SIZES.padding,
  },
  otherOptionsTitle: {
    ...FONTS.h3,
    color: COLORS.casinoGold,
    textAlign: 'center',
    marginBottom: SIZES.padding,
  },
  otherOptionsButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SIZES.base,
  },
  otherOptionButton: {
    ...STYLES.button,
    flex: 1,
  },
  otherOptionButtonText: {
    ...STYLES.buttonText,
  },
});

export default LotteryPickerScreen; 