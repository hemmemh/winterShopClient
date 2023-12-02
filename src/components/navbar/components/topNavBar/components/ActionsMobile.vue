<template lang="">
    <div class="body-navbar__actions actions-navbar _media">
        <button @click="setMenuFun(!this.menu)" type="button" class="menu__icon icon-menu" :class="{'active': this.menu == true}"><span></span></button>
        <div  @click="$router.push('/love')" class="actions-navbar__action _icon-star-winter"><span>ИЗБРАННОЕ</span></div>
        <div  @click="$router.push('/basket')" class="actions-navbar__action _icon-cart-winter"><span>КОРЗИНА</span></div>
    </div>
</template>
<script>
import { mapMutations,mapState } from 'vuex'

export default {
    methods:{
        ...mapMutations({
             setMenu:'navbar/setMenu'
        }),
        setMenuFun(bool){
            this.setMenu(bool)
            if (bool && window.innerWidth <= 767.98) {
               document.body.classList.add('hidden')
             }else{
               document.body.classList.remove('hidden')
             }
          
        },
    },
    computed:{
        ...mapState({
            menu:state=>state.navbar.menu
        })
    }
}
</script>
<style lang="">
    
</style>