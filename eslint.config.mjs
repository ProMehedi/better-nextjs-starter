import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'app',
  nextjs: true,
  typescript: {
    tsconfigPath: './tsconfig.json'
  },
  formatters: true,
  stylistic: {
    indent: 2,
    semi: false,
    quotes: 'single'
  },
  ignores: ['**/migrations/*', '**/*.md', '.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'src/components/ui/**']
}, {
  rules: {
    'next/no-img-element': ['off'],
    'no-console': ['warn'],
    'style/eol-last': 'off',
    'style/brace-style': ['warn', '1tbs'],
    'style/comma-dangle': ['warn', 'never'],
    'antfu/no-top-level-await': ['off'],
    'ts/strict-boolean-expressions': ['off'],
    'ts/no-floating-promises': ['off'],
    'ts/no-unsafe-member-access': ['off'],
    'ts/no-unsafe-call': ['off'],
    'ts/no-unsafe-argument': ['off'],
    'ts/no-unsafe-assignment': ['off'],
    'ts/no-unsafe-return': ['off'],
    'ts/no-misused-promises': ['off'],
    'ts/unbound-method': ['off'],
    'ts/no-use-before-define': ['off'],
    'node/no-process-env': ['off'],
    'node/prefer-global/process': ['off'],
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
