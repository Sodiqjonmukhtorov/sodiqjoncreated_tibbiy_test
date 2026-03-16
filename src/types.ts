import { GoogleGenAI } from "@google/genai";

export const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Arterial qon bosimini o‘lchashda manjetaning pastki qismi tirsak buklamidan necha sm yuqorida joylashishi kerak?",
    options: ["1,5 sm", "2,5 sm", "4 sm", "5 sm"],
    answer: "B"
  },
  {
    id: 2,
    question: "Qon bosimini o‘lchashda manjetadan havoni qanday tezlikda chiqarish tavsiya etiladi?",
    options: ["Sekundiga 10 mm.sim.ust", "Sekundiga 2-3 mm.sim.ust", "Sekundiga 5-7 mm.sim.ust", "Tezlikning ahamiyati yo‘q"],
    answer: "B"
  },
  {
    id: 3,
    question: "Arterial qon bosimini takroriy o‘lchash uchun necha daqiqa kutish kerak?",
    options: ["10 daqiqa", "5 daqiqa", "2 daqiqa", "30 sekund"],
    answer: "C"
  },
  {
    id: 4,
    question: "Pulsni aniqlashda qaysi barmoqni ishlatish tavsiya etilmaydi?",
    options: ["Ko‘rsatkich barmoq", "O‘rta barmoq", "Ismsiz barmoq", "Bosh barmoq"],
    answer: "D"
  },
  {
    id: 5,
    question: "Yurak ishemik kasalliklari bo‘yicha bemorni baholash rejasining birinchi bosqichi nima?",
    options: ["Laboratoriya tahlili", "Arterial bosimni o‘lchash", "Anamnez yig‘ish", "Antropometriya"],
    answer: "C"
  },
  {
    id: 6,
    question: "Bolalarda uchraydigan ichak infektsiyalarining eng xavfli asorati nima?",
    options: ["Isitma", "Suvsizlanish (degidratatsiya)", "Qorin dam bo‘lishi", "Qusish"],
    answer: "B"
  },
  {
    id: 7,
    question: "Bakterial dizenteriyaning asosiy qo‘zg‘atuvchisi qaysi bakteriya hisoblanadi?",
    options: ["Salmonella", "Shigella", "Rotavirus", "Escherichia coli"],
    answer: "B"
  },
  {
    id: 8,
    question: "Ichak infektsiyalarida tenezm holati nimani anglatadi?",
    options: ["Kuchli qusish", "To‘g‘ri ichakning tez-tez va og‘riqli qisqarishi", "Qorin sohasidagi sanchiq", "Ishtaha yo‘qolishi"],
    answer: "B"
  },
  {
    id: 9,
    question: "Ichakning yuqumli kasalliklarida asosiy muolaja turi qaysi?",
    options: ["Faqat antibiotik berish", "Tezkor regidratatsiya (suv o‘rnini to‘ldirish)", "Qattiq parhez", "Fizioterapiya"],
    answer: "B"
  },
  {
    id: 10,
    question: "\"Gelmint\" so‘zi qaysi tildan olingan va qanday ma’noni bildiradi?",
    options: ["Lotincha – \"mikrob\"", "Grekcha – \"gijja, qurt\"", "Arabcha – \"kasallik\"", "Ruscha – \"infektsiya\""],
    answer: "B"
  },
  {
    id: 11,
    question: "Bakterial dizenteriya tashxisini tasdiqlash uchun qanday laboratoriya tahlili o‘tkaziladi?",
    options: ["Qonning umumiy tahlili", "Axlatdan bakteriologik kultura olish", "Siydik tahlili", "Rentgenogramma"],
    answer: "B"
  },
  {
    id: 12,
    question: "Bemorning ahvoli haqidagi sub’ektiv ma’lumotlar qanday yig‘iladi?",
    options: ["Qon bosimini o‘lchash orqali", "Bemor bilan suhbatlashish jarayonida", "Paypaslash (palpatsiya) orqali", "Termometriya qilish orqali"],
    answer: "B"
  },
  {
    id: 13,
    question: "Bemor haqidagi ob’ektiv ma’lumotlarga nima kirmaydi?",
    options: ["Arterial bosim o‘lchash", "Pulsni sanash", "Bemorning ijtimoiy ahvoli haqidagi shikoyatlari", "Tana haroratini o‘lchash"],
    answer: "C"
  },
  {
    id: 14,
    question: "Tana haroratini qo‘ltiq ostida o‘lchash necha daqiqa davom etishi kerak?",
    options: ["2-3 daqiqa", "5-10 daqiqa", "1 daqiqa", "15-20 daqiqa"],
    answer: "B"
  },
  {
    id: 15,
    question: "Termometr ishlatishdan oldin uning simob ustuni necha darajadan past bo‘lishi shart?",
    options: ["37 daraja", "36 daraja", "35 daraja", "34 daraja"],
    answer: "C"
  },
  {
    id: 16,
    question: "0-1,5 yoshgacha bo‘lgan bolalarning vazni qaysi holatda o‘lchanadi?",
    options: ["Tik turgan holda", "O‘tirgan holda", "Gorizontal (yotgan) holda", "Faqat onasining qo‘lida"],
    answer: "C"
  },
  {
    id: 17,
    question: "Elektron tarozini dezinfektsiya qilish uchun qanday eritma tavsiya etiladi?",
    options: ["70% li spirt", "0,5% li gipoxlorit natriy", "Oddiy sovunli suv", "5% li yod eritmasi"],
    answer: "B"
  },
  {
    id: 18,
    question: "Qo‘l yuvish algoritmining so‘nggi bosqichida kran qanday berkitiladi?",
    options: ["Qo‘l bilan tezda", "Bilak yordamida", "Qo‘l quritilgan qog‘oz salfetka bilan", "Boshqa odam yordamida"],
    answer: "C"
  },
  {
    id: 19,
    question: "Tana haroratini o‘lchashga qachon monelik (qarshi ko‘rsatma) bor?",
    options: ["Bemorda yo‘tal bo‘lganda", "Qo‘ltiq ostida bichilish yoki yara bo‘lganda", "Bemor o‘tirgan holatda bo‘lganda", "Harorat 38 darajadan yuqori bo‘lganda"],
    answer: "B"
  },
  {
    id: 20,
    question: "Pulsni o‘lchash uchun eng qulay joy (arteriya) qaysi?",
    options: ["Uyqu arteriyasi", "Son arteriyasi", "Radial arteriya (bilakning ichki tomoni)", "Chakkadagi arteriya"],
    answer: "C"
  },
  {
    id: 21,
    question: "Yurak ishemik kasalligida (YIK) asosiy xavf omili nima?",
    options: ["Kamqonlik", "Giperxolesterinemiya (qonda xolesterin ko‘pligi)", "Vitamin yetishmovchiligi", "Jismoniy faollikning haddan tashqari ko‘pligi"],
    answer: "B"
  },
  {
    id: 22,
    question: "Stenokardiya xurujida birinchi yordam sifatida qaysi dori tili ostiga qo‘yiladi?",
    options: ["Aspirin", "Nitroglitserin", "Analgin", "Paratsetamol"],
    answer: "B"
  },
  {
    id: 23,
    question: "Qandli diabetni aniqlashda laboratoriya tahlili uchun qon qachon topshiriladi?",
    options: ["Ovqatdan keyin 1 soat o‘tgach", "Kechqurun uyqudan oldin", "Nahorda (och qoringa)", "Istalgan vaqtda"],
    answer: "C"
  },
  {
    id: 24,
    question: "Arterial gipertenziya tashxisi qo‘yish uchun qon bosimi necha marta o‘lchanishi kerak?",
    options: ["Bir marta yuqori chiqsa yetarli", "Turli vaqtlarda kamida 2-3 marta", "Faqat shifoxonada 1 marta", "Faqat tunda"],
    answer: "B"
  },
  {
    id: 25,
    question: "Qandli diabetning 1-turi uchun xos bo‘lgan asosiy belgi?",
    options: ["Semizlik", "Mutloq insulin tanqisligi", "Qon bosimi pastligi", "Faqat qariyalarda uchrashi"],
    answer: "B"
  },
  {
    id: 26,
    question: "Gipertoniya bilan og‘rigan bemorlarga qaysi mahsulotni cheklash tavsiya etiladi?",
    options: ["Meva va sabzavotlar", "Tuz va sho‘r mahsulotlar", "Qaynatilgan go‘sht", "Sut mahsulotlari"],
    answer: "B"
  },
  {
    id: 27,
    question: "Pulsning tezlashishi tibbiyotda nima deyiladi?",
    options: ["Bradikardiya", "Taxikardiya", "Aritmiya", "Gipoventilyatsiya"],
    answer: "B"
  },
  {
    id: 28,
    question: "Pulsning sekinlashishi (daqiqasiga 60 tadan kam) nima deyiladi?",
    options: ["Taxikardiya", "Bradikardiya", "Gipertenziya", "Asfiksiya"],
    answer: "B"
  },
  {
    id: 29,
    question: "Qon bosimi o‘lchanayotganda bemorning qo‘li qanday holatda bo‘lishi kerak?",
    options: ["Yurak sathidan yuqori", "Yurak sathidan past", "Yurak sathida (stol ustida bo‘sh qo‘yilgan)", "Pastga osiltirilgan"],
    answer: "C"
  },
  {
    id: 30,
    question: "SCORE shkalasi tibbiyotda nima uchun qo‘llaniladi?",
    options: ["Ko‘rish qobiliyatini tekshirish", "Yurak qon-tomir kasalliklaridan o‘lim xavfini baholash", "Suyak mustahkamligini aniqlash", "Infektsiya darajasini o‘lchash"],
    answer: "B"
  },
  {
    id: 31,
    question: "Gelmintozlarning asosiy yuqish manbai nima?",
    options: ["Toza ichimlik suvi", "Ifloslangan qo‘llar va yuvilmagan mevalar", "Havodagi chang", "Quyosh nuri"],
    answer: "B"
  },
  {
    id: 32,
    question: "Enterobioz (gijja) kasalligining asosiy belgisi qaysi?",
    options: ["Yuqori isitma", "Orqa chiqaruv yo‘lining tunda qichishi", "Qon qusish", "Oyoq shishishi"],
    answer: "B"
  },
  {
    id: 33,
    question: "Gripp virusi qaysi yo‘l bilan yuqadi?",
    options: ["Alimentar (ovqat orqali)", "Havo-tomchi yo‘li bilan", "Transmissiv (hasharotlar orqali)", "Faqat qon orqali"],
    answer: "B"
  },
  {
    id: 34,
    question: "Gelmintlar organizmda asosan qayerda parazitlik qiladi?",
    options: ["Buyrakda", "Ingichka va yo‘g‘on ichakda", "Miya pardasida", "Suyak to‘qimasida"],
    answer: "B"
  },
  {
    id: 35,
    question: "Suvchechak (vetryanka) kasalligining o‘ziga xos belgisi?",
    options: ["Badanga toshma toshishi va qichishish", "Faqat yo‘tal", "Bo‘yin shishishi", "Doimiy qon bosimi yuqoriligi"],
    answer: "A"
  },
  {
    id: 36,
    question: "Grippga qarshi emlash qachon o‘tkazilishi eng samarali hisoblanadi?",
    options: ["Kasallik avj olgan paytda", "Kuz oylarida (sentabr-oktabr)", "Faqat yozda", "Bahorning oxirida"],
    answer: "B"
  },
  {
    id: 37,
    question: "Adenomiruzli infektsiyada ko‘pincha qaysi a’zo zararlanadi?",
    options: ["Ko‘z shilliq qavati (konyunktivit)", "Tirnoqlar", "Soch ildizlari", "Tish emali"],
    answer: "A"
  },
  {
    id: 38,
    question: "Ascaris lumbricoides – bu qaysi parazit?",
    options: ["Gijja (ostritsa)", "Ascarida (asqarida)", "Lambliya", "Exinokokk"],
    answer: "B"
  },
  {
    id: 39,
    question: "Qaysi yuqumli kasallikda \"it vovullashiga\" o‘xshash yo‘tal kuzatiladi?",
    options: ["Gripp", "Krup (laringit asorati)", "Angina", "Dizenteriya"],
    answer: "B"
  },
  {
    id: 40,
    question: "Infektsiya manbai bo‘lgan bemor xonasi qanday usulda tozalanadi?",
    options: ["Faqat quruq supurgi bilan", "Nam usulda va dezinfektsiyalovchi eritmalar bilan", "Faqat changyutgich bilan", "Faqat ventilyatsiya qilinadi"],
    answer: "B"
  },
  {
    id: 41,
    question: "Bakterial dizenteriyada axlat qanday ko‘rinishda bo‘ladi?",
    options: ["Oddiy shaklda", "Shilliq va qon aralash (\"rektal tupuk\")", "Faqat suvli, hidsiz", "Qora rangda"],
    answer: "B"
  },
  {
    id: 42,
    question: "Degidratatsiya (suvsizlanish) belgilariga nima kirmaydi?",
    options: ["Ko‘zlarning ichiga botishi", "Terining elastikligi yo‘qolishi", "Kuchli siydik haydalishi (poliyuriya)", "Og‘iz qurishi"],
    answer: "C"
  },
  {
    id: 43,
    question: "Bemorning qonidagi glyukoza miqdorini aniqlash uchun ishlatiladigan asbob?",
    options: ["Tonometr", "Glyukometr", "Termometr", "Pikfluometr"],
    answer: "B"
  },
  {
    id: 44,
    question: "Qon tahlili uchun probirkalardagi qizil qopqoq nimani anglatadi?",
    options: ["Antikoagulyantsiz (zardob olish uchun)", "Geparinli", "EDTA saqlovchi", "Glyukoza uchun"],
    answer: "A"
  },
  {
    id: 45,
    question: "Bakteriologik tahlil uchun namuna qayerga yuboriladi?",
    options: ["Rentgen xonasiga", "Mikrobiologik laboratoriyaga", "Fizioterapiya bo‘limiga", "Qabul bo‘limiga"],
    answer: "B"
  },
  {
    id: 46,
    question: "Qo‘llarni yuvishda antiseptik vositani necha ml miqdorda olish kerak?",
    options: ["0,5 ml", "3-5 ml", "10 ml", "50 ml"],
    answer: "B"
  },
  {
    id: 47,
    question: "Tana harorati 39°C dan yuqori bo‘lishi qanday ataladi?",
    options: ["Subfebril", "Febril (yuqori)", "Gipotermiya", "Normal harorat"],
    answer: "B"
  },
  {
    id: 48,
    question: "Bolalarda ich ketishida (diareya) eng xavfsiz regidratant nima?",
    options: ["Gazlangan shirin suv", "Re-gidron yoki shunga o‘xshash tuzli eritmalar", "Yangi siqilgan apelsin sharbati", "Qaynagan sut"],
    answer: "B"
  },
  {
    id: 49,
    question: "Gelmintlarga qarshi profilaktika uchun eng muhim chora?",
    options: ["Ko‘p uxlash", "Shaxsiy gigiena (qo‘llarni yuvish)", "Quyoshda toblanish", "Faqat meva yeyish"],
    answer: "B"
  },
  {
    id: 50,
    question: "Parazitar kasalliklarni aniqlashda qaysi tahlil eng ishonchli?",
    options: ["Qon bosimini o‘lchash", "Najastni parazitologik tekshirish (koprologiya)", "EKG", "Tashqi ko‘rinishni tekshirish"],
    answer: "B"
  }
];
