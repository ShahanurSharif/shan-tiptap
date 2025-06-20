import { useCurrentEditor, type Editor } from "@tiptap/react"

/**
 * Hook to get the current Tiptap editor instance
 * @returns The current editor instance or null
 */
export function useTiptapEditor(providedEditor?: Editor | null): Editor | null {
  const { editor } = useCurrentEditor()
  return providedEditor || editor
}
