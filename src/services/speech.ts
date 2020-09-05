import HttpClient from "../helpers/httpClient";
import BaseService from "../core/service";
import HealthCheckModel from "../models/health.check";
import { ASRRequestModel, ASRResponseModel } from "../models/asr";

class SpeechService extends BaseService {
    constructor(httpClient: HttpClient) {
        super(httpClient);
    }

    async healthCheck(): Promise<HealthCheckModel | null> {
        const result = await this.httpClient.request(
            "/speech/healthcheck",
            "GET"
        );
        if (!result) {
            return null;
        }
        return this.parseModelFromJson(HealthCheckModel.prototype, result.data);
    }

    async asr(data: ASRRequestModel): Promise<ASRResponseModel | null> {
        const result = await this.httpClient.request(
            "/speech/asr",
            "POST",
            data
        );
        if (!result) {
            return null;
        }
        return this.parseModelFromJson(ASRResponseModel.prototype, result.data);
    }
}

export default SpeechService;
