import HttpClient from "../helpers/httpClient";
import IService from "../core/service";
import HealthCheckModel from "../models/health.check";
import { AsrRequestModel, AsrResponseModel } from "../models/asr";

class SpeechService implements IService {
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
            "/speech/healthcheck",
            "GET"
        );
        if (!result) {
            return null;
        }
        if (result.status === 200) {
            return this.parseModelFromJson(
                HealthCheckModel.prototype,
                result.data
            );
        }
        // TODO: for other status codes
        return null;
    }

    async asr(data: AsrRequestModel): Promise<AsrResponseModel | null> {
        const result = await this.httpClient.request(
            "/speech/asr",
            "POST",
            data
        );
        if (!result) {
            return null;
        }
        if (result.status === 200) {
            return this.parseModelFromJson(
                AsrResponseModel.prototype,
                result.data
            );
        }
        // TODO: for other status codes
        return null;
    }
}

export default SpeechService;
