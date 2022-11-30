declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT?: string
            MONGO_CONNECT: string
            SECRET_KEY: string
            NODE_ENV: string
        }
    }
}
export {}
