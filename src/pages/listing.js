// used by routes.js;
// placing it here to generate shorter string lengths as keys
// https://github.com/mrmlnc/fast-glob#pattern-syntax

// { dot: true } vite2 怎么设置
const dot = import.meta.glob('./**/.*.md');
const others = import.meta.glob('./**/*.md');
export default { ...dot, ...others };
