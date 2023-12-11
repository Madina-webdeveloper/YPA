export const lang = {
  uzbek: "Uzbek",
  english: "English",
};
export let selectionsLang = "English";
export const setSelectionsLang = (body) => {
  localStorage.setItem("lang", body);
  selectionsLang = body;
  window.location.reload();
};

export const language = {
  english: {
    header: {
      membership: "Membership",
      news: "YPAU News",
      members: "Members",
      policy: "Policy&Bylaws",
      contact: "Contact",
    },
    homePG: {
      title: "GENERAL PROVISION",
      desc: `As a member of the Association of Young Programmers in Uzbekistan since 2019. As a valued member of the association, my duties include participation in the government-sponsored events, roundtables, conferences, and seminars – all related to promotion of tech skills among young people. For example, in 2020, the Uzbekistan local government in Tashkent initiated an online training for women from underprivileged communities to acquire tech skills, particularly programming (Python, HTML and SQL). I proposed to develop and deliver a module on business management as well. This idea was largely supported by the Mayor of the City. As a result, we educated 150 women, of which 46 started their small ventured (tech-enabled solutions).`,
      aboutS: {
        title: "Events",
        title1: "About Us",
        desc1: `    Since 2019, our association has been a beacon for passionate
    programmers dedicated to making a meaningful impact in the
    tech community. We have actively participated in
    government-sponsored events, roundtables, conferences, and
    seminars, all aimed at promoting tech skills among our dynamic
    youth.`,
        title2: "Tech Empowerment Initiatives",
        desc2: `In 2020, we proudly collaborated with the local government in
    Tashkent to initiate an online training program for women from
    underprivileged communities. Our curriculum focused on
    essential programming languages such as Python, HTML, and SQL.
    Going beyond code, I proposed and successfully delivered a
    business management module, a concept warmly embraced by the
    Mayor of the City.`,
        title3: "Join the Movement",
        desc3: ` Our collective efforts resulted in the education of 150 women,
    with 46 of them venturing into entrepreneurship, establishing
    tech-enabled solutions. It's not just about writing code; it's
    about empowering individuals to turn their ideas into
    reality.Ready to embark on this exciting journey with us? Dive
    into a world of innovation and collaboration – where every
    line of code contributes to a brighter future. Welcome to The
    Association of Young Programmers in Uzbekistan – where ideas
    flourish, skills thrive, and connections last a lifetime.`,
        title4: "Impactful Results",
        desc4: `   Whether you're a seasoned coder or just starting your
    programming journey, our association welcomes all enthusiasts.
    Explore the possibilities, network with fellow programmers,
    and be part of a community that believes in the transformative
    power of technology.`,
      },
    },
    membershipPG: {
      title: "Membership",
      title2: "Membership Regulations",
      qualification: "Educational Qualifications:",
      qualificationD: `Prospective members
      must hold a minimum of a Bachelor's degree in Programming,
      Computer Science, Information Technology, or a related field from
      a recognized institution.`,
      excelle: "Academic Excellence:",
      excelleD: `Members should demonstrate a
      commitment to academic excellence by maintaining high grades
      throughout their educational journey. A minimum GPA requirement
      may be established to ensure a standard level of proficiency.`,
      knowledge: "Specialized Knowledge:",
      knowledgeD: `Applicants must showcase a
      deep understanding and proficiency in programming languages,
      software development, and other relevant areas within the field of
      information technology.`,
      exper: "Professional Experience",
      experD: `Membership may be
      extended to individuals with outstanding achievements in top-tier
      internships, demonstrating a practical application of programming
      skills in real-world scenarios.`,
      commit: `Commitment to the Association's Goals:`,
      commitD: ` Members
      are expected to align with and actively contribute to the
      association's mission of promoting tech skills among young people.
      This includes participation in events, initiatives, and
      collaborative projects.`,
      learn: "Continuous Learning:",
      learnD: `Members should exhibit a
      commitment to continuous learning and professional development
      within the rapidly evolving field of technology. This may include
      participation in workshops, conferences, and relevant training
      programs.`,
      ethics: "Code of Ethics:",
      ethicsD: `Members are required to adhere to
      a code of ethics that promotes integrity, professionalism, and
      responsible conduct in the practice of programming and information
      technology.`,
      community: `Contribution to the Community:`,
      communityD: `Active involvement
      in community service projects, mentorship programs, or initiatives
      aimed at spreading awareness and accessibility of technology
      within the community is encouraged.`,
      leadership: "Leadership and Collaboration:",
      leadershipD: `Members should
      demonstrate leadership skills and a willingness to collaborate
      with fellow members to create a supportive and dynamic community.`,
      attendance: "Regular Attendance and Participation:",
      attendanceD: `Regular
      attendance at association meetings, events, and activities is
      expected. Members are encouraged to actively engage in
      discussions, share insights, and contribute to the growth of the
      association.`,
      good: "Good Standing:",
      goodD: `Members must maintain good
      standing by adhering to the regulations and guidelines set forth
      by the association. Violation of these regulations may result in a
      review of membership status.
    `,
      title3: "Membership Tiers and Requirements",
      desc: `   These membership tiers are designed to recognize and accommodate a
    diverse range of talents and experiences within the Association of
    Young Programmers in Uzbekistan. Members are encouraged to strive
    for higher tiers as they progress in their careers, demonstrating
    continued dedication to personal and professional development in the
    dynamic field of programming and information technology.`,
      platinum: "Platinum Membership",
      requirement: "Requirements:",
      req1: `Hold an advanced degree (Master's or higher) in Programming,
    Computer Science, Information Technology, or a related
    field.`,
      req2: ` Demonstrate exceptional academic achievements with a minimum
    GPA (to be defined).`,
      req3: ` Extensive professional experience, including leadership
    roles in recognized tech organizations or high-profile
    projects.`,
      req4: `   Significant contributions to the field, such as published
    research, innovative projects, or notable industry
    recognition.`,
      req5: ` Mentorship or teaching experience, showcasing a commitment
    to knowledge sharing and community development.`,
      golden: {
        golden: "Golden Membership",
        req1: ` Hold a Bachelor's degree in Programming, Computer Science,
      Information Technology, or a related field.`,
        req2: `Solid academic performance with a specified minimum GPA.`,
        req3: `Substantial internship or work experience in reputable tech
      companies or projects.`,
        req4: `Active participation in tech-related community events,
      conferences, or workshops.`,
        req5: `Demonstrated commitment to continuous learning and
      professional development.`,
      },
      silver: {
        silver: "Silver Membership",
        req1: ` Hold a Bachelor's degree in Programming, Computer Science,
      Information Technology, or a related field.,
      `,
        req2: `Satisfactory academic performance.`,
        req3: `   Entry-level professional experience or internships in the
      tech industry.`,
        req4: ` Involvement in community projects or initiatives related to
      technology.`,
        req5: `    Willingness to contribute to association activities and
      events.`,
      },
      bronze: {
        bronze: "Bronze Membership",
        req1: `  Currently pursuing a degree in Programming, Computer
      Science, Information Technology, or a related field.,
      `,
        req2: `    Good academic standing in the ongoing educational program.`,
        req3: `     Enthusiasm for technology and a basic understanding of
      programming concepts.`,
        req4: `  Participation in relevant extracurricular activities or
      projects.`,
        req5: `A commitment to learning and growing within the association.`,
      },
    },
    news: {
      title: `Why & How to Performance Test E-Commerce Apps and Websites?`,
      desc: ` Imagine a situation where you've spent a huge amount on marketing your
      Black Friday deals, stocked up on the required inventory, are ready to
      open the floodgates, and boom! Your app crashes, and no one is able to
      make any purchases. It's a loss of great opportunity, revenue,
      customers and reputation. To better prepare for it, companies should
      perform performance testing, and some of the specific areas and
      methodologies on which they should focus are:`,
      testing: `Load Testing:`,
      testingD: `It is crucial to test your site and
      app's capacity to manage a higher volume of traffic because of the
      increased traffic on Black Friday. You can create a baseline for a
      load test to determine how much traffic can be processed before the
      platform's performance deteriorates or crashes using the traffic
      data you already have. Retailers can increase the stability of their
      online and mobile applications and prevent serious issues on Black
      Friday and other busy shopping days of the year by running load
      tests.`,
      discount: `Testing Promo Codes and Discounts:`,
      discountD: `Deals and
      discounts are what make Black Friday so popular. It is crucial to
      verify the checkout page in order to ensure that the discounts and
      promotional codes are applied correctly. If not, you face the danger
      of letting a defect disrupt sales, which would aggravate users and
      result in less money being made.`,
      shopping: `Testing the Shopping Cart:`,
      shoppingD: `To make sure it is
      unaffected, the shopping process (add to cart, transaction, email
      confirmation, etc.) needs to be reviewed numerous times. It would be
      really sad if a broken "Add to Cart" button prevented online orders
      from being placed by customers. In general, test cases should
      concentrate on each component of the cart, from adding products to
      the output of notifications when issues do arise.`,
      multi: `Multi-device Testing:`,
      multiD: `Today, a growing number of
      consumers use their mobile devices to conduct their online shopping.
      Multidevice testing must therefore be carried out on applications
      and websites across a range of mobile phones, operating systems, and
      browsers. Finding any faults or issues that can be linked to the
      fragmentation of the smartphone market requires having broad test
      coverage. The best method to make sure that your website or app
      displays and functions as anticipated for the largest possible
      audience of users is to conduct multidevice testing.`,
      bug: `Testing Bug Fixes:`,
      bugD: `Usually software development
      staff will be busy after a test campaign with issue fixes that will
      certainly enhance your website or app. However, it is useful to
      confirm the bug corrections. Retesting the impacted components or
      the full site can be done to make sure the necessary adjustments
      have been made.`,
      desc2: `   Since history tends to repeat itself, it is safe to assume that Black
      Friday will cause certain websites and apps to collapse. However, this
      will be very expensive for brands. Performance Test your website and
      app to find problematic regions and bugs that could hurt your
      business's performance and avert this fate.`,
    },
    policyPG: {
      title: "BOARD OF DIRECTORS",
      composition: "Composition.",
      compositionD: `The Association's Board of Directors shall be composed of the elected
      officers. The total number of directors to constitute the entire board shall be equal to, and not less
      than, 3 Directors. As used in these Bylaws, "entire board" means the total number of directors which
      the Association would have if there were no vacancies.`,
      power: "Powers.",
      powerD: `The Board of Directors shall have all the powers and rights necessary to
      administer the Association's affairs and to perform the Association's responsibilities and to exercise its
      rights as set forth in these Bylaws, the Declaration and the Articles provided that such rights and
      powers are not inconsistent with the provisions of state laws and limited by the provisions of the
      Association's Declaration.`,
      duty: "Duties.",
      dutyD: `It shall be the Board of Directors' responsibility to maintain a complete and detailed record of all the Association's transactions and acts and
      furnish said records to the Members when such records are requested in writing by Members who are
      entitled to vote`,
      compensation: "Compensation.",
      compensationD: `No director or officer shall receive compensation for their services.
      However, by resolution of the Board of Directors may be reimbursed for actual expenses incurred in
      the performance of their duties.`,
      removal: "Removal of Directors.",
      removalD: `Any or all of the directors may be removed for cause by vote of the
      Members or by action of the board. Directors may be removed without cause only by vote of the
      Members.`,
      resignation: "Resignation.",
      resignationD: `A director may resign at any time by giving written notice to the Board of
      Directors and the resignation shall take effect upon receipt of said notice, unless stated otherwise.`,
    },
    members: {
      title: "Members and Boards",
      president: "President",
      platinum: "Membership Tier: Platinum",
      provide: "Provides strategic leadership to the associations.",
      represent: "Represents the association in external engagements.",
      vice: "Vice President",
      support: "Supports the President in strategic initiatives.",
      absence: "Assumes leadership in the absence of the President.",
      secretary: "Secretary",
      communiation:
        "Manages communication and documentation for the association.",
      meeting: "Coordinates meetings and maintains records.",
      member: "Individual Member Pages:",
      leadership: "Leadership Page :",
      summit: "Tech Summit 2023 Speakers",
    },
  },

  uzbek: {
    header: {
      membership: "A'zolik",
      news: "YPAU yangiliklari",
      policy: "Siyosat va Nizom",
      contact: "Aloqa",
      members: "A'zolar",
    },
    homePG: {
      title: "UMUMIY QOIDA",
      desc: `2019-yildan O‘zbekiston Yosh dasturchilar uyushmasi a’zosi sifatida. Uyushmaning qadrli a’zosi sifatida mening vazifalarimga hukumat tomonidan homiylik qilinadigan tadbirlar, davra suhbatlari, konferensiyalar va seminarlarda qatnashish kiradi – bularning barchasi yoshlar o‘rtasida texnologik ko‘nikmalarni targ‘ib qilish bilan bog‘liq. . Masalan, 2020-yilda Toshkent shahridagi O‘zbekiston mahalliy hokimiyati kam ta’minlangan jamiyatdagi ayollar uchun texnologik ko‘nikmalar, xususan dasturlash (Python, HTML va SQL) bo‘yicha onlayn trening o‘tkazish tashabbusi bilan chiqdi. Men biznesni boshqarish bo'yicha modulni ham ishlab chiqish va taqdim etishni taklif qildim. Bu fikrni asosan shahar hokimi qo‘llab-quvvatladi. Natijada, biz 150 nafar ayolni o'qidik, ulardan 46 nafari o'zining kichik biznesini (texnologik echimlar) boshladi.`,
      aboutS: {
        title: "Voqealar",
        title1: "Biz haqimizda",
        desc1: ` 2019 yildan beri bizning uyushmamiz ishtiyoqlilar uchun mayoq bo'lib kelmoqda
        ga mazmunli ta'sir ko'rsatishga bag'ishlangan dasturchilar
        texnologik hamjamiyat. Biz faol ishtirok etdik
        hukumat tomonidan homiylik qilinadigan tadbirlar, davra suhbatlari, konferentsiyalar va
        seminarlar, barchasi bizning dinamiklarimiz orasida texnologik ko'nikmalarni targ'ib qilishga qaratilgan
        yoshlar.`,
        title2: "Texnik imkoniyatlarni oshirish tashabbuslari",
        desc2: `2020 yilda biz mahalliy hukumat bilan g'urur bilan hamkorlik qildik
        Toshkentda ayollar uchun onlayn trening dasturi boshlanadi
        kam ta'minlangan jamoalar. Bizning o'quv dasturimiz asosiy e'tiborni tortdi
        Python, HTML va SQL kabi muhim dasturlash tillari.
        Koddan tashqariga chiqib, men taklif qildim va muvaffaqiyatli topshirdim
        biznesni boshqarish moduli tomonidan iliq qabul qilingan kontseptsiya
        Shahar hokimi.`,
        title3: "Harakatga qo'shiling",
        desc3: ` Bizning jamoaviy sa'y-harakatlarimiz natijasida 150 nafar ayol ta'lim oldi,
        shundan 46 nafari tadbirkorlik faoliyatini yo'lga qo'ygan, tashkil etgan
        texnologiyaga asoslangan yechimlar. Bu faqat kod yozish haqida emas; bu
        shaxslarga o'z g'oyalarini aylantirish imkoniyatini berish haqida
        haqiqat. Biz bilan bu qiziqarli sayohatga chiqishga tayyormisiz? Sho'ng'in
        innovatsiyalar va hamkorlik dunyosiga - bu erda har bir
        kod qatori porloq kelajakka hissa qo'shadi. O‘zbekiston yosh dasturchilar uyushmasiga xush kelibsiz
        – g‘oyalar qayerda
        gullab-yashnaydi, ko'nikmalar rivojlanadi va aloqalar umr bo'yi davom etadi.`,
        title4: "Ta'sirli natijalar",
        desc4: `Siz tajribali koder bo'lasizmi yoki endigina o'z ishingizni boshlayapsizmi
        dasturlash sayohati, bizning uyushmamiz barcha ishqibozlarni kutib oladi.
        Imkoniyatlarni o'rganing, boshqa dasturchilar bilan aloqa o'rnating,
        va transformativga ishonadigan jamiyatning bir qismi bo'ling
        texnologiya kuchi.`,
      },
    },
    membershipPG: {
      title: "A'zolik",
      title2: "A'zolik qoidalari",
      qualification: "Ta'lim malakalari:",
      qualificationD: `Bo'lajak a'zolar
      Dasturlash bo'yicha kamida bakalavr darajasiga ega bo'lishi kerak,
      Kompyuter fanlari, axborot texnologiyalari yoki tegishli soha
      tan olingan muassasa.`,
      excelle: "Akademik mukammallik:",
      excelleD: `A'zolar a ko'rsatishlari kerak
      yuqori baholarni saqlab, akademik mukammallikka sodiqlik
      ularning ta'lim safari davomida. Minimal GPA talabi
      malakaning standart darajasini ta'minlash uchun o'rnatilishi mumkin.`,
      knowledge: "Maxsus bilimlar:",
      knowledgeD: `Ariza beruvchilar a ko'rsatishlari kerak
      dasturlash tillarida chuqur tushuncha va malaka,
      dasturiy ta'minotni ishlab chiqish va sohadagi boshqa tegishli sohalar
      axborot texnologiyalari.`,
      exper: "Professional tajriba",
      experD: `A'zolik bo'lishi mumkin
      yuqori darajadagi ajoyib yutuqlarga ega bo'lgan shaxslar uchun kengaytirilgan
      dasturlashning amaliy qo'llanilishini ko'rsatadigan amaliyotlar
      real dunyo stsenariylarida ko'nikmalar.`,
      commit: `Uyushma maqsadlariga sodiqlik:`,
      commitD: ` A'zolar
      bilan mos kelishi va faol hissa qo‘shishi kutilmoqda
      assotsiatsiyaning missiyasi yoshlar orasida texnologik ko'nikmalarni targ'ib qilish.
      Bunga tadbirlarda ishtirok etish, tashabbuslar va
      hamkorlikdagi loyihalar.`,
      learn: "Doimiy ta'lim:",
      learnD: `A'zolar a ko'rsatishlari kerak
      uzluksiz o'rganish va kasbiy rivojlanishga sodiqlik
      tez rivojlanayotgan texnologiya sohasida. Bu o'z ichiga olishi mumkin
      seminarlar, konferentsiyalar va tegishli treninglarda ishtirok etish
      dasturlari.`,
      ethics: "Axloq kodeksi:",
      ethicsD: `A'zolar rioya qilishlari shart
      halollikni, professionallikni va
      dasturlash va axborot amaliyotida mas'uliyatli xatti-harakatlar
      texnologiya.`,
      community: `Jamiyatga qo'shgan hissasi:`,
      communityD: `Faol ishtirok
      jamoat xizmati loyihalarida, murabbiylik dasturlarida yoki tashabbuslarda
      texnologiyalardan xabardorlik va foydalanish imkoniyatlarini kengaytirishga qaratilgan
      jamiyat ichida rag'batlantiriladi.`,
      leadership: "Yetakchilik va hamkorlik:",
      leadershipD: `A'zolar kerak
      etakchilik qobiliyatini va hamkorlik qilishga tayyorligini namoyish eting
      qo'llab-quvvatlovchi va dinamik hamjamiyat yaratish uchun hamkasblar bilan.`,
      attendance: "Doimiy qatnashish va qatnashish:",
      attendanceD: `Muntazam
      assotsiatsiya yig'ilishlarida, tadbirlarda va tadbirlarda qatnashish
      kutilgan. A'zolar faol ishtirok etishga da'vat etiladi
      munozaralar, tushunchalar almashish va o'sishiga hissa qo'shish
      uyushma.`,
      good: "Yaxshi holat:",
      goodD: `A'zolar yaxshilikni saqlashlari kerak
      belgilangan qoidalar va ko'rsatmalarga rioya qilish orqali
      uyushma tomonidan. Ushbu qoidalarning buzilishi sabab bo'lishi mumkin
      a'zolik holatini ko'rib chiqish.
    `,
      title3: "A'zolik darajalari va talablari",
      desc: `  Ushbu a'zolik darajalari a ni tan olish va joylashtirish uchun mo'ljallangan
      assotsiatsiyasida turli xil iste'dodlar va tajribalar
      O'zbekistondagi yosh dasturchilar. A'zolar harakat qilishga da'vat etiladi
      yuqori darajalar uchun, ular o'z martabalarida o'sishda, namoyish qilishda
      shaxsiy va kasbiy rivojlanishga sodiqlik
      dasturlash va axborot texnologiyalarining dinamik sohasi.`,
      platinum: "Platinum a'zoligi",
      requirement: "Talablar:",
      req1: `Dasturlash bo'yicha yuqori darajaga (magistr yoki undan yuqori) ega bo'lish,
      Kompyuter fanlari, axborot texnologiyalari yoki tegishli
      maydon.`,
      req2: ` Minimal darajada ajoyib akademik yutuqlarni namoyish eting
      GPA (aniqlanishi kerak).`,
      req3: ` Katta professional tajriba, shu jumladan etakchilik
      taniqli texnologik tashkilotlarda yoki yuqori darajadagi rollar
      loyihalar.`,
      req4: `   Sohaga qo'shgan muhim hissalari, masalan, nashr etilgan
      tadqiqot, innovatsion loyihalar yoki taniqli sanoat
      tan olish.`,
      req5: ` Mentorlik yoki o'qitish tajribasi, majburiyatni namoyish qilish
      bilim almashish va jamiyatni rivojlantirish.`,
      golden: {
        golden: "Oltin a'zolik",
        req1: `Dasturlash, kompyuter fanlari bo'yicha bakalavr darajasiga ega bo'ling,
        Axborot texnologiyalari yoki tegishli soha.`,
        req2: `Belgilangan minimal GPA bilan mustahkam akademik ko'rsatkich.`,
        req3: `Nufuzli texnologiyada katta stajirovka yoki ish tajribasi
        kompaniyalar yoki loyihalar.`,
        req4: `Texnika bilan bog'liq jamoat tadbirlarida faol ishtirok etish,
        konferentsiyalar yoki seminarlar.`,
        req5: `Uzluksiz o'rganishga sodiqlik va
        kasbiy rivojlanish.`,
      },
      silver: {
        silver: "Kumush a'zolik",
        req1: `Dasturlash, kompyuter fanlari bo'yicha bakalavr darajasiga ega bo'ling,
        Axborot texnologiyalari yoki tegishli soha.
        `,
        req2: `Qoniqarli akademik ko'rsatkich.`,
        req3: `   Kirish darajasidagi professional tajriba yoki amaliyot
        texnologiya sanoati.`,
        req4: ` bilan bog'liq jamoat loyihalari yoki tashabbuslarida ishtirok etish
        texnologiya.`,
        req5: `  Uyushma faoliyatiga hissa qo'shishga tayyorlik va
        voqealar.`,
      },
      bronze: {
        bronze: "Bronza a'zoligi",
        req1: `Hozirda “Dasturlash”, “Kompyuter” mutaxassisligi bo‘yicha ta’lim olyapti
        Fan, axborot texnologiyalari yoki tegishli soha.
        `,
        req2: `   Davom etayotgan ta'lim dasturida yaxshi akademik maqom.`,
        req3: `     Texnologiyaga ishtiyoq va asosiy tushuncha
        dasturlash tushunchalari`,
        req4: `  Sinfdan tashqari tegishli tadbirlarda ishtirok etish yoki
        loyihalar.`,
        req5: `Uyushmada o'rganish va o'sishga sodiqlik.`,
      },
    },
    news: {
      title: `Nega va qanday qilib elektron tijorat ilovalari va veb-saytlarini sinovdan o'tkazish kerak?`,
      desc: ` Tasavvur qiling-a, siz o'zingizning marketingingiz uchun katta mablag 'sarflagansiz
      Kerakli inventar bilan to'ldirilgan qora juma bitimlari tayyor
      suv toshqinlarini oching va bum! Ilovangiz ishdan chiqadi va hech kim buni qila olmaydi
      har qanday xaridlarni amalga oshiring. Bu katta imkoniyat, daromadni yo'qotish,
      mijozlar va obro'. Bunga yaxshiroq tayyorgarlik ko'rish uchun kompaniyalar kerak
      ishlash test amalga oshirish, va muayyan sohalarda ba'zi va
      quyidagilarga e'tibor qaratishlari kerak bo'lgan metodologiyalar:`,
      testing: `Yuk sinovi:`,
      testingD: `Saytingizni sinab ko'rish juda muhim va
      tufayli ilovaning yuqori trafik hajmini boshqarish imkoniyati
      Qora juma kuni trafikni oshirdi. a uchun asos yaratishingiz mumkin
      oldin qancha trafik qayta ishlanishi mumkinligini aniqlash uchun yuk testi
      platformaning ishlashi trafikdan foydalangan holda yomonlashadi yoki ishdan chiqadi
      sizda allaqachon mavjud bo'lgan ma'lumotlar. Chakana sotuvchilar o'zlarining barqarorligini oshirishlari mumkin
      onlayn va mobil ilovalar va Black-da jiddiy muammolarni oldini olish
      Juma va yilning boshqa band bo'lgan xarid qilish kunlari yuk bilan
      testlar.`,
      discount: `Promo-kodlar va chegirmalarni sinab ko'rish:`,
      discountD: `Bitimlar va
      chegirmalar qora jumani juda mashhur qiladigan narsadir. uchun hal qiluvchi ahamiyatga ega
      chegirmalar va ta'minlash maqsadida chiqish sahifani tekshiring
      reklama kodlari to'g'ri qo'llaniladi. Aks holda, siz xavf ostida qolasiz
      nuqson sotuvni buzishiga yo'l qo'ymaslik, bu foydalanuvchilarni og'irlashtiradi va
      natijasida kamroq pul ishlab chiqariladi.`,
      shopping: `Savatchani sinab ko'rish:`,
      shoppingD: `Bunga ishonch hosil qilish uchun
      ta'sirlanmagan, xarid qilish jarayoni (savatga qo'shish, tranzaksiya, elektron pochta
      tasdiqlash va boshqalar) ko'p marta ko'rib chiqilishi kerak. Bo'lardi
      Agar buzilgan "Savatga qo'shish" tugmasi onlayn buyurtmalarga to'sqinlik qilsa, juda achinarli
      mijozlar tomonidan joylashtirilishidan. Umuman olganda, test holatlari kerak
      mahsulot qo'shishdan tortib, aravaning har bir komponentiga e'tibor qarating
      muammolar yuzaga kelganda bildirishnomalarning chiqishi.`,
      multi: `Ko'p qurilma sinovi:`,
      multiD: `Bugungi kunda soni ortib bormoqda
      iste'molchilar o'zlarining mobil qurilmalaridan onlayn xarid qilish uchun foydalanadilar.
      Shuning uchun ilovalarda ko'p qurilma sinovlari o'tkazilishi kerak
      va turli xil mobil telefonlar, operatsion tizimlar va veb-saytlar
      brauzerlar. U bilan bog'lanishi mumkin bo'lgan har qanday nosozlik yoki muammolarni topish
      smartfon bozorining parchalanishi keng sinovdan o'tishni talab qiladi
      qamrab olish. Veb-saytingiz yoki ilovangiz ekanligiga ishonch hosil qilishning eng yaxshi usuli
      ekranlar va funksiyalar kutilgan eng katta
      foydalanuvchilar auditoriyasi ko'p qurilma testini o'tkazishdan iborat.`,
      bug: `Xatolarni tuzatish sinovi:`,
      bugD: `Odatda dasturiy ta'minotni ishlab chiqish
      xodimlar sinov kampaniyasidan so'ng muammoni hal qilish bilan band bo'ladi
      albatta veb-saytingizni yoki ilovangizni yaxshilang. Biroq, foydalidir
      xatolarni tuzatishni tasdiqlang. Ta'sir qilingan komponentlarni qayta sinovdan o'tkazish yoki
      to'liq sayt kerakli o'zgarishlar ishonch hosil qilish uchun amalga oshirilishi mumkin
      qilingan.`,
      desc2: `  Tarix o'zini takrorlashga moyil bo'lganligi sababli, Qora deb taxmin qilish mumkin
      Juma ba'zi veb-saytlar va ilovalarning ishdan chiqishiga olib keladi. Biroq, bu
      brendlar uchun juda qimmatga tushadi. Ishlash veb-saytingizni sinab ko'ring va
      Sizga zarar etkazadigan muammoli hududlar va xatolarni topish uchun ilova
      biznesning ishlashi va bu taqdirning oldini olish.`,
    },
    policyPG: {
      title: "BOSHLIQLAR KENGASHI",
      composition: "Tarkibi.",
      compositionD: `Assotsiatsiyaning boshqaruv kengashi saylanganlardan tuziladi
      zobitlar. Butun kengashni tashkil etuvchi direktorlarning umumiy soni teng va kam bo'lmasligi kerak
      dan, 3 direktor. Ushbu Nizomda qo'llanilganidek, "butun kengash" direktorlarning umumiy sonini anglatadi
      Agar bo'sh ish o'rinlari bo'lmasa, Uyushma ega bo'lardi.`,
      power: "Kuchlar.",
      powerD: `Direktorlar kengashi zarur bo'lgan barcha vakolat va huquqlarga ega
      Assotsiatsiya ishlarini boshqarish va Assotsiatsiyaning vazifalarini bajarish va uni amalga oshirish
      ushbu Nizom, Deklaratsiya va moddalarda belgilangan huquqlar, bunday huquqlar va
      vakolatlari davlat qonunlari qoidalariga zid emas va qonun qoidalari bilan cheklangan
      Uyushma deklaratsiyasi.`,
      duty: "Vazifalar.",
      dutyD: `Assotsiatsiyaning barcha operatsiyalari va harakatlarining to'liq va batafsil qaydini yuritish Direktorlar kengashining mas'uliyati hisoblanadi.
      a'zolar tomonidan yozma ravishda so'ralganda, ushbu yozuvlarni A'zolarga taqdim etadi
      ovoz berish huquqiga ega`,
      compensation: "Kompensatsiya.",
      compensationD: `Hech bir direktor yoki mansabdor shaxs o'z xizmatlari uchun tovon ololmaydi.
      Biroq, Direktorlar kengashining qaroriga ko'ra, kompaniyada qilingan haqiqiy xarajatlar qoplanishi mumkin.
      o'z vazifalarini bajarish.`,
      removal: "Direktorlarni ishdan bo'shatish.",
      removalD: `Direktorlarning birortasi yoki barchasi sabablarga ko'ra ovoz berish yo'li bilan chetlatilishi mumkin
      A'zolar yoki kengash harakati bilan. Direktorlar sababsiz faqat ovoz berish orqali chetlatilishi mumkin
      A'zolar.`,
      resignation: "Iste'fo.",
      resignationD: `Direktor istalgan vaqtda Kengashga yozma ravishda xabar berish orqali iste'foga chiqishi mumkin
      Direktorlar va iste'foga chiqish, agar boshqacha ko'rsatilmagan bo'lsa, ushbu xabarnomani olgandan keyin kuchga kiradi.`,
    },
    members: {
      title: "A'zolar va Kengashlar",
      president: "Prezident",
      platinum: "A'zolik darajasi: Platinum",
      provide: "Assotsiatsiyalarga strategik rahbarlikni ta'minlaydi.",
      represent: "Tashqi ishlarda assotsiatsiyani ifodalaydi.",
      vice: "Vitse prezident",
      support: "Prezidentni strategik tashabbuslarda qo‘llab-quvvatlaydi.",
      absence: "Prezident yo‘qligida rahbarlikni o‘z zimmasiga oladi.",
      secretary: "Kotiba",
      communiation: "Assotsiatsiya uchun aloqa va hujjatlarni boshqaradi.",
      meeting: "Uchrashuvlarni muvofiqlashtiradi va yozuvlarni yuritadi.",
      member: "Shaxsiy a'zo sahifalari:",
      leadership: "Rahbarlik sahifasi:",
      summit: "Texnik sammit 2023 ma'ruzachilar",
    },
  },
};
