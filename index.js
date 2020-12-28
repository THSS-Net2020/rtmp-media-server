const NodeMediaServer = require("node-media-server");

const config = {
    rtmp: {
        port: 1935,
        chunk_size: 600000,
        gop_cache: true,
        ping: 5,
        ping_timeout: 10
    },
    http: {
        port: 5002,
        allow_origin: "*"
    }
};

const nms = new NodeMediaServer(config);

nms.run();