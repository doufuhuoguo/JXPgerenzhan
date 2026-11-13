import { useState } from 'react'

const groups = [
  { id: '01', title: '大家电', items: [
    ['VIDDA', ['c3 京东 750 1000 2.0 (2).jpg', '图层 2.png']], ['方太', ['M1, 3.png']], ['惠尔顿', ['图层 2.png']], ['汽车', ['car-01.jpg']],
    ['方太', ['M1,2.png', 'M1,4.png', 'M1.png', 'M3,1.png', '产品0000.png', '图层 2.png', '一体0000.png']],
    ['石头扫地机', ['场景10018.png', '椅子脚0043.png', '主机0020.png', '主机都有0024.png']], ['石头洗衣机', ['00气泡布料.png', 'Beauty.png', 'tu0000.png', '背景加蓝光0000.png']],
    ['科隆空调', ['sss350000.png']], ['追觅', ['22220000.png', 'Desktop0000.png', 'quNNWNGJIhn0000.png', 'tu0000.png', '主要合成.png']]
  ]},
  { id: '02', title: '产品白底图', items: [
    ['方太', ['产品测试0000.png']], ['好太太', ['白底图.png', '俯视特写0000.png', '上边特写0000.png']], ['韶音', ['耳机0000.png']],
    ['石头', ['xuanran0000.png', '上下水0000.png', '水桶打光0071.png', '主机反对0024.png', '主机正0000.png']]
  ]},
  { id: '03', title: '家居母婴', folder: 'home-baby', items: [
    ['慕思', ['mousse-01.png', 'mousse-02.png', 'mousse-03.png', 'mousse-04.png', 'mousse-05.png']],
    ['宜婴', ['yiying-01.png', 'yiying-02.png', 'yiying-03.png', 'yiying-04.png', 'yiying-05.png']]
  ]},
  { id: '04', title: '包装', items: [['包装', ['20000.png', '产品MatriX10 Ultra黑0138.png', '斜构图10000.png', '正面3个0000.png']]] }
]

const path = (category, folder, brand, filename) => {
  const optimizedName = filename === 'car-01.jpg' ? filename : filename.replace(/\.(png|jpe?g)$/i, '.webp')
  return encodeURI(`/optimized/projects/${folder || category}/${folder ? '' : brand === category ? '' : `${brand}/`}${optimizedName}`)
}

export function ProjectsGallery() {
  const [expanded, setExpanded] = useState(false)
  return <section className="projects-gallery" id="projects" data-reveal>
    <div className="container"><header className="gallery-heading"><p>SELECTED PROJECTS</p><h2>项目作品</h2></header>
      {(expanded ? groups : groups.slice(0, 1)).map((group) => { const entries = group.items.flatMap(([brand, files]) => files.map((file) => ({ brand, file }))); const visibleEntries = expanded ? entries : entries.slice(0, 4); return <section className={`gallery-category ${expanded ? '' : 'is-collapsed'}`} key={group.id}><header><span>{group.id}</span><h3>{group.title}</h3><em>{entries.length} ITEMS</em></header><div className="gallery-grid">
        {visibleEntries.map(({ brand, file }, index) => <figure className={`gallery-card card-${index % 7}`} key={`${brand}-${file}`}><img src={path(group.title, group.folder, brand, file)} alt={`${brand} 项目作品`} loading="lazy" decoding="async" /><figcaption><span>{group.id} / {String(index + 1).padStart(2, '0')}</span><b>{brand}</b></figcaption></figure>)}
      </div></section>})}
      <button className="gallery-toggle" type="button" onClick={() => setExpanded((value) => !value)}>{expanded ? '收起作品' : '展示全部作品'} <span>{expanded ? '↑' : '↓'}</span></button>
    </div>
  </section>
}
