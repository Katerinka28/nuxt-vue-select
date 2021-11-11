import Vue from 'vue'
import vSelect from 'vue-select'

export default function install({ router, store }) {
  Vue.component('v-select', vSelect)
}
