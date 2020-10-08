<template>
   <div>

     <div class="text-center">
        <h1>List des voitures</h1>
        <p> Voiture de l'utilisateur {{customer.firstName}} </p>

     </div>
        <form id="create-post-form" @submit.prevent="createCar">
              <div class="form-group col-md-12">
               <label for="firstName"> nameBrand </label>
               <input type="text" id="nameBrand" v-model="nameBrand" name="nameBrand" class="form-control" placeholder="Enter nameBrand">
              </div>
             <div class="form-group col-md-12">
                 <label for="lastName"> numModel </label>
                 <input type="text" id="numModel" v-model="numModel" name="numModel" class="form-control" placeholder="Enter numModel">
             </div>

             <div class="form-group col-md-4 pull-right">
                 <button class="btn btn-success" type="submit"> Create Car </button>
             </div>
        </form>

       <div class="row">
          <div class="col-md-4" v-for="car in customer.cars" :key="car.id">
             <div class="card mb-4 shadow-sm">
               <div class="card-body">
                  <h2 class="card-img-top">{{ car.nameBrand }}</h2>
                  <p class="card-text">{{ car.numModel }}</p>

                 <div class="d-flex justify-content-between align-items-center">
                   <div class="btn-group" style="margin-bottom: 20px;">
                      <router-link :to="{name: 'Cars', params: {id: car.id}}" class="btn btn-sm btn-outline-secondary">View Cars</router-link>
                      <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteCar(car.id)">Delete Car </button>
                   </div>
                 </div>
               </div>
             </div>
           </div>
     </div>
   </div>
</template>
<!-- Inspiration du script dans Home.vue  /!-->

<script>
import axios from "axios";
import { server } from "../../utils/helper";
import router from "../../router";

export default 
{
    data(){
        return {
            id: 0,
            fisrtName:"",
            lastName: "",
            cars: [],
            nameBrand: "",
            numModel: "",
            customer: {}
        };
    },
    createdCar(){
        this.id = this.$route.params.id;
        this.fetchCars(this.id);
    },
    methods: {
        createCar() {
            let carData = {
            nameBrand: this.nameBrand,
            numModel: this.numModel,
            customerIDs: this.$route.params.id,
        };
        this.__submitToServer(carData);
        },
        __submitToServer(data) {
            axios.post(`${server.baseURL}/car/create`, data).then(data => {
            router.push({ name: "home" });
            });
        },
        fetchCars(id){
            axios
            .get(`${server.baseURL}/customer/cars?customerID=${id}`)
            .then(data => (this.cars = data.data));
        },
        deleteCar(id) {
            axios.delete(`${server.baseURL}/car/delete?carID=${id}`).then(data => {
            console.log(data);
            window.location.reload();
     });
   }

    }
};
</script>
