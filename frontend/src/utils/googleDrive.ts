/**
 * Extract the file ID from various Google Drive URL formats
 */
export function extractDriveFileId(url: string): string {
  // Handle /file/d/{fileId}/view format
  const fileMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileMatch) {
    return fileMatch[1];
  }

  // Handle /open?id={fileId} format
  const openMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (openMatch) {
    return openMatch[1];
  }

  // If no match, return the URL as-is (might already be an ID)
  return url;
}

/**
 * Get the preview URL for embedding (may be blocked by Google)
 */
export function getDrivePreviewUrl(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/preview`;
}

/**
 * Get the direct view URL that opens in a new tab
 */
export function getDriveDirectUrl(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/view`;
}

/**
 * Get the embed URL optimized for inline playback
 */
export function getDriveEmbedUrl(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/preview?autoplay=0`;
}
