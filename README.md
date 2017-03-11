# isused

isused checks if a JSON property is being referenced inside a folder

### Usage
```isussed jsonpath.json folderPath```

```isused test.json test```

### Output
It outputs all properties that are not being referenced inside a folder

```[ 'not', 'test.text', 'test.nope' ]```
