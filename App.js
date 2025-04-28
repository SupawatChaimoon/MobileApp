import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // <-- import SafeAreaProvider
import { COLORS, FONTS, SHADOWS } from './styles/theme';
import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import SpinnerWheelScreen from './screens/SpinnerWheelScreen';
import FlippingCoinScreen from './screens/FlippingCoinScreen';
import YesNoScreen from './screens/YesNoScreen';
import DiceRollerScreen from './screens/DiceRollerScreen';
import TwentySidedDiceScreen from './screens/TwentySidedDiceScreen';
import LotteryPickerScreen from './screens/LotteryPickerScreen';
import TwoDigitPickerScreen from './screens/TwoDigitPickerScreen';
import ThreeDigitPickerScreen from './screens/ThreeDigitPickerScreen';
import FortuneCookieScreen from './screens/FortuneCookieScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: COLORS.casinoRed,
          borderTopWidth: 3,
          borderTopColor: COLORS.casinoGold,
          height: 60,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: COLORS.casinoGold,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarLabelStyle: {
          ...FONTS.body4,
        },
        headerStyle: {
          backgroundColor: COLORS.casinoRed,
          borderBottomWidth: 3,
          borderBottomColor: COLORS.casinoGold,
        },
        headerTintColor: COLORS.casinoGold,
        headerTitleStyle: {
          ...FONTS.h2,
          color: COLORS.casinoGold,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider> 
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: COLORS.casinoRed,
              borderBottomWidth: 3,
              borderBottomColor: COLORS.casinoGold,
            },
            headerTintColor: COLORS.casinoGold,
            headerTitleStyle: {
              ...FONTS.h2,
              color: COLORS.casinoGold,
            },
            contentStyle: {
              backgroundColor: COLORS.primary,
            },
          }}
        >
          <Stack.Screen
            name="MainTabs"
            component={MainTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SpinnerWheel"
            component={SpinnerWheelScreen}
            options={{ title: 'Spinner Wheel' }}
          />
          <Stack.Screen
            name="FlippingCoin"
            component={FlippingCoinScreen}
            options={{ title: 'Flip a Coin' }}
          />
          <Stack.Screen
            name="YesNo"
            component={YesNoScreen}
            options={{ title: 'Yes or No' }}
          />
          <Stack.Screen
            name="DiceRoller"
            component={DiceRollerScreen}
            options={{ title: '6-Sided Dice' }}
          />
          <Stack.Screen
            name="TwentySidedDice"
            component={TwentySidedDiceScreen}
            options={{ title: '20-Sided Dice' }}
          />
          <Stack.Screen
            name="LotteryPicker"
            component={LotteryPickerScreen}
            options={{ title: '6-Digit Lottery' }}
          />
          <Stack.Screen
            name="TwoDigitPicker"
            component={TwoDigitPickerScreen}
            options={{ title: '2-Digit Lottery' }}
          />
          <Stack.Screen
            name="ThreeDigitPicker"
            component={ThreeDigitPickerScreen}
            options={{ title: '3-Digit Lottery' }}
          />
          <Stack.Screen
            name="FortuneCookie"
            component={FortuneCookieScreen}
            options={{ title: 'Fortune Cookie' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
