import { defineConfig } from 'vite'
import friendlyConsole from '../dist'

export default defineConfig({
  plugins:[
    friendlyConsole({
      color:true,
    }),

  ]
})
