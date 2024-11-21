import React, { useState } from 'react'

function App() {
  const [pdfFile, setPdfFile] = useState(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type === 'application/pdf') {
      setPdfFile(file)
    }
  }

  return (
    <div className="min-h-screen p-4">
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="mb-4"
      />
      {pdfFile && (
        <iframe
          src={URL.createObjectURL(pdfFile)}
          width="100%"
          height="800px"
          title="PDF Viewer"
        />
      )}
    </div>
  )
}

export default App
