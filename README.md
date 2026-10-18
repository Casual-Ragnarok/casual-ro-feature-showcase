# 随缘仙境 · 特色介绍

玩家向特色展示站，首个特色为 **PokeWorld 口袋妖怪世界**。

- 特色目录：https://casual-ragnarok.github.io/casual-ro-feature-showcase/
- PokeWorld：https://casual-ragnarok.github.io/casual-ro-feature-showcase/pokeworld/
- 官网：https://casualro.top/

本仓库仅维护公开介绍页面、前端交互和名称形态图鉴。没有服务端源码、数据库、NPC脚本、精灵资源目录或GRF资源。示意内容不等于已开放承诺，以官网公告及游戏实际内容为准。

## 本地检查与发布

Node.js 22+，无需第三方依赖：

```
npm run check
npm run build
```

GitHub Actions 从 main 构建，Pages 仅发布 dist 的白名单静态文件，不发布仓库其他内容。站点使用 GitHub Actions 和 GitHub Pages 默认地址。feature.casualro.top 当前无DNS记录；如需启用，先在DNS服务商添加 CNAME feature → casual-ragnarok.github.io，待解析及证书就绪后再绑定。

主题插画由内置 imagegen 生成，提示词方向为“原创手绘幻想地貌、林间小径、溪流与远方城镇，无角色、无文字”。它是概念插画，并非游戏截图或从游戏包提取的图档。宝可梦及 Ragnarok Online 相关名称与角色权益归各自权利人所有，本站非官方联名。

原创插画文件：`assets/pokeworld-journey.webp`（由生成PNG转换为WebP，仅作网页压缩，未使用游戏图档）。

## 名称形态图鉴

收录当前预览中的 708 种宝可梦、1,941 条外观记录。仅发布全国编号、中英文名称、形态标签与分类；支持检索、形态筛选和分页。不发布预览截图、衍生图集、原始游戏图档、资源路径或战斗配置。首页当前为角色主题构想文字展示，新插画尚未生成成功，原风景插画不再进入发布白名单。绿毛虫进化天空龙为幻想设定，不代表已实装进化路线。
