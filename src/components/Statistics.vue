<template>
    <v-card height="120">
        <v-row style="color: #707070;" class="pa-1">
            <v-col cols="4" class="text-center mt-2 text-subtitle-1 pa-2">
                <v-card height="50" flat class="rounded-0 mt-1" style="border-right: solid 1px;color: #707070;">
                    <v-text>Spent</v-text><br />
                    <v-text style="color: #FE5C5C;">${{ spent }}</v-text>
                </v-card>

            </v-col>
            <v-col cols="4" class="text-center mt-2 text-subtitle-1 pa-2">
                <v-card height="50" flat class="rounded-0 mt-1" style="border-right: solid 1px;color: #707070;">
                    <v-text>Available</v-text><br />
                    <v-text style="color: #53BD71;">${{ budget - spent }}</v-text>
                </v-card>
            </v-col>
            <v-col cols="4" class="text-center mt-2 text-subtitle-1 pa-2">
                <v-text>Budget</v-text><br />
                <v-text>${{ budget }}</v-text>
            </v-col>
        </v-row>
        <v-row class="ma-3 mt-4">
            <v-progress-linear height="20" rounded :model-value="progressValue(800, 2000)"
                color="#5157BF"></v-progress-linear>
        </v-row>
    </v-card>
</template>
<script>
export default {
    data: () => ({
        // budget: 2000,
        // spent: 800
    }),
    computed:{
        spent(){
            return this.$store.getters.getSpent;
        },
        budget(){
            return this.$store.getters.getBudget;
        }
    },
    methods: {
        progressValue(spent, limit) {
            return spent / limit * 100;
        }
    }

}
</script>