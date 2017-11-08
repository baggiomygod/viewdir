module.exports = {
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "on-console": ["error", { // 关闭：off 警告：warn 报错：error
            "allow": ["warn", "error", "info"] // 允许写：console.error console.info console.warn
        }]
    },
    "parser": "balbel-eslint", // 制定自己的解析器
    "parserOptions": { 
        "ecmaVersion": 6, // es6
        "sourceType": "script" // script module
    },
    "globals": {
        // "window": true // 制定全局变量---脚本在执行期间访问的额外的全局变量
    },
    "env": { // 环境
        // "borwser": true, // 浏览器环境
        "node": true, // node 环境
        "es6": true, 
        "mocha": true
    }    
};