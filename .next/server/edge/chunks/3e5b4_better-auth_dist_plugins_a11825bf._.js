(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/3e5b4_better-auth_dist_plugins_a11825bf._.js", {

"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/access/access.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createAccessControl": (()=>createAccessControl),
    "role": (()=>role)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/error/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/error/index.mjs [middleware-edge] (ecmascript) <locals>");
;
//#region src/plugins/access/access.ts
function role(statements) {
    return {
        authorize (request, connector = "AND") {
            let success = false;
            for (const [requestedResource, requestedActions] of Object.entries(request)){
                const allowedActions = statements[requestedResource];
                if (!allowedActions) return {
                    success: false,
                    error: `You are not allowed to access resource: ${requestedResource}`
                };
                if (Array.isArray(requestedActions)) success = requestedActions.every((requestedAction)=>allowedActions.includes(requestedAction));
                else if (typeof requestedActions === "object") {
                    const actions = requestedActions;
                    if (actions.connector === "OR") success = actions.actions.some((requestedAction)=>allowedActions.includes(requestedAction));
                    else success = actions.actions.every((requestedAction)=>allowedActions.includes(requestedAction));
                } else throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BetterAuthError"]("Invalid access control request");
                if (success && connector === "OR") return {
                    success
                };
                if (!success && connector === "AND") return {
                    success: false,
                    error: `unauthorized to access resource "${requestedResource}"`
                };
            }
            if (success) return {
                success
            };
            return {
                success: false,
                error: "Not authorized"
            };
        },
        statements
    };
}
function createAccessControl(s) {
    return {
        newRole (statements) {
            return role(statements);
        },
        statements: s
    };
}
;
 //# sourceMappingURL=access.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/access/index.mjs [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$access$2f$access$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/access/access.mjs [middleware-edge] (ecmascript)");
;
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/access/index.mjs [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$access$2f$access$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/access/access.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$access$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/access/index.mjs [middleware-edge] (ecmascript) <locals>");
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/anonymous/error-codes.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ANONYMOUS_ERROR_CODES": (()=>ANONYMOUS_ERROR_CODES)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/error-codes.mjs [middleware-edge] (ecmascript)");
;
//#region src/plugins/anonymous/error-codes.ts
const ANONYMOUS_ERROR_CODES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defineErrorCodes"])({
    INVALID_EMAIL_FORMAT: "Email was not generated in a valid format",
    FAILED_TO_CREATE_USER: "Failed to create user",
    COULD_NOT_CREATE_SESSION: "Could not create session",
    ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY: "Anonymous users cannot sign in again anonymously",
    FAILED_TO_DELETE_ANONYMOUS_USER: "Failed to delete anonymous user",
    USER_IS_NOT_ANONYMOUS: "User is not anonymous",
    DELETE_ANONYMOUS_USER_DISABLED: "Deleting anonymous users is disabled"
});
;
 //# sourceMappingURL=error-codes.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/anonymous/schema.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//#region src/plugins/anonymous/schema.ts
__turbopack_context__.s({
    "schema": (()=>schema)
});
const schema = {
    user: {
        fields: {
            isAnonymous: {
                type: "boolean",
                required: false,
                input: false,
                defaultValue: false
            }
        }
    }
};
;
 //# sourceMappingURL=schema.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/anonymous/index.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "anonymous": (()=>anonymous)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/db/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$cookie$2d$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/cookie-utils.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/routes/session.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$anonymous$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/anonymous/error-codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$anonymous$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/anonymous/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$id$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/id.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/zod/v4/classic/schemas.js [middleware-edge] (ecmascript)");
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
//#region src/plugins/anonymous/index.ts
async function getAnonUserEmail(options) {
    const customEmail = await options?.generateRandomEmail?.();
    if (customEmail) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["email"])().safeParse(customEmail).success) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$anonymous$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ANONYMOUS_ERROR_CODES"].INVALID_EMAIL_FORMAT
        });
        return customEmail;
    }
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$id$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateId"])();
    if (options?.emailDomainName) return `temp-${id}@${options.emailDomainName}`;
    return `temp@${id}.com`;
}
const anonymous = (options)=>{
    return {
        id: "anonymous",
        endpoints: {
            signInAnonymous: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/sign-in/anonymous", {
                method: "POST",
                metadata: {
                    openapi: {
                        description: "Sign in anonymously",
                        responses: {
                            200: {
                                description: "Sign in anonymously",
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object",
                                            properties: {
                                                user: {
                                                    $ref: "#/components/schemas/User"
                                                },
                                                session: {
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
            }, async (ctx)=>{
                if ((await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSessionFromCtx"])(ctx, {
                    disableRefresh: true
                }))?.user.isAnonymous) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$anonymous$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ANONYMOUS_ERROR_CODES"].ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY
                });
                const email = await getAnonUserEmail(options);
                const name = await options?.generateName?.(ctx) || "Anonymous";
                const newUser = await ctx.context.internalAdapter.createUser({
                    email,
                    emailVerified: false,
                    isAnonymous: true,
                    name,
                    createdAt: /* @__PURE__ */ new Date(),
                    updatedAt: /* @__PURE__ */ new Date()
                });
                if (!newUser) throw ctx.error("INTERNAL_SERVER_ERROR", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$anonymous$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ANONYMOUS_ERROR_CODES"].FAILED_TO_CREATE_USER
                });
                const session = await ctx.context.internalAdapter.createSession(newUser.id);
                if (!session) return ctx.json(null, {
                    status: 400,
                    body: {
                        message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$anonymous$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ANONYMOUS_ERROR_CODES"].COULD_NOT_CREATE_SESSION
                    }
                });
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setSessionCookie"])(ctx, {
                    session,
                    user: newUser
                });
                return ctx.json({
                    token: session.token,
                    user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, newUser)
                });
            }),
            deleteAnonymousUser: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/delete-anonymous-user", {
                method: "POST",
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["sensitiveSessionMiddleware"]
                ],
                metadata: {
                    openapi: {
                        description: "Delete an anonymous user",
                        responses: {
                            200: {
                                description: "Anonymous user deleted",
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
                            },
                            "400": {
                                description: "Anonymous user deletion is disabled",
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object",
                                            properties: {
                                                message: {
                                                    type: "string"
                                                }
                                            }
                                        },
                                        required: [
                                            "message"
                                        ]
                                    }
                                }
                            },
                            "500": {
                                description: "Internal server error",
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
                                }
                            }
                        }
                    }
                }
            }, async (ctx)=>{
                const session = ctx.context.session;
                if (options?.disableDeleteAnonymousUser) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$anonymous$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ANONYMOUS_ERROR_CODES"].DELETE_ANONYMOUS_USER_DISABLED
                });
                if (!session.user.isAnonymous) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$anonymous$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ANONYMOUS_ERROR_CODES"].USER_IS_NOT_ANONYMOUS
                });
                try {
                    await ctx.context.internalAdapter.deleteUser(session.user.id);
                } catch (error) {
                    ctx.context.logger.error("Failed to delete anonymous user", error);
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$anonymous$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ANONYMOUS_ERROR_CODES"].FAILED_TO_DELETE_ANONYMOUS_USER
                    });
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deleteSessionCookie"])(ctx);
                return ctx.json({
                    success: true
                });
            })
        },
        hooks: {
            after: [
                {
                    matcher (ctx) {
                        return ctx.path?.startsWith("/sign-in") || ctx.path?.startsWith("/sign-up") || ctx.path?.startsWith("/callback") || ctx.path?.startsWith("/oauth2/callback") || ctx.path?.startsWith("/magic-link/verify") || ctx.path?.startsWith("/email-otp/verify-email") || ctx.path?.startsWith("/one-tap/callback") || ctx.path?.startsWith("/passkey/verify-authentication") || ctx.path?.startsWith("/phone-number/verify") || false;
                    },
                    handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
                        const setCookie = ctx.context.responseHeaders?.get("set-cookie");
                        /**
				* We can consider the user is about to sign in or sign up
				* if the response contains a session token.
				*/ const sessionTokenName = ctx.context.authCookies.sessionToken.name;
                        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$cookie$2d$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseSetCookieHeader"])(setCookie || "").get(sessionTokenName)?.value.split(".")[0]) return;
                        /**
				* Make sure the user had an anonymous session.
				*/ const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSessionFromCtx"])(ctx, {
                            disableRefresh: true
                        });
                        if (!session || !session.user.isAnonymous) return;
                        if (ctx.path === "/sign-in/anonymous" && !ctx.context.newSession) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$anonymous$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ANONYMOUS_ERROR_CODES"].ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY
                        });
                        const newSession = ctx.context.newSession;
                        if (!newSession) return;
                        const user = {
                            ...session.user,
                            isAnonymous: session.user.isAnonymous
                        };
                        if (options?.onLinkAccount) await options?.onLinkAccount?.({
                            anonymousUser: {
                                session: session.session,
                                user
                            },
                            newUser: newSession,
                            ctx
                        });
                        const newSessionUser = newSession.user;
                        const isSameUser = newSessionUser?.id === session.user.id;
                        const newSessionIsAnonymous = Boolean(newSessionUser?.isAnonymous);
                        if (options?.disableDeleteAnonymousUser || isSameUser || newSessionIsAnonymous) return;
                        await ctx.context.internalAdapter.deleteUser(session.user.id);
                    })
                }
            ]
        },
        options,
        schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["mergeSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$anonymous$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["schema"], options?.schema),
        $ERROR_CODES: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$anonymous$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ANONYMOUS_ERROR_CODES"]
    };
};
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/bearer/index.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "bearer": (()=>bearer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$cookie$2d$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/cookie-utils.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$cookies$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/cookies.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/api/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/hmac.mjs [middleware-edge] (ecmascript)");
;
;
;
;
;
//#region src/plugins/bearer/index.ts
/**
* Converts bearer token to session cookie
*/ const bearer = (options)=>{
    return {
        id: "bearer",
        hooks: {
            before: [
                {
                    matcher (context) {
                        return Boolean(context.request?.headers.get("authorization") || context.headers?.get("authorization"));
                    },
                    handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (c)=>{
                        const token = c.request?.headers.get("authorization")?.replace("Bearer ", "") || c.headers?.get("Authorization")?.replace("Bearer ", "");
                        if (!token) return;
                        let signedToken = "";
                        if (token.includes(".")) signedToken = token.replace("=", "");
                        else {
                            if (options?.requireSignature) return;
                            signedToken = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$cookies$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["serializeSignedCookie"])("", token, c.context.secret)).replace("=", "");
                        }
                        try {
                            const decodedToken = decodeURIComponent(signedToken);
                            if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createHMAC"])("SHA-256", "base64urlnopad").verify(c.context.secret, decodedToken.split(".")[0], decodedToken.split(".")[1])) return;
                        } catch  {
                            return;
                        }
                        const existingHeaders = c.request?.headers || c.headers;
                        const headers = new Headers({
                            ...Object.fromEntries(existingHeaders?.entries())
                        });
                        headers.append("cookie", `${c.context.authCookies.sessionToken.name}=${signedToken}`);
                        return {
                            context: {
                                headers
                            }
                        };
                    })
                }
            ],
            after: [
                {
                    matcher (context) {
                        return true;
                    },
                    handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
                        const setCookie = ctx.context.responseHeaders?.get("set-cookie");
                        if (!setCookie) return;
                        const parsedCookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$cookie$2d$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseSetCookieHeader"])(setCookie);
                        const cookieName = ctx.context.authCookies.sessionToken.name;
                        const sessionCookie = parsedCookies.get(cookieName);
                        if (!sessionCookie || !sessionCookie.value || sessionCookie["max-age"] === 0) return;
                        const token = sessionCookie.value;
                        const exposedHeaders = ctx.context.responseHeaders?.get("access-control-expose-headers") || "";
                        const headersSet = new Set(exposedHeaders.split(",").map((header)=>header.trim()).filter(Boolean));
                        headersSet.add("set-auth-token");
                        ctx.setHeader("set-auth-token", token);
                        ctx.setHeader("Access-Control-Expose-Headers", Array.from(headersSet).join(", "));
                    })
                }
            ]
        },
        options
    };
};
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/constants.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//#region src/plugins/captcha/constants.ts
__turbopack_context__.s({
    "Providers": (()=>Providers),
    "defaultEndpoints": (()=>defaultEndpoints),
    "siteVerifyMap": (()=>siteVerifyMap)
});
const defaultEndpoints = [
    "/sign-up/email",
    "/sign-in/email",
    "/request-password-reset"
];
const Providers = {
    CLOUDFLARE_TURNSTILE: "cloudflare-turnstile",
    GOOGLE_RECAPTCHA: "google-recaptcha",
    HCAPTCHA: "hcaptcha",
    CAPTCHAFOX: "captchafox"
};
const siteVerifyMap = {
    [Providers.CLOUDFLARE_TURNSTILE]: "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    [Providers.GOOGLE_RECAPTCHA]: "https://www.google.com/recaptcha/api/siteverify",
    [Providers.HCAPTCHA]: "https://api.hcaptcha.com/siteverify",
    [Providers.CAPTCHAFOX]: "https://api.captchafox.com/siteverify"
};
;
 //# sourceMappingURL=constants.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/error-codes.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EXTERNAL_ERROR_CODES": (()=>EXTERNAL_ERROR_CODES),
    "INTERNAL_ERROR_CODES": (()=>INTERNAL_ERROR_CODES)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/error-codes.mjs [middleware-edge] (ecmascript)");
;
//#region src/plugins/captcha/error-codes.ts
const EXTERNAL_ERROR_CODES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defineErrorCodes"])({
    VERIFICATION_FAILED: "Captcha verification failed",
    MISSING_RESPONSE: "Missing CAPTCHA response",
    UNKNOWN_ERROR: "Something went wrong"
});
const INTERNAL_ERROR_CODES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defineErrorCodes"])({
    MISSING_SECRET_KEY: "Missing secret key",
    SERVICE_UNAVAILABLE: "CAPTCHA service unavailable"
});
;
 //# sourceMappingURL=error-codes.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/utils.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//#region src/plugins/captcha/utils.ts
__turbopack_context__.s({
    "encodeToURLParams": (()=>encodeToURLParams)
});
const encodeToURLParams = (obj)=>{
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) throw new Error("Input must be a non-null object.");
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(obj))if (value !== void 0 && value !== null) params.append(key, String(value));
    return params.toString();
};
;
 //# sourceMappingURL=utils.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/verify-handlers/captchafox.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "captchaFox": (()=>captchaFox)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$middleware$2d$response$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/middleware-response.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/error-codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/utils.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-fetch/fetch/dist/index.js [middleware-edge] (ecmascript)");
;
;
;
;
//#region src/plugins/captcha/verify-handlers/captchafox.ts
const captchaFox = async ({ siteVerifyURL, captchaResponse, secretKey, siteKey, remoteIP })=>{
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["betterFetch"])(siteVerifyURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["encodeToURLParams"])({
            secret: secretKey,
            response: captchaResponse,
            ...siteKey && {
                sitekey: siteKey
            },
            ...remoteIP && {
                remoteIp: remoteIP
            }
        })
    });
    if (!response.data || response.error) throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["INTERNAL_ERROR_CODES"].SERVICE_UNAVAILABLE);
    if (!response.data.success) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$middleware$2d$response$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["middlewareResponse"])({
        message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["EXTERNAL_ERROR_CODES"].VERIFICATION_FAILED,
        status: 403
    });
};
;
 //# sourceMappingURL=captchafox.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/verify-handlers/cloudflare-turnstile.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cloudflareTurnstile": (()=>cloudflareTurnstile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$middleware$2d$response$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/middleware-response.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/error-codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-fetch/fetch/dist/index.js [middleware-edge] (ecmascript)");
;
;
;
//#region src/plugins/captcha/verify-handlers/cloudflare-turnstile.ts
const cloudflareTurnstile = async ({ siteVerifyURL, captchaResponse, secretKey, remoteIP })=>{
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["betterFetch"])(siteVerifyURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            secret: secretKey,
            response: captchaResponse,
            ...remoteIP && {
                remoteip: remoteIP
            }
        })
    });
    if (!response.data || response.error) throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["INTERNAL_ERROR_CODES"].SERVICE_UNAVAILABLE);
    if (!response.data.success) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$middleware$2d$response$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["middlewareResponse"])({
        message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["EXTERNAL_ERROR_CODES"].VERIFICATION_FAILED,
        status: 403
    });
};
;
 //# sourceMappingURL=cloudflare-turnstile.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/verify-handlers/google-recaptcha.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "googleRecaptcha": (()=>googleRecaptcha)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$middleware$2d$response$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/middleware-response.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/error-codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/utils.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-fetch/fetch/dist/index.js [middleware-edge] (ecmascript)");
;
;
;
;
//#region src/plugins/captcha/verify-handlers/google-recaptcha.ts
const isV3 = (response)=>{
    return "score" in response && typeof response.score === "number";
};
const googleRecaptcha = async ({ siteVerifyURL, captchaResponse, secretKey, minScore = .5, remoteIP })=>{
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["betterFetch"])(siteVerifyURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["encodeToURLParams"])({
            secret: secretKey,
            response: captchaResponse,
            ...remoteIP && {
                remoteip: remoteIP
            }
        })
    });
    if (!response.data || response.error) throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["INTERNAL_ERROR_CODES"].SERVICE_UNAVAILABLE);
    if (!response.data.success || isV3(response.data) && response.data.score < minScore) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$middleware$2d$response$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["middlewareResponse"])({
        message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["EXTERNAL_ERROR_CODES"].VERIFICATION_FAILED,
        status: 403
    });
};
;
 //# sourceMappingURL=google-recaptcha.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/verify-handlers/h-captcha.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hCaptcha": (()=>hCaptcha)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$middleware$2d$response$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/middleware-response.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/error-codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/utils.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-fetch/fetch/dist/index.js [middleware-edge] (ecmascript)");
;
;
;
;
//#region src/plugins/captcha/verify-handlers/h-captcha.ts
const hCaptcha = async ({ siteVerifyURL, captchaResponse, secretKey, siteKey, remoteIP })=>{
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["betterFetch"])(siteVerifyURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["encodeToURLParams"])({
            secret: secretKey,
            response: captchaResponse,
            ...siteKey && {
                sitekey: siteKey
            },
            ...remoteIP && {
                remoteip: remoteIP
            }
        })
    });
    if (!response.data || response.error) throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["INTERNAL_ERROR_CODES"].SERVICE_UNAVAILABLE);
    if (!response.data.success) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$middleware$2d$response$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["middlewareResponse"])({
        message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["EXTERNAL_ERROR_CODES"].VERIFICATION_FAILED,
        status: 403
    });
};
;
 //# sourceMappingURL=h-captcha.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/verify-handlers/index.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$verify$2d$handlers$2f$captchafox$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/verify-handlers/captchafox.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$verify$2d$handlers$2f$cloudflare$2d$turnstile$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/verify-handlers/cloudflare-turnstile.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$verify$2d$handlers$2f$google$2d$recaptcha$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/verify-handlers/google-recaptcha.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$verify$2d$handlers$2f$h$2d$captcha$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/verify-handlers/h-captcha.mjs [middleware-edge] (ecmascript)");
;
;
;
;
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/index.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "captcha": (()=>captcha)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$get$2d$request$2d$ip$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/get-request-ip.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$middleware$2d$response$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/middleware-response.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$constants$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/constants.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/error-codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$verify$2d$handlers$2f$captchafox$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/verify-handlers/captchafox.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$verify$2d$handlers$2f$cloudflare$2d$turnstile$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/verify-handlers/cloudflare-turnstile.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$verify$2d$handlers$2f$google$2d$recaptcha$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/verify-handlers/google-recaptcha.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$verify$2d$handlers$2f$h$2d$captcha$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/verify-handlers/h-captcha.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$verify$2d$handlers$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/verify-handlers/index.mjs [middleware-edge] (ecmascript)");
;
;
;
;
;
;
;
;
;
//#region src/plugins/captcha/index.ts
const captcha = (options)=>({
        id: "captcha",
        onRequest: async (request, ctx)=>{
            try {
                if (!(options.endpoints?.length ? options.endpoints : __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$constants$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defaultEndpoints"]).some((endpoint)=>request.url.includes(endpoint))) return void 0;
                if (!options.secretKey) throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["INTERNAL_ERROR_CODES"].MISSING_SECRET_KEY);
                const captchaResponse = request.headers.get("x-captcha-response");
                const remoteUserIP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$get$2d$request$2d$ip$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getIp"])(request, ctx.options) ?? void 0;
                if (!captchaResponse) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$middleware$2d$response$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["middlewareResponse"])({
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["EXTERNAL_ERROR_CODES"].MISSING_RESPONSE,
                    status: 400
                });
                const handlerParams = {
                    siteVerifyURL: options.siteVerifyURLOverride || __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$constants$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["siteVerifyMap"][options.provider],
                    captchaResponse,
                    secretKey: options.secretKey,
                    remoteIP: remoteUserIP
                };
                if (options.provider === __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$constants$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Providers"].CLOUDFLARE_TURNSTILE) return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$verify$2d$handlers$2f$cloudflare$2d$turnstile$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cloudflareTurnstile"])(handlerParams);
                if (options.provider === __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$constants$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Providers"].GOOGLE_RECAPTCHA) return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$verify$2d$handlers$2f$google$2d$recaptcha$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["googleRecaptcha"])({
                    ...handlerParams,
                    minScore: options.minScore
                });
                if (options.provider === __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$constants$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Providers"].HCAPTCHA) return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$verify$2d$handlers$2f$h$2d$captcha$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hCaptcha"])({
                    ...handlerParams,
                    siteKey: options.siteKey
                });
                if (options.provider === __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$constants$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Providers"].CAPTCHAFOX) return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$verify$2d$handlers$2f$captchafox$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["captchaFox"])({
                    ...handlerParams,
                    siteKey: options.siteKey
                });
            } catch (_error) {
                const errorMessage = _error instanceof Error ? _error.message : void 0;
                ctx.logger.error(errorMessage ?? "Unknown error", {
                    endpoint: request.url,
                    message: _error
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$middleware$2d$response$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["middlewareResponse"])({
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["EXTERNAL_ERROR_CODES"].UNKNOWN_ERROR,
                    status: 500
                });
            }
        },
        options
    });
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/custom-session/index.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "customSession": (()=>customSession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/routes/session.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$plugin$2d$helper$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/plugin-helper.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/zod/v4/classic/schemas.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/api/index.mjs [middleware-edge] (ecmascript)");
;
;
;
;
;
//#region src/plugins/custom-session/index.ts
const getSessionQuerySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    disableCookieCache: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["boolean"])().meta({
        description: "Disable cookie cache and fetch session from database"
    }).or((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().transform((v)=>v === "true")).optional(),
    disableRefresh: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["boolean"])().meta({
        description: "Disable session refresh. Useful for checking session status, without updating the session"
    }).optional()
}));
const customSession = (fn, options, pluginOptions)=>{
    return {
        id: "custom-session",
        hooks: {
            after: [
                {
                    matcher: (ctx)=>ctx.path === "/multi-session/list-device-sessions" && (pluginOptions?.shouldMutateListDeviceSessionsEndpoint ?? false),
                    handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
                        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$plugin$2d$helper$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEndpointResponse"])(ctx);
                        if (!response) return;
                        const newResponse = await Promise.all(response.map(async (v)=>await fn(v, ctx)));
                        return ctx.json(newResponse);
                    })
                }
            ]
        },
        endpoints: {
            getSession: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/get-session", {
                method: "GET",
                query: getSessionQuerySchema,
                metadata: {
                    CUSTOM_SESSION: true,
                    openapi: {
                        description: "Get custom session data",
                        responses: {
                            "200": {
                                description: "Success",
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array",
                                            nullable: true,
                                            items: {
                                                $ref: "#/components/schemas/Session"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                requireHeaders: true
            }, async (ctx)=>{
                const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSession"])()({
                    ...ctx,
                    asResponse: false,
                    headers: ctx.headers,
                    returnHeaders: true
                }).catch((e)=>{
                    return null;
                });
                if (!session?.response) return ctx.json(null);
                const fnResult = await fn(session.response, ctx);
                const setCookie = session.headers.get("set-cookie");
                if (setCookie) {
                    ctx.setHeader("set-cookie", setCookie);
                    session.headers.delete("set-cookie");
                }
                session.headers.forEach((value, key)=>{
                    ctx.setHeader(key, value);
                });
                return ctx.json(fnResult);
            })
        },
        $Infer: {
            Session: {}
        },
        options: pluginOptions
    };
};
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/device-authorization/error-codes.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DEVICE_AUTHORIZATION_ERROR_CODES": (()=>DEVICE_AUTHORIZATION_ERROR_CODES)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/error-codes.mjs [middleware-edge] (ecmascript)");
;
//#region src/plugins/device-authorization/error-codes.ts
const DEVICE_AUTHORIZATION_ERROR_CODES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defineErrorCodes"])({
    INVALID_DEVICE_CODE: "Invalid device code",
    EXPIRED_DEVICE_CODE: "Device code has expired",
    EXPIRED_USER_CODE: "User code has expired",
    AUTHORIZATION_PENDING: "Authorization pending",
    ACCESS_DENIED: "Access denied",
    INVALID_USER_CODE: "Invalid user code",
    DEVICE_CODE_ALREADY_PROCESSED: "Device code already processed",
    POLLING_TOO_FREQUENTLY: "Polling too frequently",
    USER_NOT_FOUND: "User not found",
    FAILED_TO_CREATE_SESSION: "Failed to create session",
    INVALID_DEVICE_CODE_STATUS: "Invalid device code status",
    AUTHENTICATION_REQUIRED: "Authentication required"
});
;
 //# sourceMappingURL=error-codes.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/device-authorization/routes.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "deviceApprove": (()=>deviceApprove),
    "deviceCode": (()=>deviceCode),
    "deviceDeny": (()=>deviceDeny),
    "deviceToken": (()=>deviceToken),
    "deviceVerify": (()=>deviceVerify)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/random.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$time$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/time.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/routes/session.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/device-authorization/error-codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/zod/v4/classic/schemas.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/api/index.mjs [middleware-edge] (ecmascript)");
;
;
;
;
;
;
;
;
//#region src/plugins/device-authorization/routes.ts
const defaultCharset = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const deviceCodeBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    client_id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The client ID of the application"
    }),
    scope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "Space-separated list of scopes"
    }).optional()
});
const deviceCodeErrorSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["enum"])([
        "invalid_request",
        "invalid_client"
    ]).meta({
        description: "Error code"
    }),
    error_description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "Detailed error description"
    })
});
const deviceCode = (opts)=>{
    const generateDeviceCode = async ()=>{
        if (opts.generateDeviceCode) return opts.generateDeviceCode();
        return defaultGenerateDeviceCode(opts.deviceCodeLength);
    };
    const generateUserCode = async ()=>{
        if (opts.generateUserCode) return opts.generateUserCode();
        return defaultGenerateUserCode(opts.userCodeLength);
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/device/code", {
        method: "POST",
        body: deviceCodeBodySchema,
        error: deviceCodeErrorSchema,
        metadata: {
            openapi: {
                description: `Request a device and user code

Follow [rfc8628#section-3.2](https://datatracker.ietf.org/doc/html/rfc8628#section-3.2)`,
                responses: {
                    200: {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        device_code: {
                                            type: "string",
                                            description: "The device verification code"
                                        },
                                        user_code: {
                                            type: "string",
                                            description: "The user code to display"
                                        },
                                        verification_uri: {
                                            type: "string",
                                            format: "uri",
                                            description: "The URL for user verification. Defaults to /device if not configured."
                                        },
                                        verification_uri_complete: {
                                            type: "string",
                                            format: "uri",
                                            description: "The complete URL with user code as query parameter."
                                        },
                                        expires_in: {
                                            type: "number",
                                            description: "Lifetime in seconds of the device code"
                                        },
                                        interval: {
                                            type: "number",
                                            description: "Minimum polling interval in seconds"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    400: {
                        description: "Error response",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        error: {
                                            type: "string",
                                            enum: [
                                                "invalid_request",
                                                "invalid_client"
                                            ]
                                        },
                                        error_description: {
                                            type: "string"
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
        if (opts.validateClient) {
            if (!await opts.validateClient(ctx.body.client_id)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                error: "invalid_client",
                error_description: "Invalid client ID"
            });
        }
        if (opts.onDeviceAuthRequest) await opts.onDeviceAuthRequest(ctx.body.client_id, ctx.body.scope);
        const deviceCode$1 = await generateDeviceCode();
        const userCode = await generateUserCode();
        const expiresIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$time$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ms"])(opts.expiresIn);
        const expiresAt = new Date(Date.now() + expiresIn);
        await ctx.context.adapter.create({
            model: "deviceCode",
            data: {
                deviceCode: deviceCode$1,
                userCode,
                expiresAt,
                status: "pending",
                pollingInterval: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$time$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ms"])(opts.interval),
                clientId: ctx.body.client_id,
                scope: ctx.body.scope
            }
        });
        const { verificationUri, verificationUriComplete } = buildVerificationUris(opts.verificationUri, ctx.context.baseURL, userCode);
        return ctx.json({
            device_code: deviceCode$1,
            user_code: userCode,
            verification_uri: verificationUri,
            verification_uri_complete: verificationUriComplete,
            expires_in: Math.floor(expiresIn / 1e3),
            interval: Math.floor((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$time$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ms"])(opts.interval) / 1e3)
        }, {
            headers: {
                "Cache-Control": "no-store"
            }
        });
    });
};
const deviceTokenBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    grant_type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["literal"])("urn:ietf:params:oauth:grant-type:device_code").meta({
        description: "The grant type for device flow"
    }),
    device_code: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The device verification code"
    }),
    client_id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The client ID of the application"
    })
});
const deviceTokenErrorSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["enum"])([
        "authorization_pending",
        "slow_down",
        "expired_token",
        "access_denied",
        "invalid_request",
        "invalid_grant"
    ]).meta({
        description: "Error code"
    }),
    error_description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "Detailed error description"
    })
});
const deviceToken = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/device/token", {
        method: "POST",
        body: deviceTokenBodySchema,
        error: deviceTokenErrorSchema,
        metadata: {
            openapi: {
                description: `Exchange device code for access token

Follow [rfc8628#section-3.4](https://datatracker.ietf.org/doc/html/rfc8628#section-3.4)`,
                responses: {
                    200: {
                        description: "Success",
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
                    },
                    400: {
                        description: "Error response",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        error: {
                                            type: "string",
                                            enum: [
                                                "authorization_pending",
                                                "slow_down",
                                                "expired_token",
                                                "access_denied",
                                                "invalid_request",
                                                "invalid_grant"
                                            ]
                                        },
                                        error_description: {
                                            type: "string"
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
        const { device_code, client_id } = ctx.body;
        if (opts.validateClient) {
            if (!await opts.validateClient(client_id)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                error: "invalid_grant",
                error_description: "Invalid client ID"
            });
        }
        const deviceCodeRecord = await ctx.context.adapter.findOne({
            model: "deviceCode",
            where: [
                {
                    field: "deviceCode",
                    value: device_code
                }
            ]
        });
        if (!deviceCodeRecord) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            error: "invalid_grant",
            error_description: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEVICE_AUTHORIZATION_ERROR_CODES"].INVALID_DEVICE_CODE
        });
        if (deviceCodeRecord.clientId && deviceCodeRecord.clientId !== client_id) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            error: "invalid_grant",
            error_description: "Client ID mismatch"
        });
        if (deviceCodeRecord.lastPolledAt && deviceCodeRecord.pollingInterval) {
            if (Date.now() - new Date(deviceCodeRecord.lastPolledAt).getTime() < deviceCodeRecord.pollingInterval) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                error: "slow_down",
                error_description: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEVICE_AUTHORIZATION_ERROR_CODES"].POLLING_TOO_FREQUENTLY
            });
        }
        await ctx.context.adapter.update({
            model: "deviceCode",
            where: [
                {
                    field: "id",
                    value: deviceCodeRecord.id
                }
            ],
            update: {
                lastPolledAt: /* @__PURE__ */ new Date()
            }
        });
        if (deviceCodeRecord.expiresAt < /* @__PURE__ */ new Date()) {
            await ctx.context.adapter.delete({
                model: "deviceCode",
                where: [
                    {
                        field: "id",
                        value: deviceCodeRecord.id
                    }
                ]
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                error: "expired_token",
                error_description: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEVICE_AUTHORIZATION_ERROR_CODES"].EXPIRED_DEVICE_CODE
            });
        }
        if (deviceCodeRecord.status === "pending") throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            error: "authorization_pending",
            error_description: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEVICE_AUTHORIZATION_ERROR_CODES"].AUTHORIZATION_PENDING
        });
        if (deviceCodeRecord.status === "denied") {
            await ctx.context.adapter.delete({
                model: "deviceCode",
                where: [
                    {
                        field: "id",
                        value: deviceCodeRecord.id
                    }
                ]
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                error: "access_denied",
                error_description: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEVICE_AUTHORIZATION_ERROR_CODES"].ACCESS_DENIED
            });
        }
        if (deviceCodeRecord.status === "approved" && deviceCodeRecord.userId) {
            const user = await ctx.context.internalAdapter.findUserById(deviceCodeRecord.userId);
            if (!user) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                error: "server_error",
                error_description: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEVICE_AUTHORIZATION_ERROR_CODES"].USER_NOT_FOUND
            });
            const session = await ctx.context.internalAdapter.createSession(user.id);
            if (!session) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                error: "server_error",
                error_description: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEVICE_AUTHORIZATION_ERROR_CODES"].FAILED_TO_CREATE_SESSION
            });
            ctx.context.setNewSession({
                session,
                user
            });
            if (ctx.context.options.secondaryStorage) await ctx.context.secondaryStorage?.set(session.token, JSON.stringify({
                user,
                session
            }), Math.floor((new Date(session.expiresAt).getTime() - Date.now()) / 1e3));
            await ctx.context.adapter.delete({
                model: "deviceCode",
                where: [
                    {
                        field: "id",
                        value: deviceCodeRecord.id
                    }
                ]
            });
            return ctx.json({
                access_token: session.token,
                token_type: "Bearer",
                expires_in: Math.floor((new Date(session.expiresAt).getTime() - Date.now()) / 1e3),
                scope: deviceCodeRecord.scope || ""
            }, {
                headers: {
                    "Cache-Control": "no-store",
                    Pragma: "no-cache"
                }
            });
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
            error: "server_error",
            error_description: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEVICE_AUTHORIZATION_ERROR_CODES"].INVALID_DEVICE_CODE_STATUS
        });
    });
