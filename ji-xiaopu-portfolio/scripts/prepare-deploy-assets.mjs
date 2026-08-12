import { cp, mkdir, rm } from 'node:fs/promises'
import { resolve } from 'node:path'

const publicDir = resolve('public')
const deployDir = resolve('.deploy-public')

await rm(deployDir, { recursive: true, force: true })
await mkdir(deployDir, { recursive: true })

// Only publish assets referenced by the site. Original high-resolution working
// files remain in public/ for local backup but are not copied to deployment.
await cp(resolve(publicDir, 'optimized'), resolve(deployDir, 'optimized'), { recursive: true })
await cp(resolve(publicDir, 'motion'), resolve(deployDir, 'motion'), { recursive: true })
