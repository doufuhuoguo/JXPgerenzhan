# 冀小璞个人作品集

React + Vite 制作的静态作品集，可直接部署至 Vercel。

## 本地预览

```bash
pnpm install
pnpm dev
```

打开终端显示的网址，通常为 `http://localhost:5173`。

## 部署到 Vercel

1. 在 GitHub 新建一个空仓库。
2. 将本项目文件夹上传至仓库。`.gitignore` 已自动排除原始大图、构建文件与依赖文件。
3. 登录 [Vercel](https://vercel.com)，点击 **Add New → Project**，选择该 GitHub 仓库。
4. 保持默认设置并点击 **Deploy**。项目已包含 `vercel.json`，会自动执行 `pnpm build` 并发布 `dist`。
5. 部署完成后，Vercel 会生成一个 `.vercel.app` 公开网址；在项目 **Settings → Domains** 中可绑定自己的域名。

## 素材说明

- 网站线上实际使用的是 `public/optimized/` 中的 WebP 图片，体积更小，已保留在仓库中。
- `public/projects/`、`public/ai/`、`public/images/` 是本地原始高分辨率素材，仅作备份，不会上传 GitHub；其中含超过 GitHub 单文件上限的图片。
- 动态作品使用 `public/motion/` 中的 MP4 视频。当前 4 个视频均已压缩至 Cloudflare Pages 的 25MB 单文件限制以内；构建时会自动只复制优化图片与这 4 个视频，原始大图不会进入 `dist`。

## 后续修改入口

- `src/main.jsx`：页面结构、文案、联系方式。
- `src/styles.css`：整体视觉、排版与页面细节。
- `src/projects-gallery.jsx`：项目作品数据和展示顺序。
- `src/motion-section.jsx`：动态作品视频。
- `src/ai-gallery.jsx`：AI 辅助设计作品。
