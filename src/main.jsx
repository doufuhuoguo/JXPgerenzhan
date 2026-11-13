import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './hero-refinement.css'
import './hero-title-refinement.css'
import './navigation-sections.css'
import './profile-section.css'
import './profile-type-refinement.css'
import './projects-gallery.css'
import './motion-section.css'
import './motion-category.css'
import './grainient-fallback.css'
import './portfolio-motion.css'
import './section-title-refinement.css'
import './version-two.css'
import { ProfileSection } from './profile-section.jsx'
import { ProjectsGallery } from './projects-gallery.jsx'
import { MotionSection } from './motion-section.jsx'

const projects = [
  { number: '01', title: 'DREAME', tag: '品牌视觉 / 三维渲染', type: 'blue' },
  { number: '02', title: 'ROBOROCK', tag: '商业视觉 / 产品表达', type: 'orange' },
  { number: '03', title: 'FOTILE', tag: '品牌项目 / CGI', type: 'green' },
  { number: '04', title: 'SELECTED BRANDS', tag: 'Vidda · 好太太 · 慕思 · 宜婴', type: 'violet' },
]

const capabilities = [
  ['01', '三维制作', 'C4D 三维建模、材质、灯光与画面构建。'],
  ['02', '渲染表现', 'Octane Render / Redshift 的高质感商业渲染。'],
  ['03', '动态设计', '以节奏和镜头组织品牌视觉叙事。'],
  ['04', 'AI 辅助设计', '将 AI 纳入视觉探索与设计流程。'],
]

function ContactSection() {
  const [copied, setCopied] = useState('')
  const copyContact = async (value, label) => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = value
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      textarea.remove()
    }
    setCopied(label)
    window.setTimeout(() => setCopied(''), 1800)
  }

  return <section className="contact" id="contact">
    <div className="contact-glow" />
    <div className="container contact-inner">
      <p className="eyebrow">04 / LET'S CONNECT</p>
      <h2>Looking forward to the <span>next creation.</span></h2>
      <div className="contact-details" aria-label="联系方式">
        <button type="button" className="contact-copy" onClick={() => copyContact('3347374195@qq.com', '邮箱')}>
          <small>EMAIL</small><span>3347374195@qq.com</span><b>{copied === '邮箱' ? '已复制' : '复制'}</b>
        </button>
        <button type="button" className="contact-copy" onClick={() => copyContact('13903203283', '电话')}>
          <small>PHONE</small><span>13903203283</span><b>{copied === '电话' ? '已复制' : '复制'}</b>
        </button>
      </div>
      <footer><span>© 2026 JI XIAOPU</span><span>3D RENDERING DESIGNER</span><a href="#top">BACK TO TOP ↑</a></footer>
    </div>
  </section>
}

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' })
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return <main>
    <section className="hero" id="top">
      <div className="hero-video" aria-hidden="true"><span className="horizon" /><span className="trail trail-a" /><span className="trail trail-b" /><span className="trail trail-c" /><span className="reflection" /></div>
      <div className="grain" />
      <header className="nav container">
        <a className="mark" href="#top" aria-label="ji xiaopu">
          <span aria-hidden="true">XP</span><b>ji xiaopu</b>
        </a>
        <nav><a href="#profile">01 / 个人简介</a><a href="#projects">02 / 项目作品</a><a href="#motion-gallery">03 / 动态作品</a></nav>
        <a className="contact-link" href="#contact">CONTACT <i>↗</i></a>
      </header>
      <div className="hero-content container">
        <p className="eyebrow">JI XIAOPU / SELECTED PORTFOLIO</p>
        <h1><span>THREE DIMENSIONS</span><strong>PORTFOLIO<i>.</i></strong></h1>
        <p className="hero-chinese">冀 小 璞 ／ 三 维 渲 染 设 计 师</p>
        <div className="hero-bottom"><div className="hero-services"><span>三维制作</span><span>商业视觉</span><span>动态设计</span><span>AI 辅助设计</span></div><a href="#profile" className="scroll">开始查看 <b>↓</b></a><p className="hero-statement"><span>DESIGN</span> IS NOT DECORATION</p></div>
      </div>
      <p className="side-label">CRAFTING VISUAL DIMENSIONS</p>
    </section>

    <section className="about section container" id="about">
      <div className="section-label"><span>01</span> PROFILE</div>
      <div className="about-layout">
        <div className="portrait"><div className="portrait-orb" /><p>PORTRAIT<br/>PLACEHOLDER</p></div>
        <div className="about-copy">
          <p className="lead">以三维为语言，把产品与品牌的想象，落进有温度的商业视觉。</p>
          <p>冀小璞是一名三维渲染设计师，聚焦产品商业视觉、三维制作与动态表达。曾参与潜云品牌设计公司的商业项目，为多个消费品牌进行视觉创作与渲染表现。</p>
          <div className="facts"><div><small>EDUCATION</small><strong>教育经历待补充</strong></div><div><small>EXPERIENCE</small><strong>潜云品牌设计公司</strong></div><div><small>CONTACT</small><strong>联系方式待补充</strong></div></div>
        </div>
      </div>
    </section>

    <ProfileSection />

    <ProjectsGallery />

    <section className="work section" id="work">
      <div className="container"><div className="section-label"><span>02</span> SELECTED WORK <em>以下为简历中出现的品牌项目占位，待替换真实作品素材与项目说明。</em></div>
      <div className="project-grid">{projects.map((project) => <article className={`project ${project.type}`} key={project.number}><div className="project-light" /><div className="project-art"><span className="orb" /><span className="slab" /></div><div className="project-meta"><small>{project.number} / {project.tag}</small><h2>{project.title}</h2><i>↗</i></div></article>)}</div></div>
    </section>

    <MotionSection />

    <section className="showcase-section section" id="motion">
      <div className="container"><div className="section-label"><span>03</span> MOTION WORK</div><div className="showcase-stage motion-stage"><div><small>MOTION REEL / PLACEHOLDER</small><h2>动态作品</h2><p>动态作品素材待补充</p></div><b>PLAY&nbsp; ↗</b></div></div>
    </section>

    <section className="expertise section container" id="skills">
      <div className="section-label"><span>03</span> EXPERTISE</div>
      <div className="expertise-top"><h2>技术只是工具，<br/>感知才是核心。</h2><p>从概念到最终画面，以细节、节奏与光影建立一种可被感知的品牌体验。</p></div>
      <div className="capabilities">{capabilities.map(([num, name, text]) => <article key={num}><span>{num}</span><h3>{name}</h3><p>{text}</p><b>+</b></article>)}</div>
    </section>

    <ContactSection />
  </main>
}
createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
