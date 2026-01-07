import url, { URLSearchParams } from 'url'

const urlString = 'https://www.google.com/search?q=hello+world';

// url object
const urlObj = new URL(urlString)
// console.log(urlObj.host)
// console.log(urlObj.pathname)
// console.log(urlObj.protocol)

// formate()
console.log(url.format(urlObj))

// import.meta.url - file url
console.log(import.meta.url)

// fileURLToPath()
console.log(url.fileURLToPath(import.meta.url))

const params = new URLSearchParams(urlObj.search)
console.log(params.get('q'))
params.append('Name', 'Liton Ali');
params.delete('Name')
console.log(params)