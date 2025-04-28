import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { COLORS, SIZES, FONTS, SHADOWS, STYLES } from '../styles/theme';

const NAV_OPTIONS = [
  { label: 'Spinner Wheel', screen: 'SpinnerWheel' },
  { label: 'Flip a Coin', screen: 'FlippingCoin' },
  { label: 'Yes or No', screen: 'YesNo' },
  { label: 'Dice Roller', screen: 'DiceRoller' },
  { label: 'Lottery Picker', screen: 'LotteryPicker' },
  { label: 'Fortune Cookie', screen: 'FortuneCookie' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.headerTitle}>Chooz</Text>
        <Text style={styles.headerSubtitle}>Your Ultimate Decision Maker</Text>
      </View>
      <ScrollView contentContainerStyle={styles.gridContainer} showsVerticalScrollIndicator={false}>
        {NAV_OPTIONS.map((option, idx) => (
          <TouchableOpacity
            key={option.screen}
            style={styles.cardBox}
            onPress={() => navigation.navigate(option.screen)}
            activeOpacity={0.85}
          >
            <Text style={styles.cardText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  headerBox: {
    ...STYLES.header,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: SIZES.padding * 1.5,
    paddingBottom: SIZES.padding,
    borderTopLeftRadius: SIZES.radius * 2,
    borderTopRightRadius: SIZES.radius * 2,
    marginBottom: SIZES.padding,
  },
  headerTitle: {
    ...STYLES.headerText,
    fontSize: 38,
    marginBottom: 4,
  },
  headerSubtitle: {
    ...FONTS.h3,
    color: COLORS.casinoGold,
    letterSpacing: 1,
    textShadowColor: COLORS.white,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  gridContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    gap: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
  },
  cardBox: {
    width: '90%',
    height: 120,
    marginVertical: SIZES.base,
    backgroundColor: COLORS.card,
    borderRadius: SIZES.radius * 2,
    borderWidth: 2,
    borderColor: COLORS.casinoGold,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.medium,
    shadowColor: COLORS.casinoGold,
    elevation: 8,
  },
  cardText: {
    color: COLORS.white,
    ...FONTS.h2,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
    textShadowColor: COLORS.casinoGold,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    paddingHorizontal: SIZES.padding,
  },
});

export default HomeScreen;