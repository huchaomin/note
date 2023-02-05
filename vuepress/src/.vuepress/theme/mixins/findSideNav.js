export default {
  computed: {
    sideNav () {
      return this.$site.themeConfig.sideNav
    },
    currentNavId () {
      const currentPath = this.$page.regularPath
      const currentNavObj = this.findNavObjByKey('routerPath', currentPath)
      return currentNavObj ? currentNavObj.id : null
    },
  },
  methods: {
    findNavObjByKey (key, value) {
      const find = function (arr, k, v) {
        for (let i = 0; i < arr.length; i++) {
          const obj = arr[i]
          if (encodeURI(obj[key]) === value) {
            return obj
          } else if (obj.children) {
            const result = find(obj.children, k, v)
            if (result) return result
          }
        }
      }
      return find(this.sideNav, key, value)
    },

    getAllParentsById (id) {
      const tmp = []
      const find = function (arr, iid) {
        for (let i = 0; i < arr.length; i++) {
          const obj = arr[i]
          if (obj.id === iid) {
            return obj
          } else if (obj.children) {
            const result = find(obj.children, iid)
            if (result) {
              tmp.push(obj)
              return result
            }
          }
        }
      }
      find(this.sideNav, id)
      return tmp
    },
  },
}
