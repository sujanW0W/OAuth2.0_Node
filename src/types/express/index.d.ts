import Userk from './custom'

// to make the file a module and aviod the Typescript error
export {}

declare global{
    namespace Express{
        export interface Request{
            user?: User
        }
    }
}

declare module 'express-session' {
    interface SessionData{
        user?: User
    }
}