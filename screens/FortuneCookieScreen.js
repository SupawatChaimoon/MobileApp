import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, STYLES, SIZES, FONTS } from '../styles/theme';

const fortunes = [
  "Dream big, work hard, and stay humble.",
  "Your potential is endless — reach for the stars.",
  "Today's struggles are the seeds of tomorrow's success.",
  "Small steps every day lead to big achievements.",
  "Believe in yourself and magic will happen.",
  "Courage doesn't always roar — sometimes it's a whisper to keep going.",
  "The best view comes after the hardest climb.",
  "Your kindness will light the way for others.",
  "Success begins at the end of your comfort zone.",
  "Each new day is a blank page in your story — write wisely.",
  "Opportunities don't happen; you create them.",
  "Patience and perseverance conquer all obstacles.",
  "Kindness is a language that echoes forever.",
  "Your dreams are valid — chase them relentlessly.",
  "Stay curious, stay passionate, stay unstoppable.",
  "Growth is never by mere chance; it is the result of working together.",
  "Smile — it's your best armor.",
  "Great things are done by a series of small things brought together.",
  "Don't wait for opportunity. Create it.",
  "Your energy introduces you before you even speak.",
  "You are stronger than you think.",
  "A beautiful day begins with a beautiful mindset.",
  "Mistakes are proof that you are trying.",
  "Your vibe attracts your tribe.",
  "Success grows from optimism and action.",
  "A grateful heart is a magnet for miracles.",
  "Dreams don't work unless you do.",
  "Leap and the net will appear.",
  "Keep your face always toward the sunshine.",
  "Your inner light is your greatest gift.",
  "Doubt kills more dreams than failure ever will.",
  "Be fearless in the pursuit of what sets your soul on fire.",
  "Hustle in silence and let your success make the noise.",
  "A river cuts through rock not by power, but by persistence.",
  "The comeback is always stronger than the setback.",
  "A little progress each day adds up to big results.",
  "Trust the timing of your life.",
  "Focus on the step in front of you, not the whole staircase.",
  "Your story is still being written — make it a masterpiece.",
  "Choose joy today and every day.",
  "Every accomplishment starts with the decision to try.",
  "You were born to stand out, not fit in.",
  "In the middle of every difficulty lies opportunity.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Turn your wounds into wisdom.",
  "Adventure awaits those who dare.",
  "Wherever life plants you, bloom with grace.",
  "Positive mind. Positive vibes. Positive life.",
  "The secret to getting ahead is getting started.",
  "Live life as if everything is rigged in your favor.",
  "Kind hearts are the gardens. Kind thoughts are the roots.",
  "Success is liking yourself, liking what you do, and liking how you do it.",
  "Don't limit your challenges; challenge your limits.",
  "Fall seven times, stand up eight.",
  "Be the type of energy you want to attract.",
  "It always seems impossible until it's done.",
  "The dream is free. The hustle is sold separately.",
  "Hardships often prepare ordinary people for extraordinary destiny.",
  "Even the darkest night will end and the sun will rise.",
  "Turn your can'ts into cans and your dreams into plans.",
  "You are capable of amazing things.",
  "If you stumble, make it part of the dance.",
  "Take the risk or lose the chance.",
  "Stay positive, work hard, make it happen.",
  "Don't be afraid to be a beginner.",
  "You didn't come this far to only come this far.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Stars can't shine without darkness.",
  "There's no elevator to success — you have to take the stairs.",
  "Don't be pushed by your problems. Be led by your dreams.",
  "Your only limit is you.",
  "Celebrate every tiny victory.",
  "Difficult roads often lead to beautiful destinations.",
  "Chase your dreams with open arms and fearless heart.",
  "If you believe in it enough, it becomes real.",
  "The best preparation for tomorrow is doing your best today.",
  "Your future is created by what you do today, not tomorrow.",
  "Dare to begin, dare to fail, dare to succeed.",
  "Success is built on a mountain of failures.",
  "Every storm runs out of rain.",
  "Rise above the storm and you will find the sunshine.",
  "Be so good they can't ignore you.",
  "It's not whether you get knocked down, it's whether you get up.",
  "Happiness is found when you stop comparing yourself to others.",
  "Take time to make your soul happy.",
  "Sometimes the right path is not the easiest one.",
  "Grow through what you go through.",
  "A positive attitude brings positive results.",
  "Magic happens outside your comfort zone.",
  "Be proud of how far you've come.",
  "You are the author of your own story.",
  "The key to success is to start before you are ready.",
  "Let your faith be bigger than your fear.",
  "Never give up on something you really want.",
  "You are braver than you believe, stronger than you seem, and smarter than you think.",
  "Success doesn't come to you, you go to it.",
  "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change."
];


const FortuneCookieScreen = () => {
  const [fortune, setFortune] = useState("Open your fortune cookie!");

  const getNewFortune = () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cookieContainer}>
        <Text style={styles.fortuneText}>{fortune}</Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={getNewFortune}>
        <Text style={styles.buttonText}>Open Fortune Cookie</Text>
      </TouchableOpacity>
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
  cookieContainer: {
    ...STYLES.card,
    padding: SIZES.padding * 2,
    marginBottom: SIZES.padding * 2,
    width: '100%',
    maxWidth: 300,
    minHeight: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.casinoGold,
  },
  fortuneText: {
    ...FONTS.body2,
    textAlign: 'center',
    color: COLORS.casinoGold,
    fontStyle: 'italic',
    lineHeight: 30,
  },
  button: {
    ...STYLES.button,
    width: '100%',
    maxWidth: 300,
  },
  buttonText: {
    ...STYLES.buttonText,
  },
});

export default FortuneCookieScreen; 