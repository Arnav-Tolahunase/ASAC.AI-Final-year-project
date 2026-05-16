(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/3e5b4_better-auth_dist_plugins_admin_a23c2cbc._.js", {

"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/access/statement.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "adminAc": (()=>adminAc),
    "defaultAc": (()=>defaultAc),
    "defaultRoles": (()=>defaultRoles),
    "defaultStatements": (()=>defaultStatements),
    "userAc": (()=>userAc)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$access$2f$access$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/access/access.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$access$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/access/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
;
;
//#region src/plugins/admin/access/statement.ts
const defaultStatements = {
    user: [
        "create",
        "list",
        "set-role",
        "ban",
        "impersonate",
        "delete",
        "set-password",
        "get",
        "update"
    ],
    session: [
        "list",
        "revoke",
        "delete"
    ]
};
const defaultAc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$access$2f$access$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAccessControl"])(defaultStatements);
const adminAc = defaultAc.newRole({
    user: [
        "create",
        "list",
        "set-role",
        "ban",
        "impersonate",
        "delete",
        "set-password",
        "get",
        "update"
    ],
    session: [
        "list",
        "revoke",
        "delete"
    ]
});
const userAc = defaultAc.newRole({
    user: [],
    session: []
});
const defaultRoles = {
    admin: adminAc,
    user: userAc
};
;
 //# sourceMappingURL=statement.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/access/index.mjs [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$access$2f$statement$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/access/statement.mjs [middleware-edge] (ecmascript)");
;
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/access/index.mjs [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$access$2f$statement$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/access/statement.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$access$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/access/index.mjs [middleware-edge] (ecmascript) <locals>");
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/error-codes.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ADMIN_ERROR_CODES": (()=>ADMIN_ERROR_CODES)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/error-codes.mjs [middleware-edge] (ecmascript)");
;
//#region src/plugins/admin/error-codes.ts
const ADMIN_ERROR_CODES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defineErrorCodes"])({
    FAILED_TO_CREATE_USER: "Failed to create user",
    USER_ALREADY_EXISTS: "User already exists.",
    USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL: "User already exists. Use another email.",
    YOU_CANNOT_BAN_YOURSELF: "You cannot ban yourself",
    YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE: "You are not allowed to change users role",
    YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: "You are not allowed to create users",
    YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: "You are not allowed to list users",
    YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS: "You are not allowed to list users sessions",
    YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "You are not allowed to ban users",
    YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS: "You are not allowed to impersonate users",
    YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS: "You are not allowed to revoke users sessions",
    YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: "You are not allowed to delete users",
    YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD: "You are not allowed to set users password",
    BANNED_USER: "You have been banned from this application",
    YOU_ARE_NOT_ALLOWED_TO_GET_USER: "You are not allowed to get user",
    NO_DATA_TO_UPDATE: "No data to update",
    YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS: "You are not allowed to update users",
    YOU_CANNOT_REMOVE_YOURSELF: "You cannot remove yourself",
    YOU_ARE_NOT_ALLOWED_TO_SET_NON_EXISTENT_VALUE: "You are not allowed to set a non-existent role value",
    YOU_CANNOT_IMPERSONATE_ADMINS: "You cannot impersonate admins",
    INVALID_ROLE_TYPE: "Invalid role type"
});
;
 //# sourceMappingURL=error-codes.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/has-permission.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hasPermission": (()=>hasPermission)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$access$2f$statement$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/access/statement.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$access$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/access/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
