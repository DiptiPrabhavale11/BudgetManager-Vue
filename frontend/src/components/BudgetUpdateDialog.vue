<template>
    <v-dialog v-model="dialog" persistent width="500">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" class="mt-2" size="x-small" color="#5157BF" icon="mdi-plus">
                <v-icon size="small" color="white">mdi-plus</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title class="mt-2">
                <span class="text-h5">Update Budget</span>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-autocomplete v-model="category" :items="categories" item-title="name" :item-value="item"
                            label="Category*" required></v-autocomplete>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field type="number" v-model="amount" label="Amount"></v-text-field>
                    </v-col>
                </v-row>

                <small>*indicates required field</small>
                <br />
                <small v-if="errorFlag" style="color: red;">Your budget is exceeding</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="#5157BF" @click="cancel">
                    Close
                </v-btn>
                <v-btn flat color="#5157BF" @click="saveBudget">
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
        category: null,
        amount: "",
        errorFlag: false,
    }),
    // created() {
    //     this.category = this.categories[0];
    // },
    computed: {
        categories() {
            return this.$store.getters.getCategories;
        }
    },
    methods: {
        saveBudget() {
            console.log(this.$store)
            console.log(this.category, this.amount);
            // this.errorFlag = true;
            this.$store.dispatch("updateCategories", { name: this.category, spent: Number(this.amount) });
            this.category = null;
            this.amount = "";
            this.dialog = false;
        },
        cancel(){
            this.category = null;
            this.amount = "";
            this.dialog = false;
        }
    }
}
</script>