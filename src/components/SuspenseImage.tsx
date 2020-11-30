// This component borrowed from
// https://css-tricks.com/pre-caching-image-with-react-suspense/
import React from 'react'

interface Cache {
  src: boolean
  [key: string]: boolean | Promise<unknown>
}
const imgCache = {
  __cache: {} as Cache,
  read(src: string) {
    if (!src) {
      return
    }

    if (!this.__cache[src]) {
      this.__cache[src] = new Promise(resolve => {
        const img = new Image()
        img.onload = () => {
          this.__cache[src] = true
          resolve(this.__cache[src])
        }
        img.src = src
        setTimeout(() => resolve({}), 7000)
      }).then(img => {
        this.__cache[src] = true
      })
    }

    if (this.__cache[src] instanceof Promise) {
      throw this.__cache[src]
    }
    return this.__cache[src]
  },
}

const SuspenseImg = ({src, alt}: {src: string; alt: string}) => {
  imgCache.read(src)

  return <img alt={alt} src={src} className="img-thumbnail" />
}

export default SuspenseImg
