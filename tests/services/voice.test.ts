import fs from "fs";
import * as Farsava from "../../src/farsava";
import BaseService from "../../src/core/service";
const {
    HealthCheckModel,
    TTSRequestModel,
    TTSSynthesisInputModel,
    TTSAudioConfigModel,
    TTSVoiceConfigModel,
} = Farsava.Models;
const config = require("../data/config.json");

const BASE_URL = config.BaseUrl;
const API_KEY = config.APIKey;
const AUDIO_FILE_PATH = config.AudioPath;

const sdk = new Farsava.SDK({
    baseUrl: BASE_URL,
    apiKey: API_KEY,
});
const service = sdk.voice;

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

    it("tts", async (done) => {
        const synthesisInput = new TTSSynthesisInputModel({
            text: "سلام وقت بخیر",
        });
        const voiceConfig = new TTSVoiceConfigModel({
            languageCode: "fa",
            voiceId: "b6e9c993-729e-4e0f-955b-f229cf1f77ee",
            name: "default",
            gender: "female",
        });
        const audioConfig = new TTSAudioConfigModel({
            audioEncoding: "LINEAR16",
            speakingRate: 1,
            pitch: 0,
            volumeGainDb: 0,
            sampleRateHertz: 22050,
            bitRate: 0,
        });
        const model = new TTSRequestModel({
            synthesisInput,
            voiceConfig,
            audioConfig,
        });
        const result = await service.tts(model);
        expect(result).not.toBeNull();
        fs.writeFile(AUDIO_FILE_PATH, result, (err) => {
            if (err) return;
        });
        done();
    });
});
