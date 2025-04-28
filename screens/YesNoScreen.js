import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { COLORS, STYLES, SIZES, FONTS } from '../styles/theme';

const { width } = Dimensions.get('window');

// Pool of possible answers
const ANSWERS = [
  "Yes!",
"No.",
"Absolutely!",
"No way!",
"Definitely yes!",
"Definitely not!",
"Maybe... but no.",
"Maybe... yes!",
"Without a doubt, yes!",
"I don't think so.",
"Yes, definitely!",
"Not a chance.",
"The answer is yes!",
"The answer is no.",
"Positively yes!",
"Absolutely not!",
"Are you kidding? Yes!",
"Are you kidding? No!",
"It's a big YES!",
"It's a giant NO!",
"Probably yes.",
"Probably no.",
"99% yes.",
"99% no.",
"Yes, unless aliens say otherwise.",
"No, unless pigs fly.",
"Yup!",
"Nope!",
"Sure thing!",
"Nah fam.",
"Affirmative!",
"Negative!",
"As sure as the sun!",
"As doubtful as my diet.",
"1000% yes!",
"1000% no!",
"Only if you bribe me.",
"Only on Tuesdays.",
"Only after coffee.",
"Yes, but wear a helmet.",
"No, and run away.",
"Permission granted!",
"Permission DENIED.",
"Green light!",
"Red light!",
"Totally!",
"Absolutely nope!",
"Without hesitation, yes!",
"Without hesitation, no!",
"Yes, but at what cost?",
"No, because reasons.",
"Yes, queen!",
"No, peasant.",
"Yes, but bring snacks.",
"No, unless you can dance.",
"Yeehaw yes!",
"Yeehaw no!",
"Bingo! It's a yes.",
"Bingo! It's a no.",
"Approved!",
"Rejected!",
"Double yes!",
"Double no!",
"Maybe, if you believe hard enough.",
"Maybe... try again later.",
"Consult a wizard first.",
"Consult a potato first.",
"Absolutely, my liege!",
"Nay, good sir.",
"Aye aye, captain!",
"Abandon ship (no)!",
"As you wish (yes)!",
"As you wish (no)!",
"Signs point to yes.",
"Signs point to no.",
"In another timeline, yes.",
"In another timeline, no.",
"Forbidden yes.",
"Forbidden no.",
"Yes, but only in your dreams.",
"No, not even in dreams.",
"Highly encouraged!",
"Highly discouraged!",
"I'll allow it.",
"I forbid it!",
"Yes, but don't tell anyone.",
"No, and tell everyone.",
"Do it. Yes.",
"Don't do it. No.",
"Big yes energy!",
"Big no energy!",
"Yeeees!",
"Nooooope!",
"I vote yes!",
"I vote no!",
"Yes, but at your own risk.",
"No, to save humanity.",
"A glorious yes!",
"A tragic no!",
"In conclusion: YES.",

];

const YesNoScreen = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAsk = () => {
    if (!question.trim() || isAnimating) return;

    setIsAnimating(true);
    setShowAnswer(false);
    setAnswer('');

    // Simulate thinking animation
    setTimeout(() => {
      const randomAnswer = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
      setAnswer(randomAnswer);
      setShowAnswer(true);
      setIsAnimating(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ask a Question</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your yes/no question here..."
          value={question}
          onChangeText={setQuestion}
          multiline
          numberOfLines={3}
        />
      </View>

      <TouchableOpacity
        style={[styles.button, isAnimating && styles.buttonDisabled]}
        onPress={handleAsk}
        disabled={isAnimating || !question.trim()}
      >
        <Text style={styles.buttonText}>
          {isAnimating ? 'Thinking...' : 'Ask!'}
        </Text>
      </TouchableOpacity>

      {showAnswer && (
        <View style={styles.answerContainer}>
          <Text style={styles.questionText}>
            {question}
          </Text>
          <Text style={styles.answerText}>
            {answer}
          </Text>
        </View>
      )}
    </View>
  );
};

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
  inputContainer: {
    width: '100%',
    marginBottom: SIZES.padding * 2,
  },
  input: {
    backgroundColor: '#FFFDE7',
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    ...FONTS.body2,
    minHeight: 100,
    textAlignVertical: 'top',
    borderWidth: 2,
    borderColor: COLORS.casinoGold,
    color: COLORS.black,
    shadowColor: COLORS.casinoGold,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  button: {
    ...STYLES.button,
    width: '80%',
  },
  buttonDisabled: {
    backgroundColor: COLORS.darkGray,
    opacity: 0.7,
  },
  buttonText: {
    ...STYLES.buttonText,
  },
  answerContainer: {
    width: '100%',
    marginTop: SIZES.padding * 2,
    padding: SIZES.padding,
    ...STYLES.card,
    borderWidth: 2,
    borderColor: COLORS.casinoGold,
  },
  questionText: {
    ...FONTS.body3,
    color: COLORS.casinoGold,
    marginBottom: SIZES.padding,
    fontStyle: 'italic',
  },
  answerText: {
    ...FONTS.h1,
    color: COLORS.casinoGold,
    textAlign: 'center',
    textShadowColor: COLORS.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default YesNoScreen; 