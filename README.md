# pear-release

> Set application production release version length

## Usage

```js
import release from 'pear-release'
```

```js
function status(info) {
  console.log(info)
}
const link = 'pear://....'
const stream = release(link, opts)
stream.on('data', status)
```

## License

Apache-2.0
