export type Language = 'en' | 'hi';

export interface Translations {
  // Nav
  navHome: string;
  navTopics: string;
  navSound: string;
  navLanguage: string;
  startLearning: string;
  exploreTopics: string;
  mastered: string;

  // Hero
  heroTagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroQuote: string;

  // Interactive Playground Hero
  playgroundTitle: string;
  playgroundHint: string;
  sliceRoti: string;
  wholeRoti: string;
  piecesCount: string;

  // Stages
  stageLook: string;
  stageTouch: string;
  stageUnderstand: string;
  stageTest: string;

  // Controls
  next: string;
  prev: string;
  restart: string;
  tryAgain: string;
  greatJob: string;
  allTopics: string;
  backToTopics: string;

  // Cultural Metaphors
  rotiMetaphor: string;
  moneyMetaphor: string;
  liftMetaphor: string;
  batteryMetaphor: string;
  chaiMetaphor: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    navHome: 'Home',
    navTopics: 'Topics',
    navSound: 'Sound',
    navLanguage: 'English',
    startLearning: 'Start Learning',
    exploreTopics: 'All Topics',
    mastered: 'Mastered',

    heroTagline: 'Understanding without complex jargon',
    heroHeadline: 'SEE MATH CLEARLY.',
    heroSubheadline: 'Touch, slice, and turn the pieces. No confusing formulas, no embarrassment. Pure visual intuition you can see with your own eyes.',
    heroQuote: '“I never really got this in school.” — That’s completely okay. Let’s start from the beginning.',

    playgroundTitle: 'Interactive Fraction Slicer',
    playgroundHint: 'Drag the slider below to cut into equal pieces. Tap slices to highlight!',
    sliceRoti: 'slices',
    wholeRoti: '1 Whole (1/1)',
    piecesCount: 'parts of',

    stageLook: '1. Look (Real Example)',
    stageTouch: '2. Touch (Play & Move)',
    stageUnderstand: '3. Brain Trap (Common Mistake)',
    stageTest: '4. Quick Check',

    next: 'Next Step',
    prev: 'Back',
    restart: 'Try Again',
    tryAgain: 'Tap to try again',
    greatJob: 'Shaabash! Perfect intuition! 🎉',
    allTopics: 'View All 8 Topics',
    backToTopics: 'Back to Topics',

    rotiMetaphor: 'Roti or pizza cut into equal pieces',
    moneyMetaphor: 'Rupees and 50 paise coins (₹1 = 100 paise)',
    liftMetaphor: 'Elevator basement floors (-1, -2 parking)',
    batteryMetaphor: 'Mobile battery charging (50% or 100%)',
    chaiMetaphor: 'Karak chai recipe (2 cups milk : 1 cup water)',
  },
  hi: {
    navHome: 'होम',
    navTopics: 'सारे विषय',
    navSound: 'आवाज़',
    navLanguage: 'हिन्दी',
    startLearning: 'शुरू करें',
    exploreTopics: 'विषय देखें',
    mastered: 'सीख लिया',

    heroTagline: 'कठिन शब्दों के बिना, सीधी समझ',
    heroHeadline: 'गणित को आँखों से समझें।',
    heroSubheadline: 'हाथ से चलाएँ, टुकड़े काटें और घुमाएँ। कोई मुश्किल फ़ॉर्मूला या डर नहीं। बस सीधी और सच्ची समझ जो कभी नहीं भूलती।',
    heroQuote: '“स्कूल में यह कभी समझ नहीं आया था।” — कोई बात नहीं, बिल्कुल शुरुआत से सीखते हैं।',

    playgroundTitle: 'रोटी या पिज़्ज़ा के टुकड़े काट कर देखें',
    playgroundHint: 'स्लाइडर को खींचें या टुकड़ों पर टैप करके देखें!',
    sliceRoti: 'टुकड़े',
    wholeRoti: 'पूरी रोटी (1 हिस्सा)',
    piecesCount: 'में से कितने हिस्से',

    stageLook: '1. देखो (असली मिसाल)',
    stageTouch: '2. चलाओ (हाथ से करो)',
    stageUnderstand: '3. दिमाग का जाल',
    stageTest: '4. परखो (छोटा सवाल)',

    next: 'अगला कदम',
    prev: 'पीछे जाएँ',
    restart: 'फिर से करें',
    tryAgain: 'दोबारा कोशिश करें',
    greatJob: 'शाबाश! बिल्कुल सही समझ! 🎉',
    allTopics: 'सारे 8 बुनियादी विषय',
    backToTopics: 'वापस विषयों पर जाएँ',

    rotiMetaphor: 'रोटी या समोसे के बराबर टुकड़े',
    moneyMetaphor: 'रुपये और 50 पैसे का हिसाब (₹1 = 100 पैसे)',
    liftMetaphor: 'लिफ्ट का बेसमेंट (-1, -2 पार्किंग)',
    batteryMetaphor: 'मोबाइल की बैटरी (50% या 100% फुल)',
    chaiMetaphor: 'कड़क चाय का हिसाब (2 कप दूध : 1 कप पानी)',
  },
};

