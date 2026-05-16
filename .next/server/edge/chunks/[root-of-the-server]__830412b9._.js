(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__830412b9._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/db/schema.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "account": (()=>account),
    "session": (()=>session),
    "user": (()=>user),
    "verification": (()=>verification)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/drizzle-orm/sqlite-core/table.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/drizzle-orm/sqlite-core/columns/integer.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/drizzle-orm/sqlite-core/columns/text.js [middleware-edge] (ecmascript)");
;
const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["sqliteTable"])("user", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["text"])("name").notNull(),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["text"])("email").notNull().unique(),
    emailVerified: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["integer"])("email_verified", {
        mode: "boolean"
    }).$defaultFn(()=>false).notNull(),
    image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["text"])("image"),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["integer"])("created_at", {
        mode: "timestamp"
    }).$defaultFn(()=>new Date()).notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["integer"])("updated_at", {
        mode: "timestamp"
    }).$defaultFn(()=>new Date()).notNull()
});
const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["sqliteTable"])("session", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["integer"])("expires_at", {
        mode: "timestamp"
    }).notNull(),
    token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["text"])("token").notNull().unique(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["integer"])("created_at", {
        mode: "timestamp"
    }).notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["integer"])("updated_at", {
        mode: "timestamp"
    }).notNull(),
    ipAddress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["text"])("ip_address"),
    userAgent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["text"])("user_agent"),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["text"])("user_id").notNull().references(()=>user.id, {
        onDelete: "cascade"
    })
});
const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["sqliteTable"])("account", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    accountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["text"])("account_id").notNull(),
    providerId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["text"])("provider_id").notNull(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["text"])("user_id").notNull().references(()=>user.id, {
        onDelete: "cascade"
    }),
    accessToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["text"])("access_token"),
    refreshToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["text"])("refresh_token"),
    idToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["text"])("id_token"),
    accessTokenExpiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["integer"])("access_token_expires_at", {
        mode: "timestamp"
    }),
    refreshTokenExpiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["integer"])("refresh_token_expires_at", {
        mode: "timestamp"
    }),
    scope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["text"])("scope"),
    password: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["text"])("password"),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["integer"])("created_at", {
        mode: "timestamp"
    }).notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["integer"])("updated_at", {
        mode: "timestamp"
    }).notNull()
});
const verification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["sqliteTable"])("verification", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    identifier: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["text"])("identifier").notNull(),
    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["text"])("value").notNull(),
    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["integer"])("expires_at", {
        mode: "timestamp"
    }).notNull(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["integer"])("created_at", {
        mode: "timestamp"
    }).$defaultFn(()=>new Date()),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["integer"])("updated_at", {
        mode: "timestamp"
    }).$defaultFn(()=>new Date())
});
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/db/index.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "db": (()=>db)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$libsql$2f$driver$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/drizzle-orm/libsql/driver.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$web$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/web.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$web$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@libsql/client/lib-esm/web.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$db$2f$schema$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/db/schema.ts [middleware-edge] (ecmascript)");
;
;
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$libsql$2f$client$2f$lib$2d$esm$2f$web$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    url: process.env.TURSO_CONNECTION_URL,
    authToken: process.env.TURSO_AUTH_TOKEN
});
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$drizzle$2d$orm$2f$libsql$2f$driver$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["drizzle"])(client, {
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$db$2f$schema$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__
});
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/lib/auth.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "auth": (()=>auth),
    "getCurrentUser": (()=>getCurrentUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$auth$2f$full$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/auth/full.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$drizzle$2d$adapter$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/adapters/drizzle-adapter/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$drizzle$2d$adapter$2f$drizzle$2d$adapter$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/adapters/drizzle-adapter/drizzle-adapter.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$bearer$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/bearer/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/next/dist/esm/api/headers.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/next/dist/esm/server/request/headers.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$db$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/db/index.ts [middleware-edge] (ecmascript)");
;
;
;
;
;
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$auth$2f$full$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["betterAuth"])({
    database: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$drizzle$2d$adapter$2f$drizzle$2d$adapter$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["drizzleAdapter"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$db$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["db"], {
        provider: "sqlite"
    }),
    emailAndPassword: {
        enabled: true
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }
    },
    trustedOrigins: [
        "http://localhost:3000",
        process.env.NEXT_PUBLIC_APP_URL || ""
    ].filter(Boolean),
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$bearer$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["bearer"])()
    ]
});
async function getCurrentUser(request) {
    const session = await auth.api.getSession({
        headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headers"])()
    });
    return session?.user || null;
}
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/next/dist/esm/api/headers.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/next/dist/esm/server/request/headers.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$lib$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/lib/auth.ts [middleware-edge] (ecmascript)");
;
;
async function middleware(request) {
    const session = await __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$lib$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["auth"].api.getSession({
        headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headers"])()
    });
}
const config = {
    matcher: []
};
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__830412b9._.js.map