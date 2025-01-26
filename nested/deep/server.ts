import { serve } from 'bun'

const server = serve({
  fetch() {
    return new Response('Hello World!')
  },
})

console.log(`Listening on localhost:${server.port}`)