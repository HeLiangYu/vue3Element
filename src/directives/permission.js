const removeEl = (el) => {
  el._parentNode = el.parentNode
  el._placeholderNode = document.createComment('auth')
  el.parentNode.replaceChild(el._placeholderNode, el)
}

const addEl = (el) => {
  el._parentNode.replaceChild(el, el._placeholderNode)
}

export const vPermission = {
  mounted(el) {
    removeEl(el)
  },
  updated(el, binding) {
    const { oldValue, value } = binding

    if (oldValue !== value) {
      if (value) addEl(el)
      else removeEl(el)
    }
  }
}
