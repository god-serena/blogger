(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/blogger.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
async function BloggerApi(param) {
    let { method = "GET", payload, endpoint } = param;
    const access_token = localStorage.getItem("access_token");
    const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
        baseURL: "http://localhost:8000/blogger-api/",
        headers: {
            "Content-Type": "application/json",
            ...access_token ? {
                Authorization: "Bearer ".concat(access_token)
            } : {}
        }
    });
    try {
        const response = await axiosInstance.request({
            ...payload ? {
                data: JSON.stringify(payload)
            } : {},
            method: method.toLowerCase(),
            url: endpoint
        });
        return response.data;
    } catch (error) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) throw error.response;
        else throw error;
    }
}
_c = BloggerApi;
const __TURBOPACK__default__export__ = BloggerApi;
var _c;
__turbopack_context__.k.register(_c, "BloggerApi");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Editor.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/ban-ts-comment */ // @ts-nocheck
__turbopack_context__.s({
    "default": ()=>QuillEditor
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function QuillEditor(param) {
    let { onChange, initialContent, textOnly = false, truncText = false, maxLength = 2 } = param;
    _s();
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const quillInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [truncatedText, setTruncatedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialContent);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuillEditor.useEffect": ()=>{
            const toolbars = document.getElementsByClassName("ql-toolbar");
            if (toolbars.length) {
                for (const toolbar of toolbars){
                    toolbar.remove();
                }
            }
            let quill = undefined;
            async function initQuill() {
                if (!editorRef.current) return;
                const Quill = (await __turbopack_context__.r("[project]/node_modules/quill/quill.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i)).default;
                const toolbar = [
                    [
                        {
                            header: [
                                1,
                                2,
                                3,
                                false
                            ]
                        }
                    ],
                    [
                        "bold",
                        "italic",
                        "underline",
                        "strike"
                    ],
                    [
                        {
                            list: "ordered"
                        },
                        {
                            list: "bullet"
                        }
                    ],
                    [
                        "link",
                        "image"
                    ],
                    [
                        "clean"
                    ]
                ];
                quill = new Quill(editorRef.current, {
                    theme: "snow",
                    placeholder: "What do you have in mind?",
                    modules: {
                        toolbar: textOnly ? false : toolbar
                    },
                    readOnly: textOnly
                });
                quill.setContents(initialContent);
                quill.on("text-change", {
                    "QuillEditor.useEffect.initQuill": ()=>{
                        const delta = quill.getContents();
                        setContent(delta);
                    }
                }["QuillEditor.useEffect.initQuill"]);
                if (truncText) {
                    const plain = quill.getText().trim();
                    setTruncatedText(plain.length > maxLength ? plain.slice(0, maxLength) + "..." : plain);
                }
                quillInstance.current = quill;
                return ({
                    "QuillEditor.useEffect.initQuill": ()=>{
                        quillInstance.current.off("text-change", {
                            "QuillEditor.useEffect.initQuill": ()=>{}
                        }["QuillEditor.useEffect.initQuill"]);
                        quillInstance.current = null;
                    }
                })["QuillEditor.useEffect.initQuill"];
            }
            initQuill();
        }
    }["QuillEditor.useEffect"], [
        initialContent,
        textOnly,
        maxLength,
        truncText
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuillEditor.useEffect": ()=>{
            onChange(content);
        }
    }["QuillEditor.useEffect"], [
        content,
        onChange
    ]);
    if (truncText && quillInstance.current) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[14px] text-gray-500",
            children: truncatedText
        }, void 0, false, {
            fileName: "[project]/src/components/Editor.tsx",
            lineNumber: 81,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: editorRef,
        className: "editor ".concat(textOnly ? "select-none" : "select-text")
    }, void 0, false, {
        fileName: "[project]/src/components/Editor.tsx",
        lineNumber: 85,
        columnNumber: 9
    }, this);
}
_s(QuillEditor, "4bok/SFW6iOlRvIfI9rCLsZzpCg=");
_c = QuillEditor;
var _c;
__turbopack_context__.k.register(_c, "QuillEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/blogs/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>BlogsPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$blogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/blogger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Editor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Editor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function BlogsPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [blogsList, setBlogsList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [top, setTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    async function fetchBlogs(top) {
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$blogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                endpoint: "blog?top=".concat(top)
            });
            return response.blogs;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
    function handleLoadMore() {
        setTop((prev)=>prev += 20);
    }
    function handleSelectedBlog(blogID) {
        router.push("/blogs/".concat(blogID));
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlogsPage.useEffect": ()=>{
            async function getBlogs() {
                const result = await fetchBlogs(top);
                setBlogsList({
                    "BlogsPage.useEffect.getBlogs": (prev)=>{
                        const keys = prev.map({
                            "BlogsPage.useEffect.getBlogs.keys": (blog)=>blog.id
                        }["BlogsPage.useEffect.getBlogs.keys"]);
                        const updated = result.filter({
                            "BlogsPage.useEffect.getBlogs.updated": (fetched)=>!keys.includes(fetched.id)
                        }["BlogsPage.useEffect.getBlogs.updated"]);
                        return [
                            ...prev,
                            ...updated
                        ];
                    }
                }["BlogsPage.useEffect.getBlogs"]);
            }
            setLoading(false);
            getBlogs();
        }
    }["BlogsPage.useEffect"], [
        top
    ]);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/src/app/blogs/page.tsx",
        lineNumber: 51,
        columnNumber: 25
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full p-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3",
                children: (blogsList === null || blogsList === void 0 ? void 0 : blogsList.length) > 0 && blogsList.map((blog)=>{
                    var _blog_updated_at;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "flex flex-col items-center justify-between h-[500px] p-5 bg-gray-200 rounded-md w-full hover:bg-gray-300 cursor-pointer",
                        onClick: ()=>handleSelectedBlog(blog.id),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "https://placehold.co/600x400",
                                alt: "banner",
                                width: 300,
                                height: 200,
                                priority: true,
                                unoptimized: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/blogs/page.tsx",
                                lineNumber: 63,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold mb-2 mt-4 text-center line-clamp-2",
                                children: blog.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/blogs/page.tsx",
                                lineNumber: 71,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Editor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                textOnly: true,
                                truncText: true,
                                initialContent: blog.body,
                                maxLength: 200,
                                onChange: ()=>{}
                            }, void 0, false, {
                                fileName: "[project]/src/app/blogs/page.tsx",
                                lineNumber: 74,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-white text-center bg-blue-400 rounded p-2 self-end",
                                children: new Date((_blog_updated_at = blog.updated_at) !== null && _blog_updated_at !== void 0 ? _blog_updated_at : blog.published_at).toLocaleDateString()
                            }, void 0, false, {
                                fileName: "[project]/src/app/blogs/page.tsx",
                                lineNumber: 81,
                                columnNumber: 29
                            }, this)
                        ]
                    }, blog.id, true, {
                        fileName: "[project]/src/app/blogs/page.tsx",
                        lineNumber: 58,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/blogs/page.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleLoadMore,
                    className: "px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition",
                    children: "Load More"
                }, void 0, false, {
                    fileName: "[project]/src/app/blogs/page.tsx",
                    lineNumber: 91,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/blogs/page.tsx",
                lineNumber: 90,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/blogs/page.tsx",
        lineNumber: 54,
        columnNumber: 9
    }, this);
}
_s(BlogsPage, "wvNytFnvjxChHKdKEnI2cnrXEXM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = BlogsPage;
var _c;
__turbopack_context__.k.register(_c, "BlogsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_53e47090._.js.map