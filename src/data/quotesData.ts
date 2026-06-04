export interface IslamicQuote {
  id: string;
  type: "quran" | "hadith" | "saying";
  arabicText: string;
  englishText: string;
  reference: string;
  narrator?: string;
}

export const quotesData: IslamicQuote[] = [
  {
    id: "q-1",
    type: "quran",
    arabicText: "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    englishText: "Those who have believed and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah do hearts find rest.",
    reference: "Surah Ar-Ra'd [13:28]"
  },
  {
    id: "q-2",
    type: "hadith",
    arabicText: "الدُّعَاءُ مُخُّ الْعِبَادَةِ",
    englishText: "Supplication (Dua) is the very essence of worship.",
    narrator: "Prophet Muhammad (peace be upon him)",
    reference: "Sunan al-Tirmidhi 3371"
  },
  {
    id: "q-3",
    type: "quran",
    arabicText: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
    englishText: "And when My servants ask you, [O Muhammad], concerning Me - indeed I am near. I respond to the invocation of the supplicant when he calls upon Me.",
    reference: "Surah Al-Baqarah [2:186]"
  },
  {
    id: "q-4",
    type: "hadith",
    arabicText: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
    englishText: "Whoever takes a path upon which he seeks knowledge, Allah will make the path to Paradise easy for him.",
    narrator: "Prophet Muhammad (peace be upon him)",
    reference: "Sahih Muslim 2699"
  },
  {
    id: "q-5",
    type: "saying",
    arabicText: "مَنْ عَرَفَ نَفْسَهُ فَقَدْ عَرَفَ رَبَّهُ",
    englishText: "He who knows himself knows his Lord. Self-reflection is the key to spiritual enlightenment.",
    reference: "Hazrat Ali ibn Abi Talib"
  }
];
