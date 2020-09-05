import TTSSynthesisInputModel from "./tts.synthesis.input";
import TTSVoiceConfigModel from "./tts.voice.config";
import TTSAudioConfigModel from "./tts.audio.config";

export class TTSRequestModel {
    synthesisInput: TTSSynthesisInputModel;
    voiceConfig: TTSVoiceConfigModel;
    audioConfig: TTSAudioConfigModel;
    constructor(
        synthesisInput: TTSSynthesisInputModel,
        voiceConfig: TTSVoiceConfigModel,
        audioConfig: TTSAudioConfigModel
    ) {
        this.synthesisInput = synthesisInput;
        this.voiceConfig = voiceConfig;
        this.audioConfig = audioConfig;
    }
}
