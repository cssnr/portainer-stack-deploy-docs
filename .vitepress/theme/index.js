import DefaultTheme, { VPBadge } from 'vitepress/theme'
import '@catppuccin/vitepress/theme/macchiato/mauve.css'
import 'virtual:group-icons.css'
import './custom.css'

import StackTable from './components/StackTable.vue'

import Contributors from '@cssnr/vitepress-plugin-contributors'
import '@cssnr/vitepress-plugin-contributors/style.css'
import contributors from '../contributors.json'

// noinspection JSUnusedGlobalSymbols
export default {
    ...DefaultTheme,

    enhanceApp({ app }) {
        app.component('Badge', VPBadge)
        app.component('StackTable', StackTable)

        app.component('Contributors', Contributors)
        app.config.globalProperties.$contributors = contributors
    },
}
