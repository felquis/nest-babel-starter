import { WebSocketGateway, SubscribeMessage, WebSocketServer } from 'nest.js/websockets';
import { Subject } from 'rxjs/Subject';

@WebSocketGateway({ port: 2000 })
export class ChatGateway {
    @WebSocketServer() server;

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