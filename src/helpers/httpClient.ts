import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class HttpClient {
    private client: AxiosInstance;
    private baseUrl: string;
    private apiKey: string;
    constructor(apiKey: string, baseUrl: string) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
        this.client = axios.create({
            baseURL: baseUrl,
            timeout: 10e3,
            headers: {
                Authorization: `bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
        });
    }
    getBaseUrl(): string {
        return this.baseUrl;
    }
    getApiKey(): string {
        return this.apiKey;
    }
    async request(
        url: string,
        method: AxiosRequestConfig["method"],
        body: undefined | any = undefined
    ): Promise<AxiosResponse<any> | null> {
        try {
            const result = await this.client.request({
                url: url,
                method: method,
                data: body,
            });
            return result;
        } catch (error) {
            if (error.response) {
                return error.response as AxiosResponse;
            }
            return null;
        }
    }
}

export default HttpClient;
