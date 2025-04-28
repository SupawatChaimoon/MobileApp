import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS, FONTS, SHADOWS } from '../styles/theme';

const HistoryScreen = () => {
  // Updated dummy data
  const dummyHistory = [
    { id: 1, type: 'Yes/No', result: 'Yes', timestamp: '2024-03-20 15:30' },
    { id: 2, type: 'Lottery', result: '4-15-22-36-41-58', timestamp: '2024-03-20 14:45' },
    { id: 3, type: 'Dice Roller', result: '6', timestamp: '2024-03-20 13:20' },
    { id: 4, type: 'Coin Flip', result: 'Heads', timestamp: '2024-03-20 12:10' },
    { id: 5, type: 'Spinner Wheel', result: 'Selected: "Go for a walk"', timestamp: '2024-03-20 11:00' },
    { id: 6, type: 'Fortune Cookie', result: '"A fresh start will put you on your way."', timestamp: '2024-03-20 10:30' },
    { id: 7, type: 'Coin Flip', result: 'Tails', timestamp: '2024-03-20 09:45' },
    { id: 8, type: 'Spinner Wheel', result: 'Selected: "Order Pizza"', timestamp: '2024-03-20 09:00' },
    { id: 9, type: 'Fortune Cookie', result: '"Happiness is around the corner."', timestamp: '2024-03-20 08:30' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity History</Text>
      <ScrollView style={styles.historyList}>
        {dummyHistory.map((item) => (
          <View key={item.id} style={styles.historyItem}>
            <View style={styles.historyItemHeader}>
              <Text style={styles.historyType}>{item.type}</Text>
              <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
            <Text style={styles.result}>{item.result}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 20,
  },
  title: {
    ...FONTS.h1,
    color: COLORS.casinoGold,
    marginBottom: 20,
    textAlign: 'center',
  },
  historyList: {
    flex: 1,
  },
  historyItem: {
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    ...SHADOWS.medium,
  },
  historyItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  historyType: {
    ...FONTS.h3,
    color: COLORS.casinoGold,
  },
  timestamp: {
    ...FONTS.body4,
    color: COLORS.white,  // Updated here
  },
  result: {
    ...FONTS.h2,
    color: COLORS.white,
  },
});


export default HistoryScreen;
