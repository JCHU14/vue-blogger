import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /** @type {import('./models/Post.js').Post[]} */
  posts: [],

<<<<<<< HEAD
  /** @type {import('./models/Post.js').Post | null} */
  activePost: null
=======
  profile: null
>>>>>>> 66a577de8a6215136299976dddce41a6001999e9
})
