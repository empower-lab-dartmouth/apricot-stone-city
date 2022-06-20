"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var telegram_chat_client_1 = require("./core/chat-client/telegram-chat-client");
var logging_1 = require("./core/util/logging");
var convo_manager_1 = require("./core/convo-engine/convo-manager");
var storyteller_config_1 = require("./storyteller-config");
dotenv.config();
var apiKey = process.env.BOT_TOKEN;
if (apiKey === undefined) {
    var missingApiKeyErrorMessage = '.env file is either not set up or does not contain BOT_TOKEN field';
    logging_1["default"].fatal(missingApiKeyErrorMessage);
    throw new Error(missingApiKeyErrorMessage);
}
var client = (0, telegram_chat_client_1.telegramClient)(apiKey);
logging_1["default"].debug("Initialized telegram client, attempting to run modules");
client.runModule(storyteller_config_1["default"], convo_manager_1.convoManagerConstructor);
