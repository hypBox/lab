module.exports = {
    "coverageDirectory": "./coverage/",
    "collectCoverage": true,
    "roots": [
        "./src"
    ],
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
}