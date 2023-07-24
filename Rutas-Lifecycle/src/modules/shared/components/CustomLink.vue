<template>
    <div>
        <a v-if="isExternalLink"
            target="_blank"
            :class="'normal-link'"
            :href="link.to">
                {{ link.name }}
        </a>
        
        <RouterLink 
            v-else
            :to="route"
            v-slot="{ isActive }">
            <!-- href, isActive  -->
            <a 
                :class="isActive ? 'is-active' : 'normal-link'">
                {{ link.name }}
            </a>
        </RouterLink>
    </div>
</template>

<script>
export default {
  props: {
    link: {
        type: Object,
        required: true
    }
  },
  computed: {
    isExternalLink() {
        return this.link.to.startsWith('http')
    },
    // Cambiar los parametros de la ruta
    route() {
        return !this.link.id 
                    ? { name: this.link.to } 
                    : { name: this.link.to, params: { pokemonId: this.link.id } }

    }
  }
}
</script>

<style>
.isActive {
    color: whitesmoke;
}
.normal-link {
    color: #c6c5c5;
}
</style>