<template>
  <div class="cadastrar">
    <div class="container">
      <input v-model="nome" type="text" placeholder="Digite seu nome" />
      <input
        v-model="sobrenome"
        type="text"
        placeholder="Digite seu sobrenome"
      />
      <input v-model="email" type="email" placeholder="Digite seu e-mail" />
      <input v-model="senha" type="password" placeholder="Digite sua senha" />
      <input
        v-model="confirmarsenha"
        type="password"
        placeholder="Confirme sua senha"
      />
      <div class="button">
        <button @click="cadastrar">Cadastrar</button>
        <button @click="voltar">Voltar</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      nome: "",
      sobrenome: "",
      email: "",
      senha: "",
      confirmarsenha: "",
    };
  },
  methods: {
    async cadastrar() {
      if (this.senha == this.confirmarsenha) {
        // alert("senhas são iguais");
        const data = await axios.post("http://localhost:3000/clientes", {
          nome: this.nome,
          sobrenome: this.sobrenome,
          email: this.email,
          senha: this.senha,
        });
        alert("usuario cadastrado");
        this.$router.push("/");
      } else {
        alert("senhas não são iguais");
      }
    },
    voltar() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.cadastrar {
  width: 100%;
  height: 100%;
  background: #303030;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  width: 40%;
  height: 50%;
  background: #252525;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.button {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
button {
  width: 90px;
  height: 40px;
  border-radius: 4px;
  border-style: none;
  background: #f77f62;
  color: #fff;
}
input {
  width: 100%;
  height: 35px;
  border-radius: 4px;
  border-style: none;
  padding: 5px;
}
</style>