;
;
//#region src/plugins/admin/has-permission.ts
const hasPermission = (input)=>{
    if (input.userId && input.options?.adminUserIds?.includes(input.userId)) return true;
    if (!input.permissions && !input.permission) return false;
    const roles = (input.role || input.options?.defaultRole || "user").split(",");
    const acRoles = input.options?.roles || __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$access$2f$statement$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defaultRoles"];
    for (const role of roles)if (acRoles[role]?.authorize(input.permission ?? input.permissions)?.success) return true;
    return false;
};
;
 //# sourceMappingURL=has-permission.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/routes.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "adminUpdateUser": (()=>adminUpdateUser),
    "banUser": (()=>banUser),
    "createUser": (()=>createUser),
    "getUser": (()=>getUser),
    "impersonateUser": (()=>impersonateUser),
    "listUserSessions": (()=>listUserSessions),
    "listUsers": (()=>listUsers),
    "removeUser": (()=>removeUser),
    "revokeUserSession": (()=>revokeUserSession),
    "revokeUserSessions": (()=>revokeUserSessions),
    "setRole": (()=>setRole),
    "setUserPassword": (()=>setUserPassword),
    "stopImpersonating": (()=>stopImpersonating),
    "unbanUser": (()=>unbanUser),
    "userHasPermission": (()=>userHasPermission)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$date$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/date.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/db/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/routes/session.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$has$2d$permission$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/has-permission.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/error-codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/error/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/error/codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/zod/v4/classic/schemas.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$coerce$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__coerce$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/zod/v4/classic/coerce.js [middleware-edge] (ecmascript) <export * as coerce>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/api/index.mjs [middleware-edge] (ecmascript)");
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
//#region src/plugins/admin/routes.ts
/**
* Ensures a valid session, if not will throw.
* Will also provide additional types on the user to include role types.
*/ const adminMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSessionFromCtx"])(ctx);
    if (!session) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED");
    return {
        session
    };
});
function parseRoles(roles) {
    return Array.isArray(roles) ? roles.join(",") : roles;
}
const setRoleBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    userId: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$coerce$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__coerce$3e$__["coerce"].string().meta({
        description: "The user id"
    }),
    role: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["union"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
            description: "The role to set. `admin` or `user` by default"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
            description: "The roles to set. `admin` or `user` by default"
        }))
    ]).meta({
        description: "The role to set, this can be a string or an array of strings. Eg: `admin` or `[admin, user]`"
    })
});
/**
* ### Endpoint
*
* POST `/admin/set-role`
*
* ### API Methods
*
* **server:**
* `auth.api.setRole`
*
* **client:**
* `authClient.admin.setRole`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-set-role)
*/ const setRole = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/admin/set-role", {
        method: "POST",
        body: setRoleBodySchema,
        requireHeaders: true,
        use: [
            adminMiddleware
        ],
        metadata: {
            openapi: {
                operationId: "setUserRole",
                summary: "Set the role of a user",
                description: "Set the role of a user",
                responses: {
                    200: {
                        description: "User role updated",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        user: {
                                            $ref: "#/components/schemas/User"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            $Infer: {
                body: {}
            }
        }
    }, async (ctx)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$has$2d$permission$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hasPermission"])({
            userId: ctx.context.session.user.id,
            role: ctx.context.session.user.role,
            options: opts,
            permissions: {
                user: [
                    "set-role"
                ]
            }
        })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE
        });
        const roles = opts.roles;
        if (roles) {
            const inputRoles = Array.isArray(ctx.body.role) ? ctx.body.role : [
                ctx.body.role
            ];
            for (const role of inputRoles)if (!roles[role]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].YOU_ARE_NOT_ALLOWED_TO_SET_NON_EXISTENT_VALUE
            });
        }
        const updatedUser = await ctx.context.internalAdapter.updateUser(ctx.body.userId, {
            role: parseRoles(ctx.body.role)
        });
        return ctx.json({
            user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, updatedUser)
        });
    });
const getUserQuerySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The id of the User"
    })
});
const getUser = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/admin/get-user", {
        method: "GET",
        query: getUserQuerySchema,
        use: [
            adminMiddleware
        ],
        metadata: {
            openapi: {
                operationId: "getUser",
                summary: "Get an existing user",
                description: "Get an existing user",
                responses: {
                    200: {
                        description: "User",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        user: {
                                            $ref: "#/components/schemas/User"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        const { id } = ctx.query;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$has$2d$permission$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hasPermission"])({
            userId: ctx.context.session.user.id,
            role: ctx.context.session.user.role,
            options: opts,
            permissions: {
                user: [
                    "get"
                ]
            }
        })) throw ctx.error("FORBIDDEN", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].YOU_ARE_NOT_ALLOWED_TO_GET_USER,
            code: "YOU_ARE_NOT_ALLOWED_TO_GET_USER"
        });
        const user = await ctx.context.internalAdapter.findUserById(id);
        if (!user) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].USER_NOT_FOUND
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, user);
    });
const createUserBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The email of the user"
    }),
    password: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().optional().meta({
        description: "The password of the user. If not provided, the user will be created without a credential account (useful for magic link or social login only users)."
    }),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The name of the user"
    }),
    role: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["union"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
            description: "The role of the user"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
            description: "The roles of user"
        }))
    ]).optional().meta({
        description: `A string or array of strings representing the roles to apply to the new user. Eg: \"user\"`
    }),
    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["any"])()).optional().meta({
        description: "Extra fields for the user. Including custom additional fields."
    })
});
/**
* ### Endpoint
*
* POST `/admin/create-user`
*
* ### API Methods
*
* **server:**
* `auth.api.createUser`
*
* **client:**
* `authClient.admin.createUser`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-create-user)
*/ const createUser = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/admin/create-user", {
        method: "POST",
        body: createUserBodySchema,
        metadata: {
            openapi: {
                operationId: "createUser",
                summary: "Create a new user",
                description: "Create a new user",
                responses: {
                    200: {
                        description: "User created",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        user: {
                                            $ref: "#/components/schemas/User"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            $Infer: {
                body: {}
            }
        }
    }, async (ctx)=>{
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSessionFromCtx"])(ctx);
        if (!session && (ctx.request || ctx.headers)) throw ctx.error("UNAUTHORIZED");
        if (session) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$has$2d$permission$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hasPermission"])({
                userId: session.user.id,
                role: session.user.role,
                options: opts,
                permissions: {
                    user: [
                        "create"
                    ]
                }
            })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS
            });
        }
        const email = ctx.body.email.toLowerCase();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["email"])().safeParse(email).success) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].INVALID_EMAIL
        });
        if (await ctx.context.internalAdapter.findUserByEmail(email)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL
        });
        const user = await ctx.context.internalAdapter.createUser({
            email,
            name: ctx.body.name,
            role: (ctx.body.role && parseRoles(ctx.body.role)) ?? opts?.defaultRole ?? "user",
            ...ctx.body.data
        });
        if (!user) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].FAILED_TO_CREATE_USER
        });
        if (ctx.body.password) {
            const hashedPassword = await ctx.context.password.hash(ctx.body.password);
            await ctx.context.internalAdapter.linkAccount({
                accountId: user.id,
                providerId: "credential",
                password: hashedPassword,
                userId: user.id
            });
        }
        return ctx.json({
            user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, user)
        });
    });
const adminUpdateUserBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    userId: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$coerce$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__coerce$3e$__["coerce"].string().meta({
        description: "The user id"
    }),
    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["any"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["any"])()).meta({
        description: "The user data to update"
    })
});
/**
* ### Endpoint
*
* POST `/admin/update-user`
*
* ### API Methods
*
* **server:**
* `auth.api.adminUpdateUser`
*
* **client:**
* `authClient.admin.updateUser`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-update-user)
*/ const adminUpdateUser = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/admin/update-user", {
        method: "POST",
        body: adminUpdateUserBodySchema,
        use: [
            adminMiddleware
        ],
        metadata: {
            openapi: {
                operationId: "updateUser",
                summary: "Update a user",
                description: "Update a user's details",
                responses: {
                    200: {
                        description: "User updated",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        user: {
                                            $ref: "#/components/schemas/User"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$has$2d$permission$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hasPermission"])({
            userId: ctx.context.session.user.id,
            role: ctx.context.session.user.role,
            options: opts,
            permissions: {
                user: [
                    "update"
                ]
            }
        })) throw ctx.error("FORBIDDEN", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS,
            code: "YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS"
        });
        if (Object.keys(ctx.body.data).length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].NO_DATA_TO_UPDATE
        });
        if (Object.prototype.hasOwnProperty.call(ctx.body.data, "role")) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$has$2d$permission$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hasPermission"])({
                userId: ctx.context.session.user.id,
                role: ctx.context.session.user.role,
                options: opts,
                permissions: {
                    user: [
                        "set-role"
                    ]
                }
            })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE
            });
            const roleValue = ctx.body.data.role;
            const inputRoles = Array.isArray(roleValue) ? roleValue : [
                roleValue
            ];
            for (const role of inputRoles){
                if (typeof role !== "string") throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].INVALID_ROLE_TYPE
                });
                if (opts.roles && !opts.roles[role]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].YOU_ARE_NOT_ALLOWED_TO_SET_NON_EXISTENT_VALUE
                });
            }
            ctx.body.data.role = parseRoles(inputRoles);
        }
        const updatedUser = await ctx.context.internalAdapter.updateUser(ctx.body.userId, ctx.body.data);
        return ctx.json((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, updatedUser));
    });
const listUsersQuerySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    searchValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().optional().meta({
        description: "The value to search for. Eg: \"some name\""
    }),
    searchField: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["enum"])([
        "email",
        "name"
    ]).meta({
        description: "The field to search in, defaults to email. Can be `email` or `name`. Eg: \"name\""
    }).optional(),
    searchOperator: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["enum"])([
        "contains",
        "starts_with",
        "ends_with"
    ]).meta({
        description: "The operator to use for the search. Can be `contains`, `starts_with` or `ends_with`. Eg: \"contains\""
    }).optional(),
    limit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The number of users to return"
    }).or((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["number"])()).optional(),
    offset: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The offset to start from"
    }).or((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["number"])()).optional(),
    sortBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The field to sort by"
    }).optional(),
    sortDirection: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["enum"])([
        "asc",
        "desc"
    ]).meta({
        description: "The direction to sort by"
    }).optional(),
    filterField: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The field to filter by"
    }).optional(),
    filterValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The value to filter by"
    }).or((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["number"])()).or((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["boolean"])()).optional(),
    filterOperator: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["enum"])([
        "eq",
        "ne",
        "lt",
        "lte",
        "gt",
        "gte",
        "contains"
    ]).meta({
        description: "The operator to use for the filter"
    }).optional()
});
const listUsers = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/admin/list-users", {
        method: "GET",
        use: [
            adminMiddleware
        ],
        query: listUsersQuerySchema,
        metadata: {
            openapi: {
                operationId: "listUsers",
                summary: "List users",
                description: "List users",
                responses: {
                    200: {
                        description: "List of users",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        users: {
                                            type: "array",
                                            items: {
                                                $ref: "#/components/schemas/User"
                                            }
                                        },
                                        total: {
                                            type: "number"
                                        },
                                        limit: {
                                            type: "number"
                                        },
                                        offset: {
                                            type: "number"
                                        }
                                    },
                                    required: [
                                        "users",
                                        "total"
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        const session = ctx.context.session;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$has$2d$permission$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hasPermission"])({
            userId: ctx.context.session.user.id,
            role: session.user.role,
            options: opts,
            permissions: {
                user: [
                    "list"
                ]
            }
        })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].YOU_ARE_NOT_ALLOWED_TO_LIST_USERS
        });
        const where = [];
        if (ctx.query?.searchValue) where.push({
            field: ctx.query.searchField || "email",
            operator: ctx.query.searchOperator || "contains",
            value: ctx.query.searchValue
        });
        if (ctx.query?.filterValue) where.push({
            field: ctx.query.filterField || "email",
            operator: ctx.query.filterOperator || "eq",
            value: ctx.query.filterValue
        });
        try {
            const users = await ctx.context.internalAdapter.listUsers(Number(ctx.query?.limit) || void 0, Number(ctx.query?.offset) || void 0, ctx.query?.sortBy ? {
                field: ctx.query.sortBy,
                direction: ctx.query.sortDirection || "asc"
            } : void 0, where.length ? where : void 0);
            const total = await ctx.context.internalAdapter.countTotalUsers(where.length ? where : void 0);
            return ctx.json({
                users: users.map((user)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, user)),
                total,
                limit: Number(ctx.query?.limit) || void 0,
                offset: Number(ctx.query?.offset) || void 0
            });
        } catch  {
            return ctx.json({
                users: [],
                total: 0
            });
        }
    });
const listUserSessionsBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    userId: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$coerce$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__coerce$3e$__["coerce"].string().meta({
        description: "The user id"
    })
});
/**
* ### Endpoint
*
* POST `/admin/list-user-sessions`
*
* ### API Methods
*
* **server:**
* `auth.api.listUserSessions`
*
* **client:**
* `authClient.admin.listUserSessions`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-list-user-sessions)
*/ const listUserSessions = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/admin/list-user-sessions", {
        method: "POST",
        use: [
            adminMiddleware
        ],
        body: listUserSessionsBodySchema,
        metadata: {
            openapi: {
                operationId: "listUserSessions",
                summary: "List user sessions",
                description: "List user sessions",
                responses: {
                    200: {
                        description: "List of user sessions",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        sessions: {
                                            type: "array",
                                            items: {
                                                $ref: "#/components/schemas/Session"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        const session = ctx.context.session;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$has$2d$permission$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hasPermission"])({
            userId: ctx.context.session.user.id,
            role: session.user.role,
            options: opts,
            permissions: {
                session: [
                    "list"
                ]
            }
        })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS
        });
        const sessions = await ctx.context.internalAdapter.listSessions(ctx.body.userId);
        return ctx.json({
            sessions: sessions.map((s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseSessionOutput"])(ctx.context.options, s))
        });
    });
const unbanUserBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    userId: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$coerce$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__coerce$3e$__["coerce"].string().meta({
        description: "The user id"
    })
});
/**
* ### Endpoint
*
* POST `/admin/unban-user`
*
* ### API Methods
*
* **server:**
* `auth.api.unbanUser`
*
* **client:**
* `authClient.admin.unbanUser`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-unban-user)
*/ const unbanUser = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/admin/unban-user", {
        method: "POST",
        body: unbanUserBodySchema,
        use: [
            adminMiddleware
        ],
        metadata: {
            openapi: {
                operationId: "unbanUser",
                summary: "Unban a user",
                description: "Unban a user",
                responses: {
                    200: {
                        description: "User unbanned",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        user: {
                                            $ref: "#/components/schemas/User"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        const session = ctx.context.session;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$has$2d$permission$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hasPermission"])({
            userId: ctx.context.session.user.id,
            role: session.user.role,
            options: opts,
            permissions: {
                user: [
                    "ban"
                ]
            }
        })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].YOU_ARE_NOT_ALLOWED_TO_BAN_USERS
        });
        const user = await ctx.context.internalAdapter.updateUser(ctx.body.userId, {
            banned: false,
            banExpires: null,
            banReason: null,
            updatedAt: /* @__PURE__ */ new Date()
        });
        return ctx.json({
            user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, user)
        });
    });
const banUserBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    userId: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$coerce$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__coerce$3e$__["coerce"].string().meta({
        description: "The user id"
    }),
    banReason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The reason for the ban"
    }).optional(),
    banExpiresIn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["number"])().meta({
        description: "The number of seconds until the ban expires"
    }).optional()
});
/**
* ### Endpoint
*
* POST `/admin/ban-user`
*
* ### API Methods
*
* **server:**
* `auth.api.banUser`
*
* **client:**
* `authClient.admin.banUser`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-ban-user)
*/ const banUser = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/admin/ban-user", {
        method: "POST",
        body: banUserBodySchema,
        use: [
            adminMiddleware
        ],
        metadata: {
            openapi: {
                operationId: "banUser",
                summary: "Ban a user",
                description: "Ban a user",
                responses: {
                    200: {
                        description: "User banned",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        user: {
                                            $ref: "#/components/schemas/User"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        const session = ctx.context.session;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$has$2d$permission$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hasPermission"])({
            userId: ctx.context.session.user.id,
            role: session.user.role,
            options: opts,
            permissions: {
                user: [
                    "ban"
                ]
            }
        })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].YOU_ARE_NOT_ALLOWED_TO_BAN_USERS
        });
        if (!await ctx.context.internalAdapter.findUserById(ctx.body.userId)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].USER_NOT_FOUND
        });
        if (ctx.body.userId === ctx.context.session.user.id) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].YOU_CANNOT_BAN_YOURSELF
        });
        const user = await ctx.context.internalAdapter.updateUser(ctx.body.userId, {
            banned: true,
            banReason: ctx.body.banReason || opts?.defaultBanReason || "No reason",
            banExpires: ctx.body.banExpiresIn ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$date$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getDate"])(ctx.body.banExpiresIn, "sec") : opts?.defaultBanExpiresIn ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$date$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getDate"])(opts.defaultBanExpiresIn, "sec") : void 0,
            updatedAt: /* @__PURE__ */ new Date()
        });
        await ctx.context.internalAdapter.deleteSessions(ctx.body.userId);
        return ctx.json({
            user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, user)
        });
    });
const impersonateUserBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    userId: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$coerce$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__coerce$3e$__["coerce"].string().meta({
        description: "The user id"
    })
});
/**
* ### Endpoint
*
* POST `/admin/impersonate-user`
*
* ### API Methods
*
* **server:**
* `auth.api.impersonateUser`
*
* **client:**
* `authClient.admin.impersonateUser`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-impersonate-user)
*/ const impersonateUser = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/admin/impersonate-user", {
        method: "POST",
        body: impersonateUserBodySchema,
        use: [
            adminMiddleware
        ],
        metadata: {
            openapi: {
                operationId: "impersonateUser",
                summary: "Impersonate a user",
                description: "Impersonate a user",
                responses: {
                    200: {
                        description: "Impersonation session created",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        session: {
                                            $ref: "#/components/schemas/Session"
                                        },
                                        user: {
                                            $ref: "#/components/schemas/User"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$has$2d$permission$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hasPermission"])({
            userId: ctx.context.session.user.id,
            role: ctx.context.session.user.role,
            options: opts,
            permissions: {
                user: [
                    "impersonate"
                ]
            }
        })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS
        });
        const targetUser = await ctx.context.internalAdapter.findUserById(ctx.body.userId);
        if (!targetUser) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND", {
            message: "User not found"
        });
        const adminRoles = (Array.isArray(opts.adminRoles) ? opts.adminRoles : opts.adminRoles?.split(",") || []).map((role)=>role.trim());
        const targetUserRole = (targetUser.role || opts.defaultRole || "user").split(",");
        if (opts.allowImpersonatingAdmins !== true && (targetUserRole.some((role)=>adminRoles.includes(role)) || opts.adminUserIds?.includes(targetUser.id))) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].YOU_CANNOT_IMPERSONATE_ADMINS
        });
        const session = await ctx.context.internalAdapter.createSession(targetUser.id, true, {
            impersonatedBy: ctx.context.session.user.id,
            expiresAt: opts?.impersonationSessionDuration ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$date$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getDate"])(opts.impersonationSessionDuration, "sec") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$date$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getDate"])(3600, "sec")
        }, true);
        if (!session) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].FAILED_TO_CREATE_USER
        });
        const authCookies = ctx.context.authCookies;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deleteSessionCookie"])(ctx);
        const dontRememberMeCookie = await ctx.getSignedCookie(ctx.context.authCookies.dontRememberToken.name, ctx.context.secret);
        const adminCookieProp = ctx.context.createAuthCookie("admin_session");
        await ctx.setSignedCookie(adminCookieProp.name, `${ctx.context.session.session.token}:${dontRememberMeCookie || ""}`, ctx.context.secret, authCookies.sessionToken.attributes);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setSessionCookie"])(ctx, {
            session,
            user: targetUser
        }, true);
        return ctx.json({
            session,
            user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, targetUser)
        });
    });
