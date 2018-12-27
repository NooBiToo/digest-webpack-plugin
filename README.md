# Digest Webpack Plugin fork from https://github.com/Djaler/project-digest-webpack-plugin

Webpack plugin to generate file with digest of all project assets.

## Install

```bash
npm install --save-dev digest-webpack-plugin
```

## Usage

In your webpack configuration:

```javascript
const ProjectDigestPlugin = require('digest-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new ProjectDigestPlugin('digest', {
        algorithm: 'md5'
    })
  ]
}
```
This will produce file "digest" in your output directory with digest, based on all project assets:
```
dc829bf0d79e690c59cee708b527e6b7
```

# Configuration
- `algorithm` - Hash algorithm used to generate digest. You can use all algorithms, compatible with [crypto.createHash](https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options). 
Examples are 'sha256' (default), 'sha512', etc.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/djaler/project-digest-webpack-plugin.

## License

The package is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
