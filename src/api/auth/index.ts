import Api from "../index"

type DataAuth = {
    login: string
    password: string
}

export const loginRequest = (dataAuth:DataAuth) => Api.post(`user/login`, dataAuth)


