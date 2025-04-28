import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library
import { COLORS, FONTS, SHADOWS, STYLES } from '../styles/theme';

const ProfileScreen = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const scaleAnim = new Animated.Value(1);

  const handleLogout = () => {
    setIsLoggingOut(true);
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Here you would typically handle the actual logout logic
      console.log('Logout pressed');
      setIsLoggingOut(false);
    });
  };

  const userStats = {
    mostUsed: 'Dice Roller',
    totalUses: 42,
    favoriteGame: 'Lottery Picker',
    lastActive: '2 hours ago',
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.profileHeader}>
        <Icon name="person-circle-outline" size={120} color={COLORS.casinoGold} /> {/* Replace image with icon */}
        <Text style={styles.username}>Player</Text>
      </View>

      <View style={styles.statsContainer}>
        <Text style={styles.sectionTitle}>Your Stats</Text>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Most Used:</Text>
          <Text style={styles.statValue}>{userStats.mostUsed}</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Total Uses:</Text>
          <Text style={styles.statValue}>{userStats.totalUses}</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Favorite Game:</Text>
          <Text style={styles.statValue}>{userStats.favoriteGame}</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Last Active:</Text>
          <Text style={styles.statValue}>{userStats.lastActive}</Text>
        </View>
      </View>

      <Animated.View style={[styles.logoutContainer, { transform: [{ scale: scaleAnim }] }]}>
        <TouchableOpacity 
          style={[styles.logoutButton, isLoggingOut && styles.logoutButtonPressed]} 
          onPress={handleLogout}
          disabled={isLoggingOut}
        >
          <Icon name="log-out-outline" size={24} color={COLORS.white} style={styles.logoutIcon} />
          <Text style={styles.logoutText}>
            {isLoggingOut ? 'Logging out...' : 'Logout'}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40, // Space for the Tab Bar
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  username: {
    ...FONTS.h1,
    color: COLORS.casinoGold,
  },
  statsContainer: {
    flex: 1,
    marginBottom: 30,
  },
  sectionTitle: {
    ...FONTS.h2,
    color: COLORS.casinoGold,
    marginBottom: 20,
    textAlign: 'center',
  },
  statCard: {
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    ...SHADOWS.medium,
  },
  statLabel: {
    ...FONTS.body3,
    color: COLORS.white,
    marginBottom: 5,
  },
  statValue: {
    ...FONTS.h3,
    color: COLORS.white,
  },
  logoutContainer: {
    marginTop: 'auto',
    paddingHorizontal: 20,
  },
  logoutButton: {
    ...STYLES.button,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.casinoRed,
    paddingVertical: 15,
  },
  logoutButtonPressed: {
    opacity: 0.8,
  },
  logoutIcon: {
    marginRight: 10,
  },
  logoutText: {
    ...STYLES.buttonText,
    color: COLORS.white,
  },
});

export default ProfileScreen;
