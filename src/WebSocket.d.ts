import App from '~/App';
export default class WebSocket {
    private io;
    private app;
    private initialContent?;
    private fileToWatch;
    private currentSocket?;
    constructor(app: App);
    start(): void;
    private listen;
    private getFileContent;
    private generateInitialHtml;
    private watchFile;
}
