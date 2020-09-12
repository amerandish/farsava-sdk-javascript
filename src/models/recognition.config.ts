import { AudioEncoding } from "./utils";

export default class RecognitionConfigModel {
    audioEncoding: AudioEncoding;
    sampleRateHertz: number;
    languageCode: string;
    maxAlternatives: number;
    profanityFilter: boolean;
    asrModel: string;
    languageModel: string;
    constructor(options: {
        audioEncoding: AudioEncoding;
        sampleRateHertz: number;
        languageCode: string;
        maxAlternatives: number;
        profanityFilter: boolean;
        asrModel: string;
        languageModel: string;
    }) {
        this.audioEncoding = options.audioEncoding;
        this.sampleRateHertz = options.sampleRateHertz;
        this.languageCode = options.languageCode;
        this.maxAlternatives = options.maxAlternatives;
        this.profanityFilter = options.profanityFilter;
        this.asrModel = options.asrModel;
        this.languageModel = options.languageModel;
    }
}
