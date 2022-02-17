<template>
    <div class="card" v-for="(item, index) in this.FILTER_PRODUCTS" 
        :key="index">
        <router-link  :to = "`/product/${index + 1}`">
            <h3 class="card__title">{{item.title}}</h3>
            <div class="card__image">
                <img :src="item.image" :alt="item.title">
            </div>
        </router-link>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'


export default {
    computed: {
        ...mapGetters(['FILTER_PRODUCTS'])
    },
}
</script>

<style lang="scss" scoped>
.card {
    background-color:rgb(241, 227, 209);
    cursor: pointer;
    transition: all .4s;
    &:hover {
        -webkit-box-shadow: 4px 4px 16px 0px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 4px 4px 16px 0px rgba(34, 60, 80, 0.2);
        box-shadow: 4px 4px 16px 0px rgba(34, 60, 80, 0.2);
    }
    &__title {
        font-size: 18px;
        padding: 16px;
        color: #000;
    }
    &__image {
        position: relative;
        padding-bottom: 100%;
        overflow: hidden;
        & img {
            position: absolute;
            top: 50%;
            left: 50%;
            max-width: 100%;
            transform: translate(-50%, -50%);
        }
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1200px) {
        font-size: 24px;
    }
}
</style>