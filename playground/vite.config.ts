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
