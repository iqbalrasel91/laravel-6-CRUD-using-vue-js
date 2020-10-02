<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center ">
                        <h5 class="mb-0 "> Categories</h5>

                        <router-link :to="{ name: 'category-create'}" class="btn btn-success">Create Category</router-link>

                    </div>

                    <div class="card-body">
                        <table class="table">
                            <thead>
                            <tr>

                                <th scope="col">Name</th>
                                <th scope="col">Slug</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="category in categories" :key="category.id">
                                <td>{{ category.name }}</td>
                                <td>{{ category.slug }}</td>
                                <td>

                                   <router-link :to="{name: 'category-edit',params: { id: category.id}}" class="btn btn-primary btn-sm">Edit</router-link>
                                   <a href="#" class="btn btn-danger btn-sm" @click.prevent="deleteCategory(category.id)">Delete</a>
                                </td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                categories: [],
            }
        },

        methods:{
            getCategoryData(){

                axios.get('/api/category').then(response => {
                    this.categories = response.data;
                    //console.log(response.data);
                });
            },
            deleteCategory(id)
            {
                axios.delete(`/api/category/${id}`).then(response => {

                    this.categories.splice(this.categories.indexOf(id), 1);
                    console.log(response);
                    this.$toast.success({
                        title:'Success',
                        message:'Category deleted Successfully'
                    })
                });
            }
        },
        mounted() {
            this.getCategoryData();
        }
    }
</script>
