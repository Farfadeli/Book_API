import chalk from 'chalk';

// This function is for see the status of the connection of the mongoDB
export default class Logging {
    
    public static log = (args: any) => this.info(args);
    // If is connected it is in Blue
    public static info = (args: any) =>
        console.log(
            chalk.blue(`[${new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}] [INFO LOGGING]`),
            typeof args === 'string' ? chalk.blueBright(args) : args
        );
    // If is we have some trouble it is in Yellow
    public static warn = (args: any) =>
        console.log(
            chalk.yellow(`[${new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}] [WARN LOGGING]`),
            typeof args === 'string' ? chalk.yellowBright(args) : args
        );
    // If is not connected it is in red
    public static error = (args: any) =>
        console.log(
            chalk.red(`[${new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}] [ERROR LOGGING]`),
            typeof args === 'string' ? chalk.redBright(args) : args
        );
}
