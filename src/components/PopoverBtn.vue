<template>
<a-popover placement="topLeft">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <a-button>TL {{msg}}</a-button>
      </a-popover>
</template>
<script>
export default {
  name: 'PopoverBtn',
  props: {
    msg : String
  }
}
</script>