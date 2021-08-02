<template>
  <div class="cadastro">
    <div class="container">
      <div class="left">
        <div class="title">
          <strong class="titulo">Leard to code by watching others</strong>
        </div>
        <div class="text">
          <p>
            See how experienced developer save problems in real-time. watching
            scripted tutoriais is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
      </div>
      <div class="right">
        <button @click="mudar" class="top">
          <strong>it free 7 days</strong> then $20/mo. thereafter
        </button>
        <div class="campo">
          <input v-model="nome" type="text" placeholder="Digite seu nome" />
          <input
            v-model="sobrenome"
            type="text"
            placeholder="Digite seu sobrenome"
          />
          <input
            v-model="email"
            type="e-mail"
            placeholder="Digite seu E-mail"
          />
          <input
            v-model="senha"
            type="password"
            placeholder="Digite sua senha"
          />
          <button @click="logar" class="free">FAZER LOGIN</button>
        </div>
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
    };
  },
  methods: {
    mudar() {
      this.$router.push("/cadastrar");
    },
    async logar(e) {
      e.preventDefault();
      const { data } = await axios.get("http://localhost:3000/clientes", {
        params: {
          senha: this.senha,
          email: this.email,
        },
      });
      if (data.length > 0) {
        this.$router.push("/homepage");
      } else {
        alert("Usuario ou senha incorretos");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cadastro {
  width: 100%;
  height: 100%;
  background: #f77f62;
  display: flex;
  justify-content: center;
}
.container {
  height: 100%;
  width: 100%;
  max-width: 1170px;
  background: #f77f62;
  display: flex;
  justify-content: center;
}
.left {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.right {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.campo {
  width: 60%;
  height: 70%;
  max-height: 300px;
  background: #fff;
  padding: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0px 6px 10px rgb(112, 97, 97);
}
.top {
  width: 74%;
  height: 50px;
  background: rgb(104, 104, 255);
  border-radius: 4px;
  border-style: none;
  margin-bottom: 25px;
  font-style: weight;
  color: #fff;
  box-shadow: 6px 6px 10px rgb(112, 97, 97);
}
input {
  height: 40px;
  border-radius: 6px;
  border-color: rgb(197, 194, 194);
  // border-style: none;
  // background: rgb(221, 212, 212);
}

.free {
  height: 40px;
  background: rgb(79, 185, 79);
  border-radius: 4px;
  border-style: none;
  color: #fff;
}
// .title {
//   // height: 0%;
//   width: 90%;
// }
.titulo {
  font-size: 42px;
  color: #fff;
  font-family: sans-serif;
}
.title {
  width: 75%;
  display: flex;
  justify-content: center;
}

.text {
  margin-top: 15px;

  width: 75%;
}
p {
  color: #fff;
  font-family: sans-serif;
}
</style>
