declare module 'js2flowchart' {
    export function convertCodeToFlowTree(code: string): any;
    export function convertFlowTreeToSvg(flowTree: any): string;
  }