<template>
<div>
     <h4 class="text-center mt-20">
      <small>
        <button class="btn btn-success" v-on:click="navigate()"> View All Customer </button>
      </small>
   </h4>
       <div class="col-md-12 form-wrapper">
         <h2> Edit Customer </h2>
         <form id="edit-post-form" @submit.prevent="editCustomer">
            <div class="form-group col-md-12">
               <label for="firstName"> Modifier {{firstName}} </label>
               <input type="text" id="firstName" v-model="firstName" name="firstName" class="form-control" placeholder="firstName">
              </div>
             <div class="form-group col-md-12">
                 <label for="lastName"> Modifier {{lastName}} </label>
                 <input type="text" id="lastName" v-model="lastName" name="lastName" class="form-control" placeholder="lastName">
             </div>
           
           <div class="form-group col-md-4 pull-right">
               <button class="btn btn-success" type="submit"> Edit Customer </button>
           </div>
         </form>
       </div>
   </div>
</template>

<script>
import { server } from "../../utils/helper";
import axios from "axios";
import router from "../../router";
//https://www.codeflow.site/fr/article/how-to-build-a-blog-with-nest-js-mongodb-and-vue-js
export default {
 data() {
   return {
     id: 0,
     firstName: "",
     lastName: "",
   };
 },
 created() {
   this.id = this.$route.params.id;
   this.getCustomer();
 },
 methods: {
   editCustomer() {
     console.log("Call local editCustomer");
     let customerData = {
       id: this.id,
       firstName: this.firstName,
       lastName: this.lastName,
     };
     console.log("editCustomer ", customerData);
     this.__submitToServer(customerData);
   },
   __submitToServer(data)
   {
      axios
       .put(`${server.baseURL}/customer/edit`, data)
       .then(data => {
         router.push({ name: "home" });
       });
   },
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