import * as types from './mutations-types'

const mutaions = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  }
}

export default mutaions
