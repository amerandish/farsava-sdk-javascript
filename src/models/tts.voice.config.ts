export default class TTSVoiceConfigModel {
    languageCode: string;
    voiceId: string;
    name: string;
    gender: string;
    constructor(
        languageCode: string,
        voiceId: string,
        name: string,
        gender: string
    ) {
        this.languageCode = languageCode;
        this.voiceId = voiceId;
        this.name = name;
        this.gender = gender;
    }
}
