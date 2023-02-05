export default {
  functional: true,
  render (h, context) {
    let data = context.slots().default[0].children[0].text.split('\n')
    data = data.map(str => str.split('|').map(s => s.trim()))
    const header = data.splice(0, 1)[0]
    return h('v-simple-table', {
        props: {
          dense: true,
        },
      }, [
        h('thead', [
          h('tr', header.map(s => h('th', s))),
        ]),
        h('tbody', data.map(arr => h('tr', [
          arr.map(s => h('td', s)),
        ]))),
      ],
    )
  },
}
