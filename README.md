# Vue ✕ Anu starter template

<img width="840" alt="CleanShot 2023-01-12 at 19 45 31@2x" src="https://user-images.githubusercontent.com/46557266/212152668-7ed48ff0-35be-492b-a8bc-197812b7ebb4.png">
<br>


## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 4](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild)
- 🗂 File based routing
- 📦 Auto imported components
- 🫧 Auto imported APIs
- 🫶 [Anu](https://anu-vue.netlify.app/) - DX focused utility base vue component library built on top of UnoCSS
- 🎨 [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.
- 😃 Use icons from any icon sets in [Pure CSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)
- 🍍 [Pinia](https://pinia.vuejs.org/) - The Vue Store that you will enjoy using
- 🛠️ [VueUse](https://vueuse.org/) - Collection of essential Vue Composition Utilities
- 🔮 [Vue Macros](https://vue-macros.sxzz.moe/) - Explore and extend more macros and syntax sugar to Vue
- 💪🏻 TypeScript
- 🧹 ESLint config by [antfu](https://github.com/antfu/eslint-config)
- ☁️ Deploy with zero config

<br>

## Pre-packed

### UI Frameworks

- [Anu](https://anu-vue.netlify.app/) - Component library built on top of UnoCSS
- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine
  - [presetUno](https://github.com/unocss/unocss/tree/main/packages/preset-uno) - Tailwind / Windi CSS compact preset
  - [presetAttributify](https://github.com/unocss/unocss/tree/main/packages/preset-attributify) - Provides Attributify Mode to other presets and rules
  - [presetTypography](https://github.com/unocss/unocss/tree/main/packages/preset-typography) - The typography preset
  - [presetWebFonts](https://github.com/unocss/unocss/tree/main/packages/preset-web-fonts) - Web fonts at ease
  - [presetIcons](https://github.com/unocss/unocss/tree/main/packages/preset-icons) - Pure CSS icons
  - [transformerDirectives](https://github.com/unocss/unocss/tree/main/packages/transformer-directives) - Transformer for `@apply`、`@screen` and `theme()` directives
 - [PostCSS nested](https://www.npmjs.com/package/postcss-nested)

### Icons

- [Iconify](https://iconify.design) - Use icons from any icon set
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)
- Find icons on [Icônes](https://icones.netlify.app/)

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - File system based routing
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - Components auto import
- [`unplugin-vue-macros`](https://vue-macros.sxzz.moe/) - Explore and extend more macros and syntax sugar to Vue

## Use the template

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/mat2ja/vue-anu-starter/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit mat2ja/vue-anu-starter myapp
cd myapp

# Install dependencies
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm

# Start dev server
pnpm dev

# Build for production
pnpm build

# Deploy anywhere
pnpm deploy:vercel # vercel
pnpm deploy:ntl # netlify
pnpm deploy:surge # surge.sh
```

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