const deviceVerify = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/device", {
    method: "GET",
    query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
        user_code: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
            description: "The user code to verify"
        })
    }),
    error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
        error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["enum"])([
            "invalid_request"
        ]).meta({
            description: "Error code"
        }),
        error_description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
            description: "Detailed error description"
        })
    }),
    metadata: {
        openapi: {
            description: "Verify user code and get device authorization status",
            responses: {
                200: {
                    description: "Device authorization status",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    user_code: {
                                        type: "string",
                                        description: "The user code to verify"
                                    },
                                    status: {
                                        type: "string",
                                        enum: [
                                            "pending",
                                            "approved",
                                            "denied"
                                        ],
                                        description: "Current status of the device authorization"
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
    const { user_code } = ctx.query;
    const cleanUserCode = user_code.replace(/-/g, "");
    const deviceCodeRecord = await ctx.context.adapter.findOne({
        model: "deviceCode",
        where: [
            {
                field: "userCode",
                value: cleanUserCode
            }
        ]
    });
    if (!deviceCodeRecord) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        error: "invalid_request",
        error_description: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEVICE_AUTHORIZATION_ERROR_CODES"].INVALID_USER_CODE
    });
    if (deviceCodeRecord.expiresAt < /* @__PURE__ */ new Date()) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        error: "expired_token",
        error_description: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEVICE_AUTHORIZATION_ERROR_CODES"].EXPIRED_USER_CODE
    });
    return ctx.json({
        user_code,
        status: deviceCodeRecord.status
    });
});
const deviceApprove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/device/approve", {
    method: "POST",
    body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
        userCode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
            description: "The user code to approve"
        })
    }),
    error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
        error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["enum"])([
            "invalid_request",
            "expired_token",
            "device_code_already_processed"
        ]).meta({
            description: "Error code"
        }),
        error_description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
            description: "Detailed error description"
        })
    }),
    requireHeaders: true,
    metadata: {
        openapi: {
            description: "Approve device authorization",
            responses: {
                200: {
                    description: "Success",
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
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSessionFromCtx"])(ctx);
    if (!session) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
        error: "unauthorized",
        error_description: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEVICE_AUTHORIZATION_ERROR_CODES"].AUTHENTICATION_REQUIRED
    });
    const { userCode } = ctx.body;
    const cleanUserCode = userCode.replace(/-/g, "");
    const deviceCodeRecord = await ctx.context.adapter.findOne({
        model: "deviceCode",
        where: [
            {
                field: "userCode",
                value: cleanUserCode
            }
        ]
    });
    if (!deviceCodeRecord) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        error: "invalid_request",
        error_description: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEVICE_AUTHORIZATION_ERROR_CODES"].INVALID_USER_CODE
    });
    if (deviceCodeRecord.expiresAt < /* @__PURE__ */ new Date()) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        error: "expired_token",
        error_description: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEVICE_AUTHORIZATION_ERROR_CODES"].EXPIRED_USER_CODE
    });
    if (deviceCodeRecord.status !== "pending") throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        error: "invalid_request",
        error_description: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEVICE_AUTHORIZATION_ERROR_CODES"].DEVICE_CODE_ALREADY_PROCESSED
    });
    await ctx.context.adapter.update({
        model: "deviceCode",
        where: [
            {
                field: "id",
                value: deviceCodeRecord.id
            }
        ],
        update: {
            status: "approved",
            userId: session.user.id
        }
    });
    return ctx.json({
        success: true
    });
});
const deviceDeny = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/device/deny", {
    method: "POST",
    body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
        userCode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
            description: "The user code to deny"
        })
    }),
    error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
        error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["enum"])([
            "invalid_request",
            "expired_token"
        ]).meta({
            description: "Error code"
        }),
        error_description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
            description: "Detailed error description"
        })
    }),
    metadata: {
        openapi: {
            description: "Deny device authorization",
            responses: {
                200: {
                    description: "Success",
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
    const { userCode } = ctx.body;
    const cleanUserCode = userCode.replace(/-/g, "");
    const deviceCodeRecord = await ctx.context.adapter.findOne({
        model: "deviceCode",
        where: [
            {
                field: "userCode",
                value: cleanUserCode
            }
        ]
    });
    if (!deviceCodeRecord) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        error: "invalid_request",
        error_description: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEVICE_AUTHORIZATION_ERROR_CODES"].INVALID_USER_CODE
    });
    if (deviceCodeRecord.expiresAt < /* @__PURE__ */ new Date()) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        error: "expired_token",
        error_description: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEVICE_AUTHORIZATION_ERROR_CODES"].EXPIRED_USER_CODE
    });
    if (deviceCodeRecord.status !== "pending") throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        error: "invalid_request",
        error_description: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEVICE_AUTHORIZATION_ERROR_CODES"].DEVICE_CODE_ALREADY_PROCESSED
    });
    await ctx.context.adapter.update({
        model: "deviceCode",
        where: [
            {
                field: "id",
                value: deviceCodeRecord.id
            }
        ],
        update: {
            status: "denied"
        }
    });
    return ctx.json({
        success: true
    });
});
/**
* @internal
*/ const buildVerificationUris = (verificationUri, baseURL, userCode)=>{
    const uri = verificationUri || "/device";
    let verificationUrl;
    try {
        verificationUrl = new URL(uri);
    } catch  {
        verificationUrl = new URL(uri, baseURL);
    }
    const verificationUriCompleteUrl = new URL(verificationUrl);
    verificationUriCompleteUrl.searchParams.set("user_code", userCode);
    return {
        verificationUri: verificationUrl.toString(),
        verificationUriComplete: verificationUriCompleteUrl.toString()
    };
};
/**
* @internal
*/ const defaultGenerateDeviceCode = (length)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateRandomString"])(length, "a-z", "A-Z", "0-9");
};
/**
* @internal
*/ const defaultGenerateUserCode = (length)=>{
    const chars = new Uint8Array(length);
    return Array.from(crypto.getRandomValues(chars)).map((byte)=>defaultCharset[byte % 32]).join("");
};
;
 //# sourceMappingURL=routes.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/device-authorization/schema.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "schema": (()=>schema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/zod/v4/classic/schemas.js [middleware-edge] (ecmascript)");
;
//#region src/plugins/device-authorization/schema.ts
const schema = {
    deviceCode: {
        fields: {
            deviceCode: {
                type: "string",
                required: true
            },
            userCode: {
                type: "string",
                required: true
            },
            userId: {
                type: "string",
                required: false
            },
            expiresAt: {
                type: "date",
                required: true
            },
            status: {
                type: "string",
                required: true
            },
            lastPolledAt: {
                type: "date",
                required: false
            },
            pollingInterval: {
                type: "number",
                required: false
            },
            clientId: {
                type: "string",
                required: false
            },
            scope: {
                type: "string",
                required: false
            }
        }
    }
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])(),
    deviceCode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])(),
    userCode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().optional(),
    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["date"])(),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])(),
    lastPolledAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["date"])().optional(),
    pollingInterval: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["number"])().optional(),
    clientId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().optional(),
    scope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().optional()
});
;
 //# sourceMappingURL=schema.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/device-authorization/index.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "deviceAuthorization": (()=>deviceAuthorization),
    "deviceAuthorizationOptionsSchema": (()=>deviceAuthorizationOptionsSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/db/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/db/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$time$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/time.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/device-authorization/error-codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/device-authorization/routes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/device-authorization/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/zod/v4/classic/schemas.js [middleware-edge] (ecmascript)");
;
;
;
;
;
;
;
//#region src/plugins/device-authorization/index.ts
const timeStringSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["custom"])((val)=>{
    if (typeof val !== "string") return false;
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$time$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ms"])(val);
        return true;
    } catch  {
        return false;
    }
}, {
    message: "Invalid time string format. Use formats like '30m', '5s', '1h', etc."
});
const deviceAuthorizationOptionsSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    expiresIn: timeStringSchema.default("30m").describe("Time in seconds until the device code expires. Use formats like '30m', '5s', '1h', etc."),
    interval: timeStringSchema.default("5s").describe("Time in seconds between polling attempts. Use formats like '30m', '5s', '1h', etc."),
    deviceCodeLength: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["number"])().int().positive().default(40).describe("Length of the device code to be generated. Default is 40 characters."),
    userCodeLength: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["number"])().int().positive().default(8).describe("Length of the user code to be generated. Default is 8 characters."),
    generateDeviceCode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["custom"])((val)=>typeof val === "function", {
        message: "generateDeviceCode must be a function that returns a string or a promise that resolves to a string."
    }).optional().describe("Function to generate a device code. If not provided, a default random string generator will be used."),
    generateUserCode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["custom"])((val)=>typeof val === "function", {
        message: "generateUserCode must be a function that returns a string or a promise that resolves to a string."
    }).optional().describe("Function to generate a user code. If not provided, a default random string generator will be used."),
    validateClient: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["custom"])((val)=>typeof val === "function", {
        message: "validateClient must be a function that returns a boolean or a promise that resolves to a boolean."
    }).optional().describe("Function to validate the client ID. If not provided, no validation will be performed."),
    onDeviceAuthRequest: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["custom"])((val)=>typeof val === "function", {
        message: "onDeviceAuthRequest must be a function that returns void or a promise that resolves to void."
    }).optional().describe("Function to handle device authorization requests. If not provided, no additional actions will be taken."),
    verificationUri: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().optional().describe("The URI where users verify their device code. Can be an absolute URL (https://example.com/device) or relative path (/custom-path). This will be returned as verification_uri in the device code response. If not provided, defaults to /device."),
    schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["custom"])(()=>true)
});
const deviceAuthorization = (options = {})=>{
    const opts = deviceAuthorizationOptionsSchema.parse(options);
    return {
        id: "device-authorization",
        schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["mergeSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["schema"], options?.schema),
        endpoints: {
            deviceCode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["deviceCode"])(opts),
            deviceToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["deviceToken"])(opts),
            deviceVerify: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["deviceVerify"],
            deviceApprove: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["deviceApprove"],
            deviceDeny: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["deviceDeny"]
        },
        $ERROR_CODES: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEVICE_AUTHORIZATION_ERROR_CODES"],
        options
    };
};
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/email-otp/utils.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "defaultKeyHasher": (()=>defaultKeyHasher),
    "splitAtLastColon": (()=>splitAtLastColon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/hash.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/base64.mjs [middleware-edge] (ecmascript)");
;
;
//#region src/plugins/email-otp/utils.ts
const defaultKeyHasher = async (otp)=>{
    const hash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createHash"])("SHA-256").digest(new TextEncoder().encode(otp));
    return __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["base64Url"].encode(new Uint8Array(hash), {
        padding: false
    });
};
function splitAtLastColon(input) {
    const idx = input.lastIndexOf(":");
    if (idx === -1) return [
        input,
        ""
    ];
    return [
        input.slice(0, idx),
        input.slice(idx + 1)
    ];
}
;
 //# sourceMappingURL=utils.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/email-otp/otp-token.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "storeOTP": (()=>storeOTP),
    "verifyStoredOTP": (()=>verifyStoredOTP)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$buffer$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/buffer.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/email-otp/utils.mjs [middleware-edge] (ecmascript)");
;
;
;
//#region src/plugins/email-otp/otp-token.ts
async function storeOTP(ctx, opts, otp) {
    if (opts.storeOTP === "encrypted") return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["symmetricEncrypt"])({
        key: ctx.context.secret,
        data: otp
    });
    if (opts.storeOTP === "hashed") return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defaultKeyHasher"])(otp);
    if (typeof opts.storeOTP === "object" && "hash" in opts.storeOTP) return await opts.storeOTP.hash(otp);
    if (typeof opts.storeOTP === "object" && "encrypt" in opts.storeOTP) return await opts.storeOTP.encrypt(otp);
    return otp;
}
async function verifyStoredOTP(ctx, opts, storedOtp, otp) {
    if (opts.storeOTP === "encrypted") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$buffer$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["constantTimeEqual"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["symmetricDecrypt"])({
        key: ctx.context.secret,
        data: storedOtp
    }), otp);
    if (opts.storeOTP === "hashed") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$buffer$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["constantTimeEqual"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defaultKeyHasher"])(otp), storedOtp);
    if (typeof opts.storeOTP === "object" && "hash" in opts.storeOTP) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$buffer$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["constantTimeEqual"])(await opts.storeOTP.hash(otp), storedOtp);
    if (typeof opts.storeOTP === "object" && "decrypt" in opts.storeOTP) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$buffer$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["constantTimeEqual"])(await opts.storeOTP.decrypt(storedOtp), otp);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$buffer$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["constantTimeEqual"])(otp, storedOtp);
}
;
 //# sourceMappingURL=otp-token.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/email-otp/routes.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ERROR_CODES": (()=>ERROR_CODES),
    "checkVerificationOTP": (()=>checkVerificationOTP),
    "createVerificationOTP": (()=>createVerificationOTP),
    "forgetPasswordEmailOTP": (()=>forgetPasswordEmailOTP),
    "getVerificationOTP": (()=>getVerificationOTP),
    "resetPasswordEmailOTP": (()=>resetPasswordEmailOTP),
    "sendVerificationOTP": (()=>sendVerificationOTP),
    "signInEmailOTP": (()=>signInEmailOTP),
    "verifyEmailOTP": (()=>verifyEmailOTP)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$date$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/date.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/db/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/random.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/routes/session.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/email-otp/utils.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$otp$2d$token$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/email-otp/otp-token.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/error/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/error/codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/error-codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/zod/v4/classic/schemas.js [middleware-edge] (ecmascript)");
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
;
;
;
//#region src/plugins/email-otp/routes.ts
const types = [
    "email-verification",
    "sign-in",
    "forget-password"
];
const ERROR_CODES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defineErrorCodes"])({
    OTP_EXPIRED: "OTP expired",
    INVALID_OTP: "Invalid OTP",
    TOO_MANY_ATTEMPTS: "Too many attempts"
});
const sendVerificationOTPBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])({}).meta({
        description: "Email address to send the OTP"
    }),
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["enum"])(types).meta({
        description: "Type of the OTP"
    })
});
/**
* ### Endpoint
*
* POST `/email-otp/send-verification-otp`
*
* ### API Methods
*
* **server:**
* `auth.api.sendVerificationOTP`
*
* **client:**
* `authClient.emailOtp.sendVerificationOtp`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/email-otp#api-method-email-otp-send-verification-otp)
*/ const sendVerificationOTP = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/email-otp/send-verification-otp", {
        method: "POST",
        body: sendVerificationOTPBodySchema,
        metadata: {
            openapi: {
                operationId: "sendEmailVerificationOTP",
                description: "Send a verification OTP to an email",
                responses: {
                    200: {
                        description: "Success",
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
        if (!opts?.sendVerificationOTP) {
            ctx.context.logger.error("send email verification is not implemented");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: "send email verification is not implemented"
            });
        }
        const email = ctx.body.email.toLowerCase();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["email"])().safeParse(email).success) throw ctx.error("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].INVALID_EMAIL
        });
        const otp = opts.generateOTP({
            email,
            type: ctx.body.type
        }, ctx) || defaultOTPGenerator(opts);
        const storedOTP = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$otp$2d$token$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["storeOTP"])(ctx, opts, otp);
        await ctx.context.internalAdapter.createVerificationValue({
            value: `${storedOTP}:0`,
            identifier: `${ctx.body.type}-otp-${email}`,
            expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$date$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getDate"])(opts.expiresIn, "sec")
        }).catch(async (error)=>{
            await ctx.context.internalAdapter.deleteVerificationByIdentifier(`${ctx.body.type}-otp-${email}`);
            await ctx.context.internalAdapter.createVerificationValue({
                value: `${storedOTP}:0`,
                identifier: `${ctx.body.type}-otp-${email}`,
                expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$date$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getDate"])(opts.expiresIn, "sec")
            });
        });
        if (!await ctx.context.internalAdapter.findUserByEmail(email)) if (ctx.body.type === "sign-in" && !opts.disableSignUp) {} else {
            await ctx.context.internalAdapter.deleteVerificationByIdentifier(`${ctx.body.type}-otp-${email}`);
            return ctx.json({
                success: true
            });
        }
        await ctx.context.runInBackgroundOrAwait(opts.sendVerificationOTP({
            email,
            otp,
            type: ctx.body.type
        }, ctx));
        return ctx.json({
            success: true
        });
    });
const createVerificationOTPBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])({}).meta({
        description: "Email address to send the OTP"
    }),
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["enum"])(types).meta({
        required: true,
        description: "Type of the OTP"
    })
});
const createVerificationOTP = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])({
        method: "POST",
        body: createVerificationOTPBodySchema,
        metadata: {
            openapi: {
                operationId: "createEmailVerificationOTP",
                description: "Create a verification OTP for an email",
                responses: {
                    200: {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "string"
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        const email = ctx.body.email.toLowerCase();
        const otp = opts.generateOTP({
            email,
            type: ctx.body.type
        }, ctx) || defaultOTPGenerator(opts);
        const storedOTP = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$otp$2d$token$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["storeOTP"])(ctx, opts, otp);
        await ctx.context.internalAdapter.createVerificationValue({
            value: `${storedOTP}:0`,
            identifier: `${ctx.body.type}-otp-${email}`,
            expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$date$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getDate"])(opts.expiresIn, "sec")
        });
        return otp;
    });
const getVerificationOTPBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])({}).meta({
        description: "Email address the OTP was sent to"
    }),
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["enum"])(types).meta({
        required: true,
        description: "Type of the OTP"
    })
});
/**
* ### Endpoint
*
* GET `/email-otp/get-verification-otp`
*
* ### API Methods
*
* **server:**
* `auth.api.getVerificationOTP`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/email-otp#api-method-email-otp-get-verification-otp)
*/ const getVerificationOTP = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])({
        method: "GET",
        query: getVerificationOTPBodySchema,
        metadata: {
            openapi: {
                operationId: "getEmailVerificationOTP",
                description: "Get a verification OTP for an email",
                responses: {
                    "200": {
                        description: "OTP retrieved successfully or not found/expired",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        otp: {
                                            type: "string",
                                            nullable: true,
                                            description: "The stored OTP, or null if not found or expired"
                                        }
                                    },
                                    required: [
                                        "otp"
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        const email = ctx.query.email.toLowerCase();
        const verificationValue = await ctx.context.internalAdapter.findVerificationValue(`${ctx.query.type}-otp-${email}`);
        if (!verificationValue || verificationValue.expiresAt < /* @__PURE__ */ new Date()) return ctx.json({
            otp: null
        });
        if (opts.storeOTP === "hashed" || typeof opts.storeOTP === "object" && "hash" in opts.storeOTP) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "OTP is hashed, cannot return the plain text OTP"
        });
        const [storedOtp, _attempts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["splitAtLastColon"])(verificationValue.value);
        let otp = storedOtp;
        if (opts.storeOTP === "encrypted") otp = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["symmetricDecrypt"])({
            key: ctx.context.secret,
            data: storedOtp
        });
        if (typeof opts.storeOTP === "object" && "decrypt" in opts.storeOTP) otp = await opts.storeOTP.decrypt(storedOtp);
        return ctx.json({
            otp
        });
    });
const checkVerificationOTPBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "Email address the OTP was sent to"
    }),
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["enum"])(types).meta({
        required: true,
        description: "Type of the OTP"
    }),
    otp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        required: true,
        description: "OTP to verify"
    })
});
/**
* ### Endpoint
*
* GET `/email-otp/check-verification-otp`
*
* ### API Methods
*
* **server:**
* `auth.api.checkVerificationOTP`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/email-otp#api-method-email-otp-check-verification-otp)
*/ const checkVerificationOTP = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/email-otp/check-verification-otp", {
        method: "POST",
        body: checkVerificationOTPBodySchema,
        metadata: {
            openapi: {
                operationId: "verifyEmailWithOTP",
                description: "Verify an email with an OTP",
                responses: {
                    200: {
                        description: "Success",
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
        const email = ctx.body.email.toLowerCase();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["email"])().safeParse(email).success) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].INVALID_EMAIL
        });
        if (!await ctx.context.internalAdapter.findUserByEmail(email)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].USER_NOT_FOUND
        });
        const verificationValue = await ctx.context.internalAdapter.findVerificationValue(`${ctx.body.type}-otp-${email}`);
        if (!verificationValue) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: ERROR_CODES.INVALID_OTP
        });
        if (verificationValue.expiresAt < /* @__PURE__ */ new Date()) {
            await ctx.context.internalAdapter.deleteVerificationValue(verificationValue.id);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: ERROR_CODES.OTP_EXPIRED
            });
        }
        const [otpValue, attempts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["splitAtLastColon"])(verificationValue.value);
        const allowedAttempts = opts?.allowedAttempts || 3;
        if (attempts && parseInt(attempts) >= allowedAttempts) {
            await ctx.context.internalAdapter.deleteVerificationValue(verificationValue.id);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
                message: ERROR_CODES.TOO_MANY_ATTEMPTS
            });
        }
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$otp$2d$token$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["verifyStoredOTP"])(ctx, opts, otpValue, ctx.body.otp)) {
            await ctx.context.internalAdapter.updateVerificationValue(verificationValue.id, {
                value: `${otpValue}:${parseInt(attempts || "0") + 1}`
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: ERROR_CODES.INVALID_OTP
            });
        }
        return ctx.json({
            success: true
        });
    });
const verifyEmailOTPBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])({}).meta({
        description: "Email address to verify"
    }),
    otp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        required: true,
        description: "OTP to verify"
    })
});
/**
* ### Endpoint
*
* POST `/email-otp/verify-email`
*
* ### API Methods
*
* **server:**
* `auth.api.verifyEmailOTP`
*
* **client:**
* `authClient.emailOtp.verifyEmail`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/email-otp#api-method-email-otp-verify-email)
*/ const verifyEmailOTP = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/email-otp/verify-email", {
        method: "POST",
        body: verifyEmailOTPBodySchema,
        metadata: {
            openapi: {
                description: "Verify email with OTP",
                responses: {
                    200: {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        status: {
                                            type: "boolean",
                                            description: "Indicates if the verification was successful",
                                            enum: [
                                                true
                                            ]
                                        },
                                        token: {
                                            type: "string",
                                            nullable: true,
                                            description: "Session token if autoSignInAfterVerification is enabled, otherwise null"
                                        },
                                        user: {
                                            $ref: "#/components/schemas/User"
                                        }
                                    },
                                    required: [
                                        "status",
                                        "token",
                                        "user"
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        const email = ctx.body.email.toLowerCase();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["email"])().safeParse(email).success) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].INVALID_EMAIL
        });
        const verificationValue = await ctx.context.internalAdapter.findVerificationValue(`email-verification-otp-${email}`);
        if (!verificationValue) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: ERROR_CODES.INVALID_OTP
        });
        if (verificationValue.expiresAt < /* @__PURE__ */ new Date()) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: ERROR_CODES.OTP_EXPIRED
        });
        const [otpValue, attempts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["splitAtLastColon"])(verificationValue.value);
        const allowedAttempts = opts?.allowedAttempts || 3;
        if (attempts && parseInt(attempts) >= allowedAttempts) {
            await ctx.context.internalAdapter.deleteVerificationValue(verificationValue.id);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
                message: ERROR_CODES.TOO_MANY_ATTEMPTS
            });
        }
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$otp$2d$token$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["verifyStoredOTP"])(ctx, opts, otpValue, ctx.body.otp)) {
            await ctx.context.internalAdapter.updateVerificationValue(verificationValue.id, {
                value: `${otpValue}:${parseInt(attempts || "0") + 1}`
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: ERROR_CODES.INVALID_OTP
            });
        }
        await ctx.context.internalAdapter.deleteVerificationValue(verificationValue.id);
        const user = await ctx.context.internalAdapter.findUserByEmail(email);
        if (!user) /**
	* safe to leak the existence of a user, given the user has already the OTP from the
	* email
	*/ throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].USER_NOT_FOUND
        });
        if (ctx.context.options.emailVerification?.beforeEmailVerification) await ctx.context.options.emailVerification.beforeEmailVerification(user.user, ctx.request);
        const updatedUser = await ctx.context.internalAdapter.updateUser(user.user.id, {
            email,
            emailVerified: true
        });
        if (ctx.context.options.emailVerification?.onEmailVerification) await ctx.context.options.emailVerification.onEmailVerification(updatedUser, ctx.request);
        await ctx.context.options.emailVerification?.afterEmailVerification?.(updatedUser, ctx.request);
        if (ctx.context.options.emailVerification?.autoSignInAfterVerification) {
            const session = await ctx.context.internalAdapter.createSession(updatedUser.id);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setSessionCookie"])(ctx, {
                session,
                user: updatedUser
            });
            return ctx.json({
                status: true,
                token: session.token,
                user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, updatedUser)
            });
        }
        const currentSession = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSessionFromCtx"])(ctx);
        if (currentSession && updatedUser.emailVerified) {
            const dontRememberMeCookie = await ctx.getSignedCookie(ctx.context.authCookies.dontRememberToken.name, ctx.context.secret);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setCookieCache"])(ctx, {
                session: currentSession.session,
                user: {
                    ...currentSession.user,
                    emailVerified: true
                }
            }, !!dontRememberMeCookie);
        }
        return ctx.json({
            status: true,
            token: null,
            user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, updatedUser)
        });
    });
const signInEmailOTPBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])({}).meta({
        description: "Email address to sign in"
    }),
    otp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        required: true,
        description: "OTP sent to the email"
    })
});
/**
* ### Endpoint
*
* POST `/sign-in/email-otp`
*
* ### API Methods
*
* **server:**
* `auth.api.signInEmailOTP`
*
* **client:**
* `authClient.signIn.emailOtp`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/email-otp#api-method-sign-in-email-otp)
*/ const signInEmailOTP = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/sign-in/email-otp", {
        method: "POST",
        body: signInEmailOTPBodySchema,
        metadata: {
            openapi: {
                operationId: "signInWithEmailOTP",
                description: "Sign in with email and OTP",
                responses: {
                    200: {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        token: {
                                            type: "string",
                                            description: "Session token for the authenticated session"
                                        },
                                        user: {
                                            $ref: "#/components/schemas/User"
                                        }
                                    },
                                    required: [
                                        "token",
                                        "user"
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        const email = ctx.body.email.toLowerCase();
        const verificationValue = await ctx.context.internalAdapter.findVerificationValue(`sign-in-otp-${email}`);
        if (!verificationValue) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: ERROR_CODES.INVALID_OTP
        });
        if (verificationValue.expiresAt < /* @__PURE__ */ new Date()) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: ERROR_CODES.OTP_EXPIRED
        });
        const [otpValue, attempts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["splitAtLastColon"])(verificationValue.value);
        const allowedAttempts = opts?.allowedAttempts || 3;
        if (attempts && parseInt(attempts) >= allowedAttempts) {
            await ctx.context.internalAdapter.deleteVerificationValue(verificationValue.id);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
                message: ERROR_CODES.TOO_MANY_ATTEMPTS
            });
        }
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$otp$2d$token$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["verifyStoredOTP"])(ctx, opts, otpValue, ctx.body.otp)) {
            await ctx.context.internalAdapter.updateVerificationValue(verificationValue.id, {
                value: `${otpValue}:${parseInt(attempts || "0") + 1}`
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: ERROR_CODES.INVALID_OTP
            });
        }
        await ctx.context.internalAdapter.deleteVerificationValue(verificationValue.id);
        const user = await ctx.context.internalAdapter.findUserByEmail(email);
        if (!user) {
            if (opts.disableSignUp) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].USER_NOT_FOUND
            });
            const newUser = await ctx.context.internalAdapter.createUser({
                email,
                emailVerified: true,
                name: ""
            });
            const session$1 = await ctx.context.internalAdapter.createSession(newUser.id);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setSessionCookie"])(ctx, {
                session: session$1,
                user: newUser
            });
            return ctx.json({
                token: session$1.token,
                user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, newUser)
            });
        }
        if (!user.user.emailVerified) await ctx.context.internalAdapter.updateUser(user.user.id, {
            emailVerified: true
        });
        const session = await ctx.context.internalAdapter.createSession(user.user.id);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setSessionCookie"])(ctx, {
            session,
            user: user.user
        });
        return ctx.json({
            token: session.token,
            user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, user.user)
        });
    });
const forgetPasswordEmailOTPBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "Email address to send the OTP"
    })
});
/**
* ### Endpoint
*
* POST `/forget-password/email-otp`
*
* ### API Methods
*
* **server:**
* `auth.api.forgetPasswordEmailOTP`
*
* **client:**
* `authClient.forgetPassword.emailOtp`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/email-otp#api-method-forget-password-email-otp)
*/ const forgetPasswordEmailOTP = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/forget-password/email-otp", {
        method: "POST",
        body: forgetPasswordEmailOTPBodySchema,
        metadata: {
            openapi: {
                operationId: "forgetPasswordWithEmailOTP",
                description: "Forget password with email and OTP",
                responses: {
                    200: {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean",
                                            description: "Indicates if the OTP was sent successfully"
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
        const email = ctx.body.email;
        const otp = opts.generateOTP({
            email,
            type: "forget-password"
        }, ctx) || defaultOTPGenerator(opts);
        const storedOTP = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$otp$2d$token$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["storeOTP"])(ctx, opts, otp);
        await ctx.context.internalAdapter.createVerificationValue({
            value: `${storedOTP}:0`,
            identifier: `forget-password-otp-${email}`,
            expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$date$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getDate"])(opts.expiresIn, "sec")
        });
        if (!await ctx.context.internalAdapter.findUserByEmail(email)) {
            await ctx.context.internalAdapter.deleteVerificationByIdentifier(`forget-password-otp-${email}`);
            return ctx.json({
                success: true
            });
        }
        await ctx.context.runInBackgroundOrAwait(opts.sendVerificationOTP({
            email,
            otp,
            type: "forget-password"
        }, ctx));
        return ctx.json({
            success: true
        });
    });
const resetPasswordEmailOTPBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "Email address to reset the password"
    }),
    otp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "OTP sent to the email"
    }),
    password: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "New password"
    })
});
/**
* ### Endpoint
*
* POST `/email-otp/reset-password`
*
* ### API Methods
*
* **server:**
* `auth.api.resetPasswordEmailOTP`
*
* **client:**
* `authClient.emailOtp.resetPassword`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/email-otp#api-method-email-otp-reset-password)
*/ const resetPasswordEmailOTP = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/email-otp/reset-password", {
        method: "POST",
        body: resetPasswordEmailOTPBodySchema,
        metadata: {
            openapi: {
                operationId: "resetPasswordWithEmailOTP",
                description: "Reset password with email and OTP",
                responses: {
                    200: {
                        description: "Success",
                        contnt: {
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
        const email = ctx.body.email;
        const verificationValue = await ctx.context.internalAdapter.findVerificationValue(`forget-password-otp-${email}`);
        if (!verificationValue) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: ERROR_CODES.INVALID_OTP
        });
        if (verificationValue.expiresAt < /* @__PURE__ */ new Date()) {
            await ctx.context.internalAdapter.deleteVerificationValue(verificationValue.id);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: ERROR_CODES.OTP_EXPIRED
            });
        }
        const [otpValue, attempts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["splitAtLastColon"])(verificationValue.value);
        const allowedAttempts = opts?.allowedAttempts || 3;
        if (attempts && parseInt(attempts) >= allowedAttempts) {
            await ctx.context.internalAdapter.deleteVerificationValue(verificationValue.id);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
                message: ERROR_CODES.TOO_MANY_ATTEMPTS
            });
        }
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$otp$2d$token$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["verifyStoredOTP"])(ctx, opts, otpValue, ctx.body.otp)) {
            await ctx.context.internalAdapter.updateVerificationValue(verificationValue.id, {
                value: `${otpValue}:${parseInt(attempts || "0") + 1}`
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: ERROR_CODES.INVALID_OTP
            });
        }
        await ctx.context.internalAdapter.deleteVerificationValue(verificationValue.id);
        const user = await ctx.context.internalAdapter.findUserByEmail(email, {
            includeAccounts: true
        });
        if (!user) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].USER_NOT_FOUND
        });
        const minPasswordLength = ctx.context.password.config.minPasswordLength;
        if (ctx.body.password.length < minPasswordLength) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].PASSWORD_TOO_SHORT
        });
        const maxPasswordLength = ctx.context.password.config.maxPasswordLength;
        if (ctx.body.password.length > maxPasswordLength) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].PASSWORD_TOO_LONG
        });
        const passwordHash = await ctx.context.password.hash(ctx.body.password);
        if (!user.accounts?.find((account)=>account.providerId === "credential")) await ctx.context.internalAdapter.createAccount({
            userId: user.user.id,
            providerId: "credential",
            accountId: user.user.id,
            password: passwordHash
        });
        else await ctx.context.internalAdapter.updatePassword(user.user.id, passwordHash);
        if (ctx.context.options.emailAndPassword?.onPasswordReset) await ctx.context.options.emailAndPassword.onPasswordReset({
            user: user.user
        }, ctx.request);
        if (!user.user.emailVerified) await ctx.context.internalAdapter.updateUser(user.user.id, {
            emailVerified: true
        });
        if (ctx.context.options.emailAndPassword?.revokeSessionsOnPasswordReset) await ctx.context.internalAdapter.deleteSessions(user.user.id);
        return ctx.json({
            success: true
        });
    });
