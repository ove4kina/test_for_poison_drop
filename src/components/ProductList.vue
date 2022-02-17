<template>
    <div class="products">
        <product-component/>
    </div>
</template>

<script>
import ProductCard from '@/components/ProductCard' 

export default {
    components: {
        'product-component' : ProductCard,
    }
}
</script>

<style lang="scss" scoped>
.products {
    display: grid;
    row-gap: 16px;
    padding: 30px 0;
    grid-template-columns: 1fr;
    &__item {
        max-width: 320px;
        width: 100%;
        justify-self: center;
    }
    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        &__item {
            max-width: none;
        }
    }
    @media screen and (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 30px;
    }
}
</style>

