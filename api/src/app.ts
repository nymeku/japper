import fastify from "fastify";

function build() {
    const app = fastify()
    const v1Prefix = "/api/v1"
    app.get(`${v1Prefix}/vitals`, () => {
        return "OK"
    })

    return app
}

export default build