export default class TTSVoiceConfigModel {
    languageCode: string;
    voiceId: string;
    name: string;
    gender: string;
    constructor(options: {
        languageCode: string;
        voiceId: string;
        name: string;
        gender: string;
    }) {
        this.languageCode = options.languageCode;
        this.voiceId = options.voiceId;
        this.name = options.name;
        this.gender = options.gender;
    }
}
