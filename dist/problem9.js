"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
require("reflect-metadata");
let ConsoleLogger = class ConsoleLogger {
    log(message) {
        console.log('Logging output in console:', message);
    }
};
ConsoleLogger = __decorate([
    (0, inversify_1.injectable)()
], ConsoleLogger);
let FileLogger = class FileLogger {
    log(message) {
        console.log('Logging output in file:', message);
    }
};
FileLogger = __decorate([
    (0, inversify_1.injectable)()
], FileLogger);
let LoggerContainerService = class LoggerContainerService {
    constructor(logger) {
        this.logger = logger;
    }
    logMessage(message) {
        this.logger.log(message);
    }
};
LoggerContainerService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)('ILogger')),
    __metadata("design:paramtypes", [Object])
], LoggerContainerService);
const container = new inversify_1.Container();
const useFileLogger = true;
if (useFileLogger) {
    container.bind('ILogger').to(FileLogger);
}
else {
    container.bind('ILogger').to(ConsoleLogger);
}
const loggerContainerService = container.resolve(LoggerContainerService);
loggerContainerService.logMessage('Logging output');
