// const fs = require("fs-extra");

// try {
//     fs.ensureDir("test-results");
//     fs.emptyDir("test-results");
// } catch (error) {
//     console.log("Folder not created! " + error);
// }

const fs = require("fs-extra");
import * as path from 'path';

const sourceDir = "test-results";
const backupDir = "backup-folder";

async function backupAndClearDir(sourceDir: string, backupDir: string) {
    try {
        await fs.ensureDir(backupDir);
        await fs.ensureDir(sourceDir);
        const items = await fs.readdir(sourceDir);
        for (const item of items) {
            const srcPath = path.join(sourceDir, item);
            const destPath = path.join(backupDir, item);
            await fs.copy(srcPath, destPath);
        }
        await fs.emptyDir(sourceDir);
        console.log("Backup and clear completed successfully.");
    } catch (error) {
        console.log("Error during backup and clear! " + error);
    }
}
backupAndClearDir(sourceDir, backupDir);