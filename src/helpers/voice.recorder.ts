import * as RecordRTC from "recordrtc";

export default class VoiceRecorder {
    private stream: MediaStream;
    private isPermissionGrant: boolean;
    private mediaRecorder: RecordRTC.StereoAudioRecorder;
    private blobs: Blob[];
    constructor() {
        this.stream = null;
        this.isPermissionGrant = true;
        this.blobs = [];
    }
    async init() {
        await this.checkPermission();
    }
    async checkPermission() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
            });
            this.stream = stream;
            this.isPermissionGrant = true;
        } catch (error) {
            this.isPermissionGrant = false;
            throw error;
        }
    }
    async createRecorder(cb) {
        const self = this;
        if (!this.isPermissionGrant) {
            throw new Error("record permission denied");
        }
        const config = {
            numberOfAudioChannels: 1,
            desiredSampRate: 16e3,
            mimeType: "audio/wav",
            checkForInactiveTracks: true,
            timeSlice: 1e3,
            ondataavailable: function (blob) {
                const headerLess = blob.slice(44);
                cb && cb(headerLess);
                self.blobs.push(blob);
            },
        };
        this.mediaRecorder = new RecordRTC.StereoAudioRecorder(
            this.stream,
            config
        );
    }

    start() {
        if (this.mediaRecorder) {
            this.mediaRecorder.record();
        }
    }
    stop() {
        if (this.mediaRecorder) {
            this.mediaRecorder.stop();
        }
    }

    getBlobs(): Blob {
        return new Blob(this.blobs);
    }
}
