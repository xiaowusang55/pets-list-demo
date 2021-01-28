<template>
  <div id="PetsList">
    <ul>
      <li v-for="(value, key, index) in catsList" :key="index">
        <h4>{{ key }}</h4>
        <p v-for="cat in value" :key="cat.name">{{ cat.name }}</p>
      </li>
    </ul>
    <BaseLoading :is-show="showLoading" />
  </div>
</template>

<script>
import BaseLoading from '@/components/BaseLoading';
import axios from 'axios';

export default {
  name: 'PetsList',
  components: {
    BaseLoading,
  },
  data() {
    return {
      list: [], // 总数据
      showLoading: false, // 是否显示loading
    };
  },
  computed: {
    catsList() {
      return this.list.reduce((acc, cur) => {
        acc[cur.gender] = cur.pets ? this.filterCatsAndSort([...cur.pets]) : [];
        return acc;
      }, {});
    },
  },
  created() {
    this.fetchPetsList();
    this.showLoading = true;
  },
  methods: {
    filterCatsAndSort(arr) {
      const catsArr = arr.filter(pet => pet.type === 'Cat');
      catsArr.sort((a, b) => a.name.localeCompare(b.name));
      return catsArr;
    },
    async fetchPetsList() {
      try {
        const resRaw = await axios.get(
          'https://5c92dbfae7b1a00014078e61.mockapi.io/owners'
        );
        this.list = resRaw.data || [];
      } catch (e) {
        alert(e);
      } finally {
        this.showLoading = false;
      }
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
