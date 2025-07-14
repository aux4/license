import { createRequire } from 'module';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

export default {
  input: 'index.js',
  output: {
    file: 'package/lib/aux4-license.cjs',
    format: 'cjs',
    banner: '#!/usr/bin/env node',
    exports: 'named'
  },
  external: [],
  plugins: [
    nodeResolve({
      preferBuiltins: true
    }),
    commonjs(),
    json(),
    getBabelOutputPlugin({
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: '20'
            }
          }
        ]
      ]
    })
  ]
};