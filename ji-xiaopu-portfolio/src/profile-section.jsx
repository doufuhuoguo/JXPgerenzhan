export function ProfileSection() {
  return <section className="profile-page" id="profile" data-reveal>
    <div className="container">
      <header className="profile-heading">
        <p>WORK EXPERIENCE</p>
        <h2>个人简介</h2>
      </header>
      <div className="profile-grid">
        <figure className="profile-photo">
          <img src="/optimized/images/ji-xiaopu-portrait.webp" alt="冀小璞" />
        </figure>
        <div className="profile-content">
          <p className="profile-kicker">ABOUT JI XIAOPU</p>
          <h3>Hi, I am 冀小璞</h3>
          <p className="profile-intro">拥有一年多乙方品牌设计公司从业经验，深耕3D渲染设计，积累了海量商业品牌项目实操经验，以光影、材质和镜头语言，为品牌建立清晰、有质感的视觉表达。</p>
          <div className="profile-facts">
            <div><small>教育经历</small><p>武汉理工大学</p></div>
            <div><small>核心工具</small><p>C4D / Octane Render / Redshift</p></div>
            <div><small>工作经历</small><p>潜云品牌设计公司</p></div>
            <div><small>协作品牌</small><p>追觅、石头、方太、Vidda、好太太、慕思、宜婴</p></div>
          </div>
          <div className="profile-metrics">
            <div><b>3D</b><span>产品与商业视觉</span></div>
            <div><b>OC / RS</b><span>渲染表现</span></div>
            <div><b>10+</b><span>协作品牌</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
