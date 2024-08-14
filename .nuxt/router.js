import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _23a9c2b5 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _dc2fb7ac = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _3a7e8470 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _39ecc930 = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _43619d7a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _41aafc32 = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _23a9c2b5,
    name: "about"
  }, {
    path: "/blog",
    component: _dc2fb7ac,
    name: "blog"
  }, {
    path: "/contact",
    component: _3a7e8470,
    name: "contact"
  }, {
    path: "/privacy",
    component: _39ecc930,
    name: "privacy"
  }, {
    path: "/",
    component: _43619d7a,
    name: "index"
  }, {
    path: "/:slug",
    component: _41aafc32,
    name: "slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
