const base64Helper = {
    encode: (str: string) => {
        return btoa(str);
    },
    decode: (b64Str: string) => {
        return atob(b64Str);
    }
}

export default base64Helper;
