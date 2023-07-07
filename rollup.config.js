import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import packageJSON from './package.json' assert { type: 'json'};

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: packageJSON.main,
        format: 'cjs',
      },
      {
        file: packageJSON.module,
        format: 'esm',
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json'})
    ]
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  }
]