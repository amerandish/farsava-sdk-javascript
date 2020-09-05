import VoiceService from "../../src/services/voice";
import HttpClient from "../../src/helpers/httpClient";
import HealthCheckModel from "../../src/models/health.check";
import { TTSRequestModel } from "../../src/models/tts";
import TTSSynthesisInputModel from "../../src/models/tts.synthesis.input";
import TTSAudioConfigModel from "../../src/models/tts.audio.config";
import TTSVoiceConfigModel from "../../src/models/tts.voice.config";
import fs from "fs";
const config = require("../data/config.json");

const BASE_URL = config.BaseUrl;
const API_KEY = config.APIKey;
const AUDIO_FILE_PATH = config.AudioPath;

const httpClient = new HttpClient(API_KEY, BASE_URL);
const service = new VoiceService(httpClient);

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

    it("tts", async (done) => {
        const synth = new TTSSynthesisInputModel("سلام وقت بخیر");
        const voiceConfig = new TTSVoiceConfigModel(
            "fa",
            "b6e9c993-729e-4e0f-955b-f229cf1f77ee",
            "default",
            "female"
        );
        const audioConfig = new TTSAudioConfigModel(
            "LINEAR16",
            1,
            0,
            0,
            22050,
            0
        );
        const model = new TTSRequestModel(synth, voiceConfig, audioConfig);
        const result = await service.tts(model);
        expect(result).not.toBeNull();
        fs.writeFile(AUDIO_FILE_PATH, result, (err) => {
            if (err) return;
        });
        done();
    });
});
