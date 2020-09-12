import RecognitionConfigModel from "./recognition.config";
import RecognitionAudioModel from "./recognition.audio";
import RecognitionResultModel from "./recognition.result";

export class ASRRequestModel {
    config: RecognitionConfigModel;
    audio: RecognitionAudioModel;

    constructor(options: {
        config: RecognitionConfigModel;
        audio: RecognitionAudioModel;
    }) {
        this.config = options.config;
        this.audio = options.audio;
    }
}

export class ASRResponseModel {
    transcriptionId: string;
    duration: number;
    inferenceTime: number;
    status: string;
    results: Array<RecognitionResultModel>;

    constructor(
        transcriptionId: string,
        duration: number,
        inferenceTime: number,
        status: string,
        results: Array<RecognitionResultModel>
    ) {
        this.transcriptionId = transcriptionId;
        this.duration = duration;
        this.inferenceTime = inferenceTime;
        this.status = status;
        this.results = results;
    }
}
