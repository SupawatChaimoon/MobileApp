import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { COLORS, STYLES, SIZES, FONTS } from '../styles/theme';

const { width } = Dimensions.get('window');
const COIN_SIZE = Math.min(width * 0.35, 150);

const FlippingCoinScreen = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState('');
  const flipAnimation = useRef(new Animated.Value(0)).current;
  const finalRotationRef = useRef(0);

  const handleFlip = () => {
    if (isFlipping) return;

    setIsFlipping(true);
    setResult('');
    flipAnimation.setValue(0);

    // Determine result first
    const isHeads = Math.random() < 0.5;
    const result = isHeads ? 'HEADS' : 'TAILS';

    // Calculate final rotation to match result
    const baseFlips = 5 + Math.floor(Math.random() * 3); // 5-7 full rotations
    const finalRotation = baseFlips * 360 + (isHeads ? 0 : 180); // Add 180 degrees for tails
    finalRotationRef.current = finalRotation;

    flipAnimation.setValue(0);

    Animated.timing(flipAnimation, {
      toValue: finalRotation,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      setResult(result);
      setIsFlipping(false);
    });
  };

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Flip a Coin</Text>

      <View style={styles.coinContainer}>
        <View style={styles.coin}>

          {/* HEADS */}
          <Animated.View
            style={[
              styles.side,
              styles.heads,
              {
                transform: [{
                  rotateY: flipAnimation.interpolate({
                    inputRange: [0, 360],
                    outputRange: ['0deg', '360deg'],
                  })
                }]
              },
            ]}
          >
            <Text style={styles.coinText}>H</Text>
          </Animated.View>

          {/* TAILS */}
          <Animated.View
            style={[
              styles.side,
              styles.tails,
              {
                transform: [{
                  rotateY: flipAnimation.interpolate({
                    inputRange: [0, 360],
                    outputRange: ['180deg', '540deg'],  // ฝั่ง T เริ่มจาก 180°
                  })
                }]
              },
            ]}
          >
            <Text style={styles.coinText}>T</Text>
          </Animated.View>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, isFlipping && styles.buttonDisabled]}
        onPress={handleFlip}
        disabled={isFlipping}
      >
        <Text style={styles.buttonText}>
          {isFlipping ? 'Flipping...' : 'Flip Coin!'}
        </Text>
      </TouchableOpacity>

      {result !== '' && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>It's</Text>
          <Text style={styles.result}>{result}</Text>
        </View>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.padding,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
  },
  title: {
    ...FONTS.h1,
    color: COLORS.casinoGold,
    marginBottom: SIZES.padding * 2,
    textAlign: 'center',
    textShadowColor: COLORS.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  coinContainer: {
    height: COIN_SIZE,
    width: COIN_SIZE,
    marginVertical: SIZES.padding * 2,
    perspective: 1000,
  },
  coin: {
    height: '100%',
    width: '100%',
    position: 'relative',
    transformStyle: 'preserve-3d',
  },
  side: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: COIN_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
    ...STYLES.card,
  },
  heads: {
    backgroundColor: COLORS.casinoGold,
    borderWidth: 3,
    borderColor: COLORS.accent,
  },
  tails: {
    backgroundColor: COLORS.accent,
    borderWidth: 3,
    borderColor: COLORS.casinoGold,
  },
  coinText: {
    fontSize: COIN_SIZE * 0.5,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  button: {
    ...STYLES.button,
    width: '80%',
    marginTop: SIZES.padding,
  },
  buttonDisabled: {
    backgroundColor: COLORS.darkGray,
    opacity: 0.7,
  },
  buttonText: {
    ...STYLES.buttonText,
  },
  resultContainer: {
    marginTop: SIZES.padding * 2,
    alignItems: 'center',
    ...STYLES.card,
    padding: SIZES.padding,
  },
  resultLabel: {
    ...FONTS.h3,
    color: COLORS.casinoGold,
    marginBottom: SIZES.padding / 2,
  },
  result: {
    ...FONTS.h1,
    color: COLORS.casinoGold,
    textShadowColor: COLORS.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default FlippingCoinScreen; 