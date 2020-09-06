import * as Services from "./services";
import * as Models from "./models";
import HttpClient from "./helpers/httpClient";

class SDK {
    speech: Services.SpeechService;
    voice: Services.VoiceService;
    private httpClient: HttpClient;
    constructor(options: { baseUrl: string; apiKey: string }) {
        if (!options) {
            throw new Error("options is required");
        }
        if (!options.apiKey) {
            throw new Error("apiKey is required");
        }
        if (!options.baseUrl) {
            throw new Error("baseUrl is required");
        }
        this.httpClient = new HttpClient(options.apiKey, options.baseUrl);
        this.speech = new Services.SpeechService(this.httpClient);
        this.voice = new Services.VoiceService(this.httpClient);
    }
}

export { SDK };
export { HttpClient };
export { Models, Services };
