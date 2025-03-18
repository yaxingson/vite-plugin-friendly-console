# vite-plugin-friendly-console

## Install

```sh
npm install vite-plugin-friendly-console --save-dev

# pnpm
pnpm add vite-plugin-friendly-console -D

```

## Usage

```js
import { defineConfig } from 'vite'
import friendlyConsole from 'vite-plugin-friendly-console'

export default defineConfig({
  plugins:[
    friendlyConsole({
      onErrors() {
        
      }
    })
  
  ]
})

```
