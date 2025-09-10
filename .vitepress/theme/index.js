import DefaultTheme, { VPBadge } from 'vitepress/theme'
import '@catppuccin/vitepress/theme/macchiato/mauve.css'
import 'virtual:group-icons.css'
import './custom.css'

import Contributors from './components/Contributors.vue'
import StackTable from './components/StackTable.vue'

// noinspection JSUnusedGlobalSymbols
export default {
    ...DefaultTheme,

    enhanceApp({ app }) {
        app.component('Badge', VPBadge)
        app.component('Contributors', Contributors)
        app.component('StackTable', StackTable)
    },
}
