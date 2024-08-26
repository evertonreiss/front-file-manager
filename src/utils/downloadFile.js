export default function downloadFile(data, fileName) {
    const blob = new Blob([data]);
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = fileName;

    downloadLink.click();

    window.URL.revokeObjectURL(downloadLink.href);
} 