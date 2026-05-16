(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/3e5b4_65fd45a3._.js", {

"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/random.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createRandomStringGenerator": (()=>createRandomStringGenerator)
});
function expandAlphabet(alphabet) {
    switch(alphabet){
        case "a-z":
            return "abcdefghijklmnopqrstuvwxyz";
        case "A-Z":
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        case "0-9":
            return "0123456789";
        case "-_":
            return "-_";
        default:
            throw new Error(`Unsupported alphabet: ${alphabet}`);
    }
}
function createRandomStringGenerator(...baseAlphabets) {
    const baseCharSet = baseAlphabets.map(expandAlphabet).join("");
    if (baseCharSet.length === 0) {
        throw new Error("No valid characters provided for random string generation.");
    }
    const baseCharSetLength = baseCharSet.length;
    return (length, ...alphabets)=>{
        if (length <= 0) {
            throw new Error("Length must be a positive integer.");
        }
        let charSet = baseCharSet;
        let charSetLength = baseCharSetLength;
        if (alphabets.length > 0) {
            charSet = alphabets.map(expandAlphabet).join("");
            charSetLength = charSet.length;
        }
        const maxValid = Math.floor(256 / charSetLength) * charSetLength;
        const buf = new Uint8Array(length * 2);
        const bufLength = buf.length;
        let result = "";
        let bufIndex = bufLength;
        let rand;
        while(result.length < length){
            if (bufIndex >= bufLength) {
                crypto.getRandomValues(buf);
                bufIndex = 0;
            }
            rand = buf[bufIndex++];
            if (rand < maxValid) {
                result += charSet[rand % charSetLength];
            }
        }
        return result;
    };
}
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/hex.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hex": (()=>hex)
});
const hexadecimal = "0123456789abcdef";
const hex = {
    encode: (data)=>{
        if (typeof data === "string") {
            data = new TextEncoder().encode(data);
        }
        if (data.byteLength === 0) {
            return "";
        }
        const buffer = new Uint8Array(data);
        let result = "";
        for (const byte of buffer){
            result += byte.toString(16).padStart(2, "0");
        }
        return result;
    },
    decode: (data)=>{
        if (!data) {
            return "";
        }
        if (typeof data === "string") {
            if (data.length % 2 !== 0) {
                throw new Error("Invalid hexadecimal string");
            }
            if (!new RegExp(`^[${hexadecimal}]+$`).test(data)) {
                throw new Error("Invalid hexadecimal string");
            }
            const result = new Uint8Array(data.length / 2);
            for(let i = 0; i < data.length; i += 2){
                result[i / 2] = parseInt(data.slice(i, i + 2), 16);
            }
            return new TextDecoder().decode(result);
        }
        return new TextDecoder().decode(data);
    }
};
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/index.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getWebcryptoSubtle": (()=>getWebcryptoSubtle)
});
function getWebcryptoSubtle() {
    const cr = typeof globalThis !== "undefined" && globalThis.crypto;
    if (cr && typeof cr.subtle === "object" && cr.subtle != null) return cr.subtle;
    throw new Error("crypto.subtle must be defined");
}
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/base64.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "base64": (()=>base64),
    "base64Url": (()=>base64Url)
});
function getAlphabet(urlSafe) {
    return urlSafe ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_" : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
}
function base64Encode(data, alphabet, padding) {
    let result = "";
    let buffer = 0;
    let shift = 0;
    for (const byte of data){
        buffer = buffer << 8 | byte;
        shift += 8;
        while(shift >= 6){
            shift -= 6;
            result += alphabet[buffer >> shift & 63];
        }
    }
    if (shift > 0) {
        result += alphabet[buffer << 6 - shift & 63];
    }
    if (padding) {
        const padCount = (4 - result.length % 4) % 4;
        result += "=".repeat(padCount);
    }
    return result;
}
function base64Decode(data, alphabet) {
    const decodeMap = /* @__PURE__ */ new Map();
    for(let i = 0; i < alphabet.length; i++){
        decodeMap.set(alphabet[i], i);
    }
    const result = [];
    let buffer = 0;
    let bitsCollected = 0;
    for (const char of data){
        if (char === "=") break;
        const value = decodeMap.get(char);
        if (value === void 0) {
            throw new Error(`Invalid Base64 character: ${char}`);
        }
        buffer = buffer << 6 | value;
        bitsCollected += 6;
        if (bitsCollected >= 8) {
            bitsCollected -= 8;
            result.push(buffer >> bitsCollected & 255);
        }
    }
    return Uint8Array.from(result);
}
const base64 = {
    encode (data, options = {}) {
        const alphabet = getAlphabet(false);
        const buffer = typeof data === "string" ? new TextEncoder().encode(data) : new Uint8Array(data);
        return base64Encode(buffer, alphabet, options.padding ?? true);
    },
    decode (data) {
        if (typeof data !== "string") {
            data = new TextDecoder().decode(data);
        }
        const urlSafe = data.includes("-") || data.includes("_");
        const alphabet = getAlphabet(urlSafe);
        return base64Decode(data, alphabet);
    }
};
const base64Url = {
    encode (data, options = {}) {
        const alphabet = getAlphabet(true);
        const buffer = typeof data === "string" ? new TextEncoder().encode(data) : new Uint8Array(data);
        return base64Encode(buffer, alphabet, options.padding ?? true);
    },
    decode (data) {
        const urlSafe = data.includes("-") || data.includes("_");
        const alphabet = getAlphabet(urlSafe);
        return base64Decode(data, alphabet);
    }
};
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/hash.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createHash": (()=>createHash)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/base64.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/index.mjs [middleware-edge] (ecmascript)");
;
;
function createHash(algorithm, encoding) {
    return {
        digest: async (input)=>{
            const encoder = new TextEncoder();
            const data = typeof input === "string" ? encoder.encode(input) : input;
            const hashBuffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().digest(algorithm, data);
            if (encoding === "hex") {
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray.map((b)=>b.toString(16).padStart(2, "0")).join("");
                return hashHex;
            }
            if (encoding === "base64" || encoding === "base64url" || encoding === "base64urlnopad") {
                if (encoding.includes("url")) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["base64Url"].encode(hashBuffer, {
                        padding: encoding !== "base64urlnopad"
                    });
                }
                const hashBase64 = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["base64"].encode(hashBuffer);
                return hashBase64;
            }
            return hashBuffer;
        }
    };
}
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/binary.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "binary": (()=>binary)
});
const decoders = /* @__PURE__ */ new Map();
const encoder = new TextEncoder();
const binary = {
    decode: (data, encoding = "utf-8")=>{
        if (!decoders.has(encoding)) {
            decoders.set(encoding, new TextDecoder(encoding));
        }
        const decoder = decoders.get(encoding);
        return decoder.decode(data);
    },
    encode: encoder.encode
};
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/hmac.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createHMAC": (()=>createHMAC)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/hex.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/base64.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/index.mjs [middleware-edge] (ecmascript)");
;
;
;
const createHMAC = (algorithm = "SHA-256", encoding = "none")=>{
    const hmac = {
        importKey: async (key, keyUsage)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().importKey("raw", typeof key === "string" ? new TextEncoder().encode(key) : key, {
                name: "HMAC",
                hash: {
                    name: algorithm
                }
            }, false, [
                keyUsage
            ]);
        },
        sign: async (hmacKey, data)=>{
            if (typeof hmacKey === "string") {
                hmacKey = await hmac.importKey(hmacKey, "sign");
            }
            const signature = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().sign("HMAC", hmacKey, typeof data === "string" ? new TextEncoder().encode(data) : data);
            if (encoding === "hex") {
                return __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hex"].encode(signature);
            }
            if (encoding === "base64" || encoding === "base64url" || encoding === "base64urlnopad") {
                return __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["base64Url"].encode(signature, {
                    padding: encoding !== "base64urlnopad"
                });
            }
            return signature;
        },
        verify: async (hmacKey, data, signature)=>{
            if (typeof hmacKey === "string") {
                hmacKey = await hmac.importKey(hmacKey, "verify");
            }
            if (encoding === "hex") {
                signature = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hex"].decode(signature);
            }
            if (encoding === "base64" || encoding === "base64url" || encoding === "base64urlnopad") {
                signature = await __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["base64"].decode(signature);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().verify("HMAC", hmacKey, typeof signature === "string" ? new TextEncoder().encode(signature) : signature, typeof data === "string" ? new TextEncoder().encode(data) : data);
        }
    };
    return hmac;
};
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/base32.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "base32": (()=>base32),
    "base32hex": (()=>base32hex)
});
function getAlphabet(hex) {
    return hex ? "0123456789ABCDEFGHIJKLMNOPQRSTUV" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
}
function createDecodeMap(alphabet) {
    const decodeMap = /* @__PURE__ */ new Map();
    for(let i = 0; i < alphabet.length; i++){
        decodeMap.set(alphabet[i], i);
    }
    return decodeMap;
}
function base32Encode(data, alphabet, padding) {
    let result = "";
    let buffer = 0;
    let shift = 0;
    for (const byte of data){
        buffer = buffer << 8 | byte;
        shift += 8;
        while(shift >= 5){
            shift -= 5;
            result += alphabet[buffer >> shift & 31];
        }
    }
    if (shift > 0) {
        result += alphabet[buffer << 5 - shift & 31];
    }
    if (padding) {
        const padCount = (8 - result.length % 8) % 8;
        result += "=".repeat(padCount);
    }
    return result;
}
function base32Decode(data, alphabet) {
    const decodeMap = createDecodeMap(alphabet);
    const result = [];
    let buffer = 0;
    let bitsCollected = 0;
    for (const char of data){
        if (char === "=") break;
        const value = decodeMap.get(char);
        if (value === void 0) {
            throw new Error(`Invalid Base32 character: ${char}`);
        }
        buffer = buffer << 5 | value;
        bitsCollected += 5;
        while(bitsCollected >= 8){
            bitsCollected -= 8;
            result.push(buffer >> bitsCollected & 255);
        }
    }
    return Uint8Array.from(result);
}
const base32 = {
    /**
   * Encodes data into a Base32 string.
   * @param data - The data to encode (ArrayBuffer, TypedArray, or string).
   * @param options - Encoding options.
   * @returns The Base32 encoded string.
   */ encode (data, options = {}) {
        const alphabet = getAlphabet(false);
        const buffer = typeof data === "string" ? new TextEncoder().encode(data) : new Uint8Array(data);
        return base32Encode(buffer, alphabet, options.padding ?? true);
    },
    /**
   * Decodes a Base32 string into a Uint8Array.
   * @param data - The Base32 encoded string or ArrayBuffer/TypedArray.
   * @returns The decoded Uint8Array.
   */ decode (data) {
        if (typeof data !== "string") {
            data = new TextDecoder().decode(data);
        }
        const alphabet = getAlphabet(false);
        return base32Decode(data, alphabet);
    }
};
const base32hex = {
    /**
   * Encodes data into a Base32hex string.
   * @param data - The data to encode (ArrayBuffer, TypedArray, or string).
   * @param options - Encoding options.
   * @returns The Base32hex encoded string.
   */ encode (data, options = {}) {
        const alphabet = getAlphabet(true);
        const buffer = typeof data === "string" ? new TextEncoder().encode(data) : new Uint8Array(data);
        return base32Encode(buffer, alphabet, options.padding ?? true);
    },
    /**
   * Decodes a Base32hex string into a Uint8Array.
   * @param data - The Base32hex encoded string.
   * @returns The decoded Uint8Array.
   */ decode (data) {
        const alphabet = getAlphabet(true);
        return base32Decode(data, alphabet);
    }
};
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/otp.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createOTP": (()=>createOTP)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base32$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/base32.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/hmac.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/hex.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/base64.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/index.mjs [middleware-edge] (ecmascript)");
;
;
;
;
;
const defaultPeriod = 30;
const defaultDigits = 6;
async function generateHOTP(secret, { counter, digits, hash = "SHA-1" }) {
    const _digits = digits ?? defaultDigits;
    if (_digits < 1 || _digits > 8) {
        throw new TypeError("Digits must be between 1 and 8");
    }
    const buffer = new ArrayBuffer(8);
    new DataView(buffer).setBigUint64(0, BigInt(counter), false);
    const bytes = new Uint8Array(buffer);
    const hmacResult = new Uint8Array(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createHMAC"])(hash).sign(secret, bytes));
    const offset = hmacResult[hmacResult.length - 1] & 15;
    const truncated = (hmacResult[offset] & 127) << 24 | (hmacResult[offset + 1] & 255) << 16 | (hmacResult[offset + 2] & 255) << 8 | hmacResult[offset + 3] & 255;
    const otp = truncated % 10 ** _digits;
    return otp.toString().padStart(_digits, "0");
}
async function generateTOTP(secret, options) {
    const digits = options?.digits ?? defaultDigits;
    const period = options?.period ?? defaultPeriod;
    const milliseconds = period * 1e3;
    const counter = Math.floor(Date.now() / milliseconds);
    return await generateHOTP(secret, {
        counter,
        digits,
        hash: options?.hash
    });
}
async function verifyTOTP(otp, { window = 1, digits = defaultDigits, secret, period = defaultPeriod }) {
    const milliseconds = period * 1e3;
    const counter = Math.floor(Date.now() / milliseconds);
    for(let i = -window; i <= window; i++){
        const generatedOTP = await generateHOTP(secret, {
            counter: counter + i,
            digits
        });
        if (otp === generatedOTP) {
            return true;
        }
    }
    return false;
}
function generateQRCode({ issuer, account, secret, digits = defaultDigits, period = defaultPeriod }) {
    const encodedIssuer = encodeURIComponent(issuer);
    const encodedAccountName = encodeURIComponent(account);
    const baseURI = `otpauth://totp/${encodedIssuer}:${encodedAccountName}`;
    const params = new URLSearchParams({
        secret: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base32$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["base32"].encode(secret, {
            padding: false
        }),
        issuer
    });
    if (digits !== void 0) {
        params.set("digits", digits.toString());
    }
    if (period !== void 0) {
        params.set("period", period.toString());
    }
    return `${baseURI}?${params.toString()}`;
}
const createOTP = (secret, opts)=>{
    const digits = opts?.digits ?? defaultDigits;
    const period = opts?.period ?? defaultPeriod;
    return {
        hotp: (counter)=>generateHOTP(secret, {
                counter,
                digits
            }),
        totp: ()=>generateTOTP(secret, {
                digits,
                period
            }),
        verify: (otp, options)=>verifyTOTP(otp, {
                secret,
                digits,
                period,
                ...options
            }),
        url: (issuer, account)=>generateQRCode({
                issuer,
                account,
                secret,
                digits,
                period
            })
    };
};
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/hashes/utils.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Utilities for hex, bytes, CSPRNG.
 * @module
 */ /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ /** Checks if something is Uint8Array. Be careful: nodejs Buffer will return true. */ __turbopack_context__.s({
    "abytes": (()=>abytes),
    "aexists": (()=>aexists),
    "ahash": (()=>ahash),
    "anumber": (()=>anumber),
    "aoutput": (()=>aoutput),
    "asyncLoop": (()=>asyncLoop),
    "byteSwap": (()=>byteSwap),
    "byteSwap32": (()=>byteSwap32),
    "bytesToHex": (()=>bytesToHex),
    "checkOpts": (()=>checkOpts),
    "clean": (()=>clean),
    "concatBytes": (()=>concatBytes),
    "createHasher": (()=>createHasher),
    "createView": (()=>createView),
    "hexToBytes": (()=>hexToBytes),
    "isBytes": (()=>isBytes),
    "isLE": (()=>isLE),
    "kdfInputToBytes": (()=>kdfInputToBytes),
    "nextTick": (()=>nextTick),
    "oidNist": (()=>oidNist),
    "randomBytes": (()=>randomBytes),
    "rotl": (()=>rotl),
    "rotr": (()=>rotr),
    "swap32IfBE": (()=>swap32IfBE),
    "swap8IfBE": (()=>swap8IfBE),
    "u32": (()=>u32),
    "u8": (()=>u8),
    "utf8ToBytes": (()=>utf8ToBytes)
});
function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array';
}
function anumber(n, title = '') {
    if (!Number.isSafeInteger(n) || n < 0) {
        const prefix = title && `"${title}" `;
        throw new Error(`${prefix}expected integer >= 0, got ${n}`);
    }
}
function abytes(value, length, title = '') {
    const bytes = isBytes(value);
    const len = value?.length;
    const needsLen = length !== undefined;
    if (!bytes || needsLen && len !== length) {
        const prefix = title && `"${title}" `;
        const ofLen = needsLen ? ` of length ${length}` : '';
        const got = bytes ? `length=${len}` : `type=${typeof value}`;
        throw new Error(prefix + 'expected Uint8Array' + ofLen + ', got ' + got);
    }
    return value;
}
function ahash(h) {
    if (typeof h !== 'function' || typeof h.create !== 'function') throw new Error('Hash must wrapped by utils.createHasher');
    anumber(h.outputLen);
    anumber(h.blockLen);
}
function aexists(instance, checkFinished = true) {
    if (instance.destroyed) throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
}
function aoutput(out, instance) {
    abytes(out, undefined, 'digestInto() output');
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error('"digestInto() output" expected to be of length >=' + min);
    }
}
function u8(arr) {
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
}
function u32(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function clean(...arrays) {
    for(let i = 0; i < arrays.length; i++){
        arrays[i].fill(0);
    }
}
function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
function rotr(word, shift) {
    return word << 32 - shift | word >>> shift;
}
function rotl(word, shift) {
    return word << shift | word >>> 32 - shift >>> 0;
}
const isLE = /* @__PURE__ */ (()=>new Uint8Array(new Uint32Array([
        0x11223344
    ]).buffer)[0] === 0x44)();
function byteSwap(word) {
    return word << 24 & 0xff000000 | word << 8 & 0xff0000 | word >>> 8 & 0xff00 | word >>> 24 & 0xff;
}
const swap8IfBE = isLE ? (n)=>n : (n)=>byteSwap(n);
function byteSwap32(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = byteSwap(arr[i]);
    }
    return arr;
}
const swap32IfBE = isLE ? (u)=>u : byteSwap32;
// Built-in hex conversion https://caniuse.com/mdn-javascript_builtins_uint8array_fromhex
const hasHexBuiltin = /* @__PURE__ */ (()=>// @ts-ignore
    typeof Uint8Array.from([]).toHex === 'function' && typeof Uint8Array.fromHex === 'function')();
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, '0'));
function bytesToHex(bytes) {
    abytes(bytes);
    // @ts-ignore
    if (hasHexBuiltin) return bytes.toHex();
    // pre-caching improves the speed 6x
    let hex = '';
    for(let i = 0; i < bytes.length; i++){
        hex += hexes[bytes[i]];
    }
    return hex;
}
// We use optimized technique to convert hex string to byte array
const asciis = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9) return ch - asciis._0; // '2' => 50-48
    if (ch >= asciis.A && ch <= asciis.F) return ch - (asciis.A - 10); // 'B' => 66-(65-10)
    if (ch >= asciis.a && ch <= asciis.f) return ch - (asciis.a - 10); // 'b' => 98-(97-10)
    return;
}
function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    // @ts-ignore
    if (hasHexBuiltin) return Uint8Array.fromHex(hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2) throw new Error('hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for(let ai = 0, hi = 0; ai < al; ai++, hi += 2){
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2; // multiply first octet, e.g. 'a3' => 10*16+3 => 160 + 3 => 163
    }
    return array;
}
const nextTick = async ()=>{};
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await nextTick();
        ts += diff;
    }
}
function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new Error('string expected');
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
function kdfInputToBytes(data, errorTitle = '') {
    if (typeof data === 'string') return utf8ToBytes(data);
    return abytes(data, undefined, errorTitle);
}
function concatBytes(...arrays) {
    let sum = 0;
    for(let i = 0; i < arrays.length; i++){
        const a = arrays[i];
        abytes(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
function checkOpts(defaults, opts) {
    if (opts !== undefined && ({}).toString.call(opts) !== '[object Object]') throw new Error('options must be object or undefined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
function createHasher(hashCons, info = {}) {
    const hashC = (msg, opts)=>hashCons(opts).update(msg).digest();
    const tmp = hashCons(undefined);
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    Object.assign(hashC, info);
    return Object.freeze(hashC);
}
function randomBytes(bytesLength = 32) {
    const cr = typeof globalThis === 'object' ? globalThis.crypto : null;
    if (typeof cr?.getRandomValues !== 'function') throw new Error('crypto.getRandomValues must be defined');
    return cr.getRandomValues(new Uint8Array(bytesLength));
}
const oidNist = (suffix)=>({
        oid: Uint8Array.from([
            0x06,
            0x09,
            0x60,
            0x86,
            0x48,
            0x01,
            0x65,
            0x03,
            0x04,
            0x02,
            suffix
        ])
    }); //# sourceMappingURL=utils.js.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/hashes/hmac.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * HMAC: RFC2104 message authentication code.
 * @module
 */ __turbopack_context__.s({
    "_HMAC": (()=>_HMAC),
    "hmac": (()=>hmac)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/hashes/utils.js [middleware-edge] (ecmascript)");
;
class _HMAC {
    oHash;
    iHash;
    blockLen;
    outputLen;
    finished = false;
    destroyed = false;
    constructor(hash, key){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ahash"])(hash);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["abytes"])(key, undefined, 'key');
        this.iHash = hash.create();
        if (typeof this.iHash.update !== 'function') throw new Error('Expected instance of class which extends utils.Hash');
        this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const blockLen = this.blockLen;
        const pad = new Uint8Array(blockLen);
        // blockLen can be bigger than outputLen
        pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
        for(let i = 0; i < pad.length; i++)pad[i] ^= 0x36;
        this.iHash.update(pad);
        // By doing update (processing of first block) of outer hash here we can re-use it between multiple calls via clone
        this.oHash = hash.create();
        // Undo internal XOR && apply outer XOR
        for(let i = 0; i < pad.length; i++)pad[i] ^= 0x36 ^ 0x5c;
        this.oHash.update(pad);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clean"])(pad);
    }
    update(buf) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["aexists"])(this);
        this.iHash.update(buf);
        return this;
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["abytes"])(out, this.outputLen, 'output');
        this.finished = true;
        this.iHash.digestInto(out);
        this.oHash.update(out);
        this.oHash.digestInto(out);
        this.destroy();
    }
    digest() {
        const out = new Uint8Array(this.oHash.outputLen);
        this.digestInto(out);
        return out;
    }
    _cloneInto(to) {
        // Create new instance without calling constructor since key already in state and we don't know it.
        to ||= Object.create(Object.getPrototypeOf(this), {});
        const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
        to = to;
        to.finished = finished;
        to.destroyed = destroyed;
        to.blockLen = blockLen;
        to.outputLen = outputLen;
        to.oHash = oHash._cloneInto(to.oHash);
        to.iHash = iHash._cloneInto(to.iHash);
        return to;
    }
    clone() {
        return this._cloneInto();
    }
    destroy() {
        this.destroyed = true;
        this.oHash.destroy();
        this.iHash.destroy();
    }
}
const hmac = (hash, key, message)=>new _HMAC(hash, key).update(message).digest();
hmac.create = (hash, key)=>new _HMAC(hash, key); //# sourceMappingURL=hmac.js.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/hashes/hkdf.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * HKDF (RFC 5869): extract + expand in one step.
 * See https://soatok.blog/2021/11/17/understanding-hkdf/.
 * @module
 */ __turbopack_context__.s({
    "expand": (()=>expand),
    "extract": (()=>extract),
    "hkdf": (()=>hkdf)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$hmac$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/hashes/hmac.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/hashes/utils.js [middleware-edge] (ecmascript)");
;
;
function extract(hash, ikm, salt) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ahash"])(hash);
    // NOTE: some libraries treat zero-length array as 'not provided';
    // we don't, since we have undefined as 'not provided'
    // https://github.com/RustCrypto/KDFs/issues/15
    if (salt === undefined) salt = new Uint8Array(hash.outputLen);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$hmac$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hmac"])(hash, salt, ikm);
}
const HKDF_COUNTER = /* @__PURE__ */ Uint8Array.of(0);
const EMPTY_BUFFER = /* @__PURE__ */ Uint8Array.of();
function expand(hash, prk, info, length = 32) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ahash"])(hash);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["anumber"])(length, 'length');
    const olen = hash.outputLen;
    if (length > 255 * olen) throw new Error('Length must be <= 255*HashLen');
    const blocks = Math.ceil(length / olen);
    if (info === undefined) info = EMPTY_BUFFER;
    else (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["abytes"])(info, undefined, 'info');
    // first L(ength) octets of T
    const okm = new Uint8Array(blocks * olen);
    // Re-use HMAC instance between blocks
    const HMAC = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$hmac$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hmac"].create(hash, prk);
    const HMACTmp = HMAC._cloneInto();
    const T = new Uint8Array(HMAC.outputLen);
    for(let counter = 0; counter < blocks; counter++){
        HKDF_COUNTER[0] = counter + 1;
        // T(0) = empty string (zero length)
        // T(N) = HMAC-Hash(PRK, T(N-1) | info | N)
        HMACTmp.update(counter === 0 ? EMPTY_BUFFER : T).update(info).update(HKDF_COUNTER).digestInto(T);
        okm.set(T, olen * counter);
        HMAC._cloneInto(HMACTmp);
    }
    HMAC.destroy();
    HMACTmp.destroy();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clean"])(T, HKDF_COUNTER);
    return okm.slice(0, length);
}
const hkdf = (hash, ikm, salt, info, length)=>expand(hash, extract(hash, ikm, salt), info, length); //# sourceMappingURL=hkdf.js.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/hashes/_md.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Internal Merkle-Damgard hash utils.
 * @module
 */ __turbopack_context__.s({
    "Chi": (()=>Chi),
    "HashMD": (()=>HashMD),
    "Maj": (()=>Maj),
    "SHA224_IV": (()=>SHA224_IV),
    "SHA256_IV": (()=>SHA256_IV),
    "SHA384_IV": (()=>SHA384_IV),
    "SHA512_IV": (()=>SHA512_IV)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/hashes/utils.js [middleware-edge] (ecmascript)");
;
function Chi(a, b, c) {
    return a & b ^ ~a & c;
}
function Maj(a, b, c) {
    return a & b ^ a & c ^ b & c;
}
class HashMD {
    blockLen;
    outputLen;
    padOffset;
    isLE;
    // For partial updates less than block size
    buffer;
    view;
    finished = false;
    length = 0;
    pos = 0;
    destroyed = false;
    constructor(blockLen, outputLen, padOffset, isLE){
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createView"])(this.buffer);
    }
    update(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["abytes"])(data);
        const { view, buffer, blockLen } = this;
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createView"])(data);
                for(; blockLen <= len - pos; pos += blockLen)this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["aoutput"])(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        // append the bit '1' to the message
        buffer[pos++] = 0b10000000;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clean"])(this.buffer.subarray(pos));
        // we have less than padOffset left in buffer, so we cannot put length in
        // current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for(let i = pos; i < blockLen; i++)buffer[i] = 0;
        // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64 bits of that value.
        view.setBigUint64(blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createView"])(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which must be fused in single op with modulo by JIT
        if (len % 4) throw new Error('_sha2: outputLen must be aligned to 32bit');
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length) throw new Error('_sha2: outputLen bigger than state');
        for(let i = 0; i < outLen; i++)oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to ||= new this.constructor();
        to.set(...this.get());
        const { blockLen, buffer, length, finished, destroyed, pos } = this;
        to.destroyed = destroyed;
        to.finished = finished;
        to.length = length;
        to.pos = pos;
        if (length % blockLen) to.buffer.set(buffer);
        return to;
    }
    clone() {
        return this._cloneInto();
    }
}
const SHA256_IV = /* @__PURE__ */ Uint32Array.from([
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
]);
const SHA224_IV = /* @__PURE__ */ Uint32Array.from([
    0xc1059ed8,
    0x367cd507,
    0x3070dd17,
    0xf70e5939,
    0xffc00b31,
    0x68581511,
    0x64f98fa7,
    0xbefa4fa4
]);
const SHA384_IV = /* @__PURE__ */ Uint32Array.from([
    0xcbbb9d5d,
    0xc1059ed8,
    0x629a292a,
    0x367cd507,
    0x9159015a,
    0x3070dd17,
    0x152fecd8,
    0xf70e5939,
    0x67332667,
    0xffc00b31,
    0x8eb44a87,
    0x68581511,
    0xdb0c2e0d,
    0x64f98fa7,
    0x47b5481d,
    0xbefa4fa4
]);
const SHA512_IV = /* @__PURE__ */ Uint32Array.from([
    0x6a09e667,
    0xf3bcc908,
    0xbb67ae85,
    0x84caa73b,
    0x3c6ef372,
    0xfe94f82b,
    0xa54ff53a,
    0x5f1d36f1,
    0x510e527f,
    0xade682d1,
    0x9b05688c,
    0x2b3e6c1f,
    0x1f83d9ab,
    0xfb41bd6b,
    0x5be0cd19,
    0x137e2179
]); //# sourceMappingURL=_md.js.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/hashes/_u64.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Internal helpers for u64. BigUint64Array is too slow as per 2025, so we implement it using Uint32Array.
 * @todo re-check https://issues.chromium.org/issues/42212588
 * @module
 */ __turbopack_context__.s({
    "add": (()=>add),
    "add3H": (()=>add3H),
    "add3L": (()=>add3L),
    "add4H": (()=>add4H),
    "add4L": (()=>add4L),
    "add5H": (()=>add5H),
    "add5L": (()=>add5L),
    "default": (()=>__TURBOPACK__default__export__),
    "fromBig": (()=>fromBig),
    "rotlBH": (()=>rotlBH),
    "rotlBL": (()=>rotlBL),
    "rotlSH": (()=>rotlSH),
    "rotlSL": (()=>rotlSL),
    "rotr32H": (()=>rotr32H),
    "rotr32L": (()=>rotr32L),
    "rotrBH": (()=>rotrBH),
    "rotrBL": (()=>rotrBL),
    "rotrSH": (()=>rotrSH),
    "rotrSL": (()=>rotrSL),
    "shrSH": (()=>shrSH),
    "shrSL": (()=>shrSL),
    "split": (()=>split),
    "toBig": (()=>toBig)
});
const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
function fromBig(n, le = false) {
    if (le) return {
        h: Number(n & U32_MASK64),
        l: Number(n >> _32n & U32_MASK64)
    };
    return {
        h: Number(n >> _32n & U32_MASK64) | 0,
        l: Number(n & U32_MASK64) | 0
    };
}
function split(lst, le = false) {
    const len = lst.length;
    let Ah = new Uint32Array(len);
    let Al = new Uint32Array(len);
    for(let i = 0; i < len; i++){
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [
            h,
            l
        ];
    }
    return [
        Ah,
        Al
    ];
}
const toBig = (h, l)=>BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
// for Shift in [0, 32)
const shrSH = (h, _l, s)=>h >>> s;
const shrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s)=>h >>> s | l << 32 - s;
const rotrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s)=>h << 64 - s | l >>> s - 32;
const rotrBL = (h, l, s)=>h >>> s - 32 | l << 64 - s;
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (_h, l)=>l;
const rotr32L = (h, _l)=>h;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s)=>h << s | l >>> 32 - s;
const rotlSL = (h, l, s)=>l << s | h >>> 32 - s;
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s)=>l << s - 32 | h >>> 64 - s;
const rotlBL = (h, l, s)=>h << s - 32 | l >>> 64 - s;
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return {
        h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
        l: l | 0
    };
}
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah, Bh, Ch)=>Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
const add4L = (Al, Bl, Cl, Dl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah, Bh, Ch, Dh)=>Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
const add5L = (Al, Bl, Cl, Dl, El)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah, Bh, Ch, Dh, Eh)=>Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
;
// prettier-ignore
const u64 = {
    fromBig,
    split,
    toBig,
    shrSH,
    shrSL,
    rotrSH,
    rotrSL,
    rotrBH,
    rotrBL,
    rotr32H,
    rotr32L,
    rotlSH,
    rotlSL,
    rotlBH,
    rotlBL,
    add,
    add3L,
    add3H,
    add4L,
    add4H,
    add5H,
    add5L
};
const __TURBOPACK__default__export__ = u64;
 //# sourceMappingURL=_u64.js.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/hashes/sha2.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * SHA2 hash function. A.k.a. sha256, sha384, sha512, sha512_224, sha512_256.
 * SHA256 is the fastest hash implementable in JS, even faster than Blake3.
 * Check out [RFC 4634](https://www.rfc-editor.org/rfc/rfc4634) and
 * [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf).
 * @module
 */ __turbopack_context__.s({
    "_SHA224": (()=>_SHA224),
    "_SHA256": (()=>_SHA256),
    "_SHA384": (()=>_SHA384),
    "_SHA512": (()=>_SHA512),
    "_SHA512_224": (()=>_SHA512_224),
    "_SHA512_256": (()=>_SHA512_256),
    "sha224": (()=>sha224),
    "sha256": (()=>sha256),
    "sha384": (()=>sha384),
    "sha512": (()=>sha512),
    "sha512_224": (()=>sha512_224),
    "sha512_256": (()=>sha512_256)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/hashes/_md.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/hashes/_u64.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/hashes/utils.js [middleware-edge] (ecmascript)");
;
;
;
/**
 * Round constants:
 * First 32 bits of fractional parts of the cube roots of the first 64 primes 2..311)
 */ // prettier-ignore
const SHA256_K = /* @__PURE__ */ Uint32Array.from([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
/** Reusable temporary buffer. "W" comes straight from spec. */ const SHA256_W = /* @__PURE__ */ new Uint32Array(64);
/** Internal 32-byte base SHA2 hash class. */ class SHA2_32B extends __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["HashMD"] {
    constructor(outputLen){
        super(64, outputLen, 8, false);
    }
    get() {
        const { A, B, C, D, E, F, G, H } = this;
        return [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H
        ];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4)SHA256_W[i] = view.getUint32(offset, false);
        for(let i = 16; i < 64; i++){
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotr"])(W15, 7) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotr"])(W15, 18) ^ W15 >>> 3;
            const s1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotr"])(W2, 17) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotr"])(W2, 19) ^ W2 >>> 10;
            SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        // Compression function main loop, 64 rounds
        let { A, B, C, D, E, F, G, H } = this;
        for(let i = 0; i < 64; i++){
            const sigma1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotr"])(E, 6) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotr"])(E, 11) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotr"])(E, 25);
            const T1 = H + sigma1 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Chi"])(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
            const sigma0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotr"])(A, 2) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotr"])(A, 13) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotr"])(A, 22);
            const T2 = sigma0 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Maj"])(A, B, C) | 0;
            H = G;
            G = F;
            F = E;
            E = D + T1 | 0;
            D = C;
            C = B;
            B = A;
            A = T1 + T2 | 0;
        }
        // Add the compressed chunk to the current hash value
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clean"])(SHA256_W);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clean"])(this.buffer);
    }
}
class _SHA256 extends SHA2_32B {
    // We cannot use array here since array allows indexing by variable
    // which means optimizer/compiler cannot use registers.
    A = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA256_IV"][0] | 0;
    B = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA256_IV"][1] | 0;
    C = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA256_IV"][2] | 0;
    D = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA256_IV"][3] | 0;
    E = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA256_IV"][4] | 0;
    F = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA256_IV"][5] | 0;
    G = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA256_IV"][6] | 0;
    H = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA256_IV"][7] | 0;
    constructor(){
        super(32);
    }
}
class _SHA224 extends SHA2_32B {
    A = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA224_IV"][0] | 0;
    B = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA224_IV"][1] | 0;
    C = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA224_IV"][2] | 0;
    D = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA224_IV"][3] | 0;
    E = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA224_IV"][4] | 0;
    F = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA224_IV"][5] | 0;
    G = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA224_IV"][6] | 0;
    H = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA224_IV"][7] | 0;
    constructor(){
        super(28);
    }
}
// SHA2-512 is slower than sha256 in js because u64 operations are slow.
// Round contants
// First 32 bits of the fractional parts of the cube roots of the first 80 primes 2..409
// prettier-ignore
const K512 = /* @__PURE__ */ (()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["split"])([
        '0x428a2f98d728ae22',
        '0x7137449123ef65cd',
        '0xb5c0fbcfec4d3b2f',
        '0xe9b5dba58189dbbc',
        '0x3956c25bf348b538',
        '0x59f111f1b605d019',
        '0x923f82a4af194f9b',
        '0xab1c5ed5da6d8118',
        '0xd807aa98a3030242',
        '0x12835b0145706fbe',
        '0x243185be4ee4b28c',
        '0x550c7dc3d5ffb4e2',
        '0x72be5d74f27b896f',
        '0x80deb1fe3b1696b1',
        '0x9bdc06a725c71235',
        '0xc19bf174cf692694',
        '0xe49b69c19ef14ad2',
        '0xefbe4786384f25e3',
        '0x0fc19dc68b8cd5b5',
        '0x240ca1cc77ac9c65',
        '0x2de92c6f592b0275',
        '0x4a7484aa6ea6e483',
        '0x5cb0a9dcbd41fbd4',
        '0x76f988da831153b5',
        '0x983e5152ee66dfab',
        '0xa831c66d2db43210',
        '0xb00327c898fb213f',
        '0xbf597fc7beef0ee4',
        '0xc6e00bf33da88fc2',
        '0xd5a79147930aa725',
        '0x06ca6351e003826f',
        '0x142929670a0e6e70',
        '0x27b70a8546d22ffc',
        '0x2e1b21385c26c926',
        '0x4d2c6dfc5ac42aed',
        '0x53380d139d95b3df',
        '0x650a73548baf63de',
        '0x766a0abb3c77b2a8',
        '0x81c2c92e47edaee6',
        '0x92722c851482353b',
        '0xa2bfe8a14cf10364',
        '0xa81a664bbc423001',
        '0xc24b8b70d0f89791',
        '0xc76c51a30654be30',
        '0xd192e819d6ef5218',
        '0xd69906245565a910',
        '0xf40e35855771202a',
        '0x106aa07032bbd1b8',
        '0x19a4c116b8d2d0c8',
        '0x1e376c085141ab53',
        '0x2748774cdf8eeb99',
        '0x34b0bcb5e19b48a8',
        '0x391c0cb3c5c95a63',
        '0x4ed8aa4ae3418acb',
        '0x5b9cca4f7763e373',
        '0x682e6ff3d6b2b8a3',
        '0x748f82ee5defb2fc',
        '0x78a5636f43172f60',
        '0x84c87814a1f0ab72',
        '0x8cc702081a6439ec',
        '0x90befffa23631e28',
        '0xa4506cebde82bde9',
        '0xbef9a3f7b2c67915',
        '0xc67178f2e372532b',
        '0xca273eceea26619c',
        '0xd186b8c721c0c207',
        '0xeada7dd6cde0eb1e',
        '0xf57d4f7fee6ed178',
        '0x06f067aa72176fba',
        '0x0a637dc5a2c898a6',
        '0x113f9804bef90dae',
        '0x1b710b35131c471b',
        '0x28db77f523047d84',
        '0x32caab7b40c72493',
        '0x3c9ebe0a15c9bebc',
        '0x431d67c49c100d4c',
        '0x4cc5d4becb3e42b6',
        '0x597f299cfc657e2a',
        '0x5fcb6fab3ad6faec',
        '0x6c44198c4a475817'
    ].map((n)=>BigInt(n))))();
