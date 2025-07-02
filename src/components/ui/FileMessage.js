'use client';

export default function FileMessage({ data }) {
  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'pdf':
        return '📄';
      case 'doc':
      case 'docx':
        return '📝';
      case 'xls':
      case 'xlsx':
        return '📊';
      case 'ppt':
      case 'pptx':
        return '📈';
      case 'zip':
      case 'rar':
        return '📦';
      default:
        return '📁';
    }
  };

  const formatFileSize = (sizeInKB) => {
    if (sizeInKB < 1024) {
      return `${sizeInKB} KB`;
    } else {
      return `${(sizeInKB / 1024).toFixed(1)} MB`;
    }
  };

  return (
    <div className="bg-[var(--whatsapp-background)] p-3 rounded-lg border border-[var(--whatsapp-border)] max-w-sm">
      <div className="flex items-center space-x-3">
        <div className="text-3xl">
          {getFileIcon(data.fileName)}
        </div>
        
        <div className="flex-1 min-w-0">
          <p className="text-[var(--whatsapp-text-primary)] font-medium truncate">
            {data.fileName}
          </p>
          <p className="text-[var(--whatsapp-text-secondary)] text-sm">
            {formatFileSize(parseInt(data.fileSize))}
          </p>
        </div>

        <a
          href={data.downloadUrl}
          download={data.fileName}
          className="bg-[var(--whatsapp-primary)] hover:bg-[var(--whatsapp-primary-dark)] text-white p-2 rounded-full transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
