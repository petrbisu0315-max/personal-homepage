# DAWN / personal homepage

这是根据 `xhs_video.mp4` 中的视觉结构制作的个人主页占位版：米白纸张背景、钉板作品墙、极简导航、About / Archive 页面和作品详情弹层。

## 运行

```powershell
npm install
npm run dev
```

然后打开终端输出的本地地址。

## 替换为自己的内容

主要编辑 `profile.js`：

- 姓名、职位、简介和指标
- 教育经历、工作经历、技能与 AI 探索方向
- `github` 和后续确认后的作品集链接

页面结构和交互主要在 `main.js`，视觉细节集中在 `styles.css` 与 `styles-profile.css`。

视觉细节和响应式规则集中在 `styles.css`，作品卡片目前用 CSS 图形做了占位，后续可以把 `.card-art` 替换为真实图片或视频缩略图。