const defaultOTPGenerator = (options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateRandomString"])(options.otpLength ?? 6, "0-9");
;
 //# sourceMappingURL=routes.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/email-otp/index.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "emailOTP": (()=>emailOTP)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$date$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/date.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/random.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$plugin$2d$helper$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/plugin-helper.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$otp$2d$token$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/email-otp/otp-token.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/email-otp/routes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/api/index.mjs [middleware-edge] (ecmascript)");
;
;
;
;
;
;
;
//#region src/plugins/email-otp/index.ts
const defaultOTPGenerator = (options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateRandomString"])(options.otpLength ?? 6, "0-9");
const emailOTP = (options)=>{
    const opts = {
        expiresIn: 300,
        generateOTP: ()=>defaultOTPGenerator(options),
        storeOTP: "plain",
        ...options
    };
    const sendVerificationOTPAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["sendVerificationOTP"])(opts);
    return {
        id: "email-otp",
        init (ctx) {
            if (!opts.overrideDefaultEmailVerification) return;
            return {
                options: {
                    emailVerification: {
                        async sendVerificationEmail (data, request) {
                            await ctx.runInBackgroundOrAwait(sendVerificationOTPAction({
                                context: ctx,
                                request,
                                body: {
                                    email: data.user.email,
                                    type: "email-verification"
                                },
                                ctx
                            }));
                        }
                    }
                }
            };
        },
        endpoints: {
            sendVerificationOTP: sendVerificationOTPAction,
            createVerificationOTP: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createVerificationOTP"])(opts),
            getVerificationOTP: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getVerificationOTP"])(opts),
            checkVerificationOTP: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["checkVerificationOTP"])(opts),
            verifyEmailOTP: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["verifyEmailOTP"])(opts),
            signInEmailOTP: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["signInEmailOTP"])(opts),
            forgetPasswordEmailOTP: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["forgetPasswordEmailOTP"])(opts),
            resetPasswordEmailOTP: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resetPasswordEmailOTP"])(opts)
        },
        hooks: {
            after: [
                {
                    matcher (context) {
                        return !!(context.path?.startsWith("/sign-up") && opts.sendVerificationOnSignUp && !opts.overrideDefaultEmailVerification);
                    },
                    handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
                        const email = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$plugin$2d$helper$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEndpointResponse"])(ctx))?.user.email;
                        if (email) {
                            const otp = opts.generateOTP({
                                email,
                                type: ctx.body.type
                            }, ctx) || defaultOTPGenerator(opts);
                            const storedOTP = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$otp$2d$token$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["storeOTP"])(ctx, opts, otp);
                            await ctx.context.internalAdapter.createVerificationValue({
                                value: `${storedOTP}:0`,
                                identifier: `email-verification-otp-${email}`,
                                expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$date$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getDate"])(opts.expiresIn, "sec")
                            });
                            await ctx.context.runInBackgroundOrAwait(options.sendVerificationOTP({
                                email,
                                otp,
                                type: "email-verification"
                            }, ctx));
                        }
                    })
                }
            ]
        },
        $ERROR_CODES: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ERROR_CODES"],
        rateLimit: [
            {
                pathMatcher (path) {
                    return path === "/email-otp/send-verification-otp";
                },
                window: 60,
                max: 3
            },
            {
                pathMatcher (path) {
                    return path === "/email-otp/check-verification-otp";
                },
                window: 60,
                max: 3
            },
            {
                pathMatcher (path) {
                    return path === "/email-otp/verify-email";
                },
                window: 60,
                max: 3
            },
            {
                pathMatcher (path) {
                    return path === "/sign-in/email-otp";
                },
                window: 60,
                max: 3
            }
        ],
        options
    };
};
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/auth0.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "auth0": (()=>auth0)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-fetch/fetch/dist/index.js [middleware-edge] (ecmascript)");
;
//#region src/plugins/generic-oauth/providers/auth0.ts
/**
* Auth0 OAuth provider helper
*
* @example
* ```ts
* import { genericOAuth, auth0 } from "better-auth/plugins/generic-oauth";
*
* export const auth = betterAuth({
*   plugins: [
*     genericOAuth({
*       config: [
*         auth0({
*           clientId: process.env.AUTH0_CLIENT_ID,
*           clientSecret: process.env.AUTH0_CLIENT_SECRET,
*           domain: process.env.AUTH0_DOMAIN,
*         }),
*       ],
*     }),
*   ],
* });
* ```
*/ function auth0(options) {
    const defaultScopes = [
        "openid",
        "profile",
        "email"
    ];
    const domain = options.domain.replace(/^https?:\/\//, "");
    const discoveryUrl = `https://${domain}/.well-known/openid-configuration`;
    const getUserInfo = async (tokens)=>{
        const { data: profile, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["betterFetch"])(`https://${domain}/userinfo`, {
            headers: {
                Authorization: `Bearer ${tokens.accessToken}`
            }
        });
        if (error || !profile) return null;
        return {
            id: profile.sub,
            name: profile.name ?? profile.nickname ?? void 0,
            email: profile.email ?? void 0,
            image: profile.picture,
            emailVerified: profile.email_verified ?? false
        };
    };
    return {
        providerId: "auth0",
        discoveryUrl,
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        scopes: options.scopes ?? defaultScopes,
        redirectURI: options.redirectURI,
        pkce: options.pkce,
        disableImplicitSignUp: options.disableImplicitSignUp,
        disableSignUp: options.disableSignUp,
        overrideUserInfo: options.overrideUserInfo,
        getUserInfo
    };
}
;
 //# sourceMappingURL=auth0.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/gumroad.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "gumroad": (()=>gumroad)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-fetch/fetch/dist/index.js [middleware-edge] (ecmascript)");
;
//#region src/plugins/generic-oauth/providers/gumroad.ts
/**
* Gumroad OAuth provider helper
*
* @example
* ```ts
* import { genericOAuth, gumroad } from "better-auth/plugins/generic-oauth";
*
* export const auth = betterAuth({
*   plugins: [
*     genericOAuth({
*       config: [
*         gumroad({
*           clientId: process.env.GUMROAD_CLIENT_ID,
*           clientSecret: process.env.GUMROAD_CLIENT_SECRET,
*         }),
*       ],
*     }),
*   ],
* });
* ```
*
* @see https://app.gumroad.com/oauth
*/ function gumroad(options) {
    const getUserInfo = async (tokens)=>{
        const { data: profile, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["betterFetch"])("https://api.gumroad.com/v2/user", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${tokens.accessToken}`
            }
        });
        if (error || !profile?.success || !profile.user) return null;
        return {
            id: profile.user.user_id,
            name: profile.user.name,
            email: profile.user.email,
            image: profile.user.profile_url,
            emailVerified: false
        };
    };
    return {
        providerId: "gumroad",
        authorizationUrl: "https://gumroad.com/oauth/authorize",
        tokenUrl: "https://api.gumroad.com/oauth/token",
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        scopes: options.scopes ?? [
            "view_profile"
        ],
        redirectURI: options.redirectURI,
        pkce: options.pkce,
        disableImplicitSignUp: options.disableImplicitSignUp,
        disableSignUp: options.disableSignUp,
        overrideUserInfo: options.overrideUserInfo,
        getUserInfo
    };
}
;
 //# sourceMappingURL=gumroad.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/hubspot.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hubspot": (()=>hubspot)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-fetch/fetch/dist/index.js [middleware-edge] (ecmascript)");
;
//#region src/plugins/generic-oauth/providers/hubspot.ts
/**
* HubSpot OAuth provider helper
*
* @example
* ```ts
* import { genericOAuth, hubspot } from "better-auth/plugins/generic-oauth";
*
* export const auth = betterAuth({
*   plugins: [
*     genericOAuth({
*       config: [
*         hubspot({
*           clientId: process.env.HUBSPOT_CLIENT_ID,
*           clientSecret: process.env.HUBSPOT_CLIENT_SECRET,
*           scopes: ["oauth", "contacts"],
*         }),
*       ],
*     }),
*   ],
* });
* ```
*/ function hubspot(options) {
    const defaultScopes = [
        "oauth"
    ];
    const getUserInfo = async (tokens)=>{
        const { data: profile, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["betterFetch"])(`https://api.hubapi.com/oauth/v1/access-tokens/${tokens.accessToken}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (error || !profile) return null;
        const id = profile.user_id ?? profile.signed_access_token?.userId;
        if (!id) return null;
        return {
            id,
            name: profile.user,
            email: profile.user,
            image: void 0,
            emailVerified: false
        };
    };
    return {
        providerId: "hubspot",
        authorizationUrl: "https://app.hubspot.com/oauth/authorize",
        tokenUrl: "https://api.hubapi.com/oauth/v1/token",
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        scopes: options.scopes ?? defaultScopes,
        redirectURI: options.redirectURI,
        authentication: "post",
        pkce: options.pkce,
        disableImplicitSignUp: options.disableImplicitSignUp,
        disableSignUp: options.disableSignUp,
        overrideUserInfo: options.overrideUserInfo,
        getUserInfo
    };
}
;
 //# sourceMappingURL=hubspot.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/keycloak.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "keycloak": (()=>keycloak)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-fetch/fetch/dist/index.js [middleware-edge] (ecmascript)");
;
//#region src/plugins/generic-oauth/providers/keycloak.ts
/**
* Keycloak OAuth provider helper
*
* @example
* ```ts
* import { genericOAuth, keycloak } from "better-auth/plugins/generic-oauth";
*
* export const auth = betterAuth({
*   plugins: [
*     genericOAuth({
*       config: [
*         keycloak({
*           clientId: process.env.KEYCLOAK_CLIENT_ID,
*           clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
*           issuer: process.env.KEYCLOAK_ISSUER,
*         }),
*       ],
*     }),
*   ],
* });
* ```
*/ function keycloak(options) {
    const defaultScopes = [
        "openid",
        "profile",
        "email"
    ];
    const issuer = options.issuer.replace(/\/$/, "");
    const discoveryUrl = `${issuer}/.well-known/openid-configuration`;
    const getUserInfo = async (tokens)=>{
        const { data: profile, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["betterFetch"])(`${issuer}/protocol/openid-connect/userinfo`, {
            headers: {
                Authorization: `Bearer ${tokens.accessToken}`
            }
        });
        if (error || !profile) return null;
        return {
            id: profile.sub,
            name: profile.name ?? profile.preferred_username ?? void 0,
            email: profile.email ?? void 0,
            image: profile.picture,
            emailVerified: profile.email_verified ?? false
        };
    };
    return {
        providerId: "keycloak",
        discoveryUrl,
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        scopes: options.scopes ?? defaultScopes,
        redirectURI: options.redirectURI,
        pkce: options.pkce,
        disableImplicitSignUp: options.disableImplicitSignUp,
        disableSignUp: options.disableSignUp,
        overrideUserInfo: options.overrideUserInfo,
        getUserInfo
    };
}
;
 //# sourceMappingURL=keycloak.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/line.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "line": (()=>line)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$decode_jwt$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/jose/dist/webapi/util/decode_jwt.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-fetch/fetch/dist/index.js [middleware-edge] (ecmascript)");
;
;
//#region src/plugins/generic-oauth/providers/line.ts
/**
* LINE OAuth provider helper
*
* LINE requires separate channels for different countries (Japan, Thailand, Taiwan, etc.).
* Each channel has its own clientId and clientSecret. To support multiple countries,
* call this function multiple times with different providerIds and credentials.
*
* @example
* ```ts
* import { genericOAuth, line } from "better-auth/plugins/generic-oauth";
*
* export const auth = betterAuth({
*   plugins: [
*     genericOAuth({
*       config: [
*         // Japan channel
*         line({
*           providerId: "line-jp",
*           clientId: process.env.LINE_JP_CLIENT_ID,
*           clientSecret: process.env.LINE_JP_CLIENT_SECRET,
*         }),
*         // Thailand channel
*         line({
*           providerId: "line-th",
*           clientId: process.env.LINE_TH_CLIENT_ID,
*           clientSecret: process.env.LINE_TH_CLIENT_SECRET,
*         }),
*         // Taiwan channel
*         line({
*           providerId: "line-tw",
*           clientId: process.env.LINE_TW_CLIENT_ID,
*           clientSecret: process.env.LINE_TW_CLIENT_SECRET,
*         }),
*       ],
*     }),
*   ],
* });
* ```
*/ function line(options) {
    const defaultScopes = [
        "openid",
        "profile",
        "email"
    ];
    const authorizationUrl = "https://access.line.me/oauth2/v2.1/authorize";
    const tokenUrl = "https://api.line.me/oauth2/v2.1/token";
    const userInfoUrl = "https://api.line.me/oauth2/v2.1/userinfo";
    const getUserInfo = async (tokens)=>{
        let profile = null;
        if (tokens.idToken) try {
            profile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$decode_jwt$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["decodeJwt"])(tokens.idToken);
        } catch  {}
        if (!profile) {
            const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["betterFetch"])(userInfoUrl, {
                headers: {
                    Authorization: `Bearer ${tokens.accessToken}`
                }
            });
            if (error || !data) return null;
            profile = data;
        }
        if (!profile) return null;
        return {
            id: profile.sub,
            name: profile.name,
            email: profile.email,
            image: profile.picture,
            emailVerified: false
        };
    };
    return {
        providerId: options.providerId ?? "line",
        authorizationUrl,
        tokenUrl,
        userInfoUrl,
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        scopes: options.scopes ?? defaultScopes,
        redirectURI: options.redirectURI,
        pkce: options.pkce,
        disableImplicitSignUp: options.disableImplicitSignUp,
        disableSignUp: options.disableSignUp,
        overrideUserInfo: options.overrideUserInfo,
        getUserInfo
    };
}
;
 //# sourceMappingURL=line.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/microsoft-entra-id.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "microsoftEntraId": (()=>microsoftEntraId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-fetch/fetch/dist/index.js [middleware-edge] (ecmascript)");
;
//#region src/plugins/generic-oauth/providers/microsoft-entra-id.ts
/**
* Microsoft Entra ID (Azure AD) OAuth provider helper
*
* @example
* ```ts
* import { genericOAuth, microsoftEntraId } from "better-auth/plugins/generic-oauth";
*
* export const auth = betterAuth({
*   plugins: [
*     genericOAuth({
*       config: [
*         microsoftEntraId({
*           clientId: process.env.MS_APP_ID,
*           clientSecret: process.env.MS_CLIENT_SECRET,
*           tenantId: process.env.MS_TENANT_ID,
*         }),
*       ],
*     }),
*   ],
* });
* ```
*/ function microsoftEntraId(options) {
    const defaultScopes = [
        "openid",
        "profile",
        "email"
    ];
    const tenantId = options.tenantId;
    const authorizationUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize`;
    const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;
    const userInfoUrl = "https://graph.microsoft.com/oidc/userinfo";
    const getUserInfo = async (tokens)=>{
        const { data: profile, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["betterFetch"])(userInfoUrl, {
            headers: {
                Authorization: `Bearer ${tokens.accessToken}`
            }
        });
        if (error || !profile) return null;
        return {
            id: profile.sub,
            name: profile.name ?? (`${profile.given_name ?? ""} ${profile.family_name ?? ""}`.trim() || void 0),
            email: profile.email ?? profile.preferred_username ?? void 0,
            image: profile.picture,
            emailVerified: profile.email_verified ?? false
        };
    };
    return {
        providerId: "microsoft-entra-id",
        authorizationUrl,
        tokenUrl,
        userInfoUrl,
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        scopes: options.scopes ?? defaultScopes,
        redirectURI: options.redirectURI,
        pkce: options.pkce,
        disableImplicitSignUp: options.disableImplicitSignUp,
        disableSignUp: options.disableSignUp,
        overrideUserInfo: options.overrideUserInfo,
        getUserInfo
    };
}
;
 //# sourceMappingURL=microsoft-entra-id.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/okta.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "okta": (()=>okta)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-fetch/fetch/dist/index.js [middleware-edge] (ecmascript)");
;
//#region src/plugins/generic-oauth/providers/okta.ts
/**
* Okta OAuth provider helper
*
* @example
* ```ts
* import { genericOAuth, okta } from "better-auth/plugins/generic-oauth";
*
* export const auth = betterAuth({
*   plugins: [
*     genericOAuth({
*       config: [
*         okta({
*           clientId: process.env.OKTA_CLIENT_ID,
*           clientSecret: process.env.OKTA_CLIENT_SECRET,
*           issuer: process.env.OKTA_ISSUER,
*         }),
*       ],
*     }),
*   ],
* });
* ```
*/ function okta(options) {
    const defaultScopes = [
        "openid",
        "profile",
        "email"
    ];
    const issuer = options.issuer.replace(/\/$/, "");
    const discoveryUrl = `${issuer}/.well-known/openid-configuration`;
    const getUserInfo = async (tokens)=>{
        const { data: profile, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["betterFetch"])(`${issuer}/v1/userinfo`, {
            headers: {
                Authorization: `Bearer ${tokens.accessToken}`
            }
        });
        if (error || !profile) return null;
        return {
            id: profile.sub,
            name: profile.name ?? profile.preferred_username ?? void 0,
            email: profile.email ?? void 0,
            image: profile.picture,
            emailVerified: profile.email_verified ?? false
        };
    };
    return {
        providerId: "okta",
        discoveryUrl,
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        scopes: options.scopes ?? defaultScopes,
        redirectURI: options.redirectURI,
        pkce: options.pkce,
        disableImplicitSignUp: options.disableImplicitSignUp,
        disableSignUp: options.disableSignUp,
        overrideUserInfo: options.overrideUserInfo,
        getUserInfo
    };
}
;
 //# sourceMappingURL=okta.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/patreon.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "patreon": (()=>patreon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-fetch/fetch/dist/index.js [middleware-edge] (ecmascript)");
;
//#region src/plugins/generic-oauth/providers/patreon.ts
/**
* Patreon OAuth provider helper
*
* @example
* ```ts
* import { genericOAuth, patreon } from "better-auth/plugins/generic-oauth";
*
* export const auth = betterAuth({
*   plugins: [
*     genericOAuth({
*       config: [
*         patreon({
*           clientId: process.env.PATREON_CLIENT_ID,
*           clientSecret: process.env.PATREON_CLIENT_SECRET,
*         }),
*       ],
*     }),
*   ],
* });
* ```
*/ function patreon(options) {
    const defaultScopes = [
        "identity[email]"
    ];
    const getUserInfo = async (tokens)=>{
        const { data: profile, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["betterFetch"])("https://www.patreon.com/api/oauth2/v2/identity?fields[user]=email,full_name,image_url,is_email_verified", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${tokens.accessToken}`
            }
        });
        if (error || !profile) return null;
        return {
            id: profile.data.id,
            name: profile.data.attributes.full_name,
            email: profile.data.attributes.email,
            image: profile.data.attributes.image_url,
            emailVerified: profile.data.attributes.is_email_verified
        };
    };
    return {
        providerId: "patreon",
        authorizationUrl: "https://www.patreon.com/oauth2/authorize",
        tokenUrl: "https://www.patreon.com/api/oauth2/token",
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        scopes: options.scopes ?? defaultScopes,
        redirectURI: options.redirectURI,
        pkce: options.pkce,
        disableImplicitSignUp: options.disableImplicitSignUp,
        disableSignUp: options.disableSignUp,
        overrideUserInfo: options.overrideUserInfo,
        getUserInfo
    };
}
;
 //# sourceMappingURL=patreon.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/slack.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "slack": (()=>slack)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-fetch/fetch/dist/index.js [middleware-edge] (ecmascript)");
;
//#region src/plugins/generic-oauth/providers/slack.ts
/**
* Slack OAuth provider helper
*
* @example
* ```ts
* import { genericOAuth, slack } from "better-auth/plugins/generic-oauth";
*
* export const auth = betterAuth({
*   plugins: [
*     genericOAuth({
*       config: [
*         slack({
*           clientId: process.env.SLACK_CLIENT_ID,
*           clientSecret: process.env.SLACK_CLIENT_SECRET,
*         }),
*       ],
*     }),
*   ],
* });
* ```
*/ function slack(options) {
    const defaultScopes = [
        "openid",
        "profile",
        "email"
    ];
    const getUserInfo = async (tokens)=>{
        const { data: profile, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["betterFetch"])("https://slack.com/api/openid.connect.userInfo", {
            headers: {
                Authorization: `Bearer ${tokens.accessToken}`
            }
        });
        if (error || !profile) return null;
        return {
            id: profile["https://slack.com/user_id"] ?? profile.sub,
            name: profile.name,
            email: profile.email,
            image: profile.picture ?? profile["https://slack.com/user_image_512"],
            emailVerified: profile.email_verified ?? false
        };
    };
    return {
        providerId: "slack",
        authorizationUrl: "https://slack.com/openid/connect/authorize",
        tokenUrl: "https://slack.com/api/openid.connect.token",
        userInfoUrl: "https://slack.com/api/openid.connect.userInfo",
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        scopes: options.scopes ?? defaultScopes,
        redirectURI: options.redirectURI,
        pkce: options.pkce,
        disableImplicitSignUp: options.disableImplicitSignUp,
        disableSignUp: options.disableSignUp,
        overrideUserInfo: options.overrideUserInfo,
        getUserInfo
    };
}
;
 //# sourceMappingURL=slack.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/error-codes.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GENERIC_OAUTH_ERROR_CODES": (()=>GENERIC_OAUTH_ERROR_CODES)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/error-codes.mjs [middleware-edge] (ecmascript)");
;
//#region src/plugins/generic-oauth/error-codes.ts
const GENERIC_OAUTH_ERROR_CODES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defineErrorCodes"])({
    INVALID_OAUTH_CONFIGURATION: "Invalid OAuth configuration",
    TOKEN_URL_NOT_FOUND: "Invalid OAuth configuration. Token URL not found.",
    PROVIDER_CONFIG_NOT_FOUND: "No config found for provider",
    PROVIDER_ID_REQUIRED: "Provider ID is required",
    INVALID_OAUTH_CONFIG: "Invalid OAuth configuration.",
    SESSION_REQUIRED: "Session is required"
});
;
 //# sourceMappingURL=error-codes.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/routes.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getUserInfo": (()=>getUserInfo),
    "oAuth2Callback": (()=>oAuth2Callback),
    "oAuth2LinkAccount": (()=>oAuth2LinkAccount),
    "signInWithOAuth2": (()=>signInWithOAuth2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$oauth2$2f$state$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/oauth2/state.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$oauth2$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/oauth2/utils.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/routes/session.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$oauth2$2f$link$2d$account$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/oauth2/link-account.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$hide$2d$metadata$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/hide-metadata.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/error-codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/error/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/error/codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$oauth2$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/oauth2/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$oauth2$2f$create$2d$authorization$2d$url$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/oauth2/create-authorization-url.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$oauth2$2f$validate$2d$authorization$2d$code$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/oauth2/validate-authorization-code.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/zod/v4/classic/schemas.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/api/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$decode_jwt$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/jose/dist/webapi/util/decode_jwt.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-fetch/fetch/dist/index.js [middleware-edge] (ecmascript)");
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
//#region src/plugins/generic-oauth/routes.ts
const signInWithOAuth2BodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    providerId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The provider ID for the OAuth provider"
    }),
    callbackURL: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The URL to redirect to after sign in"
    }).optional(),
    errorCallbackURL: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The URL to redirect to if an error occurs"
    }).optional(),
    newUserCallbackURL: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The URL to redirect to after login if the user is new. Eg: \"/welcome\""
    }).optional(),
    disableRedirect: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["boolean"])().meta({
        description: "Disable redirect"
    }).optional(),
    scopes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])()).meta({
        description: "Scopes to be passed to the provider authorization request."
    }).optional(),
    requestSignUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["boolean"])().meta({
        description: "Explicitly request sign-up. Useful when disableImplicitSignUp is true for this provider. Eg: false"
    }).optional(),
    additionalData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["any"])()).optional()
});
/**
* ### Endpoint
*
* POST `/sign-in/oauth2`
*
* ### API Methods
*
* **server:**
* `auth.api.signInWithOAuth2`
*
* **client:**
* `authClient.signIn.oauth2`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/sign-in#api-method-sign-in-oauth2)
*/ const signInWithOAuth2 = (options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/sign-in/oauth2", {
        method: "POST",
        body: signInWithOAuth2BodySchema,
        metadata: {
            openapi: {
                description: "Sign in with OAuth2",
                responses: {
                    200: {
                        description: "Sign in with OAuth2",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        url: {
                                            type: "string"
                                        },
                                        redirect: {
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
        const { providerId } = ctx.body;
        const config = options.config.find((c)=>c.providerId === providerId);
        if (!config) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: `${__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GENERIC_OAUTH_ERROR_CODES"].PROVIDER_CONFIG_NOT_FOUND} ${providerId}`
        });
        const { discoveryUrl, authorizationUrl, tokenUrl, clientId, clientSecret, scopes, redirectURI, responseType, pkce, prompt, accessType, authorizationUrlParams, responseMode } = config;
        let finalAuthUrl = authorizationUrl;
        let finalTokenUrl = tokenUrl;
        if (discoveryUrl) {
            const discovery = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["betterFetch"])(discoveryUrl, {
                method: "GET",
                headers: config.discoveryHeaders,
                onError (context) {
                    ctx.context.logger.error(context.error.message, context.error, {
                        discoveryUrl
                    });
                }
            });
            if (discovery.data) {
                finalAuthUrl = discovery.data.authorization_endpoint;
                finalTokenUrl = discovery.data.token_endpoint;
            }
        }
        if (!finalAuthUrl || !finalTokenUrl) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GENERIC_OAUTH_ERROR_CODES"].INVALID_OAUTH_CONFIGURATION
        });
        if (authorizationUrlParams) {
            const withAdditionalParams = new URL(finalAuthUrl);
            for (const [paramName, paramValue] of Object.entries(authorizationUrlParams))withAdditionalParams.searchParams.set(paramName, paramValue);
            finalAuthUrl = withAdditionalParams.toString();
        }
        const additionalParams = typeof authorizationUrlParams === "function" ? authorizationUrlParams(ctx) : authorizationUrlParams;
        const { state, codeVerifier } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$oauth2$2f$state$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateState"])(ctx, void 0, ctx.body.additionalData);
        const authUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$oauth2$2f$create$2d$authorization$2d$url$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthorizationURL"])({
            id: providerId,
            options: {
                clientId,
                clientSecret,
                redirectURI
            },
            authorizationEndpoint: finalAuthUrl,
            state,
            codeVerifier: pkce ? codeVerifier : void 0,
            scopes: ctx.body.scopes ? [
                ...ctx.body.scopes,
                ...scopes || []
            ] : scopes || [],
            redirectURI: `${ctx.context.baseURL}/oauth2/callback/${providerId}`,
            prompt,
            accessType,
            responseType,
            responseMode,
            additionalParams
        });
        return ctx.json({
            url: authUrl.toString(),
            redirect: !ctx.body.disableRedirect
        });
    });
const OAuth2CallbackQuerySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    code: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The OAuth2 code"
    }).optional(),
    error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The error message, if any"
    }).optional(),
    error_description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The error description, if any"
    }).optional(),
    state: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The state parameter from the OAuth2 request"
    }).optional()
});
const oAuth2Callback = (options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/oauth2/callback/:providerId", {
        method: "GET",
        query: OAuth2CallbackQuerySchema,
        metadata: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$hide$2d$metadata$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["HIDE_METADATA"],
            allowedMediaTypes: [
                "application/x-www-form-urlencoded",
                "application/json"
            ],
            openapi: {
                description: "OAuth2 callback",
                responses: {
                    200: {
                        description: "OAuth2 callback",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        url: {
                                            type: "string"
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
        const defaultErrorURL = ctx.context.options.onAPIError?.errorURL || `${ctx.context.baseURL}/error`;
        if (ctx.query.error || !ctx.query.code) throw ctx.redirect(`${defaultErrorURL}?error=${ctx.query.error || "oAuth_code_missing"}&error_description=${ctx.query.error_description}`);
        const providerId = ctx.params?.providerId;
        if (!providerId) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GENERIC_OAUTH_ERROR_CODES"].PROVIDER_ID_REQUIRED
        });
        const providerConfig = options.config.find((p)=>p.providerId === providerId);
        if (!providerConfig) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: `${__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GENERIC_OAUTH_ERROR_CODES"].PROVIDER_CONFIG_NOT_FOUND} ${providerId}`
        });
        let tokens = void 0;
        const { callbackURL, codeVerifier, errorURL, requestSignUp, newUserURL, link } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$oauth2$2f$state$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseState"])(ctx);
        const code = ctx.query.code;
        function redirectOnError(error) {
            const defaultErrorURL$1 = ctx.context.options.onAPIError?.errorURL || `${ctx.context.baseURL}/error`;
            let url = errorURL || defaultErrorURL$1;
            if (url.includes("?")) url = `${url}&error=${error}`;
            else url = `${url}?error=${error}`;
            throw ctx.redirect(url);
        }
        let finalTokenUrl = providerConfig.tokenUrl;
        let finalUserInfoUrl = providerConfig.userInfoUrl;
        if (providerConfig.discoveryUrl) {
            const discovery = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["betterFetch"])(providerConfig.discoveryUrl, {
                method: "GET",
                headers: providerConfig.discoveryHeaders
            });
            if (discovery.data) {
                finalTokenUrl = discovery.data.token_endpoint;
                finalUserInfoUrl = discovery.data.userinfo_endpoint;
            }
        }
        try {
            if (providerConfig.getToken) tokens = await providerConfig.getToken({
                code,
                redirectURI: `${ctx.context.baseURL}/oauth2/callback/${providerConfig.providerId}`,
                codeVerifier: providerConfig.pkce ? codeVerifier : void 0
            });
            else {
                if (!finalTokenUrl) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GENERIC_OAUTH_ERROR_CODES"].INVALID_OAUTH_CONFIG
                });
                const additionalParams = typeof providerConfig.tokenUrlParams === "function" ? providerConfig.tokenUrlParams(ctx) : providerConfig.tokenUrlParams;
                tokens = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$oauth2$2f$validate$2d$authorization$2d$code$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["validateAuthorizationCode"])({
                    headers: providerConfig.authorizationHeaders,
                    code,
                    codeVerifier: providerConfig.pkce ? codeVerifier : void 0,
                    redirectURI: `${ctx.context.baseURL}/oauth2/callback/${providerConfig.providerId}`,
                    options: {
                        clientId: providerConfig.clientId,
                        clientSecret: providerConfig.clientSecret,
                        redirectURI: providerConfig.redirectURI
                    },
                    tokenEndpoint: finalTokenUrl,
                    authentication: providerConfig.authentication,
                    additionalParams
                });
            }
        } catch (e) {
            ctx.context.logger.error(e && typeof e === "object" && "name" in e ? e.name : "", e);
            throw redirectOnError("oauth_code_verification_failed");
        }
        if (!tokens) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GENERIC_OAUTH_ERROR_CODES"].INVALID_OAUTH_CONFIG
        });
        const userInfo = await async function handleUserInfo() {
            const userInfo$1 = providerConfig.getUserInfo ? await providerConfig.getUserInfo(tokens) : await getUserInfo(tokens, finalUserInfoUrl);
            if (!userInfo$1) throw redirectOnError("user_info_is_missing");
            const mapUser = providerConfig.mapProfileToUser ? await providerConfig.mapProfileToUser(userInfo$1) : userInfo$1;
            const email = mapUser.email ? mapUser.email.toLowerCase() : userInfo$1.email?.toLowerCase();
            if (!email) {
                ctx.context.logger.error("Unable to get user info", userInfo$1);
                throw redirectOnError("email_is_missing");
            }
            const id = mapUser.id ? String(mapUser.id) : String(userInfo$1.id);
            const name = mapUser.name ? mapUser.name : userInfo$1.name;
            if (!name) {
                ctx.context.logger.error("Unable to get user info", userInfo$1);
                throw redirectOnError("name_is_missing");
            }
            return {
                ...userInfo$1,
                ...mapUser,
                email,
                id,
                name
            };
        }();
        if (link) {
            if (ctx.context.options.account?.accountLinking?.allowDifferentEmails !== true && link.email !== userInfo.email) return redirectOnError("email_doesn't_match");
            const existingAccount = await ctx.context.internalAdapter.findAccountByProviderId(String(userInfo.id), providerConfig.providerId);
            if (existingAccount) {
                if (existingAccount.userId !== link.userId) return redirectOnError("account_already_linked_to_different_user");
                const updateData = Object.fromEntries(Object.entries({
                    accessToken: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$oauth2$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["setTokenUtil"])(tokens.accessToken, ctx.context),
                    idToken: tokens.idToken,
                    refreshToken: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$oauth2$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["setTokenUtil"])(tokens.refreshToken, ctx.context),
                    accessTokenExpiresAt: tokens.accessTokenExpiresAt,
                    refreshTokenExpiresAt: tokens.refreshTokenExpiresAt,
                    scope: tokens.scopes?.join(",")
                }).filter(([_, value])=>value !== void 0));
                await ctx.context.internalAdapter.updateAccount(existingAccount.id, updateData);
            } else if (!await ctx.context.internalAdapter.createAccount({
                userId: link.userId,
                providerId: providerConfig.providerId,
                accountId: userInfo.id,
                accessToken: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$oauth2$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["setTokenUtil"])(tokens.accessToken, ctx.context),
                accessTokenExpiresAt: tokens.accessTokenExpiresAt,
                refreshTokenExpiresAt: tokens.refreshTokenExpiresAt,
                scope: tokens.scopes?.join(","),
                refreshToken: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$oauth2$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["setTokenUtil"])(tokens.refreshToken, ctx.context),
                idToken: tokens.idToken
            })) return redirectOnError("unable_to_link_account");
            let toRedirectTo$1;
            try {
                toRedirectTo$1 = callbackURL.toString();
            } catch  {
                toRedirectTo$1 = callbackURL;
            }
            throw ctx.redirect(toRedirectTo$1);
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$oauth2$2f$link$2d$account$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["handleOAuthUserInfo"])(ctx, {
            userInfo,
            account: {
                providerId: providerConfig.providerId,
                accountId: userInfo.id,
                ...tokens,
                scope: tokens.scopes?.join(",")
            },
            callbackURL,
            disableSignUp: providerConfig.disableImplicitSignUp && !requestSignUp || providerConfig.disableSignUp,
            overrideUserInfo: providerConfig.overrideUserInfo
        });
        if (result.error) return redirectOnError(result.error.split(" ").join("_"));
        const { session, user } = result.data;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setSessionCookie"])(ctx, {
            session,
            user
        });
        let toRedirectTo;
        try {
            toRedirectTo = (result.isRegister ? newUserURL || callbackURL : callbackURL).toString();
        } catch  {
            toRedirectTo = result.isRegister ? newUserURL || callbackURL : callbackURL;
        }
        throw ctx.redirect(toRedirectTo);
    });
const OAuth2LinkAccountBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    providerId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])(),
    callbackURL: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])(),
    scopes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])()).meta({
        description: "Additional scopes to request when linking the account"
    }).optional(),
    errorCallbackURL: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The URL to redirect to if there is an error during the link process"
    }).optional()
});
/**
* ### Endpoint
*
* POST `/oauth2/link`
*
* ### API Methods
*
* **server:**
* `auth.api.oAuth2LinkAccount`
*
* **client:**
* `authClient.oauth2.link`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/generic-oauth#api-method-oauth2-link)
*/ const oAuth2LinkAccount = (options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/oauth2/link", {
        method: "POST",
        body: OAuth2LinkAccountBodySchema,
        use: [
            __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["sessionMiddleware"]
        ],
        metadata: {
            openapi: {
                description: "Link an OAuth2 account to the current user session",
                responses: {
                    "200": {
                        description: "Authorization URL generated successfully for linking an OAuth2 account",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        url: {
                                            type: "string",
                                            format: "uri",
                                            description: "The authorization URL to redirect the user to for linking the OAuth2 account"
                                        },
                                        redirect: {
                                            type: "boolean",
                                            description: "Indicates that the client should redirect to the provided URL",
                                            enum: [
                                                true
                                            ]
                                        }
                                    },
                                    required: [
                                        "url",
                                        "redirect"
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (c)=>{
        const session = c.context.session;
        if (!session) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GENERIC_OAUTH_ERROR_CODES"].SESSION_REQUIRED
        });
        const provider = options.config.find((p)=>p.providerId === c.body.providerId);
        if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].PROVIDER_NOT_FOUND
        });
        const { providerId, clientId, clientSecret, redirectURI, authorizationUrl, discoveryUrl, pkce, scopes, prompt, accessType, authorizationUrlParams } = provider;
        let finalAuthUrl = authorizationUrl;
        if (!finalAuthUrl) {
            if (!discoveryUrl) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GENERIC_OAUTH_ERROR_CODES"].INVALID_OAUTH_CONFIGURATION
            });
            const discovery = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["betterFetch"])(discoveryUrl, {
                method: "GET",
                headers: provider.discoveryHeaders,
                onError (context) {
                    c.context.logger.error(context.error.message, context.error, {
                        discoveryUrl
                    });
                }
            });
            if (discovery.data) finalAuthUrl = discovery.data.authorization_endpoint;
        }
        if (!finalAuthUrl) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GENERIC_OAUTH_ERROR_CODES"].INVALID_OAUTH_CONFIGURATION
        });
        const state = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$oauth2$2f$state$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateState"])(c, {
            userId: session.user.id,
            email: session.user.email
        }, void 0);
        const additionalParams = typeof authorizationUrlParams === "function" ? authorizationUrlParams(c) : authorizationUrlParams;
        const url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$oauth2$2f$create$2d$authorization$2d$url$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthorizationURL"])({
            id: providerId,
            options: {
                clientId,
                clientSecret,
                redirectURI: redirectURI || `${c.context.baseURL}/oauth2/callback/${providerId}`
            },
            authorizationEndpoint: finalAuthUrl,
            state: state.state,
            codeVerifier: pkce ? state.codeVerifier : void 0,
            scopes: c.body.scopes || scopes || [],
            redirectURI: redirectURI || `${c.context.baseURL}/oauth2/callback/${providerId}`,
            prompt,
            accessType,
            additionalParams
        });
        return c.json({
            url: url.toString(),
            redirect: true
        });
    });
