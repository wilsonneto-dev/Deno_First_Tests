console.log('deno here...');

const url = Deno.args[0];
const res = await fetch(
  'https://gist.githubusercontent.com/wilsonneto-dev/52a74c42c7b27faf6738dcd099a14b48/raw/5d7f794ff5682bed1d5b95feee180a3e70fb0f53/just-hello-world.txt'
);

const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);
