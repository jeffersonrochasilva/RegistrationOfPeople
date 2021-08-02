<template>
  <div class="home">
    <div v-for="item in dados" :key="item.id" class="container">
      <h1>{{ item.nome }}</h1>
      <h1>{{ item.sobrenome }}</h1>
      <h1>{{ item.email }}</h1>
      <h1>{{ item.id }}</h1>
      <button class="excluir" @click="excluir($event, item.id)">excluir</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dados: [],
    };
  },
  mounted() {
    this.carregardados();
  },
  methods: {
    async carregardados() {
      const { data } = await axios.get("http://localhost:3000/clientes");
      this.dados = data;
    },
    async excluir(e, id) {
      e.preventDefault();
      const { data } = await axios.delete(
        `http://localhost:3000/clientes/${id}`
      );
      this.carregardados();
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  // height: 100%;
  background: #f77f62;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.container {
  width: 50%;
  max-width: 700px;
  height: 360px;
  padding: 20px;
  background: #fff;
  margin: 10px;
  border-radius: 6px;
  box-shadow: 6px 6px 10px rgb(112, 97, 97);
  border: 30px inset orangered;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.excluir {
  width: 90px;
  height: 30px;
  background: #f77f62;
  border-radius: 4px;
  border-style: none;
  box-shadow: 3px 3px 9px rgb(112, 97, 97);
  color: #fff;
}
h1 {
  // box-shadow: 3px 3px 9px rgb(112, 97, 97);
}
</style>
