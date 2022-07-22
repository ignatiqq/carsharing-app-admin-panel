const base64Helper = {
    encode: (str: string) => {
        return btoa(str);
    },
    decode: (b64Str: string) => {
        return atob(b64Str);
    },
    fileToBase64: (file: File) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    })
}

export default base64Helper;
