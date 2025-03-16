import { resolve, dirname } from 'node:path'
import { readFile } from 'node:fs/promises'
import type { PluginOption } from 'vite'
import type { ProgramNode } from 'rollup'

interface FriendlyConsolePluginOption {
  color?:boolean
}

function traverse(
  ast: ProgramNode,
  visitor:{[type:string]:(ast:any)=>void}) {
  for(const node of Object.values(ast)) {
    if(node && typeof node === 'object') {
      visitor[node.type]?.(node)
      traverse(node, visitor)
    }
  }
}

export default function friendlyConsolePlugin(option:FriendlyConsolePluginOption): PluginOption {
  return {
    name:'friendly-console',
    enforce:'pre',
    resolveId(source, importer, options) {
      if(source.endsWith('.toml')) {
        return resolve(dirname(importer), source)
      }
    },
    async load(id, options) {
      if(id.endsWith('.toml')) {
        const content = await readFile(id, 'utf-8')
        const config = {}
        return `export default ${JSON.stringify(config)}`
      }
    },
    transform(code, id, options) {
      if(id.endsWith('main.ts')) {
        const ast = this.parse(code, { jsx:false})
        console.log(ast)
        traverse(ast, {
          ImportDeclaration(node) {
            
          }
        })
      }
    },
    configureServer(devServer) {
      devServer.middlewares.use((req, res, next)=>{
        next()
      })
    },
    transformIndexHtml(html, context) {
      return html
    }
  }
}
