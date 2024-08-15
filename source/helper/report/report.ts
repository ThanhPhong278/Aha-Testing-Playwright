// const report = require("multiple-cucumber-html-reporter");

// report.generate({
//     jsonDir: "test-results",
//     reportPath: "./",
//     reportName: "Playwright Automation Report",
//     pageTitle: "AhaSoft Testing Report",
//     displayDuration: false,
//     metadata: {
//         browser: {
//             name: "chrome",
//             version: "112",
//         },
//         device: "Phong Vo - PC",
//         platform: {
//             name: "Windows",
//             version: "10",
//         },
//     },
//     customData: {
//         title: "Test Info",
//         data: [
//             { label: "Project", value: "Salon Admin" },
//             { label: "Release", value: "Release 80" },
//             { label: "Cycle", value: "Smoke-1" }
//         ],
//     },
// });

const report = require("multiple-cucumber-html-reporter");
const path = require("path");
const { exec } = require("child_process");

const reportPath = path.resolve("./index.html");

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

// open report using child_process.exec
exec(`start ${reportPath}`, (err) => {
    if (err) {
        console.error("Failed to open report:", err);
    } else {
        console.log("Report opened successfully");
    }
});
