import pluginVue from 'eslint-plugin-vue'
module.exports = {
    extends: [
        'plugin:vue/vue3-recommended',
        '@vue/eslint-config-typescript',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaVersion: 'latest',
    },
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        "vue/max-attributes-per-line": ["error", {
            "singleline": {
                "max": 3
            },
            "multiline": {
                "max": 1
            }
        }],
        "vue/mustache-interpolation-spacing": ["error", "always"]
    }
}