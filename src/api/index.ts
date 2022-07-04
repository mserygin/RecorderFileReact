import api from "axios"

const instance = api.create({
    baseURL: 'http://localhost:3022',
})

class Api {

    static async get(url: string) {
        return await instance.get(url)
    }

    static async post(url: string, data: any) {
        return await instance.post(url, data)
    }

    static async put(url: string, data: any) {
        return await instance.put(url, data)
    }

    static async delete(url: string, data: any) {
        return await instance.delete(url, {data: data})
    }
}

export default Api

