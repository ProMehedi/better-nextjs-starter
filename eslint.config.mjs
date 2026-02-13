import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'app',
  nextjs: true,
  node: {
    overrides: {
      'node/no-process-env': 'error',
      'node/prefer-global/process': 'off'
    }
  },
  typescript: {
    tsconfigPath: './tsconfig.json'
  },
  formatters: true,
  stylistic: {
    indent: 2,
    semi: false,
    quotes: 'single'
  },
  ignores: ['**/migrations/*', '*.md', '.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'src/components/ui/**']
}, {
  rules: {
    'no-console': ['warn'],
    'style/eol-last': 'off',
    'style/brace-style': ['warn', '1tbs'],
    'style/comma-dangle': ['warn', 'never'],
    'antfu/no-top-level-await': ['off'],
    'style/no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 0
    }],
    'perfectionist/sort-imports': ['error', {
      tsconfig: {
        rootDir: '.'
      }
    }],
    'unicorn/filename-case': ['error', {
      case: 'kebabCase',
      ignore: [/\.md$/]
    }]
  }
})