async function getUserInfo(tokens, finalUserInfoUrl) {
    if (tokens.idToken) {
        const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$decode_jwt$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["decodeJwt"])(tokens.idToken);
        if (decoded) {
            if (decoded.sub && decoded.email) return {
                id: decoded.sub,
                emailVerified: decoded.email_verified,
                image: decoded.picture,
                ...decoded
            };
        }
    }
    if (!finalUserInfoUrl) return null;
    const userInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["betterFetch"])(finalUserInfoUrl, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${tokens.accessToken}`
        }
    });
    return {
        id: userInfo.data?.sub ?? "",
        emailVerified: userInfo.data?.email_verified ?? false,
        email: userInfo.data?.email,
        image: userInfo.data?.picture,
        name: userInfo.data?.name,
        ...userInfo.data
    };
}
;
 //# sourceMappingURL=routes.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/index.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$auth0$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/auth0.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$gumroad$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/gumroad.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$hubspot$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/hubspot.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$keycloak$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/keycloak.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$line$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/line.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$microsoft$2d$entra$2d$id$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/microsoft-entra-id.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$okta$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/okta.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$patreon$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/patreon.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$slack$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/slack.mjs [middleware-edge] (ecmascript)");
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
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/index.mjs [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "genericOAuth": (()=>genericOAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/error-codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/routes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$auth0$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/auth0.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$gumroad$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/gumroad.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$hubspot$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/hubspot.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$keycloak$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/keycloak.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$line$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/line.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$microsoft$2d$entra$2d$id$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/microsoft-entra-id.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$okta$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/okta.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$patreon$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/patreon.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$slack$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/slack.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$oauth2$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/oauth2/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$oauth2$2f$create$2d$authorization$2d$url$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/oauth2/create-authorization-url.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$oauth2$2f$refresh$2d$access$2d$token$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/oauth2/refresh-access-token.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$oauth2$2f$validate$2d$authorization$2d$code$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/oauth2/validate-authorization-code.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-fetch/fetch/dist/index.js [middleware-edge] (ecmascript)");
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
//#region src/plugins/generic-oauth/index.ts
/**
* A generic OAuth plugin that can be used to add OAuth support to any provider
*/ const genericOAuth = (options)=>{
    return {
        id: "generic-oauth",
        init: (ctx)=>{
            return {
                context: {
                    socialProviders: options.config.map((c)=>{
                        let finalUserInfoUrl = c.userInfoUrl;
                        return {
                            id: c.providerId,
                            name: c.providerId,
                            async createAuthorizationURL (data) {
                                let finalAuthUrl = c.authorizationUrl;
                                if (!finalAuthUrl && c.discoveryUrl) {
                                    const discovery = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["betterFetch"])(c.discoveryUrl, {
                                        method: "GET",
                                        headers: c.discoveryHeaders
                                    });
                                    if (discovery.data) {
                                        finalAuthUrl = discovery.data.authorization_endpoint;
                                        finalUserInfoUrl = finalUserInfoUrl ?? discovery.data.userinfo_endpoint;
                                    }
                                }
                                if (!finalAuthUrl) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GENERIC_OAUTH_ERROR_CODES"].INVALID_OAUTH_CONFIGURATION
                                });
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$oauth2$2f$create$2d$authorization$2d$url$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthorizationURL"])({
                                    id: c.providerId,
                                    options: {
                                        clientId: c.clientId,
                                        clientSecret: c.clientSecret,
                                        redirectURI: c.redirectURI
                                    },
                                    authorizationEndpoint: finalAuthUrl,
                                    state: data.state,
                                    codeVerifier: c.pkce ? data.codeVerifier : void 0,
                                    scopes: c.scopes || [],
                                    redirectURI: `${ctx.baseURL}/oauth2/callback/${c.providerId}`
                                });
                            },
                            async validateAuthorizationCode (data) {
                                if (c.getToken) return c.getToken(data);
                                let finalTokenUrl = c.tokenUrl;
                                if (c.discoveryUrl) {
                                    const discovery = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["betterFetch"])(c.discoveryUrl, {
                                        method: "GET",
                                        headers: c.discoveryHeaders
                                    });
                                    if (discovery.data) {
                                        finalTokenUrl = discovery.data.token_endpoint;
                                        finalUserInfoUrl = discovery.data.userinfo_endpoint;
                                    }
                                }
                                if (!finalTokenUrl) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GENERIC_OAUTH_ERROR_CODES"].TOKEN_URL_NOT_FOUND
                                });
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$oauth2$2f$validate$2d$authorization$2d$code$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["validateAuthorizationCode"])({
                                    headers: c.authorizationHeaders,
                                    code: data.code,
                                    codeVerifier: data.codeVerifier,
                                    redirectURI: data.redirectURI,
                                    options: {
                                        clientId: c.clientId,
                                        clientSecret: c.clientSecret,
                                        redirectURI: c.redirectURI
                                    },
                                    tokenEndpoint: finalTokenUrl,
                                    authentication: c.authentication
                                });
                            },
                            async refreshAccessToken (refreshToken) {
                                let finalTokenUrl = c.tokenUrl;
                                if (c.discoveryUrl) {
                                    const discovery = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["betterFetch"])(c.discoveryUrl, {
                                        method: "GET",
                                        headers: c.discoveryHeaders
                                    });
                                    if (discovery.data) finalTokenUrl = discovery.data.token_endpoint;
                                }
                                if (!finalTokenUrl) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GENERIC_OAUTH_ERROR_CODES"].TOKEN_URL_NOT_FOUND
                                });
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$oauth2$2f$refresh$2d$access$2d$token$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["refreshAccessToken"])({
                                    refreshToken,
                                    options: {
                                        clientId: c.clientId,
                                        clientSecret: c.clientSecret
                                    },
                                    authentication: c.authentication,
                                    tokenEndpoint: finalTokenUrl
                                });
                            },
                            async getUserInfo (tokens) {
                                const userInfo = c.getUserInfo ? await c.getUserInfo(tokens) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getUserInfo"])(tokens, finalUserInfoUrl);
                                if (!userInfo) return null;
                                const userMap = await c.mapProfileToUser?.(userInfo);
                                return {
                                    user: {
                                        id: userInfo?.id,
                                        email: userInfo?.email,
                                        emailVerified: userInfo?.emailVerified,
                                        image: userInfo?.image,
                                        name: userInfo?.name,
                                        ...userMap
                                    },
                                    data: userInfo
                                };
                            },
                            options: {
                                overrideUserInfoOnSignIn: c.overrideUserInfo
                            }
                        };
                    }).concat(ctx.socialProviders)
                }
            };
        },
        endpoints: {
            signInWithOAuth2: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["signInWithOAuth2"])(options),
            oAuth2Callback: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["oAuth2Callback"])(options),
            oAuth2LinkAccount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["oAuth2LinkAccount"])(options)
        },
        options,
        $ERROR_CODES: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GENERIC_OAUTH_ERROR_CODES"]
    };
};
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/index.mjs [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/error-codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/routes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$auth0$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/auth0.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$gumroad$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/gumroad.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$hubspot$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/hubspot.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$keycloak$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/keycloak.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$line$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/line.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$microsoft$2d$entra$2d$id$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/microsoft-entra-id.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$okta$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/okta.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$patreon$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/patreon.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$slack$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/slack.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$oauth2$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/oauth2/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-fetch/fetch/dist/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/index.mjs [middleware-edge] (ecmascript) <locals>");
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/haveibeenpwned/index.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "haveIBeenPwned": (()=>haveIBeenPwned)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/context/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2f$endpoint$2d$context$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/context/endpoint-context.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/error-codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/hash.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-fetch/fetch/dist/index.js [middleware-edge] (ecmascript)");
;
;
;
;
;
//#region src/plugins/haveibeenpwned/index.ts
const ERROR_CODES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defineErrorCodes"])({
    PASSWORD_COMPROMISED: "The password you entered has been compromised. Please choose a different password."
});
async function checkPasswordCompromise(password, customMessage) {
    if (!password) return;
    const sha1Hash = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createHash"])("SHA-1", "hex").digest(password)).toUpperCase();
    const prefix = sha1Hash.substring(0, 5);
    const suffix = sha1Hash.substring(5);
    try {
        const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["betterFetch"])(`https://api.pwnedpasswords.com/range/${prefix}`, {
            headers: {
                "Add-Padding": "true",
                "User-Agent": "BetterAuth Password Checker"
            }
        });
        if (error) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
            message: `Failed to check password. Status: ${error.status}`
        });
        if (data.split("\n").some((line)=>line.split(":")[0].toUpperCase() === suffix.toUpperCase())) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: customMessage || ERROR_CODES.PASSWORD_COMPROMISED,
            code: "PASSWORD_COMPROMISED"
        });
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]) throw error;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
            message: "Failed to check password. Please try again later."
        });
    }
}
const haveIBeenPwned = (options)=>{
    const paths = options?.paths || [
        "/sign-up/email",
        "/change-password",
        "/reset-password"
    ];
    return {
        id: "haveIBeenPwned",
        init (ctx) {
            return {
                context: {
                    password: {
                        ...ctx.password,
                        async hash (password) {
                            const c = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2f$endpoint$2d$context$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getCurrentAuthContext"])();
                            if (!c.path || !paths.includes(c.path)) return ctx.password.hash(password);
                            await checkPasswordCompromise(password, options?.customPasswordCompromisedMessage);
                            return ctx.password.hash(password);
                        }
                    }
                }
            };
        },
        options,
        $ERROR_CODES: ERROR_CODES
    };
};
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/adapter.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//#region src/plugins/jwt/adapter.ts
__turbopack_context__.s({
    "getJwksAdapter": (()=>getJwksAdapter)
});
const getJwksAdapter = (adapter, options)=>{
    return {
        getAllKeys: async (ctx)=>{
            if (options?.adapter?.getJwks) return await options.adapter.getJwks(ctx);
            return await adapter.findMany({
                model: "jwks"
            });
        },
        getLatestKey: async (ctx)=>{
            if (options?.adapter?.getJwks) return (await options.adapter.getJwks(ctx))?.sort((a, b)=>b.createdAt.getTime() - a.createdAt.getTime())[0];
            return (await adapter.findMany({
                model: "jwks"
            }))?.sort((a, b)=>b.createdAt.getTime() - a.createdAt.getTime())[0];
        },
        createJwk: async (ctx, webKey)=>{
            if (options?.adapter?.createJwk) return await options.adapter.createJwk(webKey, ctx);
            return await adapter.create({
                model: "jwks",
                data: {
                    ...webKey,
                    createdAt: /* @__PURE__ */ new Date()
                }
            });
        }
    };
};
;
 //# sourceMappingURL=adapter.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/utils.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createJwk": (()=>createJwk),
    "generateExportedKeyPair": (()=>generateExportedKeyPair),
    "toExpJWT": (()=>toExpJWT)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$time$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/time.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$adapter$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/adapter.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$key$2f$export$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/jose/dist/webapi/key/export.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$key$2f$generate_key_pair$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/jose/dist/webapi/key/generate_key_pair.js [middleware-edge] (ecmascript)");
;
;
;
;
//#region src/plugins/jwt/utils.ts
/**
* Converts an expirationTime to ISO seconds expiration time (the format of JWT exp)
*
* See https://github.com/panva/jose/blob/main/src/lib/jwt_claims_set.ts#L245
*
* @param expirationTime - see options.jwt.expirationTime
* @param iat - the iat time to consolidate on
* @returns
*/ function toExpJWT(expirationTime, iat) {
    if (typeof expirationTime === "number") return expirationTime;
    else if (expirationTime instanceof Date) return Math.floor(expirationTime.getTime() / 1e3);
    else return iat + (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$time$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["sec"])(expirationTime);
}
async function generateExportedKeyPair(options) {
    const { alg, ...cfg } = options?.jwks?.keyPairConfig ?? {
        alg: "EdDSA",
        crv: "Ed25519"
    };
    const { publicKey, privateKey } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$key$2f$generate_key_pair$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateKeyPair"])(alg, {
        ...cfg,
        extractable: true
    });
    return {
        publicWebKey: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$key$2f$export$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["exportJWK"])(publicKey),
        privateWebKey: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$key$2f$export$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["exportJWK"])(privateKey),
        alg,
        cfg
    };
}
/**
* Creates a Jwk on the database
*
* @param ctx
* @param options
* @returns
*/ async function createJwk(ctx, options) {
    const { publicWebKey, privateWebKey, alg, cfg } = await generateExportedKeyPair(options);
    const stringifiedPrivateWebKey = JSON.stringify(privateWebKey);
    const privateKeyEncryptionEnabled = !options?.jwks?.disablePrivateKeyEncryption;
    const jwk = {
        alg,
        ...cfg && "crv" in cfg ? {
            crv: cfg.crv
        } : {},
        publicKey: JSON.stringify(publicWebKey),
        privateKey: privateKeyEncryptionEnabled ? JSON.stringify(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["symmetricEncrypt"])({
            key: ctx.context.secret,
            data: stringifiedPrivateWebKey
        })) : stringifiedPrivateWebKey,
        createdAt: /* @__PURE__ */ new Date(),
        ...options?.jwks?.rotationInterval ? {
            expiresAt: new Date(Date.now() + options.jwks.rotationInterval * 1e3)
        } : {}
    };
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$adapter$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getJwksAdapter"])(ctx.context.adapter, options).createJwk(ctx, jwk);
}
;
 //# sourceMappingURL=utils.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/sign.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getJwtToken": (()=>getJwtToken),
    "signJWT": (()=>signJWT)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$adapter$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/adapter.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/utils.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/error/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/error/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/jose/dist/webapi/jwt/sign.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$key$2f$import$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/jose/dist/webapi/key/import.js [middleware-edge] (ecmascript)");
;
;
;
;
;
//#region src/plugins/jwt/sign.ts
async function signJWT(ctx, config) {
    const { options } = config;
    const payload = config.payload;
    const nowSeconds = Math.floor(Date.now() / 1e3);
    const iat = payload.iat;
    let exp = payload.exp;
    const defaultExp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["toExpJWT"])(options?.jwt?.expirationTime ?? "15m", iat ?? nowSeconds);
    exp = exp ?? defaultExp;
    const nbf = payload.nbf;
    const iss = payload.iss;
    const defaultIss = options?.jwt?.issuer ?? ctx.context.options.baseURL;
    const aud = payload.aud;
    const defaultAud = options?.jwt?.audience ?? ctx.context.options.baseURL;
    if (options?.jwt?.sign) {
        const jwtPayload = {
            ...payload,
            iat,
            exp,
            nbf,
            iss: iss ?? defaultIss,
            aud: aud ?? defaultAud
        };
        return options.jwt.sign(jwtPayload);
    }
    let key = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$adapter$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getJwksAdapter"])(ctx.context.adapter, options).getLatestKey(ctx);
    if (!key || key.expiresAt && key.expiresAt < /* @__PURE__ */ new Date()) key = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createJwk"])(ctx, options);
    const privateWebKey = !options?.jwks?.disablePrivateKeyEncryption ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["symmetricDecrypt"])({
        key: ctx.context.secret,
        data: JSON.parse(key.privateKey)
    }).catch(()=>{
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BetterAuthError"]("Failed to decrypt private key. Make sure the secret currently in use is the same as the one used to encrypt the private key. If you are using a different secret, either clean up your JWKS or disable private key encryption.");
    }) : key.privateKey;
    const alg = key.alg ?? options?.jwks?.keyPairConfig?.alg ?? "EdDSA";
    const privateKey = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$key$2f$import$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["importJWK"])(JSON.parse(privateWebKey), alg);
    const jwt = new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
        alg,
        kid: key.id
    }).setExpirationTime(exp).setIssuer(iss ?? defaultIss).setAudience(aud ?? defaultAud);
    if (iat) jwt.setIssuedAt(iat);
    if (payload.sub) jwt.setSubject(payload.sub);
    if (payload.nbf) jwt.setNotBefore(payload.nbf);
    if (payload.jti) jwt.setJti(payload.jti);
    return await jwt.sign(privateKey);
}
async function getJwtToken(ctx, options) {
    const payload = !options?.jwt?.definePayload ? ctx.context.session.user : await options.jwt.definePayload(ctx.context.session);
    return await signJWT(ctx, {
        options,
        payload: {
            iat: Math.floor(Date.now() / 1e3),
            ...payload,
            sub: await options?.jwt?.getSubject?.(ctx.context.session) ?? ctx.context.session.user.id
        }
    });
}
;
 //# sourceMappingURL=sign.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/verify.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "verifyJWT": (()=>verifyJWT)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$adapter$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/adapter.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/context/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2f$endpoint$2d$context$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/context/endpoint-context.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$key$2f$import$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/jose/dist/webapi/key/import.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/jose/dist/webapi/jwt/verify.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/base64.mjs [middleware-edge] (ecmascript)");
;
;
;
;
//#region src/plugins/jwt/verify.ts
/**
* Verify a JWT token using the JWKS public keys
* Returns the payload if valid, null otherwise
*/ async function verifyJWT(token, options) {
    const ctx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2f$endpoint$2d$context$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getCurrentAuthContext"])();
    try {
        const parts = token.split(".");
        if (parts.length !== 3) return null;
        const headerStr = new TextDecoder().decode(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["base64"].decode(parts[0]));
        const kid = JSON.parse(headerStr).kid;
        if (!kid) {
            ctx.context.logger.debug("JWT missing kid in header");
            return null;
        }
        const keys = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$adapter$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getJwksAdapter"])(ctx.context.adapter, options).getAllKeys(ctx);
        if (!keys || keys.length === 0) {
            ctx.context.logger.debug("No JWKS keys available");
            return null;
        }
        const key = keys.find((k)=>k.id === kid);
        if (!key) {
            ctx.context.logger.debug(`No JWKS key found for kid: ${kid}`);
            return null;
        }
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["jwtVerify"])(token, await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$key$2f$import$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["importJWK"])(JSON.parse(key.publicKey), key.alg ?? options?.jwks?.keyPairConfig?.alg ?? "EdDSA"), {
            issuer: options?.jwt?.issuer ?? ctx.context.options.baseURL,
            audience: options?.jwt?.audience ?? ctx.context.options.baseURL
        });
        if (!payload.sub || !payload.aud) return null;
        return payload;
    } catch (error) {
        ctx.context.logger.debug("JWT verification failed", error);
        return null;
    }
}
;
 //# sourceMappingURL=verify.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/schema.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//#region src/plugins/jwt/schema.ts
