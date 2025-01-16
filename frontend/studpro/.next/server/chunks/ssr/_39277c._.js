module.exports = {

"[project]/routes.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const Routes = {
    LOGIN: 'http://localhost:3001/authentication/login',
    REGISTER: 'http://localhost:3001/authentication/register',
    AUTHORED_PROBLEMS: 'http://localhost:3001/dashboard/authoredProblems',
    PROBLEM_LEVEL_DASHBOARD_CHARTS: 'http://localhost:3001/dashboard/getProblemLevelDashboardCharts',
    MONTHLY_SOLVED_PROBLEMS: 'http://localhost:3001/dashboard/getMonthlySolvedProblems',
    FLOW_CHART: 'http://localhost:3001/flowchart/convertToflowchart',
    PROBLEM_DATA: 'http://localhost:3001/extractProblem/problemData',
    CHANGE_PROGRAM: 'http://localhost:3001/problemCompile/changeProgram',
    COMPILE_AND_RUN: 'http://localhost:3001/problemCompile/compileandrun',
    SUBMIT: 'http://localhost:3001/problemCompile/submit',
    UPLOAD_FILE: 'http://localhost:3001/problemCreation/uploadFile',
    CREATE_PROBLEM: 'http://localhost:3001/problemCreation/createProblem',
    GET_USER: 'http://localhost:3001/users/getUser',
    UPDATE_USER: 'http://localhost:3001/users/updateUser',
    LEADERBOARD: 'http://localhost:3001/leaderboard/getLeaderboard'
};
const __TURBOPACK__default__export__ = Routes;
}}),
"[project]/app/flowchart/hooks/flowchartHook.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "FlowchartHook": (()=>FlowchartHook)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js2flowchart$2f$dist$2f$js2flowchart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/js2flowchart/dist/js2flowchart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/routes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$lang$2d$javascript$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@codemirror/lang-javascript/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$lang$2d$python$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@codemirror/lang-python/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$lang$2d$css$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@codemirror/lang-css/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$lang$2d$html$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@codemirror/lang-html/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$lang$2d$sql$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@codemirror/lang-sql/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$lang$2d$markdown$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@codemirror/lang-markdown/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$lang$2d$json$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@codemirror/lang-json/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$lang$2d$cpp$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@codemirror/lang-cpp/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$lang$2d$java$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@codemirror/lang-java/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$replit$2f$codemirror$2d$lang$2d$csharp$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@replit/codemirror-lang-csharp/dist/index.js [app-ssr] (ecmascript)");
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
function FlowchartHook() {
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [geminiCode, setGeminicode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [flowchartSvg, setFlowchartSvg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const languages = {
        javascript: {
            name: "JavaScript",
            extension: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$lang$2d$javascript$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["javascript"])()
        },
        python: {
            name: "Python",
            extension: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$lang$2d$python$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["python"])()
        },
        css: {
            name: "CSS",
            extension: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$lang$2d$css$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"])()
        },
        html: {
            name: "HTML",
            extension: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$lang$2d$html$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["html"])()
        },
        sql: {
            name: "SQL",
            extension: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$lang$2d$sql$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sql"])()
        },
        markdown: {
            name: "Markdown",
            extension: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$lang$2d$markdown$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdown"])()
        },
        json: {
            name: "JSON",
            extension: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$lang$2d$json$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["json"])()
        },
        cpp: {
            name: "C/C++",
            extension: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$lang$2d$cpp$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cpp"])()
        },
        java: {
            name: "Java",
            extension: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$lang$2d$java$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["java"])()
        },
        csharp: {
            name: "C#",
            extension: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$replit$2f$codemirror$2d$lang$2d$csharp$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["csharp"])()
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (geminiCode) {
            const flowTree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js2flowchart$2f$dist$2f$js2flowchart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertCodeToFlowTree"])(geminiCode);
            const svg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js2flowchart$2f$dist$2f$js2flowchart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertFlowTreeToSvg"])(flowTree);
            setFlowchartSvg(svg);
        }
    }, [
        geminiCode
    ]);
    const gemini = ()=>{
        const url = __TURBOPACK__imported__module__$5b$project$5d2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].FLOW_CHART;
        const data = {
            code: code
        };
        try {
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                },
                body: JSON.stringify(data)
            }).then((response)=>response.json().then((data)=>{
                    console.log(data);
                    if (data.message == 'Unauthorized' && data.statusCode == 401) {
                        localStorage.removeItem('access_token');
                        window.location.href = '/authentication';
                    }
                    setGeminicode(data.actualOutput);
                })).catch((error)=>console.error("Error:", error));
        } catch (error) {
            console.error("Error:", error);
        }
    };
    const handleCodeChange = (value)=>{
        setCode(value);
    };
    const handleRunCode = ()=>{
        gemini();
    };
    const handleDownloadSVG = ()=>{
        if (svgRef.current) {
            const svgData = new XMLSerializer().serializeToString(svgRef.current);
            const svgBlob = new Blob([
                svgData
            ], {
                type: "image/svg+xml;charset=utf-8"
            });
            const svgUrl = URL.createObjectURL(svgBlob);
            const downloadLink = document.createElement("a");
            downloadLink.href = svgUrl;
            downloadLink.download = "flowchart.svg";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            URL.revokeObjectURL(svgUrl);
        }
    };
    return {
        languages,
        code,
        flowchartSvg,
        svgRef,
        handleCodeChange,
        handleRunCode,
        handleDownloadSVG
    };
}
}}),
"[project]/app/flowchart/component/codeEditor.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CodeEditor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$codemirror$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@uiw/react-codemirror/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$flowchart$2f$hooks$2f$flowchartHook$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/flowchart/hooks/flowchartHook.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$codemirror$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@uiw/react-codemirror/esm/index.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
function CodeEditor() {
    const { code, flowchartSvg, svgRef, handleCodeChange, handleRunCode, handleDownloadSVG } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$flowchart$2f$hooks$2f$flowchartHook$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowchartHook"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl italic",
                children: "Code Editor"
            }, void 0, false, {
                fileName: "[project]/app/flowchart/component/codeEditor.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-grow",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$codemirror$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                    value: code,
                    height: "200px",
                    onChange: handleCodeChange
                }, void 0, false, {
                    fileName: "[project]/app/flowchart/component/codeEditor.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/flowchart/component/codeEditor.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleRunCode,
                className: "mt-4 p-2 bg-blue-500 text-white rounded",
                children: "Run Code"
            }, void 0, false, {
                fileName: "[project]/app/flowchart/component/codeEditor.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleDownloadSVG,
                className: "mt-4 p-2 bg-green-500 text-white rounded",
                children: "Download SVG"
            }, void 0, false, {
                fileName: "[project]/app/flowchart/component/codeEditor.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: flowchartSvg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    dangerouslySetInnerHTML: {
                        __html: flowchartSvg
                    },
                    ref: svgRef
                }, void 0, false, {
                    fileName: "[project]/app/flowchart/component/codeEditor.tsx",
                    lineNumber: 36,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/flowchart/component/codeEditor.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/flowchart/component/codeEditor.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
}}),
"[project]/app/flowchart/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable react-hooks/rules-of-hooks */ __turbopack_esm__({
    "default": (()=>flowChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$flowchart$2f$component$2f$codeEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/flowchart/component/codeEditor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function flowChart() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, [
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$flowchart$2f$component$2f$codeEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/flowchart/page.tsx",
            lineNumber: 20,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/flowchart/page.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
}}),
"[project]/app/flowchart/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=_39277c._.js.map