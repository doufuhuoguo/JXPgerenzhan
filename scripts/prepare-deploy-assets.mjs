import { cp, mkdir, rm } from 'node:fs/promises'
import { resolve } from 'node:path'

const publicDir = resolve('public')
const deployDir = resolve('.deploy-public')

await rm(deployDir, { recursive: true, force: true })
await mkdir(deployDir, { recursive: true })

// Only publish assets referenced by the current page. Original working files,
// removed AI assets, and the duplicate legacy home/baby folder stay local.
await mkdir(resolve(deployDir, 'optimized', 'projects'), { recursive: true })
await cp(resolve(publicDir, 'optimized', 'images'), resolve(deployDir, 'optimized', 'images'), { recursive: true })
for (const category of ['大家电', '产品白底图', 'home-baby', '包装']) {
  await cp(
    resolve(publicDir, 'optimized', 'projects', category),
    resolve(deployDir, 'optimized', 'projects', category),
    { recursive: true },
  )
}
await cp(resolve(publicDir, 'motion'), resolve(deployDir, 'motion'), { recursive: true })
