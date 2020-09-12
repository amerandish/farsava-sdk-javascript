import { AudioEncoding } from "./utils";

export default class TTSAudioConfigModel {
    audioEncoding: AudioEncoding;
    speakingRate: number;
    pitch: number;
    volumeGainDb: number;
    sampleRateHertz: number;
    bitRate: number;
    constructor(options: {
        audioEncoding: AudioEncoding;
        speakingRate: number;
        pitch: number;
        volumeGainDb: number;
        sampleRateHertz: number;
        bitRate: number;
    }) {
        this.audioEncoding = options.audioEncoding;
        this.speakingRate = options.speakingRate;
        this.pitch = options.pitch;
        this.volumeGainDb = options.volumeGainDb;
        this.sampleRateHertz = options.sampleRateHertz;
        this.bitRate = options.bitRate;
    }
}
