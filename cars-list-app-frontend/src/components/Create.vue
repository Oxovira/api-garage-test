// ./src/components/customer/Create.vue
<template>
   <div>
        <div class="col-md-12 form-wrapper">
          <h2> Create Customer </h2>
          <form id="create-post-form" @submit.prevent="createCustomer">
               <div class="form-group col-md-12">
                <label for="title"> First Name </label>
                <input type="text" id="first_name" v-model="first_name" name="title" class="form-control" placeholder="Enter firstname">
               </div>
               <div class="form-group col-md-12">
                <label for="title"> Last Name </label>
                <input type="text" id="last_name" v-model="last_name" name="title" class="form-control" placeholder="Enter Last name">
               </div>
              <div class="form-group col-md-4 pull-right">
                  <button class="btn btn-success" type="submit"> Create Customer </button>
              </div>           </form>
        </div>
    </div>
</template>


// ./src/components/customer/Create.vue

...

<script>
import axios from "axios";
import { server } from "../../helper";
import router from "../../router";
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
    };
  },
  methods: {
    createCustomer() {
      let customerData = {
        first_name: this.first_name,
        last_name: this.last_name,
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