const SHA512_Kh = /* @__PURE__ */ (()=>K512[0])();
const SHA512_Kl = /* @__PURE__ */ (()=>K512[1])();
// Reusable temporary buffers
const SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
const SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
/** Internal 64-byte base SHA2 hash class. */ class SHA2_64B extends __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["HashMD"] {
    constructor(outputLen){
        super(128, outputLen, 16, false);
    }
    // prettier-ignore
    get() {
        const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        return [
            Ah,
            Al,
            Bh,
            Bl,
            Ch,
            Cl,
            Dh,
            Dl,
            Eh,
            El,
            Fh,
            Fl,
            Gh,
            Gl,
            Hh,
            Hl
        ];
    }
    // prettier-ignore
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
        this.Ah = Ah | 0;
        this.Al = Al | 0;
        this.Bh = Bh | 0;
        this.Bl = Bl | 0;
        this.Ch = Ch | 0;
        this.Cl = Cl | 0;
        this.Dh = Dh | 0;
        this.Dl = Dl | 0;
        this.Eh = Eh | 0;
        this.El = El | 0;
        this.Fh = Fh | 0;
        this.Fl = Fl | 0;
        this.Gh = Gh | 0;
        this.Gl = Gl | 0;
        this.Hh = Hh | 0;
        this.Hl = Hl | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 64 words w[16..79] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4){
            SHA512_W_H[i] = view.getUint32(offset);
            SHA512_W_L[i] = view.getUint32(offset += 4);
        }
        for(let i = 16; i < 80; i++){
            // s0 := (w[i-15] rightrotate 1) xor (w[i-15] rightrotate 8) xor (w[i-15] rightshift 7)
            const W15h = SHA512_W_H[i - 15] | 0;
            const W15l = SHA512_W_L[i - 15] | 0;
            const s0h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotrSH"])(W15h, W15l, 1) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotrSH"])(W15h, W15l, 8) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["shrSH"])(W15h, W15l, 7);
            const s0l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotrSL"])(W15h, W15l, 1) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotrSL"])(W15h, W15l, 8) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["shrSL"])(W15h, W15l, 7);
            // s1 := (w[i-2] rightrotate 19) xor (w[i-2] rightrotate 61) xor (w[i-2] rightshift 6)
            const W2h = SHA512_W_H[i - 2] | 0;
            const W2l = SHA512_W_L[i - 2] | 0;
            const s1h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotrSH"])(W2h, W2l, 19) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotrBH"])(W2h, W2l, 61) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["shrSH"])(W2h, W2l, 6);
            const s1l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotrSL"])(W2h, W2l, 19) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotrBL"])(W2h, W2l, 61) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["shrSL"])(W2h, W2l, 6);
            // SHA256_W[i] = s0 + s1 + SHA256_W[i - 7] + SHA256_W[i - 16];
            const SUMl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["add4L"])(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
            const SUMh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["add4H"])(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
            SHA512_W_H[i] = SUMh | 0;
            SHA512_W_L[i] = SUMl | 0;
        }
        let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        // Compression function main loop, 80 rounds
        for(let i = 0; i < 80; i++){
            // S1 := (e rightrotate 14) xor (e rightrotate 18) xor (e rightrotate 41)
            const sigma1h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotrSH"])(Eh, El, 14) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotrSH"])(Eh, El, 18) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotrBH"])(Eh, El, 41);
            const sigma1l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotrSL"])(Eh, El, 14) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotrSL"])(Eh, El, 18) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotrBL"])(Eh, El, 41);
            //const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
            const CHIh = Eh & Fh ^ ~Eh & Gh;
            const CHIl = El & Fl ^ ~El & Gl;
            // T1 = H + sigma1 + Chi(E, F, G) + SHA512_K[i] + SHA512_W[i]
            // prettier-ignore
            const T1ll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["add5L"])(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
            const T1h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["add5H"])(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
            const T1l = T1ll | 0;
            // S0 := (a rightrotate 28) xor (a rightrotate 34) xor (a rightrotate 39)
            const sigma0h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotrSH"])(Ah, Al, 28) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotrBH"])(Ah, Al, 34) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotrBH"])(Ah, Al, 39);
            const sigma0l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotrSL"])(Ah, Al, 28) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotrBL"])(Ah, Al, 34) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotrBL"])(Ah, Al, 39);
            const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
            const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
            Hh = Gh | 0;
            Hl = Gl | 0;
            Gh = Fh | 0;
            Gl = Fl | 0;
            Fh = Eh | 0;
            Fl = El | 0;
            ({ h: Eh, l: El } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["add"])(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
            Dh = Ch | 0;
            Dl = Cl | 0;
            Ch = Bh | 0;
            Cl = Bl | 0;
            Bh = Ah | 0;
            Bl = Al | 0;
            const All = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["add3L"])(T1l, sigma0l, MAJl);
            Ah = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["add3H"])(All, T1h, sigma0h, MAJh);
            Al = All | 0;
        }
        // Add the compressed chunk to the current hash value
        ({ h: Ah, l: Al } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["add"])(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
        ({ h: Bh, l: Bl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["add"])(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
        ({ h: Ch, l: Cl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["add"])(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
        ({ h: Dh, l: Dl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["add"])(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
        ({ h: Eh, l: El } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["add"])(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
        ({ h: Fh, l: Fl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["add"])(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
        ({ h: Gh, l: Gl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["add"])(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
        ({ h: Hh, l: Hl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["add"])(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
        this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clean"])(SHA512_W_H, SHA512_W_L);
    }
    destroy() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clean"])(this.buffer);
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
}
class _SHA512 extends SHA2_64B {
    Ah = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA512_IV"][0] | 0;
    Al = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA512_IV"][1] | 0;
    Bh = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA512_IV"][2] | 0;
    Bl = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA512_IV"][3] | 0;
    Ch = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA512_IV"][4] | 0;
    Cl = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA512_IV"][5] | 0;
    Dh = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA512_IV"][6] | 0;
    Dl = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA512_IV"][7] | 0;
    Eh = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA512_IV"][8] | 0;
    El = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA512_IV"][9] | 0;
    Fh = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA512_IV"][10] | 0;
    Fl = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA512_IV"][11] | 0;
    Gh = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA512_IV"][12] | 0;
    Gl = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA512_IV"][13] | 0;
    Hh = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA512_IV"][14] | 0;
    Hl = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA512_IV"][15] | 0;
    constructor(){
        super(64);
    }
}
class _SHA384 extends SHA2_64B {
    Ah = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA384_IV"][0] | 0;
    Al = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA384_IV"][1] | 0;
    Bh = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA384_IV"][2] | 0;
    Bl = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA384_IV"][3] | 0;
    Ch = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA384_IV"][4] | 0;
    Cl = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA384_IV"][5] | 0;
    Dh = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA384_IV"][6] | 0;
    Dl = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA384_IV"][7] | 0;
    Eh = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA384_IV"][8] | 0;
    El = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA384_IV"][9] | 0;
    Fh = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA384_IV"][10] | 0;
    Fl = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA384_IV"][11] | 0;
    Gh = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA384_IV"][12] | 0;
    Gl = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA384_IV"][13] | 0;
    Hh = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA384_IV"][14] | 0;
    Hl = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA384_IV"][15] | 0;
    constructor(){
        super(48);
    }
}
/**
 * Truncated SHA512/256 and SHA512/224.
 * SHA512_IV is XORed with 0xa5a5a5a5a5a5a5a5, then used as "intermediary" IV of SHA512/t.
 * Then t hashes string to produce result IV.
 * See `test/misc/sha2-gen-iv.js`.
 */ /** SHA512/224 IV */ const T224_IV = /* @__PURE__ */ Uint32Array.from([
    0x8c3d37c8,
    0x19544da2,
    0x73e19966,
    0x89dcd4d6,
    0x1dfab7ae,
    0x32ff9c82,
    0x679dd514,
    0x582f9fcf,
    0x0f6d2b69,
    0x7bd44da8,
    0x77e36f73,
    0x04c48942,
    0x3f9d85a8,
    0x6a1d36c8,
    0x1112e6ad,
    0x91d692a1
]);
/** SHA512/256 IV */ const T256_IV = /* @__PURE__ */ Uint32Array.from([
    0x22312194,
    0xfc2bf72c,
    0x9f555fa3,
    0xc84c64c2,
    0x2393b86b,
    0x6f53b151,
    0x96387719,
    0x5940eabd,
    0x96283ee2,
    0xa88effe3,
    0xbe5e1e25,
    0x53863992,
    0x2b0199fc,
    0x2c85b8aa,
    0x0eb72ddc,
    0x81c52ca2
]);
class _SHA512_224 extends SHA2_64B {
    Ah = T224_IV[0] | 0;
    Al = T224_IV[1] | 0;
    Bh = T224_IV[2] | 0;
    Bl = T224_IV[3] | 0;
    Ch = T224_IV[4] | 0;
    Cl = T224_IV[5] | 0;
    Dh = T224_IV[6] | 0;
    Dl = T224_IV[7] | 0;
    Eh = T224_IV[8] | 0;
    El = T224_IV[9] | 0;
    Fh = T224_IV[10] | 0;
    Fl = T224_IV[11] | 0;
    Gh = T224_IV[12] | 0;
    Gl = T224_IV[13] | 0;
    Hh = T224_IV[14] | 0;
    Hl = T224_IV[15] | 0;
    constructor(){
        super(28);
    }
}
class _SHA512_256 extends SHA2_64B {
    Ah = T256_IV[0] | 0;
    Al = T256_IV[1] | 0;
    Bh = T256_IV[2] | 0;
    Bl = T256_IV[3] | 0;
    Ch = T256_IV[4] | 0;
    Cl = T256_IV[5] | 0;
    Dh = T256_IV[6] | 0;
    Dl = T256_IV[7] | 0;
    Eh = T256_IV[8] | 0;
    El = T256_IV[9] | 0;
    Fh = T256_IV[10] | 0;
    Fl = T256_IV[11] | 0;
    Gh = T256_IV[12] | 0;
    Gl = T256_IV[13] | 0;
    Hh = T256_IV[14] | 0;
    Hl = T256_IV[15] | 0;
    constructor(){
        super(32);
    }
}
const sha256 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA256(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["oidNist"])(0x01));
const sha224 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA224(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["oidNist"])(0x04));
const sha512 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA512(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["oidNist"])(0x03));
const sha384 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA384(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["oidNist"])(0x02));
const sha512_256 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA512_256(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["oidNist"])(0x06));
const sha512_224 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA512_224(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["oidNist"])(0x05)); //# sourceMappingURL=sha2.js.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/hashes/pbkdf2.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * PBKDF (RFC 2898). Can be used to create a key from password and salt.
 * @module
 */ __turbopack_context__.s({
    "pbkdf2": (()=>pbkdf2),
    "pbkdf2Async": (()=>pbkdf2Async)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$hmac$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/hashes/hmac.js [middleware-edge] (ecmascript)");
// prettier-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/hashes/utils.js [middleware-edge] (ecmascript)");
;
;
// Common start and end for sync/async functions
function pbkdf2Init(hash, _password, _salt, _opts) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ahash"])(hash);
    const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["checkOpts"])({
        dkLen: 32,
        asyncTick: 10
    }, _opts);
    const { c, dkLen, asyncTick } = opts;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["anumber"])(c, 'c');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["anumber"])(dkLen, 'dkLen');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["anumber"])(asyncTick, 'asyncTick');
    if (c < 1) throw new Error('iterations (c) must be >= 1');
    const password = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["kdfInputToBytes"])(_password, 'password');
    const salt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["kdfInputToBytes"])(_salt, 'salt');
    // DK = PBKDF2(PRF, Password, Salt, c, dkLen);
    const DK = new Uint8Array(dkLen);
    // U1 = PRF(Password, Salt + INT_32_BE(i))
    const PRF = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$hmac$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hmac"].create(hash, password);
    const PRFSalt = PRF._cloneInto().update(salt);
    return {
        c,
        dkLen,
        asyncTick,
        DK,
        PRF,
        PRFSalt
    };
}
function pbkdf2Output(PRF, PRFSalt, DK, prfW, u) {
    PRF.destroy();
    PRFSalt.destroy();
    if (prfW) prfW.destroy();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clean"])(u);
    return DK;
}
function pbkdf2(hash, password, salt, opts) {
    const { c, dkLen, DK, PRF, PRFSalt } = pbkdf2Init(hash, password, salt, opts);
    let prfW; // Working copy
    const arr = new Uint8Array(4);
    const view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createView"])(arr);
    const u = new Uint8Array(PRF.outputLen);
    // DK = T1 + T2 + ⋯ + Tdklen/hlen
    for(let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen){
        // Ti = F(Password, Salt, c, i)
        const Ti = DK.subarray(pos, pos + PRF.outputLen);
        view.setInt32(0, ti, false);
        // F(Password, Salt, c, i) = U1 ^ U2 ^ ⋯ ^ Uc
        // U1 = PRF(Password, Salt + INT_32_BE(i))
        (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
        Ti.set(u.subarray(0, Ti.length));
        for(let ui = 1; ui < c; ui++){
            // Uc = PRF(Password, Uc−1)
            PRF._cloneInto(prfW).update(u).digestInto(u);
            for(let i = 0; i < Ti.length; i++)Ti[i] ^= u[i];
        }
    }
    return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
}
async function pbkdf2Async(hash, password, salt, opts) {
    const { c, dkLen, asyncTick, DK, PRF, PRFSalt } = pbkdf2Init(hash, password, salt, opts);
    let prfW; // Working copy
    const arr = new Uint8Array(4);
    const view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createView"])(arr);
    const u = new Uint8Array(PRF.outputLen);
    // DK = T1 + T2 + ⋯ + Tdklen/hlen
    for(let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen){
        // Ti = F(Password, Salt, c, i)
        const Ti = DK.subarray(pos, pos + PRF.outputLen);
        view.setInt32(0, ti, false);
        // F(Password, Salt, c, i) = U1 ^ U2 ^ ⋯ ^ Uc
        // U1 = PRF(Password, Salt + INT_32_BE(i))
        (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
        Ti.set(u.subarray(0, Ti.length));
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["asyncLoop"])(c - 1, asyncTick, ()=>{
            // Uc = PRF(Password, Uc−1)
            PRF._cloneInto(prfW).update(u).digestInto(u);
            for(let i = 0; i < Ti.length; i++)Ti[i] ^= u[i];
        });
    }
    return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
} //# sourceMappingURL=pbkdf2.js.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/hashes/scrypt.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * RFC 7914 Scrypt KDF. Can be used to create a key from password and salt.
 * @module
 */ __turbopack_context__.s({
    "scrypt": (()=>scrypt),
    "scryptAsync": (()=>scryptAsync)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$pbkdf2$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/hashes/pbkdf2.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$sha2$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/hashes/sha2.js [middleware-edge] (ecmascript)");
// prettier-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/hashes/utils.js [middleware-edge] (ecmascript)");
;
;
;
// The main Scrypt loop: uses Salsa extensively.
// Six versions of the function were tried, this is the fastest one.
// prettier-ignore
function XorAndSalsa(prev, pi, input, ii, out, oi) {
    // Based on https://cr.yp.to/salsa20.html
    // Xor blocks
    let y00 = prev[pi++] ^ input[ii++], y01 = prev[pi++] ^ input[ii++];
    let y02 = prev[pi++] ^ input[ii++], y03 = prev[pi++] ^ input[ii++];
    let y04 = prev[pi++] ^ input[ii++], y05 = prev[pi++] ^ input[ii++];
    let y06 = prev[pi++] ^ input[ii++], y07 = prev[pi++] ^ input[ii++];
    let y08 = prev[pi++] ^ input[ii++], y09 = prev[pi++] ^ input[ii++];
    let y10 = prev[pi++] ^ input[ii++], y11 = prev[pi++] ^ input[ii++];
    let y12 = prev[pi++] ^ input[ii++], y13 = prev[pi++] ^ input[ii++];
    let y14 = prev[pi++] ^ input[ii++], y15 = prev[pi++] ^ input[ii++];
    // Save state to temporary variables (salsa)
    let x00 = y00, x01 = y01, x02 = y02, x03 = y03, x04 = y04, x05 = y05, x06 = y06, x07 = y07, x08 = y08, x09 = y09, x10 = y10, x11 = y11, x12 = y12, x13 = y13, x14 = y14, x15 = y15;
    // Main loop (salsa)
    for(let i = 0; i < 8; i += 2){
        x04 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x00 + x12 | 0, 7);
        x08 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x04 + x00 | 0, 9);
        x12 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x08 + x04 | 0, 13);
        x00 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x12 + x08 | 0, 18);
        x09 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x05 + x01 | 0, 7);
        x13 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x09 + x05 | 0, 9);
        x01 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x13 + x09 | 0, 13);
        x05 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x01 + x13 | 0, 18);
        x14 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x10 + x06 | 0, 7);
        x02 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x14 + x10 | 0, 9);
        x06 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x02 + x14 | 0, 13);
        x10 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x06 + x02 | 0, 18);
        x03 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x15 + x11 | 0, 7);
        x07 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x03 + x15 | 0, 9);
        x11 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x07 + x03 | 0, 13);
        x15 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x11 + x07 | 0, 18);
        x01 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x00 + x03 | 0, 7);
        x02 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x01 + x00 | 0, 9);
        x03 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x02 + x01 | 0, 13);
        x00 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x03 + x02 | 0, 18);
        x06 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x05 + x04 | 0, 7);
        x07 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x06 + x05 | 0, 9);
        x04 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x07 + x06 | 0, 13);
        x05 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x04 + x07 | 0, 18);
        x11 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x10 + x09 | 0, 7);
        x08 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x11 + x10 | 0, 9);
        x09 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x08 + x11 | 0, 13);
        x10 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x09 + x08 | 0, 18);
        x12 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x15 + x14 | 0, 7);
        x13 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x12 + x15 | 0, 9);
        x14 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x13 + x12 | 0, 13);
        x15 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x14 + x13 | 0, 18);
    }
    // Write output (salsa)
    out[oi++] = y00 + x00 | 0;
    out[oi++] = y01 + x01 | 0;
    out[oi++] = y02 + x02 | 0;
    out[oi++] = y03 + x03 | 0;
    out[oi++] = y04 + x04 | 0;
    out[oi++] = y05 + x05 | 0;
    out[oi++] = y06 + x06 | 0;
    out[oi++] = y07 + x07 | 0;
    out[oi++] = y08 + x08 | 0;
    out[oi++] = y09 + x09 | 0;
    out[oi++] = y10 + x10 | 0;
    out[oi++] = y11 + x11 | 0;
    out[oi++] = y12 + x12 | 0;
    out[oi++] = y13 + x13 | 0;
    out[oi++] = y14 + x14 | 0;
    out[oi++] = y15 + x15 | 0;
}
function BlockMix(input, ii, out, oi, r) {
    // The block B is r 128-byte chunks (which is equivalent of 2r 64-byte chunks)
    let head = oi + 0;
    let tail = oi + 16 * r;
    for(let i = 0; i < 16; i++)out[tail + i] = input[ii + (2 * r - 1) * 16 + i]; // X ← B[2r−1]
    for(let i = 0; i < r; i++, head += 16, ii += 16){
        // We write odd & even Yi at same time. Even: 0bXXXXX0 Odd:  0bXXXXX1
        XorAndSalsa(out, tail, input, ii, out, head); // head[i] = Salsa(blockIn[2*i] ^ tail[i-1])
        if (i > 0) tail += 16; // First iteration overwrites tmp value in tail
        XorAndSalsa(out, head, input, ii += 16, out, tail); // tail[i] = Salsa(blockIn[2*i+1] ^ head[i])
    }
}
// Common prologue and epilogue for sync/async functions
function scryptInit(password, salt, _opts) {
    // Maxmem - 1GB+1KB by default
    const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["checkOpts"])({
        dkLen: 32,
        asyncTick: 10,
        maxmem: 1024 ** 3 + 1024
    }, _opts);
    const { N, r, p, dkLen, asyncTick, maxmem, onProgress } = opts;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["anumber"])(N, 'N');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["anumber"])(r, 'r');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["anumber"])(p, 'p');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["anumber"])(dkLen, 'dkLen');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["anumber"])(asyncTick, 'asyncTick');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["anumber"])(maxmem, 'maxmem');
    if (onProgress !== undefined && typeof onProgress !== 'function') throw new Error('progressCb must be a function');
    const blockSize = 128 * r;
    const blockSize32 = blockSize / 4;
    // Max N is 2^32 (Integrify is 32-bit).
    // Real limit can be 2^22: some JS engines limit Uint8Array to 4GB.
    // Spec check `N >= 2^(blockSize / 8)` is not done for compat with popular libs,
    // which used incorrect r: 1, p: 8. Also, the check seems to be a spec error:
    // https://www.rfc-editor.org/errata_search.php?rfc=7914
    const pow32 = Math.pow(2, 32);
    if (N <= 1 || (N & N - 1) !== 0 || N > pow32) throw new Error('"N" expected a power of 2, and 2^1 <= N <= 2^32');
    if (p < 1 || p > (pow32 - 1) * 32 / blockSize) throw new Error('"p" expected integer 1..((2^32 - 1) * 32) / (128 * r)');
    if (dkLen < 1 || dkLen > (pow32 - 1) * 32) throw new Error('"dkLen" expected integer 1..(2^32 - 1) * 32');
    const memUsed = blockSize * (N + p);
    if (memUsed > maxmem) throw new Error('"maxmem" limit was hit, expected 128*r*(N+p) <= "maxmem"=' + maxmem);
    // [B0...Bp−1] ← PBKDF2HMAC-SHA256(Passphrase, Salt, 1, blockSize*ParallelizationFactor)
    // Since it has only one iteration there is no reason to use async variant
    const B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$pbkdf2$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["pbkdf2"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$sha2$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["sha256"], password, salt, {
        c: 1,
        dkLen: blockSize * p
    });
    const B32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["u32"])(B);
    // Re-used between parallel iterations. Array(iterations) of B
    const V = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["u32"])(new Uint8Array(blockSize * N));
    const tmp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["u32"])(new Uint8Array(blockSize));
    let blockMixCb = ()=>{};
    if (onProgress) {
        const totalBlockMix = 2 * N * p;
        // Invoke callback if progress changes from 10.01 to 10.02
        // Allows to draw smooth progress bar on up to 8K screen
        const callbackPer = Math.max(Math.floor(totalBlockMix / 10000), 1);
        let blockMixCnt = 0;
        blockMixCb = ()=>{
            blockMixCnt++;
            if (onProgress && (!(blockMixCnt % callbackPer) || blockMixCnt === totalBlockMix)) onProgress(blockMixCnt / totalBlockMix);
        };
    }
    return {
        N,
        r,
        p,
        dkLen,
        blockSize32,
        V,
        B32,
        B,
        tmp,
        blockMixCb,
        asyncTick
    };
}
function scryptOutput(password, dkLen, B, V, tmp) {
    const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$pbkdf2$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["pbkdf2"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$sha2$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["sha256"], password, B, {
        c: 1,
        dkLen
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clean"])(B, V, tmp);
    return res;
}
function scrypt(password, salt, opts) {
    const { N, r, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb } = scryptInit(password, salt, opts);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["swap32IfBE"])(B32);
    for(let pi = 0; pi < p; pi++){
        const Pi = blockSize32 * pi;
        for(let i = 0; i < blockSize32; i++)V[i] = B32[Pi + i]; // V[0] = B[i]
        for(let i = 0, pos = 0; i < N - 1; i++){
            BlockMix(V, pos, V, pos += blockSize32, r); // V[i] = BlockMix(V[i-1]);
            blockMixCb();
        }
        BlockMix(V, (N - 1) * blockSize32, B32, Pi, r); // Process last element
        blockMixCb();
        for(let i = 0; i < N; i++){
            // First u32 of the last 64-byte block (u32 is LE)
            // & (N - 1) is % N as N is a power of 2, N & (N - 1) = 0 is checked above; >>> 0 for unsigned, input fits in u32
            const j = (B32[Pi + blockSize32 - 16] & N - 1) >>> 0; // j = Integrify(X) % iterations
            for(let k = 0; k < blockSize32; k++)tmp[k] = B32[Pi + k] ^ V[j * blockSize32 + k]; // tmp = B ^ V[j]
            BlockMix(tmp, 0, B32, Pi, r); // B = BlockMix(B ^ V[j])
            blockMixCb();
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["swap32IfBE"])(B32);
    return scryptOutput(password, dkLen, B, V, tmp);
}
async function scryptAsync(password, salt, opts) {
    const { N, r, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb, asyncTick } = scryptInit(password, salt, opts);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["swap32IfBE"])(B32);
    for(let pi = 0; pi < p; pi++){
        const Pi = blockSize32 * pi;
        for(let i = 0; i < blockSize32; i++)V[i] = B32[Pi + i]; // V[0] = B[i]
        let pos = 0;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["asyncLoop"])(N - 1, asyncTick, ()=>{
            BlockMix(V, pos, V, pos += blockSize32, r); // V[i] = BlockMix(V[i-1]);
            blockMixCb();
        });
        BlockMix(V, (N - 1) * blockSize32, B32, Pi, r); // Process last element
        blockMixCb();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["asyncLoop"])(N, asyncTick, ()=>{
            // First u32 of the last 64-byte block (u32 is LE)
            // & (N - 1) is % N as N is a power of 2, N & (N - 1) = 0 is checked above; >>> 0 for unsigned, input fits in u32
            const j = (B32[Pi + blockSize32 - 16] & N - 1) >>> 0; // j = Integrify(X) % iterations
            for(let k = 0; k < blockSize32; k++)tmp[k] = B32[Pi + k] ^ V[j * blockSize32 + k]; // tmp = B ^ V[j]
            BlockMix(tmp, 0, B32, Pi, r); // B = BlockMix(B ^ V[j])
            blockMixCb();
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["swap32IfBE"])(B32);
    return scryptOutput(password, dkLen, B, V, tmp);
} //# sourceMappingURL=scrypt.js.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/hashes/sha3.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * SHA3 (keccak) hash function, based on a new "Sponge function" design.
 * Different from older hashes, the internal state is bigger than output size.
 *
 * Check out [FIPS-202](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf),
 * [Website](https://keccak.team/keccak.html),
 * [the differences between SHA-3 and Keccak](https://crypto.stackexchange.com/questions/15727/what-are-the-key-differences-between-the-draft-sha-3-standard-and-the-keccak-sub).
 *
 * Check out `sha3-addons` module for cSHAKE, k12, and others.
 * @module
 */ __turbopack_context__.s({
    "Keccak": (()=>Keccak),
    "keccakP": (()=>keccakP),
    "keccak_224": (()=>keccak_224),
    "keccak_256": (()=>keccak_256),
    "keccak_384": (()=>keccak_384),
    "keccak_512": (()=>keccak_512),
    "sha3_224": (()=>sha3_224),
    "sha3_256": (()=>sha3_256),
    "sha3_384": (()=>sha3_384),
    "sha3_512": (()=>sha3_512),
    "shake128": (()=>shake128),
    "shake128_32": (()=>shake128_32),
    "shake256": (()=>shake256),
    "shake256_64": (()=>shake256_64)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/hashes/_u64.js [middleware-edge] (ecmascript)");
// prettier-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/hashes/utils.js [middleware-edge] (ecmascript)");
;
;
// No __PURE__ annotations in sha3 header:
// EVERYTHING is in fact used on every export.
// Various per round constants calculations
const _0n = BigInt(0);
const _1n = BigInt(1);
const _2n = BigInt(2);
const _7n = BigInt(7);
const _256n = BigInt(256);
const _0x71n = BigInt(0x71);
const SHA3_PI = [];
const SHA3_ROTL = [];
const _SHA3_IOTA = []; // no pure annotation: var is always used
for(let round = 0, R = _1n, x = 1, y = 0; round < 24; round++){
    // Pi
    [x, y] = [
        y,
        (2 * x + 3 * y) % 5
    ];
    SHA3_PI.push(2 * (5 * y + x));
    // Rotational
    SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
    // Iota
    let t = _0n;
    for(let j = 0; j < 7; j++){
        R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
        if (R & _2n) t ^= _1n << (_1n << BigInt(j)) - _1n;
    }
    _SHA3_IOTA.push(t);
}
const IOTAS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["split"])(_SHA3_IOTA, true);
const SHA3_IOTA_H = IOTAS[0];
const SHA3_IOTA_L = IOTAS[1];
// Left rotation (without 0, 32, 64)
const rotlH = (h, l, s)=>s > 32 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotlBH"])(h, l, s) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotlSH"])(h, l, s);
const rotlL = (h, l, s)=>s > 32 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotlBL"])(h, l, s) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotlSL"])(h, l, s);
function keccakP(s, rounds = 24) {
    const B = new Uint32Array(5 * 2);
    // NOTE: all indices are x2 since we store state as u32 instead of u64 (bigints to slow in js)
    for(let round = 24 - rounds; round < 24; round++){
        // Theta θ
        for(let x = 0; x < 10; x++)B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
        for(let x = 0; x < 10; x += 2){
            const idx1 = (x + 8) % 10;
            const idx0 = (x + 2) % 10;
            const B0 = B[idx0];
            const B1 = B[idx0 + 1];
            const Th = rotlH(B0, B1, 1) ^ B[idx1];
            const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
            for(let y = 0; y < 50; y += 10){
                s[x + y] ^= Th;
                s[x + y + 1] ^= Tl;
            }
        }
        // Rho (ρ) and Pi (π)
        let curH = s[2];
        let curL = s[3];
        for(let t = 0; t < 24; t++){
            const shift = SHA3_ROTL[t];
            const Th = rotlH(curH, curL, shift);
            const Tl = rotlL(curH, curL, shift);
            const PI = SHA3_PI[t];
            curH = s[PI];
            curL = s[PI + 1];
            s[PI] = Th;
            s[PI + 1] = Tl;
        }
        // Chi (χ)
        for(let y = 0; y < 50; y += 10){
            for(let x = 0; x < 10; x++)B[x] = s[y + x];
            for(let x = 0; x < 10; x++)s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
        }
        // Iota (ι)
        s[0] ^= SHA3_IOTA_H[round];
        s[1] ^= SHA3_IOTA_L[round];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clean"])(B);
}
class Keccak {
    state;
    pos = 0;
    posOut = 0;
    finished = false;
    state32;
    destroyed = false;
    blockLen;
    suffix;
    outputLen;
    enableXOF = false;
    rounds;
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24){
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        // Can be passed from user as dkLen
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["anumber"])(outputLen, 'outputLen');
        // 1600 = 5x5 matrix of 64bit.  1600 bits === 200 bytes
        // 0 < blockLen < 200
        if (!(0 < blockLen && blockLen < 200)) throw new Error('only keccak-f1600 function is supported');
        this.state = new Uint8Array(200);
        this.state32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["u32"])(this.state);
    }
    clone() {
        return this._cloneInto();
    }
    keccak() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["swap32IfBE"])(this.state32);
        keccakP(this.state32, this.rounds);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["swap32IfBE"])(this.state32);
        this.posOut = 0;
        this.pos = 0;
    }
    update(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["abytes"])(data);
        const { blockLen, state } = this;
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            for(let i = 0; i < take; i++)state[this.pos++] ^= data[pos++];
            if (this.pos === blockLen) this.keccak();
        }
        return this;
    }
    finish() {
        if (this.finished) return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        // Do the padding
        state[pos] ^= suffix;
        if ((suffix & 0x80) !== 0 && pos === blockLen - 1) this.keccak();
        state[blockLen - 1] ^= 0x80;
        this.keccak();
    }
    writeInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["aexists"])(this, false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["abytes"])(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for(let pos = 0, len = out.length; pos < len;){
            if (this.posOut >= blockLen) this.keccak();
            const take = Math.min(blockLen - this.posOut, len - pos);
            out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
            this.posOut += take;
            pos += take;
        }
        return out;
    }
    xofInto(out) {
        // Sha3/Keccak usage with XOF is probably mistake, only SHAKE instances can do XOF
        if (!this.enableXOF) throw new Error('XOF is not possible for this instance');
        return this.writeInto(out);
    }
    xof(bytes) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["anumber"])(bytes);
        return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["aoutput"])(out, this);
        if (this.finished) throw new Error('digest() was already called');
        this.writeInto(out);
        this.destroy();
        return out;
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
        this.destroyed = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clean"])(this.state);
    }
    _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to ||= new Keccak(blockLen, suffix, outputLen, enableXOF, rounds);
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        // Suffix can change in cSHAKE
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
    }
}
const genKeccak = (suffix, blockLen, outputLen, info = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createHasher"])(()=>new Keccak(blockLen, suffix, outputLen), info);
const sha3_224 = /* @__PURE__ */ genKeccak(0x06, 144, 28, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["oidNist"])(0x07));
const sha3_256 = /* @__PURE__ */ genKeccak(0x06, 136, 32, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["oidNist"])(0x08));
const sha3_384 = /* @__PURE__ */ genKeccak(0x06, 104, 48, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["oidNist"])(0x09));
const sha3_512 = /* @__PURE__ */ genKeccak(0x06, 72, 64, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["oidNist"])(0x0a));
const keccak_224 = /* @__PURE__ */ genKeccak(0x01, 144, 28);
const keccak_256 = /* @__PURE__ */ genKeccak(0x01, 136, 32);
const keccak_384 = /* @__PURE__ */ genKeccak(0x01, 104, 48);
const keccak_512 = /* @__PURE__ */ genKeccak(0x01, 72, 64);
const genShake = (suffix, blockLen, outputLen, info = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createHasher"])((opts = {})=>new Keccak(blockLen, suffix, opts.dkLen === undefined ? outputLen : opts.dkLen, true), info);
const shake128 = /* @__PURE__ */ genShake(0x1f, 168, 16, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["oidNist"])(0x0b));
const shake256 = /* @__PURE__ */ genShake(0x1f, 136, 32, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["oidNist"])(0x0c));
const shake128_32 = /* @__PURE__ */ genShake(0x1f, 168, 32, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["oidNist"])(0x0b));
const shake256_64 = /* @__PURE__ */ genShake(0x1f, 136, 64, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["oidNist"])(0x0c)); //# sourceMappingURL=sha3.js.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/ciphers/utils.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Utilities for hex, bytes, CSPRNG.
 * @module
 */ /*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */ /** Checks if something is Uint8Array. Be careful: nodejs Buffer will return true. */ __turbopack_context__.s({
    "abool": (()=>abool),
    "abytes": (()=>abytes),
    "aexists": (()=>aexists),
    "anumber": (()=>anumber),
    "aoutput": (()=>aoutput),
    "bytesToHex": (()=>bytesToHex),
    "bytesToNumberBE": (()=>bytesToNumberBE),
    "bytesToUtf8": (()=>bytesToUtf8),
    "checkOpts": (()=>checkOpts),
    "clean": (()=>clean),
    "complexOverlapBytes": (()=>complexOverlapBytes),
    "concatBytes": (()=>concatBytes),
    "copyBytes": (()=>copyBytes),
    "createView": (()=>createView),
    "equalBytes": (()=>equalBytes),
    "getOutput": (()=>getOutput),
    "hexToBytes": (()=>hexToBytes),
    "hexToNumber": (()=>hexToNumber),
    "isAligned32": (()=>isAligned32),
    "isBytes": (()=>isBytes),
    "isLE": (()=>isLE),
    "managedNonce": (()=>managedNonce),
    "numberToBytesBE": (()=>numberToBytesBE),
    "overlapBytes": (()=>overlapBytes),
    "randomBytes": (()=>randomBytes),
    "u32": (()=>u32),
    "u64Lengths": (()=>u64Lengths),
    "u8": (()=>u8),
    "utf8ToBytes": (()=>utf8ToBytes),
    "wrapCipher": (()=>wrapCipher)
});
function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array';
}
function abool(b) {
    if (typeof b !== 'boolean') throw new Error(`boolean expected, not ${b}`);
}
function anumber(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error('positive integer expected, got ' + n);
}
function abytes(value, length, title = '') {
    const bytes = isBytes(value);
    const len = value?.length;
    const needsLen = length !== undefined;
    if (!bytes || needsLen && len !== length) {
        const prefix = title && `"${title}" `;
        const ofLen = needsLen ? ` of length ${length}` : '';
        const got = bytes ? `length=${len}` : `type=${typeof value}`;
        throw new Error(prefix + 'expected Uint8Array' + ofLen + ', got ' + got);
    }
    return value;
}
function aexists(instance, checkFinished = true) {
    if (instance.destroyed) throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
}
function aoutput(out, instance) {
    abytes(out, undefined, 'output');
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error('digestInto() expects output buffer of length at least ' + min);
    }
}
function u8(arr) {
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
}
function u32(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function clean(...arrays) {
    for(let i = 0; i < arrays.length; i++){
        arrays[i].fill(0);
    }
}
function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
const isLE = /* @__PURE__ */ (()=>new Uint8Array(new Uint32Array([
        0x11223344
    ]).buffer)[0] === 0x44)();
// Built-in hex conversion https://caniuse.com/mdn-javascript_builtins_uint8array_fromhex
const hasHexBuiltin = /* @__PURE__ */ (()=>// @ts-ignore
    typeof Uint8Array.from([]).toHex === 'function' && typeof Uint8Array.fromHex === 'function')();
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, '0'));
function bytesToHex(bytes) {
    abytes(bytes);
    // @ts-ignore
    if (hasHexBuiltin) return bytes.toHex();
    // pre-caching improves the speed 6x
    let hex = '';
    for(let i = 0; i < bytes.length; i++){
        hex += hexes[bytes[i]];
    }
    return hex;
}
// We use optimized technique to convert hex string to byte array
const asciis = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9) return ch - asciis._0; // '2' => 50-48
    if (ch >= asciis.A && ch <= asciis.F) return ch - (asciis.A - 10); // 'B' => 66-(65-10)
    if (ch >= asciis.a && ch <= asciis.f) return ch - (asciis.a - 10); // 'b' => 98-(97-10)
    return;
}
function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    // @ts-ignore
    if (hasHexBuiltin) return Uint8Array.fromHex(hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2) throw new Error('hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for(let ai = 0, hi = 0; ai < al; ai++, hi += 2){
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2; // multiply first octet, e.g. 'a3' => 10*16+3 => 160 + 3 => 163
    }
    return array;
}
function hexToNumber(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    return BigInt(hex === '' ? '0' : '0x' + hex); // Big Endian
}
function bytesToNumberBE(bytes) {
    return hexToNumber(bytesToHex(bytes));
}
function numberToBytesBE(n, len) {
    return hexToBytes(n.toString(16).padStart(len * 2, '0'));
}
function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new Error('string expected');
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
function bytesToUtf8(bytes) {
    return new TextDecoder().decode(bytes);
}
function overlapBytes(a, b) {
    return a.buffer === b.buffer && // best we can do, may fail with an obscure Proxy
    a.byteOffset < b.byteOffset + b.byteLength && // a starts before b end
    b.byteOffset < a.byteOffset + a.byteLength // b starts before a end
    ;
}
function complexOverlapBytes(input, output) {
    // This is very cursed. It works somehow, but I'm completely unsure,
    // reasoning about overlapping aligned windows is very hard.
    if (overlapBytes(input, output) && input.byteOffset < output.byteOffset) throw new Error('complex overlap of input and output is not supported');
}
function concatBytes(...arrays) {
    let sum = 0;
    for(let i = 0; i < arrays.length; i++){
        const a = arrays[i];
        abytes(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
function checkOpts(defaults, opts) {
    if (opts == null || typeof opts !== 'object') throw new Error('options must be defined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
function equalBytes(a, b) {
    if (a.length !== b.length) return false;
    let diff = 0;
    for(let i = 0; i < a.length; i++)diff |= a[i] ^ b[i];
    return diff === 0;
}
const wrapCipher = (params, constructor)=>{
    function wrappedCipher(key, ...args) {
        // Validate key
        abytes(key, undefined, 'key');
        // Big-Endian hardware is rare. Just in case someone still decides to run ciphers:
        if (!isLE) throw new Error('Non little-endian hardware is not yet supported');
        // Validate nonce if nonceLength is present
        if (params.nonceLength !== undefined) {
            const nonce = args[0];
            abytes(nonce, params.varSizeNonce ? undefined : params.nonceLength, 'nonce');
        }
        // Validate AAD if tagLength present
        const tagl = params.tagLength;
        if (tagl && args[1] !== undefined) abytes(args[1], undefined, 'AAD');
        const cipher = constructor(key, ...args);
        const checkOutput = (fnLength, output)=>{
            if (output !== undefined) {
                if (fnLength !== 2) throw new Error('cipher output not supported');
                abytes(output, undefined, 'output');
            }
        };
        // Create wrapped cipher with validation and single-use encryption
        let called = false;
        const wrCipher = {
            encrypt (data, output) {
                if (called) throw new Error('cannot encrypt() twice with same key + nonce');
                called = true;
                abytes(data);
                checkOutput(cipher.encrypt.length, output);
                return cipher.encrypt(data, output);
            },
            decrypt (data, output) {
                abytes(data);
                if (tagl && data.length < tagl) throw new Error('"ciphertext" expected length bigger than tagLength=' + tagl);
                checkOutput(cipher.decrypt.length, output);
                return cipher.decrypt(data, output);
            }
        };
        return wrCipher;
    }
    Object.assign(wrappedCipher, params);
    return wrappedCipher;
};
function getOutput(expectedLength, out, onlyAligned = true) {
    if (out === undefined) return new Uint8Array(expectedLength);
    if (out.length !== expectedLength) throw new Error('"output" expected Uint8Array of length ' + expectedLength + ', got: ' + out.length);
    if (onlyAligned && !isAligned32(out)) throw new Error('invalid output, must be aligned');
    return out;
}
function u64Lengths(dataLength, aadLength, isLE) {
    abool(isLE);
    const num = new Uint8Array(16);
    const view = createView(num);
    view.setBigUint64(0, BigInt(aadLength), isLE);
    view.setBigUint64(8, BigInt(dataLength), isLE);
    return num;
}
function isAligned32(bytes) {
    return bytes.byteOffset % 4 === 0;
}
function copyBytes(bytes) {
    return Uint8Array.from(bytes);
}
function randomBytes(bytesLength = 32) {
    const cr = typeof globalThis === 'object' ? globalThis.crypto : null;
    if (typeof cr?.getRandomValues !== 'function') throw new Error('crypto.getRandomValues must be defined');
    return cr.getRandomValues(new Uint8Array(bytesLength));
}
function managedNonce(fn, randomBytes_ = randomBytes) {
    const { nonceLength } = fn;
    anumber(nonceLength);
    const addNonce = (nonce, ciphertext)=>{
        const out = concatBytes(nonce, ciphertext);
        ciphertext.fill(0);
        return out;
    };
    // NOTE: we cannot support DST here, it would be mistake:
    // - we don't know how much dst length cipher requires
    // - nonce may unalign dst and break everything
    // - we create new u8a anyway (concatBytes)
    // - previously we passed all args to cipher, but that was mistake!
    return (key, ...args)=>({
            encrypt (plaintext) {
                abytes(plaintext);
                const nonce = randomBytes_(nonceLength);
                const encrypted = fn(key, nonce, ...args).encrypt(plaintext);
                // @ts-ignore
                if (encrypted instanceof Promise) return encrypted.then((ct)=>addNonce(nonce, ct));
                return addNonce(nonce, encrypted);
            },
            decrypt (ciphertext) {
                abytes(ciphertext);
                const nonce = ciphertext.subarray(0, nonceLength);
                const decrypted = ciphertext.subarray(nonceLength);
                return fn(key, nonce, ...args).decrypt(decrypted);
            }
        });
} //# sourceMappingURL=utils.js.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/ciphers/_arx.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Basic utils for ARX (add-rotate-xor) salsa and chacha ciphers.

RFC8439 requires multi-step cipher stream, where
authKey starts with counter: 0, actual msg with counter: 1.

For this, we need a way to re-use nonce / counter:

    const counter = new Uint8Array(4);
    chacha(..., counter, ...); // counter is now 1
    chacha(..., counter, ...); // counter is now 2

This is complicated:

- 32-bit counters are enough, no need for 64-bit: max ArrayBuffer size in JS is 4GB
- Original papers don't allow mutating counters
- Counter overflow is undefined [^1]
- Idea A: allow providing (nonce | counter) instead of just nonce, re-use it
- Caveat: Cannot be re-used through all cases:
- * chacha has (counter | nonce)
- * xchacha has (nonce16 | counter | nonce16)
- Idea B: separate nonce / counter and provide separate API for counter re-use
- Caveat: there are different counter sizes depending on an algorithm.
- salsa & chacha also differ in structures of key & sigma:
  salsa20:      s[0] | k(4) | s[1] | nonce(2) | cnt(2) | s[2] | k(4) | s[3]
  chacha:       s(4) | k(8) | cnt(1) | nonce(3)
  chacha20orig: s(4) | k(8) | cnt(2) | nonce(2)
- Idea C: helper method such as `setSalsaState(key, nonce, sigma, data)`
- Caveat: we can't re-use counter array

xchacha [^2] uses the subkey and remaining 8 byte nonce with ChaCha20 as normal
(prefixed by 4 NUL bytes, since [RFC8439] specifies a 12-byte nonce).

[^1]: https://mailarchive.ietf.org/arch/msg/cfrg/gsOnTJzcbgG6OqD8Sc0GO5aR_tU/
[^2]: https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-xchacha#appendix-A.2

 * @module
 */ __turbopack_context__.s({
    "_XorStreamPRG": (()=>_XorStreamPRG),
    "createCipher": (()=>createCipher),
    "createPRG": (()=>createPRG),
    "rotl": (()=>rotl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/ciphers/utils.js [middleware-edge] (ecmascript)");
;
// Replaces `TextEncoder`, which is not available in all environments
const encodeStr = (str)=>Uint8Array.from(str.split(''), (c)=>c.charCodeAt(0));
const sigma16 = encodeStr('expand 16-byte k');
const sigma32 = encodeStr('expand 32-byte k');
const sigma16_32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["u32"])(sigma16);
const sigma32_32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["u32"])(sigma32);
function rotl(a, b) {
    return a << b | a >>> 32 - b;
}
// Is byte array aligned to 4 byte offset (u32)?
function isAligned32(b) {
    return b.byteOffset % 4 === 0;
}
// Salsa and Chacha block length is always 512-bit
const BLOCK_LEN = 64;
const BLOCK_LEN32 = 16;
// new Uint32Array([2**32])   // => Uint32Array(1) [ 0 ]
// new Uint32Array([2**32-1]) // => Uint32Array(1) [ 4294967295 ]
const MAX_COUNTER = 2 ** 32 - 1;
const U32_EMPTY = Uint32Array.of();
function runCipher(core, sigma, key, nonce, data, output, counter, rounds) {
    const len = data.length;
    const block = new Uint8Array(BLOCK_LEN);
    const b32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["u32"])(block);
    // Make sure that buffers aligned to 4 bytes
    const isAligned = isAligned32(data) && isAligned32(output);
    const d32 = isAligned ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["u32"])(data) : U32_EMPTY;
    const o32 = isAligned ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["u32"])(output) : U32_EMPTY;
    for(let pos = 0; pos < len; counter++){
        core(sigma, key, nonce, b32, counter, rounds);
        if (counter >= MAX_COUNTER) throw new Error('arx: counter overflow');
        const take = Math.min(BLOCK_LEN, len - pos);
        // aligned to 4 bytes
        if (isAligned && take === BLOCK_LEN) {
            const pos32 = pos / 4;
            if (pos % 4 !== 0) throw new Error('arx: invalid block position');
            for(let j = 0, posj; j < BLOCK_LEN32; j++){
                posj = pos32 + j;
                o32[posj] = d32[posj] ^ b32[j];
            }
            pos += BLOCK_LEN;
            continue;
        }
        for(let j = 0, posj; j < take; j++){
            posj = pos + j;
            output[posj] = data[posj] ^ block[j];
        }
        pos += take;
    }
}
function createCipher(core, opts) {
    const { allowShortKeys, extendNonceFn, counterLength, counterRight, rounds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["checkOpts"])({
        allowShortKeys: false,
        counterLength: 8,
        counterRight: false,
        rounds: 20
    }, opts);
    if (typeof core !== 'function') throw new Error('core must be a function');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["anumber"])(counterLength);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["anumber"])(rounds);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["abool"])(counterRight);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["abool"])(allowShortKeys);
    return (key, nonce, data, output, counter = 0)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["abytes"])(key, undefined, 'key');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["abytes"])(nonce, undefined, 'nonce');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["abytes"])(data, undefined, 'data');
        const len = data.length;
        if (output === undefined) output = new Uint8Array(len);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["abytes"])(output, undefined, 'output');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["anumber"])(counter);
        if (counter < 0 || counter >= MAX_COUNTER) throw new Error('arx: counter overflow');
        if (output.length < len) throw new Error(`arx: output (${output.length}) is shorter than data (${len})`);
        const toClean = [];
        // Key & sigma
        // key=16 -> sigma16, k=key|key
        // key=32 -> sigma32, k=key
        let l = key.length;
        let k;
        let sigma;
        if (l === 32) {
            toClean.push(k = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["copyBytes"])(key));
            sigma = sigma32_32;
        } else if (l === 16 && allowShortKeys) {
            k = new Uint8Array(32);
            k.set(key);
            k.set(key, 16);
            sigma = sigma16_32;
            toClean.push(k);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["abytes"])(key, 32, 'arx key');
            throw new Error('invalid key size');
        // throw new Error(`"arx key" expected Uint8Array of length 32, got length=${l}`);
        }
        // Nonce
        // salsa20:      8   (8-byte counter)
        // chacha20orig: 8   (8-byte counter)
        // chacha20:     12  (4-byte counter)
        // xsalsa20:     24  (16 -> hsalsa,  8 -> old nonce)
        // xchacha20:    24  (16 -> hchacha, 8 -> old nonce)
        // Align nonce to 4 bytes
        if (!isAligned32(nonce)) toClean.push(nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["copyBytes"])(nonce));
        const k32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["u32"])(k);
        // hsalsa & hchacha: handle extended nonce
        if (extendNonceFn) {
            if (nonce.length !== 24) throw new Error(`arx: extended nonce must be 24 bytes`);
            extendNonceFn(sigma, k32, (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["u32"])(nonce.subarray(0, 16)), k32);
            nonce = nonce.subarray(16);
        }
        // Handle nonce counter
        const nonceNcLen = 16 - counterLength;
        if (nonceNcLen !== nonce.length) throw new Error(`arx: nonce must be ${nonceNcLen} or 16 bytes`);
        // Pad counter when nonce is 64 bit
        if (nonceNcLen !== 12) {
            const nc = new Uint8Array(12);
            nc.set(nonce, counterRight ? 0 : 12 - nonce.length);
            nonce = nc;
            toClean.push(nonce);
        }
        const n32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["u32"])(nonce);
        runCipher(core, sigma, k32, n32, data, output, counter, rounds);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clean"])(...toClean);
        return output;
    };
}
class _XorStreamPRG {
    blockLen;
    keyLen;
    nonceLen;
    state;
    buf;
    key;
    nonce;
    pos;
    ctr;
    cipher;
    constructor(cipher, blockLen, keyLen, nonceLen, seed){
        this.cipher = cipher;
        this.blockLen = blockLen;
        this.keyLen = keyLen;
        this.nonceLen = nonceLen;
        this.state = new Uint8Array(this.keyLen + this.nonceLen);
        this.reseed(seed);
        this.ctr = 0;
        this.pos = this.blockLen;
        this.buf = new Uint8Array(this.blockLen);
        this.key = this.state.subarray(0, this.keyLen);
        this.nonce = this.state.subarray(this.keyLen);
    }
    reseed(seed) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["abytes"])(seed);
        if (!seed || seed.length === 0) throw new Error('entropy required');
        for(let i = 0; i < seed.length; i++)this.state[i % this.state.length] ^= seed[i];
        this.ctr = 0;
        this.pos = this.blockLen;
    }
    addEntropy(seed) {
        this.state.set(this.randomBytes(this.state.length));
        this.reseed(seed);
    }
    randomBytes(len) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["anumber"])(len);
        if (len === 0) return new Uint8Array(0);
        const out = new Uint8Array(len);
        let outPos = 0;
        // Leftovers
        if (this.pos < this.blockLen) {
            const take = Math.min(len, this.blockLen - this.pos);
            out.set(this.buf.subarray(this.pos, this.pos + take), 0);
            this.pos += take;
            outPos += take;
            if (outPos === len) return out; // fast path
        }
        // Full blocks directly to out
        const blocks = Math.floor((len - outPos) / this.blockLen);
        if (blocks > 0) {
            const blockBytes = blocks * this.blockLen;
            const b = out.subarray(outPos, outPos + blockBytes);
            this.cipher(this.key, this.nonce, b, b, this.ctr);
            this.ctr += blocks;
            outPos += blockBytes;
        }
        // Save leftovers
        const left = len - outPos;
        if (left > 0) {
            this.buf.fill(0);
            // NOTE: cipher will handle overflow
            this.cipher(this.key, this.nonce, this.buf, this.buf, this.ctr++);
            out.set(this.buf.subarray(0, left), outPos);
            this.pos = left;
        }
        return out;
    }
    clone() {
        return new _XorStreamPRG(this.cipher, this.blockLen, this.keyLen, this.nonceLen, this.randomBytes(this.state.length));
    }
    clean() {
        this.pos = 0;
        this.ctr = 0;
        this.buf.fill(0);
        this.state.fill(0);
    }
}
const createPRG = (cipher, blockLen, keyLen, nonceLen)=>{
    return (seed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["randomBytes"])(32))=>new _XorStreamPRG(cipher, blockLen, keyLen, nonceLen, seed);
}; //# sourceMappingURL=_arx.js.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/ciphers/_poly1305.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Poly1305 ([PDF](https://cr.yp.to/mac/poly1305-20050329.pdf),
 * [wiki](https://en.wikipedia.org/wiki/Poly1305))
 * is a fast and parallel secret-key message-authentication code suitable for
 * a wide variety of applications. It was standardized in
 * [RFC 8439](https://www.rfc-editor.org/rfc/rfc8439) and is now used in TLS 1.3.
 *
 * Polynomial MACs are not perfect for every situation:
 * they lack Random Key Robustness: the MAC can be forged, and can't be used in PAKE schemes.
 * See [invisible salamanders attack](https://keymaterial.net/2020/09/07/invisible-salamanders-in-aes-gcm-siv/).
 * To combat invisible salamanders, `hash(key)` can be included in ciphertext,
 * however, this would violate ciphertext indistinguishability:
 * an attacker would know which key was used - so `HKDF(key, i)`
 * could be used instead.
 *
 * Check out [original website](https://cr.yp.to/mac.html).
 * Based on Public Domain [poly1305-donna](https://github.com/floodyberry/poly1305-donna).
 * @module
 */ // prettier-ignore
__turbopack_context__.s({
    "Poly1305": (()=>Poly1305),
    "poly1305": (()=>poly1305),
    "wrapConstructorWithKey": (()=>wrapConstructorWithKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/ciphers/utils.js [middleware-edge] (ecmascript)");
;
function u8to16(a, i) {
    return a[i++] & 0xff | (a[i++] & 0xff) << 8;
}
function bytesToNumberLE(bytes) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hexToNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["bytesToHex"])(Uint8Array.from(bytes).reverse()));
}
/** Small version of `poly1305` without loop unrolling. Unused, provided for auditability. */ function poly1305_small(msg, key) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["abytes"])(msg);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["abytes"])(key, 32, 'key');
    const POW_2_130_5 = BigInt(2) ** BigInt(130) - BigInt(5); // 2^130-5
    const POW_2_128_1 = BigInt(2) ** BigInt(128) - BigInt(1); // 2^128-1
    const CLAMP_R = BigInt('0x0ffffffc0ffffffc0ffffffc0fffffff');
    const r = bytesToNumberLE(key.subarray(0, 16)) & CLAMP_R;
    const s = bytesToNumberLE(key.subarray(16));
    // Process by 16 byte chunks
    let acc = BigInt(0);
    for(let i = 0; i < msg.length; i += 16){
        const m = msg.subarray(i, i + 16);
        const n = bytesToNumberLE(m) | BigInt(1) << BigInt(8 * m.length);
        acc = (acc + n) * r % POW_2_130_5;
    }
    const res = acc + s & POW_2_128_1;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["numberToBytesBE"])(res, 16).reverse(); // LE
}
// Can be used to replace `computeTag` in chacha.ts. Unused, provided for auditability.
// @ts-expect-error
function poly1305_computeTag_small(authKey, lengths, ciphertext, AAD) {
    const res = [];
    const updatePadded2 = (msg)=>{
        res.push(msg);
        const leftover = msg.length % 16;
        if (leftover) res.push(new Uint8Array(16).slice(leftover));
    };
    if (AAD) updatePadded2(AAD);
    updatePadded2(ciphertext);
    res.push(lengths);
    return poly1305_small((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["concatBytes"])(...res), authKey);
}
class Poly1305 {
    blockLen = 16;
    outputLen = 16;
    buffer = new Uint8Array(16);
    r = new Uint16Array(10);
    h = new Uint16Array(10);
    pad = new Uint16Array(8);
    pos = 0;
    finished = false;
    // Can be speed-up using BigUint64Array, at the cost of complexity
    constructor(key){
        key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["copyBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["abytes"])(key, 32, 'key'));
        const t0 = u8to16(key, 0);
        const t1 = u8to16(key, 2);
        const t2 = u8to16(key, 4);
        const t3 = u8to16(key, 6);
        const t4 = u8to16(key, 8);
        const t5 = u8to16(key, 10);
        const t6 = u8to16(key, 12);
        const t7 = u8to16(key, 14);
        // https://github.com/floodyberry/poly1305-donna/blob/e6ad6e091d30d7f4ec2d4f978be1fcfcbce72781/poly1305-donna-16.h#L47
        this.r[0] = t0 & 0x1fff;
        this.r[1] = (t0 >>> 13 | t1 << 3) & 0x1fff;
        this.r[2] = (t1 >>> 10 | t2 << 6) & 0x1f03;
        this.r[3] = (t2 >>> 7 | t3 << 9) & 0x1fff;
        this.r[4] = (t3 >>> 4 | t4 << 12) & 0x00ff;
        this.r[5] = t4 >>> 1 & 0x1ffe;
        this.r[6] = (t4 >>> 14 | t5 << 2) & 0x1fff;
        this.r[7] = (t5 >>> 11 | t6 << 5) & 0x1f81;
        this.r[8] = (t6 >>> 8 | t7 << 8) & 0x1fff;
        this.r[9] = t7 >>> 5 & 0x007f;
        for(let i = 0; i < 8; i++)this.pad[i] = u8to16(key, 16 + 2 * i);
    }
    process(data, offset, isLast = false) {
        const hibit = isLast ? 0 : 1 << 11;
        const { h, r } = this;
        const r0 = r[0];
        const r1 = r[1];
        const r2 = r[2];
        const r3 = r[3];
        const r4 = r[4];
        const r5 = r[5];
        const r6 = r[6];
        const r7 = r[7];
        const r8 = r[8];
        const r9 = r[9];
        const t0 = u8to16(data, offset + 0);
        const t1 = u8to16(data, offset + 2);
        const t2 = u8to16(data, offset + 4);
        const t3 = u8to16(data, offset + 6);
        const t4 = u8to16(data, offset + 8);
        const t5 = u8to16(data, offset + 10);
        const t6 = u8to16(data, offset + 12);
        const t7 = u8to16(data, offset + 14);
        let h0 = h[0] + (t0 & 0x1fff);
        let h1 = h[1] + ((t0 >>> 13 | t1 << 3) & 0x1fff);
        let h2 = h[2] + ((t1 >>> 10 | t2 << 6) & 0x1fff);
        let h3 = h[3] + ((t2 >>> 7 | t3 << 9) & 0x1fff);
        let h4 = h[4] + ((t3 >>> 4 | t4 << 12) & 0x1fff);
        let h5 = h[5] + (t4 >>> 1 & 0x1fff);
        let h6 = h[6] + ((t4 >>> 14 | t5 << 2) & 0x1fff);
        let h7 = h[7] + ((t5 >>> 11 | t6 << 5) & 0x1fff);
        let h8 = h[8] + ((t6 >>> 8 | t7 << 8) & 0x1fff);
        let h9 = h[9] + (t7 >>> 5 | hibit);
        let c = 0;
        let d0 = c + h0 * r0 + h1 * (5 * r9) + h2 * (5 * r8) + h3 * (5 * r7) + h4 * (5 * r6);
        c = d0 >>> 13;
        d0 &= 0x1fff;
        d0 += h5 * (5 * r5) + h6 * (5 * r4) + h7 * (5 * r3) + h8 * (5 * r2) + h9 * (5 * r1);
        c += d0 >>> 13;
        d0 &= 0x1fff;
        let d1 = c + h0 * r1 + h1 * r0 + h2 * (5 * r9) + h3 * (5 * r8) + h4 * (5 * r7);
        c = d1 >>> 13;
        d1 &= 0x1fff;
        d1 += h5 * (5 * r6) + h6 * (5 * r5) + h7 * (5 * r4) + h8 * (5 * r3) + h9 * (5 * r2);
        c += d1 >>> 13;
        d1 &= 0x1fff;
        let d2 = c + h0 * r2 + h1 * r1 + h2 * r0 + h3 * (5 * r9) + h4 * (5 * r8);
        c = d2 >>> 13;
        d2 &= 0x1fff;
        d2 += h5 * (5 * r7) + h6 * (5 * r6) + h7 * (5 * r5) + h8 * (5 * r4) + h9 * (5 * r3);
        c += d2 >>> 13;
        d2 &= 0x1fff;
        let d3 = c + h0 * r3 + h1 * r2 + h2 * r1 + h3 * r0 + h4 * (5 * r9);
        c = d3 >>> 13;
        d3 &= 0x1fff;
        d3 += h5 * (5 * r8) + h6 * (5 * r7) + h7 * (5 * r6) + h8 * (5 * r5) + h9 * (5 * r4);
        c += d3 >>> 13;
        d3 &= 0x1fff;
        let d4 = c + h0 * r4 + h1 * r3 + h2 * r2 + h3 * r1 + h4 * r0;
        c = d4 >>> 13;
        d4 &= 0x1fff;
        d4 += h5 * (5 * r9) + h6 * (5 * r8) + h7 * (5 * r7) + h8 * (5 * r6) + h9 * (5 * r5);
        c += d4 >>> 13;
        d4 &= 0x1fff;
        let d5 = c + h0 * r5 + h1 * r4 + h2 * r3 + h3 * r2 + h4 * r1;
        c = d5 >>> 13;
        d5 &= 0x1fff;
        d5 += h5 * r0 + h6 * (5 * r9) + h7 * (5 * r8) + h8 * (5 * r7) + h9 * (5 * r6);
        c += d5 >>> 13;
        d5 &= 0x1fff;
        let d6 = c + h0 * r6 + h1 * r5 + h2 * r4 + h3 * r3 + h4 * r2;
        c = d6 >>> 13;
        d6 &= 0x1fff;
        d6 += h5 * r1 + h6 * r0 + h7 * (5 * r9) + h8 * (5 * r8) + h9 * (5 * r7);
        c += d6 >>> 13;
        d6 &= 0x1fff;
        let d7 = c + h0 * r7 + h1 * r6 + h2 * r5 + h3 * r4 + h4 * r3;
        c = d7 >>> 13;
        d7 &= 0x1fff;
        d7 += h5 * r2 + h6 * r1 + h7 * r0 + h8 * (5 * r9) + h9 * (5 * r8);
        c += d7 >>> 13;
        d7 &= 0x1fff;
        let d8 = c + h0 * r8 + h1 * r7 + h2 * r6 + h3 * r5 + h4 * r4;
        c = d8 >>> 13;
        d8 &= 0x1fff;
        d8 += h5 * r3 + h6 * r2 + h7 * r1 + h8 * r0 + h9 * (5 * r9);
        c += d8 >>> 13;
        d8 &= 0x1fff;
        let d9 = c + h0 * r9 + h1 * r8 + h2 * r7 + h3 * r6 + h4 * r5;
        c = d9 >>> 13;
        d9 &= 0x1fff;
        d9 += h5 * r4 + h6 * r3 + h7 * r2 + h8 * r1 + h9 * r0;
        c += d9 >>> 13;
        d9 &= 0x1fff;
        c = (c << 2) + c | 0;
        c = c + d0 | 0;
        d0 = c & 0x1fff;
        c = c >>> 13;
        d1 += c;
        h[0] = d0;
        h[1] = d1;
        h[2] = d2;
        h[3] = d3;
        h[4] = d4;
        h[5] = d5;
        h[6] = d6;
        h[7] = d7;
        h[8] = d8;
        h[9] = d9;
    }
    finalize() {
        const { h, pad } = this;
        const g = new Uint16Array(10);
        let c = h[1] >>> 13;
        h[1] &= 0x1fff;
        for(let i = 2; i < 10; i++){
            h[i] += c;
            c = h[i] >>> 13;
            h[i] &= 0x1fff;
        }
        h[0] += c * 5;
        c = h[0] >>> 13;
        h[0] &= 0x1fff;
        h[1] += c;
        c = h[1] >>> 13;
        h[1] &= 0x1fff;
        h[2] += c;
        g[0] = h[0] + 5;
        c = g[0] >>> 13;
        g[0] &= 0x1fff;
        for(let i = 1; i < 10; i++){
            g[i] = h[i] + c;
            c = g[i] >>> 13;
            g[i] &= 0x1fff;
        }
        g[9] -= 1 << 13;
        let mask = (c ^ 1) - 1;
        for(let i = 0; i < 10; i++)g[i] &= mask;
        mask = ~mask;
        for(let i = 0; i < 10; i++)h[i] = h[i] & mask | g[i];
        h[0] = (h[0] | h[1] << 13) & 0xffff;
        h[1] = (h[1] >>> 3 | h[2] << 10) & 0xffff;
        h[2] = (h[2] >>> 6 | h[3] << 7) & 0xffff;
        h[3] = (h[3] >>> 9 | h[4] << 4) & 0xffff;
        h[4] = (h[4] >>> 12 | h[5] << 1 | h[6] << 14) & 0xffff;
        h[5] = (h[6] >>> 2 | h[7] << 11) & 0xffff;
        h[6] = (h[7] >>> 5 | h[8] << 8) & 0xffff;
        h[7] = (h[8] >>> 8 | h[9] << 5) & 0xffff;
        let f = h[0] + pad[0];
        h[0] = f & 0xffff;
        for(let i = 1; i < 8; i++){
            f = (h[i] + pad[i] | 0) + (f >>> 16) | 0;
            h[i] = f & 0xffff;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clean"])(g);
    }
    update(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["abytes"])(data);
        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["copyBytes"])(data);
        const { buffer, blockLen } = this;
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input
            if (take === blockLen) {
                for(; blockLen <= len - pos; pos += blockLen)this.process(data, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(buffer, 0, false);
                this.pos = 0;
            }
        }
        return this;
    }
    destroy() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clean"])(this.h, this.r, this.buffer, this.pad);
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["aoutput"])(out, this);
        this.finished = true;
        const { buffer, h } = this;
        let { pos } = this;
        if (pos) {
            buffer[pos++] = 1;
            for(; pos < 16; pos++)buffer[pos] = 0;
            this.process(buffer, 0, true);
        }
        this.finalize();
        let opos = 0;
        for(let i = 0; i < 8; i++){
            out[opos++] = h[i] >>> 0;
            out[opos++] = h[i] >>> 8;
        }
        return out;
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
}
function wrapConstructorWithKey(hashCons) {
    const hashC = (msg, key)=>hashCons(key).update(msg).digest();
    const tmp = hashCons(new Uint8Array(32)); // tmp array, used just once below
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (key)=>hashCons(key);
    return hashC;
}
const poly1305 = /** @__PURE__ */ (()=>wrapConstructorWithKey((key)=>new Poly1305(key)))(); //# sourceMappingURL=_poly1305.js.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/ciphers/chacha.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * ChaCha stream cipher, released
 * in 2008. Developed after Salsa20, ChaCha aims to increase diffusion per round.
 * It was standardized in [RFC 8439](https://www.rfc-editor.org/rfc/rfc8439) and
 * is now used in TLS 1.3.
 *
 * [XChaCha20](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-xchacha)
 * extended-nonce variant is also provided. Similar to XSalsa, it's safe to use with
 * randomly-generated nonces.
 *
 * Check out [PDF](http://cr.yp.to/chacha/chacha-20080128.pdf) and
 * [wiki](https://en.wikipedia.org/wiki/Salsa20) and
 * [website](https://cr.yp.to/chacha.html).
 *
 * @module
 */ __turbopack_context__.s({
    "_poly1305_aead": (()=>_poly1305_aead),
    "chacha12": (()=>chacha12),
    "chacha20": (()=>chacha20),
    "chacha20orig": (()=>chacha20orig),
    "chacha20poly1305": (()=>chacha20poly1305),
    "chacha8": (()=>chacha8),
    "hchacha": (()=>hchacha),
    "rngChacha20": (()=>rngChacha20),
    "rngChacha8": (()=>rngChacha8),
    "xchacha20": (()=>xchacha20),
    "xchacha20poly1305": (()=>xchacha20poly1305)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/ciphers/_arx.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_poly1305$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/ciphers/_poly1305.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@noble/ciphers/utils.js [middleware-edge] (ecmascript)");
;
;
;
/**
 * ChaCha core function. It is implemented twice:
 * 1. Simple loop (chachaCore_small, hchacha_small)
 * 2. Unrolled loop (chachaCore, hchacha) - 4x faster, but larger & harder to read
 * The specific implementation is selected in `createCipher` below.
 */ /** quarter-round */ // prettier-ignore
function chachaQR(x, a, b, c, d) {
    x[a] = x[a] + x[b] | 0;
    x[d] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x[d] ^ x[a], 16);
    x[c] = x[c] + x[d] | 0;
    x[b] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x[b] ^ x[c], 12);
    x[a] = x[a] + x[b] | 0;
    x[d] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x[d] ^ x[a], 8);
    x[c] = x[c] + x[d] | 0;
    x[b] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x[b] ^ x[c], 7);
}
/** single round */ function chachaRound(x, rounds = 20) {
    for(let r = 0; r < rounds; r += 2){
        chachaQR(x, 0, 4, 8, 12);
        chachaQR(x, 1, 5, 9, 13);
        chachaQR(x, 2, 6, 10, 14);
        chachaQR(x, 3, 7, 11, 15);
        chachaQR(x, 0, 5, 10, 15);
        chachaQR(x, 1, 6, 11, 12);
        chachaQR(x, 2, 7, 8, 13);
        chachaQR(x, 3, 4, 9, 14);
    }
}
const ctmp = /* @__PURE__ */ new Uint32Array(16);
/** Small version of chacha without loop unrolling. Unused, provided for auditability. */ // prettier-ignore
function chacha(s, k, i, out, isHChacha = true, rounds = 20) {
    // Create initial array using common pattern
    const y = Uint32Array.from([
        s[0],
        s[1],
        s[2],
        s[3],
        k[0],
        k[1],
        k[2],
        k[3],
        k[4],
        k[5],
        k[6],
        k[7],
        i[0],
        i[1],
        i[2],
        i[3]
    ]);
    const x = ctmp;
    x.set(y);
    chachaRound(x, rounds);
    // hchacha extracts 8 specific bytes, chacha adds orig to result
    if (isHChacha) {
        const xindexes = [
            0,
            1,
            2,
            3,
            12,
            13,
            14,
            15
        ];
        for(let i = 0; i < 8; i++)out[i] = x[xindexes[i]];
    } else {
        for(let i = 0; i < 16; i++)out[i] = y[i] + x[i] | 0;
    }
}
/** Identical to `chachaCore`. Unused. */ // @ts-ignore
const chachaCore_small = (s, k, n, out, cnt, rounds)=>chacha(s, k, Uint32Array.from([
        n[0],
        n[1],
        cnt,
        0
    ]), out, false, rounds);
/** Identical to `hchacha`. Unused. */ // @ts-ignore
const hchacha_small = chacha;
/** Identical to `chachaCore_small`. Unused. */ // prettier-ignore
function chachaCore(s, k, n, out, cnt, rounds = 20) {
    let y00 = s[0], y01 = s[1], y02 = s[2], y03 = s[3], y04 = k[0], y05 = k[1], y06 = k[2], y07 = k[3], y08 = k[4], y09 = k[5], y10 = k[6], y11 = k[7], y12 = cnt, y13 = n[0], y14 = n[1], y15 = n[2]; // Counter  Counter	Nonce   Nonce
    // Save state to temporary variables
    let x00 = y00, x01 = y01, x02 = y02, x03 = y03, x04 = y04, x05 = y05, x06 = y06, x07 = y07, x08 = y08, x09 = y09, x10 = y10, x11 = y11, x12 = y12, x13 = y13, x14 = y14, x15 = y15;
    for(let r = 0; r < rounds; r += 2){
        x00 = x00 + x04 | 0;
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x00, 16);
        x08 = x08 + x12 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x08, 12);
        x00 = x00 + x04 | 0;
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x00, 8);
        x08 = x08 + x12 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x08, 7);
        x01 = x01 + x05 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x01, 16);
        x09 = x09 + x13 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x09, 12);
        x01 = x01 + x05 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x01, 8);
        x09 = x09 + x13 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x09, 7);
        x02 = x02 + x06 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x02, 16);
        x10 = x10 + x14 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x10, 12);
        x02 = x02 + x06 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x02, 8);
        x10 = x10 + x14 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x10, 7);
        x03 = x03 + x07 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x03, 16);
        x11 = x11 + x15 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x11, 12);
        x03 = x03 + x07 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x03, 8);
        x11 = x11 + x15 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x11, 7);
        x00 = x00 + x05 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x00, 16);
        x10 = x10 + x15 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x10, 12);
        x00 = x00 + x05 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x00, 8);
        x10 = x10 + x15 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x10, 7);
        x01 = x01 + x06 | 0;
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x01, 16);
        x11 = x11 + x12 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x11, 12);
        x01 = x01 + x06 | 0;
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x01, 8);
        x11 = x11 + x12 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x11, 7);
        x02 = x02 + x07 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x02, 16);
        x08 = x08 + x13 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x08, 12);
        x02 = x02 + x07 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x02, 8);
        x08 = x08 + x13 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x08, 7);
        x03 = x03 + x04 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x03, 16);
        x09 = x09 + x14 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x09, 12);
        x03 = x03 + x04 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x03, 8);
        x09 = x09 + x14 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x09, 7);
    }
    // Write output
    let oi = 0;
    out[oi++] = y00 + x00 | 0;
    out[oi++] = y01 + x01 | 0;
    out[oi++] = y02 + x02 | 0;
    out[oi++] = y03 + x03 | 0;
    out[oi++] = y04 + x04 | 0;
    out[oi++] = y05 + x05 | 0;
    out[oi++] = y06 + x06 | 0;
    out[oi++] = y07 + x07 | 0;
    out[oi++] = y08 + x08 | 0;
    out[oi++] = y09 + x09 | 0;
    out[oi++] = y10 + x10 | 0;
    out[oi++] = y11 + x11 | 0;
    out[oi++] = y12 + x12 | 0;
    out[oi++] = y13 + x13 | 0;
    out[oi++] = y14 + x14 | 0;
    out[oi++] = y15 + x15 | 0;
}
function hchacha(s, k, i, out) {
    let x00 = s[0], x01 = s[1], x02 = s[2], x03 = s[3], x04 = k[0], x05 = k[1], x06 = k[2], x07 = k[3], x08 = k[4], x09 = k[5], x10 = k[6], x11 = k[7], x12 = i[0], x13 = i[1], x14 = i[2], x15 = i[3];
    for(let r = 0; r < 20; r += 2){
        x00 = x00 + x04 | 0;
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x00, 16);
        x08 = x08 + x12 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x08, 12);
        x00 = x00 + x04 | 0;
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x00, 8);
        x08 = x08 + x12 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x08, 7);
        x01 = x01 + x05 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x01, 16);
        x09 = x09 + x13 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x09, 12);
        x01 = x01 + x05 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x01, 8);
        x09 = x09 + x13 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x09, 7);
        x02 = x02 + x06 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x02, 16);
        x10 = x10 + x14 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x10, 12);
        x02 = x02 + x06 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x02, 8);
        x10 = x10 + x14 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x10, 7);
        x03 = x03 + x07 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x03, 16);
        x11 = x11 + x15 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x11, 12);
        x03 = x03 + x07 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x03, 8);
        x11 = x11 + x15 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x11, 7);
        x00 = x00 + x05 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x00, 16);
        x10 = x10 + x15 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x10, 12);
        x00 = x00 + x05 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x00, 8);
        x10 = x10 + x15 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x10, 7);
        x01 = x01 + x06 | 0;
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x01, 16);
        x11 = x11 + x12 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x11, 12);
        x01 = x01 + x06 | 0;
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x01, 8);
        x11 = x11 + x12 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x11, 7);
        x02 = x02 + x07 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x02, 16);
        x08 = x08 + x13 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x08, 12);
        x02 = x02 + x07 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x02, 8);
        x08 = x08 + x13 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x08, 7);
        x03 = x03 + x04 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x03, 16);
        x09 = x09 + x14 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x09, 12);
        x03 = x03 + x04 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x03, 8);
        x09 = x09 + x14 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x09, 7);
    }
    let oi = 0;
    out[oi++] = x00;
    out[oi++] = x01;
    out[oi++] = x02;
    out[oi++] = x03;
    out[oi++] = x12;
    out[oi++] = x13;
    out[oi++] = x14;
    out[oi++] = x15;
}
const chacha20orig = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createCipher"])(chachaCore, {
    counterRight: false,
    counterLength: 8,
    allowShortKeys: true
});
const chacha20 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createCipher"])(chachaCore, {
    counterRight: false,
    counterLength: 4,
    allowShortKeys: false
});
const xchacha20 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createCipher"])(chachaCore, {
    counterRight: false,
    counterLength: 8,
    extendNonceFn: hchacha,
    allowShortKeys: false
});
const chacha8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createCipher"])(chachaCore, {
    counterRight: false,
    counterLength: 4,
    rounds: 8
});
const chacha12 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createCipher"])(chachaCore, {
    counterRight: false,
    counterLength: 4,
    rounds: 12
});
const ZEROS16 = /* @__PURE__ */ new Uint8Array(16);
// Pad to digest size with zeros
const updatePadded = (h, msg)=>{
    h.update(msg);
    const leftover = msg.length % 16;
    if (leftover) h.update(ZEROS16.subarray(leftover));
};
const ZEROS32 = /* @__PURE__ */ new Uint8Array(32);
function computeTag(fn, key, nonce, ciphertext, AAD) {
    if (AAD !== undefined) (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["abytes"])(AAD, undefined, 'AAD');
    const authKey = fn(key, nonce, ZEROS32);
    const lengths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["u64Lengths"])(ciphertext.length, AAD ? AAD.length : 0, true);
    // Methods below can be replaced with
    // return poly1305_computeTag_small(authKey, lengths, ciphertext, AAD)
    const h = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_poly1305$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["poly1305"].create(authKey);
    if (AAD) updatePadded(h, AAD);
    updatePadded(h, ciphertext);
    h.update(lengths);
    const res = h.digest();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clean"])(authKey, lengths);
    return res;
}
const _poly1305_aead = (xorStream)=>(key, nonce, AAD)=>{
        const tagLength = 16;
        return {
            encrypt (plaintext, output) {
                const plength = plaintext.length;
                output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getOutput"])(plength + tagLength, output, false);
                output.set(plaintext);
                const oPlain = output.subarray(0, -tagLength);
                // Actual encryption
                xorStream(key, nonce, oPlain, oPlain, 1);
                const tag = computeTag(xorStream, key, nonce, oPlain, AAD);
                output.set(tag, plength); // append tag
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clean"])(tag);
                return output;
            },
            decrypt (ciphertext, output) {
                output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getOutput"])(ciphertext.length - tagLength, output, false);
                const data = ciphertext.subarray(0, -tagLength);
                const passedTag = ciphertext.subarray(-tagLength);
                const tag = computeTag(xorStream, key, nonce, data, AAD);
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["equalBytes"])(passedTag, tag)) throw new Error('invalid tag');
                output.set(ciphertext.subarray(0, -tagLength));
                // Actual decryption
                xorStream(key, nonce, output, output, 1); // start stream with i=1
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clean"])(tag);
                return output;
            }
        };
    };
