'use client';
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { sql } from "@codemirror/lang-sql";
import { markdown } from "@codemirror/lang-markdown";
import { json } from "@codemirror/lang-json";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { csharp } from "@replit/codemirror-lang-csharp";
import { convertCodeToFlowTree, convertFlowTreeToSvg } from "js2flowchart";
import { useState, useRef, useEffect } from "react";
import Routes from "../../../routes";

export function FlowchartHook() {
  const [code, setCode] = useState("");
  const [geminiCode, setGeminicode] = useState("");
  const [flowchartSvg, setFlowchartSvg] = useState<string | null>(null);
  const svgRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const languages = {
    javascript: { name: "JavaScript", extension: javascript() },
    python: { name: "Python", extension: python() },
    css: { name: "CSS", extension: css() },
    html: { name: "HTML", extension: html() },
    sql: { name: "SQL", extension: sql() },
    markdown: { name: "Markdown", extension: markdown() },
    json: { name: "JSON", extension: json() },
    cpp: { name: "C/C++", extension: cpp() },
    java: { name: "Java", extension: java() },
    csharp: { name: "C#", extension: csharp() },
  };
  useEffect(() => {
    if (geminiCode) {
      const flowTree = convertCodeToFlowTree(geminiCode);
      const svg = convertFlowTreeToSvg(flowTree);
      setFlowchartSvg(svg);
    }
  }, [geminiCode]);
  const gemini = () => {
    const url = Routes.FLOW_CHART;

    const data = {
      code: code,
    };

    try {
      setIsLoading(true);
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify(data),
      })
        .then((response) =>
          response.json().then((data) => {
            //console.log(data);
            if(data.message == 'Unauthorized' && data.statusCode == 401){
              localStorage.removeItem('access_token');
              window.location.href = '/authentication';
          }
            
            setGeminicode(data.actualOutput);
            setIsLoading(false);
          })
        )
        .catch((error) => console.error("Error:", error));
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleCodeChange = (value: string) => {
    setCode(value);
  };

  const handleRunCode = () => {
    gemini();
  };

  const handleDownloadSVG = () => {
    if (svgRef.current) {
      const svgData = new XMLSerializer().serializeToString(svgRef.current);
      const svgBlob = new Blob([svgData], {
        type: "image/svg+xml;charset=utf-8",
      });
      const svgUrl = URL.createObjectURL(svgBlob);
      const downloadLink = document.createElement("a");
      downloadLink.href = svgUrl;
      downloadLink.download = "flowchart.svg";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(svgUrl);
      //setIsLoading(false);
    }
  };
  return {
    languages,
    code,
    flowchartSvg,
    svgRef,
    handleCodeChange,
    handleRunCode,
    handleDownloadSVG,
    isLoading,
  };
}
