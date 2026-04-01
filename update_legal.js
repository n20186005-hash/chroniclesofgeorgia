const fs = require('fs');
const path = require('path');

const locales = ['en', 'ka', 'ru', 'zh-Hans', 'zh-Hant'];

const newKeys = {
  legal: {
    privacy: {
      en: "Privacy Policy",
      ka: "კონფიდენციალურობის პოლიტიკა",
      ru: "Политика конфиденциальности",
      "zh-Hans": "隐私政策",
      "zh-Hant": "隱私政策"
    },
    terms: {
      en: "Terms of Service",
      ka: "მომსახურების პირობები",
      ru: "Условия использования",
      "zh-Hans": "服务条款",
      "zh-Hant": "服務條款"
    },
    cookies: {
      en: "Cookie Settings",
      ka: "Cookie-ს პარამეტრები",
      ru: "Настройки файлов cookie",
      "zh-Hans": "Cookie 设置",
      "zh-Hant": "Cookie 設置"
    },
    back: {
      en: "Back to Home",
      ka: "მთავარ გვერდზე დაბრუნება",
      ru: "Вернуться на главную",
      "zh-Hans": "返回首页",
      "zh-Hant": "返回首頁"
    },
    lastUpdated: {
      en: "Last Updated: April 2026",
      ka: "ბოლო განახლება: აპრილი 2026",
      ru: "Последнее обновление: апрель 2026 г.",
      "zh-Hans": "最后更新：2026年4月",
      "zh-Hant": "最後更新：2026年4月"
    }
  },
  privacyPolicy: {
    content: {
      en: [
        "1. Introduction\nWelcome to the Chronicles of Georgia guide. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.",
        "2. The data we collect about you\nWe may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: Technical Data (IP address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform), Usage Data (information about how you use our website).",
        "3. How we use your personal data\nWe will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.",
        "4. Data security\nWe have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.",
        "5. Third-party links\nThis website may include links to third-party websites (like Google Maps), plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements."
      ],
      ka: [
        "1. შესავალი\nკეთილი იყოს თქვენი მობრძანება საქართველოს მატიანეს გზამკვლევში. ჩვენ პატივს ვცემთ თქვენს კონფიდენციალურობას და მზად ვართ დავიცვათ თქვენი პერსონალური მონაცემები. ეს კონფიდენციალურობის პოლიტიკა გაცნობებთ, თუ როგორ ვზრუნავთ თქვენს პერსონალურ მონაცემებზე ჩვენი ვებსაიტის სტუმრობისას.",
        "2. მონაცემები, რომლებსაც ვაგროვებთ თქვენს შესახებ\nჩვენ შეიძლება შევაგროვოთ, გამოვიყენოთ, შევინახოთ და გადავცეთ სხვადასხვა სახის პერსონალური მონაცემები თქვენს შესახებ, რომლებიც დაჯგუფებულია შემდეგნაირად: ტექნიკური მონაცემები (IP მისამართი, ბრაუზერის ტიპი და ვერსია, დროის სარტყელი და ლოკაცია, ოპერაციული სისტემა), გამოყენების მონაცემები (ინფორმაცია იმის შესახებ, თუ როგორ იყენებთ ჩვენს ვებსაიტს).",
        "3. როგორ ვიყენებთ თქვენს პერსონალურ მონაცემებს\nჩვენ გამოვიყენებთ თქვენს პერსონალურ მონაცემებს მხოლოდ მაშინ, როდესაც კანონი ამის უფლებას გვაძლევს. ყველაზე ხშირად, ჩვენ გამოვიყენებთ თქვენს მონაცემებს ჩვენი ლეგიტიმური ინტერესებისთვის.",
        "4. მონაცემთა უსაფრთხოება\nჩვენ მივიღეთ შესაბამისი უსაფრთხოების ზომები, რათა თავიდან ავიცილოთ თქვენი პერსონალური მონაცემების შემთხვევითი დაკარგვა, უნებართვო გამოყენება ან წვდომა.",
        "5. მესამე მხარის ბმულები\nეს ვებსაიტი შეიძლება შეიცავდეს მესამე მხარის ვებსაიტების (მაგალითად, Google Maps) ბმულებს. ამ ბმულებზე დაწკაპუნებამ შეიძლება მესამე მხარეს მისცეს თქვენი მონაცემების შეგროვების საშუალება. ჩვენ არ ვაკონტროლებთ მათ და არ ვართ პასუხისმგებელი მათ კონფიდენციალურობის პოლიტიკაზე."
      ],
      ru: [
        "1. Введение\nДобро пожаловать в путеводитель по Летописи Грузии. Мы уважаем вашу конфиденциальность и обязуемся защищать ваши личные данные. Эта политика конфиденциальности сообщит вам о том, как мы заботимся о ваших личных данных при посещении нашего веб-сайта.",
        "2. Данные, которые мы собираем о вас\nМы можем собирать, использовать, хранить и передавать различные виды личных данных о вас, которые мы сгруппировали следующим образом: Технические данные (IP-адрес, тип и версия браузера, часовой пояс и местоположение, операционная система), Данные об использовании (информация о том, как вы используете наш веб-сайт).",
        "3. Как мы используем ваши личные данные\nМы будем использовать ваши личные данные только тогда, когда это разрешено законом. Чаще всего мы будем использовать ваши данные для наших законных интересов.",
        "4. Безопасность данных\nМы приняли соответствующие меры безопасности, чтобы предотвратить случайную потерю, несанкционированное использование или доступ к вашим личным данным.",
        "5. Ссылки третьих лиц\nЭтот веб-сайт может содержать ссылки на сторонние веб-сайты (например, Google Maps). Нажатие на эти ссылки может позволить третьим лицам собирать данные о вас. Мы не контролируем эти веб-сайты и не несем ответственности за их заявления о конфиденциальности."
      ],
      "zh-Hans": [
        "1. 引言\n欢迎访问乔治亚编年史指南。我们尊重您的隐私，并致力于保护您的个人数据。本隐私政策将告知您在访问我们网站时，我们如何保护您的个人数据。",
        "2. 我们收集的关于您的数据\n我们可能会收集、使用、存储和传输关于您的不同种类的个人数据，分类如下：技术数据（IP地址、浏览器类型和版本、时区设置和位置、操作系统和平台）、使用数据（关于您如何使用我们网站的信息）。",
        "3. 我们如何使用您的个人数据\n我们只会在法律允许的情况下使用您的个人数据。最常见的情况是：为了我们（或第三方）的合法利益所必需，且您的利益和基本权利不凌驾于这些利益之上。",
        "4. 数据安全\n我们已采取适当的安全措施，以防止您的个人数据意外丢失、以未经授权的方式使用或访问、更改或披露。",
        "5. 第三方链接\n本网站可能包含指向第三方网站（如Google Maps）、插件和应用程序的链接。点击这些链接或启用这些连接可能允许第三方收集或共享关于您的数据。我们无法控制这些第三方网站，也不对其隐私声明负责。"
      ],
      "zh-Hant": [
        "1. 引言\n歡迎訪問喬治亞編年史指南。我們尊重您的隱私，並致力於保護您的個人數據。本隱私政策將告知您在訪問我們網站時，我們如何保護您的個人數據。",
        "2. 我們收集的關於您的數據\n我們可能會收集、使用、存儲和傳輸關於您的不同種類的個人數據，分類如下：技術數據（IP地址、瀏覽器類型和版本、時區設置和位置、操作系統和平台）、使用數據（關於您如何使用我們網站的信息）。",
        "3. 我們如何使用您的個人數據\n我們只會在法律允許的情況下使用您的個人數據。最常見的情況是：為了我們（或第三方）的合法利益所必需，且您的利益和基本權利不凌駕於這些利益之上。",
        "4. 數據安全\n我們已採取適當的安全措施，以防止您的個人數據意外丟失、以未經授權的方式使用或訪問、更改或披露。",
        "5. 第三方鏈接\n本網站可能包含指向第三方網站（如Google Maps）、插件和應用程序的鏈接。點擊這些鏈接或啟用這些連接可能允許第三方收集或共享關於您的數據。我們無法控制這些第三方網站，也不對其隱私聲明負責。"
      ]
    }
  },
  termsOfService: {
    content: {
      en: [
        "1. Acceptance of Terms\nBy accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.",
        "2. Description of Service\nThis website provides an independent informational guide about The Chronicles of Georgia monument. The information is provided 'as is' without warranties of any kind.",
        "3. Intellectual Property\nAll content included on this site, such as text, graphics, logos, images, is the property of the website owner or its content suppliers and protected by international copyright laws.",
        "4. User Conduct\nYou agree not to use the website for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the website in any way that could damage the website or general business.",
        "5. Limitation of Liability\nIn no event shall the website owners be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of the website."
      ],
      ka: [
        "1. პირობების მიღება\nამ ვებსაიტზე წვდომით და გამოყენებით, თქვენ ეთანხმებით ამ შეთანხმების პირობებს.",
        "2. მომსახურების აღწერა\nეს ვებსაიტი გთავაზობთ დამოუკიდებელ საინფორმაციო გზამკვლევს საქართველოს მატიანეს მონუმენტის შესახებ. ინფორმაცია მოწოდებულია ისე როგორც არის, ყოველგვარი გარანტიის გარეშე.",
        "3. ინტელექტუალური საკუთრება\nამ საიტზე განთავსებული ყველა შინაარსი (ტექსტი, გრაფიკა, ლოგოები, სურათები) არის საიტის მფლობელის საკუთრება და დაცულია საავტორო უფლებებით.",
        "4. მომხმარებლის ქცევა\nთქვენ ეთანხმებით, რომ არ გამოიყენებთ ვებსაიტს რაიმე უკანონო მიზნით, ან ისეთი გზით, რამაც შეიძლება ზიანი მიაყენოს ვებსაიტს.",
        "5. პასუხისმგებლობის შეზღუდვა\nვებსაიტის მფლობელები არ არიან პასუხისმგებელი ვებსაიტის გამოყენების შედეგად წარმოშობილ პირდაპირ ან ირიბ ზიანზე."
      ],
      ru: [
        "1. Принятие условий\nЗаходя на этот веб-сайт и используя его, вы принимаете и соглашаетесь соблюдать условия этого соглашения.",
        "2. Описание сервиса\nЭтот веб-сайт предоставляет независимый информационный путеводитель по памятнику Летопись Грузии. Информация предоставляется «как есть» без каких-либо гарантий.",
        "3. Интеллектуальная собственность\nВесь контент, размещенный на этом сайте (текст, графика, логотипы, изображения), является собственностью владельца веб-сайта и защищен законами об авторских правах.",
        "4. Поведение пользователя\nВы соглашаетесь не использовать веб-сайт в любых незаконных целях или любым способом, который может нанести ущерб веб-сайту.",
        "5. Ограничение ответственности\nВладельцы веб-сайта ни при каких обстоятельствах не несут ответственности за любой прямой или косвенный ущерб, возникший в связи с использованием вами веб-сайта."
      ],
      "zh-Hans": [
        "1. 接受条款\n通过访问和使用本网站，您接受并同意受本协议条款和规定的约束。",
        "2. 服务描述\n本网站提供关于乔治亚编年史纪念碑的独立信息指南。信息按“原样”提供，不提供任何形式的担保。",
        "3. 知识产权\n本网站包含的所有内容，如文本、图形、徽标、图像，均为网站所有者或其内容供应商的财产，并受国际版权法保护。",
        "4. 用户行为\n您同意不将本网站用于任何非法目的或本条款禁止的任何目的。您同意不以任何可能损害网站或一般业务的方式使用本网站。",
        "5. 责任限制\n在任何情况下，网站所有者均不对因您使用本网站而引起或与之相关的任何直接、间接、偶然、后果性、特殊或惩罚性损害负责。"
      ],
      "zh-Hant": [
        "1. 接受條款\n通過訪問和使用本網站，您接受並同意受本協議條款和規定的約束。",
        "2. 服務描述\n本網站提供關於喬治亞編年史紀念碑的獨立信息指南。信息按“原樣”提供，不提供任何形式的擔保。",
        "3. 知識產權\n本網站包含的所有內容，如文本、圖形、徽標、圖像，均為網站所有者或其內容供應商的財產，並受國際版權法保護。",
        "4. 用戶行為\n您同意不將本網站用於任何非法目的或本條款禁止的任何目的。您同意不以任何可能損害網站或一般業務的方式使用本網站。",
        "5. 責任限制\n在任何情況下，網站所有者均不對因您使用本網站而引起或與之相關的任何直接、間接、偶然、後果性、特殊或懲罰性損害負責。"
      ]
    }
  },
  cookieSettings: {
    description: {
      en: "We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. Please choose your preferences below.",
      ka: "ჩვენ ვიყენებთ ქუქი-ფაილებს თქვენი დათვალიერების გამოცდილების გასაუმჯობესებლად. გთხოვთ, აირჩიოთ თქვენი პრეფერენციები ქვემოთ.",
      ru: "Мы используем файлы cookie для улучшения вашего опыта просмотра. Пожалуйста, выберите ваши предпочтения ниже.",
      "zh-Hans": "我们使用 Cookie 来增强您的浏览体验、提供个性化内容并分析我们的流量。请在下方选择您的偏好设置。",
      "zh-Hant": "我們使用 Cookie 來增強您的瀏覽體驗、提供個性化內容並分析我們的流量。請在下方選擇您的偏好設置。"
    },
    saveBtn: {
      en: "Save Preferences",
      ka: "პრეფერენციების შენახვა",
      ru: "Сохранить настройки",
      "zh-Hans": "保存偏好设置",
      "zh-Hant": "保存偏好設置"
    },
    items: {
      necessary: {
        title: { en: "Strictly Necessary Cookies", ka: "აუცილებელი ქუქი-ფაილები", ru: "Строго необходимые файлы cookie", "zh-Hans": "绝对必要的 Cookie", "zh-Hant": "絕對必要的 Cookie" },
        desc: { en: "These cookies are essential for the website to function properly and cannot be switched off.", ka: "ეს ქუქი-ფაილები აუცილებელია ვებსაიტის სწორად ფუნქციონირებისთვის.", ru: "Эти файлы cookie необходимы для правильной работы веб-сайта.", "zh-Hans": "这些 Cookie 对于网站的正常运行是必不可少的，无法关闭。", "zh-Hant": "這些 Cookie 對於網站的正常運行是必不可少的，無法關閉。" },
        alwaysActive: { en: "Always Active", ka: "ყოველთვის აქტიური", ru: "Всегда активны", "zh-Hans": "始终启用", "zh-Hant": "始終啟用" }
      },
      analytics: {
        title: { en: "Analytics Cookies", ka: "ანალიტიკური ქუქი-ფაილები", ru: "Аналитические файлы cookie", "zh-Hans": "分析 Cookie", "zh-Hant": "分析 Cookie" },
        desc: { en: "Help us understand how visitors interact with the website by collecting and reporting information anonymously.", ka: "გვეხმარება გავიგოთ, როგორ იყენებენ სტუმრები ვებსაიტს.", ru: "Помогают нам понять, как посетители взаимодействуют с веб-сайтом.", "zh-Hans": "通过匿名收集和报告信息，帮助我们了解访问者如何与网站互动。", "zh-Hant": "通過匿名收集和報告信息，幫助我們了解訪問者如何與網站互動。" }
      },
      marketing: {
        title: { en: "Marketing Cookies", ka: "მარკეტინგული ქუქი-ფაილები", ru: "Маркетинговые файлы cookie", "zh-Hans": "营销 Cookie", "zh-Hant": "營銷 Cookie" },
        desc: { en: "Used to track visitors across websites. The intention is to display ads that are relevant and engaging.", ka: "გამოიყენება სტუმრების თვალყურის სადევნებლად ვებსაიტებზე.", ru: "Используются для отслеживания посетителей на веб-сайтах.", "zh-Hans": "用于跟踪跨网站的访问者。目的是显示相关且引人入胜的广告。", "zh-Hant": "用於跟踪跨網站的訪問者。目的是顯示相關且引人入勝的廣告。" }
      }
    }
  }
};

