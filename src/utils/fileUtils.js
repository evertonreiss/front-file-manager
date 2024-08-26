function downloadFile(data, fileName, mimeType) {
    const blob = new Blob([data], { type: mimeType });
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = fileName;

    downloadLink.click();

    window.URL.revokeObjectURL(downloadLink.href);
}
function viewFile(data, mimeType) {
    const blob = new window.Blob([data], { type: mimeType });
    const link = window.URL.createObjectURL(blob);
    window.open(link, '_blank')
}

function getIconForFile(type) {
    const icon_mapper = {
        jpeg: "mdi-file-jpg-box",
        jpg: "mdi-file-jpg-box",
        png: "mdi-file-png-box",
        gif: "mdi-file-gif-box",
        webp: "mdi-web-box",
        svg: "mdi-drawing-box",
        mp4: "mdi-play-box",
        webm: "mdi-play-box",
        ogg: "mdi-music-box",
        avi: "mdi-play-box",
        mpeg: "mdi-play-box",
        mov: "mdi-play-box",
        pdf: "mdi-file-pdf-box",
        doc: "mdi-file-word-box",
        docx: "mdi-file-word-box",
        xls: "mdi-file-excel-box",
        xlsx: "mdi-file-excel-box",
        ppt: "mdi-file-powerpoint-box",
        pptx: "mdi-file-powerpoint-box",
        txt: "mdi-text-box",
        mp3: "mdi-music-box",
        wav: "mdi-play-box",
        zip: "mdi-zip-box",
        rar: "mdi-zip-box",
        '7z': "mdi-zip-box"
    }

    return icon_mapper[type] ?? 'mdi-help-box'
}
function getFileType(filePath) {
    return filePath.split('.')[1]
}

export {
    downloadFile,
    viewFile,
    getIconForFile,
    getFileType
}