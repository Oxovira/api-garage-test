<template>
  <div>
       <div class="col-md-12 form-wrapper">
         <h2> Create Customer </h2>
         <form id="create-post-form" @submit.prevent="createCustomer">
              <div class="form-group col-md-12">
               <label for="firstName"> firstName </label>
               <input type="text" id="firstName" v-model="firstName" name="firstName" class="form-control" placeholder="Enter firstName">
              </div>
             <div class="form-group col-md-12">
                 <label for="lastName"> lastName </label>
                 <input type="text" id="lastName" v-model="lastName" name="lastName" class="form-control" placeholder="Enter lastName">
             </div>

             <div class="form-group col-md-4 pull-right">
                 <button class="btn btn-success" type="submit"> Create Customer </button>
             </div>
         </form>
       </div>
   </div>
</template>

<script>
import axios from "axios";
import { server } from "../../utils/helper";
import router from "../../router";
export default {
 data() {
   return {
     firstName: "",
     lastName: "",
   };
 },
 methods: {
   createCustomer() {
     let customerData = {
       firstName: this.firstName,
       lastName: this.lastName,
     };
     this.__submitToServer(customerData);
   },
   __submitToServer(data) {
     axios.post(`${server.baseURL}/customer/create`, data).then(data => {
       router.push({ name: "home" });
     });
   }
 }
};
</script>