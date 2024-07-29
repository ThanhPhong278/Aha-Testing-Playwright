import { Page } from "@playwright/test";
import { Logger, loggers } from "winston";

export const pageFixture = {
// @ts-ignore
    page: undefined as Page,
    logger: undefined as Logger
}