const chacha20poly1305 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["wrapCipher"])({
    blockSize: 64,
    nonceLength: 12,
    tagLength: 16
}, _poly1305_aead(chacha20));
const xchacha20poly1305 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["wrapCipher"])({
    blockSize: 64,
    nonceLength: 24,
    tagLength: 16
}, _poly1305_aead(xchacha20));
const rngChacha20 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createPRG"])(chacha20orig, 64, 32, 8);
const rngChacha8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createPRG"])(chacha8, 64, 32, 12); //# sourceMappingURL=chacha.js.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//#region src/error.ts
__turbopack_context__.s({
    "APIError": (()=>APIError),
    "BetterCallError": (()=>BetterCallError),
    "ValidationError": (()=>ValidationError),
    "hideInternalStackFrames": (()=>hideInternalStackFrames),
    "makeErrorForHideStackFrame": (()=>makeErrorForHideStackFrame),
    "statusCodes": (()=>statusCodes)
});
function isErrorStackTraceLimitWritable() {
    const desc = Object.getOwnPropertyDescriptor(Error, "stackTraceLimit");
    if (desc === void 0) return Object.isExtensible(Error);
    return Object.prototype.hasOwnProperty.call(desc, "writable") ? desc.writable : desc.set !== void 0;
}
/**
* Hide internal stack frames from the error stack trace.
*/ function hideInternalStackFrames(stack) {
    const lines = stack.split("\n    at ");
    if (lines.length <= 1) return stack;
    lines.splice(1, 1);
    return lines.join("\n    at ");
}
/**
* Creates a custom error class that hides stack frames.
*/ function makeErrorForHideStackFrame(Base, clazz) {
    class HideStackFramesError extends Base {
        #hiddenStack;
        constructor(...args){
            if (isErrorStackTraceLimitWritable()) {
                const limit = Error.stackTraceLimit;
                Error.stackTraceLimit = 0;
                super(...args);
                Error.stackTraceLimit = limit;
            } else super(...args);
            const stack = /* @__PURE__ */ new Error().stack;
            if (stack) this.#hiddenStack = hideInternalStackFrames(stack.replace(/^Error/, this.name));
        }
        get errorStack() {
            return this.#hiddenStack;
        }
    }
    Object.defineProperty(HideStackFramesError.prototype, "constructor", {
        get () {
            return clazz;
        },
        enumerable: false,
        configurable: true
    });
    return HideStackFramesError;
}
const statusCodes = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    MULTIPLE_CHOICES: 300,
    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    TEMPORARY_REDIRECT: 307,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TOO_LARGE: 413,
    URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    "I'M_A_TEAPOT": 418,
    MISDIRECTED_REQUEST: 421,
    UNPROCESSABLE_ENTITY: 422,
    LOCKED: 423,
    FAILED_DEPENDENCY: 424,
    TOO_EARLY: 425,
    UPGRADE_REQUIRED: 426,
    PRECONDITION_REQUIRED: 428,
    TOO_MANY_REQUESTS: 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    VARIANT_ALSO_NEGOTIATES: 506,
    INSUFFICIENT_STORAGE: 507,
    LOOP_DETECTED: 508,
    NOT_EXTENDED: 510,
    NETWORK_AUTHENTICATION_REQUIRED: 511
};
var InternalAPIError = class extends Error {
    constructor(status = "INTERNAL_SERVER_ERROR", body = void 0, headers = {}, statusCode = typeof status === "number" ? status : statusCodes[status]){
        super(body?.message, body?.cause ? {
            cause: body.cause
        } : void 0);
        this.status = status;
        this.body = body;
        this.headers = headers;
        this.statusCode = statusCode;
        this.name = "APIError";
        this.status = status;
        this.headers = headers;
        this.statusCode = statusCode;
        this.body = body ? {
            code: body?.message?.toUpperCase().replace(/ /g, "_").replace(/[^A-Z0-9_]/g, ""),
            ...body
        } : void 0;
    }
};
var ValidationError = class extends InternalAPIError {
    constructor(message, issues){
        super(400, {
            message,
            code: "VALIDATION_ERROR"
        });
        this.message = message;
        this.issues = issues;
        this.issues = issues;
    }
};
var BetterCallError = class extends Error {
    constructor(message){
        super(message);
        this.name = "BetterCallError";
    }
};
const APIError = makeErrorForHideStackFrame(InternalAPIError, Error);
;
 //# sourceMappingURL=error.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/utils.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getBody": (()=>getBody),
    "isAPIError": (()=>isAPIError),
    "isRequest": (()=>isRequest),
    "tryCatch": (()=>tryCatch),
    "tryDecode": (()=>tryDecode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
;
//#region src/utils.ts
const jsonContentTypeRegex = /^application\/([a-z0-9.+-]*\+)?json/i;
async function getBody(request, allowedMediaTypes) {
    const contentType = request.headers.get("content-type") || "";
    const normalizedContentType = contentType.toLowerCase();
    if (!request.body) return;
    if (allowedMediaTypes && allowedMediaTypes.length > 0) {
        if (!allowedMediaTypes.some((allowed)=>{
            const normalizedContentTypeBase = normalizedContentType.split(";")[0].trim();
            const normalizedAllowed = allowed.toLowerCase().trim();
            return normalizedContentTypeBase === normalizedAllowed || normalizedContentTypeBase.includes(normalizedAllowed);
        })) {
            if (!normalizedContentType) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"](415, {
                message: `Content-Type is required. Allowed types: ${allowedMediaTypes.join(", ")}`,
                code: "UNSUPPORTED_MEDIA_TYPE"
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"](415, {
                message: `Content-Type "${contentType}" is not allowed. Allowed types: ${allowedMediaTypes.join(", ")}`,
                code: "UNSUPPORTED_MEDIA_TYPE"
            });
        }
    }
    if (jsonContentTypeRegex.test(normalizedContentType)) return await request.json();
    if (normalizedContentType.includes("application/x-www-form-urlencoded")) {
        const formData = await request.formData();
        const result = {};
        formData.forEach((value, key)=>{
            result[key] = value.toString();
        });
        return result;
    }
    if (normalizedContentType.includes("multipart/form-data")) {
        const formData = await request.formData();
        const result = {};
        formData.forEach((value, key)=>{
            result[key] = value;
        });
        return result;
    }
    if (normalizedContentType.includes("text/plain")) return await request.text();
    if (normalizedContentType.includes("application/octet-stream")) return await request.arrayBuffer();
    if (normalizedContentType.includes("application/pdf") || normalizedContentType.includes("image/") || normalizedContentType.includes("video/")) return await request.blob();
    if (normalizedContentType.includes("application/stream") || request.body instanceof ReadableStream) return request.body;
    return await request.text();
}
function isAPIError(error) {
    return error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"] || error?.name === "APIError";
}
function tryDecode(str) {
    try {
        return str.includes("%") ? decodeURIComponent(str) : str;
    } catch  {
        return str;
    }
}
async function tryCatch(promise) {
    try {
        return {
            data: await promise,
            error: null
        };
    } catch (error) {
        return {
            data: null,
            error
        };
    }
}
/**
* Check if an object is a `Request`
* - `instanceof`: works for native Request instances
* - `toString`: handles where instanceof check fails but the object is still a valid Request
*/ function isRequest(obj) {
    return obj instanceof Request || Object.prototype.toString.call(obj) === "[object Request]";
}
;
 //# sourceMappingURL=utils.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/to-response.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "toResponse": (()=>toResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/utils.mjs [middleware-edge] (ecmascript)");
