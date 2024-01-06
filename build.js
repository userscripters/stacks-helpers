import { build } from 'esbuild';

await build({
    entryPoints: [ 'src/index.ts' ],
    bundle: true,
    outfile: 'dist/stacks_helpers.js',
});