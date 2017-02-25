export class Application {
    constructor(express) {
        // some configuration stuff
        this.express = express;
    }
    
    start() {
        // do something before server start
        this.express.listen(3031, () => {
            console.log('Application listen on port:', 3031);
        });
    }
}