;
;
//#region src/to-response.ts
function isJSONSerializable(value) {
    if (value === void 0) return false;
    const t = typeof value;
    if (t === "string" || t === "number" || t === "boolean" || t === null) return true;
    if (t !== "object") return false;
    if (Array.isArray(value)) return true;
    if (value.buffer) return false;
    return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
function safeStringify(obj, replacer, space) {
    let id = 0;
    const seen = /* @__PURE__ */ new WeakMap();
    const safeReplacer = (key, value)=>{
        if (typeof value === "bigint") return value.toString();
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) return `[Circular ref-${seen.get(value)}]`;
            seen.set(value, id++);
        }
        if (replacer) return replacer(key, value);
        return value;
    };
    return JSON.stringify(obj, safeReplacer, space);
}
function isJSONResponse(value) {
    if (!value || typeof value !== "object") return false;
    return "_flag" in value && value._flag === "json";
}
function toResponse(data, init) {
    if (data instanceof Response) {
        if (init?.headers instanceof Headers) init.headers.forEach((value, key)=>{
            data.headers.set(key, value);
        });
        return data;
    }
    if (isJSONResponse(data)) {
        const body$1 = data.body;
        const routerResponse = data.routerResponse;
        if (routerResponse instanceof Response) return routerResponse;
        const headers$1 = new Headers();
        if (routerResponse?.headers) {
            const headers$2 = new Headers(routerResponse.headers);
            for (const [key, value] of headers$2.entries())headers$2.set(key, value);
        }
        if (data.headers) for (const [key, value] of new Headers(data.headers).entries())headers$1.set(key, value);
        if (init?.headers) for (const [key, value] of new Headers(init.headers).entries())headers$1.set(key, value);
        headers$1.set("Content-Type", "application/json");
        return new Response(JSON.stringify(body$1), {
            ...routerResponse,
            headers: headers$1,
            status: data.status ?? init?.status ?? routerResponse?.status,
            statusText: init?.statusText ?? routerResponse?.statusText
        });
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isAPIError"])(data)) return toResponse(data.body, {
        status: init?.status ?? data.statusCode,
        statusText: data.status.toString(),
        headers: init?.headers || data.headers
    });
    let body = data;
    let headers = new Headers(init?.headers);
    if (!data) {
        if (data === null) body = JSON.stringify(null);
        headers.set("content-type", "application/json");
    } else if (typeof data === "string") {
        body = data;
        headers.set("Content-Type", "text/plain");
    } else if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
        body = data;
        headers.set("Content-Type", "application/octet-stream");
    } else if (data instanceof Blob) {
        body = data;
        headers.set("Content-Type", data.type || "application/octet-stream");
    } else if (data instanceof FormData) body = data;
    else if (data instanceof URLSearchParams) {
        body = data;
        headers.set("Content-Type", "application/x-www-form-urlencoded");
    } else if (data instanceof ReadableStream) {
        body = data;
        headers.set("Content-Type", "application/octet-stream");
    } else if (isJSONSerializable(data)) {
        body = safeStringify(data);
        headers.set("Content-Type", "application/json");
    }
    return new Response(body, {
        ...init,
        headers
    });
}
;
 //# sourceMappingURL=to-response.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/crypto.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCryptoKey": (()=>getCryptoKey),
    "signCookieValue": (()=>signCookieValue),
    "verifySignature": (()=>verifySignature)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/index.mjs [middleware-edge] (ecmascript)");
;
//#region src/crypto.ts
const algorithm = {
    name: "HMAC",
    hash: "SHA-256"
};
const getCryptoKey = async (secret)=>{
    const secretBuf = typeof secret === "string" ? new TextEncoder().encode(secret) : secret;
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().importKey("raw", secretBuf, algorithm, false, [
        "sign",
        "verify"
    ]);
};
const verifySignature = async (base64Signature, value, secret)=>{
    try {
        const signatureBinStr = atob(base64Signature);
        const signature = new Uint8Array(signatureBinStr.length);
        for(let i = 0, len = signatureBinStr.length; i < len; i++)signature[i] = signatureBinStr.charCodeAt(i);
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().verify(algorithm, secret, signature, new TextEncoder().encode(value));
    } catch (e) {
        return false;
    }
};
const makeSignature = async (value, secret)=>{
    const key = await getCryptoKey(secret);
    const signature = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().sign(algorithm.name, key, new TextEncoder().encode(value));
    return btoa(String.fromCharCode(...new Uint8Array(signature)));
};
const signCookieValue = async (value, secret)=>{
    const signature = await makeSignature(value, secret);
    value = `${value}.${signature}`;
    value = encodeURIComponent(value);
    return value;
};
;
 //# sourceMappingURL=crypto.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/cookies.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCookieKey": (()=>getCookieKey),
    "parseCookies": (()=>parseCookies),
    "serializeCookie": (()=>serializeCookie),
    "serializeSignedCookie": (()=>serializeSignedCookie)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/utils.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$crypto$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/crypto.mjs [middleware-edge] (ecmascript)");
