const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "./",
    reportName: "Playwright Automation Report",
    pageTitle: "AhaSoft Testing Report",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "112",
        },
        device: "Phong Vo - PC",
        platform: {
            name: "Windows",
            version: "10",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Salon Admin" },
            { label: "Release", value: "Release 80" },
            { label: "Cycle", value: "Smoke-1" }
        ],
    },
});