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

export {
    downloadFile,
    viewFile
}