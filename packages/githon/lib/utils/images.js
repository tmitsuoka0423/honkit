const Promise = require("./promise");
const fs = require("./fs");

// Converts a inline data: to png file
function convertInlinePNG(source, dest) {
    if (!/^data\:image\/png/.test(source)) return Promise.reject(new Error("Source is not a PNG data-uri"));

    const base64data = source.split("data:image/png;base64,")[1];
    const buf = new Buffer(base64data, "base64");

    return fs.writeFile(dest, buf).then(() => {
        if (fs.existsSync(dest)) return;

        throw new Error(`Error converting ${source} into ${dest}`);
    });
}

module.exports = {
    convertInlinePNG: convertInlinePNG,
};
