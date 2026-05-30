# TYE.LOG

使用 Astro、MDX 和自定义浅色主题构建的静态技术博客。

## 本地开发

```powershell
pnpm install
pnpm dev
```

如果 PowerShell 阻止执行 `pnpm.ps1`，使用 `pnpm.cmd` 替代 `pnpm`。

## 验证

```powershell
$env:ASTRO_TELEMETRY_DISABLED = "1"
pnpm.cmd test
pnpm.cmd run check
pnpm.cmd run build
pnpm.cmd run verify:dist
```

## GitHub Pages

仓库默认按普通项目仓库 `Tyeblog` 配置。推送到 `main` 后，
`.github/workflows/deploy.yml` 会自动使用仓库所有者和仓库名生成 Pages 地址。

本地需要模拟其他部署地址时，可以覆盖环境变量：

```powershell
$env:SITE_URL = "https://username.github.io"
$env:BASE_PATH = "/Tyeblog"
pnpm.cmd run build
```

