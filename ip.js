
module.exports = () => {
    const os = require('os');
    const ifs = os.networkInterfaces();
    let ips = []
    Object.keys(ifs).forEach((ifname) => {
        let f = ifs[ifname][0]
        if ('IPv4' !== f.family || f.internal !== false) {
            return;
        }
        ips.push(f.address)
    });
    return ips
}

