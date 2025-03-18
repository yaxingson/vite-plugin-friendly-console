import type { PluginOption } from 'vite'

interface FriendlyConsoleOption {
  clearConsole?:boolean
  onErrors?:()=>void
}

export default function friendlyConsolePlugin(option:FriendlyConsoleOption={}): PluginOption {
  const {
    clearConsole = true,
  } = option

  console.log(option)

  return {
    name:'vite-plugin-friendly-console',
    apply:'build',
    buildStart(options) {
      
    },
    buildEnd(error) {
      
    },
    closeBundle(error) {
      // console.clear()
    }
  }
}
