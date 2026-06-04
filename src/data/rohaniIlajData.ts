export interface RohaniRemedy {
  id: string;
  problem: string;
  category: "mental" | "physical" | "family" | "protection";
  symptoms: string[];
  remedy: string;
  recitation: string;
  durationDays: number;
  quranicReference: string;
  precaution: string;
}

export const rohaniIlajData: RohaniRemedy[] = [
  {
    id: "r-1",
    problem: "Relief from Stress, Anxiety and Fear",
    category: "mental",
    symptoms: [
      "Frequent panic attacks or unexplained fear",
      "Restlessness and inability to sleep (insomnia)",
      "Constant negative thoughts and overthinking"
    ],
    remedy: "After every obligatory (Farz) prayer, place your right hand on your forehead and recite the prescribed name of Allah. Additionally, listen to Surah Ar-Rahman once daily.",
    recitation: "Recite 'يَا قَوِيُّ' (Ya Qawiyyu - O Almighty) 11 times followed by Ayat-ul-Kursi once.",
    durationDays: 21,
    quranicReference: "Surah Rad, Verse 28: 'Verily, in the remembrance of Allah do hearts find rest.'",
    precaution: "Maintain cleanliness, perform ablution (Wudu) before recitation, and ensure five times daily prayers are performed punctually."
  },
  {
    id: "r-2",
    problem: "Cure for Evil Eye (Nazar-e-Bad) & Envy",
    category: "protection",
    symptoms: [
      "Sudden downfall in health or business without medical cause",
      "Yawning excessively during prayer or reading Quran",
      "Unexplained domestic arguments and bad mood"
    ],
    remedy: "Recite the Four Quls (Surah Al-Kafirun, Surah Al-Ikhlas, Surah Al-Falaq, and Surah An-Nas) and blow on the affected person. You can also write down and keep these verses for spiritual safety.",
    recitation: "Recite the Four Quls 3 times each, followed by Durood-e-Ibrahimi 3 times at the beginning and end.",
    durationDays: 7,
    quranicReference: "Surah Al-Isra, Verse 82: 'And We send down of the Qur'an that which is a healing and a mercy for the believers.'",
    precaution: "Avoid showing off wealth, blessings, or children unnecessarily, and recite morning and evening adhkar (supplications)."
  },
  {
    id: "r-3",
    problem: "Harmony and Reconciliation in Marital Relations",
    category: "family",
    symptoms: [
      "Constant small arguments escalating to hatred",
      "Lack of trust and affection between husband and wife",
      "Interference of negative vibes in domestic peace"
    ],
    remedy: "Both or one of the spouses should recite the sacred attributes of Allah. Blow on water or tea and drink together. Pray for blessing in marital life.",
    recitation: "Recite 'يَا وَدُودُ يَا جَامِعُ' (Ya Wadudu Ya Jami'u - O Loving One, O Gatherer) 100 times after Isha prayer.",
    durationDays: 41,
    quranicReference: "Surah Al-Furqan, Verse 74: 'Our Lord, grant us from among our wives and offspring comfort to our eyes.'",
    precaution: "Strive to respect each other's rights, speak with gentleness, and refrain from anger during the 41-day period."
  },
  {
    id: "r-4",
    problem: "Success in Children's Education & Character Build",
    category: "family",
    symptoms: [
      "Stubbornness and disobedience to parents",
      "Lack of focus on studies or moral behavior",
      "Getting attracted to bad company"
    ],
    remedy: "The mother or father should recite the following Quranic verse while the child is sleeping. Gently blow on their forehead.",
    recitation: "Recite 'يَا هَادِيُّ' (Ya Hadiyu - O Guide) 21 times and Surah Al-Kauthar 3 times.",
    durationDays: 40,
    quranicReference: "Surah Al-Ahqaf, Verse 15: 'And make my offspring righteous for me. Indeed, I turn to You in repentance.'",
    precaution: "Ensure the child is fed only Halal food. Set a personal example of praying and speaking kindly."
  },
  {
    id: "r-5",
    problem: "Spiritual Remedy for Chronic Physical Pain",
    category: "physical",
    symptoms: [
      "Unrelieved joint, bone, or muscle aches",
      "Persistent headaches or migraines",
      "General bodily weakness and fatigue"
    ],
    remedy: "Recite Surah Al-Fatiha (also known as Surah As-Shifa) with absolute faith and blow on the spot of pain. Alternatively, blow on olive oil and massage the aching body parts.",
    recitation: "Recite Surah Al-Fatiha 7 times with Tasmiyah (Bismillah) each time, placing your hand on the location of the pain.",
    durationDays: 11,
    quranicReference: "Surah Fatiha is established as Al-Ruqyah in authentic Hadith (Sahih Bukhari).",
    precaution: "Consult professional medical advice alongside this remedy, as Islamic medicine (Tib-e-Nabwi) encourages seeking both physical and spiritual cures."
  }
];
