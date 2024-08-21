module.exports = {
        default: {
            tags: process.env.npm_config_TAG || "",
            formatOptions: {
                snippetInterface: "async-await"
            },
            paths: [
                "source/test/features/*.feature"
            ],
            dryRun: false,
            require: [
                "source/test/steps/*.ts",
                "source/hooks/hooks.ts"
            ],
            requireModule: [
                "ts-node/register"
            ],
            format : [
                "progress-bar",
                "html:test-results/cucumber-report.html",
                "json:test-results/cucumber-report.json",
                "rerun:@rerun.txt"
            ],
            parallel: 1
        },
    
        rerun: {
            formatOptions: {
                snippetInterface: "async-await"
            },
            dryRun: false,
            require: [
                "source/test/steps/*.ts",
                "source/hooks/hooks.ts"
            ],
            requireModule: [
                "ts-node/register"
            ],
            format: [
                "progress-bar",
                "html:test-results/cucumber-report.html",
                "json:test-results/cucumber-report.json",
                "rerun:@rerun.txt"
            ],
            parallel: 1
        }
    }    