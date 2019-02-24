import AppServer from '~/AppServer';
import CLIParamsInterface from '~/CLIParamsInterface';
export default class App {
    static getWarningText(msg: string): string;
    static getErrorText(msg: string): string;
    private readonly CLIParams;
    private readonly appServer;
    private CLIPathIsDirectoryNoticeShowed;
    constructor();
    getAppServer(): AppServer;
    getCLIParams(): CLIParamsInterface;
    getFileToWatch(): any;
    private makeCLI;
    private runServerDump;
}
