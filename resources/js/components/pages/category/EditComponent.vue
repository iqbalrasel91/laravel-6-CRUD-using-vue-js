<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center ">
                        <h5 class="mb-0 "> Edit Category -{{ categoryForm.name}}</h5>

                        <router-link :to="{ name: 'category'}" class="btn btn-success">Category List</router-link>

                    </div>

                    <div class="card-body">

                        <div class="row">
                            <div class="col-5 offset-3">
                                <form @submit.prevent="updateCategory">
                                    <div class="form-group">
                                        <label>Name</label>

                                        <input v-model="categoryForm.name" type="text" name="name"
                                               class="form-control" :class="{ 'is-invalid': categoryForm.errors.has('name') }">
                                        <has-error :form="categoryForm" field="name"></has-error>

                                    </div>



                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Form, HasError, AlertError } from 'vform'

    Vue.component(HasError.name, HasError)
    Vue.component(AlertError.name, AlertError)
    export default {

        data(){
            return {
                categoryForm: new Form({
                    name: '',
                })
            }
        },
        methods:{
            getSingleCategory(){
                let uri = `/api/category/${this.$route.params.id}/edit`;
                axios.get(uri).then((response) => {
                  this.categoryForm.name=response.data.name;
                });
            },
            updateCategory(){

                this.categoryForm.put(`/api/category/${this.$route.params.id}`).then(() => {
                    this.$toast.success({
                        title:'Success',
                        message:'Category updated Successfully'
                    })
                })

            }
        },
        mounted() {
           this.getSingleCategory();
        }
    }
</script>