/**
* ### Endpoint
*
* POST `/admin/stop-impersonating`
*
* ### API Methods
*
* **server:**
* `auth.api.stopImpersonating`
*
* **client:**
* `authClient.admin.stopImpersonating`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-stop-impersonating)
*/ const stopImpersonating = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/admin/stop-impersonating", {
        method: "POST",
        requireHeaders: true
    }, async (ctx)=>{
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSessionFromCtx"])(ctx);
        if (!session) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED");
        if (!session.session.impersonatedBy) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "You are not impersonating anyone"
        });
        const user = await ctx.context.internalAdapter.findUserById(session.session.impersonatedBy);
        if (!user) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
            message: "Failed to find user"
        });
        const adminSessionCookie = ctx.context.createAuthCookie("admin_session");
        const adminCookie = await ctx.getSignedCookie(adminSessionCookie.name, ctx.context.secret);
        if (!adminCookie) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
            message: "Failed to find admin session"
        });
        const [adminSessionToken, dontRememberMeCookie] = adminCookie?.split(":");
        const adminSession = await ctx.context.internalAdapter.findSession(adminSessionToken);
        if (!adminSession || adminSession.session.userId !== user.id) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
            message: "Failed to find admin session"
        });
        await ctx.context.internalAdapter.deleteSession(session.session.token);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setSessionCookie"])(ctx, adminSession, !!dontRememberMeCookie);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["expireCookie"])(ctx, adminSessionCookie);
        return ctx.json({
            session: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseSessionOutput"])(ctx.context.options, adminSession.session),
            user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, adminSession.user)
        });
    });
const revokeUserSessionBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    sessionToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The session token"
    })
});
/**
* ### Endpoint
*
* POST `/admin/revoke-user-session`
*
* ### API Methods
*
* **server:**
* `auth.api.revokeUserSession`
*
* **client:**
* `authClient.admin.revokeUserSession`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-revoke-user-session)
*/ const revokeUserSession = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/admin/revoke-user-session", {
        method: "POST",
        body: revokeUserSessionBodySchema,
        use: [
            adminMiddleware
        ],
        metadata: {
            openapi: {
                operationId: "revokeUserSession",
                summary: "Revoke a user session",
                description: "Revoke a user session",
                responses: {
                    200: {
                        description: "Session revoked",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        const session = ctx.context.session;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$has$2d$permission$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hasPermission"])({
            userId: ctx.context.session.user.id,
            role: session.user.role,
            options: opts,
            permissions: {
                session: [
                    "revoke"
                ]
            }
        })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS
        });
        await ctx.context.internalAdapter.deleteSession(ctx.body.sessionToken);
        return ctx.json({
            success: true
        });
    });
const revokeUserSessionsBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    userId: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$coerce$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__coerce$3e$__["coerce"].string().meta({
        description: "The user id"
    })
});
/**
* ### Endpoint
*
* POST `/admin/revoke-user-sessions`
*
* ### API Methods
*
* **server:**
* `auth.api.revokeUserSessions`
*
* **client:**
* `authClient.admin.revokeUserSessions`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-revoke-user-sessions)
*/ const revokeUserSessions = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/admin/revoke-user-sessions", {
        method: "POST",
        body: revokeUserSessionsBodySchema,
        use: [
            adminMiddleware
        ],
        metadata: {
            openapi: {
                operationId: "revokeUserSessions",
                summary: "Revoke all user sessions",
                description: "Revoke all user sessions",
                responses: {
                    200: {
                        description: "Sessions revoked",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        const session = ctx.context.session;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$has$2d$permission$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hasPermission"])({
            userId: ctx.context.session.user.id,
            role: session.user.role,
            options: opts,
            permissions: {
                session: [
                    "revoke"
                ]
            }
        })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS
        });
        await ctx.context.internalAdapter.deleteSessions(ctx.body.userId);
        return ctx.json({
            success: true
        });
    });
const removeUserBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    userId: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$coerce$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__coerce$3e$__["coerce"].string().meta({
        description: "The user id"
    })
});
/**
* ### Endpoint
*
* POST `/admin/remove-user`
*
* ### API Methods
*
* **server:**
* `auth.api.removeUser`
*
* **client:**
* `authClient.admin.removeUser`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-remove-user)
*/ const removeUser = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/admin/remove-user", {
        method: "POST",
        body: removeUserBodySchema,
        use: [
            adminMiddleware
        ],
        metadata: {
            openapi: {
                operationId: "removeUser",
                summary: "Remove a user",
                description: "Delete a user and all their sessions and accounts. Cannot be undone.",
                responses: {
                    200: {
                        description: "User removed",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        const session = ctx.context.session;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$has$2d$permission$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hasPermission"])({
            userId: ctx.context.session.user.id,
            role: session.user.role,
            options: opts,
            permissions: {
                user: [
                    "delete"
                ]
            }
        })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS
        });
        if (ctx.body.userId === ctx.context.session.user.id) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].YOU_CANNOT_REMOVE_YOURSELF
        });
        if (!await ctx.context.internalAdapter.findUserById(ctx.body.userId)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND", {
            message: "User not found"
        });
        await ctx.context.internalAdapter.deleteUser(ctx.body.userId);
        return ctx.json({
            success: true
        });
    });
const setUserPasswordBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    newPassword: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().nonempty("newPassword cannot be empty").meta({
        description: "The new password"
    }),
    userId: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$coerce$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__coerce$3e$__["coerce"].string().nonempty("userId cannot be empty").meta({
        description: "The user id"
    })
});
/**
* ### Endpoint
*
* POST `/admin/set-user-password`
*
* ### API Methods
*
* **server:**
* `auth.api.setUserPassword`
*
* **client:**
* `authClient.admin.setUserPassword`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-set-user-password)
*/ const setUserPassword = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/admin/set-user-password", {
        method: "POST",
        body: setUserPasswordBodySchema,
        use: [
            adminMiddleware
        ],
        metadata: {
            openapi: {
                operationId: "setUserPassword",
                summary: "Set a user's password",
                description: "Set a user's password",
                responses: {
                    200: {
                        description: "Password set",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        status: {
                                            type: "boolean"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$has$2d$permission$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hasPermission"])({
            userId: ctx.context.session.user.id,
            role: ctx.context.session.user.role,
            options: opts,
            permissions: {
                user: [
                    "set-password"
                ]
            }
        })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"].YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD
        });
        const { newPassword, userId } = ctx.body;
        const minPasswordLength = ctx.context.password.config.minPasswordLength;
        if (newPassword.length < minPasswordLength) {
            ctx.context.logger.error("Password is too short");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].PASSWORD_TOO_SHORT
            });
        }
        const maxPasswordLength = ctx.context.password.config.maxPasswordLength;
        if (newPassword.length > maxPasswordLength) {
            ctx.context.logger.error("Password is too long");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].PASSWORD_TOO_LONG
            });
        }
        const hashedPassword = await ctx.context.password.hash(newPassword);
        await ctx.context.internalAdapter.updatePassword(userId, hashedPassword);
        return ctx.json({
            status: true
        });
    });
const userHasPermissionBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    userId: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$coerce$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__coerce$3e$__["coerce"].string().optional().meta({
        description: `The user id. Eg: "user-id"`
    }),
    role: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().optional().meta({
        description: `The role to check permission for. Eg: "admin"`
    })
}).and((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["union"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
        permission: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])())),
        permissions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["undefined"])()
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
        permission: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["undefined"])(),
        permissions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])()))
    })
]));
/**
* ### Endpoint
*
* POST `/admin/has-permission`
*
* ### API Methods
*
* **server:**
* `auth.api.userHasPermission`
*
* **client:**
* `authClient.admin.hasPermission`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-has-permission)
*/ const userHasPermission = (opts)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/admin/has-permission", {
        method: "POST",
        body: userHasPermissionBodySchema,
        metadata: {
            openapi: {
                description: "Check if the user has permission",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    permission: {
                                        type: "object",
                                        description: "The permission to check",
                                        deprecated: true
                                    },
                                    permissions: {
                                        type: "object",
                                        description: "The permission to check"
                                    }
                                },
                                required: [
                                    "permissions"
                                ]
                            }
                        }
                    }
                },
                responses: {
                    "200": {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        error: {
                                            type: "string"
                                        },
                                        success: {
                                            type: "boolean"
                                        }
                                    },
                                    required: [
                                        "success"
                                    ]
                                }
                            }
                        }
                    }
                }
            },
            $Infer: {
                body: {}
            }
        }
    }, async (ctx)=>{
        if (!ctx.body?.permission && !ctx.body?.permissions) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "invalid permission check. no permission(s) were passed."
        });
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSessionFromCtx"])(ctx);
        if (!session && (ctx.request || ctx.headers)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED");
        if (!session && !ctx.body.userId && !ctx.body.role) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "user id or role is required"
        });
        const user = session?.user || (ctx.body.role ? {
            id: ctx.body.userId || "",
            role: ctx.body.role
        } : null) || (ctx.body.userId ? await ctx.context.internalAdapter.findUserById(ctx.body.userId) : null);
        if (!user) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "user not found"
        });
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$has$2d$permission$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hasPermission"])({
            userId: user.id,
            role: user.role,
            options: opts,
            permissions: ctx.body.permissions ?? ctx.body.permission
        });
        return ctx.json({
            error: null,
            success: result
        });
    });
};
;
 //# sourceMappingURL=routes.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/schema.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//#region src/plugins/admin/schema.ts
