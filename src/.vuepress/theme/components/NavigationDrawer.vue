<template>
<v-navigation-drawer
  v-model="show"
  :mobile-breakpoint="900"
  app
  clipped
  width="300">
  <v-text-field
    v-model="search"
    append-icon="mdi-magnify"
    class="mx-2 mt-3"
    clear-icon="mdi-close-circle-outline"
    clearable
    dense
    hide-details="auto"
    label="查找笔记文件"
    outlined
  ></v-text-field>
  <v-treeview
    :active.sync="active"
    :items="sideNav"
    :open.sync="open"
    :search="search"
    activatable
    hoverable
    open-on-click
    transition
    @update:active="leafClick">
    <template v-slot:prepend="{ item, open }">
      <v-icon v-if="item.isDirectory">
        {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
      </v-icon>
      <v-icon v-else>mdi-file-document-outline</v-icon>
    </template>
    <template v-slot:label="{ item }">
      <v-tooltip
        :disabled="!show || $vuetify.breakpoint.mobile"
        :open-delay="1000"
        color="#02a95e"
        right>
        <template v-slot:activator="{ on, attrs }">
          <div
            v-if="item.isDirectory"
            class="leaf-label"
            v-bind="attrs"
            v-on="on">
            {{ item.name }}
          </div>
          <a v-else
             :href="item.routerPath"
             class="leaf-label"
             v-bind="attrs"
             v-on="on"
             @click.prevent="">
            {{ item.name }}
          </a>
        </template>
        <span>{{ item.name }}</span>
      </v-tooltip>
    </template>
  </v-treeview>
</v-navigation-drawer>
</template>
<script>
import findSideNav from '../mixins/findSideNav.js'

export default {
  mixins: [findSideNav],
  data () {
    return {
      show: !this.$vuetify.breakpoint.mobile,
      search: null,
      open: [],
      active: [],
    }
  },
  watch: {
    '$page': {
      handler () {
        this.focusItem()
      },
      immediate: true,
    },
  },
  methods: {
    toggleDrawer (flag) {
      if (flag === undefined) {
        this.show = !this.show
        if (this.show) {
          this.$emit('show')
        }
      } else {
        this.show = flag
      }
    },
    leafClick (itemArr) {
      if (itemArr.length === 0) return
      const navObj = this.findNavObjByKey('id', itemArr[0])
      if (!navObj) return
      const path = navObj.routerPath
      if (this.$page.regularPath === encodeURI(path)) return
      this.$router.push({ path })
    },
    focusItem () {
      const currentNavId = this.currentNavId
      if (currentNavId) {
        if (!this.active.includes(currentNavId)) {
          this.active.push(currentNavId)
        }
        const shouldOpenArr = this.getAllParentsById(currentNavId)
        shouldOpenArr.forEach(o => {
          const id = o.id
          if (!this.open.includes(id)) {
            this.open.push(id)
          }
        })
      } else {
        this.active.splice(0)
        this.open.splice(0)
      }
    },
  },
}
</script>
<style lang="stylus" scoped>
.v-navigation-drawer {
  border-top: 1px solid $border
  border-bottom: 1px solid $border
}

.v-treeview {
  font-size: 0.85rem;
  font-weight: normal;
}

.v-treeview >>> .v-treeview-node.v-treeview-node--shaped .v-treeview-node__root {
  margin: 0;
}

.v-treeview >>> .v-treeview-node__root {
  min-height: 32px;
}

.v-treeview >>> .v-treeview-node__content {
  margin-left: 4px;
  min-height: inherit;
}

.v-treeview >>> .v-treeview-node__label {
  min-height: inherit;
}

.v-treeview >>> .v-treeview-node__label .leaf-label {
  min-height: inherit;
  display: flex;
  align-items: center;
  color: inherit;
}
</style>
