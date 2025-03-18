import { resolve } from 'node:path'
import { performance } from 'node:perf_hooks'
import { stat } from 'node:fs/promises'
import type { PluginOption } from 'vite'

interface FriendlyConsoleOption {
  clearConsole?:boolean
  onErrors?:()=>void
}

export default function friendlyConsolePlugin(option:FriendlyConsoleOption={}): PluginOption {
  const {
    clearConsole = true,
  } = option

  let start = 0
  let outDir = ''
  let bundlePath = ''

  return {
    name:'vite-plugin-friendly-console',
    enforce:'pre',
    apply:'build',
    config(config, env) {
      outDir = config.build.outDir || 'dist'
    },
    options(options) {
      options.plugins[0]['buildStart'] = ()=>{
        start = performance.now()
      }
      options.plugins[(options.plugins as any[]).length - 1]['closeBundle'] = ()=>{
        console.log(performance.now() - start)
      }
    },
    buildStart(options) {
      
    },
    resolveId(source, importer,{ isEntry }) {
      
    },
    buildEnd(error) {
    
    },
    generateBundle(options, bundle, isWrite) {
      for(const path in bundle) {
        bundlePath = resolve(outDir, path)
      }
    },
    async closeBundle(error) {
      console.log((await stat(bundlePath)).size)
    },
    onLog(level, log) {
      this.info(level)
      return false
    }
  }
}
