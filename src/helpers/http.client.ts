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
                "content-type": "application/json",
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
        body: undefined | any = undefined,
        responseType: AxiosRequestConfig["responseType"] | undefined = undefined
    ): Promise<AxiosResponse<any> | null> {
        try {
            const result = await this.client.request({
                url: url,
                method: method,
                data: body,
                responseType: responseType,
            });
            return result;
        } catch (error) {
            if (error.response) {
                const response = error.response as AxiosResponse;
                console.debug(response);
            }
            throw error;
        }
    }
}

export default HttpClient;
