<template>
    <div>
        
        <!-- <RouterLink :to="{ name: 'home' }">Pokemon List</RouterLink>
        <RouterLink :to="{ name: 'pokemon-id', params: { pokemonId: 4 } }">Pokemon por id</RouterLink>
        <RouterLink :to="{ name: 'about' }">About</RouterLink> -->

        <CustomLink 
            v-for="link in links"
            :key="link.to"
            :link="link"
        />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    data() {
        return {
            links: [
                { to: 'pokemon-home', name: 'Pokemons'},
                { to: 'pokemon-id', name: 'Por ID', id: 151 },
                { to: 'pokemon-about', name: 'About' },
                { to: 'dbz-characters', name: 'Personajes' },
                { to: 'dbz-about', name: 'DBZ-About' },
                { to: 'https://google.com', name: 'Google' },
            ]

        }
    },
    components: {
        CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
    }

}
</script>


<style scoped>

div {
    display: flex;
    padding: 0 30px;
}

div a {
    font-weight: bold;
    margin: 0 10px;
}

/* a.router-link-exact-active {
    color: whitesmoke;
} */

</style>