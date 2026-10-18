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

## 宝可梦图鉴

收录当前开发预览中的 708 种宝可梦、1,941 条外观记录，支持中英文名称、全国编号、形态筛选及分页。公开数据仅包含全国编号、名称、形态标签与分类，不包含战斗配置、掉落、捕获概率、内部 ID、原始资源路径或来源映射。

经仓库所有者明确授权，网页展示重新缩小并叠加 PokeWorld 水印的低分辨率图集。此授权限于展示缩略图，不包含原始 GRF / SPR / ACT 文件。发布内容采用显式白名单。

封面与详情主图采用仓库所有者提供并授权发布的主题插画（`assets/pokeworld-cover.jpg`），完整保留原图构图。绿毛虫进化天空龙属于幻想主题构想，不代表已实装进化路线。此前风景插画不再进入发布白名单。

小智帽普通及闪光皮卡丘归为羁绊形态；圣诞帽普通及闪光皮卡丘归为圣诞时装。图鉴取消预设关键词按钮，保留自由检索与形态下拉筛选。
