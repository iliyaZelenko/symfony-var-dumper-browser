/// <reference types="node" />
import { Server } from 'http';
import { Express } from 'express-serve-static-core';
import App from '~/App';
export default class AppServer {
    private readonly DEFAULT_PORT;
    private readonly express;
    private readonly server;
    private readonly port;
    private readonly host;
    private readonly open;
    private readonly app;
    constructor(app: App, port: number, host: string, open: boolean);
    start(): this;
    getServer(): Server;
    getExpress(): Express;
    getPort(): number;
    protected listen(): void;
    protected routing(): void;
}
