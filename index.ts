// Main component exports
export { default } from './TipTap.tsx'
export { default as ShanTiptap } from './TipTap.tsx'
export { default as TiptapEditorWrapper } from './MenuBar.tsx'

// Re-export commonly used Tiptap types
export type { Editor } from '@tiptap/react'

// Export types
export interface TiptapProps {
  value?: string
  onChange?: (content: string) => void
  placeholder?: string
}
