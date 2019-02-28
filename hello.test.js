const { hello } = require('./hello');

describe("hello", () => {
    it ("works", async () => {
        expect(await hello({}, {}, ()=> {})).toEqual({statusCode: 200, body: JSON.stringify({hello:"World!"})});
    })
})