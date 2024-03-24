<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="7" class="align-start">
                <v-row>
                    <v-col cols="7" class="text-start mr-5">
                        <v-row class="ml-2">
                            <v-text class="text-h6">Monthly Budget</v-text>
                            <v-icon dark class="mt-1 ml-1">mdi-chevron-down</v-icon>
                        </v-row>
                        <v-row class="mb-2">
                            <v-card width="95" height="25" class="ml-5" style="background-color: #E6F5EA;">
                                <v-text class="text-caption ml-1" style="color:#53BD71">April 2022</v-text>
                                <v-icon dark color="#53BD71" class="mb-1">mdi-menu-down</v-icon>
                            </v-card>
                        </v-row>

                    </v-col>
                    <v-col class="mr-5">
                        <v-icon size="small" class="mt-2 mr-1">mdi-share-variant-outline</v-icon>
                        <v-icon size="small" class="mt-2 mr-1">mdi-dots-vertical</v-icon>
                        <!-- <v-btn class="mt-2" size="x-small" color="#5157BF" icon="mdi-plus">
                            <v-icon size="small" color="white">mdi-plus</v-icon>
                        </v-btn> -->
                        <BudgetUpdateDialog class="pa-0"></BudgetUpdateDialog>
                    </v-col>
                </v-row>
                <v-sheet class="pa-2">
                    <v-row>
                        <v-col sm="6" class="mb-5 ml-1">
                            <v-text class="text-subtitle-1 font-weight-medium">Categories</v-text>
                        </v-col>
                    </v-row>
                    <v-card v-if="categories.length" flat v-for="item in categories" :key="name" class="mb-4">
                        <v-row>
                            <v-col cols="9">
                                <v-btn style="display: inline-block;" size="x-small" :color="item.color" :icon="item.icon">
                                    <v-icon size="small" color="white">{{ item.icon }}</v-icon>
                                </v-btn>
                                <v-card-text style="display: inline-block;"
                                    class="text-center pa-0 ml-2 text-subtitle-1 font-weight-medium">
                                    <span>{{ item.name }}</span>
                                </v-card-text>
                                <v-card-text class="text-caption pa-0 ml-5 mb-2 font-weight-medium"
                                    style="color: #707070;margin-left: 9% !important;">
                                    spent <span style="color: #53BD71;">${{ item.spent }}</span> of ${{ item.limit }}
                                </v-card-text>

                                <v-progress-linear height="5" :model-value="progressValue(item.spent, item.limit)"
                                    :color="item.color"></v-progress-linear>
                            </v-col>
                            <v-col cols="3" class="pa-0 mt-5">
                                <v-text class="text-subtitle-1" style="color: #707070;">
                                    <span v-if="item.limit >= item.spent" style="color: #53BD71;">
                                        ${{ item.limit - item.spent }}
                                    </span>
                                    <span v-if="item.limit < item.spent" class="lowBudget">
                                        - ${{ (item.limit - item.spent) * -1 }}
                                    </span>
                                    <br />
                                    <span class="text-caption text-right">left</span>
                                </v-text>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-sheet>
            </v-col>
            <v-col cols="5" class="align-end">
                <v-row>
                    <v-col cols="10">
                        <Statistics></Statistics>
                    </v-col>
                </v-row>

                <v-row class="mt-3">
                    <v-col cols="12" class="mb-1 ml-2 mt-4 pa-0">
                        <v-text class="text-center font-weight-medium">6 Month Snapshot</v-text>
                    </v-col>
                </v-row>
                <v-row class="mb-2">
                    <v-col cols="10">
                        <v-card height="270" class="pa-0">
                            <BarChart></BarChart>
                        </v-card>
                    </v-col>
                </v-row>
                <TransactionDetails></TransactionDetails>
                <BankAndCardDetails></BankAndCardDetails>
                <SavingGoals></SavingGoals>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import Statistics from './Statistics.vue';
import BarChart from './BarChart.vue';
import TransactionDetails from './TransactionDetails.vue';
import BankAndCardDetails from './BankAndCardDetails.vue';
import DonutChart from './DonutChart.vue';
import SavingGoals from './SavingGoals.vue';
import BudgetUpdateDialog from './BudgetUpdateDialog.vue';

export default {
    data: () => ({
        // progressMenu:
        //     [{ name: "Education", icon: "mdi-school-outline", color: "#46BDC6", spent: 40, limit: 100 },
        //     { name: "Entertainment", icon: "mdi-drama-masks", color: "#FF8301", spent: 10, limit: 50 },
        //     { name: "Food", icon: "mdi-food-fork-drink", color: "#213B80", spent: 68, limit: 150 },
        //     { name: "Groceries", icon: "mdi-bread-slice-outline", color: "#00BC38", spent: 100, limit: 200 },
        //     { name: "Healthcare", icon: "mdi-healthcare", color: "#AD3B9B", spent: 100, limit: 100 },
        //     { name: "Housing", icon: "mdi-home-city", color: "#FF373C", spent: 1750, limit: 1750 },
        //     { name: "Miscellaneous", icon: "mdi-shape", color: "#B0866D", spent: 0, limit: 50 },
        //     { name: "Office", icon: "mdi-", color: "#E4759D", spent: 0, limit: 20 },
        //     { name: "Pets", icon: "mdi", color: "#783F05", spent: 0, limit: 100 },
        //     { name: "Shopping", icon: "mdi-", color: "#386BBC", spent: 20, limit: 100 },
        //     { name: "Subscriptions", icon: "mdi-", color: "#4F7F88", spent: 35, limit: 50 },
        //     { name: "Transportation", icon: "mdi-", color: "#FFB900", spent: 30, limit: 100 },
        //     { name: "Travel", icon: "mdi-", color: "#8E7CC3", spent: 0, limit: 100 },
        //     { name: "Utilities", icon: "mdi-", color: "#009EDF", spent: 160, limit: 300 }],
        // transactions: [{ name: "Cold Brew", icon: "./Food.png", category: "food", amount: 5.92, date: "03-30-2022" },
        // { name: "Coursera", icon: "./education.png", category: "education", amount: 39.00, date: "03-12-2022" },
        // { name: "Apple Tree", icon: "./groceries.png", category: "groceries", amount: 3.68, date: "03-03-2022" },
        // { name: "BKST-U-PENN", icon: "./shopping.png", category: "shopping", amount: 39.89, date: "03-10-2022" }],
        align: true
    }),
    components: {
        Statistics,
        BarChart,
        TransactionDetails,
        BankAndCardDetails,
        DonutChart,
        SavingGoals,
        BudgetUpdateDialog
    },
    mounted() {
        this.$store.dispatch("fetchCategories").then((data) => {
            console.log("fetched", data)
        });
    },
    computed: {
        categories() {
            console.log("fetchCategories", this.$store.getters.getCategories)
            return this.$store.getters.getCategories;
        }
    },
    methods: {
        progressValue(spent, limit) {
            return spent / limit * 100;
        }
    }
}
</script>