import React from 'react'
import TiptapEditorWrapper from './MenuBar.tsx'

interface TiptapProps {
  value?: string
  onChange?: (content: string) => void
  placeholder?: string
}

const Tiptap: React.FC<TiptapProps> = ({ value, onChange, placeholder }) => {
  return (
    <div className="min-h-[120px] border rounded bg-white">
      <TiptapEditorWrapper 
        content={value || `<p>${placeholder || 'Start typing...'}</p>`}
        onChange={onChange}
      />
    </div>
  )
}

export default Tiptap
