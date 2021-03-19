const app = new Vue({
  el: "#app",
  data: {
    titulo: "Hola mundo con Vue",
    frutas: [
      { nombre: "manzana", cantidad: 4, precio: 10 },
      { nombre: "pera", cantidad: 0, precio: 50 },
      { nombre: "sandia", cantidad: 6, precio: 100 },
    ],
    nuevaFruta: "",
    cantFrutasTotal: 0,
  },
  methods: {
    agregarFruta() {
      this.frutas.push({
        nombre: this.nuevaFruta,
        cantidad: 0,
      });
      this.nuevaFruta = "";
    },
    eliminarFruta() {
      console.log("elimine");
    },
  },
  computed: {
    sumarCantFrutas() {
      this.cantFrutasTotal = 0;
      for (fruta of this.frutas) {
        this.cantFrutasTotal += fruta.cantidad;
      }
      return this.cantFrutasTotal;
    },
  },
});
