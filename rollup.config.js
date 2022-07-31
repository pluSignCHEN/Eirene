import { defineConfig } from 'rollup';
import * as path from 'path';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';

export default defineConfig({
  input: './lib/index.ts',
  output: [
    {
      file: 'dist/main.js',
      format: 'umd',
      name: 'Eirene',
    },
    {
      file: 'dist/index.js',
      format: 'es',
    },
  ],
  external: [/@babel\/runtime/],
  plugins: [
    nodeResolve({
      extensions: ['.js', '.ts', '.json'],
    }),
    commonjs(),
    babel({
      extensions: ['.js', '.ts'],
      babelHelpers: 'runtime',
      exclude: /node_modules/,
    }),
    alias({
      entries: [{ find: '@', replacement: path.resolve(__dirname, 'lib') }],
    }),
  ],
});
