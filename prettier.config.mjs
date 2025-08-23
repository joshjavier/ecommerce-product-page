/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  tailwindStylesheet: './app/globals.css',
  tailwindFunctions: ['cn'],
  importOrder: [
    '',
    '^react$',
    '^next$',
    '^next/.*$',
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '^@/.*$',
    '^[.]',
    '^(?!.*[.]css$)[./].*$',
    '.css$',
  ],
  importOrderTypeScriptVersion: '5.0.0',
}

export default config
