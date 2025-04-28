import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
    // Casino Theme Colors
    primary: '#1A0000', // Darker casino black with red tint
    secondary: '#2A0000', // Darker charcoal with red tint
    accent: '#D4AF37', // Elegant casino gold
    accentAlt: '#8B0000', // Darker casino red
    emerald: '#2ED573', // Emerald green
    card: '#2A0000', // Card background
    cardAlt: '#3A0000', // Alternate card
    border: '#D4AF37', // Elegant gold border
    white: '#FFFFFF',
    black: '#000000',
    darkGray: '#2A0000',
    lightGray: '#F5F6FA',
    text: '#FFFFFF', // Main text
    textSecondary: '#D4AF37', // Elegant gold for secondary text
    success: '#2ED573',
    error: '#8B0000', // Darker casino red
    overlay: 'rgba(26, 0, 0, 0.75)', // Darker overlay
    casinoRed: '#8B0000', // Darker casino red
    casinoGold: '#D4AF37', // Elegant casino gold
    casinoShadow: 'rgba(212, 175, 55, 0.4)', // Elegant shadow
};

export const SIZES = {
    // Global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // Font sizes
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,

    // App dimensions
    width,
    height,
};

export const FONTS = {
    h1: { fontFamily: 'System', fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: 'System', fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: 'System', fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: 'System', fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: 'System', fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: 'System', fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: 'System', fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: 'System', fontSize: SIZES.body4, lineHeight: 22 },
};

export const SHADOWS = {
    light: {
        shadowColor: COLORS.casinoGold,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 4,
    },
    medium: {
        shadowColor: COLORS.casinoGold,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 12,
        elevation: 8,
    },
    dark: {
        shadowColor: COLORS.casinoRed,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 16,
    },
};

export const STYLES = {
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    card: {
        backgroundColor: COLORS.card,
        borderRadius: SIZES.radius * 2,
        padding: SIZES.padding,
        ...SHADOWS.medium,
        borderWidth: 2,
        borderColor: COLORS.casinoGold,
    },
    button: {
        backgroundColor: COLORS.casinoRed,
        borderRadius: SIZES.radius * 2,
        padding: SIZES.padding,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        borderWidth: 2,
        borderColor: COLORS.casinoGold,
    },
    buttonText: {
        color: COLORS.white,
        ...FONTS.h3,
        fontWeight: 'bold',
        letterSpacing: 2,
        textShadowColor: COLORS.casinoGold,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
    header: {
        backgroundColor: COLORS.casinoRed,
        padding: SIZES.padding,
        ...SHADOWS.dark,
        borderBottomWidth: 2,
        borderBottomColor: COLORS.casinoGold,
    },
    headerText: {
        color: COLORS.casinoGold,
        ...FONTS.h1,
        textShadowColor: COLORS.black,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 6,
        letterSpacing: 2,
    },
}; 