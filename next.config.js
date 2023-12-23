"use strict";
/** @type {import("next").NextConfig} */
const path = require("path");

const nextConfig = {
    sassOptions: {
        includePaths: [
            path.join(__dirname, "src", "comp"),
            path.join(__dirname, "src", "scss"),
            path.join(__dirname, "src", "app"),
        ],
    },
};

module.exports = nextConfig;
