module.exports = {

"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/lib/auth-client.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "authClient": (()=>authClient),
    "useSession": (()=>useSession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$react$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/client/react/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$react$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/better-auth/dist/client/react/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const authClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$react$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAuthClient"])({
    baseURL: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : process.env.NEXT_PUBLIC_SITE_URL,
    fetchOptions: {
        headers: {
            Authorization: `Bearer ${("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : ""}`
        },
        onSuccess: (ctx)=>{
            const authToken = ctx.response.headers.get("set-auth-token");
            // Store the token securely (e.g., in localStorage)
            if (authToken) {
                // Split token at "." and take only the first part
                const tokenPart = authToken.includes('.') ? authToken.split('.')[0] : authToken;
                localStorage.setItem("bearer_token", tokenPart);
            }
        }
    }
});
function useSession() {
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPending, setIsPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const refetch = ()=>{
        setIsPending(true);
        setError(null);
        fetchSession();
    };
    const fetchSession = async ()=>{
        try {
            const res = await authClient.getSession({
                fetchOptions: {
                    auth: {
                        type: "Bearer",
                        token: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : ""
                    }
                }
            });
            setSession(res.data);
            setError(null);
        } catch (err) {
            setSession(null);
            setError(err);
        } finally{
            setIsPending(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchSession();
    }, []);
    return {
        data: session,
        isPending,
        error,
        refetch
    };
}
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-orchids-id": "src\\components\\ui\\button.tsx:51:4",
        "data-orchids-name": "Comp",
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/components/ui/input.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        "data-orchids-id": "src\\components\\ui\\input.tsx:7:4",
        "data-orchids-name": "input",
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/components/ui/label.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-orchids-id": "src\\components\\ui\\label.tsx:13:4",
        "data-orchids-name": "LabelPrimitive.Root",
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/components/ui/checkbox.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Checkbox": (()=>Checkbox)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Checkbox({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-orchids-id": "src\\components\\ui\\checkbox.tsx:14:4",
        "data-orchids-name": "CheckboxPrimitive.Root",
        "data-slot": "checkbox",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-orchids-id": "src\\components\\ui\\checkbox.tsx:22:6",
            "data-orchids-name": "CheckboxPrimitive.Indicator",
            "data-slot": "checkbox-indicator",
            className: "flex items-center justify-center text-current transition-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                "data-orchids-id": "src\\components\\ui\\checkbox.tsx:26:8",
                "data-orchids-name": "CheckIcon",
                className: "size-3.5"
            }, void 0, false, {
                fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/components/ui/checkbox.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/components/ui/checkbox.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/components/ui/checkbox.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LoginPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/lib/auth-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/lucide-react/dist/esm/icons/log-in.js [app-ssr] (ecmascript) <export default as LogIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
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
function LoginPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { data: session, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        email: "",
        password: "",
        rememberMe: false
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGoogleLoading, setIsGoogleLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isPending && session?.user) {
            router.push("/");
        }
    }, [
        session,
        isPending,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (searchParams.get("registered") === "true") {
            __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Account created! Please log in.");
        }
    }, [
        searchParams
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authClient"].signIn.email({
                email: formData.email,
                password: formData.password,
                rememberMe: formData.rememberMe,
                callbackURL: "/"
            });
            if (error?.code) {
                __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Invalid email or password. Please make sure you have already registered an account and try again.");
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Logged in successfully!");
            router.push("/");
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("An error occurred. Please try again.");
        } finally{
            setIsLoading(false);
        }
    };
    const handleGoogleSignIn = async ()=>{
        setIsGoogleLoading(true);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authClient"].signIn.social({
                provider: "google",
                callbackURL: "/"
            });
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Google sign-in failed. Please try again.");
            setIsGoogleLoading(false);
        }
    };
    if (isPending) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src\\app\\login\\page.tsx:80:6",
            "data-orchids-name": "div",
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                "data-orchids-id": "src\\app\\login\\page.tsx:81:8",
                "data-orchids-name": "Loader2",
                className: "h-8 w-8 animate-spin text-primary"
            }, void 0, false, {
                fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this);
    }
    if (session?.user) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\app\\login\\page.tsx:91:4",
        "data-orchids-name": "div",
        className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src\\app\\login\\page.tsx:92:6",
            "data-orchids-name": "div",
            className: "w-full max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src\\app\\login\\page.tsx:93:8",
                    "data-orchids-name": "div",
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\app\\login\\page.tsx:94:10",
                            "data-orchids-name": "div",
                            className: "gradient-bg inline-flex h-16 w-16 items-center justify-center rounded-2xl mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "src\\app\\login\\page.tsx:95:12",
                                "data-orchids-name": "span",
                                className: "text-3xl font-bold text-white",
                                children: "A"
                            }, void 0, false, {
                                fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            "data-orchids-id": "src\\app\\login\\page.tsx:97:10",
                            "data-orchids-name": "h1",
                            className: "text-3xl font-bold mb-2",
                            children: "Welcome Back"
                        }, void 0, false, {
                            fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "src\\app\\login\\page.tsx:98:10",
                            "data-orchids-name": "p",
                            className: "text-muted-foreground",
                            children: "Sign in to ASAC.AI to continue"
                        }, void 0, false, {
                            fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src\\app\\login\\page.tsx:103:8",
                    "data-orchids-name": "div",
                    className: "bg-white rounded-2xl shadow-xl border border-border p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            "data-orchids-id": "src\\app\\login\\page.tsx:104:10@handleSubmit",
                            "data-orchids-name": "form",
                            onSubmit: handleSubmit,
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\app\\login\\page.tsx:105:12",
                                    "data-orchids-name": "div",
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            "data-orchids-id": "src\\app\\login\\page.tsx:106:14",
                                            "data-orchids-name": "Label",
                                            htmlFor: "email",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-orchids-id": "src\\app\\login\\page.tsx:107:14",
                                            "data-orchids-name": "Input",
                                            id: "email",
                                            type: "email",
                                            placeholder: "you@example.com",
                                            value: formData.email,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    email: e.target.value
                                                }),
                                            required: true,
                                            disabled: isLoading
                                        }, void 0, false, {
                                            fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\app\\login\\page.tsx:120:12",
                                    "data-orchids-name": "div",
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            "data-orchids-id": "src\\app\\login\\page.tsx:121:14",
                                            "data-orchids-name": "Label",
                                            htmlFor: "password",
                                            children: "Password"
                                        }, void 0, false, {
                                            fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-orchids-id": "src\\app\\login\\page.tsx:122:14",
                                            "data-orchids-name": "Input",
                                            id: "password",
                                            type: "password",
                                            placeholder: "••••••••",
                                            value: formData.password,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    password: e.target.value
                                                }),
                                            required: true,
                                            disabled: isLoading,
                                            autoComplete: "off"
                                        }, void 0, false, {
                                            fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\app\\login\\page.tsx:136:12",
                                    "data-orchids-name": "div",
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                            "data-orchids-id": "src\\app\\login\\page.tsx:137:14",
                                            "data-orchids-name": "Checkbox",
                                            id: "remember",
                                            checked: formData.rememberMe,
                                            onCheckedChange: (checked)=>setFormData({
                                                    ...formData,
                                                    rememberMe: checked
                                                }),
                                            disabled: isLoading
                                        }, void 0, false, {
                                            fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            "data-orchids-id": "src\\app\\login\\page.tsx:145:14",
                                            "data-orchids-name": "Label",
                                            htmlFor: "remember",
                                            className: "text-sm font-normal cursor-pointer",
                                            children: "Remember me"
                                        }, void 0, false, {
                                            fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "src\\app\\login\\page.tsx:153:12",
                                    "data-orchids-name": "Button",
                                    type: "submit",
                                    className: "w-full gradient-bg text-white",
                                    disabled: isLoading,
                                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                "data-orchids-id": "src\\app\\login\\page.tsx:160:18",
                                                "data-orchids-name": "Loader2",
                                                className: "mr-2 h-4 w-4 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 19
                                            }, this),
                                            "Signing in..."
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__["LogIn"], {
                                                "data-orchids-id": "src\\app\\login\\page.tsx:165:18",
                                                "data-orchids-name": "LogIn",
                                                className: "mr-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, this),
                                            "Sign In"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\app\\login\\page.tsx:172:10",
                            "data-orchids-name": "div",
                            className: "mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\app\\login\\page.tsx:173:12",
                                    "data-orchids-name": "div",
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\app\\login\\page.tsx:174:14",
                                            "data-orchids-name": "div",
                                            className: "absolute inset-0 flex items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\app\\login\\page.tsx:175:16",
                                                "data-orchids-name": "div",
                                                className: "w-full border-t border-border"
                                            }, void 0, false, {
                                                fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\app\\login\\page.tsx:177:14",
                                            "data-orchids-name": "div",
                                            className: "relative flex justify-center text-sm",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-orchids-id": "src\\app\\login\\page.tsx:178:16",
                                                "data-orchids-name": "span",
                                                className: "bg-white px-4 text-muted-foreground",
                                                children: "Or continue with"
                                            }, void 0, false, {
                                                fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "src\\app\\login\\page.tsx:184:12@handleGoogleSignIn",
                                    "data-orchids-name": "Button",
                                    type: "button",
                                    variant: "outline",
                                    className: "w-full mt-4",
                                    onClick: handleGoogleSignIn,
                                    disabled: isGoogleLoading,
                                    children: isGoogleLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                "data-orchids-id": "src\\app\\login\\page.tsx:193:18",
                                                "data-orchids-name": "Loader2",
                                                className: "mr-2 h-4 w-4 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 19
                                            }, this),
                                            "Signing in with Google..."
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                "data-orchids-id": "src\\app\\login\\page.tsx:198:18",
                                                "data-orchids-name": "svg",
                                                className: "mr-2 h-4 w-4",
                                                viewBox: "0 0 24 24",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        "data-orchids-id": "src\\app\\login\\page.tsx:199:20",
                                                        "data-orchids-name": "path",
                                                        d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                                                        fill: "#4285F4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        "data-orchids-id": "src\\app\\login\\page.tsx:203:20",
                                                        "data-orchids-name": "path",
                                                        d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                                                        fill: "#34A853"
                                                    }, void 0, false, {
                                                        fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        "data-orchids-id": "src\\app\\login\\page.tsx:207:20",
                                                        "data-orchids-name": "path",
                                                        d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
                                                        fill: "#FBBC05"
                                                    }, void 0, false, {
                                                        fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        "data-orchids-id": "src\\app\\login\\page.tsx:211:20",
                                                        "data-orchids-name": "path",
                                                        d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                                                        fill: "#EA4335"
                                                    }, void 0, false, {
                                                        fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                                lineNumber: 198,
                                                columnNumber: 19
                                            }, this),
                                            "Sign in with Google"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\app\\login\\page.tsx:222:10",
                            "data-orchids-name": "div",
                            className: "mt-6 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src\\app\\login\\page.tsx:223:12",
                                "data-orchids-name": "p",
                                className: "text-sm text-muted-foreground",
                                children: [
                                    "Don't have an account?",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ASAC$2d$AI$2f$remix$2d$of$2d$asacai$2d$media$2d$integrity$2d$ui$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        "data-orchids-id": "src\\app\\login\\page.tsx:225:14",
                                        "data-orchids-name": "Link",
                                        href: "/register",
                                        className: "font-semibold text-primary hover:underline",
                                        children: "Create account"
                                    }, void 0, false, {
                                        fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
            lineNumber: 92,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/ASAC-AI/remix-of-asacai-media-integrity-ui/src/app/login/page.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__0e63af62._.js.map