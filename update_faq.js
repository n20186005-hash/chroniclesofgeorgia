const fs = require('fs');
const path = require('path');

const locales = ['en', 'ka', 'ru', 'zh-Hans', 'zh-Hant'];

const newKeys = {
  nav: {
    faq: {
      en: "Topics",
      ka: "თემები",
      ru: "Темы",
      "zh-Hans": "深度指南",
      "zh-Hant": "深度指南"
    }
  },
  reviews: {
    declaration: {
      en: "Ratings and reviews are from Google Maps (last updated: 2026). We only show a selection of verified high-score reviews. To view all complete and latest reviews, please click the link below.",
      ka: "რეიტინგები და მიმოხილვები არის Google Maps-დან (ბოლო განახლება: 2026 წელი). ჩვენ ვაჩვენებთ მხოლოდ გადამოწმებულ მაღალქულიან მიმოხილვებს. ყველა სრული და უახლესი მიმოხილვის სანახავად, გთხოვთ დააწკაპუნოთ ქვემოთ მოცემულ ბმულზე.",
      ru: "Оценки и отзывы взяты с Google Maps (последнее обновление: 2026 г.). Мы показываем только проверенные отзывы с высокими оценками. Чтобы просмотреть все полные и последние отзывы, нажмите на ссылку ниже.",
      "zh-Hans": "评分和评价来自Google地图（最后更新：2026年）。我们仅展示经过验证的精选高分评价。如需查看所有完整和最新评价，请点击下方链接。",
      "zh-Hant": "評分和評價來自Google地圖（最後更新：2026年）。我們僅展示經過驗證的精選高分評價。如需查看所有完整和最新評價，請點擊下方鏈接。"
    },
    viewAll: {
      en: "View all reviews on Google Maps",
      ka: "ყველა მიმოხილვის ნახვა Google Maps-ზე",
      ru: "Посмотреть все отзывы на Google Maps",
      "zh-Hans": "在 Google Maps 查看所有评价",
      "zh-Hant": "在 Google Maps 查看所有評價"
    }
  },
  faq: {
    title: {
      en: "Deep Dive Guides",
      ka: "სიღრმისეული გზამკვლევი",
      ru: "Подробные руководства",
      "zh-Hans": "深度指南",
      "zh-Hant": "深度指南"
    },
    subtitle: {
      en: "Everything you need to know before visiting",
      ka: "ყველაფერი რაც უნდა იცოდეთ ვიზიტამდე",
      ru: "Всё, что вам нужно знать перед посещением",
      "zh-Hans": "出发前你需要知道的硬核知识与避雷攻略",
      "zh-Hant": "出發前你需要知道的硬核知識與避雷攻略"
    },
    items: [
      {
        title: {
          en: "Visual & Aesthetics: The 'Stonehenge' of Tbilisi",
          ka: "ვიზუალი და ესთეტიკა: თბილისის 'სტოუნჰენჯი'",
          ru: "Визуал и эстетика: 'Стоунхендж' Тбилиси",
          "zh-Hans": "视觉与美学：“第比利斯的暗黑巨石阵”",
          "zh-Hant": "視覺與美學：“第比利斯的暗黑巨石陣”"
        },
        desc: {
          en: "Is it an epic relic or a modern unfinished project? Standing under the Chronicles of Georgia, you will feel a visual impact of 'oppressive aesthetics'. The huge black metal texture and the unfinished top state make it the most 'fierce' monument in Tbilisi.",
          ka: "ეპიკური რელიქვიაა თუ თანამედროვე დაუსრულებელი პროექტი? საქართველოს მატიანეს ქვეშ დგომისას იგრძნობთ 'დამთრგუნველი ესთეტიკის' ვიზუალურ ზემოქმედებას. უზარმაზარი შავი ლითონის ტექსტურა და დაუსრულებელი ზედა ნაწილი მას ყველაზე 'მრისხანე' მონუმენტად აქცევს თბილისში.",
          ru: "Эпическая реликвия или современный незавершенный проект? Стоя под Летописью Грузии, вы почувствуете визуальное воздействие 'угнетающей эстетики'. Огромная черная металлическая текстура и незавершенное верхнее состояние делают его самым 'свирепым' памятником в Тбилиси.",
          "zh-Hans": "是史诗遗迹还是现代烂尾？站在 Chronicles of Georgia 之下，你会感受到一种带点“压抑美学”的视觉冲击。巨大的黑色金属质感和顶部未完工的状态，让它成为社交媒体上第比利斯最“凶”的废土风末世建筑。",
          "zh-Hant": "是史詩遺蹟還是現代爛尾？站在 Chronicles of Georgia 之下，你會感受到一種帶點“壓抑美學”的視覺衝擊。巨大的黑色金屬質感和頂部未完工的狀態，讓它成為社交媒體上第比利斯最“兇”的廢土風末世建築。"
        }
      },
      {
        title: {
          en: "Architecture & History: Is it a Modern Building?",
          ka: "არქიტექტურა და ისტორია: არის თუ არა ის თანამედროვე შენობა?",
          ru: "Архитектура и история: Это современное здание?",
          "zh-Hans": "建筑与历史：“它是现代建筑吗？”",
          "zh-Hant": "建築與歷史：“它是現代建築嗎？”"
        },
        desc: {
          en: "Started in 1985, this is a masterpiece by sculptor Zurab Tsereteli. The 16 massive pillars represent different meanings: the upper part carves the kings and heroes of Georgian history, while the lower part depicts the life of Jesus. It's like the Georgian version of the Sagrada Familia, still partially unfinished after nearly 40 years.",
          ka: "1985 წელს დაწყებული, ეს არის მოქანდაკე ზურაბ წერეთლის შედევრი. 16 მასიური სვეტი სხვადასხვა მნიშვნელობას ატარებს: ზედა ნაწილი ასახავს საქართველოს ისტორიის მეფეებსა და გმირებს, ხოლო ქვედა ნაწილი ასახავს იესოს ცხოვრებას. ის წააგავს საგრადა ფამილიას ქართულ ვერსიას, რომელიც 40 წლის შემდეგაც ნაწილობრივ დაუსრულებელია.",
          ru: "Начатый в 1985 году, это шедевр скульптора Зураба Церетели. 16 массивных колонн имеют разные значения: в верхней части вырезаны цари и герои грузинской истории, а в нижней части изображена жизнь Иисуса. Это похоже на грузинскую версию Саграда Фамилия, которая все еще частично не завершена спустя почти 40 лет.",
          "zh-Hans": "澄清一个硬核知识点：这是 1985 年才动工的现代建筑！由雕塑家策列特利操刀。16根巨柱分为两部分：上部雕刻着格鲁吉亚历史上的国王与英雄，下部则是耶稣一生的故事。它堪称格鲁吉亚版的“圣家族大教堂”，历经近40年风雨至今仍未完全竣工。",
          "zh-Hant": "澄清一個硬核知識點：這是 1985 年才動工的現代建築！由雕塑家策列特利操刀。16根巨柱分為兩部分：上部雕刻著喬治亞歷史上的國王與英雄，下部則是耶穌一生的故事。它堪稱喬治亞版的“聖家族大教堂”，歷經近40年風雨至今仍未完全竣工。"
        }
      },
      {
        title: {
          en: "Photography Guide: Avoid Pitfalls",
          ka: "ფოტოგრაფიის სახელმძღვანელო: აირიდეთ შეცდომები",
          ru: "Руководство по фотографии: Избегайте ошибок",
          "zh-Hans": "摄影避雷与攻略：“出片指南”",
          "zh-Hant": "攝影避雷與攻略：“出片指南”"
        },
        desc: {
          en: "To capture cinematic shots, arrive an hour before sunset for the best light and shadows. Pitfalls to avoid: the hilltop is very windy (bring a jacket), there is no shade (very sunny in summer), and no supply points nearby (bring water). A wide-angle lens is highly recommended to capture its grandeur.",
          ka: "კინემატოგრაფიული კადრების გადასაღებად, მზის ჩასვლამდე ერთი საათით ადრე მოდით საუკეთესო შუქ-ჩრდილისთვის. გასათვალისწინებელია: გორაკის წვერზე ძალიან ქარიანია (წამოიღეთ ქურთუკი), არ არის ჩრდილი (ზაფხულში ძალიან მზიანია) და ახლოს არ არის მაღაზიები (წამოიღეთ წყალი). სიდიადის აღსაბეჭდად რეკომენდებულია ფართოკუთხიანი ობიექტივი.",
          ru: "Чтобы сделать кинематографические снимки, приезжайте за час до заката для лучшего света и теней. Чего следует избегать: на вершине холма очень ветрено (возьмите куртку), нет тени (очень солнечно летом) и поблизости нет магазинов (возьмите воду). Для того чтобы запечатлеть его величие, настоятельно рекомендуется широкоугольный объектив.",
          "zh-Hans": "想拍出电影感大片？你必须知道的几件事：最佳光影时刻是日落前一小时，夕阳打在青铜上的质感绝佳。避雷提醒：山顶风极大（务必带外套）、完全无遮挡（夏天极晒）、周边无便利店（记得带水）。强烈建议使用广角镜头，才能将宏大感完全收入画框。",
          "zh-Hant": "想拍出電影感大片？你必須知道的幾件事：最佳光影時刻是日落前一小時，夕陽打在青銅上的質感絕佳。避雷提醒：山頂風極大（務必帶外套）、完全無遮擋（夏天極曬）、周邊無便利店（記得帶水）。強烈建議使用廣角鏡頭，才能將宏大感完全收入畫框。"
        }
      },
      {
        title: {
          en: "Transport & Surroundings: How to get there?",
          ka: "ტრანსპორტი და შემოგარენი: როგორ მივიდეთ?",
          ru: "Транспорт и окрестности: Как добраться?",
          "zh-Hans": "交通与周边游：“怎么去，顺带去哪？”",
          "zh-Hant": "交通與周邊遊：“怎麼去，順帶去哪？”"
        },
        desc: {
          en: "The monument is located on the northern outskirts of the city. The most cost-effective way is taking a Bolt taxi (about 10-15 GEL from the center). After your visit, it's highly recommended to take a walk to the adjacent Tbilisi Sea to enjoy the breeze and the vast artificial lake views.",
          ka: "მონუმენტი ქალაქის ჩრდილოეთ გარეუბანში მდებარეობს. ყველაზე ეფექტური გზა Bolt-ის ტაქსით მგზავრობაა (ცენტრიდან დაახლოებით 10-15 ლარი). ვიზიტის შემდეგ, მკაცრად რეკომენდებულია მეზობლად მდებარე თბილისის ზღვაზე გასეირნება ქარის და ხელოვნური ტბის ვრცელი ხედების შესაგრძნობად.",
          ru: "Памятник расположен на северной окраине города. Самый экономичный способ — взять такси Bolt (около 10-15 лари из центра). После посещения настоятельно рекомендуется прогуляться к прилегающему Тбилисскому морю, чтобы насладиться бризом и обширными видами на искусственное озеро.",
          "zh-Hans": "目的地位置较偏，不建议折腾公交。从第比利斯市区出发，最省钱便捷的方式是打 Bolt 出租车，单程仅需约 10-15 拉里。打卡完巨石阵后，强烈推荐顺路步行去旁边的 Tbilisi Sea（第比利斯海）吹吹风，感受高加索山脉下的宁静湖景。",
          "zh-Hant": "目的地位置較偏，不建議折騰公交。從第比利斯市區出發，最省錢便捷的方式是打 Bolt 出租車，單程僅需約 10-15 拉里。打卡完巨石陣後，強烈推薦順路步行去旁邊的 Tbilisi Sea（第比利斯海）吹吹風，感受高加索山脈下的寧靜湖景。"
        }
      },
      {
        title: {
          en: "Mystery & Culture: Game of Thrones Vibes",
          ka: "მისტიკა და კულტურა: 'სამეფო კარის თამაშების' ატმოსფერო",
          ru: "Мистика и культура: Атмосфера 'Игры престолов'",
          "zh-Hans": "神秘与文化：“权力的游戏真实取景地？”",
          "zh-Hant": "神秘與文化：“權力的遊戲真實取景地？”"
        } ,
        desc: {
          en: "Did you accidentally wander into a Game of Thrones set? The massive scale and medieval fantasy aesthetics of the monument often make visitors feel they've entered a movie. It's not just a sculpture, but a 3,000-year civilization carved in bronze, blending Eastern mystery with Western epic tales.",
          ka: "შემთხვევით ხომ არ მოხვდით 'სამეფო კარის თამაშების' გადასაღებ მოედანზე? მონუმენტის მასშტაბები და შუა საუკუნეების ფანტასტიკური ესთეტიკა ხშირად უქმნის სტუმრებს იმის განცდას, რომ ფილმში მოხვდნენ. ეს არ არის უბრალოდ ქანდაკება, არამედ ბრინჯაოში ამოტვიფრული 3000 წლიანი ცივილიზაცია, რომელიც აერთიანებს აღმოსავლურ მისტიკას და დასავლურ ეპიკურ ზღაპრებს.",
          ru: "Вы случайно забрели на съемочную площадку 'Игры престолов'? Масштабы и средневековая фэнтезийная эстетика памятника часто заставляют посетителей чувствовать, что они попали в фильм. Это не просто скульптура, а 3000-летняя цивилизация, вырезанная в бронзе, сочетающая восточную мистику с западными эпическими сказаниями.",
          "zh-Hans": "总有人惊呼“误入《权力的游戏》片场”。确实，它那宏大的体量与中世纪奇幻美学完美契合。这不是毫无灵魂的建筑堆砌，而是刻在青铜里的 3000 年格鲁吉亚文明，将东方的神秘与西方的史诗感交织在一起，绝对能满足你对暗黑奇幻的所有想象。",
          "zh-Hant": "總有人驚呼“誤入《權力的遊戲》片場”。確實，它那宏大的體量與中世紀奇幻美學完美契合。這不是毫無靈魂的建築堆砌，而是刻在青銅裡的 3000 年喬治亞文明，將東方的神秘與西方的史詩感交織在一起，絕對能滿足你對暗黑奇幻的所有想像。"
        }
      }
    ]
  }
};

locales.forEach(loc => {
  const filePath = path.join(__dirname, 'messages', `${loc}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  if (!data.nav) data.nav = {};
  data.nav.faq = newKeys.nav.faq[loc];
  
  if (!data.reviews) data.reviews = {};
  data.reviews.declaration = newKeys.reviews.declaration[loc];
  data.reviews.viewAll = newKeys.reviews.viewAll[loc];
  
  data.faq = {
    title: newKeys.faq.title[loc],
    subtitle: newKeys.faq.subtitle[loc],
    items: newKeys.faq.items.map(item => ({
      title: item.title[loc],
      desc: item.desc[loc]
    }))
  };
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
});