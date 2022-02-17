<template>
    <div class="search">
        <input v-model="value" 
        @input="this.updateValue"
        type="text" 
        class="search__input" 
        placeholder="Поиск...">
        <button @click="this.deleteResult">Очистить</button>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    data() {
        return {
            value: '',
        }
    },
    methods: {
        ...mapMutations(['UPDATE_SEARCH_VALUE']),
        updateValue() {
            this.UPDATE_SEARCH_VALUE(this.value);
        },
        deleteResult() {
            this.value = ''
            this.UPDATE_SEARCH_VALUE(this.value);
        }
    }
}

</script>


<style lang="scss" scoped>
.search{
    display: flex;
    justify-content: center;
    align-items: center;
    &__input {
        background-color: #fff;
        border: none;
        outline: none;
        border-radius: 5px;
        max-height: 64px;
        padding: 16px;
        font-size: 16px;
        -webkit-box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
    }
    button {
        background-color: #fff;
        color: indianred;
        outline: none;
        border: none;
        padding: 16px;
        border-radius: 5px;
        font-size: 16px;
        margin-left: 16px;
        -webkit-box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
    @media screen and (min-width: 768px) {
        justify-content: flex-start;
    }
} 

</style>