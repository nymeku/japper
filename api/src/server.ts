import build from "./app";

const PORT = 4000
const HOST = "0.0.0.0"

export default async function start() {
    const server = build()
    server.listen({ host: HOST, port: PORT }, (err, address) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }
        console.log(server.printRoutes())
        console.log(`⚡️ server listening at ${address}`)
    })
}

start()