__turbopack_context__.s({
    "schema": (()=>schema)
});
const schema = {
    jwks: {
        fields: {
            publicKey: {
                type: "string",
                required: true
            },
            privateKey: {
                type: "string",
                required: true
            },
            createdAt: {
                type: "date",
                required: true
            },
            expiresAt: {
                type: "date",
                required: false
            }
        }
    }
};
;
 //# sourceMappingURL=schema.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/index.mjs [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "jwt": (()=>jwt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/db/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/routes/session.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$adapter$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/adapter.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/utils.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$sign$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/sign.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$verify$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/verify.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/error/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/error/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/zod/v4/classic/schemas.js [middleware-edge] (ecmascript)");
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
;
//#region src/plugins/jwt/index.ts
const signJWTBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    payload: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["any"])()),
    overrideOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["any"])()).optional()
});
const verifyJWTBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])(),
    issuer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().optional()
});
const jwt = (options)=>{
    if (options?.jwt?.sign && !options.jwks?.remoteUrl) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BetterAuthError"]("options.jwks.remoteUrl must be set when using options.jwt.sign");
    if (options?.jwks?.remoteUrl && !options.jwks?.keyPairConfig?.alg) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BetterAuthError"]("options.jwks.keyPairConfig.alg must be specified when using the oidc plugin with options.jwks.remoteUrl");
    const jwksPath = options?.jwks?.jwksPath ?? "/jwks";
    if (typeof jwksPath !== "string" || jwksPath.length === 0 || !jwksPath.startsWith("/") || jwksPath.includes("..")) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BetterAuthError"]("options.jwks.jwksPath must be a non-empty string starting with '/' and not contain '..'");
    return {
        id: "jwt",
        options,
        endpoints: {
            getJwks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])(jwksPath, {
                method: "GET",
                metadata: {
                    openapi: {
                        operationId: "getJSONWebKeySet",
                        description: "Get the JSON Web Key Set",
                        responses: {
                            "200": {
                                description: "JSON Web Key Set retrieved successfully",
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object",
                                            properties: {
                                                keys: {
                                                    type: "array",
                                                    description: "Array of public JSON Web Keys",
                                                    items: {
                                                        type: "object",
                                                        properties: {
                                                            kid: {
                                                                type: "string",
                                                                description: "Key ID uniquely identifying the key, corresponds to the 'id' from the stored Jwk"
                                                            },
                                                            kty: {
                                                                type: "string",
                                                                description: "Key type (e.g., 'RSA', 'EC', 'OKP')"
                                                            },
                                                            alg: {
                                                                type: "string",
                                                                description: "Algorithm intended for use with the key (e.g., 'EdDSA', 'RS256')"
                                                            },
                                                            use: {
                                                                type: "string",
                                                                description: "Intended use of the public key (e.g., 'sig' for signature)",
                                                                enum: [
                                                                    "sig"
                                                                ],
                                                                nullable: true
                                                            },
                                                            n: {
                                                                type: "string",
                                                                description: "Modulus for RSA keys (base64url-encoded)",
                                                                nullable: true
                                                            },
                                                            e: {
                                                                type: "string",
                                                                description: "Exponent for RSA keys (base64url-encoded)",
                                                                nullable: true
                                                            },
                                                            crv: {
                                                                type: "string",
                                                                description: "Curve name for elliptic curve keys (e.g., 'Ed25519', 'P-256')",
                                                                nullable: true
                                                            },
                                                            x: {
                                                                type: "string",
                                                                description: "X coordinate for elliptic curve keys (base64url-encoded)",
                                                                nullable: true
                                                            },
                                                            y: {
                                                                type: "string",
                                                                description: "Y coordinate for elliptic curve keys (base64url-encoded)",
                                                                nullable: true
                                                            }
                                                        },
                                                        required: [
                                                            "kid",
                                                            "kty",
                                                            "alg"
                                                        ]
                                                    }
                                                }
                                            },
                                            required: [
                                                "keys"
                                            ]
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, async (ctx)=>{
                if (options?.jwks?.remoteUrl) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND");
                const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$adapter$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getJwksAdapter"])(ctx.context.adapter, options);
                let keySets = await adapter.getAllKeys(ctx);
                if (!keySets || keySets?.length === 0) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createJwk"])(ctx, options);
                    keySets = await adapter.getAllKeys(ctx);
                }
                if (!keySets?.length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BetterAuthError"]("No key sets found. Make sure you have a key in your database.");
                const now = Date.now();
                const gracePeriod = (options?.jwks?.gracePeriod ?? 3600 * 24 * 30) * 1e3;
                const keys = keySets.filter((key)=>{
                    if (!key.expiresAt) return true;
                    return key.expiresAt.getTime() + gracePeriod > now;
                });
                const keyPairConfig = options?.jwks?.keyPairConfig;
                const defaultCrv = keyPairConfig ? "crv" in keyPairConfig ? keyPairConfig.crv : void 0 : void 0;
                return ctx.json({
                    keys: keys.map((keySet)=>{
                        return {
                            alg: keySet.alg ?? options?.jwks?.keyPairConfig?.alg ?? "EdDSA",
                            crv: keySet.crv ?? defaultCrv,
                            ...JSON.parse(keySet.publicKey),
                            kid: keySet.id
                        };
                    })
                });
            }),
            getToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/token", {
                method: "GET",
                requireHeaders: true,
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["sessionMiddleware"]
                ],
                metadata: {
                    openapi: {
                        operationId: "getJSONWebToken",
                        description: "Get a JWT token",
                        responses: {
                            200: {
                                description: "Success",
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object",
                                            properties: {
                                                token: {
                                                    type: "string"
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
                const jwt$1 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$sign$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getJwtToken"])(ctx, options);
                return ctx.json({
                    token: jwt$1
                });
            }),
            signJWT: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])({
                method: "POST",
                metadata: {
                    $Infer: {
                        body: {}
                    }
                },
                body: signJWTBodySchema
            }, async (c)=>{
                const jwt$1 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$sign$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["signJWT"])(c, {
                    options: {
                        ...options,
                        ...c.body.overrideOptions
                    },
                    payload: c.body.payload
                });
                return c.json({
                    token: jwt$1
                });
            }),
            verifyJWT: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])({
                method: "POST",
                metadata: {
                    $Infer: {
                        body: {},
                        response: {}
                    }
                },
                body: verifyJWTBodySchema
            }, async (ctx)=>{
                const overrideOptions = ctx.body.issuer ? {
                    ...options,
                    jwt: {
                        ...options?.jwt,
                        issuer: ctx.body.issuer
                    }
                } : options;
                const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$verify$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["verifyJWT"])(ctx.body.token, overrideOptions);
                return ctx.json({
                    payload
                });
            })
        },
        hooks: {
            after: [
                {
                    matcher (context) {
                        return context.path === "/get-session";
                    },
                    handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
                        if (options?.disableSettingJwtHeader) return;
                        const session = ctx.context.session || ctx.context.newSession;
                        if (session && session.session) {
                            const jwt$1 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$sign$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getJwtToken"])(ctx, options);
                            const exposedHeaders = ctx.context.responseHeaders?.get("access-control-expose-headers") || "";
                            const headersSet = new Set(exposedHeaders.split(",").map((header)=>header.trim()).filter(Boolean));
                            headersSet.add("set-auth-jwt");
                            ctx.setHeader("set-auth-jwt", jwt$1);
                            ctx.setHeader("Access-Control-Expose-Headers", Array.from(headersSet).join(", "));
                        }
                    })
                }
            ]
        },
        schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["mergeSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["schema"], options?.schema)
    };
};
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/index.mjs [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/db/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/routes/session.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$adapter$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/adapter.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/utils.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$sign$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/sign.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$verify$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/verify.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/error/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/api/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/index.mjs [middleware-edge] (ecmascript) <locals>");
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/last-login-method/index.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "lastLoginMethod": (()=>lastLoginMethod)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/api/index.mjs [middleware-edge] (ecmascript)");
;
//#region src/plugins/last-login-method/index.ts
/**
* Plugin to track the last used login method
*/ const lastLoginMethod = (userConfig)=>{
    const paths = [
        "/callback/:id",
        "/oauth2/callback/:providerId",
        "/sign-in/email",
        "/sign-up/email"
    ];
    const defaultResolveMethod = (ctx)=>{
        if (paths.includes(ctx.path)) return ctx.params?.id || ctx.params?.providerId || ctx.path.split("/").pop();
        if (ctx.path.includes("siwe")) return "siwe";
        if (ctx.path.includes("/passkey/verify-authentication")) return "passkey";
        return null;
    };
    const config = {
        cookieName: "better-auth.last_used_login_method",
        maxAge: 3600 * 24 * 30,
        ...userConfig
    };
    return {
        id: "last-login-method",
        init (ctx) {
            return {
                options: {
                    databaseHooks: {
                        user: {
                            create: {
                                async before (user, context) {
                                    if (!config.storeInDatabase) return;
                                    if (!context) return;
                                    const lastUsedLoginMethod = config.customResolveMethod?.(context) ?? defaultResolveMethod(context);
                                    if (lastUsedLoginMethod) return {
                                        data: {
                                            ...user,
                                            lastLoginMethod: lastUsedLoginMethod
                                        }
                                    };
                                }
                            }
                        },
                        session: {
                            create: {
                                async after (session, context) {
                                    if (!config.storeInDatabase) return;
                                    if (!context) return;
                                    const lastUsedLoginMethod = config.customResolveMethod?.(context) ?? defaultResolveMethod(context);
                                    if (lastUsedLoginMethod && session?.userId) try {
                                        await ctx.internalAdapter.updateUser(session.userId, {
                                            lastLoginMethod: lastUsedLoginMethod
                                        });
                                    } catch (error) {
                                        ctx.logger.error("Failed to update lastLoginMethod", error);
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
                    matcher () {
                        return true;
                    },
                    handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
                        const lastUsedLoginMethod = config.customResolveMethod?.(ctx) ?? defaultResolveMethod(ctx);
                        if (lastUsedLoginMethod) {
                            const setCookie = ctx.context.responseHeaders?.get("set-cookie");
                            const sessionTokenName = ctx.context.authCookies.sessionToken.name;
                            if (setCookie && setCookie.includes(sessionTokenName)) {
                                const cookieAttributes = {
                                    ...ctx.context.authCookies.sessionToken.attributes,
                                    maxAge: config.maxAge,
                                    httpOnly: false
                                };
                                ctx.setCookie(config.cookieName, lastUsedLoginMethod, cookieAttributes);
                            }
                        }
                    })
                }
            ]
        },
        schema: config.storeInDatabase ? {
            user: {
                fields: {
                    lastLoginMethod: {
                        type: "string",
                        input: false,
                        required: false,
                        fieldName: config.schema?.user?.lastLoginMethod || "lastLoginMethod"
                    }
                }
            }
        } : void 0,
        options: userConfig
    };
};
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/magic-link/utils.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "defaultKeyHasher": (()=>defaultKeyHasher)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/hash.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/base64.mjs [middleware-edge] (ecmascript)");
;
;
//#region src/plugins/magic-link/utils.ts
const defaultKeyHasher = async (otp)=>{
    const hash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createHash"])("SHA-256").digest(new TextEncoder().encode(otp));
    return __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["base64Url"].encode(new Uint8Array(hash), {
        padding: false
    });
};
;
 //# sourceMappingURL=utils.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/magic-link/index.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "magicLink": (()=>magicLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/db/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$middlewares$2f$origin$2d$check$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/middlewares/origin-check.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/random.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$magic$2d$link$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/magic-link/utils.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/zod/v4/classic/schemas.js [middleware-edge] (ecmascript)");
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
//#region src/plugins/magic-link/index.ts
const signInMagicLinkBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["email"])().meta({
        description: "Email address to send the magic link"
    }),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "User display name. Only used if the user is registering for the first time. Eg: \"my-name\""
    }).optional(),
    callbackURL: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "URL to redirect after magic link verification"
    }).optional(),
    newUserCallbackURL: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "URL to redirect after new user signup. Only used if the user is registering for the first time."
    }).optional(),
    errorCallbackURL: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "URL to redirect after error."
    }).optional()
});
const magicLinkVerifyQuerySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "Verification token"
    }),
    callbackURL: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "URL to redirect after magic link verification, if not provided the user will be redirected to the root URL. Eg: \"/dashboard\""
    }).optional(),
    errorCallbackURL: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "URL to redirect after error."
    }).optional(),
    newUserCallbackURL: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "URL to redirect after new user signup. Only used if the user is registering for the first time."
    }).optional()
});
const magicLink = (options)=>{
    const opts = {
        storeToken: "plain",
        ...options
    };
    async function storeToken(ctx, token) {
        if (opts.storeToken === "hashed") return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$magic$2d$link$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defaultKeyHasher"])(token);
        if (typeof opts.storeToken === "object" && "type" in opts.storeToken && opts.storeToken.type === "custom-hasher") return await opts.storeToken.hash(token);
        return token;
    }
    return {
        id: "magic-link",
        endpoints: {
            signInMagicLink: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/sign-in/magic-link", {
                method: "POST",
                requireHeaders: true,
                body: signInMagicLinkBodySchema,
                metadata: {
                    openapi: {
                        operationId: "signInWithMagicLink",
                        description: "Sign in with magic link",
                        responses: {
                            200: {
                                description: "Success",
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
                const { email } = ctx.body;
                const verificationToken = opts?.generateToken ? await opts.generateToken(email) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateRandomString"])(32, "a-z", "A-Z");
                const storedToken = await storeToken(ctx, verificationToken);
                await ctx.context.internalAdapter.createVerificationValue({
                    identifier: storedToken,
                    value: JSON.stringify({
                        email,
                        name: ctx.body.name
                    }),
                    expiresAt: new Date(Date.now() + (opts.expiresIn || 300) * 1e3)
                });
                const realBaseURL = new URL(ctx.context.baseURL);
                const pathname = realBaseURL.pathname === "/" ? "" : realBaseURL.pathname;
                const basePath = pathname ? "" : ctx.context.options.basePath || "";
                const url = new URL(`${pathname}${basePath}/magic-link/verify`, realBaseURL.origin);
                url.searchParams.set("token", verificationToken);
                url.searchParams.set("callbackURL", ctx.body.callbackURL || "/");
                if (ctx.body.newUserCallbackURL) url.searchParams.set("newUserCallbackURL", ctx.body.newUserCallbackURL);
                if (ctx.body.errorCallbackURL) url.searchParams.set("errorCallbackURL", ctx.body.errorCallbackURL);
                await options.sendMagicLink({
                    email,
                    url: url.toString(),
                    token: verificationToken
                }, ctx);
                return ctx.json({
                    status: true
                });
            }),
            magicLinkVerify: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/magic-link/verify", {
                method: "GET",
                query: magicLinkVerifyQuerySchema,
                use: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$middlewares$2f$origin$2d$check$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["originCheck"])((ctx)=>{
                        return ctx.query.callbackURL ? decodeURIComponent(ctx.query.callbackURL) : "/";
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$middlewares$2f$origin$2d$check$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["originCheck"])((ctx)=>{
                        return ctx.query.newUserCallbackURL ? decodeURIComponent(ctx.query.newUserCallbackURL) : "/";
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$middlewares$2f$origin$2d$check$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["originCheck"])((ctx)=>{
                        return ctx.query.errorCallbackURL ? decodeURIComponent(ctx.query.errorCallbackURL) : "/";
                    })
                ],
                requireHeaders: true,
                metadata: {
                    openapi: {
                        operationId: "verifyMagicLink",
                        description: "Verify magic link",
                        responses: {
                            200: {
                                description: "Success",
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
                const token = ctx.query.token;
                const callbackURL = new URL(ctx.query.callbackURL ? decodeURIComponent(ctx.query.callbackURL) : "/", ctx.context.baseURL).toString();
                const errorCallbackURL = new URL(ctx.query.errorCallbackURL ? decodeURIComponent(ctx.query.errorCallbackURL) : callbackURL, ctx.context.baseURL);
                function redirectWithError(error) {
                    errorCallbackURL.searchParams.set("error", error);
                    throw ctx.redirect(errorCallbackURL.toString());
                }
                const newUserCallbackURL = new URL(ctx.query.newUserCallbackURL ? decodeURIComponent(ctx.query.newUserCallbackURL) : callbackURL, ctx.context.baseURL).toString();
                const storedToken = await storeToken(ctx, token);
                const tokenValue = await ctx.context.internalAdapter.findVerificationValue(storedToken);
                if (!tokenValue) redirectWithError("INVALID_TOKEN");
                if (tokenValue.expiresAt < /* @__PURE__ */ new Date()) {
                    await ctx.context.internalAdapter.deleteVerificationValue(tokenValue.id);
                    redirectWithError("EXPIRED_TOKEN");
                }
                await ctx.context.internalAdapter.deleteVerificationValue(tokenValue.id);
                const { email, name } = JSON.parse(tokenValue.value);
                let isNewUser = false;
                let user = await ctx.context.internalAdapter.findUserByEmail(email).then((res)=>res?.user);
                if (!user) if (!opts.disableSignUp) {
                    const newUser = await ctx.context.internalAdapter.createUser({
                        email,
                        emailVerified: true,
                        name: name || ""
                    });
                    isNewUser = true;
                    user = newUser;
                    if (!user) redirectWithError("failed_to_create_user");
                } else redirectWithError("new_user_signup_disabled");
                if (!user.emailVerified) user = await ctx.context.internalAdapter.updateUser(user.id, {
                    emailVerified: true
                });
                const session = await ctx.context.internalAdapter.createSession(user.id);
                if (!session) redirectWithError("failed_to_create_session");
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setSessionCookie"])(ctx, {
                    session,
                    user
                });
                if (!ctx.query.callbackURL) return ctx.json({
                    token: session.token,
                    user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, user)
                });
                if (isNewUser) throw ctx.redirect(newUserCallbackURL);
                throw ctx.redirect(callbackURL);
            })
        },
        rateLimit: [
            {
                pathMatcher (path) {
                    return path.startsWith("/sign-in/magic-link") || path.startsWith("/magic-link/verify");
                },
                window: opts.rateLimit?.window || 60,
                max: opts.rateLimit?.max || 5
            }
        ],
        options
    };
};
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/mcp/authorize.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "authorizeMCPOAuth": (()=>authorizeMCPOAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/random.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/routes/session.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
;
;
;
;
;
//#region src/plugins/mcp/authorize.ts
function redirectErrorURL(url, error, description) {
    return `${url.includes("?") ? "&" : "?"}error=${error}&error_description=${description}`;
}
async function authorizeMCPOAuth(ctx, options) {
    ctx.setHeader("Access-Control-Allow-Origin", "*");
    ctx.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    ctx.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    ctx.setHeader("Access-Control-Max-Age", "86400");
    const opts = {
        codeExpiresIn: 600,
        defaultScope: "openid",
        ...options,
        scopes: [
            "openid",
            "profile",
            "email",
            "offline_access",
            ...options?.scopes || []
        ]
    };
    if (!ctx.request) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
        error_description: "request not found",
        error: "invalid_request"
    });
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSessionFromCtx"])(ctx);
    if (!session) {
        /**
		* If the user is not logged in, we need to redirect them to the
		* login page.
		*/ await ctx.setSignedCookie("oidc_login_prompt", JSON.stringify(ctx.query), ctx.context.secret, {
            maxAge: 600,
            path: "/",
            sameSite: "lax"
        });
        const queryFromURL = ctx.request.url?.split("?")[1];
        throw ctx.redirect(`${options.loginPage}?${queryFromURL}`);
    }
    const query = ctx.query;
    if (!query.client_id) throw ctx.redirect(`${ctx.context.baseURL}/error?error=invalid_client`);
    if (!query.response_type) throw ctx.redirect(redirectErrorURL(`${ctx.context.baseURL}/error`, "invalid_request", "response_type is required"));
    const client = await ctx.context.adapter.findOne({
        model: "oauthApplication",
        where: [
            {
                field: "clientId",
                value: ctx.query.client_id
            }
        ]
    }).then((res)=>{
        if (!res) return null;
        return {
            ...res,
            redirectUrls: res.redirectUrls.split(","),
            metadata: res.metadata ? JSON.parse(res.metadata) : {}
        };
    });
    if (!client) throw ctx.redirect(`${ctx.context.baseURL}/error?error=invalid_client`);
    const redirectURI = client.redirectUrls.find((url)=>url === ctx.query.redirect_uri);
    if (!redirectURI || !query.redirect_uri) /**
	* show UI error here warning the user that the redirect URI is invalid
	*/ throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: "Invalid redirect URI"
    });
    if (client.disabled) throw ctx.redirect(`${ctx.context.baseURL}/error?error=client_disabled`);
    if (query.response_type !== "code") throw ctx.redirect(`${ctx.context.baseURL}/error?error=unsupported_response_type`);
    const requestScope = query.scope?.split(" ").filter((s)=>s) || opts.defaultScope.split(" ");
    const invalidScopes = requestScope.filter((scope)=>{
        return !opts.scopes.includes(scope);
    });
    if (invalidScopes.length) throw ctx.redirect(redirectErrorURL(query.redirect_uri, "invalid_scope", `The following scopes are invalid: ${invalidScopes.join(", ")}`));
    if ((!query.code_challenge || !query.code_challenge_method) && options.requirePKCE) throw ctx.redirect(redirectErrorURL(query.redirect_uri, "invalid_request", "pkce is required"));
    if (!query.code_challenge_method) query.code_challenge_method = "plain";
    if (![
        "s256",
        options.allowPlainCodeChallengeMethod ? "plain" : "s256"
    ].includes(query.code_challenge_method?.toLowerCase() || "")) throw ctx.redirect(redirectErrorURL(query.redirect_uri, "invalid_request", "invalid code_challenge method"));
    const code = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateRandomString"])(32, "a-z", "A-Z", "0-9");
    const codeExpiresInMs = opts.codeExpiresIn * 1e3;
    const expiresAt = new Date(Date.now() + codeExpiresInMs);
    try {
        /**
		* Save the code in the database
		*/ await ctx.context.internalAdapter.createVerificationValue({
            value: JSON.stringify({
                clientId: client.clientId,
                redirectURI: query.redirect_uri,
                scope: requestScope,
                userId: session.user.id,
                authTime: new Date(session.session.createdAt).getTime(),
                requireConsent: query.prompt === "consent",
                state: query.prompt === "consent" ? query.state : null,
                codeChallenge: query.code_challenge,
                codeChallengeMethod: query.code_challenge_method,
                nonce: query.nonce
            }),
            identifier: code,
            expiresAt
        });
    } catch  {
        throw ctx.redirect(redirectErrorURL(query.redirect_uri, "server_error", "An error occurred while processing the request"));
    }
    if (query.prompt !== "consent") {
        const redirectURIWithCode$1 = new URL(redirectURI);
        redirectURIWithCode$1.searchParams.set("code", code);
        if (ctx.query.state) redirectURIWithCode$1.searchParams.set("state", ctx.query.state);
        throw ctx.redirect(redirectURIWithCode$1.toString());
    }
    if (options?.consentPage) {
        await ctx.setSignedCookie("oidc_consent_prompt", code, ctx.context.secret, {
            maxAge: 600,
            path: "/",
            sameSite: "lax"
        });
        const urlParams = new URLSearchParams();
        urlParams.set("consent_code", code);
        urlParams.set("client_id", client.clientId);
        urlParams.set("scope", requestScope.join(" "));
        const consentURI = `${options.consentPage}?${urlParams.toString()}`;
        throw ctx.redirect(consentURI);
    }
    const redirectURIWithCode = new URL(redirectURI);
    redirectURIWithCode.searchParams.set("code", code);
    if (ctx.query.state) redirectURIWithCode.searchParams.set("state", ctx.query.state);
    throw ctx.redirect(redirectURIWithCode.toString());
}
;
 //# sourceMappingURL=authorize.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/mcp/index.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getMCPProtectedResourceMetadata": (()=>getMCPProtectedResourceMetadata),
    "getMCPProviderMetadata": (()=>getMCPProviderMetadata),
    "mcp": (()=>mcp),
    "oAuthDiscoveryMetadata": (()=>oAuthDiscoveryMetadata),
    "oAuthProtectedResourceMetadata": (()=>oAuthProtectedResourceMetadata),
    "withMcpAuth": (()=>withMcpAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$url$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/url.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/random.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$cookie$2d$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/cookie-utils.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/routes/session.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$hide$2d$metadata$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/hide-metadata.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$oidc$2d$provider$2f$utils$2f$prompt$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/oidc-provider/utils/prompt.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$oidc$2d$provider$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/oidc-provider/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$oidc$2d$provider$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/oidc-provider/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$mcp$2f$authorize$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/mcp/authorize.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/env/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/env/env-impl.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$logger$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/env/logger.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$json$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/json.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/zod/v4/classic/schemas.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/api/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/hash.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/jose/dist/webapi/jwt/sign.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/base64.mjs [middleware-edge] (ecmascript)");
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
//#region src/plugins/mcp/index.ts
const getMCPProviderMetadata = (ctx, options)=>{
    const issuer = ctx.context.options.baseURL;
    const baseURL = ctx.context.baseURL;
    if (!issuer || !baseURL) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
        error: "invalid_issuer",
        error_description: "issuer or baseURL is not set. If you're the app developer, please make sure to set the `baseURL` in your auth config."
    });
    return {
        issuer,
        authorization_endpoint: `${baseURL}/mcp/authorize`,
        token_endpoint: `${baseURL}/mcp/token`,
        userinfo_endpoint: `${baseURL}/mcp/userinfo`,
        jwks_uri: `${baseURL}/mcp/jwks`,
        registration_endpoint: `${baseURL}/mcp/register`,
        scopes_supported: [
            "openid",
            "profile",
            "email",
            "offline_access"
        ],
        response_types_supported: [
            "code"
        ],
        response_modes_supported: [
            "query"
        ],
        grant_types_supported: [
            "authorization_code",
            "refresh_token"
        ],
        acr_values_supported: [
            "urn:mace:incommon:iap:silver",
            "urn:mace:incommon:iap:bronze"
        ],
        subject_types_supported: [
            "public"
        ],
        id_token_signing_alg_values_supported: [
            "RS256",
            "none"
        ],
        token_endpoint_auth_methods_supported: [
            "client_secret_basic",
            "client_secret_post",
            "none"
        ],
        code_challenge_methods_supported: [
            "S256"
        ],
        claims_supported: [
            "sub",
            "iss",
            "aud",
            "exp",
            "nbf",
            "iat",
            "jti",
            "email",
            "email_verified",
            "name"
        ],
        ...options?.metadata
    };
};
const getMCPProtectedResourceMetadata = (ctx, options)=>{
    const baseURL = ctx.context.baseURL;
    const origin = new URL(baseURL).origin;
    return {
        resource: options?.resource ?? origin,
        authorization_servers: [
            origin
        ],
        jwks_uri: options?.oidcConfig?.metadata?.jwks_uri ?? `${baseURL}/mcp/jwks`,
        scopes_supported: options?.oidcConfig?.metadata?.scopes_supported ?? [
            "openid",
            "profile",
            "email",
            "offline_access"
        ],
        bearer_methods_supported: [
            "header"
        ],
        resource_signing_alg_values_supported: [
            "RS256",
            "none"
        ]
    };
};
const registerMcpClientBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    redirect_uris: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])()),
    token_endpoint_auth_method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["enum"])([
        "none",
        "client_secret_basic",
        "client_secret_post"
    ]).default("client_secret_basic").optional(),
    grant_types: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["enum"])([
        "authorization_code",
        "implicit",
        "password",
        "client_credentials",
        "refresh_token",
        "urn:ietf:params:oauth:grant-type:jwt-bearer",
        "urn:ietf:params:oauth:grant-type:saml2-bearer"
    ])).default([
        "authorization_code"
    ]).optional(),
    response_types: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["enum"])([
        "code",
        "token"
    ])).default([
        "code"
    ]).optional(),
    client_name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().optional(),
    client_uri: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().optional(),
    logo_uri: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().optional(),
    scope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().optional(),
    contacts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])()).optional(),
    tos_uri: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().optional(),
    policy_uri: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().optional(),
    jwks_uri: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().optional(),
    jwks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["any"])()).optional(),
    metadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["any"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["any"])()).optional(),
    software_id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().optional(),
    software_version: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().optional(),
    software_statement: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().optional()
});
const mcpOAuthTokenBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["any"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["any"])());
const mcp = (options)=>{
    const opts = {
        codeExpiresIn: 600,
        defaultScope: "openid",
        accessTokenExpiresIn: 3600,
        refreshTokenExpiresIn: 604800,
        allowPlainCodeChallengeMethod: true,
        ...options.oidcConfig,
        loginPage: options.loginPage,
        scopes: [
            "openid",
            "profile",
            "email",
            "offline_access",
            ...options.oidcConfig?.scopes || []
        ]
    };
    const modelName = {
        oauthClient: "oauthApplication",
        oauthAccessToken: "oauthAccessToken",
        oauthConsent: "oauthConsent"
    };
    const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$oidc$2d$provider$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["oidcProvider"])(opts);
    return {
        id: "mcp",
        hooks: {
            after: [
                {
                    matcher () {
                        return true;
                    },
                    handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
                        const cookie = await ctx.getSignedCookie("oidc_login_prompt", ctx.context.secret);
                        const cookieName = ctx.context.authCookies.sessionToken.name;
                        const parsedSetCookieHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$cookie$2d$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseSetCookieHeader"])(ctx.context.responseHeaders?.get("set-cookie") || "");
                        const hasSessionToken = parsedSetCookieHeader.has(cookieName);
                        if (!cookie || !hasSessionToken) return;
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["expireCookie"])(ctx, {
                            name: "oidc_login_prompt",
                            attributes: {
                                path: "/"
                            }
                        });
                        const sessionToken = parsedSetCookieHeader.get(cookieName)?.value?.split(".")[0];
                        if (!sessionToken) return;
                        const session = await ctx.context.internalAdapter.findSession(sessionToken) || ctx.context.newSession;
                        if (!session) return;
                        const parsedCookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$json$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["safeJSONParse"])(cookie);
                        if (!parsedCookie) return;
                        ctx.query = parsedCookie;
                        const promptSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$oidc$2d$provider$2f$utils$2f$prompt$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parsePrompt"])(String(ctx.query?.prompt));
                        if (promptSet.has("login")) {
                            const newPromptSet = new Set(promptSet);
                            newPromptSet.delete("login");
                            ctx.query = {
                                ...ctx.query,
                                prompt: Array.from(newPromptSet).join(" ")
                            };
                        }
                        ctx.context.session = session;
                        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$mcp$2f$authorize$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["authorizeMCPOAuth"])(ctx, opts);
                    })
                }
            ]
        },
        endpoints: {
            oAuthConsent: provider.endpoints.oAuthConsent,
            getMcpOAuthConfig: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/.well-known/oauth-authorization-server", {
                method: "GET",
                metadata: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$hide$2d$metadata$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["HIDE_METADATA"]
            }, async (c)=>{
                try {
                    const metadata = getMCPProviderMetadata(c, options);
                    return c.json(metadata);
                } catch (e) {
                    console.log(e);
                    return c.json(null);
                }
            }),
            getMCPProtectedResource: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/.well-known/oauth-protected-resource", {
                method: "GET",
                metadata: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$hide$2d$metadata$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["HIDE_METADATA"]
            }, async (c)=>{
                const metadata = getMCPProtectedResourceMetadata(c, options);
                return c.json(metadata);
            }),
            mcpOAuthAuthorize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/mcp/authorize", {
                method: "GET",
                query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["any"])()),
                metadata: {
                    openapi: {
                        description: "Authorize an OAuth2 request using MCP",
                        responses: {
                            "200": {
                                description: "Authorization response generated successfully",
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object",
                                            additionalProperties: true,
                                            description: "Authorization response, contents depend on the authorize function implementation"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, async (ctx)=>{
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$mcp$2f$authorize$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["authorizeMCPOAuth"])(ctx, opts);
            }),
            mcpOAuthToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/mcp/token", {
                method: "POST",
                body: mcpOAuthTokenBodySchema,
                metadata: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$hide$2d$metadata$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["HIDE_METADATA"],
                    allowedMediaTypes: [
                        "application/x-www-form-urlencoded",
                        "application/json"
                    ]
                }
            }, async (ctx)=>{
                ctx.setHeader("Access-Control-Allow-Origin", "*");
                ctx.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
                ctx.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
                ctx.setHeader("Access-Control-Max-Age", "86400");
                let { body } = ctx;
                if (!body) throw ctx.error("BAD_REQUEST", {
                    error_description: "request body not found",
                    error: "invalid_request"
                });
                if (body instanceof FormData) body = Object.fromEntries(body.entries());
                if (!(body instanceof Object)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    error_description: "request body is not an object",
                    error: "invalid_request"
                });
                let { client_id, client_secret } = body;
                const authorization = ctx.request?.headers.get("authorization") || null;
                if (authorization && !client_id && !client_secret && authorization.startsWith("Basic ")) try {
                    const encoded = authorization.replace("Basic ", "");
                    const decoded = new TextDecoder().decode(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["base64"].decode(encoded));
                    if (!decoded.includes(":")) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                        error_description: "invalid authorization header format",
                        error: "invalid_client"
                    });
                    const [id, secret] = decoded.split(":");
                    if (!id || !secret) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                        error_description: "invalid authorization header format",
                        error: "invalid_client"
                    });
                    client_id = id;
                    client_secret = secret;
                } catch  {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                        error_description: "invalid authorization header format",
                        error: "invalid_client"
                    });
                }
                const { grant_type, code, redirect_uri, refresh_token, code_verifier } = body;
                if (grant_type === "refresh_token") {
                    if (!refresh_token) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        error_description: "refresh_token is required",
                        error: "invalid_request"
                    });
                    const token = await ctx.context.adapter.findOne({
                        model: "oauthAccessToken",
                        where: [
                            {
                                field: "refreshToken",
                                value: refresh_token.toString()
                            }
                        ]
                    });
                    if (!token) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                        error_description: "invalid refresh token",
                        error: "invalid_grant"
                    });
                    if (token.clientId !== client_id?.toString()) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                        error_description: "invalid client_id",
                        error: "invalid_client"
                    });
                    if (token.refreshTokenExpiresAt < /* @__PURE__ */ new Date()) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                        error_description: "refresh token expired",
                        error: "invalid_grant"
                    });
                    const accessToken$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateRandomString"])(32, "a-z", "A-Z");
                    const newRefreshToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateRandomString"])(32, "a-z", "A-Z");
                    const accessTokenExpiresAt$1 = new Date(Date.now() + opts.accessTokenExpiresIn * 1e3);
                    const refreshTokenExpiresAt$1 = new Date(Date.now() + opts.refreshTokenExpiresIn * 1e3);
                    await ctx.context.adapter.create({
                        model: modelName.oauthAccessToken,
                        data: {
                            accessToken: accessToken$1,
                            refreshToken: newRefreshToken,
                            accessTokenExpiresAt: accessTokenExpiresAt$1,
                            refreshTokenExpiresAt: refreshTokenExpiresAt$1,
                            clientId: client_id.toString(),
                            userId: token.userId,
                            scopes: token.scopes,
                            createdAt: /* @__PURE__ */ new Date(),
                            updatedAt: /* @__PURE__ */ new Date()
                        }
                    });
                    return ctx.json({
                        access_token: accessToken$1,
                        token_type: "bearer",
                        expires_in: opts.accessTokenExpiresIn,
                        refresh_token: newRefreshToken,
                        scope: token.scopes
                    });
                }
                if (!code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    error_description: "code is required",
                    error: "invalid_request"
                });
                if (opts.requirePKCE && !code_verifier) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    error_description: "code verifier is missing",
                    error: "invalid_request"
                });
                /**
				* We need to check if the code is valid before we can proceed
				* with the rest of the request.
				*/ const verificationValue = await ctx.context.internalAdapter.findVerificationValue(code.toString());
                if (!verificationValue) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                    error_description: "invalid code",
                    error: "invalid_grant"
                });
                if (verificationValue.expiresAt < /* @__PURE__ */ new Date()) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                    error_description: "code expired",
                    error: "invalid_grant"
                });
                await ctx.context.internalAdapter.deleteVerificationValue(verificationValue.id);
                if (!client_id) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                    error_description: "client_id is required",
                    error: "invalid_client"
                });
                if (!grant_type) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    error_description: "grant_type is required",
                    error: "invalid_request"
                });
                if (grant_type !== "authorization_code") throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    error_description: "grant_type must be 'authorization_code'",
                    error: "unsupported_grant_type"
                });
                if (!redirect_uri) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    error_description: "redirect_uri is required",
                    error: "invalid_request"
                });
                const client = await ctx.context.adapter.findOne({
                    model: modelName.oauthClient,
                    where: [
                        {
                            field: "clientId",
                            value: client_id.toString()
                        }
                    ]
                }).then((res)=>{
                    if (!res) return null;
                    return {
                        ...res,
                        redirectUrls: res.redirectUrls.split(","),
                        metadata: res.metadata ? JSON.parse(res.metadata) : {}
                    };
                });
                if (!client) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                    error_description: "invalid client_id",
                    error: "invalid_client"
                });
                if (client.disabled) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                    error_description: "client is disabled",
                    error: "invalid_client"
                });
                if (client.type === "public") {
                    if (!code_verifier) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        error_description: "code verifier is required for public clients",
                        error: "invalid_request"
                    });
                } else {
                    if (!client_secret) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                        error_description: "client_secret is required for confidential clients",
                        error: "invalid_client"
                    });
                    if (!(client.clientSecret === client_secret.toString())) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                        error_description: "invalid client_secret",
                        error: "invalid_client"
                    });
                }
                const value = JSON.parse(verificationValue.value);
                if (value.clientId !== client_id.toString()) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                    error_description: "invalid client_id",
                    error: "invalid_client"
                });
                if (value.redirectURI !== redirect_uri.toString()) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                    error_description: "invalid redirect_uri",
                    error: "invalid_client"
                });
                if (value.codeChallenge && !code_verifier) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    error_description: "code verifier is missing",
                    error: "invalid_request"
                });
                if ((value.codeChallengeMethod === "plain" ? code_verifier : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createHash"])("SHA-256", "base64urlnopad").digest(code_verifier)) !== value.codeChallenge) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                    error_description: "code verification failed",
                    error: "invalid_request"
                });
                const requestedScopes = value.scope;
                await ctx.context.internalAdapter.deleteVerificationValue(verificationValue.id);
                const accessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateRandomString"])(32, "a-z", "A-Z");
                const refreshToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateRandomString"])(32, "A-Z", "a-z");
                const accessTokenExpiresAt = new Date(Date.now() + opts.accessTokenExpiresIn * 1e3);
                const refreshTokenExpiresAt = new Date(Date.now() + opts.refreshTokenExpiresIn * 1e3);
                await ctx.context.adapter.create({
                    model: modelName.oauthAccessToken,
                    data: {
                        accessToken,
                        refreshToken,
                        accessTokenExpiresAt,
                        refreshTokenExpiresAt,
                        clientId: client_id.toString(),
                        userId: value.userId,
                        scopes: requestedScopes.join(" "),
                        createdAt: /* @__PURE__ */ new Date(),
                        updatedAt: /* @__PURE__ */ new Date()
                    }
                });
                const user = await ctx.context.internalAdapter.findUserById(value.userId);
                if (!user) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                    error_description: "user not found",
                    error: "invalid_grant"
                });
                const secretKey = {
                    alg: "HS256",
                    key: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().generateKey({
                        name: "HMAC",
                        hash: "SHA-256"
                    }, true, [
                        "sign",
                        "verify"
                    ])
                };
                const profile = {
                    given_name: user.name.split(" ")[0],
                    family_name: user.name.split(" ")[1],
                    name: user.name,
                    profile: user.image,
                    updated_at: Math.floor(new Date(user.updatedAt).getTime() / 1e3)
                };
                const email = {
                    email: user.email,
                    email_verified: user.emailVerified
                };
                const userClaims = {
                    ...requestedScopes.includes("profile") ? profile : {},
                    ...requestedScopes.includes("email") ? email : {}
                };
                const additionalUserClaims = opts.getAdditionalUserInfoClaim ? await opts.getAdditionalUserInfoClaim(user, requestedScopes, client) : {};
                const idToken = await new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SignJWT"]({
                    sub: user.id,
                    aud: client_id.toString(),
                    iat: Date.now(),
                    auth_time: ctx.context.session ? new Date(ctx.context.session.session.createdAt).getTime() : void 0,
                    nonce: value.nonce,
                    acr: "urn:mace:incommon:iap:silver",
                    ...userClaims,
                    ...additionalUserClaims
                }).setProtectedHeader({
                    alg: secretKey.alg
                }).setIssuedAt().setExpirationTime(Math.floor(Date.now() / 1e3) + opts.accessTokenExpiresIn).sign(secretKey.key);
                return ctx.json({
                    access_token: accessToken,
                    token_type: "Bearer",
                    expires_in: opts.accessTokenExpiresIn,
                    refresh_token: requestedScopes.includes("offline_access") ? refreshToken : void 0,
                    scope: requestedScopes.join(" "),
                    id_token: requestedScopes.includes("openid") ? idToken : void 0
                }, {
                    headers: {
                        "Cache-Control": "no-store",
                        Pragma: "no-cache"
                    }
                });
            }),
            registerMcpClient: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/mcp/register", {
                method: "POST",
                body: registerMcpClientBodySchema,
                metadata: {
                    openapi: {
                        description: "Register an OAuth2 application",
                        responses: {
                            "200": {
                                description: "OAuth2 application registered successfully",
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object",
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "Name of the OAuth2 application"
                                                },
                                                icon: {
                                                    type: "string",
                                                    nullable: true,
                                                    description: "Icon URL for the application"
                                                },
                                                metadata: {
                                                    type: "object",
                                                    additionalProperties: true,
                                                    nullable: true,
                                                    description: "Additional metadata for the application"
                                                },
                                                clientId: {
                                                    type: "string",
                                                    description: "Unique identifier for the client"
                                                },
                                                clientSecret: {
                                                    type: "string",
                                                    description: "Secret key for the client. Not included for public clients."
                                                },
                                                redirectUrls: {
                                                    type: "array",
                                                    items: {
                                                        type: "string",
                                                        format: "uri"
                                                    },
                                                    description: "List of allowed redirect URLs"
                                                },
                                                type: {
                                                    type: "string",
                                                    description: "Type of the client",
                                                    enum: [
                                                        "web",
                                                        "public"
                                                    ]
                                                },
                                                authenticationScheme: {
                                                    type: "string",
                                                    description: "Authentication scheme used by the client",
                                                    enum: [
                                                        "client_secret",
                                                        "none"
                                                    ]
                                                },
                                                disabled: {
                                                    type: "boolean",
                                                    description: "Whether the client is disabled",
                                                    enum: [
                                                        false
                                                    ]
                                                },
                                                userId: {
                                                    type: "string",
                                                    nullable: true,
                                                    description: "ID of the user who registered the client, null if registered anonymously"
                                                },
                                                createdAt: {
                                                    type: "string",
                                                    format: "date-time",
                                                    description: "Creation timestamp"
                                                },
                                                updatedAt: {
                                                    type: "string",
                                                    format: "date-time",
                                                    description: "Last update timestamp"
                                                }
                                            },
                                            required: [
                                                "name",
                                                "clientId",
                                                "redirectUrls",
                                                "type",
                                                "authenticationScheme",
                                                "disabled",
                                                "createdAt",
                                                "updatedAt"
                                            ]
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, async (ctx)=>{
                const body = ctx.body;
                const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSessionFromCtx"])(ctx);
                ctx.setHeader("Access-Control-Allow-Origin", "*");
                ctx.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
                ctx.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
                ctx.setHeader("Access-Control-Max-Age", "86400");
                ctx.headers?.set("Access-Control-Max-Age", "86400");
                if ((!body.grant_types || body.grant_types.includes("authorization_code") || body.grant_types.includes("implicit")) && (!body.redirect_uris || body.redirect_uris.length === 0)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    error: "invalid_redirect_uri",
                    error_description: "Redirect URIs are required for authorization_code and implicit grant types"
                });
                if (body.grant_types && body.response_types) {
                    if (body.grant_types.includes("authorization_code") && !body.response_types.includes("code")) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        error: "invalid_client_metadata",
                        error_description: "When 'authorization_code' grant type is used, 'code' response type must be included"
                    });
                    if (body.grant_types.includes("implicit") && !body.response_types.includes("token")) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        error: "invalid_client_metadata",
                        error_description: "When 'implicit' grant type is used, 'token' response type must be included"
                    });
                }
                const clientId = opts.generateClientId?.() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateRandomString"])(32, "a-z", "A-Z");
                const clientSecret = opts.generateClientSecret?.() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateRandomString"])(32, "a-z", "A-Z");
                const clientType = body.token_endpoint_auth_method === "none" ? "public" : "web";
                const finalClientSecret = clientType === "public" ? "" : clientSecret;
                await ctx.context.adapter.create({
                    model: modelName.oauthClient,
                    data: {
                        name: body.client_name,
                        icon: body.logo_uri,
                        metadata: body.metadata ? JSON.stringify(body.metadata) : null,
                        clientId,
                        clientSecret: finalClientSecret,
                        redirectUrls: body.redirect_uris.join(","),
                        type: clientType,
                        authenticationScheme: body.token_endpoint_auth_method || "client_secret_basic",
                        disabled: false,
                        userId: session?.session.userId,
                        createdAt: /* @__PURE__ */ new Date(),
                        updatedAt: /* @__PURE__ */ new Date()
                    }
                });
                const responseData = {
                    client_id: clientId,
                    client_id_issued_at: Math.floor(Date.now() / 1e3),
                    redirect_uris: body.redirect_uris,
                    token_endpoint_auth_method: body.token_endpoint_auth_method || "client_secret_basic",
                    grant_types: body.grant_types || [
                        "authorization_code"
                    ],
                    response_types: body.response_types || [
                        "code"
                    ],
                    client_name: body.client_name,
                    client_uri: body.client_uri,
                    logo_uri: body.logo_uri,
                    scope: body.scope,
                    contacts: body.contacts,
                    tos_uri: body.tos_uri,
                    policy_uri: body.policy_uri,
                    jwks_uri: body.jwks_uri,
                    jwks: body.jwks,
                    software_id: body.software_id,
                    software_version: body.software_version,
                    software_statement: body.software_statement,
                    metadata: body.metadata,
                    ...clientType !== "public" ? {
                        client_secret: finalClientSecret,
                        client_secret_expires_at: 0
                    } : {}
                };
                return new Response(JSON.stringify(responseData), {
                    status: 201,
                    headers: {
                        "Content-Type": "application/json",
                        "Cache-Control": "no-store",
                        Pragma: "no-cache"
                    }
                });
            }),
            getMcpSession: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/mcp/get-session", {
                method: "GET",
                requireHeaders: true
            }, async (c)=>{
                const accessToken = c.headers?.get("Authorization")?.replace("Bearer ", "");
                if (!accessToken) {
                    c.headers?.set("WWW-Authenticate", "Bearer");
                    return c.json(null);
                }
                const accessTokenData = await c.context.adapter.findOne({
                    model: modelName.oauthAccessToken,
                    where: [
                        {
                            field: "accessToken",
                            value: accessToken
                        }
                    ]
                });
                if (!accessTokenData) return c.json(null);
                return c.json(accessTokenData);
            })
        },
        schema: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$oidc$2d$provider$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["schema"],
        options
    };
};
const withMcpAuth = (auth, handler)=>{
    return async (req)=>{
        const baseURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$url$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getBaseURL"])(auth.options.baseURL, auth.options.basePath);
        if (!baseURL && !__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isProduction"]) __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$logger$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["logger"].warn("Unable to get the baseURL, please check your config!");
        const session = await auth.api.getMcpSession({
            headers: req.headers
        });
        const wwwAuthenticateValue = `Bearer resource_metadata="${baseURL}/.well-known/oauth-protected-resource"`;
        if (!session) return Response.json({
            jsonrpc: "2.0",
            error: {
                code: -32e3,
                message: "Unauthorized: Authentication required",
                "www-authenticate": wwwAuthenticateValue
            },
            id: null
        }, {
            status: 401,
            headers: {
                "WWW-Authenticate": wwwAuthenticateValue,
                "Access-Control-Expose-Headers": "WWW-Authenticate"
            }
        });
        return handler(req, session);
    };
};
const oAuthDiscoveryMetadata = (auth)=>{
    return async (request)=>{
        const res = await auth.api.getMcpOAuthConfig();
        return new Response(JSON.stringify(res), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                "Access-Control-Max-Age": "86400"
            }
        });
    };
};
const oAuthProtectedResourceMetadata = (auth)=>{
    return async (request)=>{
        const res = await auth.api.getMCPProtectedResource();
        return new Response(JSON.stringify(res), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                "Access-Control-Max-Age": "86400"
            }
        });
    };
};
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/multi-session/index.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "multiSession": (()=>multiSession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/db/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$cookie$2d$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/cookie-utils.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/routes/session.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/error-codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/zod/v4/classic/schemas.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/api/index.mjs [middleware-edge] (ecmascript)");
;
;
;
;
;
;
;
;
//#region src/plugins/multi-session/index.ts
const ERROR_CODES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defineErrorCodes"])({
    INVALID_SESSION_TOKEN: "Invalid session token"
});
const setActiveSessionBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    sessionToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The session token to set as active"
    })
});
const revokeDeviceSessionBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    sessionToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The session token to revoke"
    })
});
const multiSession = (options)=>{
    const opts = {
        maximumSessions: 5,
        ...options
    };
    const isMultiSessionCookie = (key)=>key.includes("_multi-");
    return {
        id: "multi-session",
        endpoints: {
            listDeviceSessions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/multi-session/list-device-sessions", {
                method: "GET",
                requireHeaders: true
            }, async (ctx)=>{
                const cookieHeader = ctx.headers?.get("cookie");
                if (!cookieHeader) return ctx.json([]);
                const cookies = Object.fromEntries((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseCookies"])(cookieHeader));
                const sessionTokens = (await Promise.all(Object.entries(cookies).filter(([key])=>isMultiSessionCookie(key)).map(async ([key])=>await ctx.getSignedCookie(key, ctx.context.secret)))).filter((v)=>typeof v === "string");
                if (!sessionTokens.length) return ctx.json([]);
                const uniqueUserSessions = (await ctx.context.internalAdapter.findSessions(sessionTokens)).filter((session)=>session && session.session.expiresAt > /* @__PURE__ */ new Date()).reduce((acc, session)=>{
                    if (!acc.find((s)=>s.user.id === session.user.id)) acc.push(session);
                    return acc;
                }, []);
                return ctx.json(uniqueUserSessions.map((item)=>({
                        session: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseSessionOutput"])(ctx.context.options, item.session),
                        user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, item.user)
                    })));
            }),
            setActiveSession: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/multi-session/set-active", {
                method: "POST",
                body: setActiveSessionBodySchema,
                requireHeaders: true,
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["sessionMiddleware"]
                ],
                metadata: {
                    openapi: {
                        description: "Set the active session",
                        responses: {
                            200: {
                                description: "Success",
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object",
                                            properties: {
                                                session: {
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
            }, async (ctx)=>{
                const sessionToken = ctx.body.sessionToken;
                const multiSessionCookieName = `${ctx.context.authCookies.sessionToken.name}_multi-${sessionToken.toLowerCase()}`;
                if (!await ctx.getSignedCookie(multiSessionCookieName, ctx.context.secret)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                    message: ERROR_CODES.INVALID_SESSION_TOKEN
                });
                const session = await ctx.context.internalAdapter.findSession(sessionToken);
                if (!session || session.session.expiresAt < /* @__PURE__ */ new Date()) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["expireCookie"])(ctx, {
                        name: multiSessionCookieName,
                        attributes: ctx.context.authCookies.sessionToken.attributes
                    });
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                        message: ERROR_CODES.INVALID_SESSION_TOKEN
                    });
                }
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setSessionCookie"])(ctx, session);
                return ctx.json({
                    session: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseSessionOutput"])(ctx.context.options, session.session),
                    user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, session.user)
                });
            }),
            revokeDeviceSession: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/multi-session/revoke", {
                method: "POST",
                body: revokeDeviceSessionBodySchema,
                requireHeaders: true,
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["sessionMiddleware"]
                ],
                metadata: {
                    openapi: {
                        description: "Revoke a device session",
                        responses: {
                            200: {
                                description: "Success",
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
                const sessionToken = ctx.body.sessionToken;
                const multiSessionCookieName = `${ctx.context.authCookies.sessionToken.name}_multi-${sessionToken.toLowerCase()}`;
                if (!await ctx.getSignedCookie(multiSessionCookieName, ctx.context.secret)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                    message: ERROR_CODES.INVALID_SESSION_TOKEN
                });
                await ctx.context.internalAdapter.deleteSession(sessionToken);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["expireCookie"])(ctx, {
                    name: multiSessionCookieName,
                    attributes: ctx.context.authCookies.sessionToken.attributes
                });
                if (!(ctx.context.session?.session.token === sessionToken)) return ctx.json({
                    status: true
                });
                const cookieHeader = ctx.headers?.get("cookie");
                if (cookieHeader) {
                    const cookies = Object.fromEntries((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseCookies"])(cookieHeader));
                    const sessionTokens = (await Promise.all(Object.entries(cookies).filter(([key])=>isMultiSessionCookie(key)).map(async ([key])=>await ctx.getSignedCookie(key, ctx.context.secret)))).filter((v)=>typeof v === "string");
                    const internalAdapter = ctx.context.internalAdapter;
                    if (sessionTokens.length > 0) {
                        const validSessions = (await internalAdapter.findSessions(sessionTokens)).filter((session)=>session && session.session.expiresAt > /* @__PURE__ */ new Date());
                        if (validSessions.length > 0) {
                            const nextSession = validSessions[0];
                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setSessionCookie"])(ctx, nextSession);
                        } else (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deleteSessionCookie"])(ctx);
                    } else (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deleteSessionCookie"])(ctx);
                } else (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deleteSessionCookie"])(ctx);
                return ctx.json({
                    status: true
                });
            })
        },
        hooks: {
            after: [
                {
                    matcher: ()=>true,
                    handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
                        const cookieString = ctx.context.responseHeaders?.get("set-cookie");
                        if (!cookieString) return;
                        const setCookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$cookie$2d$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseSetCookieHeader"])(cookieString);
                        const sessionCookieConfig = ctx.context.authCookies.sessionToken;
                        const sessionToken = ctx.context.newSession?.session.token;
                        if (!sessionToken) return;
                        const cookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseCookies"])(ctx.headers?.get("cookie") || "");
                        const cookieName = `${sessionCookieConfig.name}_multi-${sessionToken.toLowerCase()}`;
                        if (setCookies.get(cookieName) || cookies.get(cookieName)) return;
                        if (Object.keys(Object.fromEntries(cookies)).filter(isMultiSessionCookie).length + (cookieString.includes("session_token") ? 1 : 0) >= opts.maximumSessions) return;
                        await ctx.setSignedCookie(cookieName, sessionToken, ctx.context.secret, sessionCookieConfig.attributes);
                    })
                },
                {
                    matcher: (context)=>context.path === "/sign-out",
                    handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
                        const cookieHeader = ctx.headers?.get("cookie");
                        if (!cookieHeader) return;
                        const cookies = Object.fromEntries((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseCookies"])(cookieHeader));
                        const multiSessionKeys = Object.keys(cookies).filter((key)=>isMultiSessionCookie(key));
                        const verifiedTokens = (await Promise.all(multiSessionKeys.map(async (key)=>{
                            const verifiedToken = await ctx.getSignedCookie(key, ctx.context.secret);
                            if (verifiedToken) {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["expireCookie"])(ctx, {
                                    name: key.toLowerCase().replace(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$cookie$2d$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SECURE_COOKIE_PREFIX"].toLowerCase(), __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$cookie$2d$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SECURE_COOKIE_PREFIX"]),
                                    attributes: ctx.context.authCookies.sessionToken.attributes
                                });
                                return verifiedToken;
                            }
                            return null;
                        }))).filter((v)=>typeof v === "string");
                        if (verifiedTokens.length > 0) await ctx.context.internalAdapter.deleteSessions(verifiedTokens);
                    })
                }
            ]
        },
        options,
        $ERROR_CODES: ERROR_CODES
    };
};
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/oauth-proxy/utils.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "checkSkipProxy": (()=>checkSkipProxy),
    "resolveCurrentURL": (()=>resolveCurrentURL),
    "stripTrailingSlash": (()=>stripTrailingSlash)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$url$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/url.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/env/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/env/env-impl.mjs [middleware-edge] (ecmascript)");
