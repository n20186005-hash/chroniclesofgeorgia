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
  
  // 获取评价数据
  const reviews = [
    {name: "George M.", date: "2026年3月", text: "令人叹为观止的地方！柱上的浮雕讲述了乔治亚的整部历史。日落时分格外神奇。"},
    {name: "Sarah K.", date: "2026年2月", text: "第比利斯必去景点！全景视野美不胜收，历史石柱令人印象深刻。"},
    {name: "David B.", date: "2026年1月", text: "策列特利的杰作。离市中心稍远，但绝对值得。搭计程车15分钟即达。"},
    {name: "Maria T.", date: "2025年12月", text: "令人惊叹的纪念碑！圣经场景和乔治亚历史尽在柱上。非常适合摄影。"},
    {name: "Luke J.", date: "2025年11月", text: "隐藏的宝藏。游客不多，氛围宁静。推荐清晨或傍晚前往。"},
    {name: "Anna S.", date: "2025年10月", text: "我见过最令人震撼的纪念碑之一。石柱的规模令人叹为观止。"},
    {name: "Tom W.", date: "2025年9月", text: "第比利斯的隐藏瑰宝。从纪念碑眺望第比利斯海的景色太棒了。"},
    {name: "Nick P.", date: "2025年8月", text: "摄影的绝佳场所。苏联时代纪念碑艺术的巅峰之作。"}
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* 1. Header - 导航栏：About / Explore / Gallery / Tips / Reviews / Info / Map + 主题切换 + 语言切换 */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-2xl font-bold text-gray-900">საქართველოს მატიანე</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-600 hover:text-gray-900">{tNav('about')}</a>
              <a href="#explore" className="text-gray-600 hover:text-gray-900">Explore</a>
              <a href="#gallery" className="text-gray-600 hover:text-gray-900">{tNav('gallery')}</a>
              <a href="#tips" className="text-gray-600 hover:text-gray-900">Tips</a>
              <a href="#reviews" className="text-gray-600 hover:text-gray-900">{tNav('reviews')}</a>
              <a href="#info" className="text-gray-600 hover:text-gray-900">{tNav('info')}</a>
              <a href="#map" className="text-gray-600 hover:text-gray-900">{tNav('map')}</a>
            </nav>
            <div className="flex items-center space-x-4">
              {/* 语言切换 */}
              <div className="flex space-x-2">
                {routing.locales.map((lang) => (
                  <a
                    key={lang}
                    href={`/${lang}`}
                    className={`px-2 py-1 text-sm rounded ${
                      locale === lang 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </a>
                ))}
              </div>
              {/* 主题切换 */}
              <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                🌙
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Hero - 大标题 + 副标题 + 评分 4.8/5 + 24h开放 + Google Maps按钮 + 关键词标签 */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-6xl font-bold text-gray-900 mb-6">
            {t('title')}
          </h2>
          <p className="text-2xl text-gray-600 mb-8">
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
            <a href="#map" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              {t('mapLink')}
            </a>
            <a href="#gallery" className="bg-gray-200 text-gray-800 px-8 py-4 rounded-lg hover:bg-gray-300 transition-colors font-semibold">
              {t('gallery')}
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

      {/* 3. About - 简介描述 + 6条亮点列表 + 关键词标签 */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-8">{tAbout('title')}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {tAbout('description')}
              </p>
              <div className="grid grid-cols-1 gap-4 mb-8">
                {Object.entries(tAbout('highlights')).map(([key, value]) => (
                  <div key={key} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{key.charAt(1)}</span>
                    </div>
                    <span className="text-gray-700">{value as string}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {tAbout('keywords').split(',').map((keyword, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {keyword.trim()}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">纪念碑全景图片</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Explore - 5个编号深度话题 */}
      <section id="explore" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">深度探索</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "暗黑美学", desc: "探索纪念碑在黄昏和夜晚的神秘氛围，了解光影如何塑造艺术感受", icon: "🌙" },
              { title: "建筑历史", desc: "深入了解苏联现代主义建筑风格，以及策列特利的创作理念和过程", icon: "🏛️" },
              { title: "摄影指南", desc: "最佳拍摄角度、光线条件和构图技巧，让你的照片更出彩", icon: "📸" },
              { title: "交通路线", desc: "详细的交通指南，包括公共交通、自驾和步行路线规划", icon: "🚗" },
              { title: "文化神话", desc: "解读柱上浮雕的圣经故事和乔治亚历史传说的深层含义", icon: "📚" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{item.icon}</span>
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Gallery - 8张照片 grid + Unsplash 来源声明 */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">{tGallery('title')}</h3>
            <p className="text-gray-600 text-lg">{tGallery('subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {Object.entries(tGallery('captions')).map(([key, caption]) => (
              <div key={key} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 h-56 flex items-center justify-center">
                  <span className="text-gray-500">照片 {key.charAt(1)}</span>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600">{caption as string}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">{tGallery('credit')}</p>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
              {tGallery('moreLink')}
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

      {/* 7. Reviews - 8条精选评价卡片 + 箭头按钮链接 Google Maps */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">{tReviews('title')}</h3>
            <p className="text-gray-600 mb-6">{tReviews('declaration')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.date}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{review.text}</p>
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>
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

      {/* 10. Map - Google Maps iframe 嵌入 + 打开按钮 */}
      <section id="map" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center">{tMap('title')}</h3>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl mb-4 block">🗺️</span>
                <p className="text-gray-600 mb-4">Google Maps 地图嵌入区域</p>
                <p className="text-sm text-gray-500">地址: {tMap('address')}</p>
              </div>
            </div>
            <div className="p-6 bg-white">
              <div className="text-center">
                <a href="#" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  {tMap('openMap')}
                  <span className="ml-2">↗️</span>
                </a>
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