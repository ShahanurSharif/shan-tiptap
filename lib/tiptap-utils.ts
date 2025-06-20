import { type Editor } from "@tiptap/react"

/**
 * Check if a node type exists in the editor's schema
 * @param type - The node type to check
 * @param editor - The Tiptap editor instance
 * @returns boolean indicating if the node exists in schema
 */
export function isNodeInSchema(type: string, editor: Editor | null): boolean {
  if (!editor) return false
  
  try {
    const nodeType = editor.schema.nodes[type]
    return !!nodeType
  } catch {
    return false
  }
}

/**
 * Check if a mark type exists in the editor's schema
 * @param type - The mark type to check
 * @param editor - The Tiptap editor instance
 * @returns boolean indicating if the mark exists in schema
 */
export function isMarkInSchema(type: string, editor: Editor | null): boolean {
  if (!editor) return false
  
  try {
    const markType = editor.schema.marks[type]
    return !!markType
  } catch {
    return false
  }
}
