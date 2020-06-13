const tmp = require("tmp");
const initBook = require("../init");

describe("initBook", () => {
    let dir;

    beforeEach(() => {
        dir = tmp.dirSync();
    });

    test("should create a README and SUMMARY for empty book", () => {
        return initBook(dir.name).then(() => {
            expect(dir.name).toHaveFile("README.md");
            expect(dir.name).toHaveFile("SUMMARY.md");
        });
    });
});
