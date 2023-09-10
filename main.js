const Server = require("./server/Server");
const DatabaseEngine = require("./utils/DatabaseEngine");
const Helper = require("./utils/Helper");
const { server } = require("./config/main.settings");

const helper = new Helper();
const db = new DatabaseEngine();

main = () => {
    try {
        db.connect(() => {
            let serverEngine = new Server(server.port);
            serverEngine.start();
        })
    } catch (e) {
        helper.logger(e)
        process.exit(1);
    }
};

main();
