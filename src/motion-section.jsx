import { useRef, useState } from 'react'

const projectWorks = [
  ['01', '华为手机 / 横版', 'huawei-horizontal.mp4'],
  ['02', '华为手机 / 竖版', 'huawei-vertical.mp4'],
]

const personalWorks = [
  ['01', '纽崔莱', 'nutrilite.mp4'],
  ['02', '修丽可精华液', 'motion-1.mp4'],
  ['03', '雅诗兰黛粉底液', 'motion-2.mp4'],
  ['04', '机器人', 'motion-3.mp4'],
  ['05', '机械键盘', 'motion-4.mp4'],
]

function MotionVideo({ number, title, source, total }) {
  const videoRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [playing, setPlaying] = useState(false)
  const updateProgress = () => {
    const video = videoRef.current
    if (video?.duration) setProgress((video.currentTime / video.duration) * 100)
  }
  const seek = (event) => {
    const video = videoRef.current
    const next = Number(event.target.value)
    if (video?.duration) {
      video.currentTime = (next / 100) * video.duration
      setProgress(next)
    }
  }
  const togglePlay = async () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      if (video.ended) video.currentTime = 0
      video.muted = false
      await video.play()
      setPlaying(true)
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  return <article className="motion-item">
    <header><span>{number} / {String(total).padStart(2, '0')}</span><h3>{title}</h3></header>
    <div className="motion-video-wrap">
      <video ref={videoRef} src={`/motion/${source}`} playsInline preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} onTimeUpdate={updateProgress} onLoadedMetadata={updateProgress} />
      <div className="motion-actions"><button className="motion-play" type="button" onClick={togglePlay}>{playing ? '暂停播放' : '开始播放'} <i>{playing ? 'Ⅱ' : '▶'}</i></button></div>
    </div>
    <div className="motion-progress"><span>00:00</span><input aria-label={`${title} 播放进度`} type="range" min="0" max="100" value={progress} onChange={seek} style={{ '--progress': `${progress}%` }} /><span>{Math.round(progress)}%</span></div>
  </article>
}

export function MotionSection() {
  return <section className="motion-gallery" id="motion-gallery" data-reveal><div className="container">
    <header className="motion-heading"><h2>动态作品</h2><p>MOTION STUDIES</p></header>
    <section className="motion-category"><header><p>01 / PROJECT WORKS</p><h3>项目作品</h3></header><div className="motion-list">{projectWorks.map(([number, title, source]) => <MotionVideo key={source} number={number} title={title} source={source} total={projectWorks.length} />)}</div></section>
    <section className="motion-category"><header><p>02 / PERSONAL WORKS</p><h3>个人作品</h3></header><div className="motion-list">{personalWorks.map(([number, title, source]) => <MotionVideo key={source} number={number} title={title} source={source} total={personalWorks.length} />)}</div></section>
  </div></section>
}