locales.forEach(loc => {
  const filePath = path.join(__dirname, 'messages', `${loc}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  if (!data.legal) data.legal = {};
  data.legal.privacy = newKeys.legal.privacy[loc];
  data.legal.terms = newKeys.legal.terms[loc];
  data.legal.cookies = newKeys.legal.cookies[loc];
  data.legal.back = newKeys.legal.back[loc];
  data.legal.lastUpdated = newKeys.legal.lastUpdated[loc];
  
  data.privacyPolicy = { content: newKeys.privacyPolicy.content[loc] };
  data.termsOfService = { content: newKeys.termsOfService.content[loc] };
  
  data.cookieSettings = {
    description: newKeys.cookieSettings.description[loc],
    saveBtn: newKeys.cookieSettings.saveBtn[loc],
    items: {
      necessary: {
        title: newKeys.cookieSettings.items.necessary.title[loc],
        desc: newKeys.cookieSettings.items.necessary.desc[loc],
        alwaysActive: newKeys.cookieSettings.items.necessary.alwaysActive[loc]
      },
      analytics: {
        title: newKeys.cookieSettings.items.analytics.title[loc],
        desc: newKeys.cookieSettings.items.analytics.desc[loc]
      },
      marketing: {
        title: newKeys.cookieSettings.items.marketing.title[loc],
        desc: newKeys.cookieSettings.items.marketing.desc[loc]
      }
    }
  };
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
});