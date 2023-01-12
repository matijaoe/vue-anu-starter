import { presetThemeDefault } from '@anu-vue/preset-theme-default'
import { theme } from '@unocss/preset-mini'
import { presetAnu, presetIconExtraProperties } from 'anu-vue'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['icon-btn', 'text-[0.95em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-primary !outline-none'],
  ],
  theme: {
    colors: {
      base: theme.colors?.zinc,
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: {
          name: 'Inter',
          provider: 'google',
        },
        mono: {
          name: 'Fira Mono',
          provider: 'google',
        },
      },
    }),
    presetIcons({
      scale: 1.2,
      extraProperties: presetIconExtraProperties,
    }),
    presetAnu(),
    presetThemeDefault(),
  ],
  include: [/.*\/anu-vue\.js(.*)?$/, './**/*.vue', './**/*.md'],
  transformers: [
    transformerDirectives(),
    // transformerVariantGroup(),
  ],
})
