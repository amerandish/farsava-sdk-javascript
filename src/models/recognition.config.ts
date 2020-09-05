import { AudioEncoding } from "./utils";

export default class RecognitionConfigModel {
    audioEncoding: AudioEncoding;
    sampleRateHertz: number;
    languageCode: string;
    maxAlternatives: number;
    profanityFilter: boolean;
    asrModel: string;
    languageModel: string;
    constructor(
        audioEncoding: AudioEncoding,
        sampleRateHertz: number,
        languageCode: string,
        maxAlternatives: number,
        profanityFilter: boolean,
        asrModel: string,
        languageModel: string
    ) {
        this.audioEncoding = audioEncoding;
        this.sampleRateHertz = sampleRateHertz;
        this.languageCode = languageCode;
        this.maxAlternatives = maxAlternatives;
        this.profanityFilter = profanityFilter;
        this.asrModel = asrModel;
        this.languageModel = languageModel;
    }
}
