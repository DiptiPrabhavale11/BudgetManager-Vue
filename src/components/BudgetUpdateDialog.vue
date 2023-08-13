<template>
    <v-dialog v-model="dialog" persistent width="1000">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" class="mt-2" size="x-small" color="#5157BF" icon="mdi-plus">
                <v-icon size="small" color="white">mdi-plus</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Update Categories</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-autocomplete 
                            v-model="category"
                            :items="categories" 
                            item-title="name" 
                            :item-value="item" 
                            label="Category*" required></v-autocomplete>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field type="number" v-model="amount" label="Amount"></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
                <br/>
                <small v-if="errorFlag" style="color: red;">Your budget is exceeding</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                    Close
                </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="saveBudget">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    data: () => ({
        dialog: false,
        category:null,
        amount:0,
        errorFlag:false,
    }),
    computed:{
       categories(){
        console.log("fetchCategories 11", this.$store.getters.getCategories)
        return this.$store.getters.getCategories;
       } 
    },
    methods:{
        saveBudget(){
            console.log(this.$store)
            console.log(this.category, this.amount);
            // this.errorFlag = true;
            this.$store.dispatch("updateCategories",{name:this.category, spent: Number(this.amount)});
            this.dialog = false;
        }
    }
}
</script>