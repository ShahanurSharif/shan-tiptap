// Main component exports
export { default } from './TipTap'
export { default as ShanTiptap } from './TipTap'
export { default as TiptapEditorWrapper } from './MenuBar'

// Re-export commonly used Tiptap types
export type { Editor } from '@tiptap/react'

// Export types
export interface TiptapProps {
  value?: string
  onChange?: (content: string) => void
  placeholder?: string
}
