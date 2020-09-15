import HttpClient from "../helpers/http.client";

export default abstract class BaseService {
    protected httpClient: HttpClient;
    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }
    protected parseModelFromJson(pt, json) {
        const instance = Object.create(pt);
        return Object.assign(instance, json);
    }
}
