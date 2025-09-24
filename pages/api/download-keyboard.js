import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import fs from 'fs'

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Path to the DMG file in the public/static directory
    const filePath = path.join(process.cwd(), 'public', 'static', 'PashtoDAOPKeyboardInstaller.dmg')

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'File not found' })
    }

    // Get file stats
    const stats = fs.statSync(filePath)
    const fileSize = stats.size

    // Set appropriate headers for file download
    res.setHeader('Content-Type', 'application/octet-stream')
    res.setHeader('Content-Disposition', 'attachment; filename="PashtoDAOPKeyboardInstaller.dmg"')
    res.setHeader('Content-Length', fileSize)
    res.setHeader('Cache-Control', 'public, max-age=31536000') // Cache for 1 year

    // Create read stream and pipe to response
    const fileStream = fs.createReadStream(filePath)
    fileStream.pipe(res)

    fileStream.on('error', (error) => {
      console.error('Error streaming file:', error)
      if (!res.headersSent) {
        res.status(500).json({ error: 'Error downloading file' })
      }
    })
  } catch (error) {
    console.error('Error in download handler:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
