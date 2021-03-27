<template>
    <div class="row justify-content-md-center">
            <div class="">
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <div class="alert alert-danger" v-if="serverMessage" role="alert">
                                        {{serverMessage}}
                                    </div>
                                    <small class="text-danger" v-if="errors.phone">{{errors.phone[0]}}</small>
                                        <div class="form-group">
                                            <input 
                                                type="number" 
                                                class="form-control form-control-user"
                                                :class="{'is-invalid': errors.phone}"
                                                v-model="phone"
                                                placeholder="Phone"
                                            >
                                        </div>
                                        <small class="text-danger" v-if="errors.password">{{errors.password[0]}}</small>
                                        <div class="form-group">
                                            <input 
                                                type="password" 
                                                class="form-control form-control-user"
                                                :class="{'is-invalid': errors.phone}"
                                                v-model="password"
                                                placeholder="Password"
                                            >
                                        </div>
                                        <button
                                            type="button" 
                                            class="btn btn-primary btn-user btn-block"
                                            :disabled="buttonDisabled"
                                            @click.prevent="login"
                                        >
                                            Login
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
                                        <NuxtLink class="small" to="/signup">Create an account? Signup!</NuxtLink>
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
            phone: '',
            password: '',
            errors: {},
            serverMessage: '',
            buttonDisabled: false

        }
    },
    methods: {
        async login() {
            this.buttonDisabled = true;
            try {
                let response = await this.$auth.loginWith('local', { 
                    data: {
                        phone: this.phone,
                        password: this.password
                    }
                 })
                 this.$router.push({ path: '/', redirect: 'actualRoute' });
            } catch (err) {
                this.buttonDisabled = false;
                this.errors = err.response.data.errors || {};
                if(err.response.data.message == "Password not match") {
                    this.serverMessage = err.response.data.message;
                }
            }
        }
    },

    head() {
        return {
        title: "Login"
        }
    }
}
</script>