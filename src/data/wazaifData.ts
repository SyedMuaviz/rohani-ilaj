export interface Wazeefa {
  id: string;
  title: string;
  category: "rizq" | "protection" | "health" | "success" | "general";
  arabicText: string;
  transliteration: string;
  translation: string;
  benefits: string;
  method: string;
  recommendedCount: number;
  recommendedTime: string;
  audioUrl: string;
  duration: string;
}

export const wazaifData: Wazeefa[] = [
  {
    id: "w-1",
    title: "Wazeefa for Abundant Provision (Rizq)",
    category: "rizq",
    arabicText: "يَا بَاسِطُ يَا رَزَّاقُ",
    transliteration: "Ya Basitu Ya Razzaqu",
    translation: "O Expander, O Provider of Sustenance",
    benefits: "Brings abundance in sustenance, removes financial distress, and blesses business endeavors.",
    method: "Recite 11 times Durood Shareef before and after, then recite this beautiful attributes combination after Fajr prayer.",
    recommendedCount: 313,
    recommendedTime: "After Fajr Prayer",
    audioUrl: "/audio/ya-razzaqu.mp3",
    duration: "1:24"
  },
  {
    id: "w-2",
    title: "Protection from Adversities and Evils",
    category: "protection",
    arabicText: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    transliteration: "Bismillahilladzi la yadurru ma'asmihi syai'un fil ardi wa la fis sama'i wa huwas sami'ul 'alim",
    translation: "In the name of Allah, with Whose name nothing can cause harm in the earth nor in the heaven, and He is the All-Hearing, the All-Knowing.",
    benefits: "Protects against sudden calamities, black magic, envy (Hasad), and evil forces.",
    method: "Recite daily in the morning and evening. Best protection shield for home and children.",
    recommendedCount: 3,
    recommendedTime: "Morning & Evening",
    audioUrl: "/audio/bismillah.mp3",
    duration: "2:05"
  },
  {
    id: "w-3",
    title: "Wazeefa for Healing and Good Health",
    category: "health",
    arabicText: "يَا سَلَامُ يَا شَافِيُّ",
    transliteration: "Ya Salamu Ya Shafiyyu",
    translation: "O Source of Peace, O Giver of Healing",
    benefits: "Provides relief from physical illnesses, calms anxiety, and restores mental well-being.",
    method: "Recite and blow on clean drinking water, then let the patient drink it. Can also be blown on the palm and rubbed over the area of pain.",
    recommendedCount: 111,
    recommendedTime: "Any time of need",
    audioUrl: "/audio/ya-shafi.mp3",
    duration: "1:10"
  },
  {
    id: "w-4",
    title: "Success in Exams, Interviews & Goals",
    category: "success",
    arabicText: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي",
    transliteration: "Rabbi-shrah li sadri wa yassir li amri wahlul 'uqdatan min lisani yafqahu qawli",
    translation: "O my Lord! Open for me my chest, ease my task for me, and untie the knot from my tongue that they may understand my speech.",
    benefits: "Removes nervousness, boosts confidence, enhances memory, and grants eloquent articulation.",
    method: "Recite before starting study sessions or just before entering an exam hall/interview room.",
    recommendedCount: 7,
    recommendedTime: "Before starting tasks",
    audioUrl: "/audio/rabbi-shrah-li.mp3",
    duration: "1:45"
  },
  {
    id: "w-5",
    title: "Removal of Grief and Anxiety",
    category: "general",
    arabicText: "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    transliteration: "La ilaha illa anta subhanaka inni kuntu minaz-zalimin",
    translation: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    benefits: "Also known as Ayat-e-Karima. Best remedy for severe worries, depression, confinement, and seemingly impossible obstacles.",
    method: "Recite in times of extreme distress or grief. Best recited with sincere repentance.",
    recommendedCount: 100,
    recommendedTime: "Night time / Tahajjud",
    audioUrl: "/audio/ayat-karima.mp3",
    duration: "3:12"
  },
  {
    id: "w-6",
    title: "Divine Love and Mental Peace",
    category: "general",
    arabicText: "يَا وَدُودُ",
    transliteration: "Ya Wadudu",
    translation: "O Loving One",
    benefits: "Creates love and harmony in family relations, resolves marital discord, and brings internal tranquility.",
    method: "Recite and blow on sweet food items to share with family members to increase mutual love and affection.",
    recommendedCount: 1001,
    recommendedTime: "After Isha Prayer",
    audioUrl: "/audio/ya-wadud.mp3",
    duration: "1:15"
  }
];
