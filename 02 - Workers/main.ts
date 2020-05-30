// -> deno run --allow-read main.ts

new Worker('./worker.ts', { type: 'module' });
