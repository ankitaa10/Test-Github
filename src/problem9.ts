import { injectable, inject, Container } from 'inversify';
import "reflect-metadata";


// ILogger interface

interface ILogger {

log(message: string): void;

}


// ConsoleLogger class

@injectable()

class ConsoleLogger implements ILogger {

log(message: string): void {

console.log('Logging output in console:', message);

}

}



// FileLogger class

@injectable()

class FileLogger implements ILogger {

log(message: string): void {

 console.log('Logging output in file:', message);

 }

}



// LoggerContainerService class

@injectable()

class LoggerContainerService {

 private logger: ILogger;



constructor(@inject('ILogger') logger: ILogger) {

this.logger = logger;

 }



 public logMessage(message: string): void {

 this.logger.log(message);

 }

}


const container = new Container();

const useFileLogger = true; 



if (useFileLogger) {

 container.bind<ILogger>('ILogger').to(FileLogger);

} else {

 container.bind<ILogger>('ILogger').to(ConsoleLogger);

}





const loggerContainerService = container.resolve<LoggerContainerService>(LoggerContainerService);

loggerContainerService.logMessage('Logging output');




