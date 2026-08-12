const studies = [
  ['01', '发光效果添加'],
  ['02', '产品和场景融合'],
  ['03', '去除物体'],
  ['04', '高清放大'],
  ['05', '水滴液体效果添加'],
  ['06', '产品质感提升'],
]

export function AiGallery() {
  return <section className="ai-gallery" id="ai-gallery" data-reveal><div className="container">
    <header className="ai-heading"><p>AI ASSISTED DESIGN</p><h2>AI辅助设计</h2><span>图像创意与视觉增强实验</span></header>
    <div className="ai-grid">{studies.map(([number, title]) => <figure className="ai-card" key={number}><img src={`/optimized/ai/ai-${Number(number)}.webp`} alt={title} loading="lazy" decoding="async" /><figcaption><span>{number} / 06</span><b>{title}</b></figcaption></figure>)}</div>
  </div></section>
}
