import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Dimensions, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { COLORS, SIZES, FONTS, SHADOWS, STYLES } from '../styles/theme';

const { width } = Dimensions.get('window');
const WHEEL_SIZE = Math.min(width * 0.7, 350);
const OPTION_HEIGHT = 30;

const SpinnerWheelScreen = () => {
  const [options, setOptions] = useState('');
  const [confirmedOptions, setConfirmedOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const spinAnimation = useRef(new Animated.Value(0)).current;
  const finalRotationRef = useRef(0);

  const handleConfirm = () => {
    if (!options) return;
    const optionsArray = options.split('/').map(opt => opt.trim());
    if (optionsArray.length < 2) return;
    setConfirmedOptions(optionsArray);
    setSelectedOption('');
  };

  const handleSpin = () => {
    if (confirmedOptions.length < 2 || isSpinning) return;
    
    setIsSpinning(true);
    setSelectedOption('');
    
    spinAnimation.setValue(0);
    
    const numberOfOptions = confirmedOptions.length;
    const anglePerOption = 360 / numberOfOptions;
    const randomSpins = 5 + Math.floor(Math.random() * 5);
    const randomOptionIndex = Math.floor(Math.random() * numberOfOptions);
    const finalAngle = randomOptionIndex * anglePerOption;
    
    finalRotationRef.current = (randomSpins * 360) + finalAngle;
    
    Animated.sequence([
      Animated.timing(spinAnimation, {
        toValue: 0.7,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(spinAnimation, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      })
    ]).start(() => {
      setSelectedOption(confirmedOptions[randomOptionIndex]);
      setIsSpinning(false);
    });
  };

  const spin = spinAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', `${-finalRotationRef.current}deg`]
  });

  const renderWheelOptions = () => {
    if (confirmedOptions.length === 0) return null;
    
    const anglePerOption = 360 / confirmedOptions.length;
    
    return confirmedOptions.map((option, index) => {
      const angle = anglePerOption * index;
      return (
        <View
          key={index}
          style={[
            styles.optionContainer,
            {
              transform: [
                { rotate: `${angle}deg` },
                { translateY: -WHEEL_SIZE / 2 + OPTION_HEIGHT / 2 }
              ],
            }
          ]}
        >
          <Text style={styles.optionText}>{option}</Text>
        </View>
      );
    });
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.overlay}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Spinner Wheel</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter options separated by /"
                placeholderTextColor={COLORS.white}
                value={options}
                onChangeText={setOptions}
              />
              <TouchableOpacity 
                style={[styles.confirmButton, { borderColor: COLORS.casinoGold }]} 
                onPress={handleConfirm}
              >
                <Text style={styles.buttonText}>Confirm Options</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.wheelContainer}>
              <View style={styles.arrowContainer}>
                <View style={styles.arrow} />
              </View>
              <Animated.View style={[styles.wheel, { transform: [{ rotate: spin }] }]}>
                {renderWheelOptions()}
                <View style={styles.wheelCenter} />
              </Animated.View>
            </View>
            <TouchableOpacity 
              style={[
                styles.button, 
                { borderColor: COLORS.silver },
                isSpinning && styles.buttonDisabled
              ]} 
              onPress={handleSpin}
              disabled={isSpinning || confirmedOptions.length < 2}
            >
              <Text style={styles.buttonText}>{isSpinning ? 'Spinning...' : 'Spin!'}</Text>
            </TouchableOpacity>
            {selectedOption ? (
              <View style={styles.resultContainer}>
                <Text style={styles.resultLabel}>Selected:</Text>
                <Text style={styles.result}>{selectedOption}</Text>
              </View>
            ) : null}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  scrollContent: {
    flexGrow: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: SIZES.padding * 2,
  },
  contentContainer: {
    flex: 1,
    padding: SIZES.padding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...FONTS.h1,
    color: COLORS.casinoGold,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginBottom: SIZES.padding,
  },
  inputContainer: {
    width: '100%',
    maxWidth: 400,
    marginBottom: SIZES.padding,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    marginBottom: SIZES.padding,
    color: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.silver,
    ...FONTS.body3,
  },
  confirmButton: {
    backgroundColor: 'rgba(26, 26, 46, 0.8)',
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    borderWidth: 2,
    alignItems: 'center',
    ...SHADOWS.medium,
    borderColor: COLORS.casinoGold,
  },
  button: {
    backgroundColor: 'rgba(26, 26, 46, 0.8)',
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    borderWidth: 2,
    width: '100%',
    maxWidth: 200,
    alignItems: 'center',
    marginBottom: SIZES.padding,
    ...SHADOWS.medium,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    ...FONTS.h3,
    color: COLORS.white,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  wheelContainer: {
    alignItems: 'center',
    marginVertical: SIZES.padding,
    height: WHEEL_SIZE + 40,
  },
  wheel: {
    width: WHEEL_SIZE,
    height: WHEEL_SIZE,
    borderRadius: WHEEL_SIZE / 2,
    backgroundColor: 'rgba(26, 26, 46, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: COLORS.casinoGold,
    ...SHADOWS.dark,
  },
  optionContainer: {
    position: 'absolute',
    width: WHEEL_SIZE,
    height: OPTION_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    ...FONTS.body3,
    color: COLORS.white,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  wheelCenter: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.casinoGold,
    position: 'absolute',
    ...SHADOWS.medium,
  },
  arrowContainer: {
    position: 'absolute',
    top: -20,
    width: WHEEL_SIZE,
    height: 40,
    alignItems: 'center',
    zIndex: 1,
  },
  arrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 20,
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: COLORS.gold,
    transform: [{ rotate: '180deg' }],
    ...SHADOWS.medium,
  },
  resultContainer: {
    marginTop: SIZES.padding,
    alignItems: 'center',
  },
  resultLabel: {
    ...FONTS.h3,
    color: COLORS.white,
    marginBottom: SIZES.base,
  },
  result: {
    ...FONTS.h2,
    color: COLORS.white,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default SpinnerWheelScreen; 