# isused
[![Build Status](https://travis-ci.org/twobucks/isused.svg?branch=master)](https://travis-ci.org/twobucks/isused)
[![Downloads][downloads-image]][npm-url]

[npm-url]: https://www.npmjs.com/package/isused
[downloads-image]: http://img.shields.io/npm/dt/isused.svg
isused checks if a JSON property is being referenced inside a folder

### Usage
```isussed jsonpath.json folderPath```

```isused test.json test```

### Output
It outputs all propertiesth that are not being referenced inside a folder

```[ 'not', 'test.text', 'test.nope' ]```


## License

MIT

## Sponsors

Two Bucks Ltd © 2017

<a href="https://twobucks.co">
  ![https://twobucks.co](https://twobucks.co/assets/images/logo-small.png)
</a>
