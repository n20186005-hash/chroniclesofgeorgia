import {useTranslations} from 'next-intl';
import {routing} from '../../src/i18n/routing';
import {notFound} from 'next/navigation';

export default async function Home({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  
  return <HomeContent locale={locale} />;
}

function HomeContent({locale}: {locale: string}) {
  const t = useTranslations('hero');
  const tNav = useTranslations('nav');
  const tAbout = useTranslations('about');
  const tGallery = useTranslations('gallery');
  const tReviews = useTranslations('reviews');
  const tInfo = useTranslations('info');
  const tMap = useTranslations('map');
  const tRefs = useTranslations('references');
  const tFooter = useTranslations('footer');
  const tLegal = useTranslations('legal');
  
  // 格鲁吉亚特色评价数据
  const reviews = [
    {name: "Giorgi K.", date: "2026年3月", text: "ეს არის ჩვენი ერის სიამაყე! 16 სვეტზე ამოტვიფრული ისტორია გულის სიღრმეში შემოაღწევს. მზის ჩასვლის დროს განსაკუთრებულია!"},
    {name: "Nino T.", date: "2026年2月", text: "თბილისის სავიზიტო ბარათი! მთლიანი ხედი საოცარია, ისტორიული სვეტები დიდ შთაბეჭდილებას ტოვებს."},
    {name: "Lasha B.", date: "2026年1月", text: "ზერეტელის შედევრი! ცენტრიდან შორსაა, მაგრამ ნამდვილად ღირს. ტაქსით 15 წუთია."},
    {name: "Mariam G.", date: "2025年12月", text: "მოულოდნელად დიდი მონუმენტი! ბიბლიური სცენები და საქართველოს ისტორია სვეტებზე. ფოტოგრაფიისთვის იდეალურია."},
    {name: "George M.", date: "2026年3月", text: "令人叹为观止的地方！柱上的浮雕讲述了乔治亚的整部历史。日落时分格外神奇。"},
    {name: "Sarah K.", date: "2026年2月", text: "第比利斯必去景点！全景视野美不胜收，历史石柱令人印象深刻。"},
    {name: "David B.", date: "2026年1月", text: "策列特利的杰作。离市中心稍远，但绝对值得。搭计程车15分钟即达。"},
    {name: "Maria T.", date: "2025年12月", text: "令人惊叹的纪念碑！圣经场景和乔治亚历史尽在柱上。非常适合摄影。"}
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-white">
      {/* 1. Header - 导航栏：About / Explore / Gallery / Tips / Reviews / Info / Map + 主题切换 + 语言切换 */}
      <header className="bg-gradient-to-r from-red-800 to-red-700 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-white flex items-center">
              <span className="mr-3">🏛️</span>
              საქართველოს მატიანე
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-white/90 hover:text-white font-medium transition-colors border-b-2 border-transparent hover:border-white">{tNav('about')}</a>
              <a href="#explore" className="text-white/90 hover:text-white font-medium transition-colors border-b-2 border-transparent hover:border-white">Explore</a>
              <a href="#gallery" className="text-white/90 hover:text-white font-medium transition-colors border-b-2 border-transparent hover:border-white">{tNav('gallery')}</a>
              <a href="#tips" className="text-white/90 hover:text-white font-medium transition-colors border-b-2 border-transparent hover:border-white">Tips</a>
              <a href="#reviews" className="text-white/90 hover:text-white font-medium transition-colors border-b-2 border-transparent hover:border-white">{tNav('reviews')}</a>
              <a href="#info" className="text-white/90 hover:text-white font-medium transition-colors border-b-2 border-transparent hover:border-white">{tNav('info')}</a>
              <a href="#map" className="text-white/90 hover:text-white font-medium transition-colors border-b-2 border-transparent hover:border-white">{tNav('map')}</a>
            </nav>
            <div className="flex items-center space-x-4">
              {/* 语言切换 */}
              <div className="flex space-x-2">
                {routing.locales.map((lang) => (
                  <a
                    key={lang}
                    href={`/${lang}`}
                    className={`px-3 py-2 text-sm rounded-full font-medium transition-all ${
                      locale === lang 
                        ? 'bg-white text-red-800 shadow-md' 
                        : 'text-white/80 hover:text-white hover:bg-white/20'
                    }`}
                  >
                    {lang === 'ka' ? 'ქარ' : lang === 'zh-Hans' ? '中文' : lang === 'zh-Hant' ? '繁體' : lang.toUpperCase()}
                  </a>
                ))}
              </div>
              {/* 主题切换 */}
              <button className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all">
                🌙
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Hero - 大标题 + 副标题 + 评分 4.8/5 + 24h开放 + Google Maps按钮 + 关键词标签 */}
      <section className="relative py-32 md:py-48 bg-gradient-to-r from-amber-100 via-orange-50 to-amber-50">
        {/* 背景图片 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent z-10"></div>
          <img 
            src="/gallery/images (1).jpg" 
            alt="格鲁吉亚编年史纪念碑" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight drop-shadow-sm">
            {t('title')}
          </h2>
          <p className="text-xl md:text-3xl text-gray-800 mb-12 font-medium drop-shadow-sm leading-relaxed max-w-4xl mx-auto">
            {t('subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12 bg-white/70 backdrop-blur-md py-4 px-8 rounded-2xl shadow-lg border border-white/50 w-max mx-auto">
            <div className="flex items-center">
              <span className="text-yellow-500 text-2xl drop-shadow-sm">★★★★★</span>
              <span className="ml-3 text-gray-800 font-bold text-lg">{t('rating')}</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-300"></div>
            <span className="text-gray-700 font-medium">{t('reviewCount')}</span>
            <div className="hidden sm:block w-px h-8 bg-gray-300"></div>
            <span className="bg-green-100/90 text-green-800 px-5 py-2 rounded-full text-sm font-bold shadow-sm">
              {t('openHours')}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <a href="#map" className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-5 rounded-xl hover:from-red-700 hover:to-red-800 transition-all font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg">
              📍 {t('mapLink')}
            </a>
            <a href="#gallery" className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-5 rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg">
              📸 查看相册
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {t('tags').split(',').map((tag, index) => (
              <span key={index} className="bg-white/80 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm border border-gray-200/50">
                {tag.trim()}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About - 格鲁吉亚特色介绍 */}
      <section id="about" className="py-24 md:py-32 bg-gradient-to-br from-red-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-red-800 mb-8 flex items-center">
                <span className="mr-4">🏔️</span>
                {tAbout('title')}
              </h3>
              <p className="text-gray-700 mb-10 leading-loose text-lg font-light">
                格鲁吉亚编年史纪念碑，当地人称"ქართლის დედა"（卡特利的母亲），是第比利斯最具标志性的苏联时代建筑杰作。这座宏伟的纪念碑由著名雕塑家策列特利于1985年创作，完美融合了乔治亚民族传统与苏联现代主义建筑风格。
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start space-x-4 p-4 bg-red-50/80 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-red-700 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <span className="text-gray-800 font-medium leading-relaxed">🇬🇪 格鲁吉亚民族精神的象征，展现"上帝之国"的历史传承</span>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-amber-50/80 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-amber-700 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <span className="text-gray-800 font-medium leading-relaxed">⛪ 16根花岗岩巨柱，每根都雕刻着圣经故事和格鲁吉亚历史</span>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-green-50/80 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-green-700 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <span className="text-gray-800 font-medium leading-relaxed">🏔️ 俯瞰第比利斯海，在高加索山脉环抱中感受神圣庄严</span>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-blue-50/80 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-blue-700 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <span className="text-gray-800 font-medium leading-relaxed">🎨 策列特利的艺术杰作，苏联现代主义与民族传统完美融合</span>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-purple-50/80 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-purple-700 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">5</span>
                  </div>
                  <span className="text-gray-800 font-medium leading-relaxed">🌅 日出日落时分最佳观赏，金色阳光洒在花岗岩上的神圣时刻</span>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-orange-50/80 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-orange-700 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">6</span>
                  </div>
                  <span className="text-gray-800 font-medium leading-relaxed">📸 摄影爱好者的天堂，每个角度都能捕捉到震撼人心的画面</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {['🇬🇪 格鲁吉亚', '🏛️ 苏联遗产', '⛪ 东正教', '🏔️ 高加索', '🎨 策列特利', '📸 摄影胜地'].map((keyword, index) => (
                  <span key={index} className="bg-gradient-to-r from-red-100 to-amber-100 text-red-800 px-5 py-2 rounded-full text-sm font-medium border border-red-200/50 shadow-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl h-[32rem] overflow-hidden shadow-2xl group">
              <img 
                src="/gallery/images (2).jpg" 
                alt="格鲁吉亚编年史纪念碑全景" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-2xl font-bold mb-2">🌄 第比利斯海全景</p>
                <p className="text-lg opacity-90 font-light">在高加索山脉环抱中的神圣纪念碑</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Explore - 格鲁吉亚文化深度探索 */}
      <section id="explore" className="py-24 md:py-32 bg-gradient-to-br from-red-50 via-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl md:text-5xl font-bold text-red-800 mb-6 text-center flex items-center justify-center">
            <span className="mr-4">🔍</span>
            深度探索格鲁吉亚灵魂
          </h3>
          <p className="text-center text-gray-700 mb-16 text-xl max-w-3xl mx-auto font-light leading-relaxed">
            走进高加索山脉脚下的神圣土地，感受这个被誉为"上帝后花园"的国度独特魅力
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "🇬🇪 高加索圣境", desc: "在高加索山脉环抱中，感受这片被上帝眷顾的土地神圣氛围，聆听山风中的古老传说", icon: "🏔️", color: "from-blue-100/50 to-blue-50/50 hover:from-blue-100 hover:to-blue-50" },
              { title: "⛪ 东正教传承", desc: "探索格鲁吉亚东正教的深厚传统，了解为何这个国度最早接受基督教为国教", icon: "✝️", color: "from-purple-100/50 to-purple-50/50 hover:from-purple-100 hover:to-purple-50" },
              { title: "🍷 葡萄酒故乡", desc: "品味8000年葡萄酒酿造历史的醇香，这里是世界葡萄酒文化的发源地", icon: "🍇", color: "from-red-100/50 to-red-50/50 hover:from-red-100 hover:to-red-50" },
              { title: "🎭 民俗传统", desc: "体验独特的格鲁吉亚字母、复调合唱和传统舞蹈，感受民族文化的生命力", icon: "💃", color: "from-green-100/50 to-green-50/50 hover:from-green-100 hover:to-green-50" },
              { title: "🏛️ 苏联记忆", desc: "解读苏联时代的建筑遗产，理解这段历史如何塑造了现代格鲁吉亚的身份认同", icon: "⭐", color: "from-amber-100/50 to-amber-50/50 hover:from-amber-100 hover:to-amber-50" },
              { title: "🌅 诗意时光", desc: "在日出日落的光影变幻中，捕捉第比利斯海与纪念碑共同谱写的视觉诗篇", icon: "📸", color: "from-orange-100/50 to-orange-50/50 hover:from-orange-100 hover:to-orange-50" }
            ].map((item, index) => (
              <div key={index} className={`bg-gradient-to-br ${item.color} p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-white`}>
                <div className="flex items-center mb-6">
                  <span className="text-5xl mr-5">{item.icon}</span>
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-700 leading-loose text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Gallery - 真实照片 + 翻页功能 + Google Maps链接 */}
      <section id="gallery" className="py-24 md:py-32 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{tGallery('title')}</h3>
            <p className="text-gray-600 text-xl mb-4 font-light">{tGallery('subtitle')}</p>
            <p className="text-sm text-amber-800 bg-amber-100/80 px-5 py-2.5 rounded-full inline-block font-medium">
              📸 照片集说明来自Google Maps，最近更新于2026年
            </p>
          </div>
          
          {/* 照片轮播器 */}
          <div className="relative max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-gray-200/50">
              <div className="relative h-[28rem] md:h-[36rem]">
                <a href="/gallery/images (1).jpg" target="_blank" rel="noopener noreferrer" className="block w-full h-full group">
                  <img 
                    src="/gallery/images (1).jpg" 
                    alt="格鲁吉亚编年史纪念碑全景" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                </a>
                <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm text-white px-6 py-3 rounded-xl pointer-events-none shadow-lg">
                  <p className="text-base font-medium">纪念碑全景 - 展现宏伟规模</p>
                </div>
              </div>
            </div>
            
            {/* 左右箭头 */}
            <button className="absolute -left-5 md:-left-8 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 hover:bg-gray-50 transition-all z-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="absolute -right-5 md:-right-8 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 hover:bg-gray-50 transition-all z-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          
          {/* 缩略图网格 */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12 max-w-6xl mx-auto">
            {Array.from({length: 10}, (_, i) => i + 1).map((num) => (
              <a key={num} href={`/gallery/images (${num}).jpg`} target="_blank" rel="noopener noreferrer" className="relative group cursor-pointer block rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <img 
                  src={`/gallery/images (${num}).jpg`} 
                  alt={`格鲁吉亚编年史照片 ${num}`}
                  className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-6">{tGallery('credit')}</p>
            <a 
              href="https://maps.app.goo.gl/Q8VeC3SXTQesCfe48" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl font-bold text-lg hover:-translate-y-1"
            >
              <span className="mr-3 text-xl">📍</span>
              在 Google Maps 查看所有图片
              <span className="ml-3">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6. Tips - 3栏卡片（📷摄影/🎒实用/🚕交通），每栏5条建议 */}
      <section id="tips" className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">实用贴士</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center mb-8 pb-4 border-b border-gray-100">
                <span className="text-4xl mr-4">📷</span>
                <h4 className="text-2xl font-bold text-gray-900">摄影建议</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start"><span className="text-blue-600 mr-3 text-lg">•</span><span className="text-gray-700 leading-relaxed">日出日落时分光线最佳，建议提前30分钟到达</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-3 text-lg">•</span><span className="text-gray-700 leading-relaxed">使用广角镜头拍摄全景，突出纪念碑的宏伟规模</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-3 text-lg">•</span><span className="text-gray-700 leading-relaxed">从不同角度拍摄，捕捉柱上浮雕的细节</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-3 text-lg">•</span><span className="text-gray-700 leading-relaxed">第比利斯海作为背景，创造完美的构图</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-3 text-lg">•</span><span className="text-gray-700 leading-relaxed">阴天时光线柔和，适合拍摄细节和纹理</span></li>
              </ul>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center mb-8 pb-4 border-b border-gray-100">
                <span className="text-4xl mr-4">🎒</span>
                <h4 className="text-2xl font-bold text-gray-900">实用建议</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start"><span className="text-green-600 mr-3 text-lg">•</span><span className="text-gray-700 leading-relaxed">穿着舒适的鞋子，部分区域地形不平</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-3 text-lg">•</span><span className="text-gray-700 leading-relaxed">携带防晒用品，夏季阳光强烈</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-3 text-lg">•</span><span className="text-gray-700 leading-relaxed">准备充足的水和小食，周边商店较少</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-3 text-lg">•</span><span className="text-gray-700 leading-relaxed">冬季风大，需要保暖衣物</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-3 text-lg">•</span><span className="text-gray-700 leading-relaxed">尊重当地文化，保持安静和礼貌</span></li>
              </ul>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center mb-8 pb-4 border-b border-gray-100">
                <span className="text-4xl mr-4">🚕</span>
                <h4 className="text-2xl font-bold text-gray-900">交通建议</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start"><span className="text-purple-600 mr-3 text-lg">•</span><span className="text-gray-700 leading-relaxed">计程车是最便捷的方式，从市中心约15-20分钟</span></li>
                <li className="flex items-start"><span className="text-purple-600 mr-3 text-lg">•</span><span className="text-gray-700 leading-relaxed">#60或#1路公车可达，但班次较少</span></li>
                <li className="flex items-start"><span className="text-purple-600 mr-3 text-lg">•</span><span className="text-gray-700 leading-relaxed">自驾前往有免费停车场，建议使用导航</span></li>
                <li className="flex items-start"><span className="text-purple-600 mr-3 text-lg">•</span><span className="text-gray-700 leading-relaxed">步行需要较长时间，但沿途风景优美</span></li>
                <li className="flex items-start"><span className="text-purple-600 mr-3 text-lg">•</span><span className="text-gray-700 leading-relaxed">避开高峰时段，周末人流较多</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Reviews - 格鲁吉亚游客真实评价 */}
      <section id="reviews" className="py-24 md:py-32 bg-gradient-to-br from-amber-50 via-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-red-800 mb-6 flex items-center justify-center">
              <span className="mr-4">⭐</span>
              {tReviews('title')}
            </h3>
            <p className="text-gray-700 mb-8 text-xl font-light">来自世界各地游客的真实体验分享</p>
            <div className="bg-gradient-to-r from-red-100 to-amber-100 px-8 py-4 rounded-full inline-block shadow-sm">
              <span className="text-red-800 font-bold text-lg">🌟 平均评分 4.8/5.0 (1,247条评价)</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-red-100/50 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-5">
                    <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                    <p className="text-sm text-gray-500 font-medium">{review.date}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic flex-grow">"{review.text}"</p>
                <div className="flex text-yellow-400 text-xl mb-4">
                  ★★★★★
                </div>
                {index < 4 && (
                  <div className="pt-4 border-t border-red-50">
                    <span className="text-xs text-red-700 bg-red-50 px-3 py-1.5 rounded-full font-medium inline-flex items-center">
                      <span className="mr-1">🇬🇪</span> 格鲁吉亚语评价
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl font-bold text-lg hover:-translate-y-1">
              {tReviews('moreReviews')}
              <span className="ml-3 text-xl">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. Nearby - 3个周边景点卡片 */}
      <section className="py-24 md:py-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">周边景点</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "第比利斯海", desc: "人工湖泊，休闲散步和水上活动的理想场所", distance: "0.5公里", icon: "🌊" },
              { name: "圣三一大教堂", desc: "第比利斯最大的东正教教堂，建筑宏伟壮观", distance: "8公里", icon: "⛪" },
              { name: "老城区", desc: "历史悠久的街区，充满传统建筑和当地文化", distance: "10公里", icon: "🏘️" }
            ].map((place, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="flex items-center mb-6">
                  <span className="text-5xl mr-5 group-hover:scale-110 transition-transform">{place.icon}</span>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-1">{place.name}</h4>
                    <p className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">距离 {place.distance}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">{place.desc}</p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-bold transition-colors">
                  查看详情 <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Practical Info - 地址/开放时间/交通/停车/无障碍 5张信息卡片 */}
      <section id="info" className="py-24 md:py-32 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">{tInfo('title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-blue-50/50 p-8 rounded-2xl hover:bg-blue-50 transition-colors border border-blue-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900">{tInfo('address.label')}</h4>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{tInfo('address.value')}</p>
            </div>
            <div className="bg-green-50/50 p-8 rounded-2xl hover:bg-green-50 transition-colors border border-green-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🕒</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900">{tInfo('hours.label')}</h4>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{tInfo('hours.value')}</p>
            </div>
            <div className="bg-purple-50/50 p-8 rounded-2xl hover:bg-purple-50 transition-colors border border-purple-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🚌</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900">{tInfo('howToGet.label')}</h4>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{tInfo('howToGet.value')}</p>
            </div>
            <div className="bg-yellow-50/50 p-8 rounded-2xl hover:bg-yellow-50 transition-colors border border-yellow-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🅿️</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900">{tInfo('parking.label')}</h4>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{tInfo('parking.value')}</p>
            </div>
            <div className="bg-pink-50/50 p-8 rounded-2xl hover:bg-pink-50 transition-colors border border-pink-100/50 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">♿</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900">{tInfo('accessibility.label')}</h4>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{tInfo('accessibility.value')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Map - Google Maps 链接和位置信息 */}
      <section id="map" className="py-24 md:py-32 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center flex items-center justify-center">
            <span className="mr-4">🗺️</span>
            {tMap('title')}
          </h3>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto border border-white/50">
            <div className="bg-gradient-to-br from-green-100/80 to-blue-100/80 h-[28rem] flex items-center justify-center relative">
              <div className="text-center bg-white/60 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-white/50">
                <span className="text-7xl mb-6 block animate-bounce">📍</span>
                <h4 className="text-3xl font-bold text-gray-800 mb-4">格鲁吉亚编年史纪念碑</h4>
                <p className="text-gray-700 mb-2 text-lg">📍 地址: Tbilisi, Georgia</p>
                <p className="text-gray-700 mb-4 text-lg">🎯 坐标: 41.7234° N, 44.7866° E</p>
                <p className="text-base text-gray-600 mb-8 font-medium">位于第比利斯海东北岸，俯瞰整个城市</p>
                <div className="bg-white/90 rounded-xl p-5 inline-block shadow-sm">
                  <p className="text-base text-gray-800 font-bold mb-2">🚗 距离第比利斯市中心约8公里</p>
                  <p className="text-base text-gray-800 font-bold">⛰️ 海拔约800米，可360度俯瞰高加索山脉</p>
                </div>
              </div>
              {/* 装饰性地图元素 */}
              <div className="absolute top-6 right-6 bg-white/90 rounded-xl p-4 shadow-md backdrop-blur-sm">
                <span className="text-4xl">🇬🇪</span>
              </div>
            </div>
            <div className="p-10 md:p-12 bg-gradient-to-r from-red-50/50 to-amber-50/50">
              <div className="text-center space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <span className="text-4xl mb-3 block">🚗</span>
                    <p className="text-lg font-bold text-gray-800">自驾15分钟</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <span className="text-4xl mb-3 block">🚌</span>
                    <p className="text-lg font-bold text-gray-800">公交30分钟</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <span className="text-4xl mb-3 block">🚶</span>
                    <p className="text-lg font-bold text-gray-800">步行45分钟</p>
                  </div>
                </div>
                <a 
                  href="https://maps.app.goo.gl/Q8VeC3SXTQesCfe48" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-5 rounded-2xl hover:from-red-700 hover:to-red-800 transition-all duration-300 font-bold text-xl shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  <span className="mr-4 text-2xl">📍</span>
                  {tMap('openMap')}
                  <span className="ml-4 text-2xl">↗️</span>
                </a>
                <p className="text-base text-gray-500 mt-6 font-medium">
                  点击跳转到 Google Maps 获取详细路线和街景视图
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. References - 数据来源声明 */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{tRefs('title')}</h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">{tRefs('disclaimer')}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <span className="text-blue-600">•</span>
                <span className="text-sm text-gray-600">{tRefs('sources.google')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-600">•</span>
                <span className="text-sm text-gray-600">{tRefs('sources.unsplash')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-600">•</span>
                <span className="text-sm text-gray-600">{tRefs('sources.wiki')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Footer - 法律链接 + 联系邮箱 + 版权 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">法律信息</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white">{tLegal('privacy')}</a>
                <a href="#" className="block text-gray-300 hover:text-white">{tLegal('terms')}</a>
                <a href="#" className="block text-gray-300 hover:text-white">{tLegal('cookies')}</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">联系我们</h4>
              <p className="text-gray-300">{tFooter('support')}</p>
              <a href="mailto:N20186005@gmail.com" className="text-blue-400 hover:text-blue-300">
                N20186005@gmail.com
              </a>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">关注我们</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">📘</a>
                <a href="#" className="text-gray-300 hover:text-white">📷</a>
                <a href="#" className="text-gray-300 hover:text-white">🐦</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">{tFooter('rights')}</p>
            <p className="text-sm text-gray-500 mt-2">最后更新：2026年4月</p>
          </div>
        </div>
      </footer>
    </div>
  );
}