import SpeechService from "../../src/services/speech";
import HttpClient from "../../src/helpers/httpClient";
import HealthCheckModel from "../../src/models/health.check";
import { ASRResponseModel, ASRRequestModel } from "../../src/models/asr";
import RecognitionAudioModel from "../../src/models/recognition.audio";
import RecognitionConfigModel from "../../src/models/recognition.config";
import fs from "fs";

const config = require("../data/config.json");

const BASE_URL = config.BaseUrl;
const API_KEY = config.APIKey;
const AUDIO_FILE_PATH = config.AudioPath;

const httpClient = new HttpClient(API_KEY, BASE_URL);
const service = new SpeechService(httpClient);

describe("check http client and service", () => {
    it("test client", () => {
        expect(httpClient).not.toBeNull();
        expect(httpClient.getApiKey()).toBe(API_KEY);
        expect(httpClient.getBaseUrl()).toBe(BASE_URL);
    });
    it("test service", () => {
        expect(service).not.toBeNull();
        expect(service.httpClient).not.toBeNull();
        expect(service.httpClient).toBe(httpClient);
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
                const audio = new RecognitionAudioModel(data);
                const config = new RecognitionConfigModel(
                    "LINEAR16",
                    16000,
                    "fa",
                    1,
                    true,
                    "default",
                    "general"
                );
                const model = new ASRRequestModel(config, audio);
                const result = await service.asr(model);
                expect(result).not.toBeNull();
                expect(result).toBeInstanceOf(ASRResponseModel);
                done();
            }
        );
    });
});
