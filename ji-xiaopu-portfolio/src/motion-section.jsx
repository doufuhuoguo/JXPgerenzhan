import { useRef, useState } from 'react'

const videos = [
  ['01', '修丽可精华液'],
  ['02', '雅诗兰黛粉底液'],
  ['03', '机器人'],
  ['04', '机械键盘'],
]

function MotionVideo({ number, title }) {
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
    <header><span>{number} / 04</span><h3>{title}</h3></header>
    <div className="motion-video-wrap">
      <video ref={videoRef} src={`/motion/motion-${Number(number)}.mp4`} playsInline preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} onTimeUpdate={updateProgress} onLoadedMetadata={updateProgress} />
      <div className="motion-actions"><button className="motion-play" type="button" onClick={togglePlay}>{playing ? '暂停播放' : '开始播放'} <i>{playing ? 'Ⅱ' : '▶'}</i></button></div>
    </div>
    <div className="motion-progress"><span>00:00</span><input aria-label={`${title} 播放进度`} type="range" min="0" max="100" value={progress} onChange={seek} style={{ '--progress': `${progress}%` }} /><span>{Math.round(progress)}%</span></div>
  </article>
}

export function MotionSection() {
  return <section className="motion-gallery" id="motion-gallery" data-reveal><div className="container">
    <header className="motion-heading"><p>MOTION STUDIES</p><h2>动态作品</h2><span>四组动态视觉实验</span></header>
    <div className="motion-list">{videos.map(([number, title]) => <MotionVideo key={number} number={number} title={title} />)}</div>
  </div></section>
}
