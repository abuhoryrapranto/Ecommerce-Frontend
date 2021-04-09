<template>
    <div class="row justify-content-md-center">
            <div class="">
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    </div>
                                    <small class="text-danger" v-if="errors.full_name">{{errors.full_name[0]}}</small>
                                    <small class="text-danger" v-else>{{fullNameError}}</small>
                                        <div class="form-group">
                                            <input 
                                                type="text" 
                                                class="form-control form-control-user"
                                                :class="{'is-invalid': errors.full_name || fullNameError}"
                                                v-model="full_name"
                                                placeholder="Full Name"
                                            >
                                        </div>
                                        <small class="text-danger" v-if="errors.phone">{{errors.phone[0]}}</small>
                                        <small class="text-danger" v-else>{{phoneError}}</small>
                                        <div class="form-group">
                                            <input 
                                                type="number" 
                                                class="form-control form-control-user"
                                                :class="{'is-invalid': errors.phone || phoneError}"
                                                v-model="phone"
                                                placeholder="Phone"
                                            >
                                        </div>
                                        <small class="text-danger" v-if="errors.password">{{errors.password[0]}}</small>
                                        <small class="text-danger" v-else>{{passwordError}}</small>
                                        <div class="form-group">
                                            <input 
                                                type="password" 
                                                class="form-control form-control-user"
                                                :class="{'is-invalid': errors.password || passwordError}"
                                                v-model="password"
                                                placeholder="Password"
                                            >
                                        </div>
                                        <button
                                            type="button" 
                                            class="btn btn-primary btn-user btn-block"
                                            :disabled="buttonDisabled"
                                            @click.prevent="saveUser"
                                        >
                                            Register Account
                                        </button>
                                        <hr>
                                        <!-- <a href="index.html" class="btn btn-google btn-user btn-block">
                                            <i class="fab fa-google fa-fw"></i> Register with Google
                                        </a>
                                        <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                            <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                        </a> -->
                                    <!-- <hr>
                                    <div class="text-center">
                                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                                    </div> -->
                                    <div class="text-center">
                                        <NuxtLink class="small" to="/login">Already have an account? Login!</NuxtLink>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        </div>
</template>


<script>
import axios from 'axios'
export default {
    data() {
        return {
            full_name: '',
            phone: '',
            password: '',
            errors: {},
            fullNameError: '',
            phoneError: '',
            passwordError: '',
            buttonDisabled: false

        }
    },

    watch: {
    full_name(){
      if(this.full_name == '' ) {
          this.buttonDisabled = true;
          this.fullNameError = 'Full name can not be empty.';
      }else {
          this.buttonDisabled = false;
          this.fullNameError = '';
      }
    },

    phone(){
      if(this.phone.length < 10 ) {
          this.buttonDisabled = true;
          this.phoneError = 'Phone can not be less than 10 digits.';
      } else if(this.phone.length > 10 ) {
          this.buttonDisabled = true;
          this.phoneError = 'Phone can not be less than 10 digits.';
      }else {
          this.buttonDisabled = false;
          this.phoneError = '';
      }
    },

    password(){
      if(this.password.length < 6 ) {
          this.buttonDisabled = true;
          this.passwordError = 'Password can not be less than 6 digits.';
      }else {
          this.buttonDisabled = false;
          this.passwordError = '';
      }
    },
  },

    methods: {
        async saveUser() {
            this.buttonDisabled = true;
            await this.$axios.$post('/save-user', {
                    full_name: this.full_name,
                    phone: this.phone,
                    password: this.password
            })
            .then(response => {
                this.$auth.loginWith('local', { 
                    data: {
                        phone: this.phone,
                        password: this.password
                    }
                 })
                //console.log(response);
            })
            .catch(err => {
                this.buttonDisabled = false;
                this.errors = err.response.data.errors || {};
            })

        }
    },
     head() {
    return {
      title:"Signup"
    }
  }
}
</script>