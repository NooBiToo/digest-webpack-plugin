<p>
  <a href="https://www.npmjs.com/package/project-digest-webpack-plugin">
      <img src="https://img.shields.io/npm/v/project-digest-webpack-plugin.svg" alt="Version">
    </a>
  <a href="https://www.npmjs.com/package/project-digest-webpack-plugin">
    <img src="https://img.shields.io/npm/l/project-digest-webpack-plugin.svg" alt="License">
  </a>
</p>

# Project Digest Webpack Plugin

Webpack plugin to generate file with digest of all project assets.

## Install

```bash
npm install --save-dev project-digest-webpack-plugin
```

## Usage

In your webpack configuration:

```javascript
const ProjectDigestPlugin = require('project-digest-webpack-plugin');

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
