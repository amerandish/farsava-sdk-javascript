import HttpClient from "../helpers/httpClient";
import IService from "../core/service";
import HealthCheckModel from "../models/health.check";
import { TTSRequestModel } from "../models/tts";

class VoiceService implements IService {
    httpClient: HttpClient;
    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    private parseModelFromJson(pt, json) {
        const instance = Object.create(pt);
        return Object.assign(instance, json);
    }

    async healthCheck(): Promise<HealthCheckModel | null> {
        const result = await this.httpClient.request(
            "/voice/healthcheck",
            "GET"
        );
        if (!result) {
            return null;
        }
        return this.parseModelFromJson(HealthCheckModel.prototype, result.data);
    }

    async tts(data: TTSRequestModel): Promise<string | null> {
        const result = await this.httpClient.request(
            "/voice/tts",
            "POST",
            data,
            "arraybuffer"
        );
        if (!result) {
            return null;
        }
        return result.data;
    }
}

export default VoiceService;
