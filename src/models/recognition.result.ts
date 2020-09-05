import RecognitionWordModel from "./recognition.word";

export default class RecognitionResultModel {
    transcript: string;
    confidence: number;
    words: Array<RecognitionWordModel>;
    constructor(
        transcript: string,
        confidence: number,
        words: Array<RecognitionWordModel>
    ) {
        this.transcript = transcript;
        this.confidence = confidence;
        this.words = words;
    }
}
