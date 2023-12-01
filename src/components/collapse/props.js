export const collapseProps = {
  modelValue: {
    type: Array,
    default: []
  },
  accordion: {
    type: Boolean,
    default: false
  }
}

export const collapseItemProps = {
  title: {
    type: String,
    default: ''
  },
  name: {
    type: [String, Number],
    require: true
  }
}

export const collapseProvidekey = Symbol('collapseProvidekey')