;
;
//#region src/cookies.ts
const getCookieKey = (key, prefix)=>{
    let finalKey = key;
    if (prefix) if (prefix === "secure") finalKey = "__Secure-" + key;
    else if (prefix === "host") finalKey = "__Host-" + key;
    else return;
    return finalKey;
};
/**
* Parse an HTTP Cookie header string and returning an object of all cookie
* name-value pairs.
*
* Inspired by https://github.com/unjs/cookie-es/blob/main/src/cookie/parse.ts
*
* @param str the string representing a `Cookie` header value
*/ function parseCookies(str) {
    if (typeof str !== "string") throw new TypeError("argument str must be a string");
    const cookies = /* @__PURE__ */ new Map();
    let index = 0;
    while(index < str.length){
        const eqIdx = str.indexOf("=", index);
        if (eqIdx === -1) break;
        let endIdx = str.indexOf(";", index);
        if (endIdx === -1) endIdx = str.length;
        else if (endIdx < eqIdx) {
            index = str.lastIndexOf(";", eqIdx - 1) + 1;
            continue;
        }
        const key = str.slice(index, eqIdx).trim();
        if (!cookies.has(key)) {
            let val = str.slice(eqIdx + 1, endIdx).trim();
            if (val.codePointAt(0) === 34) val = val.slice(1, -1);
            cookies.set(key, (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["tryDecode"])(val));
        }
        index = endIdx + 1;
    }
    return cookies;
}
const _serialize = (key, value, opt = {})=>{
    let cookie;
    if (opt?.prefix === "secure") cookie = `${`__Secure-${key}`}=${value}`;
    else if (opt?.prefix === "host") cookie = `${`__Host-${key}`}=${value}`;
    else cookie = `${key}=${value}`;
    if (key.startsWith("__Secure-") && !opt.secure) opt.secure = true;
    if (key.startsWith("__Host-")) {
        if (!opt.secure) opt.secure = true;
        if (opt.path !== "/") opt.path = "/";
        if (opt.domain) opt.domain = void 0;
    }
    if (opt && typeof opt.maxAge === "number" && opt.maxAge >= 0) {
        if (opt.maxAge > 3456e4) throw new Error("Cookies Max-Age SHOULD NOT be greater than 400 days (34560000 seconds) in duration.");
        cookie += `; Max-Age=${Math.floor(opt.maxAge)}`;
    }
    if (opt.domain && opt.prefix !== "host") cookie += `; Domain=${opt.domain}`;
    if (opt.path) cookie += `; Path=${opt.path}`;
    if (opt.expires) {
        if (opt.expires.getTime() - Date.now() > 3456e7) throw new Error("Cookies Expires SHOULD NOT be greater than 400 days (34560000 seconds) in the future.");
        cookie += `; Expires=${opt.expires.toUTCString()}`;
    }
    if (opt.httpOnly) cookie += "; HttpOnly";
    if (opt.secure) cookie += "; Secure";
    if (opt.sameSite) cookie += `; SameSite=${opt.sameSite.charAt(0).toUpperCase() + opt.sameSite.slice(1)}`;
    if (opt.partitioned) {
        if (!opt.secure) opt.secure = true;
        cookie += "; Partitioned";
    }
    return cookie;
};
const serializeCookie = (key, value, opt)=>{
    value = encodeURIComponent(value);
    return _serialize(key, value, opt);
};
const serializeSignedCookie = async (key, value, secret, opt)=>{
    value = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$crypto$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["signCookieValue"])(value, secret);
    return _serialize(key, value, opt);
};
;
 //# sourceMappingURL=cookies.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/validator.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//#region src/validator.ts
/**
* Runs validation on body and query
* @returns error and data object
*/ __turbopack_context__.s({
    "runValidation": (()=>runValidation)
});
async function runValidation(options, context = {}) {
    let request = {
        body: context.body,
        query: context.query
    };
    if (options.body) {
        const result = await options.body["~standard"].validate(context.body);
        if (result.issues) return {
            data: null,
            error: fromError(result.issues, "body")
        };
        request.body = result.value;
    }
    if (options.query) {
        const result = await options.query["~standard"].validate(context.query);
        if (result.issues) return {
            data: null,
            error: fromError(result.issues, "query")
        };
        request.query = result.value;
    }
    if (options.requireHeaders && !context.headers) return {
        data: null,
        error: {
            message: "Headers is required",
            issues: []
        }
    };
    if (options.requireRequest && !context.request) return {
        data: null,
        error: {
            message: "Request is required",
            issues: []
        }
    };
    return {
        data: request,
        error: null
    };
}
function fromError(error, validating) {
    return {
        message: error.map((e)=>{
            return `[${e.path?.length ? `${validating}.` + e.path.map((x)=>typeof x === "object" ? x.key : x).join(".") : validating}] ${e.message}`;
        }).join("; "),
        issues: error
    };
}
;
 //# sourceMappingURL=validator.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/context.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createInternalContext": (()=>createInternalContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/utils.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$validator$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/validator.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$crypto$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/crypto.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$cookies$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/cookies.mjs [middleware-edge] (ecmascript)");
;
;
;
;
;
//#region src/context.ts
const createInternalContext = async (context, { options, path })=>{
    const headers = new Headers();
    let responseStatus = void 0;
    const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$validator$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["runValidation"])(options, context);
    if (error) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ValidationError"](error.message, error.issues);
    const requestHeaders = "headers" in context ? context.headers instanceof Headers ? context.headers : new Headers(context.headers) : "request" in context && (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isRequest"])(context.request) ? context.request.headers : null;
    const requestCookies = requestHeaders?.get("cookie");
    const parsedCookies = requestCookies ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$cookies$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseCookies"])(requestCookies) : void 0;
    const internalContext = {
        ...context,
        body: data.body,
        query: data.query,
        path: context.path || path || "virtual:",
        context: "context" in context && context.context ? context.context : {},
        returned: void 0,
        headers: context?.headers,
        request: context?.request,
        params: "params" in context ? context.params : void 0,
        method: context.method ?? (Array.isArray(options.method) ? options.method[0] : options.method === "*" ? "GET" : options.method),
        setHeader: (key, value)=>{
            headers.set(key, value);
        },
        getHeader: (key)=>{
            if (!requestHeaders) return null;
            return requestHeaders.get(key);
        },
        getCookie: (key, prefix)=>{
            const finalKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$cookies$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getCookieKey"])(key, prefix);
            if (!finalKey) return null;
            return parsedCookies?.get(finalKey) || null;
        },
        getSignedCookie: async (key, secret, prefix)=>{
            const finalKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$cookies$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getCookieKey"])(key, prefix);
            if (!finalKey) return null;
            const value = parsedCookies?.get(finalKey);
            if (!value) return null;
            const signatureStartPos = value.lastIndexOf(".");
            if (signatureStartPos < 1) return null;
            const signedValue = value.substring(0, signatureStartPos);
            const signature = value.substring(signatureStartPos + 1);
            if (signature.length !== 44 || !signature.endsWith("=")) return null;
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$crypto$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["verifySignature"])(signature, signedValue, await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$crypto$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getCryptoKey"])(secret)) ? signedValue : false;
        },
        setCookie: (key, value, options$1)=>{
            const cookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$cookies$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["serializeCookie"])(key, value, options$1);
            headers.append("set-cookie", cookie);
            return cookie;
        },
        setSignedCookie: async (key, value, secret, options$1)=>{
            const cookie = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$cookies$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["serializeSignedCookie"])(key, value, secret, options$1);
            headers.append("set-cookie", cookie);
            return cookie;
        },
        redirect: (url)=>{
            headers.set("location", url);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FOUND", void 0, headers);
        },
        error: (status, body, headers$1)=>{
            return new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"](status, body, headers$1);
        },
        setStatus: (status)=>{
            responseStatus = status;
        },
        json: (json, routerResponse)=>{
            if (!context.asResponse) return json;
            return {
                body: routerResponse?.body || json,
                routerResponse,
                _flag: "json"
            };
        },
        responseHeaders: headers,
        get responseStatus () {
            return responseStatus;
        }
    };
    for (const middleware of options.use || []){
        const response = await middleware({
            ...internalContext,
            returnHeaders: true,
            asResponse: false
        });
        if (response.response) Object.assign(internalContext.context, response.response);
        /**
		* Apply headers from the middleware to the endpoint headers
		*/ if (response.headers) response.headers.forEach((value, key)=>{
            internalContext.responseHeaders.set(key, value);
        });
    }
    return internalContext;
};
;
 //# sourceMappingURL=context.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/endpoint.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createEndpoint": (()=>createEndpoint)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/utils.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$to$2d$response$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/to-response.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$context$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/context.mjs [middleware-edge] (ecmascript)");
;
;
;
;
//#region src/endpoint.ts
function createEndpoint(pathOrOptions, handlerOrOptions, handlerOrNever) {
    const path = typeof pathOrOptions === "string" ? pathOrOptions : void 0;
    const options = typeof handlerOrOptions === "object" ? handlerOrOptions : pathOrOptions;
    const handler = typeof handlerOrOptions === "function" ? handlerOrOptions : handlerOrNever;
    if ((options.method === "GET" || options.method === "HEAD") && options.body) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BetterCallError"]("Body is not allowed with GET or HEAD methods");
    if (path && /\/{2,}/.test(path)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BetterCallError"]("Path cannot contain consecutive slashes");
    const internalHandler = async (...inputCtx)=>{
        const context = inputCtx[0] || {};
        const { data: internalContext, error: validationError } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["tryCatch"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$context$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createInternalContext"])(context, {
            options,
            path
        }));
        if (validationError) {
            if (!(validationError instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ValidationError"])) throw validationError;
            if (options.onValidationError) await options.onValidationError({
                message: validationError.message,
                issues: validationError.issues
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"](400, {
                message: validationError.message,
                code: "VALIDATION_ERROR"
            });
        }
        const response = await handler(internalContext).catch(async (e)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isAPIError"])(e)) {
                const onAPIError = options.onAPIError;
                if (onAPIError) await onAPIError(e);
                if (context.asResponse) return e;
            }
            throw e;
        });
        const headers = internalContext.responseHeaders;
        const status = internalContext.responseStatus;
        return context.asResponse ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$to$2d$response$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["toResponse"])(response, {
            headers,
            status
        }) : context.returnHeaders ? context.returnStatus ? {
            headers,
            response,
            status
        } : {
            headers,
            response
        } : context.returnStatus ? {
            response,
            status
        } : response;
    };
    internalHandler.options = options;
    internalHandler.path = path;
    return internalHandler;
}
createEndpoint.create = (opts)=>{
    return (path, options, handler)=>{
        return createEndpoint(path, {
            ...options,
            use: [
                ...options?.use || [],
                ...opts?.use || []
            ]
        }, handler);
    };
};
;
 //# sourceMappingURL=endpoint.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/middleware.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createMiddleware": (()=>createMiddleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$context$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/context.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$endpoint$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/endpoint.mjs [middleware-edge] (ecmascript)");
;
;
//#region src/middleware.ts
function createMiddleware(optionsOrHandler, handler) {
    const internalHandler = async (inputCtx)=>{
        const context = inputCtx;
        const _handler = typeof optionsOrHandler === "function" ? optionsOrHandler : handler;
        const internalContext = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$context$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createInternalContext"])(context, {
            options: typeof optionsOrHandler === "function" ? {} : optionsOrHandler,
            path: "/"
        });
        if (!_handler) throw new Error("handler must be defined");
        const response = await _handler(internalContext);
        const headers = internalContext.responseHeaders;
        return context.returnHeaders ? {
            headers,
            response
        } : response;
    };
    internalHandler.options = typeof optionsOrHandler === "function" ? {} : optionsOrHandler;
    return internalHandler;
}
createMiddleware.create = (opts)=>{
    function fn(optionsOrHandler, handler) {
        if (typeof optionsOrHandler === "function") return createMiddleware({
            use: opts?.use
        }, optionsOrHandler);
        if (!handler) throw new Error("Middleware handler is required");
        return createMiddleware({
            ...optionsOrHandler,
            method: "*",
            use: [
                ...opts?.use || [],
                ...optionsOrHandler.use || []
            ]
        }, handler);
    }
    return fn;
};
;
 //# sourceMappingURL=middleware.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/openapi.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generator": (()=>generator),
    "getHTML": (()=>getHTML)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/zod/v4/classic/schemas.js [middleware-edge] (ecmascript)");
;
//#region src/openapi.ts
const paths = {};
function getTypeFromZodType(zodType) {
    switch(zodType.constructor.name){
        case "ZodString":
            return "string";
        case "ZodNumber":
            return "number";
        case "ZodBoolean":
            return "boolean";
        case "ZodObject":
            return "object";
        case "ZodArray":
            return "array";
        default:
            return "string";
    }
}
function getParameters(options) {
    const parameters = [];
    if (options.metadata?.openapi?.parameters) {
        parameters.push(...options.metadata.openapi.parameters);
        return parameters;
    }
    if (options.query instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ZodObject"]) Object.entries(options.query.shape).forEach(([key, value])=>{
        if (value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ZodObject"]) parameters.push({
            name: key,
            in: "query",
            schema: {
                type: getTypeFromZodType(value),
                ..."minLength" in value && value.minLength ? {
                    minLength: value.minLength
                } : {},
                description: value.description
            }
        });
    });
    return parameters;
}
function getRequestBody(options) {
    if (options.metadata?.openapi?.requestBody) return options.metadata.openapi.requestBody;
    if (!options.body) return void 0;
    if (options.body instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ZodObject"] || options.body instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ZodOptional"]) {
        const shape = options.body.shape;
        if (!shape) return void 0;
        const properties = {};
        const required = [];
        Object.entries(shape).forEach(([key, value])=>{
            if (value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ZodObject"]) {
                properties[key] = {
                    type: getTypeFromZodType(value),
                    description: value.description
                };
                if (!(value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ZodOptional"])) required.push(key);
            }
        });
        return {
            required: options.body instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ZodOptional"] ? false : options.body ? true : false,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties,
                        required
                    }
                }
            }
        };
    }
}
function getResponse(responses) {
    return {
        "400": {
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            message: {
                                type: "string"
                            }
                        },
                        required: [
                            "message"
                        ]
                    }
                }
            },
            description: "Bad Request. Usually due to missing parameters, or invalid parameters."
        },
        "401": {
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            message: {
                                type: "string"
                            }
                        },
                        required: [
                            "message"
                        ]
                    }
                }
            },
            description: "Unauthorized. Due to missing or invalid authentication."
        },
        "403": {
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            message: {
                                type: "string"
                            }
                        }
                    }
                }
            },
            description: "Forbidden. You do not have permission to access this resource or to perform this action."
        },
        "404": {
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            message: {
                                type: "string"
                            }
                        }
                    }
                }
            },
            description: "Not Found. The requested resource was not found."
        },
        "429": {
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            message: {
                                type: "string"
                            }
                        }
                    }
                }
            },
            description: "Too Many Requests. You have exceeded the rate limit. Try again later."
        },
        "500": {
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            message: {
                                type: "string"
                            }
                        }
                    }
                }
            },
            description: "Internal Server Error. This is a problem with the server that you cannot fix."
        },
        ...responses
    };
}
async function generator(endpoints, config) {
    const components = {
        schemas: {}
    };
    Object.entries(endpoints).forEach(([_, value])=>{
        const options = value.options;
        if (!value.path || options.metadata?.SERVER_ONLY) return;
        if (options.method === "GET") paths[value.path] = {
            get: {
                tags: [
                    "Default",
                    ...options.metadata?.openapi?.tags || []
                ],
                description: options.metadata?.openapi?.description,
                operationId: options.metadata?.openapi?.operationId,
                security: [
                    {
                        bearerAuth: []
                    }
                ],
                parameters: getParameters(options),
                responses: getResponse(options.metadata?.openapi?.responses)
            }
        };
        if (options.method === "POST") {
            const body = getRequestBody(options);
            paths[value.path] = {
                post: {
                    tags: [
                        "Default",
                        ...options.metadata?.openapi?.tags || []
                    ],
                    description: options.metadata?.openapi?.description,
                    operationId: options.metadata?.openapi?.operationId,
                    security: [
                        {
                            bearerAuth: []
                        }
                    ],
                    parameters: getParameters(options),
                    ...body ? {
                        requestBody: body
                    } : {
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {}
                                    }
                                }
                            }
                        }
                    },
                    responses: getResponse(options.metadata?.openapi?.responses)
                }
            };
        }
    });
    return {
        openapi: "3.1.1",
        info: {
            title: "Better Auth",
            description: "API Reference for your Better Auth Instance",
            version: "1.1.0"
        },
        components,
        security: [
            {
                apiKeyCookie: []
            }
        ],
        servers: [
            {
                url: config?.url
            }
        ],
        tags: [
            {
                name: "Default",
                description: "Default endpoints that are included with Better Auth by default. These endpoints are not part of any plugin."
            }
        ],
        paths
    };
}
const getHTML = (apiReference, config)=>`<!doctype html>
<html>
  <head>
    <title>Scalar API Reference</title>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <script
      id="api-reference"
      type="application/json">
    ${JSON.stringify(apiReference)}
    <\/script>
	 <script>
      var configuration = {
	  	favicon: ${config?.logo ? `data:image/svg+xml;utf8,${encodeURIComponent(config.logo)}` : void 0} ,
	   	theme: ${config?.theme || "saturn"},
        metaData: {
			title: ${config?.title || "Open API Reference"},
			description: ${config?.description || "Better Call Open API"},
		}
      }
      document.getElementById('api-reference').dataset.configuration =
        JSON.stringify(configuration)
    <\/script>
	  <script src="https://cdn.jsdelivr.net/npm/@scalar/api-reference"><\/script>
  </body>
</html>`;
;
 //# sourceMappingURL=openapi.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/router.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createRouter": (()=>createRouter$1)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/utils.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$to$2d$response$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/to-response.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$endpoint$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/endpoint.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$openapi$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/openapi.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/node_modules/rou3/dist/index.mjs [middleware-edge] (ecmascript)");
