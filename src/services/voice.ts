import HttpClient from "../helpers/httpClient";
import BaseService from "../core/service";
import HealthCheckModel from "../models/health.check";
import { TTSRequestModel } from "../models/tts";

class VoiceService extends BaseService {
    constructor(httpClient: HttpClient) {
        super(httpClient);
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
