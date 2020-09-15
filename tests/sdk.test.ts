import * as Farsava from "../src/farsava";

describe("check sdk", () => {
    it("no sdk parameter", () => {
        try {
            const sdk = new Farsava.SDK(null);
        } catch (err) {
            expect(err).toHaveProperty("message", "options is required");
        }
    });
    it("no sdk baseUrl parameter", () => {
        try {
            const sdk = new Farsava.SDK({ baseUrl: null, apiKey: "<API_KEY>" });
        } catch (err) {
            expect(err).toHaveProperty("message", "baseUrl is required");
        }
    });
    it("no sdk apiKey parameter", () => {
        try {
            const sdk = new Farsava.SDK({
                baseUrl: "<BASE_URL>",
                apiKey: null,
            });
        } catch (err) {
            expect(err).toHaveProperty("message", "apiKey is required");
        }
    });
    it("no sdk liveUrl parameter", () => {
        const sdk = new Farsava.SDK({
            baseUrl: "<BASE_URL>",
            apiKey: "<API_KEY>",
        });
        expect(sdk.live).toBeUndefined();
    });
    it("sdk with liveUrl parameter", () => {
        const sdk = new Farsava.SDK({
            baseUrl: "<BASE_URL>",
            apiKey: "<API_KEY>",
            liveUrl: "<LIVE_URL>",
        });
        expect(sdk.live).not.toBeNull();
    });
});
