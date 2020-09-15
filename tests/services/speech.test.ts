import fs from "fs";

import * as Farsava from "../../lib/farsava";
import BaseService from "../../lib/core/service";

const {
    HealthCheckModel,
    RecognitionAudioModel,
    RecognitionConfigModel,
    ASRRequestModel,
    ASRResponseModel,
} = Farsava.Models;

const config = require("../data/config.json");

const BASE_URL = config.BaseUrl;
const API_KEY = config.APIKey;
const AUDIO_FILE_PATH = config.AudioPath;

const sdk = new Farsava.SDK({
    baseUrl: BASE_URL,
    apiKey: API_KEY,
});
const service = sdk.speech;

describe("check service", () => {
    it("test service", () => {
        expect(service).not.toBeNull();
        expect(service).toBeInstanceOf(BaseService);
    });
});

describe("success results", () => {
    it("health check", async (done) => {
        const result = await service.healthCheck();
        expect(result).not.toBeNull();
        expect(result).toBeInstanceOf(HealthCheckModel);
        done();
    });

    it("asr", async (done) => {
        fs.readFile(
            AUDIO_FILE_PATH,
            {
                encoding: "base64",
            },
            async (err, data) => {
                if (err) {
                    console.log(err);
                    return done();
                }
                const audio = new RecognitionAudioModel({ data });
                const config = new RecognitionConfigModel({
                    audioEncoding: "LINEAR16",
                    sampleRateHertz: 16000,
                    languageCode: "fa",
                    maxAlternatives: 1,
                    profanityFilter: true,
                    asrModel: "default",
                    languageModel: "general",
                });
                const model = new ASRRequestModel({ config, audio });
                const result = await service.asr(model);
                expect(result).not.toBeNull();
                expect(result).toBeInstanceOf(ASRResponseModel);
                done();
            }
        );
    });
});