;
;
//#region src/plugins/oauth-proxy/utils.ts
/**
* Strip trailing slashes from URL to prevent double slashes
*/ function stripTrailingSlash(url) {
    if (!url) return "";
    return url.replace(/\/+$/, "");
}
/**
* Get base URL from vendor-specific environment variables
*/ function getVendorBaseURL() {
    const vercel = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].VERCEL_URL ? `https://${__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].VERCEL_URL}` : void 0;
    const netlify = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NETLIFY_URL;
    const render = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].RENDER_URL;
    const aws = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].AWS_LAMBDA_FUNCTION_NAME;
    const google = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].GOOGLE_CLOUD_FUNCTION_NAME;
    const azure = __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].AZURE_FUNCTION_NAME;
    return vercel || netlify || render || aws || google || azure;
}
/**
* Resolve the current URL from various sources
*/ function resolveCurrentURL(ctx, opts) {
    return new URL(opts?.currentURL || ctx.request?.url || getVendorBaseURL() || ctx.context.baseURL);
}
/**
* Check if the proxy should be skipped for this request
*/ function checkSkipProxy(ctx, opts) {
    if (ctx.request?.headers.get("x-skip-oauth-proxy")) return true;
    const productionURL = opts?.productionURL || __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].BETTER_AUTH_URL;
    if (!productionURL) return false;
    const currentURL = ctx.request?.url || getVendorBaseURL();
    if (!currentURL) return false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$url$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getOrigin"])(productionURL) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$url$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getOrigin"])(currentURL);
}
;
 //# sourceMappingURL=utils.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/oauth-proxy/index.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "oAuthProxy": (()=>oAuthProxy)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$url$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/url.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$middlewares$2f$origin$2d$check$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/middlewares/origin-check.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$cookie$2d$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/cookie-utils.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$parser$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/client/parser.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$oauth$2d$proxy$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/oauth-proxy/utils.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/zod/v4/classic/schemas.js [middleware-edge] (ecmascript)");
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
//#region src/plugins/oauth-proxy/index.ts
const oAuthProxyQuerySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    callbackURL: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The URL to redirect to after the proxy"
    }),
    cookies: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The cookies to set after the proxy"
    })
});
const oAuthProxy = (opts)=>{
    const maxAge = opts?.maxAge ?? 60;
    return {
        id: "oauth-proxy",
        options: opts,
        endpoints: {
            oAuthProxy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/oauth-proxy-callback", {
                method: "GET",
                operationId: "oauthProxyCallback",
                query: oAuthProxyQuerySchema,
                use: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$middlewares$2f$origin$2d$check$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["originCheck"])((ctx)=>ctx.query.callbackURL)
                ],
                metadata: {
                    openapi: {
                        operationId: "oauthProxyCallback",
                        description: "OAuth Proxy Callback",
                        parameters: [
                            {
                                in: "query",
                                name: "callbackURL",
                                required: true,
                                description: "The URL to redirect to after the proxy"
                            },
                            {
                                in: "query",
                                name: "cookies",
                                required: true,
                                description: "The cookies to set after the proxy"
                            }
                        ],
                        responses: {
                            302: {
                                description: "Redirect",
                                headers: {
                                    Location: {
                                        description: "The URL to redirect to",
                                        schema: {
                                            type: "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, async (ctx)=>{
                let decryptedPayload = null;
                try {
                    decryptedPayload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["symmetricDecrypt"])({
                        key: ctx.context.secret,
                        data: ctx.query.cookies
                    });
                } catch (e) {
                    ctx.context.logger.error("Failed to decrypt OAuth proxy cookies:", e);
                }
                if (!decryptedPayload) {
                    const errorURL = ctx.context.options.onAPIError?.errorURL || `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$oauth$2d$proxy$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stripTrailingSlash"])(ctx.context.options.baseURL)}/api/auth/error`;
                    throw ctx.redirect(`${errorURL}?error=OAuthProxy - Invalid cookies or secret`);
                }
                let payload;
                try {
                    payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$parser$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseJSON"])(decryptedPayload);
                } catch (e) {
                    ctx.context.logger.error("Failed to parse OAuth proxy payload:", e);
                    const errorURL = ctx.context.options.onAPIError?.errorURL || `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$oauth$2d$proxy$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stripTrailingSlash"])(ctx.context.options.baseURL)}/api/auth/error`;
                    throw ctx.redirect(`${errorURL}?error=OAuthProxy - Invalid payload format`);
                }
                if (!payload.cookies || typeof payload.cookies !== "string" || typeof payload.timestamp !== "number") {
                    ctx.context.logger.error("OAuth proxy payload missing required fields");
                    const errorURL = ctx.context.options.onAPIError?.errorURL || `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$oauth$2d$proxy$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stripTrailingSlash"])(ctx.context.options.baseURL)}/api/auth/error`;
                    throw ctx.redirect(`${errorURL}?error=OAuthProxy - Invalid payload structure`);
                }
                const age = (Date.now() - payload.timestamp) / 1e3;
                if (age > maxAge || age < -10) {
                    ctx.context.logger.error(`OAuth proxy payload expired or invalid (age: ${age}s, maxAge: ${maxAge}s)`);
                    const errorURL = ctx.context.options.onAPIError?.errorURL || `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$oauth$2d$proxy$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stripTrailingSlash"])(ctx.context.options.baseURL)}/api/auth/error`;
                    throw ctx.redirect(`${errorURL}?error=OAuthProxy - Payload expired or invalid`);
                }
                const decryptedCookies = payload.cookies;
                const isSecureContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$oauth$2d$proxy$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveCurrentURL"])(ctx, opts).protocol === "https:";
                const parsedCookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$cookie$2d$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseSetCookieHeader"])(decryptedCookies);
                const processedCookies = Array.from(parsedCookies.entries()).map(([name, attrs])=>{
                    const options = {};
                    if (attrs.path) options.path = attrs.path;
                    if (attrs.expires) options.expires = attrs.expires;
                    if (attrs.samesite) options.sameSite = attrs.samesite;
                    if (attrs.httponly) options.httpOnly = true;
                    if (attrs["max-age"] !== void 0) options.maxAge = attrs["max-age"];
                    if (isSecureContext) options.secure = true;
                    const cookieName = isSecureContext ? name : (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$cookie$2d$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stripSecureCookiePrefix"])(name);
                    let cookieValue;
                    try {
                        cookieValue = decodeURIComponent(attrs.value);
                    } catch  {
                        cookieValue = attrs.value;
                    }
                    return {
                        name: cookieName,
                        value: cookieValue,
                        options
                    };
                });
                for (const cookie of processedCookies)ctx.setCookie(cookie.name, cookie.value, cookie.options);
                throw ctx.redirect(ctx.query.callbackURL);
            })
        },
        hooks: {
            before: [
                {
                    matcher (context) {
                        return !!(context.path?.startsWith("/sign-in/social") || context.path?.startsWith("/sign-in/oauth2"));
                    },
                    handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$oauth$2d$proxy$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["checkSkipProxy"])(ctx, opts)) return;
                        const currentURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$oauth$2d$proxy$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveCurrentURL"])(ctx, opts);
                        const productionURL = opts?.productionURL;
                        const originalCallbackURL = ctx.body?.callbackURL || ctx.context.baseURL;
                        if (productionURL) {
                            const productionBaseURL = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$oauth$2d$proxy$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stripTrailingSlash"])(productionURL)}${ctx.context.options.basePath || "/api/auth"}`;
                            ctx.context.baseURL = productionBaseURL;
                        }
                        const newCallbackURL = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$oauth$2d$proxy$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stripTrailingSlash"])(currentURL.origin)}${ctx.context.options.basePath || "/api/auth"}/oauth-proxy-callback?callbackURL=${encodeURIComponent(originalCallbackURL)}`;
                        if (!ctx.body) return;
                        ctx.body.callbackURL = newCallbackURL;
                    })
                },
                {
                    matcher (context) {
                        return !!(context.path?.startsWith("/callback") || context.path?.startsWith("/oauth2/callback"));
                    },
                    handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
                        const state = ctx.query?.state || ctx.body?.state;
                        if (!state || typeof state !== "string") return;
                        let statePackage;
                        try {
                            statePackage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$parser$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseJSON"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["symmetricDecrypt"])({
                                key: ctx.context.secret,
                                data: state
                            }));
                        } catch  {
                            return;
                        }
                        if (!statePackage.isOAuthProxy || !statePackage.state || !statePackage.stateCookie) return;
                        let stateCookieValue;
                        try {
                            stateCookieValue = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["symmetricDecrypt"])({
                                key: ctx.context.secret,
                                data: statePackage.stateCookie
                            });
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$parser$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseJSON"])(stateCookieValue);
                        } catch (e) {
                            ctx.context.logger.error("Failed to decrypt OAuth proxy state cookie:", e);
                            return;
                        }
                        ctx.context._oauthProxySnapshot = {
                            storeStateStrategy: ctx.context.oauthConfig.storeStateStrategy,
                            skipStateCookieCheck: ctx.context.oauthConfig.skipStateCookieCheck,
                            internalAdapter: ctx.context.internalAdapter
                        };
                        const originalAdapter = ctx.context.internalAdapter;
                        const capturedStatePackage = statePackage;
                        ctx.context.oauthConfig.storeStateStrategy = "database";
                        ctx.context.internalAdapter = {
                            ...ctx.context.internalAdapter,
                            findVerificationValue: async (identifier)=>{
                                if (identifier === capturedStatePackage.state) return {
                                    id: `oauth-proxy-${capturedStatePackage.state}`,
                                    identifier: capturedStatePackage.state,
                                    value: stateCookieValue,
                                    createdAt: /* @__PURE__ */ new Date(),
                                    updatedAt: /* @__PURE__ */ new Date(),
                                    expiresAt: new Date(Date.now() + 600 * 1e3)
                                };
                                return originalAdapter.findVerificationValue(identifier);
                            }
                        };
                        if (ctx.query?.state) ctx.query.state = statePackage.state;
                        if (ctx.body?.state) ctx.body.state = statePackage.state;
                        ctx.context.oauthConfig.skipStateCookieCheck = true;
                    })
                },
                {
                    matcher () {
                        return true;
                    },
                    handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
                        if (ctx.path !== "/callback/:id") return;
                        if (ctx.context.oauthConfig.storeStateStrategy === "cookie") return;
                        if (ctx.context._oauthProxySnapshot) return;
                        const state = ctx.query?.state || ctx.body?.state;
                        if (!state) return;
                        const data = await ctx.context.internalAdapter.findVerificationValue(state);
                        if (!data) return;
                        let parsedState;
                        try {
                            parsedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$parser$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseJSON"])(data.value);
                        } catch  {
                            parsedState = void 0;
                        }
                        if (!parsedState?.callbackURL?.includes("/oauth-proxy-callback")) return;
                        ctx.context._oauthProxySnapshot = {
                            storeStateStrategy: ctx.context.oauthConfig.storeStateStrategy,
                            skipStateCookieCheck: ctx.context.oauthConfig.skipStateCookieCheck,
                            internalAdapter: ctx.context.internalAdapter
                        };
                        ctx.context.oauthConfig.skipStateCookieCheck = true;
                    })
                }
            ],
            after: [
                {
                    matcher (context) {
                        return !!(context.path?.startsWith("/sign-in/social") || context.path?.startsWith("/sign-in/oauth2"));
                    },
                    handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$oauth$2d$proxy$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["checkSkipProxy"])(ctx, opts)) return;
                        if (ctx.context.oauthConfig.storeStateStrategy !== "cookie") return;
                        const signInResponse = ctx.context.returned;
                        if (!signInResponse || typeof signInResponse !== "object" || !("url" in signInResponse)) return;
                        const { url: providerURL } = signInResponse;
                        if (typeof providerURL !== "string") return;
                        const oauthURL = new URL(providerURL);
                        const originalState = oauthURL.searchParams.get("state");
                        if (!originalState) return;
                        const setCookieHeader = ctx.context.responseHeaders?.get("set-cookie");
                        if (!setCookieHeader) return;
                        const stateCookie = ctx.context.createAuthCookie("oauth_state");
                        const stateCookieAttrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$cookie$2d$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseSetCookieHeader"])(setCookieHeader).get(stateCookie.name);
                        if (!stateCookieAttrs?.value) return;
                        const stateCookieValue = stateCookieAttrs.value;
                        try {
                            const statePackage = {
                                state: originalState,
                                stateCookie: stateCookieValue,
                                isOAuthProxy: true
                            };
                            const encryptedPackage = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["symmetricEncrypt"])({
                                key: ctx.context.secret,
                                data: JSON.stringify(statePackage)
                            });
                            oauthURL.searchParams.set("state", encryptedPackage);
                            ctx.context.returned = {
                                ...signInResponse,
                                url: oauthURL.toString()
                            };
                        } catch (e) {
                            ctx.context.logger.error("Failed to encrypt OAuth proxy state package:", e);
                        }
                    })
                },
                {
                    matcher (context) {
                        return !!(context.path?.startsWith("/callback") || context.path?.startsWith("/oauth2/callback"));
                    },
                    handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
                        const headers = ctx.context.responseHeaders;
                        const location = headers?.get("location");
                        if (!location?.includes("/oauth-proxy-callback?callbackURL") || !location.startsWith("http")) return;
                        const productionOrigin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$url$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getOrigin"])(opts?.productionURL || ctx.context.options.baseURL || ctx.context.baseURL);
                        const locationURL = new URL(location);
                        if (locationURL.origin === productionOrigin) {
                            const newLocation = locationURL.searchParams.get("callbackURL");
                            if (!newLocation) return;
                            ctx.setHeader("location", newLocation);
                            return;
                        }
                        const setCookies = headers?.get("set-cookie");
                        if (!setCookies) return;
                        const payload = {
                            cookies: setCookies,
                            timestamp: Date.now()
                        };
                        const encryptedCookies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["symmetricEncrypt"])({
                            key: ctx.context.secret,
                            data: JSON.stringify(payload)
                        });
                        const locationWithCookies = `${location}&cookies=${encodeURIComponent(encryptedCookies)}`;
                        ctx.setHeader("location", locationWithCookies);
                    })
                },
                {
                    matcher (context) {
                        return !!(context.path?.startsWith("/callback") || context.path?.startsWith("/oauth2/callback"));
                    },
                    handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
                        const contextWithSnapshot = ctx.context;
                        const snapshot = contextWithSnapshot._oauthProxySnapshot;
                        if (snapshot) {
                            ctx.context.oauthConfig.storeStateStrategy = snapshot.storeStateStrategy;
                            ctx.context.oauthConfig.skipStateCookieCheck = snapshot.skipStateCookieCheck;
                            ctx.context.internalAdapter = snapshot.internalAdapter;
                            contextWithSnapshot._oauthProxySnapshot = void 0;
                        }
                    })
                }
            ]
        }
    };
};
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/one-tap/index.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "oneTap": (()=>oneTap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/db/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$boolean$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/boolean.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/zod/v4/classic/schemas.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/api/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwks$2f$remote$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/jose/dist/webapi/jwks/remote.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/jose/dist/webapi/jwt/verify.js [middleware-edge] (ecmascript)");
;
;
;
;
;
;
;
//#region src/plugins/one-tap/index.ts
const oneTapCallbackBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    idToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "Google ID token, which the client obtains from the One Tap API"
    })
});
const oneTap = (options)=>({
        id: "one-tap",
        endpoints: {
            oneTapCallback: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/one-tap/callback", {
                method: "POST",
                body: oneTapCallbackBodySchema,
                metadata: {
                    openapi: {
                        summary: "One tap callback",
                        description: "Use this endpoint to authenticate with Google One Tap",
                        responses: {
                            200: {
                                description: "Successful response",
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
                            },
                            400: {
                                description: "Invalid token"
                            }
                        }
                    }
                }
            }, async (ctx)=>{
                const { idToken } = ctx.body;
                let payload;
                try {
                    const { payload: verifiedPayload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["jwtVerify"])(idToken, (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwks$2f$remote$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createRemoteJWKSet"])(new URL("https://www.googleapis.com/oauth2/v3/certs")), {
                        issuer: [
                            "https://accounts.google.com",
                            "accounts.google.com"
                        ],
                        audience: options?.clientId || ctx.context.options.socialProviders?.google?.clientId
                    });
                    payload = verifiedPayload;
                } catch  {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        message: "invalid id token"
                    });
                }
                const { email, email_verified, name, picture, sub } = payload;
                if (!email) return ctx.json({
                    error: "Email not available in token"
                });
                const user = await ctx.context.internalAdapter.findUserByEmail(email);
                if (!user) {
                    if (options?.disableSignup) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_GATEWAY", {
                        message: "User not found"
                    });
                    const newUser = await ctx.context.internalAdapter.createOAuthUser({
                        email,
                        emailVerified: typeof email_verified === "boolean" ? email_verified : (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$boolean$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["toBoolean"])(email_verified),
                        name,
                        image: picture
                    }, {
                        providerId: "google",
                        accountId: sub
                    });
                    if (!newUser) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: "Could not create user"
                    });
                    const session$1 = await ctx.context.internalAdapter.createSession(newUser.user.id);
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setSessionCookie"])(ctx, {
                        user: newUser.user,
                        session: session$1
                    });
                    return ctx.json({
                        token: session$1.token,
                        user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, newUser.user)
                    });
                }
                if (!await ctx.context.internalAdapter.findAccount(sub)) {
                    const accountLinking = ctx.context.options.account?.accountLinking;
                    if (accountLinking?.enabled !== false && (accountLinking?.trustedProviders?.includes("google") || email_verified)) await ctx.context.internalAdapter.linkAccount({
                        userId: user.user.id,
                        providerId: "google",
                        accountId: sub,
                        scope: "openid,profile,email",
                        idToken
                    });
                    else throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                        message: "Google sub doesn't match"
                    });
                }
                const session = await ctx.context.internalAdapter.createSession(user.user.id);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setSessionCookie"])(ctx, {
                    user: user.user,
                    session
                });
                return ctx.json({
                    token: session.token,
                    user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, user.user)
                });
            })
        },
        options
    });
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/one-time-token/utils.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "defaultKeyHasher": (()=>defaultKeyHasher)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/hash.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/utils/dist/base64.mjs [middleware-edge] (ecmascript)");
;
;
//#region src/plugins/one-time-token/utils.ts
const defaultKeyHasher = async (token)=>{
    const hash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createHash"])("SHA-256").digest(new TextEncoder().encode(token));
    return __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["base64Url"].encode(new Uint8Array(hash), {
        padding: false
    });
};
;
 //# sourceMappingURL=utils.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/one-time-token/index.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "oneTimeToken": (()=>oneTimeToken)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/random.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/routes/session.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$one$2d$time$2d$token$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/one-time-token/utils.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/zod/v4/classic/schemas.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/api/index.mjs [middleware-edge] (ecmascript)");
