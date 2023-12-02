<template lang="">
   <div :style="{minHeight:navMenuRef?.offsetHeight  + 30 + 'px'}" class="product-catalog__body">
        <div class="product-catalog__grid" :class="{'active':nav}">
             <ItemVue  v-for="product in products.responce" :key="product._id" :product="product"/>
        </div>
        <div class="Catalog__navigation navigation-catalog">
            <MyPaginationVue :length="Math.ceil(products.count / limit)" :visible="4" :paginationClass="'catalog'" :modelValue="page" @update:modelValue="e=>setPage(e)"  >
                            <template #arrowLeft>
                                <div class="navigation-catalog__arrow _left">
                                    <img src="@/images/catalog/arrow.png" alt="">
                                </div>
                            </template>
                            <template #arrowRight>
                                <div class="navigation-catalog__arrow _right">
                                    <img src="@/images/catalog/arrow.png" alt="">
                                </div>
                            </template>
            </MyPaginationVue>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import ItemVue from '../../../elements/Item.vue'
import MyPaginationVue from '../../../UI/MyPagination.vue'

export default {
   components:{
    ItemVue,
    MyPaginationVue
   },
   computed:{
        ...mapState({
            products:state=>state.product.products,
            page:state=>state.product.page,
            navMenuRef:state=>state.product.navMenuRef,
            limit:state=>state.product.limit,
           
        }),
    },
    methods: {
        ...mapMutations({
            setProducts:"product/setProducts",
            setPage:"product/setPage",
           
        })
    },
}
</script>
<style lang="">
    
</style>