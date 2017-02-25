import { SocketGateway, SubscribeMessage, GatewayServer } from 'nest.js/socket';
import { Subject } from 'rxjs/Subject';

@SocketGateway({ port: 2000 })
export class ChatGateway {
    @GatewayServer server;

    constructor() {
        this.msg$ = new Subject();
    }

    get msgStream() {
        return this.msg$.asObservable();
    }

    @SubscribeMessage({ value: 'message' })
    onMessage(client, data) {
        this.msg$.next({ client, data });
    }

}