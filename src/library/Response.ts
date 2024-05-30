import chalk from 'chalk';

// This function is for see the status of the connection of the mongoDB
export default class Response {
    public static log = (args: any) => this.info(args);
    // If is connected it is in Blue
    public static info = (args: any) =>
        console.log(
            chalk.green(`[${new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}] [INFO RESPONSE]`),
            typeof args === 'string' ? chalk.greenBright(args) : args
        );
    // If is we have some trouble it is in Yellow
    public static warn = (args: any) =>
        console.log(
            chalk.yellow(`[${new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}] [WARN RESPONSE]`),
            typeof args === 'string' ? chalk.yellowBright(args) : args
        );
    // If is not connected it is in red
    public static error = (args: any) =>
        console.log(
            chalk.red(`[${new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}] [ERROR RESPONSE]`),
            typeof args === 'string' ? chalk.redBright(args) : args
        );
}
