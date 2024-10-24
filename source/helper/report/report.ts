// const report = require("multiple-cucumber-html-reporter");

// report.generate({
//     jsonDir: "test-results",
//     reportPath: "./",
//     reportName: "Playwright Automation Report",
//     pageTitle: "AhaSoft Testing Report",
//     displayDuration: false,
//     launchReport: true,
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
let ms = new Date();
console.log(ms);
const padZero = (num) => (num < 10 ? '0' : '') + num;
const dateFormat = `${ms.getFullYear()}-${padZero(ms.getMonth() + 1)}-${padZero(ms.getDate())} ${padZero(ms.getHours())}:${padZero(ms.getMinutes())}:${padZero(ms.getSeconds())}`;
console.log(dateFormat);
console.log('BASEURL:', process.env.BASEURL);
const env = (process.env.BASEURL && process.env.BASEURL.includes('staging')) ? 'Staging' : 'Prod';
console.log(env);

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
            { label: "Release", value: "Release 83" },
            { label: "Environment", value: env },
            { label: "Generate Report Datetime", value: dateFormat }
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
