const crypto = require('crypto');

class DigestPlugin {
    /**
     * @param {string} output - The output file path
     * @param {object} [options] - Options to configure this plugin
     * @param {string} [options.algorithm=sha256] - Hash algorithm used to generate digest.
     * You can use all algorithms, compatible with crypto.createHash. Examples are 'sha256', 'sha512', etc.
     */
    constructor(output, options = {}) {
        this.output = output;
        this.algorithm = options.algorithm || 'sha256';
    }

    apply(compiler) {
        const emit = (compilation, callback) => {
            const hash = crypto.createHash(this.algorithm);

            Object.keys(compilation.assets)
                .sort()
                .forEach(filename => hash.update(filename));

            const digest = hash.digest('hex');

            compilation.assets[this.output] = {
                source() {
                    return digest;
                },
                size() {
                    return digest.length;
                },
            };

            callback();
        };

        if (compiler.hooks) { // webpack 4
            compiler.hooks.emit.tapAsync('DigestPlugin', emit)
        } else { // webpack 3
            compiler.plugin('emit', emit);
        }
    }
}

module.exports = DigestPlugin;
