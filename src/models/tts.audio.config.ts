import { AudioEncoding } from "./utils";

export default class TTSAudioConfigModel {
    audioEncoding: AudioEncoding;
    speakingRate: number;
    pitch: number;
    volumeGainDb: number;
    sampleRateHertz: number;
    bitRate: number;
    constructor(
        audioEncoding: AudioEncoding,
        speakingRate: number,
        pitch: number,
        volumeGainDb: number,
        sampleRateHertz: number,
        bitRate: number
    ) {
        this.audioEncoding = audioEncoding;
        this.speakingRate = speakingRate;
        this.pitch = pitch;
        this.volumeGainDb = volumeGainDb;
        this.sampleRateHertz = sampleRateHertz;
        this.bitRate = bitRate;
    }
}
