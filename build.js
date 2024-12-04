import * as esbuild from 'esbuild';

await esbuild.build({
    entryPoints: ['src/index.js'],
    bundle: true,
    platform: 'node',
    target: 'node16',
    outfile: 'dist/index.js',
    banner: {
        js: '#!/usr/bin/env node',
    },
    minify: true,
    format: 'esm',
});

console.log('Build complete ✨');