;
;
;
;
;
;
;
;
//#region src/plugins/one-time-token/index.ts
const verifyOneTimeTokenBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The token to verify. Eg: \"some-token\""
    })
});
const oneTimeToken = (options)=>{
    const opts = {
        storeToken: "plain",
        ...options
    };
    async function storeToken(ctx, token) {
        if (opts.storeToken === "hashed") return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$one$2d$time$2d$token$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defaultKeyHasher"])(token);
        if (typeof opts.storeToken === "object" && "type" in opts.storeToken && opts.storeToken.type === "custom-hasher") return await opts.storeToken.hash(token);
        return token;
    }
    async function generateToken(c, session) {
        const token = opts?.generateToken ? await opts.generateToken(session, c) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateRandomString"])(32);
        const expiresAt = new Date(Date.now() + (opts?.expiresIn ?? 3) * 60 * 1e3);
        const storedToken = await storeToken(c, token);
        await c.context.internalAdapter.createVerificationValue({
            value: session.session.token,
            identifier: `one-time-token:${storedToken}`,
            expiresAt
        });
        return token;
    }
    return {
        id: "one-time-token",
        endpoints: {
            generateOneTimeToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/one-time-token/generate", {
                method: "GET",
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["sessionMiddleware"]
                ]
            }, async (c)=>{
                if (opts?.disableClientRequest && c.request) throw c.error("BAD_REQUEST", {
                    message: "Client requests are disabled"
                });
                const session = c.context.session;
                const token = await generateToken(c, session);
                return c.json({
                    token
                });
            }),
            verifyOneTimeToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/one-time-token/verify", {
                method: "POST",
                body: verifyOneTimeTokenBodySchema
            }, async (c)=>{
                const { token } = c.body;
                const storedToken = await storeToken(c, token);
                const verificationValue = await c.context.internalAdapter.findVerificationValue(`one-time-token:${storedToken}`);
                if (!verificationValue) throw c.error("BAD_REQUEST", {
                    message: "Invalid token"
                });
                await c.context.internalAdapter.deleteVerificationValue(verificationValue.id);
                if (verificationValue.expiresAt < /* @__PURE__ */ new Date()) throw c.error("BAD_REQUEST", {
                    message: "Token expired"
                });
                const session = await c.context.internalAdapter.findSession(verificationValue.value);
                if (!session) throw c.error("BAD_REQUEST", {
                    message: "Session not found"
                });
                if (!opts?.disableSetSessionCookie) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setSessionCookie"])(c, session);
                if (session.session.expiresAt < /* @__PURE__ */ new Date()) throw c.error("BAD_REQUEST", {
                    message: "Session expired"
                });
                return c.json(session);
            })
        },
        hooks: {
            after: [
                {
                    matcher: ()=>true,
                    handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
                        if (ctx.context.newSession) {
                            if (!opts?.setOttHeaderOnNewSession) return;
                            const exposedHeaders = ctx.context.responseHeaders?.get("access-control-expose-headers") || "";
                            const headersSet = new Set(exposedHeaders.split(",").map((header)=>header.trim()).filter(Boolean));
                            headersSet.add("set-ott");
                            const token = await generateToken(ctx, ctx.context.newSession);
                            ctx.setHeader("set-ott", token);
                            ctx.setHeader("Access-Control-Expose-Headers", Array.from(headersSet).join(", "));
                        }
                    })
                }
            ]
        },
        options
    };
};
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/open-api/generator.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generator": (()=>generator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/db/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/db/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/zod/v4/classic/schemas.js [middleware-edge] (ecmascript)");
;
;
;
//#region src/plugins/open-api/generator.ts
const allowedType = new Set([
    "string",
    "number",
    "boolean",
    "array",
    "object"
]);
function getTypeFromZodType(zodType) {
    if (zodType instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ZodDefault"]) return getTypeFromZodType(zodType.unwrap());
    const type = zodType.type;
    return allowedType.has(type) ? type : "string";
}
function getFieldSchema(field) {
    const schema = {
        type: field.type === "date" ? "string" : field.type,
        ...field.type === "date" && {
            format: "date-time"
        }
    };
    if (field.defaultValue !== void 0) schema.default = typeof field.defaultValue === "function" ? "Generated at runtime" : field.defaultValue;
    if (field.input === false) schema.readOnly = true;
    return schema;
}
function getParameters(options) {
    const parameters = [];
    if (options.metadata?.openapi?.parameters) {
        parameters.push(...options.metadata.openapi.parameters);
        return parameters;
    }
    if (options.query instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ZodObject"]) Object.entries(options.query.shape).forEach(([key, value])=>{
        if (value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ZodType"]) parameters.push({
            name: key,
            in: "query",
            schema: {
                ...processZodType(value),
                ..."minLength" in value && value.minLength ? {
                    minLength: value.minLength
                } : {}
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
            if (value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ZodType"]) {
                properties[key] = processZodType(value);
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
function processZodType(zodType) {
    if (zodType instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ZodOptional"]) {
        const innerSchema = processZodType(zodType.unwrap());
        if (innerSchema.type) {
            const type = Array.isArray(innerSchema.type) ? innerSchema.type : [
                innerSchema.type
            ];
            return {
                ...innerSchema,
                type: Array.from(new Set([
                    ...type,
                    "null"
                ]))
            };
        }
        return {
            anyOf: [
                innerSchema,
                {
                    type: "null"
                }
            ]
        };
    }
    if (zodType instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ZodDefault"]) {
        const innerSchema = processZodType(zodType.unwrap());
        const defaultValueDef = zodType._def.defaultValue;
        const defaultValue = typeof defaultValueDef === "function" ? defaultValueDef() : defaultValueDef;
        return {
            ...innerSchema,
            default: defaultValue
        };
    }
    if (zodType instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ZodObject"]) {
        const shape = zodType.shape;
        if (shape) {
            const properties = {};
            const required = [];
            Object.entries(shape).forEach(([key, value])=>{
                if (value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ZodType"]) {
                    properties[key] = processZodType(value);
                    if (!(value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ZodOptional"])) required.push(key);
                }
            });
            return {
                type: "object",
                properties,
                ...required.length > 0 ? {
                    required
                } : {},
                description: zodType.description
            };
        }
    }
    return {
        type: getTypeFromZodType(zodType),
        description: zodType.description
    };
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
function toOpenApiPath(path) {
    return path.split("/").map((part)=>part.startsWith(":") ? `{${part.slice(1)}}` : part).join("/");
}
async function generator(ctx, options) {
    const baseEndpoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEndpoints"])(ctx, {
        ...options,
        plugins: []
    });
    const tables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db_exports"].getAuthTables)({
        ...options,
        session: {
            ...options.session,
            storeSessionInDatabase: true
        }
    });
    const components = {
        schemas: {
            ...Object.entries(tables).reduce((acc, [key, value])=>{
                const modelName = key.charAt(0).toUpperCase() + key.slice(1);
                const fields = value.fields;
                const required = [];
                const properties = {
                    id: {
                        type: "string"
                    }
                };
                Object.entries(fields).forEach(([fieldKey, fieldValue])=>{
                    if (!fieldValue) return;
                    properties[fieldKey] = getFieldSchema(fieldValue);
                    if (fieldValue.required && fieldValue.input !== false) required.push(fieldKey);
                });
                Object.entries(properties).forEach(([key$1, prop])=>{
                    const field = value.fields[key$1];
                    if (field && field.type === "date" && prop.type === "string") prop.format = "date-time";
                });
                acc[modelName] = {
                    type: "object",
                    properties,
                    required
                };
                return acc;
            }, {})
        }
    };
    const paths = {};
    Object.entries(baseEndpoints.api).forEach(([_, value])=>{
        if (!value.path || ctx.options.disabledPaths?.includes(value.path)) return;
        const options$1 = value.options;
        if (options$1.metadata?.SERVER_ONLY) return;
        const path = toOpenApiPath(value.path);
        if (options$1.method === "GET" || options$1.method === "DELETE") paths[path] = {
            ...paths[path],
            [options$1.method.toLowerCase()]: {
                tags: [
                    "Default",
                    ...options$1.metadata?.openapi?.tags || []
                ],
                description: options$1.metadata?.openapi?.description,
                operationId: options$1.metadata?.openapi?.operationId,
                security: [
                    {
                        bearerAuth: []
                    }
                ],
                parameters: getParameters(options$1),
                responses: getResponse(options$1.metadata?.openapi?.responses)
            }
        };
        if (options$1.method === "POST" || options$1.method === "PATCH" || options$1.method === "PUT") {
            const body = getRequestBody(options$1);
            paths[path] = {
                ...paths[path],
                [options$1.method.toLowerCase()]: {
                    tags: [
                        "Default",
                        ...options$1.metadata?.openapi?.tags || []
                    ],
                    description: options$1.metadata?.openapi?.description,
                    operationId: options$1.metadata?.openapi?.operationId,
                    security: [
                        {
                            bearerAuth: []
                        }
                    ],
                    parameters: getParameters(options$1),
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
                    responses: getResponse(options$1.metadata?.openapi?.responses)
                }
            };
        }
    });
    for (const plugin of options.plugins || []){
        if (plugin.id === "open-api") continue;
        const pluginEndpoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEndpoints"])(ctx, {
            ...options,
            plugins: [
                plugin
            ]
        });
        const api = Object.keys(pluginEndpoints.api).map((key)=>{
            if (baseEndpoints.api[key] === void 0) return pluginEndpoints.api[key];
            return null;
        }).filter((x)=>x !== null);
        Object.entries(api).forEach(([key, value])=>{
            if (!value.path || ctx.options.disabledPaths?.includes(value.path)) return;
            const options$1 = value.options;
            if (options$1.metadata?.SERVER_ONLY) return;
            const path = toOpenApiPath(value.path);
            if (options$1.method === "GET" || options$1.method === "DELETE") paths[path] = {
                ...paths[path],
                [options$1.method.toLowerCase()]: {
                    tags: options$1.metadata?.openapi?.tags || [
                        plugin.id.charAt(0).toUpperCase() + plugin.id.slice(1)
                    ],
                    description: options$1.metadata?.openapi?.description,
                    operationId: options$1.metadata?.openapi?.operationId,
                    security: [
                        {
                            bearerAuth: []
                        }
                    ],
                    parameters: getParameters(options$1),
                    responses: getResponse(options$1.metadata?.openapi?.responses)
                }
            };
            if (options$1.method === "POST" || options$1.method === "PATCH" || options$1.method === "PUT") paths[path] = {
                ...paths[path],
                [options$1.method.toLowerCase()]: {
                    tags: options$1.metadata?.openapi?.tags || [
                        plugin.id.charAt(0).toUpperCase() + plugin.id.slice(1)
                    ],
                    description: options$1.metadata?.openapi?.description,
                    operationId: options$1.metadata?.openapi?.operationId,
                    security: [
                        {
                            bearerAuth: []
                        }
                    ],
                    parameters: getParameters(options$1),
                    requestBody: getRequestBody(options$1),
                    responses: getResponse(options$1.metadata?.openapi?.responses)
                }
            };
        });
    }
    return {
        openapi: "3.1.1",
        info: {
            title: "Better Auth",
            description: "API Reference for your Better Auth Instance",
            version: "1.1.0"
        },
        components: {
            ...components,
            securitySchemes: {
                apiKeyCookie: {
                    type: "apiKey",
                    in: "cookie",
                    name: "apiKeyCookie",
                    description: "API Key authentication via cookie"
                },
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    description: "Bearer token authentication"
                }
            }
        },
        security: [
            {
                apiKeyCookie: [],
                bearerAuth: []
            }
        ],
        servers: [
            {
                url: ctx.baseURL
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
;
 //# sourceMappingURL=generator.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/open-api/logo.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//#region src/plugins/open-api/logo.ts
__turbopack_context__.s({
    "logo": (()=>logo)
});
const logo = `<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="75" height="75" fill="url(#pattern0_21_12)"/>
<defs>
<pattern id="pattern0_21_12" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_21_12" transform="scale(0.00094697)"/>
</pattern>
<image id="image0_21_12" width="1056" height="1056" xlink:href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBARXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAEIKADAAQAAAABAAAEIAAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/+ICKElDQ19QUk9GSUxFAAEBAAACGGFwcGwEAAAAbW50clJHQiBYWVogB+YAAQABAAAAAAAAYWNzcEFQUEwAAAAAQVBQTAAAAAAAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1hcHBs7P2jjjiFR8NttL1PetoYLwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKZGVzYwAAAPwAAAAwY3BydAAAASwAAABQd3RwdAAAAXwAAAAUclhZWgAAAZAAAAAUZ1hZWgAAAaQAAAAUYlhZWgAAAbgAAAAUclRSQwAAAcwAAAAgY2hhZAAAAewAAAAsYlRSQwAAAcwAAAAgZ1RSQwAAAcwAAAAgbWx1YwAAAAAAAAABAAAADGVuVVMAAAAUAAAAHABEAGkAcwBwAGwAYQB5ACAAUAAzbWx1YwAAAAAAAAABAAAADGVuVVMAAAA0AAAAHABDAG8AcAB5AHIAaQBnAGgAdAAgAEEAcABwAGwAZQAgAEkAbgBjAC4ALAAgADIAMAAyADJYWVogAAAAAAAA9tUAAQAAAADTLFhZWiAAAAAAAACD3wAAPb////+7WFlaIAAAAAAAAEq/AACxNwAACrlYWVogAAAAAAAAKDgAABELAADIuXBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbc2YzMgAAAAAAAQxCAAAF3v//8yYAAAeTAAD9kP//+6L///2jAAAD3AAAwG7/wAARCAQgBCADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9sAQwACAgICAgIDAgIDBAMDAwQFBAQEBAUHBQUFBQUHCAcHBwcHBwgICAgICAgICgoKCgoKCwsLCwsNDQ0NDQ0NDQ0N/9sAQwECAgIDAwMGAwMGDQkHCQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0N/90ABABC/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Q/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0f38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9L9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//T/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1P38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9X9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//W/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1/38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9D9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//R/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0v38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9P9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//U/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1f38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9b9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//X/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0P38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9H9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//S/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0/38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9T9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//V/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1v38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK/Ln/gq38a/in8Dvgp4T8R/CfxFdeG9SvvFMdlcXFoELyW5srqQxnzEcY3op4Gciv1Gr8Z/+C2X/JvXgj/sc4v/AE33lAH4z/8ADwv9tD/oq2tf9823/wAZo/4eF/tof9FW1r/vm2/+M18Z0UAfZn/Dwv8AbQ/6KtrX/fNt/wDGaP8Ah4X+2h/0VbWv++bb/wCM18Z0UAfZn/Dwv9tD/oq2tf8AfNt/8Zo/4eF/tof9FW1r/vm2/wDjNfGdFAH2Z/w8L/bQ/wCira1/3zbf/GaP+Hhf7aH/AEVbWv8Avm2/+M18Z0UAfZn/AA8L/bQ/6KtrX/fNt/8AGaP+Hhf7aH/RVta/75tv/jNfGdFAH2Z/w8L/AG0P+ira1/3zbf8Axmj/AIeF/tof9FW1r/vm2/8AjNfGdFAH63/sVftq/tTfEb9qb4deCfG3xF1TVtD1bVGgvbKdYBHPGIJW2ttiVsblB4I6V/UbX8Z//BPT/k9D4U/9hpv/AEmmr+zCgAooooAKKKKACiiigAooooAKKKKACiiigD+M/wD4eF/tof8ARVta/wC+bb/4zR/w8L/bQ/6KtrX/AHzbf/Ga+M6KAPsz/h4X+2h/0VbWv++bb/4zR/w8L/bQ/wCira1/3zbf/Ga+M6KAPsz/AIeF/tof9FW1r/vm2/8AjNH/AA8L/bQ/6KtrX/fNt/8AGa+M6KAPsz/h4X+2h/0VbWv++bb/AOM0f8PC/wBtD/oq2tf9823/AMZr4zooA+zP+Hhf7aH/AEVbWv8Avm2/+M0f8PC/20P+ira1/wB823/xmvjOigD7M/4eF/tof9FW1r/vm2/+M0f8PC/20P8Aoq2tf9823/xmvjOigD7M/wCHhf7aH/RVta/75tv/AIzR/wAPC/20P+ira1/3zbf/ABmvjOigD7M/4eF/tof9FW1r/vm2/wDjNH/Dwv8AbQ/6KtrX/fNt/wDGa+M6KAPsz/h4X+2h/wBFW1r/AL5tv/jNH/Dwv9tD/oq2tf8AfNt/8Zr4zooA+zP+Hhf7aH/RVta/75tv/jNH/Dwv9tD/AKKtrX/fNt/8Zr4zooA+zP8Ah4X+2h/0VbWv++bb/wCM0f8ADwv9tD/oq2tf9823/wAZr4zooA+zP+Hhf7aH/RVta/75tv8A4zR/w8L/AG0P+ira1/3zbf8AxmvjOigD7M/4eF/tof8ARVta/wC+bb/4zR/w8L/bQ/6KtrX/AHzbf/Ga+M6KAP6tv+CUnxr+Kfxx+CnizxH8WPEV14k1Kx8UyWVvcXYQPHbiytZBGPLRBje7HkZya/Uavxn/AOCJv/JvXjf/ALHOX/032dfsxQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf//X/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr8Z/+C2X/JvXgj/sc4v/AE33lfsxX4z/APBbL/k3rwR/2OcX/pvvKAP5m6KKKACiiigAooooAKKKKACiiigAooooA+zP+Cen/J6Hwp/7DTf+k01f2YV/Gf8A8E9P+T0PhT/2Gm/9Jpq/swoAKKKKACiiigAooooAKKKKACiiigAooooA/gDooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/pk/4Im/8m9eN/8Asc5f/TfZ1+zFfjP/AMETf+TevG//AGOcv/pvs6/ZigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9D9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvxn/4LZf8m9eCP+xzi/8ATfeV+zFfjP8A8Fsv+TevBH/Y5xf+m+8oA/mbooooAKKKKACiiigAooooAKKKKACiiigD7M/4J6f8nofCn/sNN/6TTV/ZhX8Z/wDwT0/5PQ+FP/Yab/0mmr+zCgAooooAKKKKACiiigAooooAKKKKACiiigD+AOiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD+mT/gib/yb143/wCxzl/9N9nX7MV+M/8AwRN/5N68b/8AY5y/+m+zr9mKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/0f38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK/Gf/gtl/yb14I/7HOL/wBN95X7MV+M/wDwWy/5N68Ef9jnF/6b7ygD+ZuiiigAooooAKKKKACiiigAooooAKKKKAPsz/gnp/yeh8Kf+w03/pNNX9mFfxn/APBPT/k9D4U/9hpv/Saav7MKACiiigAooooAKKKKACiiigAooooAKKKKAP4A6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP6ZP+CJv/JvXjf/ALHOX/032dfsxX4z/wDBE3/k3rxv/wBjnL/6b7Ov2YoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/S/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr8Z/+C2X/JvXgj/sc4v/AE33lfsxX4z/APBbL/k3rwR/2OcX/pvvKAP5m6KKKACiiigAooooAKKKKACiiigAooooA+zP+Cen/J6Hwp/7DTf+k01f2YV/Gf8A8E9P+T0PhT/2Gm/9Jpq/swoAKKKKACiiigAooooAKKKKACiiigAooooA/gDooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/pk/4Im/8m9eN/8Asc5f/TfZ1+zFfjP/AMETf+TevG//AGOcv/pvs6/ZigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9P9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvxn/4LZf8m9eCP+xzi/8ATfeV+zFfjP8A8Fsv+TevBH/Y5xf+m+8oA/mbooooAKKKKACiiigAooooAKKKKACiiigD7M/4J6f8nofCn/sNN/6TTV/ZhX8Z/wDwT0/5PQ+FP/Yab/0mmr+zCgAooooAKKKKACiiigAooooAKKKKACiiigD+AOiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD+mT/gib/yb143/wCxzl/9N9nX7MV+M/8AwRN/5N68b/8AY5y/+m+zr9mKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/1P38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK/Gf/gtl/yb14I/7HOL/wBN95X7MV+M/wDwWy/5N68Ef9jnF/6b7ygD+ZuiiigAooooAKKKKACiiigAooooAKKKKAPsz/gnp/yeh8Kf+w03/pNNX9mFfwq/BT4r638Dvin4d+LHhy0tb7UvDd0bu3t70ObeRzG0eJBGyPjDnowOa/Ub/h9l+0L/ANCR4M/79ah/8m0Af0yUV/M3/wAPsv2hf+hI8Gf9+tQ/+TaP+H2X7Qv/AEJHgz/v1qH/AMm0Af0yUV/M3/w+y/aF/wChI8Gf9+tQ/wDk2j/h9l+0L/0JHgz/AL9ah/8AJtAH9MlFfzN/8Psv2hf+hI8Gf9+tQ/8Ak2j/AIfZftC/9CR4M/79ah/8m0Af0yUV/M3/AMPsv2hf+hI8Gf8AfrUP/k2j/h9l+0L/ANCR4M/79ah/8m0Af0yUV/M3/wAPsv2hf+hI8Gf9+tQ/+TaP+H2X7Qv/AEJHgz/v1qH/AMm0Af0yUV/M3/w+y/aF/wChI8Gf9+tQ/wDk2j/h9l+0L/0JHgz/AL9ah/8AJtAH4z0V/TJ/w5N/Z6/6Hfxn/wB/dP8A/kKj/hyb+z1/0O/jP/v7p/8A8hUAfzN0V/TJ/wAOTf2ev+h38Z/9/dP/APkKj/hyb+z1/wBDv4z/AO/un/8AyFQB/M3RX9Mn/Dk39nr/AKHfxn/390//AOQqP+HJv7PX/Q7+M/8Av7p//wAhUAfzN0V/TJ/w5N/Z6/6Hfxn/AN/dP/8AkKj/AIcm/s9f9Dv4z/7+6f8A/IVAH8zdFf0yf8OTf2ev+h38Z/8Af3T/AP5Co/4cm/s9f9Dv4z/7+6f/APIVAH8zdFf0yf8ADk39nr/od/Gf/f3T/wD5Co/4cm/s9f8AQ7+M/wDv7p//AMhUAfzN0V/TJ/w5N/Z6/wCh38Z/9/dP/wDkKvwV/ag+FGifA74++M/hP4cu7q+03w3fi0t7i9KG4kQxRyZkMaomcueigYoA8FooooAKKKKACiiigAooooAKKKKACiiigD+mT/gib/yb143/AOxzl/8ATfZ1+zFfjP8A8ETf+TevG/8A2Ocv/pvs6/ZigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9X9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvxn/4LZf8m9eCP+xzi/8ATfeV+zFfjP8A8Fsv+TevBH/Y5xf+m+8oA/mbooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/v8ooooAKKKKACiiigAooooAKKKKACiiigAr+M//goX/wAnofFb/sNL/wCk0Nf2YV/Gf/wUL/5PQ+K3/YaX/wBJoaAPjOiiigAooooAKKKKACiiigAooooAKKKKAP6ZP+CJv/JvXjf/ALHOX/032dfsxX4z/wDBE3/k3rxv/wBjnL/6b7Ov2YoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/W/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr8Z/+C2X/JvXgj/sc4v/AE33lfsxX4z/APBbL/k3rwR/2OcX/pvvKAP5m6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP7/KKKKACiiigAooooAKKKKACiiigAooooAK/jP/4KF/8AJ6HxW/7DS/8ApNDX9mFfxn/8FC/+T0Pit/2Gl/8ASaGgD4zooooAKKKKACiiigAooooAKKKKACiiigD+mT/gib/yb143/wCxzl/9N9nX7MV+M/8AwRN/5N68b/8AY5y/+m+zr9mKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/1/38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK/Gf/gtl/yb14I/7HOL/wBN95X7MV+M/wDwWy/5N68Ef9jnF/6b7ygD+ZuiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD+/yiiigAooooAKKKKACiiigAooooAKKKKACv4z/+Chf/ACeh8Vv+w0v/AKTQ1/ZhX8Z//BQv/k9D4rf9hpf/AEmhoA+M6KKKACiiigAooooAKKKKACiiigAooooA/pk/4Im/8m9eN/8Asc5f/TfZ1+zFfjP/AMETf+TevG//AGOcv/pvs6/ZigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9D9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvxn/4LZf8m9eCP+xzi/8ATfeV+zFfjP8A8Fsv+TevBH/Y5xf+m+8oA/mbooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/v8ooooAKKKKACiiigAooooAKKKKACiiigAr+M//goX/wAnofFb/sNL/wCk0Nf2YV/Gf/wUL/5PQ+K3/YaX/wBJoaAPjOiiigAooooAKKKKACiiigAooooAKKKKAP6ZP+CJv/JvXjf/ALHOX/032dfsxX4z/wDBE3/k3rxv/wBjnL/6b7Ov2YoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/R/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr8Z/+C2X/JvXgj/sc4v/AE33lfsxX4z/APBbL/k3rwR/2OcX/pvvKAP5m6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP7/KKKKACiiigAooooAKKKKACiiigAooooAK/jP/4KF/8AJ6HxW/7DS/8ApNDX9mFfxn/8FC/+T0Pit/2Gl/8ASaGgD4zooooAKKKKACiiigAooooAKKKKACiiigD+mT/gib/yb143/wCxzl/9N9nX7MV+M/8AwRN/5N68b/8AY5y/+m+zr9mKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/0v38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK/Gf/gtl/yb14I/7HOL/wBN95X7MV+M/wDwWy/5N68Ef9jnF/6b7ygD+ZuiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD+/yiiigAooooAKKKKACiiigAooooAKKKKACv4z/+Chf/ACeh8Vv+w0v/AKTQ1/ZhX8Z//BQv/k9D4rf9hpf/AEmhoA+M6KKKACiiigAooooAKKKKACiiigAooooA/pk/4Im/8m9eN/8Asc5f/TfZ1+zFfjP/AMETf+TevG//AGOcv/pvs6/ZigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9P9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvxn/4LZf8m9eCP+xzi/8ATfeV+zFfjP8A8Fsv+TevBH/Y5xf+m+8oA/mbooooAKKKKACiiigAooooAKKKKACiiigD1L4KfCjW/jj8U/Dvwn8OXdrY6l4kujaW9xelxbxuI2kzIY1d8YQ9FJzX6jf8OTf2hf8Aod/Bn/f3UP8A5Cr4z/4J6f8AJ6Hwp/7DTf8ApNNX9mFAH8zf/Dk39oX/AKHfwZ/391D/AOQqP+HJv7Qv/Q7+DP8Av7qH/wAhV/TJRQB/M3/w5N/aF/6HfwZ/391D/wCQqP8Ahyb+0L/0O/gz/v7qH/yFX9MlFAH8zf8Aw5N/aF/6HfwZ/wB/dQ/+QqP+HJv7Qv8A0O/gz/v7qH/yFX9MlFAH8zf/AA5N/aF/6HfwZ/391D/5Co/4cm/tC/8AQ7+DP+/uof8AyFX9MlFAH8zf/Dk39oX/AKHfwZ/391D/AOQqP+HJv7Qv/Q7+DP8Av7qH/wAhV/TJRQB/M3/w5N/aF/6HfwZ/391D/wCQqP8Ahyb+0L/0O/gz/v7qH/yFX9MlFAH4z/8AD7L9nr/oSPGf/frT/wD5No/4fZfs9f8AQkeM/wDv1p//AMm1/M3RQB/TJ/w+y/Z6/wChI8Z/9+tP/wDk2j/h9l+z1/0JHjP/AL9af/8AJtfzN0UAf0yf8Psv2ev+hI8Z/wDfrT//AJNo/wCH2X7PX/QkeM/+/Wn/APybX8zdFAH9Mn/D7L9nr/oSPGf/AH60/wD+TaP+H2X7PX/QkeM/+/Wn/wDybX8zdFAH9Mn/AA+y/Z6/6Ejxn/360/8A+TaP+H2X7PX/AEJHjP8A79af/wDJtfzN0UAf0yf8Psv2ev8AoSPGf/frT/8A5No/4fZfs9f9CR4z/wC/Wn//ACbX8zdFAH9Mn/D7L9nr/oSPGf8A360//wCTa/BX9qD4r6J8cfj74z+LHhy0urHTfEl+Lu3t70ILiNBFHHiQRs6Zyh6MRivBaKACiiigAooooAKKKKACiiigAooooAKKKKAP6ZP+CJv/ACb143/7HOX/ANN9nX7MV+M//BE3/k3rxv8A9jnL/wCm+zr9mKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//U/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr8Z/+C2X/JvXgj/sc4v/AE33lfsxX4z/APBbL/k3rwR/2OcX/pvvKAP5m6KKKACiiigAooooAKKKKACiiigAooooA+zP+Cen/J6Hwp/7DTf+k01f2YV/Gf8A8E9P+T0PhT/2Gm/9Jpq/swoAKKKKACiiigAooooAKKKKACiiigAooooA/gDooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/pk/4Im/8m9eN/8Asc5f/TfZ1+zFfjP/AMETf+TevG//AGOcv/pvs6/ZigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9X9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvxn/4LZf8m9eCP+xzi/8ATfeV+zFfjP8A8Fsv+TevBH/Y5xf+m+8oA/mbooooAKKKKACiiigAooooAKKKKACiiigD7M/4J6f8nofCn/sNN/6TTV/ZhX8Z/wDwT0/5PQ+FP/Yab/0mmr+zCgAooooAKKKKACiiigAooooAKKKKACiiigD+AOiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD+mT/gib/yb143/wCxzl/9N9nX7MV+M/8AwRN/5N68b/8AY5y/+m+zr9mKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/1v38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK/Gf/gtl/yb14I/7HOL/wBN95X7MV+M/wDwWy/5N68Ef9jnF/6b7ygD+ZuiiigAooooAKKKKACiiigAooooAKKKKAPsz/gnp/yeh8Kf+w03/pNNX9mFfxn/APBPT/k9D4U/9hpv/Saav7MKACiiigAooooAKKKKACiiigAooooAKKKKAP4A6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP6ZP+CJv/JvXjf/ALHOX/032dfsxX4z/wDBE3/k3rxv/wBjnL/6b7Ov2YoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/X/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr8Z/+C2X/JvXgj/sc4v/AE33lfsxX4z/APBbL/k3rwR/2OcX/pvvKAP5m6KKKACiiigAooooAKKKKACiiigAooooA+zP+Cen/J6Hwp/7DTf+k01f2YV/Gf8A8E9P+T0PhT/2Gm/9Jpq/swoAKKKKACiiigAooooAKKKKACiiigAooooA/gDooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/pk/4Im/8m9eN/8Asc5f/TfZ1+zFfjP/AMETf+TevG//AGOcv/pvs6/ZigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9D9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvxn/4LZf8m9eCP+xzi/8ATfeV+zFfjP8A8Fsv+TevBH/Y5xf+m+8oA/mbooooAKKKKACiiigAooooAKKKKACiiigD7M/4J6f8nofCn/sNN/6TTV/ZhX8Z/wDwT0/5PQ+FP/Yab/0mmr+zCgAooooAKKKKACiiigAooooAKKKKACiiigD+AOiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD+mT/gib/yb143/wCxzl/9N9nX7MV+M/8AwRN/5N68b/8AY5y/+m+zr9mKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/0f38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK/Gf/gtl/yb14I/7HOL/wBN95X7MV+XP/BVv4KfFP44/BTwn4c+E/h268SalY+KY724t7QoHjtxZXUZkPmOgxvdRwc5NAH8pNFfZn/DvT9tD/olOtf99W3/AMeo/wCHen7aH/RKda/76tv/AI9QB8Z0V9mf8O9P20P+iU61/wB9W3/x6j/h3p+2h/0SnWv++rb/AOPUAfGdFfZn/DvT9tD/AKJTrX/fVt/8eo/4d6ftof8ARKda/wC+rb/49QB8Z0V9mf8ADvT9tD/olOtf99W3/wAeo/4d6ftof9Ep1r/vq2/+PUAfGdFfZn/DvT9tD/olOtf99W3/AMeo/wCHen7aH/RKda/76tv/AI9QB8Z0V9mf8O9P20P+iU61/wB9W3/x6j/h3p+2h/0SnWv++rb/AOPUAH/BPT/k9D4U/wDYab/0mmr+zCv5cv2Kv2Kv2pvhz+1N8OvG3jb4dappOh6TqjT3t7O0BjgjMEq7m2ys2NzAcA9a/qNoAKKKKACiiigAooooAKKKKACiiigAooooA/gDor7M/wCHen7aH/RKda/76tv/AI9R/wAO9P20P+iU61/31bf/AB6gD4zor7M/4d6ftof9Ep1r/vq2/wDj1H/DvT9tD/olOtf99W3/AMeoA+M6K+zP+Hen7aH/AESnWv8Avq2/+PUf8O9P20P+iU61/wB9W3/x6gD4zor7M/4d6ftof9Ep1r/vq2/+PUf8O9P20P8AolOtf99W3/x6gD4zor7M/wCHen7aH/RKda/76tv/AI9R/wAO9P20P+iU61/31bf/AB6gD4zor7M/4d6ftof9Ep1r/vq2/wDj1H/DvT9tD/olOtf99W3/AMeoA+M6K+zP+Hen7aH/AESnWv8Avq2/+PUf8O9P20P+iU61/wB9W3/x6gD4zor7M/4d6ftof9Ep1r/vq2/+PUf8O9P20P8AolOtf99W3/x6gD4zor7M/wCHen7aH/RKda/76tv/AI9R/wAO9P20P+iU61/31bf/AB6gD4zor7M/4d6ftof9Ep1r/vq2/wDj1H/DvT9tD/olOtf99W3/AMeoA+M6K+zP+Hen7aH/AESnWv8Avq2/+PUf8O9P20P+iU61/wB9W3/x6gD4zor7M/4d6ftof9Ep1r/vq2/+PUf8O9P20P8AolOtf99W3/x6gD4zor7M/wCHen7aH/RKda/76tv/AI9R/wAO9P20P+iU61/31bf/AB6gD9mP+CJv/JvXjf8A7HOX/wBN9nX7MV+XP/BKT4KfFP4HfBTxZ4c+LHh268N6lfeKZL23t7soXktzZWsYkHlu4xvRhyc5FfqNQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/9L9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//T/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1P38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9X9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//W/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1/38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9D9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//R/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0v38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9P9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//U/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1f38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9b9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//X/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0P38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9H9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//S/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0/38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9T9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//V/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1v38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9f9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Q/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/2Q=="/>
</defs>
</svg>
`;
;
 //# sourceMappingURL=logo.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/open-api/index.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "openAPI": (()=>openAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$hide$2d$metadata$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/hide-metadata.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$open$2d$api$2f$generator$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/open-api/generator.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$open$2d$api$2f$logo$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/open-api/logo.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/api/index.mjs [middleware-edge] (ecmascript)");
;
;
;
;
;
;
//#region src/plugins/open-api/index.ts
const getHTML = (apiReference, theme, nonce)=>{
    const nonceAttr = nonce ? `nonce="${nonce}"` : "";
    return `<!doctype html>
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
	 <script ${nonceAttr}>
      var configuration = {
	  	favicon: "data:image/svg+xml;utf8,${encodeURIComponent(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$open$2d$api$2f$logo$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["logo"])}",
	   	theme: "${theme || "default"}",
        metaData: {
			title: "Better Auth API",
			description: "API Reference for your Better Auth Instance",
		}
      }

      document.getElementById('api-reference').dataset.configuration =
        JSON.stringify(configuration)
    <\/script>
	  <script src="https://cdn.jsdelivr.net/npm/@scalar/api-reference" ${nonceAttr}><\/script>
  </body>
</html>`;
};
const openAPI = (options)=>{
    const path = options?.path ?? "/reference";
    return {
        id: "open-api",
        endpoints: {
            generateOpenAPISchema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/open-api/generate-schema", {
                method: "GET"
            }, async (ctx)=>{
                const schema = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$open$2d$api$2f$generator$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generator"])(ctx.context, ctx.context.options);
                return ctx.json(schema);
            }),
            openAPIReference: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])(path, {
                method: "GET",
                metadata: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$hide$2d$metadata$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["HIDE_METADATA"]
            }, async (ctx)=>{
                if (options?.disableDefaultReference) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND");
                const schema = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$open$2d$api$2f$generator$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generator"])(ctx.context, ctx.context.options);
                return new Response(getHTML(schema, options?.theme, options?.nonce), {
                    headers: {
                        "Content-Type": "text/html"
                    }
                });
            })
        },
        options
    };
};
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/phone-number/error-codes.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PHONE_NUMBER_ERROR_CODES": (()=>PHONE_NUMBER_ERROR_CODES)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/error-codes.mjs [middleware-edge] (ecmascript)");
;
//#region src/plugins/phone-number/error-codes.ts
const PHONE_NUMBER_ERROR_CODES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defineErrorCodes"])({
    INVALID_PHONE_NUMBER: "Invalid phone number",
    PHONE_NUMBER_EXIST: "Phone number already exists",
    PHONE_NUMBER_NOT_EXIST: "phone number isn't registered",
    INVALID_PHONE_NUMBER_OR_PASSWORD: "Invalid phone number or password",
    UNEXPECTED_ERROR: "Unexpected error",
    OTP_NOT_FOUND: "OTP not found",
    OTP_EXPIRED: "OTP expired",
    INVALID_OTP: "Invalid OTP",
    PHONE_NUMBER_NOT_VERIFIED: "Phone number not verified",
    PHONE_NUMBER_CANNOT_BE_UPDATED: "Phone number cannot be updated",
    SEND_OTP_NOT_IMPLEMENTED: "sendOTP not implemented",
    TOO_MANY_ATTEMPTS: "Too many attempts"
});
;
 //# sourceMappingURL=error-codes.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/phone-number/routes.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "requestPasswordResetPhoneNumber": (()=>requestPasswordResetPhoneNumber),
    "resetPasswordPhoneNumber": (()=>resetPasswordPhoneNumber),
    "sendPhoneNumberOTP": (()=>sendPhoneNumberOTP),
    "signInPhoneNumber": (()=>signInPhoneNumber),
    "verifyPhoneNumber": (()=>verifyPhoneNumber)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$date$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/date.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/db/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/crypto/random.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/routes/session.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/phone-number/error-codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/error/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/error/codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/zod/v4/classic/schemas.js [middleware-edge] (ecmascript)");
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
;
//#region src/plugins/phone-number/routes.ts
const signInPhoneNumberBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    phoneNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "Phone number to sign in. Eg: \"+1234567890\""
    }),
    password: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "Password to use for sign in."
    }),
    rememberMe: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["boolean"])().meta({
        description: "Remember the session. Eg: true"
    }).optional()
});
/**
* ### Endpoint
*
* POST `/sign-in/phone-number`
*
* ### API Methods
*
* **server:**
* `auth.api.signInPhoneNumber`
*
* **client:**
* `authClient.signIn.phoneNumber`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/phone-number#api-method-sign-in-phone-number)
*/ const signInPhoneNumber = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/sign-in/phone-number", {
        method: "POST",
        body: signInPhoneNumberBodySchema,
        metadata: {
            openapi: {
                summary: "Sign in with phone number",
                description: "Use this endpoint to sign in with phone number",
                responses: {
                    200: {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        user: {
                                            $ref: "#/components/schemas/User"
                                        },
                                        session: {
                                            $ref: "#/components/schemas/Session"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    400: {
                        description: "Invalid phone number or password"
                    }
                }
            }
        }
    }, async (ctx)=>{
        const { password, phoneNumber } = ctx.body;
        if (opts.phoneNumberValidator) {
            if (!await opts.phoneNumberValidator(ctx.body.phoneNumber)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PHONE_NUMBER_ERROR_CODES"].INVALID_PHONE_NUMBER
            });
        }
        const user = await ctx.context.adapter.findOne({
            model: "user",
            where: [
                {
                    field: "phoneNumber",
                    value: phoneNumber
                }
            ]
        });
        if (!user) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PHONE_NUMBER_ERROR_CODES"].INVALID_PHONE_NUMBER_OR_PASSWORD
        });
        if (opts.requireVerification) {
            if (!user.phoneNumberVerified) {
                const otp = generateOTP(opts.otpLength);
                await ctx.context.internalAdapter.createVerificationValue({
                    value: otp,
                    identifier: phoneNumber,
                    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$date$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getDate"])(opts.expiresIn, "sec")
                });
                if (opts.sendOTP) await ctx.context.runInBackgroundOrAwait(opts.sendOTP({
                    phoneNumber,
                    code: otp
                }, ctx));
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PHONE_NUMBER_ERROR_CODES"].PHONE_NUMBER_NOT_VERIFIED
                });
            }
        }
        const credentialAccount = (await ctx.context.internalAdapter.findAccountByUserId(user.id)).find((a)=>a.providerId === "credential");
        if (!credentialAccount) {
            ctx.context.logger.error("Credential account not found", {
                phoneNumber
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PHONE_NUMBER_ERROR_CODES"].INVALID_PHONE_NUMBER_OR_PASSWORD
            });
        }
        const currentPassword = credentialAccount?.password;
        if (!currentPassword) {
            ctx.context.logger.error("Password not found", {
                phoneNumber
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PHONE_NUMBER_ERROR_CODES"].UNEXPECTED_ERROR
            });
        }
        if (!await ctx.context.password.verify({
            hash: currentPassword,
            password
        })) {
            ctx.context.logger.error("Invalid password");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PHONE_NUMBER_ERROR_CODES"].INVALID_PHONE_NUMBER_OR_PASSWORD
            });
        }
        const session = await ctx.context.internalAdapter.createSession(user.id, ctx.body.rememberMe === false);
        if (!session) {
            ctx.context.logger.error("Failed to create session");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].FAILED_TO_CREATE_SESSION
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setSessionCookie"])(ctx, {
            session,
            user
        }, ctx.body.rememberMe === false);
        return ctx.json({
            token: session.token,
            user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, user)
        });
    });
const sendPhoneNumberOTPBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    phoneNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "Phone number to send OTP. Eg: \"+1234567890\""
    })
});
/**
* ### Endpoint
*
* POST `/phone-number/send-otp`
*
* ### API Methods
*
* **server:**
* `auth.api.sendPhoneNumberOTP`
*
* **client:**
* `authClient.phoneNumber.sendOtp`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/phone-number#api-method-phone-number-send-otp)
*/ const sendPhoneNumberOTP = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/phone-number/send-otp", {
        method: "POST",
        body: sendPhoneNumberOTPBodySchema,
        metadata: {
            openapi: {
                summary: "Send OTP to phone number",
                description: "Use this endpoint to send OTP to phone number",
                responses: {
                    200: {
                        description: "Success",
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
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        if (!opts?.sendOTP) {
            ctx.context.logger.warn("sendOTP not implemented");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("NOT_IMPLEMENTED", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PHONE_NUMBER_ERROR_CODES"].SEND_OTP_NOT_IMPLEMENTED
            });
        }
        if (opts.phoneNumberValidator) {
            if (!await opts.phoneNumberValidator(ctx.body.phoneNumber)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PHONE_NUMBER_ERROR_CODES"].INVALID_PHONE_NUMBER
            });
        }
        const code = generateOTP(opts.otpLength);
        await ctx.context.internalAdapter.createVerificationValue({
            value: `${code}:0`,
            identifier: ctx.body.phoneNumber,
            expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$date$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getDate"])(opts.expiresIn, "sec")
        });
        await ctx.context.runInBackgroundOrAwait(opts.sendOTP({
            phoneNumber: ctx.body.phoneNumber,
            code
        }, ctx));
        return ctx.json({
            message: "code sent"
        });
    });
const verifyPhoneNumberBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    phoneNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "Phone number to verify. Eg: \"+1234567890\""
    }),
    code: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "OTP code. Eg: \"123456\""
    }),
    disableSession: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["boolean"])().meta({
        description: "Disable session creation after verification. Eg: false"
    }).optional(),
    updatePhoneNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["boolean"])().meta({
        description: "Check if there is a session and update the phone number. Eg: true"
    }).optional()
});
/**
* ### Endpoint
*
* POST `/phone-number/verify`
*
* ### API Methods
*
* **server:**
* `auth.api.verifyPhoneNumber`
*
* **client:**
* `authClient.phoneNumber.verify`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/phone-number#api-method-phone-number-verify)
*/ const verifyPhoneNumber = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/phone-number/verify", {
        method: "POST",
        body: verifyPhoneNumberBodySchema,
        metadata: {
            openapi: {
                summary: "Verify phone number",
                description: "Use this endpoint to verify phone number",
                responses: {
                    "200": {
                        description: "Phone number verified successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        status: {
                                            type: "boolean",
                                            description: "Indicates if the verification was successful",
                                            enum: [
                                                true
                                            ]
                                        },
                                        token: {
                                            type: "string",
                                            nullable: true,
                                            description: "Session token if session is created, null if disableSession is true or no session is created"
                                        },
                                        user: {
                                            type: "object",
                                            nullable: true,
                                            properties: {
                                                id: {
                                                    type: "string",
                                                    description: "Unique identifier of the user"
                                                },
                                                email: {
                                                    type: "string",
                                                    format: "email",
                                                    nullable: true,
                                                    description: "User's email address"
                                                },
                                                emailVerified: {
                                                    type: "boolean",
                                                    nullable: true,
                                                    description: "Whether the email is verified"
                                                },
                                                name: {
                                                    type: "string",
                                                    nullable: true,
                                                    description: "User's name"
                                                },
                                                image: {
                                                    type: "string",
                                                    format: "uri",
                                                    nullable: true,
                                                    description: "User's profile image URL"
                                                },
                                                phoneNumber: {
                                                    type: "string",
                                                    description: "User's phone number"
                                                },
                                                phoneNumberVerified: {
                                                    type: "boolean",
                                                    description: "Whether the phone number is verified"
                                                },
                                                createdAt: {
                                                    type: "string",
                                                    format: "date-time",
                                                    description: "Timestamp when the user was created"
                                                },
                                                updatedAt: {
                                                    type: "string",
                                                    format: "date-time",
                                                    description: "Timestamp when the user was last updated"
                                                }
                                            },
                                            required: [
                                                "id",
                                                "phoneNumber",
                                                "phoneNumberVerified",
                                                "createdAt",
                                                "updatedAt"
                                            ],
                                            description: "User object with phone number details, null if no user is created or found"
                                        }
                                    },
                                    required: [
                                        "status"
                                    ]
                                }
                            }
                        }
                    },
                    400: {
                        description: "Invalid OTP"
                    }
                }
            }
        }
    }, async (ctx)=>{
        if (opts?.verifyOTP) {
            if (!await opts.verifyOTP({
                phoneNumber: ctx.body.phoneNumber,
                code: ctx.body.code
            }, ctx)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PHONE_NUMBER_ERROR_CODES"].INVALID_OTP
            });
            const otp = await ctx.context.internalAdapter.findVerificationValue(ctx.body.phoneNumber);
            if (otp) await ctx.context.internalAdapter.deleteVerificationValue(otp.id);
        } else {
            const otp = await ctx.context.internalAdapter.findVerificationValue(ctx.body.phoneNumber);
            if (!otp || otp.expiresAt < /* @__PURE__ */ new Date()) {
                if (otp && otp.expiresAt < /* @__PURE__ */ new Date()) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PHONE_NUMBER_ERROR_CODES"].OTP_EXPIRED
                });
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PHONE_NUMBER_ERROR_CODES"].OTP_NOT_FOUND
                });
            }
            const [otpValue, attempts] = otp.value.split(":");
            const allowedAttempts = opts?.allowedAttempts || 3;
            if (attempts && parseInt(attempts) >= allowedAttempts) {
                await ctx.context.internalAdapter.deleteVerificationValue(otp.id);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PHONE_NUMBER_ERROR_CODES"].TOO_MANY_ATTEMPTS
                });
            }
            if (otpValue !== ctx.body.code) {
                await ctx.context.internalAdapter.updateVerificationValue(otp.id, {
                    value: `${otpValue}:${parseInt(attempts || "0") + 1}`
                });
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PHONE_NUMBER_ERROR_CODES"].INVALID_OTP
                });
            }
            await ctx.context.internalAdapter.deleteVerificationValue(otp.id);
        }
        if (ctx.body.updatePhoneNumber) {
            const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSessionFromCtx"])(ctx);
            if (!session) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].USER_NOT_FOUND
            });
            if ((await ctx.context.adapter.findMany({
                model: "user",
                where: [
                    {
                        field: "phoneNumber",
                        value: ctx.body.phoneNumber
                    }
                ]
            })).length) throw ctx.error("BAD_REQUEST", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PHONE_NUMBER_ERROR_CODES"].PHONE_NUMBER_EXIST
            });
            const user$1 = await ctx.context.internalAdapter.updateUser(session.user.id, {
                [opts.phoneNumber]: ctx.body.phoneNumber,
                [opts.phoneNumberVerified]: true
            });
            return ctx.json({
                status: true,
                token: session.session.token,
                user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, user$1)
            });
        }
        let user = await ctx.context.adapter.findOne({
            model: "user",
            where: [
                {
                    value: ctx.body.phoneNumber,
                    field: opts.phoneNumber
                }
            ]
        });
        if (!user) {
            if (opts?.signUpOnVerification) {
                user = await ctx.context.internalAdapter.createUser({
                    email: opts.signUpOnVerification.getTempEmail(ctx.body.phoneNumber),
                    name: opts.signUpOnVerification.getTempName ? opts.signUpOnVerification.getTempName(ctx.body.phoneNumber) : ctx.body.phoneNumber,
                    [opts.phoneNumber]: ctx.body.phoneNumber,
                    [opts.phoneNumberVerified]: true
                });
                if (!user) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].FAILED_TO_CREATE_USER
                });
            }
        } else user = await ctx.context.internalAdapter.updateUser(user.id, {
            [opts.phoneNumberVerified]: true
        });
        if (!user) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].FAILED_TO_UPDATE_USER
        });
        await opts?.callbackOnVerification?.({
            phoneNumber: ctx.body.phoneNumber,
            user
        }, ctx);
        if (!ctx.body.disableSession) {
            const session = await ctx.context.internalAdapter.createSession(user.id);
            if (!session) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].FAILED_TO_CREATE_SESSION
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setSessionCookie"])(ctx, {
                session,
                user
            });
            return ctx.json({
                status: true,
                token: session.token,
                user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, user)
            });
        }
        return ctx.json({
            status: true,
            token: null,
            user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, user)
        });
    });
const requestPasswordResetPhoneNumberBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    phoneNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])()
});
const requestPasswordResetPhoneNumber = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/phone-number/request-password-reset", {
        method: "POST",
        body: requestPasswordResetPhoneNumberBodySchema,
        metadata: {
            openapi: {
                description: "Request OTP for password reset via phone number",
                responses: {
                    "200": {
                        description: "OTP sent successfully for password reset",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        status: {
                                            type: "boolean",
                                            description: "Indicates if the OTP was sent successfully",
                                            enum: [
                                                true
                                            ]
                                        }
                                    },
                                    required: [
                                        "status"
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        const user = await ctx.context.adapter.findOne({
            model: "user",
            where: [
                {
                    value: ctx.body.phoneNumber,
                    field: opts.phoneNumber
                }
            ]
        });
        const code = generateOTP(opts.otpLength);
        await ctx.context.internalAdapter.createVerificationValue({
            value: `${code}:0`,
            identifier: `${ctx.body.phoneNumber}-request-password-reset`,
            expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$date$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getDate"])(opts.expiresIn, "sec")
        });
        if (!user) return ctx.json({
            status: true
        });
        if (opts.sendPasswordResetOTP) await ctx.context.runInBackgroundOrAwait(opts.sendPasswordResetOTP({
            phoneNumber: ctx.body.phoneNumber,
            code
        }, ctx));
        return ctx.json({
            status: true
        });
    });
const resetPasswordPhoneNumberBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    otp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The one time password to reset the password. Eg: \"123456\""
    }),
    phoneNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The phone number to the account which intends to reset the password for. Eg: \"+1234567890\""
    }),
    newPassword: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: `The new password. Eg: "new-and-secure-password"`
    })
});
const resetPasswordPhoneNumber = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/phone-number/reset-password", {
        method: "POST",
        body: resetPasswordPhoneNumberBodySchema,
        metadata: {
            openapi: {
                description: "Reset password using phone number OTP",
                responses: {
                    "200": {
                        description: "Password reset successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        status: {
                                            type: "boolean",
                                            description: "Indicates if the password was reset successfully",
                                            enum: [
                                                true
                                            ]
                                        }
                                    },
                                    required: [
                                        "status"
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        const verification = await ctx.context.internalAdapter.findVerificationValue(`${ctx.body.phoneNumber}-request-password-reset`);
        if (!verification) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PHONE_NUMBER_ERROR_CODES"].OTP_NOT_FOUND
        });
        if (verification.expiresAt < /* @__PURE__ */ new Date()) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PHONE_NUMBER_ERROR_CODES"].OTP_EXPIRED
        });
        const [otpValue, attempts] = verification.value.split(":");
        const allowedAttempts = opts?.allowedAttempts || 3;
        if (attempts && parseInt(attempts) >= allowedAttempts) {
            await ctx.context.internalAdapter.deleteVerificationValue(verification.id);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PHONE_NUMBER_ERROR_CODES"].TOO_MANY_ATTEMPTS
            });
        }
        if (ctx.body.otp !== otpValue) {
            await ctx.context.internalAdapter.updateVerificationValue(verification.id, {
                value: `${otpValue}:${parseInt(attempts || "0") + 1}`
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PHONE_NUMBER_ERROR_CODES"].INVALID_OTP
            });
        }
        const user = await ctx.context.adapter.findOne({
            model: "user",
            where: [
                {
                    field: "phoneNumber",
                    value: ctx.body.phoneNumber
                }
            ]
        });
        if (!user) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PHONE_NUMBER_ERROR_CODES"].UNEXPECTED_ERROR
        });
        const minLength = ctx.context.password.config.minPasswordLength;
        const maxLength = ctx.context.password.config.maxPasswordLength;
        if (ctx.body.newPassword.length < minLength) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].PASSWORD_TOO_SHORT
        });
        if (ctx.body.newPassword.length > maxLength) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].PASSWORD_TOO_LONG
        });
        const hashedPassword = await ctx.context.password.hash(ctx.body.newPassword);
        await ctx.context.internalAdapter.updatePassword(user.id, hashedPassword);
        await ctx.context.internalAdapter.deleteVerificationValue(verification.id);
        if (ctx.context.options.emailAndPassword?.revokeSessionsOnPasswordReset) await ctx.context.internalAdapter.deleteSessions(user.id);
        return ctx.json({
            status: true
        });
    });
function generateOTP(size) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateRandomString"])(size, "0-9");
}
;
 //# sourceMappingURL=routes.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/phone-number/schema.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//#region src/plugins/phone-number/schema.ts
__turbopack_context__.s({
    "schema": (()=>schema)
});
const schema = {
    user: {
        fields: {
            phoneNumber: {
                type: "string",
                required: false,
                unique: true,
                sortable: true,
                returned: true
            },
            phoneNumberVerified: {
                type: "boolean",
                required: false,
                returned: true,
                input: false
            }
        }
    }
};
;
 //# sourceMappingURL=schema.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/phone-number/index.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "phoneNumber": (()=>phoneNumber)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/db/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/phone-number/error-codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/phone-number/routes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/phone-number/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/api/index.mjs [middleware-edge] (ecmascript)");
;
;
;
;
;
;
//#region src/plugins/phone-number/index.ts
const phoneNumber = (options)=>{
    const opts = {
        expiresIn: options?.expiresIn || 300,
        otpLength: options?.otpLength || 6,
        ...options,
        phoneNumber: "phoneNumber",
        phoneNumberVerified: "phoneNumberVerified",
        code: "code",
        createdAt: "createdAt"
    };
    return {
        id: "phone-number",
        hooks: {
            before: [
                {
                    matcher: (ctx)=>ctx.path === "/update-user" && "phoneNumber" in ctx.body,
                    handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (_ctx)=>{
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                            message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PHONE_NUMBER_ERROR_CODES"].PHONE_NUMBER_CANNOT_BE_UPDATED
                        });
                    })
                }
            ]
        },
        endpoints: {
            signInPhoneNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["signInPhoneNumber"])(opts),
            sendPhoneNumberOTP: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["sendPhoneNumberOTP"])(opts),
            verifyPhoneNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["verifyPhoneNumber"])(opts),
            requestPasswordResetPhoneNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["requestPasswordResetPhoneNumber"])(opts),
            resetPasswordPhoneNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$routes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resetPasswordPhoneNumber"])(opts)
        },
        schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["mergeSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["schema"], options?.schema),
        rateLimit: [
            {
                pathMatcher (path) {
                    return path.startsWith("/phone-number");
                },
                window: 60 * 1e3,
                max: 10
            }
        ],
        options,
        $ERROR_CODES: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PHONE_NUMBER_ERROR_CODES"]
    };
};
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/siwe/schema.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//#region src/plugins/siwe/schema.ts
__turbopack_context__.s({
    "schema": (()=>schema)
});
const schema = {
    walletAddress: {
        fields: {
            userId: {
                type: "string",
                references: {
                    model: "user",
                    field: "id"
                },
                required: true,
                index: true
            },
            address: {
                type: "string",
                required: true
            },
            chainId: {
                type: "number",
                required: true
            },
            isPrimary: {
                type: "boolean",
                defaultValue: false
            },
            createdAt: {
                type: "date",
                required: true
            }
        }
    }
};
;
 //# sourceMappingURL=schema.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/siwe/index.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "siwe": (()=>siwe)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/db/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$url$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/url.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$hashing$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/hashing.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$siwe$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/siwe/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/zod/v4/classic/schemas.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/api/index.mjs [middleware-edge] (ecmascript)");
;
;
;
;
;
;
;
;
//#region src/plugins/siwe/index.ts
const getSiweNonceBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    walletAddress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().regex(/^0[xX][a-fA-F0-9]{40}$/i).length(42),
    chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["number"])().int().positive().max(2147483647).optional().default(1)
});
const siwe = (options)=>({
        id: "siwe",
        schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["mergeSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$siwe$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["schema"], options?.schema),
        endpoints: {
            getSiweNonce: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/siwe/nonce", {
                method: "POST",
                body: getSiweNonceBodySchema
            }, async (ctx)=>{
                const { walletAddress: rawWalletAddress, chainId } = ctx.body;
                const walletAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$hashing$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["toChecksumAddress"])(rawWalletAddress);
                const nonce = await options.getNonce();
                await ctx.context.internalAdapter.createVerificationValue({
                    identifier: `siwe:${walletAddress}:${chainId}`,
                    value: nonce,
                    expiresAt: new Date(Date.now() + 900 * 1e3)
                });
                return ctx.json({
                    nonce
                });
            }),
            verifySiweMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/siwe/verify", {
                method: "POST",
                body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
                    message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().min(1),
                    signature: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().min(1),
                    walletAddress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().regex(/^0[xX][a-fA-F0-9]{40}$/i).length(42),
                    chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["number"])().int().positive().max(2147483647).optional().default(1),
                    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["email"])().optional()
                }).refine((data)=>options.anonymous !== false || !!data.email, {
                    message: "Email is required when the anonymous plugin option is disabled.",
                    path: [
                        "email"
                    ]
                }),
                requireRequest: true
            }, async (ctx)=>{
                const { message, signature, walletAddress: rawWalletAddress, chainId, email } = ctx.body;
                const walletAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$hashing$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["toChecksumAddress"])(rawWalletAddress);
                const isAnon = options.anonymous ?? true;
                if (!isAnon && !email) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: "Email is required when anonymous is disabled.",
                    status: 400
                });
                try {
                    const verification = await ctx.context.internalAdapter.findVerificationValue(`siwe:${walletAddress}:${chainId}`);
                    if (!verification || /* @__PURE__ */ new Date() > verification.expiresAt) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                        message: "Unauthorized: Invalid or expired nonce",
                        status: 401,
                        code: "UNAUTHORIZED_INVALID_OR_EXPIRED_NONCE"
                    });
                    const { value: nonce } = verification;
                    if (!await options.verifyMessage({
                        message,
                        signature,
                        address: walletAddress,
                        chainId,
                        cacao: {
                            h: {
                                t: "caip122"
                            },
                            p: {
                                domain: options.domain,
                                aud: options.domain,
                                nonce,
                                iss: options.domain,
                                version: "1"
                            },
                            s: {
                                t: "eip191",
                                s: signature
                            }
                        }
                    })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                        message: "Unauthorized: Invalid SIWE signature",
                        status: 401
                    });
                    await ctx.context.internalAdapter.deleteVerificationValue(verification.id);
                    let user = null;
                    const existingWalletAddress = await ctx.context.adapter.findOne({
                        model: "walletAddress",
                        where: [
                            {
                                field: "address",
                                operator: "eq",
                                value: walletAddress
                            },
                            {
                                field: "chainId",
                                operator: "eq",
                                value: chainId
                            }
                        ]
                    });
                    if (existingWalletAddress) user = await ctx.context.adapter.findOne({
                        model: "user",
                        where: [
                            {
                                field: "id",
                                operator: "eq",
                                value: existingWalletAddress.userId
                            }
                        ]
                    });
                    else {
                        const anyWalletAddress = await ctx.context.adapter.findOne({
                            model: "walletAddress",
                            where: [
                                {
                                    field: "address",
                                    operator: "eq",
                                    value: walletAddress
                                }
                            ]
                        });
                        if (anyWalletAddress) user = await ctx.context.adapter.findOne({
                            model: "user",
                            where: [
                                {
                                    field: "id",
                                    operator: "eq",
                                    value: anyWalletAddress.userId
                                }
                            ]
                        });
                    }
                    if (!user) {
                        const domain = options.emailDomainName ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$url$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getOrigin"])(ctx.context.baseURL);
                        const userEmail = !isAnon && email ? email : `${walletAddress}@${domain}`;
                        const { name, avatar } = await options.ensLookup?.({
                            walletAddress
                        }) ?? {};
                        user = await ctx.context.internalAdapter.createUser({
                            name: name ?? walletAddress,
                            email: userEmail,
                            image: avatar ?? ""
                        });
                        await ctx.context.adapter.create({
                            model: "walletAddress",
                            data: {
                                userId: user.id,
                                address: walletAddress,
                                chainId,
                                isPrimary: true,
                                createdAt: /* @__PURE__ */ new Date()
                            }
                        });
                        await ctx.context.internalAdapter.createAccount({
                            userId: user.id,
                            providerId: "siwe",
                            accountId: `${walletAddress}:${chainId}`,
                            createdAt: /* @__PURE__ */ new Date(),
                            updatedAt: /* @__PURE__ */ new Date()
                        });
                    } else if (!existingWalletAddress) {
                        await ctx.context.adapter.create({
                            model: "walletAddress",
                            data: {
                                userId: user.id,
                                address: walletAddress,
                                chainId,
                                isPrimary: false,
                                createdAt: /* @__PURE__ */ new Date()
                            }
                        });
                        await ctx.context.internalAdapter.createAccount({
                            userId: user.id,
                            providerId: "siwe",
                            accountId: `${walletAddress}:${chainId}`,
                            createdAt: /* @__PURE__ */ new Date(),
                            updatedAt: /* @__PURE__ */ new Date()
                        });
                    }
                    const session = await ctx.context.internalAdapter.createSession(user.id);
                    if (!session) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: "Internal Server Error",
                        status: 500
                    });
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setSessionCookie"])(ctx, {
                        session,
                        user
                    });
                    return ctx.json({
                        token: session.token,
                        success: true,
                        user: {
                            id: user.id,
                            walletAddress,
                            chainId
                        }
                    });
                } catch (error) {
                    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]) throw error;
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                        message: "Something went wrong. Please try again later.",
                        error: error instanceof Error ? error.message : "Unknown error",
                        status: 401
                    });
                }
            })
        },
        options
    });
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/username/error-codes.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "USERNAME_ERROR_CODES": (()=>USERNAME_ERROR_CODES)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/utils/error-codes.mjs [middleware-edge] (ecmascript)");
;
//#region src/plugins/username/error-codes.ts
const USERNAME_ERROR_CODES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defineErrorCodes"])({
    INVALID_USERNAME_OR_PASSWORD: "Invalid username or password",
    EMAIL_NOT_VERIFIED: "Email not verified",
    UNEXPECTED_ERROR: "Unexpected error",
    USERNAME_IS_ALREADY_TAKEN: "Username is already taken. Please try another.",
    USERNAME_TOO_SHORT: "Username is too short",
    USERNAME_TOO_LONG: "Username is too long",
    INVALID_USERNAME: "Username is invalid",
    INVALID_DISPLAY_USERNAME: "Display username is invalid"
});
;
 //# sourceMappingURL=error-codes.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/username/schema.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//#region src/plugins/username/schema.ts
__turbopack_context__.s({
    "getSchema": (()=>getSchema)
});
const getSchema = (normalizer)=>{
    return {
        user: {
            fields: {
                username: {
                    type: "string",
                    required: false,
                    sortable: true,
                    unique: true,
                    returned: true,
                    transform: {
                        input (value) {
                            return typeof value !== "string" ? value : normalizer.username(value);
                        }
                    }
                },
                displayUsername: {
                    type: "string",
                    required: false,
                    transform: {
                        input (value) {
                            return typeof value !== "string" ? value : normalizer.displayUsername(value);
                        }
                    }
                }
            }
        }
    };
};
;
 //# sourceMappingURL=schema.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/username/index.mjs [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "username": (()=>username)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/db/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/db/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$email$2d$verification$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/routes/email-verification.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/username/error-codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/username/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/error/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/error/codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/error.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/zod/v4/classic/schemas.js [middleware-edge] (ecmascript)");
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
;
//#region src/plugins/username/index.ts
function defaultUsernameValidator(username$1) {
    return /^[a-zA-Z0-9_.]+$/.test(username$1);
}
const signInUsernameBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    username: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The username of the user"
    }),
    password: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The password of the user"
    }),
    rememberMe: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["boolean"])().meta({
        description: "Remember the user session"
    }).optional(),
    callbackURL: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The URL to redirect to after email verification"
    }).optional()
});
const isUsernameAvailableBodySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["object"])({
    username: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])().meta({
        description: "The username to check"
    })
});
const username = (options)=>{
    const normalizer = (username$1)=>{
        if (options?.usernameNormalization === false) return username$1;
        if (options?.usernameNormalization) return options.usernameNormalization(username$1);
        return username$1.toLowerCase();
    };
    const displayUsernameNormalizer = (displayUsername)=>{
        return options?.displayUsernameNormalization ? options.displayUsernameNormalization(displayUsername) : displayUsername;
    };
    return {
        id: "username",
        init (ctx) {
            return {
                options: {
                    databaseHooks: {
                        user: {
                            create: {
                                async before (user, context) {
                                    const username$1 = "username" in user ? user.username : null;
                                    const displayUsername = "displayUsername" in user ? user.displayUsername : null;
                                    return {
                                        data: {
                                            ...user,
                                            ...username$1 ? {
                                                username: normalizer(username$1)
                                            } : {},
                                            ...displayUsername ? {
                                                displayUsername: displayUsernameNormalizer(displayUsername)
                                            } : {}
                                        }
                                    };
                                }
                            },
                            update: {
                                async before (user, context) {
                                    const username$1 = "username" in user ? user.username : null;
                                    const displayUsername = "displayUsername" in user ? user.displayUsername : null;
                                    return {
                                        data: {
                                            ...user,
                                            ...username$1 ? {
                                                username: normalizer(username$1)
                                            } : {},
                                            ...displayUsername ? {
                                                displayUsername: displayUsernameNormalizer(displayUsername)
                                            } : {}
                                        }
                                    };
                                }
                            }
                        }
                    }
                }
            };
        },
        endpoints: {
            signInUsername: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/sign-in/username", {
                method: "POST",
                body: signInUsernameBodySchema,
                metadata: {
                    openapi: {
                        summary: "Sign in with username",
                        description: "Sign in with username",
                        responses: {
                            200: {
                                description: "Success",
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object",
                                            properties: {
                                                token: {
                                                    type: "string",
                                                    description: "Session token for the authenticated session"
                                                },
                                                user: {
                                                    $ref: "#/components/schemas/User"
                                                }
                                            },
                                            required: [
                                                "token",
                                                "user"
                                            ]
                                        }
                                    }
                                }
                            },
                            422: {
                                description: "Unprocessable Entity. Validation error",
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
                                }
                            }
                        }
                    }
                }
            }, async (ctx)=>{
                if (!ctx.body.username || !ctx.body.password) {
                    ctx.context.logger.error("Username or password not found");
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                        message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["USERNAME_ERROR_CODES"].INVALID_USERNAME_OR_PASSWORD
                    });
                }
                const username$1 = options?.validationOrder?.username === "pre-normalization" ? normalizer(ctx.body.username) : ctx.body.username;
                const minUsernameLength = options?.minUsernameLength || 3;
                const maxUsernameLength = options?.maxUsernameLength || 30;
                if (username$1.length < minUsernameLength) {
                    ctx.context.logger.error("Username too short", {
                        username: username$1
                    });
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNPROCESSABLE_ENTITY", {
                        code: "USERNAME_TOO_SHORT",
                        message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["USERNAME_ERROR_CODES"].USERNAME_TOO_SHORT
                    });
                }
                if (username$1.length > maxUsernameLength) {
                    ctx.context.logger.error("Username too long", {
                        username: username$1
                    });
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNPROCESSABLE_ENTITY", {
                        message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["USERNAME_ERROR_CODES"].USERNAME_TOO_LONG
                    });
                }
                if (!await (options?.usernameValidator || defaultUsernameValidator)(username$1)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNPROCESSABLE_ENTITY", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["USERNAME_ERROR_CODES"].INVALID_USERNAME
                });
                const user = await ctx.context.adapter.findOne({
                    model: "user",
                    where: [
                        {
                            field: "username",
                            value: normalizer(username$1)
                        }
                    ]
                });
                if (!user) {
                    await ctx.context.password.hash(ctx.body.password);
                    ctx.context.logger.error("User not found", {
                        username: username$1
                    });
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                        message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["USERNAME_ERROR_CODES"].INVALID_USERNAME_OR_PASSWORD
                    });
                }
                const account = await ctx.context.adapter.findOne({
                    model: "account",
                    where: [
                        {
                            field: "userId",
                            value: user.id
                        },
                        {
                            field: "providerId",
                            value: "credential"
                        }
                    ]
                });
                if (!account) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["USERNAME_ERROR_CODES"].INVALID_USERNAME_OR_PASSWORD
                });
                const currentPassword = account?.password;
                if (!currentPassword) {
                    ctx.context.logger.error("Password not found", {
                        username: username$1
                    });
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                        message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["USERNAME_ERROR_CODES"].INVALID_USERNAME_OR_PASSWORD
                    });
                }
                if (!await ctx.context.password.verify({
                    hash: currentPassword,
                    password: ctx.body.password
                })) {
                    ctx.context.logger.error("Invalid password");
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                        message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["USERNAME_ERROR_CODES"].INVALID_USERNAME_OR_PASSWORD
                    });
                }
                if (ctx.context.options?.emailAndPassword?.requireEmailVerification && !user.emailVerified) {
                    if (!ctx.context.options?.emailVerification?.sendVerificationEmail) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
                        message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["USERNAME_ERROR_CODES"].EMAIL_NOT_VERIFIED
                    });
                    if (ctx.context.options?.emailVerification?.sendOnSignIn) {
                        const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$email$2d$verification$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createEmailVerificationToken"])(ctx.context.secret, user.email, void 0, ctx.context.options.emailVerification?.expiresIn);
                        const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${ctx.body.callbackURL || "/"}`;
                        await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailVerification.sendVerificationEmail({
                            user,
                            url,
                            token
                        }, ctx.request));
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
                        message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["USERNAME_ERROR_CODES"].EMAIL_NOT_VERIFIED
                    });
                }
                const session = await ctx.context.internalAdapter.createSession(user.id, ctx.body.rememberMe === false);
                if (!session) return ctx.json(null, {
                    status: 500,
                    body: {
                        message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].FAILED_TO_CREATE_SESSION
                    }
                });
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setSessionCookie"])(ctx, {
                    session,
                    user
                }, ctx.body.rememberMe === false);
                return ctx.json({
                    token: session.token,
                    user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, user)
                });
            }),
            isUsernameAvailable: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/is-username-available", {
                method: "POST",
                body: isUsernameAvailableBodySchema
            }, async (ctx)=>{
                const username$1 = ctx.body.username;
                if (!username$1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNPROCESSABLE_ENTITY", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["USERNAME_ERROR_CODES"].INVALID_USERNAME
                });
                const minUsernameLength = options?.minUsernameLength || 3;
                const maxUsernameLength = options?.maxUsernameLength || 30;
                if (username$1.length < minUsernameLength) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNPROCESSABLE_ENTITY", {
                    code: "USERNAME_TOO_SHORT",
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["USERNAME_ERROR_CODES"].USERNAME_TOO_SHORT
                });
                if (username$1.length > maxUsernameLength) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNPROCESSABLE_ENTITY", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["USERNAME_ERROR_CODES"].USERNAME_TOO_LONG
                });
                if (!await (options?.usernameValidator || defaultUsernameValidator)(username$1)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("UNPROCESSABLE_ENTITY", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["USERNAME_ERROR_CODES"].INVALID_USERNAME
                });
                if (await ctx.context.adapter.findOne({
                    model: "user",
                    where: [
                        {
                            field: "username",
                            value: normalizer(username$1)
                        }
                    ]
                })) return ctx.json({
                    available: false
                });
                return ctx.json({
                    available: true
                });
            })
        },
        schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["mergeSchema"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSchema"])({
            username: normalizer,
            displayUsername: displayUsernameNormalizer
        }), options?.schema),
        hooks: {
            before: [
                {
                    matcher (context) {
                        return context.path === "/sign-up/email" || context.path === "/update-user";
                    },
                    handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
                        const username$1 = typeof ctx.body.username === "string" && options?.validationOrder?.username === "post-normalization" ? normalizer(ctx.body.username) : ctx.body.username;
                        if (username$1 !== void 0 && typeof username$1 === "string") {
                            const minUsernameLength = options?.minUsernameLength || 3;
                            const maxUsernameLength = options?.maxUsernameLength || 30;
                            if (username$1.length < minUsernameLength) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                                code: "USERNAME_TOO_SHORT",
                                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["USERNAME_ERROR_CODES"].USERNAME_TOO_SHORT
                            });
                            if (username$1.length > maxUsernameLength) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["USERNAME_ERROR_CODES"].USERNAME_TOO_LONG
                            });
                            if (!await (options?.usernameValidator || defaultUsernameValidator)(username$1)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["USERNAME_ERROR_CODES"].INVALID_USERNAME
                            });
                            const user = await ctx.context.adapter.findOne({
                                model: "user",
                                where: [
                                    {
                                        field: "username",
                                        value: username$1
                                    }
                                ]
                            });
                            const blockChangeSignUp = ctx.path === "/sign-up/email" && user;
                            const blockChangeUpdateUser = ctx.path === "/update-user" && user && ctx.context.session && user.id !== ctx.context.session.session.userId;
                            if (blockChangeSignUp || blockChangeUpdateUser) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                                message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["USERNAME_ERROR_CODES"].USERNAME_IS_ALREADY_TAKEN
                            });
                        }
                        const displayUsername = typeof ctx.body.displayUsername === "string" && options?.validationOrder?.displayUsername === "post-normalization" ? displayUsernameNormalizer(ctx.body.displayUsername) : ctx.body.displayUsername;
                        if (displayUsername !== void 0 && typeof displayUsername === "string") {
                            if (options?.displayUsernameValidator) {
                                if (!await options.displayUsernameValidator(displayUsername)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                                    message: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["USERNAME_ERROR_CODES"].INVALID_DISPLAY_USERNAME
                                });
                            }
                        }
                    })
                },
                {
                    matcher (context) {
                        return context.path === "/sign-up/email" || context.path === "/update-user";
                    },
                    handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
                        if (ctx.body.username && !ctx.body.displayUsername) ctx.body.displayUsername = ctx.body.username;
                        if (ctx.body.displayUsername && !ctx.body.username) ctx.body.username = ctx.body.displayUsername;
                    })
                }
            ]
        },
        options,
        $ERROR_CODES: __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["USERNAME_ERROR_CODES"]
    };
};
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/username/index.mjs [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/db/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/db/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$email$2d$verification$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/routes/email-verification.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/api/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/username/error-codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$schema$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/username/schema.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/error/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-call/dist/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/api/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/username/index.mjs [middleware-edge] (ecmascript) <locals>");
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/index.mjs [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$hide$2d$metadata$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/hide-metadata.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$access$2f$access$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/access/access.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$access$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/access/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$client$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/two-factor/client.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$admin$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/admin.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$anonymous$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/anonymous/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$api$2d$key$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/api-key/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$bearer$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/bearer/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$custom$2d$session$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/custom-session/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/device-authorization/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/email-otp/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$auth0$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/auth0.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$gumroad$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/gumroad.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$hubspot$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/hubspot.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$keycloak$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/keycloak.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$line$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/line.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$microsoft$2d$entra$2d$id$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/microsoft-entra-id.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$okta$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/okta.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$patreon$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/patreon.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$slack$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/slack.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$haveibeenpwned$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/haveibeenpwned/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/utils.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$sign$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/sign.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$verify$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/verify.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$last$2d$login$2d$method$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/last-login-method/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$magic$2d$link$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/magic-link/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$oidc$2d$provider$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/oidc-provider/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$mcp$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/mcp/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$multi$2d$session$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/multi-session/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$oauth$2d$proxy$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/oauth-proxy/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$one$2d$tap$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/one-tap/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$one$2d$time$2d$token$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/one-time-token/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$open$2d$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/open-api/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$organization$2f$adapter$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/organization/adapter.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$organization$2f$organization$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/organization/organization.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$organization$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/organization/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/phone-number/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$siwe$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/siwe/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$error$2d$code$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/two-factor/error-code.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/two-factor/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/username/error-codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/username/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
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
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/index.mjs [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$hide$2d$metadata$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/utils/hide-metadata.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$access$2f$access$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/access/access.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$access$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/access/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$client$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/two-factor/client.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$admin$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/admin.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/admin/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$anonymous$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/anonymous/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$api$2d$key$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/api-key/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$bearer$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/bearer/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$captcha$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/captcha/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$custom$2d$session$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/custom-session/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$device$2d$authorization$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/device-authorization/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/email-otp/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$auth0$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/auth0.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$gumroad$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/gumroad.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$hubspot$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/hubspot.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$keycloak$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/keycloak.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$line$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/line.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$microsoft$2d$entra$2d$id$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/microsoft-entra-id.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$okta$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/okta.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$patreon$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/patreon.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$providers$2f$slack$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/providers/slack.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$generic$2d$oauth$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/generic-oauth/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$haveibeenpwned$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/haveibeenpwned/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$utils$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/utils.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$sign$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/sign.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$verify$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/verify.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/jwt/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$last$2d$login$2d$method$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/last-login-method/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$magic$2d$link$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/magic-link/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$oidc$2d$provider$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/oidc-provider/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$mcp$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/mcp/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$multi$2d$session$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/multi-session/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$oauth$2d$proxy$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/oauth-proxy/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$one$2d$tap$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/one-tap/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$one$2d$time$2d$token$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/one-time-token/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$open$2d$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/open-api/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$organization$2f$adapter$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/organization/adapter.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$organization$2f$organization$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/organization/organization.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$organization$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/organization/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$phone$2d$number$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/phone-number/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$siwe$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/siwe/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$error$2d$code$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/two-factor/error-code.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/two-factor/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$error$2d$codes$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/username/error-codes.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$username$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/username/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@better-auth/core/dist/api/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/plugins/index.mjs [middleware-edge] (ecmascript) <locals>");
}}),
}]);

//# sourceMappingURL=3e5b4_better-auth_dist_plugins_a11825bf._.js.map