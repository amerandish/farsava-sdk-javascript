import SpeechService from "./services/speech";
import VoiceService from "./services/voice";
import HttpClient from "./helpers/httpClient";

class SDK {
    speech: SpeechService;
    voice: VoiceService;
    private httpClient: HttpClient;
    constructor(options: { baseUrl: string; apiKey: string }) {
        if (!options) {
            throw new Error("options is required");
        }
        if (!options.apiKey) {
            throw new Error("api key is required");
        }
        if (!options.baseUrl) {
            throw new Error("base url is required");
        }
        this.httpClient = new HttpClient(options.apiKey, options.baseUrl);
        this.speech = new SpeechService(this.httpClient);
        this.voice = new VoiceService(this.httpClient);
    }
}

export { SDK };
export { HttpClient, SpeechService, VoiceService };
