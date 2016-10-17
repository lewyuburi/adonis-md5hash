Adonis md5 hasher
=========

Support md5 hashing in AdonisJS Project

## Installation

```js
npm install adonis-md5hash --save
```

After installation, you need to replace the Hash service provider in the `bootstrap/app.js` file.

###### bootstrap/app.js
```javascript
const providers = [
  ...,
  // 'adonis-framework/providers/HashProvider',
  'adonis-md5hash/providers/HashProvider'
]
```