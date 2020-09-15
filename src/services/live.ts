import { ASRResponseModel } from "../models";

class LiveService {
    private client: WebSocket;
    private baseUrl: string;
    private apiKey: string;

    constructor(apiKey: string, baseUrl: string) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
        this.client = null;
    }

    openConnection(cb: (err, data) => void) {
        if (this.client) throw new Error("client is already created");
        this.client = new WebSocket(`${this.baseUrl}?jwt=${this.apiKey}`);
        const self = this;
        this.client.onopen = function () {
            console.log("connection is open");
        };
        this.client.onclose = function () {
            console.log("connection is close");
            self.client = null;
        };
        this.client.onerror = function (ev) {
            console.log("error", ev);
            cb(ev, null);
        };
        this.client.onmessage = function (ev) {
            console.log("message", ev.data as ASRResponseModel);
            cb(null, ev);
        };
    }

    closeConnection() {
        if (!this.client) throw new Error("client is not ready");
        this.client.send("close");
    }

    convertBase64ToArrayBuffer(base64) {
        const arrayBuffer = new ArrayBuffer(base64.length);
        const byteNumbers = new Uint8Array(arrayBuffer);
        for (let i = 0; i < base64.length; i++) {
            byteNumbers[i] = base64.charCodeAt(i);
        }
        return arrayBuffer;
    }

    send(data) {
        if (!this.client) throw new Error("client is not ready");
        this.client.send(data);
    }

    sendChunkAndInterval(
        base64Data,
        chunkSize = 16000,
        intervalDuration = 2000
    ) {
        if (!this.client) throw new Error("client is not ready");
        const buffer = this.convertBase64ToArrayBuffer(base64Data);
        const { client } = this;
        let index = 0;
        const interval = setInterval(() => {
            const begin = index;
            let end = index + chunkSize;
            if (end > buffer.byteLength) {
                end = buffer.byteLength;
            }
            client.send(buffer.slice(begin, end));
            index += chunkSize;
            if (end === buffer.byteLength) {
                clearInterval(interval);
            }
        }, intervalDuration);
    }
}

export default LiveService;
