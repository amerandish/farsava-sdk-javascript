import TTSSynthesisInputModel from "./tts.synthesis.input";
import TTSVoiceConfigModel from "./tts.voice.config";
import TTSAudioConfigModel from "./tts.audio.config";

export class TTSRequestModel {
    synthesisInput: TTSSynthesisInputModel;
    voiceConfig: TTSVoiceConfigModel;
    audioConfig: TTSAudioConfigModel;
    constructor(options: {
        synthesisInput: TTSSynthesisInputModel;
        voiceConfig: TTSVoiceConfigModel;
        audioConfig: TTSAudioConfigModel;
    }) {
        this.synthesisInput = options.synthesisInput;
        this.voiceConfig = options.voiceConfig;
        this.audioConfig = options.audioConfig;
    }
}