__turbopack_context__.s({
    "schema": (()=>schema)
});
const schema = {
    user: {
        fields: {
            role: {
                type: "string",
                required: false,
                input: false
            },
            banned: {
                type: "boolean",
                defaultValue: false,
                required: false,
                input: false
            },
            banReason: {
                type: "string",
                required: false,
                input: false
            },
            banExpires: {
                type: "date",
                required: false,
                input: false
            }
        }
    },
    session: {
        fields: {
            impersonatedBy: {
                type: "string",
                required: false
            }
        }
    }
};
;
 //# sourceMappingURL=schema.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/admin.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "admin": (()=>admin)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/db/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$access$2f$statement$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/access/statement.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$access$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/access/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$plugin$2d$helper$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/plugin-helper.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/error-codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/routes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/error/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/error/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/api/index.mjs [middleware-edge] (ecmascript)");
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
//#region src/plugins/admin/admin.ts
const admin = (options)=>{
    const opts = {
        ...options || {},
        defaultRole: options?.defaultRole ?? "user",
        adminRoles: options?.adminRoles ?? [
            "admin"
        ],
        bannedUserMessage: options?.bannedUserMessage ?? "You have been banned from this application. Please contact support if you believe this is an error."
    };
    if (options?.adminRoles) {
        const invalidRoles = (Array.isArray(options.adminRoles) ? options.adminRoles : [
            ...options.adminRoles.split(",")
        ]).filter((role)=>!Object.keys(options?.roles || __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$access$2f$statement$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defaultRoles"]).map((r)=>r.toLowerCase()).includes(role.toLowerCase()));
        if (invalidRoles.length > 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BetterAuthError"](`Invalid admin roles: ${invalidRoles.join(", ")}. Admin roles must be defined in the 'roles' configuration.`);
    }
    return {
        id: "admin",
        init () {
            return {
                options: {
                    databaseHooks: {
                        user: {
                            create: {
                                async before (user) {
                                    return {
                                        data: {
                                            role: options?.defaultRole ?? "user",
                                            ...user
                                        }
                                    };
                                }
                            }
                        },
                        session: {
                            create: {
                                async before (session, ctx) {
                                    if (!ctx) return;
                                    const user = await ctx.context.internalAdapter.findUserById(session.userId);
                                    if (user.banned) {
                                        if (user.banExpires && new Date(user.banExpires).getTime() < Date.now()) {
                                            await ctx.context.internalAdapter.updateUser(session.userId, {
                                                banned: false,
                                                banReason: null,
                                                banExpires: null
                                            });
                                            return;
                                        }
                                        if (ctx && (ctx.path.startsWith("/callback") || ctx.path.startsWith("/oauth2/callback"))) {
                                            const redirectURI = ctx.context.options.onAPIError?.errorURL || `${ctx.context.baseURL}/error`;
                                            throw ctx.redirect(`${redirectURI}?error=banned&error_description=${opts.bannedUserMessage}`);
                                        }
                                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
                                            message: opts.bannedUserMessage,
                                            code: "BANNED_USER"
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
            };
        },
        hooks: {
            after: [
                {
                    matcher (context) {
                        return context.path === "/list-sessions";
                    },
                    handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
                        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$plugin$2d$helper$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEndpointResponse"])(ctx);
                        if (!response) return;
                        const newJson = response.filter((session)=>{
                            return !session.impersonatedBy;
                        });
                        return ctx.json(newJson);
                    })
                }
            ]
        },
        endpoints: {
            setRole: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["setRole"])(opts),
            getUser: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getUser"])(opts),
            createUser: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createUser"])(opts),
            adminUpdateUser: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["adminUpdateUser"])(opts),
            listUsers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["listUsers"])(opts),
            listUserSessions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["listUserSessions"])(opts),
            unbanUser: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["unbanUser"])(opts),
            banUser: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["banUser"])(opts),
            impersonateUser: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["impersonateUser"])(opts),
            stopImpersonating: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stopImpersonating"])(),
            revokeUserSession: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["revokeUserSession"])(opts),
            revokeUserSessions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["revokeUserSessions"])(opts),
            removeUser: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["removeUser"])(opts),
            setUserPassword: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["setUserPassword"])(opts),
            userHasPermission: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["userHasPermission"])(opts)
        },
        $ERROR_CODES: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"],
        schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["mergeSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["schema"], opts.schema),
        options
    };
};
;
 //# sourceMappingURL=admin.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/index.mjs [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$admin$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/admin.mjs [middleware-edge] (ecmascript)");
;
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/index.mjs [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$admin$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/admin.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/index.mjs [middleware-edge] (ecmascript) <locals>");
}}),
}]);

//# sourceMappingURL=3e5b4_better-auth_dist_plugins_admin_a23c2cbc._.js.map