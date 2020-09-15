import * as Farsava from "../src/farsava";
const client = new Farsava.HttpClient("", "");
describe("check client", () => {
    it("properties", () => {
        expect(client.getApiKey()).not.toBeUndefined();
        expect(client.getBaseUrl()).not.toBeUndefined();
        expect(client.getApiKey()).not.toBeNull();
        expect(client.getBaseUrl()).not.toBeNull();
    });
});
