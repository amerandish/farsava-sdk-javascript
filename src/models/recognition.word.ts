export default class RecognitionWordModel {
    startTime: number;
    endTime: number;
    word: string;
    confidence: number;
    constructor(
        startTime: number,
        endTime: number,
        word: string,
        confidence: number
    ) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.word = word;
        this.confidence = confidence;
    }
}
