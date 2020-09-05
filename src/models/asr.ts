import RecognitionConfigModel from "./recognition.config";
import RecognitionAudioModel from "./recognition.audio";
import RecognitionResultModel from "./recognition.result";

export class AsrRequestModel {
    config: RecognitionConfigModel;
    audio: RecognitionAudioModel;

    constructor(config: RecognitionConfigModel, audio: RecognitionAudioModel) {
        this.config = config;
        this.audio = audio;
    }
}

export class AsrResponseModel {
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
