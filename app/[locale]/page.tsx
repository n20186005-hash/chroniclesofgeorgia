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
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-2xl font-bold text-gray-900">საქართველოს მატიანე</h1>
            <nav className="flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">简介</a>
              <a href="#gallery" className="text-gray-600 hover:text-gray-900">相册</a>
              <a href="#reviews" className="text-gray-600 hover:text-gray-900">评价</a>
              <a href="#info" className="text-gray-600 hover:text-gray-900">资讯</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            乔治亚编年史
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            讲述乔治亚3000年历史的纪念碑柱群
          </p>
          <div className="flex justify-center items-center space-x-6 mb-8">
            <div className="flex items-center">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <span className="ml-2 text-gray-700">4.8/5</span>
            </div>
            <span className="text-gray-500">12,626 则评价</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              24小时开放
            </span>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="#map" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              在Google Maps中打开
            </a>
            <a href="#gallery" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors">
              查看相册
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">探索编年史</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                乔治亚编年史是雕塑家祖拉布·策列特利的纪念碑作品——16根高达35米的巨大石柱矗立在第比利斯海畔。1985年开始建造，至今仍未正式完工。柱身雕刻着圣经故事和乔治亚历史场景。
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">16根纪念碑柱</h4>
                  <p className="text-sm text-gray-600">高35米</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">圣经和历史浮雕</h4>
                  <p className="text-sm text-gray-600">每根柱上都有</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">第比利斯海全景</h4>
                  <p className="text-sm text-gray-600">视野开阔</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">24小时免费开放</h4>
                  <p className="text-sm text-gray-600">全天开放</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <span className="text-gray-500">纪念碑图片</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">照片集</h3>
            <p className="text-gray-600">纪念碑及其周边环境</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1,2,3,4,5,6,7,8].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">图片 {item}</span>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600">照片说明 {item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">真实游客评价</h3>
            <p className="text-gray-600">评分和评价来自Google地图</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {name: "George M.", date: "2026年3月", text: "令人叹为观止的地方！柱上的浮雕讲述了乔治亚的整部历史。日落时分格外神奇。"},
              {name: "Sarah K.", date: "2026年2月", text: "第比利斯必去景点！全景视野美不胜收，历史石柱令人印象深刻。"},
              {name: "David B.", date: "2026年1月", text: "策列特利的杰作。离市中心稍远，但绝对值得。搭计程车15分钟即达。"}
            ].map((review, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.date}</p>
                  </div>
                </div>
                <p className="text-gray-700">{review.text}</p>
                <div className="flex text-yellow-400 mt-4">
                  ★★★★★
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">实用资讯</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">地址</h4>
              <p className="text-gray-600">QRC6+65V, Chronicles of Georgia Temqa, 第比利斯, 乔治亚</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">开放时间</h4>
              <p className="text-gray-600">24小时开放 — 免费入场。最佳拍摄时间为日出或日落。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">如何前往</h4>
              <p className="text-gray-600">从第比利斯市中心：搭计程车15-20分钟。搭公车：#60或#1路往第比利斯海方向。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">停车场</h4>
              <p className="text-gray-600">现场提供免费停车。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4">如需本网站的技术支援，请联系：N20186005@gmail.com</p>
          <p className="text-gray-400">© 2026 乔治亚编年史 · 保留所有权利。</p>
        </div>
      </footer>
    </div>
  );
}