'use client'
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import TextAlign from '@tiptap/extension-text-align'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Underline from '@tiptap/extension-underline'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useState, useEffect } from 'react'
import './tiptap-node/code-block-node/code-block-node.scss'
import './tiptap-node/paragraph-node/paragraph-node.scss'
import styles from './MenuBar.module.scss'
// Import Tiptap UI components
import { HeadingDropdownMenu } from './tiptap-ui/heading-dropdown-menu/index.tsx'
import { ListDropdownMenu } from './tiptap-ui/list-dropdown-menu/index.tsx'
import { TextAlignButton } from './tiptap-ui/text-align-button/index.tsx'
import { MarkButton } from './tiptap-ui/mark-button/index.tsx'

const MenuBar = () => {
  const { editor } = useCurrentEditor()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!editor || !isMounted) {
    return null
  }

  return (
    <div className="tiptap-button-group" data-orientation="horizontal" style={{ display: 'flex', gap: '8px', padding: '8px', borderBottom: '1px solid #e0e0e0' }}>
      <HeadingDropdownMenu editor={editor} levels={[1, 2, 3]} />
      <ListDropdownMenu editor={editor} types={['bulletList', 'orderedList']} />
      <MarkButton type="bold" />
      <MarkButton type="italic" />
      <MarkButton type="underline" />
      <TextAlignButton editor={editor} align="left" />
      <TextAlignButton editor={editor} align="center" />
      <TextAlignButton editor={editor} align="right" />
      <TextAlignButton editor={editor} align="justify" />
    </div>
  )
}

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure(),
  TextAlign.configure({
    types: ['heading', 'paragraph'],
  }),
  TaskList,
  TaskItem.configure({
    nested: true,
  }),
  Underline,
  StarterKit.configure({
    // Explicitly configure heading
    heading: {
      levels: [1, 2, 3],
    },
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
]

const content = `<p>Hello World!</p>`

const TiptapEditor = ({ content: providedContent, onChange }: { content?: string; onChange?: (content: string) => void }) => {
  const defaultContent = providedContent || content

  return (
    <EditorProvider 
      slotBefore={<MenuBar />} 
      extensions={extensions} 
      content={defaultContent}
      immediatelyRender={false}
      editorProps={{
        attributes: {
          class: `min-h-[120px] p-4 border-t border-gray-200 prose prose-sm max-w-none focus:outline-none ${styles.tiptap}`,
        },
      }}
      onUpdate={({ editor }) => {
        if (onChange) {
          onChange(editor.getHTML())
        }
      }}
    ></EditorProvider>
  )
}

// Wrapper component to handle SSR issues
const TiptapEditorWrapper = ({ content: providedContent, onChange }: { content?: string; onChange?: (content: string) => void }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div>Loading editor...</div>
  }

  return <TiptapEditor content={providedContent} onChange={onChange} />
}

export default TiptapEditorWrapper