;
;
;
;
;
//#region src/router.ts
const createRouter$1 = (endpoints, config)=>{
    if (!config?.openapi?.disabled) {
        const openapi = {
            path: "/api/reference",
            ...config?.openapi
        };
        endpoints["openapi"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$endpoint$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createEndpoint"])(openapi.path, {
            method: "GET"
        }, async (c)=>{
            const schema = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$openapi$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generator"])(endpoints);
            return new Response((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$openapi$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getHTML"])(schema, openapi.scalar), {
                headers: {
                    "Content-Type": "text/html"
                }
            });
        });
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createRouter"])();
    const middlewareRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createRouter"])();
    for (const endpoint of Object.values(endpoints)){
        if (!endpoint.options || !endpoint.path) continue;
        if (endpoint.options?.metadata?.SERVER_ONLY) continue;
        const methods = Array.isArray(endpoint.options?.method) ? endpoint.options.method : [
            endpoint.options?.method
        ];
        for (const method of methods)(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["addRoute"])(router, method, endpoint.path, endpoint);
    }
    if (config?.routerMiddleware?.length) for (const { path, middleware } of config.routerMiddleware)(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["addRoute"])(middlewareRouter, "*", path, middleware);
    const processRequest = async (request)=>{
        const url = new URL(request.url);
        const pathname = url.pathname;
        const path = config?.basePath && config.basePath !== "/" ? pathname.split(config.basePath).reduce((acc, curr, index)=>{
            if (index !== 0) if (index > 1) acc.push(`${config.basePath}${curr}`);
            else acc.push(curr);
            return acc;
        }, []).join("") : url.pathname;
        if (!path?.length) return new Response(null, {
            status: 404,
            statusText: "Not Found"
        });
        if (/\/{2,}/.test(path)) return new Response(null, {
            status: 404,
            statusText: "Not Found"
        });
        const route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["findRoute"])(router, request.method, path);
        if (path.endsWith("/") !== route?.data?.path?.endsWith("/") && !config?.skipTrailingSlashes) return new Response(null, {
            status: 404,
            statusText: "Not Found"
        });
        if (!route?.data) return new Response(null, {
            status: 404,
            statusText: "Not Found"
        });
        const query = {};
        url.searchParams.forEach((value, key)=>{
            if (key in query) if (Array.isArray(query[key])) query[key].push(value);
            else query[key] = [
                query[key],
                value
            ];
            else query[key] = value;
        });
        const handler = route.data;
        try {
            const allowedMediaTypes = handler.options.metadata?.allowedMediaTypes || config?.allowedMediaTypes;
            const context = {
                path,
                method: request.method,
                headers: request.headers,
                params: route.params ? JSON.parse(JSON.stringify(route.params)) : {},
                request,
                body: handler.options.disableBody ? void 0 : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getBody"])(handler.options.cloneRequest ? request.clone() : request, allowedMediaTypes),
                query,
                _flag: "router",
                asResponse: true,
                context: config?.routerContext
            };
            const middlewareRoutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["findAllRoutes"])(middlewareRouter, "*", path);
            if (middlewareRoutes?.length) for (const { data: middleware, params } of middlewareRoutes){
                const res = await middleware({
                    ...context,
                    params,
                    asResponse: false
                });
                if (res instanceof Response) return res;
            }
            return await handler(context);
        } catch (error) {
            if (config?.onError) try {
                const errorResponse = await config.onError(error);
                if (errorResponse instanceof Response) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$to$2d$response$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["toResponse"])(errorResponse);
            } catch (error$1) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isAPIError"])(error$1)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$to$2d$response$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["toResponse"])(error$1);
                throw error$1;
            }
            if (config?.throwError) throw error;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isAPIError"])(error)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$to$2d$response$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["toResponse"])(error);
            console.error(`# SERVER_ERROR: `, error);
            return new Response(null, {
                status: 500,
                statusText: "Internal Server Error"
            });
        }
    };
    return {
        handler: async (request)=>{
            const onReq = await config?.onRequest?.(request);
            if (onReq instanceof Response) return onReq;
            const res = await processRequest((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isRequest"])(onReq) ? onReq : request);
            const onRes = await config?.onResponse?.(res);
            if (onRes instanceof Response) return onRes;
            return res;
        },
        endpoints
    };
};
;
 //# sourceMappingURL=router.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/index.mjs [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$to$2d$response$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/to-response.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$cookies$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/cookies.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$context$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/context.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$endpoint$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/endpoint.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$middleware$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/middleware.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$openapi$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/openapi.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$router$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/router.mjs [middleware-edge] (ecmascript)");
;
;
;
;
;
;
;
;
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/index.mjs [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$to$2d$response$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/to-response.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$cookies$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/cookies.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$context$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/context.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$endpoint$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/endpoint.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$middleware$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/middleware.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$openapi$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/openapi.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$router$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/router.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/index.mjs [middleware-edge] (ecmascript) <locals>");
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/node_modules/rou3/dist/index.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NullProtoObj": (()=>NullProtoObj),
    "addRoute": (()=>addRoute),
    "createRouter": (()=>createRouter),
    "findAllRoutes": (()=>findAllRoutes),
    "findRoute": (()=>findRoute),
    "removeRoute": (()=>removeRoute),
    "routeToRegExp": (()=>routeToRegExp)
});
const NullProtoObj = /* @__PURE__ */ (()=>{
    const e = function() {};
    return e.prototype = Object.create(null), Object.freeze(e.prototype), e;
})();
/**
* Create a new router context.
*/ function createRouter() {
    return {
        root: {
            key: ""
        },
        static: new NullProtoObj()
    };
}
function splitPath(path) {
    const [_, ...s] = path.split("/");
    return s[s.length - 1] === "" ? s.slice(0, -1) : s;
}
function getMatchParams(segments, paramsMap) {
    const params = new NullProtoObj();
    for (const [index, name] of paramsMap){
        const segment = index < 0 ? segments.slice(-(index + 1)).join("/") : segments[index];
        if (typeof name === "string") params[name] = segment;
        else {
            const match = segment.match(name);
            if (match) for(const key in match.groups)params[key] = match.groups[key];
        }
    }
    return params;
}
/**
* Add a route to the router context.
*/ function addRoute(ctx, method = "", path, data) {
    method = method.toUpperCase();
    if (path.charCodeAt(0) !== 47) path = `/${path}`;
    path = path.replace(/\\:/g, "%3A");
    const segments = splitPath(path);
    let node = ctx.root;
    let _unnamedParamIndex = 0;
    const paramsMap = [];
    const paramsRegexp = [];
    for(let i = 0; i < segments.length; i++){
        let segment = segments[i];
        if (segment.startsWith("**")) {
            if (!node.wildcard) node.wildcard = {
                key: "**"
            };
            node = node.wildcard;
            paramsMap.push([
                -(i + 1),
                segment.split(":")[1] || "_",
                segment.length === 2
            ]);
            break;
        }
        if (segment === "*" || segment.includes(":")) {
            if (!node.param) node.param = {
                key: "*"
            };
            node = node.param;
            if (segment === "*") paramsMap.push([
                i,
                `_${_unnamedParamIndex++}`,
                true
            ]);
            else if (segment.includes(":", 1)) {
                const regexp = getParamRegexp(segment);
                paramsRegexp[i] = regexp;
                node.hasRegexParam = true;
                paramsMap.push([
                    i,
                    regexp,
                    false
                ]);
            } else paramsMap.push([
                i,
                segment.slice(1),
                false
            ]);
            continue;
        }
        if (segment === "\\*") segment = segments[i] = "*";
        else if (segment === "\\*\\*") segment = segments[i] = "**";
        const child = node.static?.[segment];
        if (child) node = child;
        else {
            const staticNode = {
                key: segment
            };
            if (!node.static) node.static = new NullProtoObj();
            node.static[segment] = staticNode;
            node = staticNode;
        }
    }
    const hasParams = paramsMap.length > 0;
    if (!node.methods) node.methods = new NullProtoObj();
    node.methods[method] ??= [];
    node.methods[method].push({
        data: data || null,
        paramsRegexp,
        paramsMap: hasParams ? paramsMap : void 0
    });
    if (!hasParams) ctx.static["/" + segments.join("/")] = node;
}
function getParamRegexp(segment) {
    const regex = segment.replace(/:(\w+)/g, (_, id)=>`(?<${id}>[^/]+)`).replace(/\./g, "\\.");
    return /* @__PURE__ */ new RegExp(`^${regex}$`);
}
/**
* Find a route by path.
*/ function findRoute(ctx, method = "", path, opts) {
    if (path.charCodeAt(path.length - 1) === 47) path = path.slice(0, -1);
    const staticNode = ctx.static[path];
    if (staticNode && staticNode.methods) {
        const staticMatch = staticNode.methods[method] || staticNode.methods[""];
        if (staticMatch !== void 0) return staticMatch[0];
    }
    const segments = splitPath(path);
    const match = _lookupTree(ctx, ctx.root, method, segments, 0)?.[0];
    if (match === void 0) return;
    if (opts?.params === false) return match;
    return {
        data: match.data,
        params: match.paramsMap ? getMatchParams(segments, match.paramsMap) : void 0
    };
}
function _lookupTree(ctx, node, method, segments, index) {
    if (index === segments.length) {
        if (node.methods) {
            const match = node.methods[method] || node.methods[""];
            if (match) return match;
        }
        if (node.param && node.param.methods) {
            const match = node.param.methods[method] || node.param.methods[""];
            if (match) {
                const pMap = match[0].paramsMap;
                if (pMap?.[pMap?.length - 1]?.[2]) return match;
            }
        }
        if (node.wildcard && node.wildcard.methods) {
            const match = node.wildcard.methods[method] || node.wildcard.methods[""];
            if (match) {
                const pMap = match[0].paramsMap;
                if (pMap?.[pMap?.length - 1]?.[2]) return match;
            }
        }
        return;
    }
    const segment = segments[index];
    if (node.static) {
        const staticChild = node.static[segment];
        if (staticChild) {
            const match = _lookupTree(ctx, staticChild, method, segments, index + 1);
            if (match) return match;
        }
    }
    if (node.param) {
        const match = _lookupTree(ctx, node.param, method, segments, index + 1);
        if (match) {
            if (node.param.hasRegexParam) {
                const exactMatch = match.find((m)=>m.paramsRegexp[index]?.test(segment)) || match.find((m)=>!m.paramsRegexp[index]);
                return exactMatch ? [
                    exactMatch
                ] : void 0;
            }
            return match;
        }
    }
    if (node.wildcard && node.wildcard.methods) return node.wildcard.methods[method] || node.wildcard.methods[""];
}
/**
* Remove a route from the router context.
*/ function removeRoute(ctx, method, path) {
    const segments = splitPath(path);
    return _remove(ctx.root, method || "", segments, 0);
}
function _remove(node, method, segments, index) {
    if (index === segments.length) {
        if (node.methods && method in node.methods) {
            delete node.methods[method];
            if (Object.keys(node.methods).length === 0) node.methods = void 0;
        }
        return;
    }
    const segment = segments[index];
    if (segment === "*") {
        if (node.param) {
            _remove(node.param, method, segments, index + 1);
            if (_isEmptyNode(node.param)) node.param = void 0;
        }
        return;
    }
    if (segment.startsWith("**")) {
        if (node.wildcard) {
            _remove(node.wildcard, method, segments, index + 1);
            if (_isEmptyNode(node.wildcard)) node.wildcard = void 0;
        }
        return;
    }
    const childNode = node.static?.[segment];
    if (childNode) {
        _remove(childNode, method, segments, index + 1);
        if (_isEmptyNode(childNode)) {
            delete node.static[segment];
            if (Object.keys(node.static).length === 0) node.static = void 0;
        }
    }
}
function _isEmptyNode(node) {
    return node.methods === void 0 && node.static === void 0 && node.param === void 0 && node.wildcard === void 0;
}
/**
* Find all route patterns that match the given path.
*/ function findAllRoutes(ctx, method = "", path, opts) {
    if (path.charCodeAt(path.length - 1) === 47) path = path.slice(0, -1);
    const segments = splitPath(path);
    const matches = _findAll(ctx, ctx.root, method, segments, 0);
    if (opts?.params === false) return matches;
    return matches.map((m)=>{
        return {
            data: m.data,
            params: m.paramsMap ? getMatchParams(segments, m.paramsMap) : void 0
        };
    });
}
function _findAll(ctx, node, method, segments, index, matches = []) {
    const segment = segments[index];
    if (node.wildcard && node.wildcard.methods) {
        const match = node.wildcard.methods[method] || node.wildcard.methods[""];
        if (match) matches.push(...match);
    }
    if (node.param) {
        _findAll(ctx, node.param, method, segments, index + 1, matches);
        if (index === segments.length && node.param.methods) {
            const match = node.param.methods[method] || node.param.methods[""];
            if (match) {
                const pMap = match[0].paramsMap;
                if (pMap?.[pMap?.length - 1]?.[2]) matches.push(...match);
            }
        }
    }
    const staticChild = node.static?.[segment];
    if (staticChild) _findAll(ctx, staticChild, method, segments, index + 1, matches);
    if (index === segments.length && node.methods) {
        const match = node.methods[method] || node.methods[""];
        if (match) matches.push(...match);
    }
    return matches;
}
function routeToRegExp(route = "/") {
    const reSegments = [];
    let idCtr = 0;
    for (const segment of route.split("/")){
        if (!segment) continue;
        if (segment === "*") reSegments.push(`(?<_${idCtr++}>[^/]*)`);
        else if (segment.startsWith("**")) reSegments.push(segment === "**" ? "?(?<_>.*)" : `?(?<${segment.slice(3)}>.+)`);
        else if (segment.includes(":")) reSegments.push(segment.replace(/:(\w+)/g, (_, id)=>`(?<${id}>[^/]+)`).replace(/\./g, "\\."));
        else reSegments.push(segment);
    }
    return /* @__PURE__ */ new RegExp(`^/${reSegments.join("/")}/?$`);
}
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-fetch/fetch/dist/index.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BetterFetchError": (()=>BetterFetchError),
    "ValidationError": (()=>ValidationError),
    "applySchemaPlugin": (()=>applySchemaPlugin),
    "betterFetch": (()=>betterFetch),
    "bodyParser": (()=>bodyParser),
    "createFetch": (()=>createFetch),
    "createRetryStrategy": (()=>createRetryStrategy),
    "createSchema": (()=>createSchema),
    "detectContentType": (()=>detectContentType),
    "detectResponseType": (()=>detectResponseType),
    "getBody": (()=>getBody),
    "getFetch": (()=>getFetch),
    "getHeaders": (()=>getHeaders),
    "getMethod": (()=>getMethod),
    "getTimeout": (()=>getTimeout),
    "getURL": (()=>getURL),
    "initializePlugins": (()=>initializePlugins),
    "isFunction": (()=>isFunction),
    "isJSONParsable": (()=>isJSONParsable),
    "isJSONSerializable": (()=>isJSONSerializable),
    "isPayloadMethod": (()=>isPayloadMethod),
    "isRouteMethod": (()=>isRouteMethod),
    "jsonParse": (()=>jsonParse),
    "methods": (()=>methods),
    "parseStandardSchema": (()=>parseStandardSchema)
});
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)){
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};
var __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b));
// src/error.ts
var BetterFetchError = class extends Error {
    constructor(status, statusText, error){
        super(statusText || status.toString(), {
            cause: error
        });
        this.status = status;
        this.statusText = statusText;
        this.error = error;
        Error.captureStackTrace(this, this.constructor);
    }
};
// src/plugins.ts
var initializePlugins = async (url, options)=>{
    var _a, _b, _c, _d, _e, _f;
    let opts = options || {};
    const hooks = {
        onRequest: [
            options == null ? void 0 : options.onRequest
        ],
        onResponse: [
            options == null ? void 0 : options.onResponse
        ],
        onSuccess: [
            options == null ? void 0 : options.onSuccess
        ],
        onError: [
            options == null ? void 0 : options.onError
        ],
        onRetry: [
            options == null ? void 0 : options.onRetry
        ]
    };
    if (!options || !(options == null ? void 0 : options.plugins)) {
        return {
            url,
            options: opts,
            hooks
        };
    }
    for (const plugin of (options == null ? void 0 : options.plugins) || []){
        if (plugin.init) {
            const pluginRes = await ((_a = plugin.init) == null ? void 0 : _a.call(plugin, url.toString(), options));
            opts = pluginRes.options || opts;
            url = pluginRes.url;
        }
        hooks.onRequest.push((_b = plugin.hooks) == null ? void 0 : _b.onRequest);
        hooks.onResponse.push((_c = plugin.hooks) == null ? void 0 : _c.onResponse);
        hooks.onSuccess.push((_d = plugin.hooks) == null ? void 0 : _d.onSuccess);
        hooks.onError.push((_e = plugin.hooks) == null ? void 0 : _e.onError);
        hooks.onRetry.push((_f = plugin.hooks) == null ? void 0 : _f.onRetry);
    }
    return {
        url,
        options: opts,
        hooks
    };
};
// src/retry.ts
var LinearRetryStrategy = class {
    constructor(options){
        this.options = options;
    }
    shouldAttemptRetry(attempt, response) {
        if (this.options.shouldRetry) {
            return Promise.resolve(attempt < this.options.attempts && this.options.shouldRetry(response));
        }
        return Promise.resolve(attempt < this.options.attempts);
    }
    getDelay() {
        return this.options.delay;
    }
};
var ExponentialRetryStrategy = class {
    constructor(options){
        this.options = options;
    }
    shouldAttemptRetry(attempt, response) {
        if (this.options.shouldRetry) {
            return Promise.resolve(attempt < this.options.attempts && this.options.shouldRetry(response));
        }
        return Promise.resolve(attempt < this.options.attempts);
    }
    getDelay(attempt) {
        const delay = Math.min(this.options.maxDelay, this.options.baseDelay * 2 ** attempt);
        return delay;
    }
};
function createRetryStrategy(options) {
    if (typeof options === "number") {
        return new LinearRetryStrategy({
            type: "linear",
            attempts: options,
            delay: 1e3
        });
    }
    switch(options.type){
        case "linear":
            return new LinearRetryStrategy(options);
        case "exponential":
            return new ExponentialRetryStrategy(options);
        default:
            throw new Error("Invalid retry strategy");
    }
}
// src/auth.ts
var getAuthHeader = async (options)=>{
    const headers = {};
    const getValue = async (value)=>typeof value === "function" ? await value() : value;
    if (options == null ? void 0 : options.auth) {
        if (options.auth.type === "Bearer") {
            const token = await getValue(options.auth.token);
            if (!token) {
                return headers;
            }
            headers["authorization"] = `Bearer ${token}`;
        } else if (options.auth.type === "Basic") {
            const [username, password] = await Promise.all([
                getValue(options.auth.username),
                getValue(options.auth.password)
            ]);
            if (!username || !password) {
                return headers;
            }
            headers["authorization"] = `Basic ${btoa(`${username}:${password}`)}`;
        } else if (options.auth.type === "Custom") {
            const [prefix, value] = await Promise.all([
                getValue(options.auth.prefix),
                getValue(options.auth.value)
            ]);
            if (!value) {
                return headers;
            }
            headers["authorization"] = `${prefix != null ? prefix : ""} ${value}`;
        }
    }
    return headers;
};
// src/utils.ts
var JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(request) {
    const _contentType = request.headers.get("content-type");
    const textTypes = /* @__PURE__ */ new Set([
        "image/svg",
        "application/xml",
        "application/xhtml",
        "application/html"
    ]);
    if (!_contentType) {
        return "json";
    }
    const contentType = _contentType.split(";").shift() || "";
    if (JSON_RE.test(contentType)) {
        return "json";
    }
    if (textTypes.has(contentType) || contentType.startsWith("text/")) {
        return "text";
    }
    return "blob";
}
function isJSONParsable(value) {
    try {
        JSON.parse(value);
        return true;
    } catch (error) {
        return false;
    }
}
function isJSONSerializable(value) {
    if (value === void 0) {
        return false;
    }
    const t = typeof value;
    if (t === "string" || t === "number" || t === "boolean" || t === null) {
        return true;
    }
    if (t !== "object") {
        return false;
    }
    if (Array.isArray(value)) {
        return true;
    }
    if (value.buffer) {
        return false;
    }
    return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
function jsonParse(text) {
    try {
        return JSON.parse(text);
    } catch (error) {
        return text;
    }
}
function isFunction(value) {
    return typeof value === "function";
}
function getFetch(options) {
    if (options == null ? void 0 : options.customFetchImpl) {
        return options.customFetchImpl;
    }
    if (typeof globalThis !== "undefined" && isFunction(globalThis.fetch)) {
        return globalThis.fetch;
    }
    if ("undefined" !== "undefined" && isFunction(window.fetch)) {
        "TURBOPACK unreachable";
    }
    throw new Error("No fetch implementation found");
}
function isPayloadMethod(method) {
    if (!method) {
        return false;
    }
    const payloadMethod = [
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    return payloadMethod.includes(method.toUpperCase());
}
function isRouteMethod(method) {
    const routeMethod = [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    if (!method) {
        return false;
    }
    return routeMethod.includes(method.toUpperCase());
}
async function getHeaders(opts) {
    const headers = new Headers(opts == null ? void 0 : opts.headers);
    const authHeader = await getAuthHeader(opts);
    for (const [key, value] of Object.entries(authHeader || {})){
        headers.set(key, value);
    }
    if (!headers.has("content-type")) {
        const t = detectContentType(opts == null ? void 0 : opts.body);
        if (t) {
            headers.set("content-type", t);
        }
    }
    return headers;
}
function getURL(url, options) {
    if (url.startsWith("@")) {
        const m = url.toString().split("@")[1].split("/")[0];
        if (methods.includes(m)) {
            url = url.replace(`@${m}/`, "/");
        }
    }
    let _url;
    try {
        if (url.startsWith("http")) {
            _url = url;
        } else {
            let baseURL = options == null ? void 0 : options.baseURL;
            if (baseURL && !(baseURL == null ? void 0 : baseURL.endsWith("/"))) {
                baseURL = baseURL + "/";
            }
            if (url.startsWith("/")) {
                _url = new URL(url.substring(1), baseURL);
            } else {
                _url = new URL(url, options == null ? void 0 : options.baseURL);
            }
        }
    } catch (e) {
        if (e instanceof TypeError) {
            if (!(options == null ? void 0 : options.baseURL)) {
                throw TypeError(`Invalid URL ${url}. Are you passing in a relative url but not setting the baseURL?`);
            }
            throw TypeError(`Invalid URL ${url}. Please validate that you are passing the correct input.`);
        }
        throw e;
    }
    if (options == null ? void 0 : options.params) {
        if (Array.isArray(options == null ? void 0 : options.params)) {
            const params = (options == null ? void 0 : options.params) ? Array.isArray(options.params) ? `/${options.params.join("/")}` : `/${Object.values(options.params).join("/")}` : "";
            _url = _url.toString().split("/:")[0];
            _url = `${_url.toString()}${params}`;
        } else {
            for (const [key, value] of Object.entries(options == null ? void 0 : options.params)){
                _url = _url.toString().replace(`:${key}`, String(value));
            }
        }
    }
    const __url = new URL(_url);
    const queryParams = options == null ? void 0 : options.query;
    if (queryParams) {
        for (const [key, value] of Object.entries(queryParams)){
            __url.searchParams.append(key, String(value));
        }
    }
    return __url;
}
function detectContentType(body) {
    if (isJSONSerializable(body)) {
        return "application/json";
    }
    return null;
}
function getBody(options) {
    if (!(options == null ? void 0 : options.body)) {
        return null;
    }
    const headers = new Headers(options == null ? void 0 : options.headers);
    if (isJSONSerializable(options.body) && !headers.has("content-type")) {
        for (const [key, value] of Object.entries(options == null ? void 0 : options.body)){
            if (value instanceof Date) {
                options.body[key] = value.toISOString();
            }
        }
        return JSON.stringify(options.body);
    }
    if (headers.has("content-type") && headers.get("content-type") === "application/x-www-form-urlencoded") {
        if (isJSONSerializable(options.body)) {
            return new URLSearchParams(options.body).toString();
        }
        return options.body;
    }
    return options.body;
}
function getMethod(url, options) {
    var _a;
    if (options == null ? void 0 : options.method) {
        return options.method.toUpperCase();
    }
    if (url.startsWith("@")) {
        const pMethod = (_a = url.split("@")[1]) == null ? void 0 : _a.split("/")[0];
        if (!methods.includes(pMethod)) {
            return (options == null ? void 0 : options.body) ? "POST" : "GET";
        }
        return pMethod.toUpperCase();
    }
    return (options == null ? void 0 : options.body) ? "POST" : "GET";
}
function getTimeout(options, controller) {
    let abortTimeout;
    if (!(options == null ? void 0 : options.signal) && (options == null ? void 0 : options.timeout)) {
        abortTimeout = setTimeout(()=>controller == null ? void 0 : controller.abort(), options == null ? void 0 : options.timeout);
    }
    return {
        abortTimeout,
        clearTimeout: ()=>{
            if (abortTimeout) {
                clearTimeout(abortTimeout);
            }
        }
    };
}
function bodyParser(data, responseType) {
    if (responseType === "json") {
        return JSON.parse(data);
    }
    return data;
}
var ValidationError = class _ValidationError extends Error {
    constructor(issues, message){
        super(message || JSON.stringify(issues, null, 2));
        this.issues = issues;
        Object.setPrototypeOf(this, _ValidationError.prototype);
    }
};
async function parseStandardSchema(schema, input) {
    const result = await schema["~standard"].validate(input);
    if (result.issues) {
        throw new ValidationError(result.issues);
    }
    return result.value;
}
// src/create-fetch/schema.ts
var methods = [
    "get",
    "post",
    "put",
    "patch",
    "delete"
];
var createSchema = (schema, config)=>{
    return {
        schema,
        config
    };
};
// src/create-fetch/index.ts
var applySchemaPlugin = (config)=>({
        id: "apply-schema",
        name: "Apply Schema",
        version: "1.0.0",
        async init (url, options) {
            var _a, _b, _c, _d;
            const schema = ((_b = (_a = config.plugins) == null ? void 0 : _a.find((plugin)=>{
                var _a2;
                return ((_a2 = plugin.schema) == null ? void 0 : _a2.config) ? url.startsWith(plugin.schema.config.baseURL || "") || url.startsWith(plugin.schema.config.prefix || "") : false;
            })) == null ? void 0 : _b.schema) || config.schema;
            if (schema) {
                let urlKey = url;
                if ((_c = schema.config) == null ? void 0 : _c.prefix) {
                    if (urlKey.startsWith(schema.config.prefix)) {
                        urlKey = urlKey.replace(schema.config.prefix, "");
                        if (schema.config.baseURL) {
                            url = url.replace(schema.config.prefix, schema.config.baseURL);
                        }
                    }
                }
                if ((_d = schema.config) == null ? void 0 : _d.baseURL) {
                    if (urlKey.startsWith(schema.config.baseURL)) {
                        urlKey = urlKey.replace(schema.config.baseURL, "");
                    }
                }
                const keySchema = schema.schema[urlKey];
                if (keySchema) {
                    let opts = __spreadProps(__spreadValues({}, options), {
                        method: keySchema.method,
                        output: keySchema.output
                    });
                    if (!(options == null ? void 0 : options.disableValidation)) {
                        opts = __spreadProps(__spreadValues({}, opts), {
                            body: keySchema.input ? await parseStandardSchema(keySchema.input, options == null ? void 0 : options.body) : options == null ? void 0 : options.body,
                            params: keySchema.params ? await parseStandardSchema(keySchema.params, options == null ? void 0 : options.params) : options == null ? void 0 : options.params,
                            query: keySchema.query ? await parseStandardSchema(keySchema.query, options == null ? void 0 : options.query) : options == null ? void 0 : options.query
                        });
                    }
                    return {
                        url,
                        options: opts
                    };
                }
            }
            return {
                url,
                options
            };
        }
    });
var createFetch = (config)=>{
    async function $fetch(url, options) {
        const opts = __spreadProps(__spreadValues(__spreadValues({}, config), options), {
            plugins: [
                ...(config == null ? void 0 : config.plugins) || [],
                applySchemaPlugin(config || {}),
                ...(options == null ? void 0 : options.plugins) || []
            ]
        });
        if (config == null ? void 0 : config.catchAllError) {
            try {
                return await betterFetch(url, opts);
            } catch (error) {
                return {
                    data: null,
                    error: {
                        status: 500,
                        statusText: "Fetch Error",
                        message: "Fetch related error. Captured by catchAllError option. See error property for more details.",
                        error
                    }
                };
            }
        }
        return await betterFetch(url, opts);
    }
    return $fetch;
};
// src/url.ts
function getURL2(url, option) {
    const { baseURL, params, query } = option || {
        query: {},
        params: {},
        baseURL: ""
    };
    let basePath = url.startsWith("http") ? url.split("/").slice(0, 3).join("/") : baseURL || "";
    if (url.startsWith("@")) {
        const m = url.toString().split("@")[1].split("/")[0];
        if (methods.includes(m)) {
            url = url.replace(`@${m}/`, "/");
        }
    }
    if (!basePath.endsWith("/")) basePath += "/";
    let [path, urlQuery] = url.replace(basePath, "").split("?");
    const queryParams = new URLSearchParams(urlQuery);
    for (const [key, value] of Object.entries(query || {})){
        if (value == null) continue;
        let serializedValue;
        if (typeof value === "string") {
            serializedValue = value;
        } else if (Array.isArray(value)) {
            for (const val of value){
                queryParams.append(key, val);
            }
            continue;
        } else {
            serializedValue = JSON.stringify(value);
        }
        queryParams.set(key, serializedValue);
    }
    if (params) {
        if (Array.isArray(params)) {
            const paramPaths = path.split("/").filter((p)=>p.startsWith(":"));
            for (const [index, key] of paramPaths.entries()){
                const value = params[index];
                path = path.replace(key, value);
            }
        } else {
            for (const [key, value] of Object.entries(params)){
                path = path.replace(`:${key}`, String(value));
            }
        }
    }
    path = path.split("/").map(encodeURIComponent).join("/");
    if (path.startsWith("/")) path = path.slice(1);
    let queryParamString = queryParams.toString();
    queryParamString = queryParamString.length > 0 ? `?${queryParamString}`.replace(/\+/g, "%20") : "";
    if (!basePath.startsWith("http")) {
        return `${basePath}${path}${queryParamString}`;
    }
    const _url = new URL(`${path}${queryParamString}`, basePath);
    return _url;
}
// src/fetch.ts
var betterFetch = async (url, options)=>{
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { hooks, url: __url, options: opts } = await initializePlugins(url, options);
    const fetch = getFetch(opts);
    const controller = new AbortController();
    const signal = (_a = opts.signal) != null ? _a : controller.signal;
    const _url = getURL2(__url, opts);
    const body = getBody(opts);
    const headers = await getHeaders(opts);
    const method = getMethod(__url, opts);
    let context = __spreadProps(__spreadValues({}, opts), {
        url: _url,
        headers,
        body,
        method,
        signal
    });
    for (const onRequest of hooks.onRequest){
        if (onRequest) {
            const res = await onRequest(context);
            if (typeof res === "object" && res !== null) {
                context = res;
            }
        }
    }
    if ("pipeTo" in context && typeof context.pipeTo === "function" || typeof ((_b = options == null ? void 0 : options.body) == null ? void 0 : _b.pipe) === "function") {
        if (!("duplex" in context)) {
            context.duplex = "half";
        }
    }
    const { clearTimeout: clearTimeout2 } = getTimeout(opts, controller);
    let response = await fetch(context.url, context);
    clearTimeout2();
    const responseContext = {
        response,
        request: context
    };
    for (const onResponse of hooks.onResponse){
        if (onResponse) {
            const r = await onResponse(__spreadProps(__spreadValues({}, responseContext), {
                response: ((_c = options == null ? void 0 : options.hookOptions) == null ? void 0 : _c.cloneResponse) ? response.clone() : response
            }));
            if (r instanceof Response) {
                response = r;
            } else if (typeof r === "object" && r !== null) {
                response = r.response;
            }
        }
    }
    if (response.ok) {
        const hasBody = context.method !== "HEAD";
        if (!hasBody) {
            return {
                data: "",
                error: null
            };
        }
        const responseType = detectResponseType(response);
        const successContext = {
            data: null,
            response,
            request: context
        };
        if (responseType === "json" || responseType === "text") {
            const text = await response.text();
            const parser2 = (_d = context.jsonParser) != null ? _d : jsonParse;
            successContext.data = await parser2(text);
        } else {
            successContext.data = await response[responseType]();
        }
        if (context == null ? void 0 : context.output) {
            if (context.output && !context.disableValidation) {
                successContext.data = await parseStandardSchema(context.output, successContext.data);
            }
        }
        for (const onSuccess of hooks.onSuccess){
            if (onSuccess) {
                await onSuccess(__spreadProps(__spreadValues({}, successContext), {
                    response: ((_e = options == null ? void 0 : options.hookOptions) == null ? void 0 : _e.cloneResponse) ? response.clone() : response
                }));
            }
        }
        if (options == null ? void 0 : options.throw) {
            return successContext.data;
        }
        return {
            data: successContext.data,
            error: null
        };
    }
    const parser = (_f = options == null ? void 0 : options.jsonParser) != null ? _f : jsonParse;
    const responseText = await response.text();
    const isJSONResponse = isJSONParsable(responseText);
    const errorObject = isJSONResponse ? await parser(responseText) : null;
    const errorContext = {
        response,
        responseText,
        request: context,
        error: __spreadProps(__spreadValues({}, errorObject), {
            status: response.status,
            statusText: response.statusText
        })
    };
    for (const onError of hooks.onError){
        if (onError) {
            await onError(__spreadProps(__spreadValues({}, errorContext), {
                response: ((_g = options == null ? void 0 : options.hookOptions) == null ? void 0 : _g.cloneResponse) ? response.clone() : response
            }));
        }
    }
    if (options == null ? void 0 : options.retry) {
        const retryStrategy = createRetryStrategy(options.retry);
        const _retryAttempt = (_h = options.retryAttempt) != null ? _h : 0;
        if (await retryStrategy.shouldAttemptRetry(_retryAttempt, response)) {
            for (const onRetry of hooks.onRetry){
                if (onRetry) {
                    await onRetry(responseContext);
                }
            }
            const delay = retryStrategy.getDelay(_retryAttempt);
            await new Promise((resolve)=>setTimeout(resolve, delay));
            return await betterFetch(url, __spreadProps(__spreadValues({}, options), {
                retryAttempt: _retryAttempt + 1
            }));
        }
    }
    if (options == null ? void 0 : options.throw) {
        throw new BetterFetchError(response.status, response.statusText, isJSONResponse ? errorObject : responseText);
    }
    return {
        data: null,
        error: __spreadProps(__spreadValues({}, errorObject), {
            status: response.status,
            statusText: response.statusText
        })
    };
};
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/defu/dist/defu.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createDefu": (()=>createDefu),
    "default": (()=>defu),
    "defu": (()=>defu),
    "defuArrayFn": (()=>defuArrayFn),
    "defuFn": (()=>defuFn)
});
function isPlainObject(value) {
    if (value === null || typeof value !== "object") {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
        return false;
    }
    if (Symbol.iterator in value) {
        return false;
    }
    if (Symbol.toStringTag in value) {
        return Object.prototype.toString.call(value) === "[object Module]";
    }
    return true;
}
function _defu(baseObject, defaults, namespace = ".", merger) {
    if (!isPlainObject(defaults)) {
        return _defu(baseObject, {}, namespace, merger);
    }
    const object = Object.assign({}, defaults);
    for(const key in baseObject){
        if (key === "__proto__" || key === "constructor") {
            continue;
        }
        const value = baseObject[key];
        if (value === null || value === void 0) {
            continue;
        }
        if (merger && merger(object, key, value, namespace)) {
            continue;
        }
        if (Array.isArray(value) && Array.isArray(object[key])) {
            object[key] = [
                ...value,
                ...object[key]
            ];
        } else if (isPlainObject(value) && isPlainObject(object[key])) {
            object[key] = _defu(value, object[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
        } else {
            object[key] = value;
        }
    }
    return object;
}
function createDefu(merger) {
    return (...arguments_)=>// eslint-disable-next-line unicorn/no-array-reduce
        arguments_.reduce((p, c)=>_defu(p, c, "", merger), {});
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue)=>{
    if (object[key] !== void 0 && typeof currentValue === "function") {
        object[key] = currentValue(object[key]);
        return true;
    }
});
const defuArrayFn = createDefu((object, key, currentValue)=>{
    if (Array.isArray(object[key]) && typeof currentValue === "function") {
        object[key] = currentValue(object[key]);
        return true;
    }
});
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/telemetry/dist/index.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createTelemetry": (()=>createTelemetry),
    "getTelemetryAuthConfig": (()=>getTelemetryAuthConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/env/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/env/env-impl.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$logger$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/env/logger.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-fetch/fetch/dist/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/base64.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/hash.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/random.mjs [middleware-edge] (ecmascript)");
;
;
;
;
;
//#region src/detectors/detect-auth-config.ts
function getTelemetryAuthConfig(options, context) {
    return {
        database: context?.database,
        adapter: context?.adapter,
        emailVerification: {
            sendVerificationEmail: !!options.emailVerification?.sendVerificationEmail,
            sendOnSignUp: !!options.emailVerification?.sendOnSignUp,
            sendOnSignIn: !!options.emailVerification?.sendOnSignIn,
            autoSignInAfterVerification: !!options.emailVerification?.autoSignInAfterVerification,
            expiresIn: options.emailVerification?.expiresIn,
            onEmailVerification: !!options.emailVerification?.onEmailVerification,
            afterEmailVerification: !!options.emailVerification?.afterEmailVerification
        },
        emailAndPassword: {
            enabled: !!options.emailAndPassword?.enabled,
            disableSignUp: !!options.emailAndPassword?.disableSignUp,
            requireEmailVerification: !!options.emailAndPassword?.requireEmailVerification,
            maxPasswordLength: options.emailAndPassword?.maxPasswordLength,
            minPasswordLength: options.emailAndPassword?.minPasswordLength,
            sendResetPassword: !!options.emailAndPassword?.sendResetPassword,
            resetPasswordTokenExpiresIn: options.emailAndPassword?.resetPasswordTokenExpiresIn,
            onPasswordReset: !!options.emailAndPassword?.onPasswordReset,
            password: {
                hash: !!options.emailAndPassword?.password?.hash,
                verify: !!options.emailAndPassword?.password?.verify
            },
            autoSignIn: !!options.emailAndPassword?.autoSignIn,
            revokeSessionsOnPasswordReset: !!options.emailAndPassword?.revokeSessionsOnPasswordReset
        },
        socialProviders: Object.keys(options.socialProviders || {}).map((p)=>{
            const provider = options.socialProviders?.[p];
            if (!provider) return {};
            return {
                id: p,
                mapProfileToUser: !!provider.mapProfileToUser,
                disableDefaultScope: !!provider.disableDefaultScope,
                disableIdTokenSignIn: !!provider.disableIdTokenSignIn,
                disableImplicitSignUp: provider.disableImplicitSignUp,
                disableSignUp: provider.disableSignUp,
                getUserInfo: !!provider.getUserInfo,
                overrideUserInfoOnSignIn: !!provider.overrideUserInfoOnSignIn,
                prompt: provider.prompt,
                verifyIdToken: !!provider.verifyIdToken,
                scope: provider.scope,
                refreshAccessToken: !!provider.refreshAccessToken
            };
        }),
        plugins: options.plugins?.map((p)=>p.id.toString()),
        user: {
            modelName: options.user?.modelName,
            fields: options.user?.fields,
            additionalFields: options.user?.additionalFields,
            changeEmail: {
                enabled: options.user?.changeEmail?.enabled,
                sendChangeEmailVerification: !!options.user?.changeEmail?.sendChangeEmailVerification
            }
        },
        verification: {
            modelName: options.verification?.modelName,
            disableCleanup: options.verification?.disableCleanup,
            fields: options.verification?.fields
        },
        session: {
            modelName: options.session?.modelName,
            additionalFields: options.session?.additionalFields,
            cookieCache: {
                enabled: options.session?.cookieCache?.enabled,
                maxAge: options.session?.cookieCache?.maxAge,
                strategy: options.session?.cookieCache?.strategy
            },
            disableSessionRefresh: options.session?.disableSessionRefresh,
            expiresIn: options.session?.expiresIn,
            fields: options.session?.fields,
            freshAge: options.session?.freshAge,
            preserveSessionInDatabase: options.session?.preserveSessionInDatabase,
            storeSessionInDatabase: options.session?.storeSessionInDatabase,
            updateAge: options.session?.updateAge
        },
        account: {
            modelName: options.account?.modelName,
            fields: options.account?.fields,
            encryptOAuthTokens: options.account?.encryptOAuthTokens,
            updateAccountOnSignIn: options.account?.updateAccountOnSignIn,
            accountLinking: {
                enabled: options.account?.accountLinking?.enabled,
                trustedProviders: options.account?.accountLinking?.trustedProviders,
                updateUserInfoOnLink: options.account?.accountLinking?.updateUserInfoOnLink,
                allowUnlinkingAll: options.account?.accountLinking?.allowUnlinkingAll
            }
        },
        hooks: {
            after: !!options.hooks?.after,
            before: !!options.hooks?.before
        },
        secondaryStorage: !!options.secondaryStorage,
        advanced: {
            cookiePrefix: !!options.advanced?.cookiePrefix,
            cookies: !!options.advanced?.cookies,
            crossSubDomainCookies: {
                domain: !!options.advanced?.crossSubDomainCookies?.domain,
                enabled: options.advanced?.crossSubDomainCookies?.enabled,
                additionalCookies: options.advanced?.crossSubDomainCookies?.additionalCookies
            },
            database: {
                useNumberId: !!options.advanced?.database?.useNumberId || options.advanced?.database?.generateId === "serial",
                generateId: options.advanced?.database?.generateId,
                defaultFindManyLimit: options.advanced?.database?.defaultFindManyLimit
            },
            useSecureCookies: options.advanced?.useSecureCookies,
            ipAddress: {
                disableIpTracking: options.advanced?.ipAddress?.disableIpTracking,
                ipAddressHeaders: options.advanced?.ipAddress?.ipAddressHeaders
            },
            disableCSRFCheck: options.advanced?.disableCSRFCheck,
            cookieAttributes: {
                expires: options.advanced?.defaultCookieAttributes?.expires,
                secure: options.advanced?.defaultCookieAttributes?.secure,
                sameSite: options.advanced?.defaultCookieAttributes?.sameSite,
                domain: !!options.advanced?.defaultCookieAttributes?.domain,
                path: options.advanced?.defaultCookieAttributes?.path,
                httpOnly: options.advanced?.defaultCookieAttributes?.httpOnly
            }
        },
        trustedOrigins: options.trustedOrigins?.length,
        rateLimit: {
            storage: options.rateLimit?.storage,
            modelName: options.rateLimit?.modelName,
            window: options.rateLimit?.window,
            customStorage: !!options.rateLimit?.customStorage,
            enabled: options.rateLimit?.enabled,
            max: options.rateLimit?.max
        },
        onAPIError: {
            errorURL: options.onAPIError?.errorURL,
            onError: !!options.onAPIError?.onError,
            throw: options.onAPIError?.throw
        },
        logger: {
            disabled: options.logger?.disabled,
            level: options.logger?.level,
            log: !!options.logger?.log
        },
        databaseHooks: {
            user: {
                create: {
                    after: !!options.databaseHooks?.user?.create?.after,
                    before: !!options.databaseHooks?.user?.create?.before
                },
                update: {
                    after: !!options.databaseHooks?.user?.update?.after,
                    before: !!options.databaseHooks?.user?.update?.before
                }
            },
            session: {
                create: {
                    after: !!options.databaseHooks?.session?.create?.after,
                    before: !!options.databaseHooks?.session?.create?.before
                },
                update: {
                    after: !!options.databaseHooks?.session?.update?.after,
                    before: !!options.databaseHooks?.session?.update?.before
                }
            },
            account: {
                create: {
                    after: !!options.databaseHooks?.account?.create?.after,
                    before: !!options.databaseHooks?.account?.create?.before
                },
                update: {
                    after: !!options.databaseHooks?.account?.update?.after,
                    before: !!options.databaseHooks?.account?.update?.before
                }
            },
            verification: {
                create: {
                    after: !!options.databaseHooks?.verification?.create?.after,
                    before: !!options.databaseHooks?.verification?.create?.before
                },
                update: {
                    after: !!options.databaseHooks?.verification?.update?.after,
                    before: !!options.databaseHooks?.verification?.update?.before
                }
            }
        }
    };
}
//#endregion
//#region src/utils/package-json.ts
let packageJSONCache;
async function readRootPackageJson() {
    if (packageJSONCache) return packageJSONCache;
    try {
        const cwd = typeof process !== "undefined" && typeof process.cwd === "function" ? process.cwd() : "";
        if (!cwd) return void 0;
        const importRuntime$1 = (m)=>Function("mm", "return import(mm)")(m);
        const [{ default: fs }, { default: path }] = await Promise.all([
            importRuntime$1("fs/promises"),
            importRuntime$1("path")
        ]);
        const raw = await fs.readFile(path.join(cwd, "package.json"), "utf-8");
        packageJSONCache = JSON.parse(raw);
        return packageJSONCache;
    } catch  {}
}
async function getPackageVersion(pkg) {
    if (packageJSONCache) return packageJSONCache.dependencies?.[pkg] || packageJSONCache.devDependencies?.[pkg] || packageJSONCache.peerDependencies?.[pkg];
    try {
        const cwd = typeof process !== "undefined" && typeof process.cwd === "function" ? process.cwd() : "";
        if (!cwd) throw new Error("no-cwd");
        const importRuntime$1 = (m)=>Function("mm", "return import(mm)")(m);
        const [{ default: fs }, { default: path }] = await Promise.all([
            importRuntime$1("fs/promises"),
            importRuntime$1("path")
        ]);
        const pkgJsonPath = path.join(cwd, "node_modules", pkg, "package.json");
        const raw = await fs.readFile(pkgJsonPath, "utf-8");
        return JSON.parse(raw).version || await getVersionFromLocalPackageJson(pkg) || void 0;
    } catch  {}
    return await getVersionFromLocalPackageJson(pkg);
}
async function getVersionFromLocalPackageJson(pkg) {
    const json = await readRootPackageJson();
    if (!json) return void 0;
    return ({
        ...json.dependencies,
        ...json.devDependencies,
        ...json.peerDependencies
    })[pkg];
}
async function getNameFromLocalPackageJson() {
    return (await readRootPackageJson())?.name;
}
//#endregion
//#region src/detectors/detect-database.ts
const DATABASES = {
    pg: "postgresql",
    mysql: "mysql",
    mariadb: "mariadb",
    sqlite3: "sqlite",
    "better-sqlite3": "sqlite",
    "@prisma/client": "prisma",
    mongoose: "mongodb",
    mongodb: "mongodb",
    "drizzle-orm": "drizzle"
};
async function detectDatabase() {
    for (const [pkg, name] of Object.entries(DATABASES)){
        const version = await getPackageVersion(pkg);
        if (version) return {
            name,
            version
        };
    }
}
//#endregion
//#region src/detectors/detect-framework.ts
const FRAMEWORKS = {
    next: "next",
    nuxt: "nuxt",
    "@remix-run/server-runtime": "remix",
    astro: "astro",
    "@sveltejs/kit": "sveltekit",
    "solid-start": "solid-start",
    "tanstack-start": "tanstack-start",
    hono: "hono",
    express: "express",
    elysia: "elysia",
    expo: "expo"
};
async function detectFramework() {
    for (const [pkg, name] of Object.entries(FRAMEWORKS)){
        const version = await getPackageVersion(pkg);
        if (version) return {
            name,
            version
        };
    }
}
//#endregion
//#region src/detectors/detect-project-info.ts
function detectPackageManager() {
    const userAgent = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].npm_config_user_agent;
    if (!userAgent) return;
    const pmSpec = userAgent.split(" ")[0];
    const separatorPos = pmSpec.lastIndexOf("/");
    const name = pmSpec.substring(0, separatorPos);
    return {
        name: name === "npminstall" ? "cnpm" : name,
        version: pmSpec.substring(separatorPos + 1)
    };
}
//#endregion
//#region src/utils/import-util.ts
const importRuntime = (m)=>{
    return Function("mm", "return import(mm)")(m);
};
//#endregion
//#region src/detectors/detect-system-info.ts
function getVendor() {
    const hasAny = (...keys)=>keys.some((k)=>Boolean(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"][k]));
    if (hasAny("CF_PAGES", "CF_PAGES_URL", "CF_ACCOUNT_ID") || typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers") return "cloudflare";
    if (hasAny("VERCEL", "VERCEL_URL", "VERCEL_ENV")) return "vercel";
    if (hasAny("NETLIFY", "NETLIFY_URL")) return "netlify";
    if (hasAny("RENDER", "RENDER_URL", "RENDER_INTERNAL_HOSTNAME", "RENDER_SERVICE_ID")) return "render";
    if (hasAny("AWS_LAMBDA_FUNCTION_NAME", "AWS_EXECUTION_ENV", "LAMBDA_TASK_ROOT")) return "aws";
    if (hasAny("GOOGLE_CLOUD_FUNCTION_NAME", "GOOGLE_CLOUD_PROJECT", "GCP_PROJECT", "K_SERVICE")) return "gcp";
    if (hasAny("AZURE_FUNCTION_NAME", "FUNCTIONS_WORKER_RUNTIME", "WEBSITE_INSTANCE_ID", "WEBSITE_SITE_NAME")) return "azure";
    if (hasAny("DENO_DEPLOYMENT_ID", "DENO_REGION")) return "deno-deploy";
    if (hasAny("FLY_APP_NAME", "FLY_REGION", "FLY_ALLOC_ID")) return "fly-io";
    if (hasAny("RAILWAY_STATIC_URL", "RAILWAY_ENVIRONMENT_NAME")) return "railway";
    if (hasAny("DYNO", "HEROKU_APP_NAME")) return "heroku";
    if (hasAny("DO_DEPLOYMENT_ID", "DO_APP_NAME", "DIGITALOCEAN")) return "digitalocean";
    if (hasAny("KOYEB", "KOYEB_DEPLOYMENT_ID", "KOYEB_APP_NAME")) return "koyeb";
    return null;
}
async function detectSystemInfo() {
    try {
        if (getVendor() === "cloudflare") return "cloudflare";
        const os = await importRuntime("os");
        const cpus = os.cpus();
        return {
            deploymentVendor: getVendor(),
            systemPlatform: os.platform(),
            systemRelease: os.release(),
            systemArchitecture: os.arch(),
            cpuCount: cpus.length,
            cpuModel: cpus.length ? cpus[0].model : null,
            cpuSpeed: cpus.length ? cpus[0].speed : null,
            memory: os.totalmem(),
            isWSL: await isWsl(),
            isDocker: await isDocker(),
            isTTY: typeof process !== "undefined" && process.stdout ? process.stdout.isTTY : null
        };
    } catch  {
        return {
            systemPlatform: null,
            systemRelease: null,
            systemArchitecture: null,
            cpuCount: null,
            cpuModel: null,
            cpuSpeed: null,
            memory: null,
            isWSL: null,
            isDocker: null,
            isTTY: null
        };
    }
}
let isDockerCached;
async function hasDockerEnv() {
    if (getVendor() === "cloudflare") return false;
    try {
        (await importRuntime("fs")).statSync("/.dockerenv");
        return true;
    } catch  {
        return false;
    }
}
async function hasDockerCGroup() {
    if (getVendor() === "cloudflare") return false;
    try {
        return (await importRuntime("fs")).readFileSync("/proc/self/cgroup", "utf8").includes("docker");
    } catch  {
        return false;
    }
}
async function isDocker() {
    if (getVendor() === "cloudflare") return false;
    if (isDockerCached === void 0) isDockerCached = await hasDockerEnv() || await hasDockerCGroup();
    return isDockerCached;
}
async function isWsl() {
    try {
        if (getVendor() === "cloudflare") return false;
        if (typeof process === "undefined" || process?.platform !== "linux") return false;
        const fs = await importRuntime("fs");
        if ((await importRuntime("os")).release().toLowerCase().includes("microsoft")) {
            if (await isInsideContainer()) return false;
            return true;
        }
        return fs.readFileSync("/proc/version", "utf8").toLowerCase().includes("microsoft") ? !await isInsideContainer() : false;
    } catch  {
        return false;
    }
}
let isInsideContainerCached;
const hasContainerEnv = async ()=>{
    if (getVendor() === "cloudflare") return false;
    try {
        (await importRuntime("fs")).statSync("/run/.containerenv");
        return true;
    } catch  {
        return false;
    }
};
async function isInsideContainer() {
    if (isInsideContainerCached === void 0) isInsideContainerCached = await hasContainerEnv() || await isDocker();
    return isInsideContainerCached;
}
function isCI() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].CI !== "false" && ("BUILD_ID" in __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"] || "BUILD_NUMBER" in __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"] || "CI" in __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"] || "CI_APP_ID" in __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"] || "CI_BUILD_ID" in __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"] || "CI_BUILD_NUMBER" in __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"] || "CI_NAME" in __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"] || "CONTINUOUS_INTEGRATION" in __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"] || "RUN_ID" in __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"]);
}
//#endregion
//#region src/detectors/detect-runtime.ts
function detectRuntime() {
    if (typeof Deno !== "undefined") return {
        name: "deno",
        version: Deno?.version?.deno ?? null
    };
    if (typeof Bun !== "undefined") return {
        name: "bun",
        version: Bun?.version ?? null
    };
    if (typeof process !== "undefined" && process?.versions?.node) return {
        name: "node",
        version: process.versions.node ?? null
    };
    return {
        name: "edge",
        version: null
    };
}
function detectEnvironment() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvVar"])("NODE_ENV") === "production" ? "production" : isCI() ? "ci" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isTest"])() ? "test" : "development";
}
//#endregion
//#region src/utils/hash.ts
async function hashToBase64(data) {
    const buffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createHash"])("SHA-256").digest(data);
    return __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["base64"].encode(buffer);
}
//#endregion
//#region src/utils/id.ts
const generateId = (size)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createRandomStringGenerator"])("a-z", "A-Z", "0-9")(size || 32);
};
//#endregion
//#region src/project-id.ts
let projectIdCached = null;
async function getProjectId(baseUrl) {
    if (projectIdCached) return projectIdCached;
    const projectName = await getNameFromLocalPackageJson();
    if (projectName) {
        projectIdCached = await hashToBase64(baseUrl ? baseUrl + projectName : projectName);
        return projectIdCached;
    }
    if (baseUrl) {
        projectIdCached = await hashToBase64(baseUrl);
        return projectIdCached;
    }
    projectIdCached = generateId(32);
    return projectIdCached;
}
//#endregion
//#region src/index.ts
async function createTelemetry(options, context) {
    const debugEnabled = options.telemetry?.debug || (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getBooleanEnvVar"])("BETTER_AUTH_TELEMETRY_DEBUG", false);
    const TELEMETRY_ENDPOINT = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ENV"].BETTER_AUTH_TELEMETRY_ENDPOINT;
    const track = async (event)=>{
        if (context?.customTrack) await context.customTrack(event).catch(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$logger$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["logger"].error);
        else if (debugEnabled) __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$logger$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["logger"].info("telemetry event", JSON.stringify(event, null, 2));
        else await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["betterFetch"])(TELEMETRY_ENDPOINT, {
            method: "POST",
            body: event
        }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$logger$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["logger"].error);
    };
    const isEnabled = async ()=>{
        const telemetryEnabled = options.telemetry?.enabled !== void 0 ? options.telemetry.enabled : false;
        return ((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getBooleanEnvVar"])("BETTER_AUTH_TELEMETRY", false) || telemetryEnabled) && (context?.skipTestCheck || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isTest"])());
    };
    const enabled = await isEnabled();
    let anonymousId;
    if (enabled) {
        anonymousId = await getProjectId(options.baseURL);
        track({
            type: "init",
            payload: {
                config: getTelemetryAuthConfig(options, context),
                runtime: detectRuntime(),
                database: await detectDatabase(),
                framework: await detectFramework(),
                environment: detectEnvironment(),
                systemInfo: await detectSystemInfo(),
                packageManager: detectPackageManager()
            },
            anonymousId
        });
    }
    return {
        publish: async (event)=>{
            if (!enabled) return;
            if (!anonymousId) anonymousId = await getProjectId(options.baseURL);
            await track({
                type: event.type,
                payload: event.payload,
                anonymousId
            });
        }
    };
}
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/api.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/** Error thrown by the client. */ __turbopack_context__.s({
    "LibsqlError": (()=>LibsqlError)
});
class LibsqlError extends Error {
    /** Machine-readable error code. */ code;
    /** Raw numeric error code */ rawCode;
    constructor(message, code, rawCode, cause){
        if (code !== undefined) {
            message = `${code}: ${message}`;
        }
        super(message, {
            cause
        });
        this.code = code;
        this.rawCode = rawCode;
        this.name = "LibsqlError";
    }
}
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/uri.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// URI parser based on RFC 3986
// We can't use the standard `URL` object, because we want to support relative `file:` URLs like
// `file:relative/path/database.db`, which are not correct according to RFC 8089, which standardizes the
// `file` scheme.
__turbopack_context__.s({
    "encodeBaseUrl": (()=>encodeBaseUrl),
    "parseUri": (()=>parseUri)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/api.js [middleware-edge] (ecmascript)");
;
function parseUri(text) {
    const match = URI_RE.exec(text);
    if (match === null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"](`The URL '${text}' is not in a valid format`, "URL_INVALID");
    }
    const groups = match.groups;
    const scheme = groups["scheme"];
    const authority = groups["authority"] !== undefined ? parseAuthority(groups["authority"]) : undefined;
    const path = percentDecode(groups["path"]);
    const query = groups["query"] !== undefined ? parseQuery(groups["query"]) : undefined;
    const fragment = groups["fragment"] !== undefined ? percentDecode(groups["fragment"]) : undefined;
    return {
        scheme,
        authority,
        path,
        query,
        fragment
    };
}
const URI_RE = (()=>{
    const SCHEME = "(?<scheme>[A-Za-z][A-Za-z.+-]*)";
    const AUTHORITY = "(?<authority>[^/?#]*)";
    const PATH = "(?<path>[^?#]*)";
    const QUERY = "(?<query>[^#]*)";
    const FRAGMENT = "(?<fragment>.*)";
    return new RegExp(`^${SCHEME}:(//${AUTHORITY})?${PATH}(\\?${QUERY})?(#${FRAGMENT})?$`, "su");
})();
function parseAuthority(text) {
    const match = AUTHORITY_RE.exec(text);
    if (match === null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"]("The authority part of the URL is not in a valid format", "URL_INVALID");
    }
    const groups = match.groups;
    const host = percentDecode(groups["host_br"] ?? groups["host"]);
    const port = groups["port"] ? parseInt(groups["port"], 10) : undefined;
    const userinfo = groups["username"] !== undefined ? {
        username: percentDecode(groups["username"]),
        password: groups["password"] !== undefined ? percentDecode(groups["password"]) : undefined
    } : undefined;
    return {
        host,
        port,
        userinfo
    };
}
const AUTHORITY_RE = (()=>{
    return new RegExp(`^((?<username>[^:]*)(:(?<password>.*))?@)?((?<host>[^:\\[\\]]*)|(\\[(?<host_br>[^\\[\\]]*)\\]))(:(?<port>[0-9]*))?$`, "su");
})();
// Query string is parsed as application/x-www-form-urlencoded according to the Web URL standard:
// https://url.spec.whatwg.org/#urlencoded-parsing
function parseQuery(text) {
    const sequences = text.split("&");
    const pairs = [];
    for (const sequence of sequences){
        if (sequence === "") {
            continue;
        }
        let key;
        let value;
        const splitIdx = sequence.indexOf("=");
        if (splitIdx < 0) {
            key = sequence;
            value = "";
        } else {
            key = sequence.substring(0, splitIdx);
            value = sequence.substring(splitIdx + 1);
        }
        pairs.push({
            key: percentDecode(key.replaceAll("+", " ")),
            value: percentDecode(value.replaceAll("+", " "))
        });
    }
    return {
        pairs
    };
}
function percentDecode(text) {
    try {
        return decodeURIComponent(text);
    } catch (e) {
        if (e instanceof URIError) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"](`URL component has invalid percent encoding: ${e}`, "URL_INVALID", undefined, e);
        }
        throw e;
    }
}
function encodeBaseUrl(scheme, authority, path) {
    if (authority === undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"](`URL with scheme ${JSON.stringify(scheme + ":")} requires authority (the "//" part)`, "URL_INVALID");
    }
    const schemeText = `${scheme}:`;
    const hostText = encodeHost(authority.host);
    const portText = encodePort(authority.port);
    const userinfoText = encodeUserinfo(authority.userinfo);
    const authorityText = `//${userinfoText}${hostText}${portText}`;
    let pathText = path.split("/").map(encodeURIComponent).join("/");
    if (pathText !== "" && !pathText.startsWith("/")) {
        pathText = "/" + pathText;
    }
    return new URL(`${schemeText}${authorityText}${pathText}`);
}
function encodeHost(host) {
    return host.includes(":") ? `[${encodeURI(host)}]` : encodeURI(host);
}
function encodePort(port) {
    return port !== undefined ? `:${port}` : "";
}
function encodeUserinfo(userinfo) {
    if (userinfo === undefined) {
        return "";
    }
    const usernameText = encodeURIComponent(userinfo.username);
    const passwordText = userinfo.password !== undefined ? `:${encodeURIComponent(userinfo.password)}` : "";
    return `${usernameText}${passwordText}@`;
}
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/util.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ResultSetImpl": (()=>ResultSetImpl),
    "supportedUrlLink": (()=>supportedUrlLink),
    "transactionModeToBegin": (()=>transactionModeToBegin)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$js$2d$base64$2f$base64$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/js-base64/base64.mjs [middleware-edge] (ecmascript)");
;
const supportedUrlLink = "https://github.com/libsql/libsql-client-ts#supported-urls";
function transactionModeToBegin(mode) {
    if (mode === "write") {
        return "BEGIN IMMEDIATE";
    } else if (mode === "read") {
        return "BEGIN TRANSACTION READONLY";
    } else if (mode === "deferred") {
        return "BEGIN DEFERRED";
    } else {
        throw RangeError('Unknown transaction mode, supported values are "write", "read" and "deferred"');
    }
}
class ResultSetImpl {
    columns;
    columnTypes;
    rows;
    rowsAffected;
    lastInsertRowid;
    constructor(columns, columnTypes, rows, rowsAffected, lastInsertRowid){
        this.columns = columns;
        this.columnTypes = columnTypes;
        this.rows = rows;
        this.rowsAffected = rowsAffected;
        this.lastInsertRowid = lastInsertRowid;
    }
    toJSON() {
        return {
            columns: this.columns,
            columnTypes: this.columnTypes,
            rows: this.rows.map(rowToJson),
            rowsAffected: this.rowsAffected,
            lastInsertRowid: this.lastInsertRowid !== undefined ? "" + this.lastInsertRowid : null
        };
    }
}
function rowToJson(row) {
    return Array.prototype.map.call(row, valueToJson);
}
function valueToJson(value) {
    if (typeof value === "bigint") {
        return "" + value;
    } else if (value instanceof ArrayBuffer) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$js$2d$base64$2f$base64$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Base64"].fromUint8Array(new Uint8Array(value));
    } else {
        return value;
    }
}
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/config.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "expandConfig": (()=>expandConfig),
    "isInMemoryConfig": (()=>isInMemoryConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/api.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$uri$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/uri.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/util.js [middleware-edge] (ecmascript)");
;
;
;
const inMemoryMode = ":memory:";
function isInMemoryConfig(config) {
    return config.scheme === "file" && (config.path === ":memory:" || config.path.startsWith(":memory:?"));
}
function expandConfig(config, preferHttp) {
    if (typeof config !== "object") {
        // produce a reasonable error message in the common case where users type
        // `createClient("libsql://...")` instead of `createClient({url: "libsql://..."})`
        throw new TypeError(`Expected client configuration as object, got ${typeof config}`);
    }
    let { url, authToken, tls, intMode, concurrency } = config;
    // fill simple defaults right here
    concurrency = Math.max(0, concurrency || 20);
    intMode ??= "number";
    let connectionQueryParams = []; // recognized query parameters which we sanitize through white list of valid key-value pairs
    // convert plain :memory: url to URI format to make logic more uniform
    if (url === inMemoryMode) {
        url = "file::memory:";
    }
    // parse url parameters first and override config with update values
    const uri = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$uri$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUri"])(url);
    const originalUriScheme = uri.scheme.toLowerCase();
    const isInMemoryMode = originalUriScheme === "file" && uri.path === inMemoryMode && uri.authority === undefined;
    let queryParamsDef;
    if (isInMemoryMode) {
        queryParamsDef = {
            cache: {
                values: [
                    "shared",
                    "private"
                ],
                update: (key, value)=>connectionQueryParams.push(`${key}=${value}`)
            }
        };
    } else {
        queryParamsDef = {
            tls: {
                values: [
                    "0",
                    "1"
                ],
                update: (_, value)=>tls = value === "1"
            },
            authToken: {
                update: (_, value)=>authToken = value
            }
        };
    }
    for (const { key, value } of uri.query?.pairs ?? []){
        if (!Object.hasOwn(queryParamsDef, key)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"](`Unsupported URL query parameter ${JSON.stringify(key)}`, "URL_PARAM_NOT_SUPPORTED");
        }
        const queryParamDef = queryParamsDef[key];
        if (queryParamDef.values !== undefined && !queryParamDef.values.includes(value)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"](`Unknown value for the "${key}" query argument: ${JSON.stringify(value)}. Supported values are: [${queryParamDef.values.map((x)=>'"' + x + '"').join(", ")}]`, "URL_INVALID");
        }
        if (queryParamDef.update !== undefined) {
            queryParamDef?.update(key, value);
        }
    }
    // fill complex defaults & validate config
    const connectionQueryParamsString = connectionQueryParams.length === 0 ? "" : `?${connectionQueryParams.join("&")}`;
    const path = uri.path + connectionQueryParamsString;
    let scheme;
    if (originalUriScheme === "libsql") {
        if (tls === false) {
            if (uri.authority?.port === undefined) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"]('A "libsql:" URL with ?tls=0 must specify an explicit port', "URL_INVALID");
            }
            scheme = preferHttp ? "http" : "ws";
        } else {
            scheme = preferHttp ? "https" : "wss";
        }
    } else {
        scheme = originalUriScheme;
    }
    if (scheme === "http" || scheme === "ws") {
        tls ??= false;
    } else {
        tls ??= true;
    }
    if (scheme !== "http" && scheme !== "ws" && scheme !== "https" && scheme !== "wss" && scheme !== "file") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"]('The client supports only "libsql:", "wss:", "ws:", "https:", "http:" and "file:" URLs, ' + `got ${JSON.stringify(uri.scheme + ":")}. ` + `For more information, please read ${__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["supportedUrlLink"]}`, "URL_SCHEME_NOT_SUPPORTED");
    }
    if (intMode !== "number" && intMode !== "bigint" && intMode !== "string") {
        throw new TypeError(`Invalid value for intMode, expected "number", "bigint" or "string", got ${JSON.stringify(intMode)}`);
    }
    if (uri.fragment !== undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"](`URL fragments are not supported: ${JSON.stringify("#" + uri.fragment)}`, "URL_INVALID");
    }
    if (isInMemoryMode) {
        return {
            scheme: "file",
            tls: false,
            path,
            intMode,
            concurrency,
            syncUrl: config.syncUrl,
            syncInterval: config.syncInterval,
            readYourWrites: config.readYourWrites,
            offline: config.offline,
            fetch: config.fetch,
            authToken: undefined,
            encryptionKey: undefined,
            authority: undefined
        };
    }
    return {
        scheme,
        tls,
        authority: uri.authority,
        path,
        authToken,
        intMode,
        concurrency,
        encryptionKey: config.encryptionKey,
        syncUrl: config.syncUrl,
        syncInterval: config.syncInterval,
        readYourWrites: config.readYourWrites,
        offline: config.offline,
        fetch: config.fetch
    };
}
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/js-base64/base64.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 *  base64.ts
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 *
 * @author Dan Kogai (https://github.com/dankogai)
 */ __turbopack_context__.s({
    "Base64": (()=>gBase64),
    "VERSION": (()=>VERSION),
    "atob": (()=>_atob),
    "atobPolyfill": (()=>atobPolyfill),
    "btoa": (()=>_btoa),
    "btoaPolyfill": (()=>btoaPolyfill),
    "btou": (()=>btou),
    "decode": (()=>decode),
    "encode": (()=>encode),
    "encodeURI": (()=>encodeURI),
    "encodeURL": (()=>encodeURI),
    "extendBuiltins": (()=>extendBuiltins),
    "extendString": (()=>extendString),
    "extendUint8Array": (()=>extendUint8Array),
    "fromBase64": (()=>decode),
    "fromUint8Array": (()=>fromUint8Array),
    "isValid": (()=>isValid),
    "toBase64": (()=>encode),
    "toUint8Array": (()=>toUint8Array),
    "utob": (()=>utob),
    "version": (()=>version)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
const version = '3.7.8';
/**
 * @deprecated use lowercase `version`.
 */ const VERSION = version;
const _hasBuffer = typeof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"] === 'function';
const _TD = typeof TextDecoder === 'function' ? new TextDecoder() : undefined;
const _TE = typeof TextEncoder === 'function' ? new TextEncoder() : undefined;
const b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const b64chs = Array.prototype.slice.call(b64ch);
const b64tab = ((a)=>{
    let tab = {};
    a.forEach((c, i)=>tab[c] = i);
    return tab;
})(b64chs);
const b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
const _fromCC = String.fromCharCode.bind(String);
const _U8Afrom = typeof Uint8Array.from === 'function' ? Uint8Array.from.bind(Uint8Array) : (it)=>new Uint8Array(Array.prototype.slice.call(it, 0));
const _mkUriSafe = (src)=>src.replace(/=/g, '').replace(/[+\/]/g, (m0)=>m0 == '+' ? '-' : '_');
const _tidyB64 = (s)=>s.replace(/[^A-Za-z0-9\+\/]/g, '');
/**
 * polyfill version of `btoa`
 */ const btoaPolyfill = (bin)=>{
    // console.log('polyfilled');
    let u32, c0, c1, c2, asc = '';
    const pad = bin.length % 3;
    for(let i = 0; i < bin.length;){
        if ((c0 = bin.charCodeAt(i++)) > 255 || (c1 = bin.charCodeAt(i++)) > 255 || (c2 = bin.charCodeAt(i++)) > 255) throw new TypeError('invalid character found');
        u32 = c0 << 16 | c1 << 8 | c2;
        asc += b64chs[u32 >> 18 & 63] + b64chs[u32 >> 12 & 63] + b64chs[u32 >> 6 & 63] + b64chs[u32 & 63];
    }
    return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
};
/**
 * does what `window.btoa` of web browsers do.
 * @param {String} bin binary string
 * @returns {string} Base64-encoded string
 */ const _btoa = typeof btoa === 'function' ? (bin)=>btoa(bin) : _hasBuffer ? (bin)=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(bin, 'binary').toString('base64') : btoaPolyfill;
const _fromUint8Array = _hasBuffer ? (u8a)=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(u8a).toString('base64') : (u8a)=>{
    // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
    const maxargs = 0x1000;
    let strs = [];
    for(let i = 0, l = u8a.length; i < l; i += maxargs){
        strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
    }
    return _btoa(strs.join(''));
};
/**
 * converts a Uint8Array to a Base64 string.
 * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
 * @returns {string} Base64 string
 */ const fromUint8Array = (u8a, urlsafe = false)=>urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const utob = (src: string) => unescape(encodeURIComponent(src));
// reverting good old fationed regexp
const cb_utob = (c)=>{
    if (c.length < 2) {
        var cc = c.charCodeAt(0);
        return cc < 0x80 ? c : cc < 0x800 ? _fromCC(0xc0 | cc >>> 6) + _fromCC(0x80 | cc & 0x3f) : _fromCC(0xe0 | cc >>> 12 & 0x0f) + _fromCC(0x80 | cc >>> 6 & 0x3f) + _fromCC(0x80 | cc & 0x3f);
    } else {
        var cc = 0x10000 + (c.charCodeAt(0) - 0xD800) * 0x400 + (c.charCodeAt(1) - 0xDC00);
        return _fromCC(0xf0 | cc >>> 18 & 0x07) + _fromCC(0x80 | cc >>> 12 & 0x3f) + _fromCC(0x80 | cc >>> 6 & 0x3f) + _fromCC(0x80 | cc & 0x3f);
    }
};
const re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-8 string
 * @returns {string} UTF-16 string
 */ const utob = (u)=>u.replace(re_utob, cb_utob);
//
const _encode = _hasBuffer ? (s)=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(s, 'utf8').toString('base64') : _TE ? (s)=>_fromUint8Array(_TE.encode(s)) : (s)=>_btoa(utob(s));
/**
 * converts a UTF-8-encoded string to a Base64 string.
 * @param {boolean} [urlsafe] if `true` make the result URL-safe
 * @returns {string} Base64 string
 */ const encode = (src, urlsafe = false)=>urlsafe ? _mkUriSafe(_encode(src)) : _encode(src);
/**
 * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
 * @returns {string} Base64 string
 */ const encodeURI = (src)=>encode(src, true);
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const btou = (src: string) => decodeURIComponent(escape(src));
// reverting good old fationed regexp
const re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
const cb_btou = (cccc)=>{
    switch(cccc.length){
        case 4:
            var cp = (0x07 & cccc.charCodeAt(0)) << 18 | (0x3f & cccc.charCodeAt(1)) << 12 | (0x3f & cccc.charCodeAt(2)) << 6 | 0x3f & cccc.charCodeAt(3), offset = cp - 0x10000;
            return _fromCC((offset >>> 10) + 0xD800) + _fromCC((offset & 0x3FF) + 0xDC00);
        case 3:
            return _fromCC((0x0f & cccc.charCodeAt(0)) << 12 | (0x3f & cccc.charCodeAt(1)) << 6 | 0x3f & cccc.charCodeAt(2));
        default:
            return _fromCC((0x1f & cccc.charCodeAt(0)) << 6 | 0x3f & cccc.charCodeAt(1));
    }
};
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-16 string
 * @returns {string} UTF-8 string
 */ const btou = (b)=>b.replace(re_btou, cb_btou);
/**
 * polyfill version of `atob`
 */ const atobPolyfill = (asc)=>{
    // console.log('polyfilled');
    asc = asc.replace(/\s+/g, '');
    if (!b64re.test(asc)) throw new TypeError('malformed base64.');
    asc += '=='.slice(2 - (asc.length & 3));
    let u24, r1, r2;
    let binArray = []; // use array to avoid minor gc in loop
    for(let i = 0; i < asc.length;){
        u24 = b64tab[asc.charAt(i++)] << 18 | b64tab[asc.charAt(i++)] << 12 | (r1 = b64tab[asc.charAt(i++)]) << 6 | (r2 = b64tab[asc.charAt(i++)]);
        if (r1 === 64) {
            binArray.push(_fromCC(u24 >> 16 & 255));
        } else if (r2 === 64) {
            binArray.push(_fromCC(u24 >> 16 & 255, u24 >> 8 & 255));
        } else {
            binArray.push(_fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255));
        }
    }
    return binArray.join('');
};
/**
 * does what `window.atob` of web browsers do.
 * @param {String} asc Base64-encoded string
 * @returns {string} binary string
 */ const _atob = typeof atob === 'function' ? (asc)=>atob(_tidyB64(asc)) : _hasBuffer ? (asc)=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(asc, 'base64').toString('binary') : atobPolyfill;
//
const _toUint8Array = _hasBuffer ? (a)=>_U8Afrom(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(a, 'base64')) : (a)=>_U8Afrom(_atob(a).split('').map((c)=>c.charCodeAt(0)));
/**
 * converts a Base64 string to a Uint8Array.
 */ const toUint8Array = (a)=>_toUint8Array(_unURI(a));
//
const _decode = _hasBuffer ? (a)=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(a, 'base64').toString('utf8') : _TD ? (a)=>_TD.decode(_toUint8Array(a)) : (a)=>btou(_atob(a));
const _unURI = (a)=>_tidyB64(a.replace(/[-_]/g, (m0)=>m0 == '-' ? '+' : '/'));
/**
 * converts a Base64 string to a UTF-8 string.
 * @param {String} src Base64 string.  Both normal and URL-safe are supported
 * @returns {string} UTF-8 string
 */ const decode = (src)=>_decode(_unURI(src));
/**
 * check if a value is a valid Base64 string
 * @param {String} src a value to check
  */ const isValid = (src)=>{
    if (typeof src !== 'string') return false;
    const s = src.replace(/\s+/g, '').replace(/={0,2}$/, '');
    return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
};
//
const _noEnum = (v)=>{
    return {
        value: v,
        enumerable: false,
        writable: true,
        configurable: true
    };
};
/**
 * extend String.prototype with relevant methods
 */ const extendString = function() {
    const _add = (name, body)=>Object.defineProperty(String.prototype, name, _noEnum(body));
    _add('fromBase64', function() {
        return decode(this);
    });
    _add('toBase64', function(urlsafe) {
        return encode(this, urlsafe);
    });
    _add('toBase64URI', function() {
        return encode(this, true);
    });
    _add('toBase64URL', function() {
        return encode(this, true);
    });
    _add('toUint8Array', function() {
        return toUint8Array(this);
    });
};
/**
 * extend Uint8Array.prototype with relevant methods
 */ const extendUint8Array = function() {
    const _add = (name, body)=>Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
    _add('toBase64', function(urlsafe) {
        return fromUint8Array(this, urlsafe);
    });
    _add('toBase64URI', function() {
        return fromUint8Array(this, true);
    });
    _add('toBase64URL', function() {
        return fromUint8Array(this, true);
    });
};
/**
 * extend Builtin prototypes with relevant methods
 */ const extendBuiltins = ()=>{
    extendString();
    extendUint8Array();
};
const gBase64 = {
    version: version,
    VERSION: VERSION,
    atob: _atob,
    atobPolyfill: atobPolyfill,
    btoa: _btoa,
    btoaPolyfill: btoaPolyfill,
    fromBase64: decode,
    toBase64: encode,
    encode: encode,
    encodeURI: encodeURI,
    encodeURL: encodeURI,
    utob: utob,
    btou: btou,
    decode: decode,
    isValid: isValid,
    fromUint8Array: fromUint8Array,
    toUint8Array: toUint8Array,
    extendString: extendString,
    extendUint8Array: extendUint8Array,
    extendBuiltins: extendBuiltins
};
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/isomorphic-ws/web.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WebSocket": (()=>_WebSocket)
});
let _WebSocket;
if (typeof WebSocket !== "undefined") {
    _WebSocket = WebSocket;
} else if (typeof global !== "undefined") {
    _WebSocket = global.WebSocket;
} else if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else if (typeof self !== "undefined") {
    _WebSocket = self.WebSocket;
}
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/isomorphic-fetch/web.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Headers": (()=>_Headers),
    "Request": (()=>_Request),
    "fetch": (()=>_fetch)
});
const _fetch = fetch;
const _Request = Request;
const _Headers = Headers;
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/hrana.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HranaTransaction": (()=>HranaTransaction),
    "executeHranaBatch": (()=>executeHranaBatch),
    "mapHranaError": (()=>mapHranaError),
    "resultSetFromHrana": (()=>resultSetFromHrana),
    "stmtToHrana": (()=>stmtToHrana)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/hrana-client/lib-esm/index.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$batch$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/hrana-client/lib-esm/batch.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$stmt$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/hrana-client/lib-esm/stmt.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/hrana-client/lib-esm/errors.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/api.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/util.js [middleware-edge] (ecmascript)");
