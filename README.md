# require-extension-hooks-vue-svg

This is a plugin for `require-extension-hooks` to load .svg files in Node as Vue components. You need this if you are using Webpack's `vue-svg-loader` and doing browserless Vue components unit testing.

## Installation  
`npm i -D require-extension-hooks require-extension-hooks-babel require-extension-hooks-vue require-extension-hooks-vue-svg`

## Usage  

Assume you have Vue component `./components/menu.vue` which internally uses SVG as Vue component:

```html
<template>
  <nav id="menu">
    <a href="...">
      <Icon class="icon" />
      Menu Item
    </a>
  </nav>
</template>
 
<script>
import Icon from './components/assets/icon.svg';
 
export default {
  name: 'menu',
  components: {
    Icon,
  },
};
</script> 
```

Then you can import it in Node:

```javascript
const hooks = require('require-extension-hooks');
hooks('svg').plugin('vue-svg'));
hooks('vue').plugin('vue');
hooks(['vue', 'js']).plugin('babel');

const Menu = require('./components/menu.vue')
```
