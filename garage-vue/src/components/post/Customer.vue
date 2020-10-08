<template>
   <div class="text-center">
       <div class="col-sm-12">
     <h4 style="margin-top: 30px;"><small><button class="btn btn-success" v-on:click="navigate()"> View All Customers </button></small></h4>
     <hr>
     <h2>{{ customer.firstName }}</h2>
     <p> {{ customer.lastName }} </p>
     <p> {{ customer.id }} </p>

   </div>
   </div>
</template>

<script>
import { server } from "../../utils/helper";
import axios from "axios";
import router from "../../router";
export default {
 data() {
   return {
     id: 0,
     customer: {}
   };
 },
 created() {
   this.id = this.$route.params.id;
   this.getCustomer();
 },
 methods: {
   getCustomer() {
     axios
       .get(`${server.baseURL}/customer/customer/${this.id}`)
       .then(data => (this.customer = data.data));
   },
   navigate() {
     router.go(-1);
   }
 }
};
</script>