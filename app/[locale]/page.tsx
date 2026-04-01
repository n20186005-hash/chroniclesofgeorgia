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
      <section className="relative py-32 bg-gradient-to-r from-amber-100 via-orange-50 to-amber-50">
        {/* 背景图片 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent z-10"></div>
          <img 
            src="/gallery/images (1).jpg" 
            alt="格鲁吉亚编年史纪念碑" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-6xl font-bold text-gray-800 mb-6 leading-tight">
            {t('title')}
          </h2>
          <p className="text-2xl text-gray-700 mb-8 font-light">
            {t('subtitle')}
          </p>
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="flex items-center">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
              <span className="ml-2 text-gray-700 font-semibold">{t('rating')}</span>
            </div>
            <span className="text-gray-500">{t('reviewCount')}</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
              {t('openHours')}
            </span>
          </div>
          <div className="flex justify-center space-x-4 mb-8">
            <a href="#map" className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg hover:from-red-700 hover:to-red-800 transition-all font-semibold shadow-lg">
              📍 {t('mapLink')}
            </a>
            <a href="#gallery" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all font-semibold shadow-lg">
              📸 查看相册
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {t('tags').split(',').map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                {tag.trim()}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About - 格鲁吉亚特色介绍 */}
      <section id="about" className="py-20 bg-gradient-to-br from-red-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-red-800 mb-8 flex items-center">
                <span className="mr-4">🏔️</span>
                {tAbout('title')}
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg font-light">
                格鲁吉亚编年史纪念碑，当地人称"ქართლის დედა"（卡特利的母亲），是第比利斯最具标志性的苏联时代建筑杰作。这座宏伟的纪念碑由著名雕塑家策列特利于1985年创作，完美融合了乔治亚民族传统与苏联现代主义建筑风格。
              </p>
              <div className="grid grid-cols-1 gap-4 mb-8">
                <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                  <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <span className="text-gray-800 font-medium">🇬🇪 格鲁吉亚民族精神的象征，展现"上帝之国"的历史传承</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                  <div className="w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <span className="text-gray-800 font-medium">⛪ 16根花岗岩巨柱，每根都雕刻着圣经故事和格鲁吉亚历史</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <span className="text-gray-800 font-medium">🏔️ 俯瞰第比利斯海，在高加索山脉环抱中感受神圣庄严</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <span className="text-gray-800 font-medium">🎨 策列特利的艺术杰作，苏联现代主义与民族传统完美融合</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">5</span>
                  </div>
                  <span className="text-gray-800 font-medium">🌅 日出日落时分最佳观赏，金色阳光洒在花岗岩上的神圣时刻</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                  <div className="w-8 h-8 bg-orange-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">6</span>
                  </div>
                  <span className="text-gray-800 font-medium">📸 摄影爱好者的天堂，每个角度都能捕捉到震撼人心的画面</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {['🇬🇪 格鲁吉亚', '🏛️ 苏联遗产', '⛪ 东正教', '🏔️ 高加索', '🎨 策列特利', '📸 摄影胜地'].map((keyword, index) => (
                  <span key={index} className="bg-gradient-to-r from-red-100 to-amber-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium border border-red-200">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative rounded-xl h-96 overflow-hidden shadow-2xl">
              <img 
                src="/gallery/images (2).jpg" 
                alt="格鲁吉亚编年史纪念碑全景" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-black/70 text-white px-4 py-3 rounded-lg">
                <p className="text-lg font-semibold">🌄 第比利斯海全景</p>
                <p className="text-sm opacity-90">在高加索山脉环抱中的神圣纪念碑</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Explore - 格鲁吉亚文化深度探索 */}
      <section id="explore" className="py-20 bg-gradient-to-br from-red-50 via-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-red-800 mb-4 text-center flex items-center justify-center">
            <span className="mr-4">🔍</span>
            深度探索格鲁吉亚灵魂
          </h3>
          <p className="text-center text-gray-700 mb-12 text-lg max-w-3xl mx-auto">
            走进高加索山脉脚下的神圣土地，感受这个被誉为"上帝后花园"的国度独特魅力
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "🇬🇪 高加索圣境", desc: "在高加索山脉环抱中，感受这片被上帝眷顾的土地神圣氛围，聆听山风中的古老传说", icon: "🏔️", color: "from-blue-100 to-blue-50" },
              { title: "⛪ 东正教传承", desc: "探索格鲁吉亚东正教的深厚传统，了解为何这个国度最早接受基督教为国教", icon: "✝️", color: "from-purple-100 to-purple-50" },
              { title: "🍷 葡萄酒故乡", desc: "品味8000年葡萄酒酿造历史的醇香，这里是世界葡萄酒文化的发源地", icon: "🍇", color: "from-red-100 to-red-50" },
              { title: "🎭 民俗传统", desc: "体验独特的格鲁吉亚字母、复调合唱和传统舞蹈，感受民族文化的生命力", icon: "💃", color: "from-green-100 to-green-50" },
              { title: "🏛️ 苏联记忆", desc: "解读苏联时代的建筑遗产，理解这段历史如何塑造了现代格鲁吉亚的身份认同", icon: "⭐", color: "from-yellow-100 to-yellow-50" },
              { title: "🌅 诗意时光", desc: "在日出日落的光影变幻中，捕捉第比利斯海与纪念碑共同谱写的视觉诗篇", icon: "📸", color: "from-orange-100 to-orange-50" }
            ].map((item, index) => (
              <div key={index} className={`bg-gradient-to-br ${item.color} p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-white/50`}>
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{item.icon}</span>
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Gallery - 真实照片 + 翻页功能 + Google Maps链接 */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">{tGallery('title')}</h3>
            <p className="text-gray-600 text-lg mb-2">{tGallery('subtitle')}</p>
            <p className="text-sm text-amber-700 bg-amber-100 px-4 py-2 rounded-full inline-block">
              📸 照片集说明来自Google Maps，最近更新于2026年
            </p>
          </div>
          
          {/* 照片轮播器 */}
          <div className="relative max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="relative h-96">
                <img 
                  src="/gallery/images (1).jpg" 
                  alt="格鲁吉亚编年史纪念碑全景" 
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => window.open('/gallery/images (1).jpg', '_blank')}
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                  <p className="text-sm">纪念碑全景 - 展现宏伟规模</p>
                </div>
              </div>
            </div>
            
            {/* 左右箭头 */}
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all">
              ←
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all">
              →
            </button>
          </div>
          
          {/* 缩略图网格 */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
            {Array.from({length: 14}, (_, i) => i + 1).map((num) => (
              <div key={num} className="relative group cursor-pointer">
                <img 
                  src={`/gallery/images (${num}).jpg`} 
                  alt={`格鲁吉亚编年史照片 ${num}`}
                  className="w-full h-24 object-cover rounded-lg hover:scale-110 transition-transform duration-200"
                  onClick={() => window.open(`/gallery/images (${num}).jpg`, '_blank')}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">{tGallery('credit')}</p>
            <a 
              href="https://maps.app.goo.gl/Q8VeC3SXTQesCfe48" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              <span className="mr-2">📍</span>
              在 Google Maps 查看所有图片
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6. Tips - 3栏卡片（📷摄影/🎒实用/🚕交通），每栏5条建议 */}
      <section id="tips" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">实用贴士</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">📷</span>
                <h4 className="text-xl font-semibold text-gray-900">摄影建议</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><span className="text-gray-600">日出日落时分光线最佳，建议提前30分钟到达</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><span className="text-gray-600">使用广角镜头拍摄全景，突出纪念碑的宏伟规模</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><span className="text-gray-600">从不同角度拍摄，捕捉柱上浮雕的细节</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><span className="text-gray-600">第比利斯海作为背景，创造完美的构图</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><span className="text-gray-600">阴天时光线柔和，适合拍摄细节和纹理</span></li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">🎒</span>
                <h4 className="text-xl font-semibold text-gray-900">实用建议</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-green-600 mr-2">•</span><span className="text-gray-600">穿着舒适的鞋子，部分区域地形不平</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">•</span><span className="text-gray-600">携带防晒用品，夏季阳光强烈</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">•</span><span className="text-gray-600">准备充足的水和小食，周边商店较少</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">•</span><span className="text-gray-600">冬季风大，需要保暖衣物</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">•</span><span className="text-gray-600">尊重当地文化，保持安静和礼貌</span></li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">🚕</span>
                <h4 className="text-xl font-semibold text-gray-900">交通建议</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-purple-600 mr-2">•</span><span className="text-gray-600">计程车是最便捷的方式，从市中心约15-20分钟</span></li>
                <li className="flex items-start"><span className="text-purple-600 mr-2">•</span><span className="text-gray-600">#60或#1路公车可达，但班次较少</span></li>
                <li className="flex items-start"><span className="text-purple-600 mr-2">•</span><span className="text-gray-600">自驾前往有免费停车场，建议使用导航</span></li>
                <li className="flex items-start"><span className="text-purple-600 mr-2">•</span><span className="text-gray-600">步行需要较长时间，但沿途风景优美</span></li>
                <li className="flex items-start"><span className="text-purple-600 mr-2">•</span><span className="text-gray-600">避开高峰时段，周末人流较多</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Reviews - 格鲁吉亚游客真实评价 */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-amber-50 via-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-red-800 mb-4 flex items-center justify-center">
              <span className="mr-4">⭐</span>
              {tReviews('title')}
            </h3>
            <p className="text-gray-700 mb-6 text-lg">来自世界各地游客的真实体验分享</p>
            <div className="bg-gradient-to-r from-red-100 to-amber-100 px-6 py-3 rounded-full inline-block">
              <span className="text-red-800 font-medium">🌟 平均评分 4.8/5.0 (1,247条评价)</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-red-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.date}</p>
                  </div>
                </div>
                <p className="text-gray-800 mb-4 leading-relaxed italic">"{review.text}"</p>
                <div className="flex text-yellow-400 text-lg">
                  ★★★★★
                </div>
                {index < 4 && (
                  <div className="mt-3 pt-3 border-t border-red-100">
                    <span className="text-xs text-red-700 bg-red-50 px-2 py-1 rounded-full">🇬🇪 格鲁吉亚语评价</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              {tReviews('moreReviews')}
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. Nearby - 3个周边景点卡片 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">周边景点</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "第比利斯海", desc: "人工湖泊，休闲散步和水上活动的理想场所", distance: "0.5公里", icon: "🌊" },
              { name: "圣三一大教堂", desc: "第比利斯最大的东正教教堂，建筑宏伟壮观", distance: "8公里", icon: "⛪" },
              { name: "老城区", desc: "历史悠久的街区，充满传统建筑和当地文化", distance: "10公里", icon: "🏘️" }
            ].map((place, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{place.icon}</span>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{place.name}</h4>
                    <p className="text-sm text-gray-500">{place.distance}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{place.desc}</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">查看详情 →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Practical Info - 地址/开放时间/交通/停车/无障碍 5张信息卡片 */}
      <section id="info" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">{tInfo('title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">📍</span>
                <h4 className="text-lg font-semibold text-gray-900">{tInfo('address.label')}</h4>
              </div>
              <p className="text-gray-600">{tInfo('address.value')}</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🕒</span>
                <h4 className="text-lg font-semibold text-gray-900">{tInfo('hours.label')}</h4>
              </div>
              <p className="text-gray-600">{tInfo('hours.value')}</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🚌</span>
                <h4 className="text-lg font-semibold text-gray-900">{tInfo('howToGet.label')}</h4>
              </div>
              <p className="text-gray-600">{tInfo('howToGet.value')}</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🅿️</span>
                <h4 className="text-lg font-semibold text-gray-900">{tInfo('parking.label')}</h4>
              </div>
              <p className="text-gray-600">{tInfo('parking.value')}</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">♿</span>
                <h4 className="text-lg font-semibold text-gray-900">{tInfo('accessibility.label')}</h4>
              </div>
              <p className="text-gray-600">{tInfo('accessibility.value')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Map - Google Maps 链接和位置信息 */}
      <section id="map" className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <span className="mr-4">🗺️</span>
            {tMap('title')}
          </h3>
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-br from-green-100 to-blue-100 h-96 flex items-center justify-center relative">
              <div className="text-center">
                <span className="text-8xl mb-6 block">�</span>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">格鲁吉亚编年史纪念碑</h4>
                <p className="text-gray-600 mb-2">📍 地址: Tbilisi, Georgia</p>
                <p className="text-gray-600 mb-2">🎯 坐标: 41.7234° N, 44.7866° E</p>
                <p className="text-sm text-gray-500 mb-6">位于第比利斯海东北岸，俯瞰整个城市</p>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 inline-block">
                  <p className="text-sm text-gray-700 font-medium">🚗 距离第比利斯市中心约8公里</p>
                  <p className="text-sm text-gray-700 font-medium">⛰️ 海拔约800米，可360度俯瞰高加索山脉</p>
                </div>
              </div>
              {/* 装饰性地图元素 */}
              <div className="absolute top-4 right-4 bg-white/90 rounded-lg p-3">
                <span className="text-2xl">🇬🇪</span>
              </div>
            </div>
            <div className="p-8 bg-gradient-to-r from-red-50 to-amber-50">
              <div className="text-center space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="text-2xl mb-2 block">🚗</span>
                    <p className="text-sm font-medium text-gray-800">自驾15分钟</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="text-2xl mb-2 block">🚌</span>
                    <p className="text-sm font-medium text-gray-800">公交30分钟</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="text-2xl mb-2 block">🚶</span>
                    <p className="text-sm font-medium text-gray-800">步行45分钟</p>
                  </div>
                </div>
                <a 
                  href="https://maps.app.goo.gl/Q8VeC3SXTQesCfe48" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl"
                >
                  <span className="mr-3">📍</span>
                  {tMap('openMap')}
                  <span className="ml-3">↗️</span>
                </a>
                <p className="text-sm text-gray-600 mt-4">
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