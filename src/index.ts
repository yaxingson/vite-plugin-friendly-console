import type { Plugin } from 'vite'
import type { ProgramNode } from 'rollup'

interface FriendlyConsolePluginOption {}

function traverse(
  ast: ProgramNode,
  visitor:{[type:string]:(ast:ProgramNode)=>void}) {
  for(const node of Object.values(ast)) {
    if(node && typeof node === 'object') {
      visitor[node.type]?.(node)
      traverse(node, visitor)
    }
  }
}

export default function friendlyConsolePlugin(option:FriendlyConsolePluginOption): Plugin {
  return {
    name:'friendly-console',
    enforce:'pre',
    resolveId(source, importer, options) {
      console.log(source)
      // console.log(importer)
      // console.log(options)

      return null
    },
    load(id, options) {
      // console.log(id)

      return null
    },
    transform(code, id, options) {
      const ast = this.parse(code, { jsx:true })

      console.log(ast)

      traverse(ast, {
        
      })
    },
  }
}
