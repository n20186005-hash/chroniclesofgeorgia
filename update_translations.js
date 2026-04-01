const fs = require('fs');
const path = require('path');

const locales = ['en', 'ka', 'ru', 'zh-Hans', 'zh-Hant'];

const newKeys = {
  nav: {
    explore: {
      en: "Explore",
      ka: "აღმოაჩინე",
      ru: "Исследовать",
      "zh-Hans": "探索",
      "zh-Hant": "探索"
    },
    tips: {
      en: "Tips",
      ka: "რჩევები",
      ru: "Советы",
      "zh-Hans": "提示",
      "zh-Hant": "提示"
    }
  },
  hero: {
    galleryLink: {
      en: "View Gallery",
      ka: "გალერეის ნახვა",
      ru: "Смотреть галерею",
      "zh-Hans": "查看图库",
      "zh-Hant": "查看圖庫"
    }
  },
  explore: {
    title: {
      en: "Deep Dive",
      ka: "ღრმა ჩაძირვა",
      ru: "Глубокое погружение",
      "zh-Hans": "深度探索",
      "zh-Hant": "深度探索"
    },
    subtitle: {
      en: "Explore the different facets that make this monument a unique destination.",
      ka: "შეისწავლეთ სხვადასხვა ასპექტები, რომლებიც ამ მონუმენტს უნიკალურ დანიშნულების ადგილად აქცევს.",
      ru: "Исследуйте различные аспекты, которые делают этот памятник уникальным местом назначения.",
      "zh-Hans": "探索让这座纪念碑成为独特目的地的不同侧面。",
      "zh-Hant": "探索讓這座紀念碑成為獨特目的地的不同側面。"
    },
    items: [
      {
        title: { en: "Architectural Scale", ka: "არქიტექტურული მასშტაბი", ru: "Архитектурный масштаб", "zh-Hans": "建筑规模", "zh-Hant": "建築規模" },
        desc: { en: "Experience the sheer magnitude of the 35-meter tall pillars and the imposing brutalist structure.", ka: "გამოიცადეთ 35 მეტრიანი სვეტების და შთამბეჭდავი ბრუტალისტური სტრუქტურის სიდიადე.", ru: "Ощутите масштаб 35-метровых колонн и внушительной бруталистской структуры.", "zh-Hans": "感受高达35米的石柱和宏伟的粗野主义结构的巨大规模。", "zh-Hant": "感受高達35米的石柱和宏偉的粗野主義結構的巨大規模。" }
      },
      {
        title: { en: "Biblical Reliefs", ka: "ბიბლიური რელიეფები", ru: "Библейские рельефы", "zh-Hans": "圣经浮雕", "zh-Hant": "聖經浮雕" },
        desc: { en: "The bottom sections of the pillars feature detailed scenes from the life of Christ.", ka: "სვეტების ქვედა ნაწილებში წარმოდგენილია დეტალური სცენები ქრისტეს ცხოვრებიდან.", ru: "Нижние части колонн украшены подробными сценами из жизни Христа.", "zh-Hans": "石柱底部刻有基督生平的详细场景。", "zh-Hant": "石柱底部刻有基督生平的詳細場景。" }
      },
      {
        title: { en: "Georgian Royalty", ka: "ქართველი მეფეები", ru: "Грузинская знать", "zh-Hans": "乔治亚王室", "zh-Hant": "喬治亞王室" },
        desc: { en: "The upper sections depict kings, queens, and heroes who shaped the nation's history.", ka: "ზედა ნაწილებში გამოსახულნი არიან მეფეები, დედოფლები და გმირები, რომლებმაც შექმნეს ერის ისტორია.", ru: "В верхних частях изображены короли, королевы и герои, формировавшие историю нации.", "zh-Hans": "上部刻画了塑造国家历史的国王、王后和英雄。", "zh-Hant": "上部刻畫了塑造國家歷史的國王、王后和英雄。" }
      },
      {
        title: { en: "Tbilisi Sea Views", ka: "თბილისის ზღვის ხედები", ru: "Виды на Тбилисское море", "zh-Hans": "第比利斯海景", "zh-Hant": "第比利斯海景" },
        desc: { en: "Overlook the vast artificial lake that provides a serene backdrop to the concrete giant.", ka: "გადახედეთ ვრცელ ხელოვნურ ტბას, რომელიც ბეტონის გიგანტისთვის მშვიდ ფონს ქმნის.", ru: "Полюбуйтесь огромным искусственным озером, создающим безмятежный фон для бетонного гиганта.", "zh-Hans": "俯瞰广阔的人工湖，它为这座混凝土巨兽提供了宁静的背景。", "zh-Hant": "俯瞰廣闊的人工湖，它為這座混凝土巨獸提供了寧靜的背景。" }
      },
      {
        title: { en: "Unfinished Legacy", ka: "დაუსრულებელი მემკვიდრეობა", ru: "Незавершенное наследие", "zh-Hans": "未完的遗产", "zh-Hant": "未完的遺產" },
        desc: { en: "Learn why the monument remains partially incomplete since the fall of the Soviet Union.", ka: "შეიტყვეთ, რატომ რჩება მონუმენტი ნაწილობრივ დაუსრულებელი საბჭოთა კავშირის დაშლის შემდეგ.", ru: "Узнайте, почему памятник остается частично незавершенным со времен распада Советского Союза.", "zh-Hans": "了解为什么这座纪念碑自苏联解体以来一直处于部分未完工状态。", "zh-Hant": "了解為什麼這座紀念碑自蘇聯解體以來一直處於部分未完工狀態。" }
      },
      {
        title: { en: "Photography", ka: "ფოტოგრაფია", ru: "Фотография", "zh-Hans": "摄影", "zh-Hant": "攝影" },
        desc: { en: "A heaven for photographers, offering dramatic shadows, leading lines, and epic scale.", ka: "სამოთხე ფოტოგრაფებისთვის, გთავაზობთ დრამატულ ჩრდილებს, წამყვან ხაზებს და ეპიკურ მასშტაბს.", ru: "Рай для фотографов, предлагающий драматичные тени, направляющие линии и эпический масштаб.", "zh-Hans": "摄影爱好者的天堂，拥有戏剧性的光影、引导线和史诗般的规模。", "zh-Hant": "攝影愛好者的天堂，擁有戲劇性的光影、引導線和史詩般的規模。" }
      }
    ]
  },
  tips: {
    title: { en: "Visitor Tips", ka: "რჩევები ვიზიტორებისთვის", ru: "Советы посетителям", "zh-Hans": "游客提示", "zh-Hant": "遊客提示" },
    items: [
      {
        title: { en: "Photography", ka: "ფოტოგრაფია", ru: "Фотография", "zh-Hans": "摄影建议", "zh-Hant": "攝影建議" },
        desc: { en: "Arrive 30 minutes before sunset for the golden hour. Use a wide-angle lens to capture the full scale. The shadows play beautifully on the reliefs.", ka: "მიდით 30 წუთით ადრე მზის ჩასვლამდე ოქროს საათისთვის. გამოიყენეთ ფართოკუთხიანი ლინზა სრული მასშტაბის აღსაბეჭდად. ჩრდილები ლამაზად თამაშობს რელიეფებზე.", ru: "Приходите за 30 минут до заката ради золотого часа. Используйте широкоугольный объектив, чтобы запечатлеть весь масштаб. Тени красиво играют на рельефах.", "zh-Hans": "日落前30分钟抵达以享受黄金时间。使用广角镜头捕捉全貌。光影在浮雕上的变化非常迷人。", "zh-Hant": "日落前30分鐘抵達以享受黃金時間。使用廣角鏡頭捕捉全貌。光影在浮雕上的變化非常迷人。" }
      },
      {
        title: { en: "Preparation", ka: "მომზადება", ru: "Подготовка", "zh-Hans": "行前准备", "zh-Hant": "行前準備" },
        desc: { en: "Wear comfortable shoes as the terrain can be uneven. Bring water and sun protection in summer, as there is little shade and few shops nearby.", ka: "ჩაიცვით კომფორტული ფეხსაცმელი, რადგან რელიეფი შეიძლება უსწორმასწორო იყოს. წამოიღეთ წყალი და მზისგან დამცავი საშუალებები ზაფხულში, რადგან ცოტა ჩრდილია და ახლოს ცოტა მაღაზიაა.", ru: "Наденьте удобную обувь, так как местность может быть неровной. Летом возьмите воду и защиту от солнца, так как там мало тени и поблизости мало магазинов.", "zh-Hans": "请穿着舒适的鞋子，因为地形可能不平坦。夏季请携带水和防晒用品，因为阴凉处很少，附近商店也不多。", "zh-Hant": "請穿著舒適的鞋子，因為地形可能不平坦。夏季請攜帶水和防曬用品，因為陰涼處很少，附近商店也不多。" }
      },
      {
        title: { en: "Transport", ka: "ტრანსპორტი", ru: "Транспорт", "zh-Hans": "交通指南", "zh-Hant": "交通指南" },
        desc: { en: "A taxi from the city center takes about 15-20 minutes and is the most convenient option. Free parking is available if you drive.", ka: "ტაქსი ქალაქის ცენტრიდან დაახლოებით 15-20 წუთს იღებს და ყველაზე მოსახერხებელი ვარიანტია. თუ მანქანით მიდიხართ, ხელმისაწვდომია უფასო პარკინგი.", ru: "Такси из центра города занимает около 15-20 минут и является самым удобным вариантом. Если вы на машине, есть бесплатная парковка.", "zh-Hans": "从市中心搭乘出租车大约需要15-20分钟，是最方便的选择。如果自驾，现场提供免费停车。", "zh-Hant": "從市中心搭乘計程車大約需要15-20分鐘，是最方便的選擇。如果自駕，現場提供免費停車。" }
      }
    ]
  },
  footer: {
    desc: {
      en: "An independent guide to The Chronicles of Georgia monument in Tbilisi.",
      ka: "დამოუკიდებელი გზამკვლევი საქართველოს მატიანეს მონუმენტისთვის თბილისში.",
      ru: "Независимый путеводитель по памятнику 'Летопись Грузии' в Тбилиси.",
      "zh-Hans": "关于第比利斯乔治亚编年史纪念碑的独立指南。",
      "zh-Hant": "關於第比利斯喬治亞編年史紀念碑的獨立指南。"
    },
    rights: {
      en: "© 2026 Chronicles of Georgia. All rights reserved.",
      ka: "© 2026 საქართველოს მატიანე. ყველა უფლება დაცულია.",
      ru: "© 2026 Летопись Грузии. Все права защищены.",
      "zh-Hans": "© 2026 乔治亚编年史。保留所有权利。",
      "zh-Hant": "© 2026 喬治亞編年史。保留所有權利。"
    }
  },
  gallery: {
    viewMaps: {
      en: "View all on Maps",
      ka: "ყველაფრის ნახვა რუკაზე",
      ru: "Смотреть все на картах",
      "zh-Hans": "在地图查看全部",
      "zh-Hant": "在地圖查看全部"
    }
  }
};

locales.forEach(loc => {
  const filePath = path.join(__dirname, 'messages', `${loc}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  data.nav.explore = newKeys.nav.explore[loc];
  data.nav.tips = newKeys.nav.tips[loc];
  
  data.hero.galleryLink = newKeys.hero.galleryLink[loc];
  
  data.explore = {
    title: newKeys.explore.title[loc],
    subtitle: newKeys.explore.subtitle[loc],
    items: newKeys.explore.items.map(item => ({
      title: item.title[loc],
      desc: item.desc[loc]
    }))
  };
  
  data.tips = {
    title: newKeys.tips.title[loc],
    items: newKeys.tips.items.map(item => ({
      title: item.title[loc],
      desc: item.desc[loc]
    }))
  };
  
  data.footer.desc = newKeys.footer.desc[loc];
  data.footer.rights = newKeys.footer.rights[loc];
  
  data.gallery.viewMaps = newKeys.gallery.viewMaps[loc];
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
});
