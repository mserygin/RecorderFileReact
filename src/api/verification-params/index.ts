import Api from "@api/index";

type VerificationParams = {
    params: any,
    user: number
}

export const addVerificationParamsRequest = (data : VerificationParams) => Api.post(`verification-params/add`, data)

export const getParamsByHashRequest = (hash: string) => Api.get(`verification-params/params-by-hash/${hash}`)