export const TOPIC_BILINGUAL: Record<string, { hiTitle: string; hiSubtitle: string; anchorHint: string }> = {
  fractions: {
    hiTitle: 'भिन्न (Fractions)',
    hiSubtitle: 'रोटी या पिज़्ज़ा के बराबर हिस्से',
    anchorHint: '1 रोटी के 2 या 4 टुकड़े',
  },
  decimals: {
    hiTitle: 'दशमलव (Decimals)',
    hiSubtitle: 'रुपये और 50 पैसे का हिसाब',
    anchorHint: '₹1 = 100 पैसे, ₹0.50 = आधा रुपया',
  },
  percentages: {
    hiTitle: 'प्रतिशत (Percentages)',
    hiSubtitle: '100 में से कितना हिस्सा (बैटरी %)',
    anchorHint: 'मोबाइल चार्ज: 50% या 100% फुल',
  },
  numbers: {
    hiTitle: 'माइनस संख्याएँ (Negative Numbers)',
    hiSubtitle: 'शून्य से नीचे का तापमान और बेसमेंट',
    anchorHint: 'लिफ्ट का -1 बेसमेंट, लद्दाख की -5°C ठंड',
  },
  arithmetic: {
    hiTitle: 'गुणा और भाग (Multiplication & Division)',
    hiSubtitle: 'बराबर बराबर बाँटना और डिब्बों की कतारें',
    anchorHint: '12 आम 3 बच्चों में बाँटना = 4-4 आम',
  },
  'early-algebra': {
    hiTitle: 'समीकरण और तराजू (Balance Algebra)',
    hiSubtitle: 'तराजू के दोनों पलड़े बराबर रखना',
    anchorHint: 'सब्जी का तराजू: जितना इधर, उतना उधर',
  },
  ratios: {
    hiTitle: 'अनुपात (Ratios)',
    hiSubtitle: 'चाय और रंगों का सही मेल',
    anchorHint: 'कड़क चाय: 2 कप दूध + 1 कप पानी',
  },
  conversions: {
    hiTitle: 'इकाइयाँ और नाप (Conversions & Scale)',
    hiSubtitle: 'मीटर, किलोमीटर, सेकंड और मिनट',
    anchorHint: '1 किलोमीटर = 1000 मीटर',
  },
};

export function getLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  try {
    const saved = localStorage.getItem('foundu_language');
    if (saved === 'hi' || saved === 'en') return saved;
  } catch {
    // fallback
  }
  return 'en';
}

export function setLanguagePreference(lang: Language) {
  try {
    localStorage.setItem('foundu_language', lang);
  } catch {
    // fallback
  }
}