;
;
;
class HranaTransaction {
    #mode;
    #version;
    // Promise that is resolved when the BEGIN statement completes, or `undefined` if we haven't executed the
    // BEGIN statement yet.
    #started;
    /** @private */ constructor(mode, version){
        this.#mode = mode;
        this.#version = version;
        this.#started = undefined;
    }
    execute(stmt) {
        return this.batch([
            stmt
        ]).then((results)=>results[0]);
    }
    async batch(stmts) {
        const stream = this._getStream();
        if (stream.closed) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"]("Cannot execute statements because the transaction is closed", "TRANSACTION_CLOSED");
        }
        try {
            const hranaStmts = stmts.map(stmtToHrana);
            let rowsPromises;
            if (this.#started === undefined) {
                // The transaction hasn't started yet, so we need to send the BEGIN statement in a batch with
                // `hranaStmts`.
                this._getSqlCache().apply(hranaStmts);
                const batch = stream.batch(this.#version >= 3);
                const beginStep = batch.step();
                const beginPromise = beginStep.run((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["transactionModeToBegin"])(this.#mode));
                // Execute the `hranaStmts` only if the BEGIN succeeded, to make sure that we don't execute it
                // outside of a transaction.
                let lastStep = beginStep;
                rowsPromises = hranaStmts.map((hranaStmt)=>{
                    const stmtStep = batch.step().condition(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$batch$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BatchCond"].ok(lastStep));
                    if (this.#version >= 3) {
                        // If the Hrana version supports it, make sure that we are still in a transaction
                        stmtStep.condition(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$batch$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BatchCond"].not(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$batch$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BatchCond"].isAutocommit(batch)));
                    }
                    const rowsPromise = stmtStep.query(hranaStmt);
                    rowsPromise.catch(()=>undefined); // silence Node warning
                    lastStep = stmtStep;
                    return rowsPromise;
                });
                // `this.#started` is resolved successfully only if the batch and the BEGIN statement inside
                // of the batch are both successful.
                this.#started = batch.execute().then(()=>beginPromise).then(()=>undefined);
                try {
                    await this.#started;
                } catch (e) {
                    // If the BEGIN failed, the transaction is unusable and we must close it. However, if the
                    // BEGIN suceeds and `hranaStmts` fail, the transaction is _not_ closed.
                    this.close();
                    throw e;
                }
            } else {
                if (this.#version < 3) {
                    // The transaction has started, so we must wait until the BEGIN statement completed to make
                    // sure that we don't execute `hranaStmts` outside of a transaction.
                    await this.#started;
                } else {
                // The transaction has started, but we will use `hrana.BatchCond.isAutocommit()` to make
                // sure that we don't execute `hranaStmts` outside of a transaction, so we don't have to
                // wait for `this.#started`
                }
                this._getSqlCache().apply(hranaStmts);
                const batch = stream.batch(this.#version >= 3);
                let lastStep = undefined;
                rowsPromises = hranaStmts.map((hranaStmt)=>{
                    const stmtStep = batch.step();
                    if (lastStep !== undefined) {
                        stmtStep.condition(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$batch$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BatchCond"].ok(lastStep));
                    }
                    if (this.#version >= 3) {
                        stmtStep.condition(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$batch$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BatchCond"].not(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$batch$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BatchCond"].isAutocommit(batch)));
                    }
                    const rowsPromise = stmtStep.query(hranaStmt);
                    rowsPromise.catch(()=>undefined); // silence Node warning
                    lastStep = stmtStep;
                    return rowsPromise;
                });
                await batch.execute();
            }
            const resultSets = [];
            for (const rowsPromise of rowsPromises){
                const rows = await rowsPromise;
                if (rows === undefined) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"]("Statement in a transaction was not executed, " + "probably because the transaction has been rolled back", "TRANSACTION_CLOSED");
                }
                resultSets.push(resultSetFromHrana(rows));
            }
            return resultSets;
        } catch (e) {
            throw mapHranaError(e);
        }
    }
    async executeMultiple(sql) {
        const stream = this._getStream();
        if (stream.closed) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"]("Cannot execute statements because the transaction is closed", "TRANSACTION_CLOSED");
        }
        try {
            if (this.#started === undefined) {
                // If the transaction hasn't started yet, start it now
                this.#started = stream.run((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["transactionModeToBegin"])(this.#mode)).then(()=>undefined);
                try {
                    await this.#started;
                } catch (e) {
                    this.close();
                    throw e;
                }
            } else {
                // Wait until the transaction has started
                await this.#started;
            }
            await stream.sequence(sql);
        } catch (e) {
            throw mapHranaError(e);
        }
    }
    async rollback() {
        try {
            const stream = this._getStream();
            if (stream.closed) {
                return;
            }
            if (this.#started !== undefined) {
            // We don't have to wait for the BEGIN statement to complete. If the BEGIN fails, we will
            // execute a ROLLBACK outside of an active transaction, which should be harmless.
            } else {
                // We did nothing in the transaction, so there is nothing to rollback.
                return;
            }
            // Pipeline the ROLLBACK statement and the stream close.
            const promise = stream.run("ROLLBACK").catch((e)=>{
                throw mapHranaError(e);
            });
            stream.closeGracefully();
            await promise;
        } catch (e) {
            throw mapHranaError(e);
        } finally{
            // `this.close()` may close the `hrana.Client`, which aborts all pending stream requests, so we
            // must call it _after_ we receive the ROLLBACK response.
            // Also note that the current stream should already be closed, but we need to call `this.close()`
            // anyway, because it may need to do more cleanup.
            this.close();
        }
    }
    async commit() {
        // (this method is analogous to `rollback()`)
        try {
            const stream = this._getStream();
            if (stream.closed) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"]("Cannot commit the transaction because it is already closed", "TRANSACTION_CLOSED");
            }
            if (this.#started !== undefined) {
                // Make sure to execute the COMMIT only if the BEGIN was successful.
                await this.#started;
            } else {
                return;
            }
            const promise = stream.run("COMMIT").catch((e)=>{
                throw mapHranaError(e);
            });
            stream.closeGracefully();
            await promise;
        } catch (e) {
            throw mapHranaError(e);
        } finally{
            this.close();
        }
    }
}
async function executeHranaBatch(mode, version, batch, hranaStmts, disableForeignKeys = false) {
    if (disableForeignKeys) {
        batch.step().run("PRAGMA foreign_keys=off");
    }
    const beginStep = batch.step();
    const beginPromise = beginStep.run((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["transactionModeToBegin"])(mode));
    let lastStep = beginStep;
    const stmtPromises = hranaStmts.map((hranaStmt)=>{
        const stmtStep = batch.step().condition(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$batch$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BatchCond"].ok(lastStep));
        if (version >= 3) {
            stmtStep.condition(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$batch$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BatchCond"].not(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$batch$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BatchCond"].isAutocommit(batch)));
        }
        const stmtPromise = stmtStep.query(hranaStmt);
        lastStep = stmtStep;
        return stmtPromise;
    });
    const commitStep = batch.step().condition(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$batch$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BatchCond"].ok(lastStep));
    if (version >= 3) {
        commitStep.condition(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$batch$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BatchCond"].not(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$batch$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BatchCond"].isAutocommit(batch)));
    }
    const commitPromise = commitStep.run("COMMIT");
    const rollbackStep = batch.step().condition(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$batch$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BatchCond"].not(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$batch$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BatchCond"].ok(commitStep)));
    rollbackStep.run("ROLLBACK").catch((_)=>undefined);
    if (disableForeignKeys) {
        batch.step().run("PRAGMA foreign_keys=on");
    }
    await batch.execute();
    const resultSets = [];
    await beginPromise;
    for (const stmtPromise of stmtPromises){
        const hranaRows = await stmtPromise;
        if (hranaRows === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"]("Statement in a batch was not executed, probably because the transaction has been rolled back", "TRANSACTION_CLOSED");
        }
        resultSets.push(resultSetFromHrana(hranaRows));
    }
    await commitPromise;
    return resultSets;
}
function stmtToHrana(stmt) {
    let sql;
    let args;
    if (Array.isArray(stmt)) {
        [sql, args] = stmt;
    } else if (typeof stmt === "string") {
        sql = stmt;
    } else {
        sql = stmt.sql;
        args = stmt.args;
    }
    const hranaStmt = new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$stmt$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Stmt"](sql);
    if (args) {
        if (Array.isArray(args)) {
            hranaStmt.bindIndexes(args);
        } else {
            for (const [key, value] of Object.entries(args)){
                hranaStmt.bindName(key, value);
            }
        }
    }
    return hranaStmt;
}
function resultSetFromHrana(hranaRows) {
    const columns = hranaRows.columnNames.map((c)=>c ?? "");
    const columnTypes = hranaRows.columnDecltypes.map((c)=>c ?? "");
    const rows = hranaRows.rows;
    const rowsAffected = hranaRows.affectedRowCount;
    const lastInsertRowid = hranaRows.lastInsertRowid !== undefined ? hranaRows.lastInsertRowid : undefined;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ResultSetImpl"](columns, columnTypes, rows, rowsAffected, lastInsertRowid);
}
function mapHranaError(e) {
    if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ClientError"]) {
        const code = mapHranaErrorCode(e);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"](e.message, code, undefined, e);
    }
    return e;
}
function mapHranaErrorCode(e) {
    if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ResponseError"] && e.code !== undefined) {
        return e.code;
    } else if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ProtoError"]) {
        return "HRANA_PROTO_ERROR";
    } else if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ClosedError"]) {
        return e.cause instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ClientError"] ? mapHranaErrorCode(e.cause) : "HRANA_CLOSED_ERROR";
    } else if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["WebSocketError"]) {
        return "HRANA_WEBSOCKET_ERROR";
    } else if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["HttpServerError"]) {
        return "SERVER_ERROR";
    } else if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ProtocolVersionError"]) {
        return "PROTOCOL_VERSION_ERROR";
    } else if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["InternalError"]) {
        return "INTERNAL_ERROR";
    } else {
        return "UNKNOWN";
    }
}
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/sql_cache.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SqlCache": (()=>SqlCache)
});
class SqlCache {
    #owner;
    #sqls;
    capacity;
    constructor(owner, capacity){
        this.#owner = owner;
        this.#sqls = new Lru();
        this.capacity = capacity;
    }
    // Replaces SQL strings with cached `hrana.Sql` objects in the statements in `hranaStmts`. After this
    // function returns, we guarantee that all `hranaStmts` refer to valid (not closed) `hrana.Sql` objects,
    // but _we may invalidate any other `hrana.Sql` objects_ (by closing them, thus removing them from the
    // server).
    //
    // In practice, this means that after calling this function, you can use the statements only up to the
    // first `await`, because concurrent code may also use the cache and invalidate those statements.
    apply(hranaStmts) {
        if (this.capacity <= 0) {
            return;
        }
        const usedSqlObjs = new Set();
        for (const hranaStmt of hranaStmts){
            if (typeof hranaStmt.sql !== "string") {
                continue;
            }
            const sqlText = hranaStmt.sql;
            // Stored SQL cannot exceed 5kb.
            // https://github.com/tursodatabase/libsql/blob/e9d637e051685f92b0da43849507b5ef4232fbeb/libsql-server/src/hrana/http/request.rs#L10
            if (sqlText.length >= 5000) {
                continue;
            }
            let sqlObj = this.#sqls.get(sqlText);
            if (sqlObj === undefined) {
                while(this.#sqls.size + 1 > this.capacity){
                    const [evictSqlText, evictSqlObj] = this.#sqls.peekLru();
                    if (usedSqlObjs.has(evictSqlObj)) {
                        break;
                    }
                    evictSqlObj.close();
                    this.#sqls.delete(evictSqlText);
                }
                if (this.#sqls.size + 1 <= this.capacity) {
                    sqlObj = this.#owner.storeSql(sqlText);
                    this.#sqls.set(sqlText, sqlObj);
                }
            }
            if (sqlObj !== undefined) {
                hranaStmt.sql = sqlObj;
                usedSqlObjs.add(sqlObj);
            }
        }
    }
}
class Lru {
    // This maps keys to the cache values. The entries are ordered by their last use (entires that were used
    // most recently are at the end).
    #cache;
    constructor(){
        this.#cache = new Map();
    }
    get(key) {
        const value = this.#cache.get(key);
        if (value !== undefined) {
            // move the entry to the back of the Map
            this.#cache.delete(key);
            this.#cache.set(key, value);
        }
        return value;
    }
    set(key, value) {
        this.#cache.set(key, value);
    }
    peekLru() {
        for (const entry of this.#cache.entries()){
            return entry;
        }
        return undefined;
    }
    delete(key) {
        this.#cache.delete(key);
    }
    get size() {
        return this.#cache.size;
    }
}
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/ws.js [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WsClient": (()=>WsClient),
    "WsTransaction": (()=>WsTransaction),
    "_createClient": (()=>_createClient),
    "createClient": (()=>createClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/hrana-client/lib-esm/index.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/hrana-client/lib-esm/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/hrana-client/lib-esm/errors.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/api.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/config.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/hrana.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$sql_cache$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/sql_cache.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$uri$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/uri.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/util.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$promise$2d$limit$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/promise-limit/index.js [middleware-edge] (ecmascript)");
;
;
;
;
;
;
;
;
;
function createClient(config) {
    return _createClient((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["expandConfig"])(config, false));
}
function _createClient(config) {
    if (config.scheme !== "wss" && config.scheme !== "ws") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"]('The WebSocket client supports only "libsql:", "wss:" and "ws:" URLs, ' + `got ${JSON.stringify(config.scheme + ":")}. For more information, please read ${__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["supportedUrlLink"]}`, "URL_SCHEME_NOT_SUPPORTED");
    }
    if (config.encryptionKey !== undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"]("Encryption key is not supported by the remote client.", "ENCRYPTION_KEY_NOT_SUPPORTED");
    }
    if (config.scheme === "ws" && config.tls) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"](`A "ws:" URL cannot opt into TLS by using ?tls=1`, "URL_INVALID");
    } else if (config.scheme === "wss" && !config.tls) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"](`A "wss:" URL cannot opt out of TLS by using ?tls=0`, "URL_INVALID");
    }
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$uri$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["encodeBaseUrl"])(config.scheme, config.authority, config.path);
    let client;
    try {
        client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["openWs"])(url, config.authToken);
    } catch (e) {
        if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["WebSocketUnsupportedError"]) {
            const suggestedScheme = config.scheme === "wss" ? "https" : "http";
            const suggestedUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$uri$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["encodeBaseUrl"])(suggestedScheme, config.authority, config.path);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"]("This environment does not support WebSockets, please switch to the HTTP client by using " + `a "${suggestedScheme}:" URL (${JSON.stringify(suggestedUrl)}). ` + `For more information, please read ${__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["supportedUrlLink"]}`, "WEBSOCKETS_NOT_SUPPORTED");
        }
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["mapHranaError"])(e);
    }
    return new WsClient(client, url, config.authToken, config.intMode, config.concurrency);
}
const maxConnAgeMillis = 60 * 1000;
const sqlCacheCapacity = 100;
class WsClient {
    #url;
    #authToken;
    #intMode;
    // State of the current connection. The `hrana.WsClient` inside may be closed at any moment due to an
    // asynchronous error.
    #connState;
    // If defined, this is a connection that will be used in the future, once it is ready.
    #futureConnState;
    closed;
    protocol;
    #isSchemaDatabase;
    #promiseLimitFunction;
    /** @private */ constructor(client, url, authToken, intMode, concurrency){
        this.#url = url;
        this.#authToken = authToken;
        this.#intMode = intMode;
        this.#connState = this.#openConn(client);
        this.#futureConnState = undefined;
        this.closed = false;
        this.protocol = "ws";
        this.#promiseLimitFunction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$promise$2d$limit$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(concurrency);
    }
    async limit(fn) {
        return this.#promiseLimitFunction(fn);
    }
    async execute(stmtOrSql, args) {
        let stmt;
        if (typeof stmtOrSql === "string") {
            stmt = {
                sql: stmtOrSql,
                args: args || []
            };
        } else {
            stmt = stmtOrSql;
        }
        return this.limit(async ()=>{
            const streamState = await this.#openStream();
            try {
                const hranaStmt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stmtToHrana"])(stmt);
                // Schedule all operations synchronously, so they will be pipelined and executed in a single
                // network roundtrip.
                streamState.conn.sqlCache.apply([
                    hranaStmt
                ]);
                const hranaRowsPromise = streamState.stream.query(hranaStmt);
                streamState.stream.closeGracefully();
                const hranaRowsResult = await hranaRowsPromise;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resultSetFromHrana"])(hranaRowsResult);
            } catch (e) {
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["mapHranaError"])(e);
            } finally{
                this._closeStream(streamState);
            }
        });
    }
    async batch(stmts, mode = "deferred") {
        return this.limit(async ()=>{
            const streamState = await this.#openStream();
            try {
                const normalizedStmts = stmts.map((stmt)=>{
                    if (Array.isArray(stmt)) {
                        return {
                            sql: stmt[0],
                            args: stmt[1] || []
                        };
                    }
                    return stmt;
                });
                const hranaStmts = normalizedStmts.map(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stmtToHrana"]);
                const version = await streamState.conn.client.getVersion();
                // Schedule all operations synchronously, so they will be pipelined and executed in a single
                // network roundtrip.
                streamState.conn.sqlCache.apply(hranaStmts);
                const batch = streamState.stream.batch(version >= 3);
                const resultsPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["executeHranaBatch"])(mode, version, batch, hranaStmts);
                const results = await resultsPromise;
                return results;
            } catch (e) {
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["mapHranaError"])(e);
            } finally{
                this._closeStream(streamState);
            }
        });
    }
    async migrate(stmts) {
        return this.limit(async ()=>{
            const streamState = await this.#openStream();
            try {
                const hranaStmts = stmts.map(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stmtToHrana"]);
                const version = await streamState.conn.client.getVersion();
                // Schedule all operations synchronously, so they will be pipelined and executed in a single
                // network roundtrip.
                const batch = streamState.stream.batch(version >= 3);
                const resultsPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["executeHranaBatch"])("deferred", version, batch, hranaStmts, true);
                const results = await resultsPromise;
                return results;
            } catch (e) {
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["mapHranaError"])(e);
            } finally{
                this._closeStream(streamState);
            }
        });
    }
    async transaction(mode = "write") {
        return this.limit(async ()=>{
            const streamState = await this.#openStream();
            try {
                const version = await streamState.conn.client.getVersion();
                // the BEGIN statement will be batched with the first statement on the transaction to save a
                // network roundtrip
                return new WsTransaction(this, streamState, mode, version);
            } catch (e) {
                this._closeStream(streamState);
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["mapHranaError"])(e);
            }
        });
    }
    async executeMultiple(sql) {
        return this.limit(async ()=>{
            const streamState = await this.#openStream();
            try {
                // Schedule all operations synchronously, so they will be pipelined and executed in a single
                // network roundtrip.
                const promise = streamState.stream.sequence(sql);
                streamState.stream.closeGracefully();
                await promise;
            } catch (e) {
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["mapHranaError"])(e);
            } finally{
                this._closeStream(streamState);
            }
        });
    }
    sync() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"]("sync not supported in ws mode", "SYNC_NOT_SUPPORTED");
    }
    async #openStream() {
        if (this.closed) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"]("The client is closed", "CLIENT_CLOSED");
        }
        const now = new Date();
        const ageMillis = now.valueOf() - this.#connState.openTime.valueOf();
        if (ageMillis > maxConnAgeMillis && this.#futureConnState === undefined) {
            // The existing connection is too old, let's open a new one.
            const futureConnState = this.#openConn();
            this.#futureConnState = futureConnState;
            // However, if we used `futureConnState` immediately, we would introduce additional latency,
            // because we would have to wait for the WebSocket handshake to complete, even though we may a
            // have perfectly good existing connection in `this.#connState`!
            //
            // So we wait until the `hrana.Client.getVersion()` operation completes (which happens when the
            // WebSocket hanshake completes), and only then we replace `this.#connState` with
            // `futureConnState`, which is stored in `this.#futureConnState` in the meantime.
            futureConnState.client.getVersion().then((_version)=>{
                if (this.#connState !== futureConnState) {
                    // We need to close `this.#connState` before we replace it. However, it is possible
                    // that `this.#connState` has already been replaced: see the code below.
                    if (this.#connState.streamStates.size === 0) {
                        this.#connState.client.close();
                    } else {
                    // If there are existing streams on the connection, we must not close it, because
                    // these streams would be broken. The last stream to be closed will also close the
                    // connection in `_closeStream()`.
                    }
                }
                this.#connState = futureConnState;
                this.#futureConnState = undefined;
            }, (_e)=>{
                // If the new connection could not be established, let's just ignore the error and keep
                // using the existing connection.
                this.#futureConnState = undefined;
            });
        }
        if (this.#connState.client.closed) {
            // An error happened on this connection and it has been closed. Let's try to seamlessly reconnect.
            try {
                if (this.#futureConnState !== undefined) {
                    // We are already in the process of opening a new connection, so let's just use it
                    // immediately.
                    this.#connState = this.#futureConnState;
                } else {
                    this.#connState = this.#openConn();
                }
            } catch (e) {
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["mapHranaError"])(e);
            }
        }
        const connState = this.#connState;
        try {
            // Now we wait for the WebSocket handshake to complete (if it hasn't completed yet). Note that
            // this does not increase latency, because any messages that we would send on the WebSocket before
            // the handshake would be queued until the handshake is completed anyway.
            if (connState.useSqlCache === undefined) {
                connState.useSqlCache = await connState.client.getVersion() >= 2;
                if (connState.useSqlCache) {
                    connState.sqlCache.capacity = sqlCacheCapacity;
                }
            }
            const stream = connState.client.openStream();
            stream.intMode = this.#intMode;
            const streamState = {
                conn: connState,
                stream
            };
            connState.streamStates.add(streamState);
            return streamState;
        } catch (e) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["mapHranaError"])(e);
        }
    }
    #openConn(client) {
        try {
            client ??= (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["openWs"])(this.#url, this.#authToken);
            return {
                client,
                useSqlCache: undefined,
                sqlCache: new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$sql_cache$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SqlCache"](client, 0),
                openTime: new Date(),
                streamStates: new Set()
            };
        } catch (e) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["mapHranaError"])(e);
        }
    }
    async reconnect() {
        try {
            for (const st of Array.from(this.#connState.streamStates)){
                try {
                    st.stream.close();
                } catch  {}
            }
            this.#connState.client.close();
        } catch  {}
        if (this.#futureConnState) {
            try {
                this.#futureConnState.client.close();
            } catch  {}
            this.#futureConnState = undefined;
        }
        const next = this.#openConn();
        const version = await next.client.getVersion();
        next.useSqlCache = version >= 2;
        if (next.useSqlCache) {
            next.sqlCache.capacity = sqlCacheCapacity;
        }
        this.#connState = next;
        this.closed = false;
    }
    _closeStream(streamState) {
        streamState.stream.close();
        const connState = streamState.conn;
        connState.streamStates.delete(streamState);
        if (connState.streamStates.size === 0 && connState !== this.#connState) {
            // We are not using this connection anymore and this is the last stream that was using it, so we
            // must close it now.
            connState.client.close();
        }
    }
    close() {
        this.#connState.client.close();
        this.closed = true;
        if (this.#futureConnState) {
            try {
                this.#futureConnState.client.close();
            } catch  {}
            this.#futureConnState = undefined;
        }
        this.closed = true;
    }
}
class WsTransaction extends __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["HranaTransaction"] {
    #client;
    #streamState;
    /** @private */ constructor(client, state, mode, version){
        super(mode, version);
        this.#client = client;
        this.#streamState = state;
    }
    /** @private */ _getStream() {
        return this.#streamState.stream;
    }
    /** @private */ _getSqlCache() {
        return this.#streamState.conn.sqlCache;
    }
    close() {
        this.#client._closeStream(this.#streamState);
    }
    get closed() {
        return this.#streamState.stream.closed;
    }
}
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/ws.js [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/hrana-client/lib-esm/index.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/api.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/config.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/hrana.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$sql_cache$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/sql_cache.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$uri$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/uri.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/util.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$promise$2d$limit$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/promise-limit/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$ws$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/ws.js [middleware-edge] (ecmascript) <locals>");
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/http.js [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HttpClient": (()=>HttpClient),
    "HttpTransaction": (()=>HttpTransaction),
    "_createClient": (()=>_createClient),
    "createClient": (()=>createClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/hrana-client/lib-esm/index.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/hrana-client/lib-esm/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/api.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/config.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/hrana.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$sql_cache$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/sql_cache.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$uri$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/uri.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/util.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$promise$2d$limit$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/promise-limit/index.js [middleware-edge] (ecmascript)");
;
;
;
;
;
;
;
;
;
function createClient(config) {
    return _createClient((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["expandConfig"])(config, true));
}
function _createClient(config) {
    if (config.scheme !== "https" && config.scheme !== "http") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"]('The HTTP client supports only "libsql:", "https:" and "http:" URLs, ' + `got ${JSON.stringify(config.scheme + ":")}. For more information, please read ${__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["supportedUrlLink"]}`, "URL_SCHEME_NOT_SUPPORTED");
    }
    if (config.encryptionKey !== undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"]("Encryption key is not supported by the remote client.", "ENCRYPTION_KEY_NOT_SUPPORTED");
    }
    if (config.scheme === "http" && config.tls) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"](`A "http:" URL cannot opt into TLS by using ?tls=1`, "URL_INVALID");
    } else if (config.scheme === "https" && !config.tls) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"](`A "https:" URL cannot opt out of TLS by using ?tls=0`, "URL_INVALID");
    }
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$uri$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["encodeBaseUrl"])(config.scheme, config.authority, config.path);
    return new HttpClient(url, config.authToken, config.intMode, config.fetch, config.concurrency);
}
const sqlCacheCapacity = 30;
class HttpClient {
    #client;
    protocol;
    #url;
    #intMode;
    #customFetch;
    #concurrency;
    #authToken;
    #promiseLimitFunction;
    /** @private */ constructor(url, authToken, intMode, customFetch, concurrency){
        this.#url = url;
        this.#authToken = authToken;
        this.#intMode = intMode;
        this.#customFetch = customFetch;
        this.#concurrency = concurrency;
        this.#client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["openHttp"])(this.#url, this.#authToken, this.#customFetch);
        this.#client.intMode = this.#intMode;
        this.protocol = "http";
        this.#promiseLimitFunction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$promise$2d$limit$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(this.#concurrency);
    }
    async limit(fn) {
        return this.#promiseLimitFunction(fn);
    }
    async execute(stmtOrSql, args) {
        let stmt;
        if (typeof stmtOrSql === "string") {
            stmt = {
                sql: stmtOrSql,
                args: args || []
            };
        } else {
            stmt = stmtOrSql;
        }
        return this.limit(async ()=>{
            try {
                const hranaStmt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stmtToHrana"])(stmt);
                // Pipeline all operations, so `hrana.HttpClient` can open the stream, execute the statement and
                // close the stream in a single HTTP request.
                let rowsPromise;
                const stream = this.#client.openStream();
                try {
                    rowsPromise = stream.query(hranaStmt);
                } finally{
                    stream.closeGracefully();
                }
                const rowsResult = await rowsPromise;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resultSetFromHrana"])(rowsResult);
            } catch (e) {
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["mapHranaError"])(e);
            }
        });
    }
    async batch(stmts, mode = "deferred") {
        return this.limit(async ()=>{
            try {
                const normalizedStmts = stmts.map((stmt)=>{
                    if (Array.isArray(stmt)) {
                        return {
                            sql: stmt[0],
                            args: stmt[1] || []
                        };
                    }
                    return stmt;
                });
                const hranaStmts = normalizedStmts.map(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stmtToHrana"]);
                const version = await this.#client.getVersion();
                // Pipeline all operations, so `hrana.HttpClient` can open the stream, execute the batch and
                // close the stream in a single HTTP request.
                let resultsPromise;
                const stream = this.#client.openStream();
                try {
                    // It makes sense to use a SQL cache even for a single batch, because it may contain the same
                    // statement repeated multiple times.
                    const sqlCache = new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$sql_cache$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SqlCache"](stream, sqlCacheCapacity);
                    sqlCache.apply(hranaStmts);
                    // TODO: we do not use a cursor here, because it would cause three roundtrips:
                    // 1. pipeline request to store SQL texts
                    // 2. cursor request
                    // 3. pipeline request to close the stream
                    const batch = stream.batch(false);
                    resultsPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["executeHranaBatch"])(mode, version, batch, hranaStmts);
                } finally{
                    stream.closeGracefully();
                }
                const results = await resultsPromise;
                return results;
            } catch (e) {
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["mapHranaError"])(e);
            }
        });
    }
    async migrate(stmts) {
        return this.limit(async ()=>{
            try {
                const hranaStmts = stmts.map(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stmtToHrana"]);
                const version = await this.#client.getVersion();
                // Pipeline all operations, so `hrana.HttpClient` can open the stream, execute the batch and
                // close the stream in a single HTTP request.
                let resultsPromise;
                const stream = this.#client.openStream();
                try {
                    const batch = stream.batch(false);
                    resultsPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["executeHranaBatch"])("deferred", version, batch, hranaStmts, true);
                } finally{
                    stream.closeGracefully();
                }
                const results = await resultsPromise;
                return results;
            } catch (e) {
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["mapHranaError"])(e);
            }
        });
    }
    async transaction(mode = "write") {
        return this.limit(async ()=>{
            try {
                const version = await this.#client.getVersion();
                return new HttpTransaction(this.#client.openStream(), mode, version);
            } catch (e) {
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["mapHranaError"])(e);
            }
        });
    }
    async executeMultiple(sql) {
        return this.limit(async ()=>{
            try {
                // Pipeline all operations, so `hrana.HttpClient` can open the stream, execute the sequence and
                // close the stream in a single HTTP request.
                let promise;
                const stream = this.#client.openStream();
                try {
                    promise = stream.sequence(sql);
                } finally{
                    stream.closeGracefully();
                }
                await promise;
            } catch (e) {
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["mapHranaError"])(e);
            }
        });
    }
    sync() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"]("sync not supported in http mode", "SYNC_NOT_SUPPORTED");
    }
    close() {
        this.#client.close();
    }
    async reconnect() {
        try {
            if (!this.closed) {
                // Abort in-flight ops and free resources
                this.#client.close();
            }
        } finally{
            // Recreate the underlying hrana client
            this.#client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["openHttp"])(this.#url, this.#authToken, this.#customFetch);
            this.#client.intMode = this.#intMode;
        }
    }
    get closed() {
        return this.#client.closed;
    }
}
class HttpTransaction extends __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["HranaTransaction"] {
    #stream;
    #sqlCache;
    /** @private */ constructor(stream, mode, version){
        super(mode, version);
        this.#stream = stream;
        this.#sqlCache = new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$sql_cache$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SqlCache"](stream, sqlCacheCapacity);
    }
    /** @private */ _getStream() {
        return this.#stream;
    }
    /** @private */ _getSqlCache() {
        return this.#sqlCache;
    }
    close() {
        this.#stream.close();
    }
    get closed() {
        return this.#stream.closed;
    }
}
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/http.js [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$hrana$2d$client$2f$lib$2d$esm$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/hrana-client/lib-esm/index.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/api.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/config.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$hrana$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/hrana.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$sql_cache$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/sql_cache.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$uri$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/uri.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/util.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$promise$2d$limit$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/promise-limit/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$http$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/http.js [middleware-edge] (ecmascript) <locals>");
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/web.js [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "_createClient": (()=>_createClient),
    "createClient": (()=>createClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/api.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/config.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/util.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$ws$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/ws.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$ws$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/ws.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$http$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/http.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$http$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/http.js [middleware-edge] (ecmascript) <locals>");
;
;
;
;
;
;
function createClient(config) {
    return _createClient((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["expandConfig"])(config, true));
}
function _createClient(config) {
    if (config.scheme === "ws" || config.scheme === "wss") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$ws$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_createClient"])(config);
    } else if (config.scheme === "http" || config.scheme === "https") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$http$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_createClient"])(config);
    } else {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LibsqlError"]('The client that uses Web standard APIs supports only "libsql:", "wss:", "ws:", "https:" and "http:" URLs, ' + `got ${JSON.stringify(config.scheme + ":")}. For more information, please read ${__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["supportedUrlLink"]}`, "URL_SCHEME_NOT_SUPPORTED");
    }
}
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/web.js [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/api.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/config.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$core$2f$lib$2d$esm$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/core/lib-esm/util.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$ws$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/ws.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$http$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/http.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$web$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/web.js [middleware-edge] (ecmascript) <locals>");
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/promise-limit/index.js [middleware-edge] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
function limiter(count) {
    var outstanding = 0;
    var jobs = [];
    function remove() {
        outstanding--;
        if (outstanding < count) {
            dequeue();
        }
    }
    function dequeue() {
        var job = jobs.shift();
        semaphore.queue = jobs.length;
        if (job) {
            run(job.fn).then(job.resolve).catch(job.reject);
        }
    }
    function queue(fn) {
        return new Promise(function(resolve, reject) {
            jobs.push({
                fn: fn,
                resolve: resolve,
                reject: reject
            });
            semaphore.queue = jobs.length;
        });
    }
    function run(fn) {
        outstanding++;
        try {
            return Promise.resolve(fn()).then(function(result) {
                remove();
                return result;
            }, function(error) {
                remove();
                throw error;
            });
        } catch (err) {
            remove();
            return Promise.reject(err);
        }
    }
    var semaphore = function(fn) {
        if (outstanding >= count) {
            return queue(fn);
        } else {
            return run(fn);
        }
    };
    return semaphore;
}
function map(items, mapper) {
    var failed = false;
    var limit = this;
    return Promise.all(items.map(function() {
        var args = arguments;
        return limit(function() {
            if (!failed) {
                return mapper.apply(undefined, args).catch(function(e) {
                    failed = true;
                    throw e;
                });
            }
        });
    }));
}
function addExtras(fn) {
    fn.queue = 0;
    fn.map = map;
    return fn;
}
module.exports = function(count) {
    if (count) {
        return addExtras(limiter(count));
    } else {
        return addExtras(function(fn) {
            return fn();
        });
    }
};
}}),
}]);

//# sourceMappingURL=3e5b4_65fd45a3._.js.map