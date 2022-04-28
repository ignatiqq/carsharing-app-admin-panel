const base64Helper = {
    encode: (str: String) => {
        return Buffer.from(str).toString("base64");
    },
    decode: (b64Str: string) => {
        return Buffer.from(b64Str, "base64").toString("utf-8");
    }
}

export default base64Helper;
