<template>
  <q-page>
    <pwa-message />

    <q-toggle
      :model-value="$q.dark.isActive"
      label="dark mode"
      @update:model-value="$q.dark.toggle()"
    />

    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    />
  </q-page>
</template>

<script setup lang="ts">
import PwaMessage from 'src/components/PwaMessage.vue'
import type { Todo, Meta } from 'components/models'
import ExampleComponent from 'components/ExampleComponent.vue'
import { ref } from 'vue'

const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1',
  },
  {
    id: 2,
    content: 'ct2',
  },
  {
    id: 3,
    content: 'ct3',
  },
  {
    id: 4,
    content: 'ct4',
  },
  {
    id: 5,
    content: 'ct5',
  },
])
const meta = ref<Meta>({
  totalCount: 1200,
})
</script>
