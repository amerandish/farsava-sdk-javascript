export default class HealthCheckModel {
    status: string;
    message: string;
    version: string;

    constructor(status: string, message: string, version: string) {
        this.status = status;
        this.message = message;
        this.version = version;
    }
}
