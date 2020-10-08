<template>
   <div>

     <div class="text-center">
       <h1>Garage Test</h1>
      <p> Liste des utilisateurs enregistré </p>

      <div v-if="customers.length === 0">
           <h2> No Customer found at the moment </h2>
       </div>
     </div>

       <div class="row">
          <div class="col-md-4" v-for="customer in customers" :key="customer.id">
             <div class="card mb-4 shadow-sm">
               <div class="card-body">
                  <h2 class="card-img-top">{{ customer.firstName }}</h2>
                  <p class="card-text">{{ customer.lastName }}</p>
                 <div class="d-flex justify-content-between align-items-center">
                   <div class="btn-group" style="margin-bottom: 20px;">
                     <router-link :to="{name: 'Customer', params: {id: customer.id}}" class="btn btn-sm btn-outline-secondary">View Customer </router-link> |
                      <router-link :to="{name: 'Edit', params: {id: customer.id}}" class="btn btn-sm btn-outline-secondary">Edit Customer </router-link>
                      <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteCustomer(customer.id)">Delete Post  </button>
                   </div>
                 </div>
               </div>
             </div>
           </div>
     </div>
   </div>
</template>

<script>
// @ is an alias to /src
import { server } from "@/utils/helper";
import axios from "axios";

export default {
 data() {
   return {
     customers: []
   };
 },
 created() {
   this.fetchCustomers();
 },
 methods: {
   fetchCustomers() {
     axios
       .get(`${server.baseURL}/customer/customers`)
       .then(data => (this.customers = data.data));
   },
   deleteCustomer(id) {
     axios.delete(`${server.baseURL}/customer/delete?customerID=${id}`).then(data => {
       console.log(data);
       window.location.reload();
     });
   }
 }
};
</script>