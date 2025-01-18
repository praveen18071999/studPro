'use client'

import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { FlowchartHook } from '../hooks/flowchartHook';

export default function CodeEditor() {
    const {
        code,
        flowchartSvg,
        svgRef,
        handleCodeChange,
        handleRunCode,
        handleDownloadSVG,
        isLoading,
    } = FlowchartHook();

    return (
        <div className="flex flex-col h-full p-8">
            <h1 className="text-2xl italic">Code Editor</h1>
            <div className="flex-grow">
                <CodeMirror
                    value={code}
                    height="200px"
                    onChange={handleCodeChange}
                />
            </div>
            <div className="mt-4 space-x-4">
                <button
                    onClick={handleRunCode}
                    className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    disabled={isLoading}
                >
                    {isLoading ? 'Processing...' : 'Run Code'}
                </button>
                <button
                    onClick={handleDownloadSVG}
                    className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
                    disabled={!flowchartSvg}
                >
                    Download SVG
                </button>
            </div>
            {isLoading ? (
                <div className="flex items-center justify-center w-full h-full p-20">
                    <div className="w-10 h-10 border-4 border-black-500 border-t-transparent border-t-4 border-t-blue-500 rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="mt-4">
                    {flowchartSvg && (
                        <div
                            dangerouslySetInnerHTML={{ __html: flowchartSvg }}
                            ref={svgRef}
                            className="overflow-auto"
                        />
                    )}
                </div>
            )}
        </div>
    );
}