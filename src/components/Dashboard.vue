<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="8" class="align-start">
                <v-row>
                    <v-col cols="8" class="align-start mr-5">
                        <v-row class="ml-2">
                            <v-text class="text-h6">Monthly Budget</v-text>
                            <v-icon dark>mdi-chevron-down</v-icon>
                        </v-row>
                        <v-row class="mb-2">
                            <v-card width="95" height="25" class="ml-5" style="background-color: #E6F5EA;">
                                <v-text class="text-caption ml-1" style="color:#53BD71">April, 2022</v-text>
                                <v-icon dark color="#53BD71" class="mb-1">mdi-menu-down</v-icon>
                            </v-card>
                        </v-row>

                    </v-col>
                    <v-col class="mr-5">
                        <v-icon size="small" class="mt-2 mr-1">mdi-share-variant-outline</v-icon>
                        <v-icon size="small" class="mt-2 mr-1">mdi-dots-vertical</v-icon>
                        <v-btn class="mt-2" size="x-small" color="#5157BF" icon="mdi-plus">
                            <v-icon size="small" color="white">mdi-plus</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-sheet class="pa-2">
                    <v-row>
                        <v-col sm="6" class="mb-2 ml-1">
                            <v-text class="text-subtitle-1 font-weight-medium">Categories</v-text>
                        </v-col>
                    </v-row>
                    <v-card flat v-for="item in progressMenu" :key="name" class="mb-4">
                        <v-row >
                            <v-col cols="9">
                                <v-btn style="display: inline-block;" size="x-small" :color="item.color" :icon="item.icon">
                                    <v-icon size="small" color="white">{{ item.icon }}</v-icon>
                                </v-btn>
                                <v-card-text style="display: inline-block;"
                                    class="text-center pa-0 ml-2 text-subtitle-1 font-weight-medium">
                                    <span>{{ item.name }}</span>
                                </v-card-text>
                                <v-card-text class="text-caption pa-0 ml-5 mb-2"
                                    style="color: #707070;margin-left: 9% !important;">
                                    Spent <span style="color: #53BD71;">${{ item.spent }}</span> of ${{ item.limit }}
                                </v-card-text>

                                <v-progress-linear :model-value="progressValue(item.spent, item.limit)"
                                    :color="item.color"></v-progress-linear>
                            </v-col>
                            <v-col cols="3">
                                <v-text class="text-subtitle-1 pa-3" style="color: #707070;">
                                    <span style="color: #53BD71;">
                                        ${{ item.limit - item.spent }}
                                    </span>
                                    <br /><span class="ml-4">left</span></v-text>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-sheet>
            </v-col>
            <v-col cols="4" order="7" class="align-end">
                <v-card width="300" height="100">
                    <v-row style="color: #707070;">
                        <v-col cols="4" class="text-center mt-2 text-subtitle-1 pa-2">
                            <v-text>Spent</v-text><br />
                            <v-text style="color: #FE5C5C;">$800</v-text>
                        </v-col>
                        <v-col cols="4" class="text-center mt-2 text-subtitle-1 pa-2">
                            <v-text>Available</v-text><br />
                            <v-text style="color: #53BD71;">$1200</v-text>
                        </v-col>
                        <v-col cols="4" class="text-center mt-2 text-subtitle-1 pa-2">
                            <v-text>Budget</v-text><br />
                            <v-text>$2000</v-text>
                        </v-col>
                    </v-row>
                    <v-row class="ma-3">
                        <v-progress-linear height="20" rounded :model-value="progressValue(800, 2000)"
                            color="#5157BF"></v-progress-linear>
                    </v-row>

                </v-card>
                <v-sheet class="pa-2 ma-2">
                    <v-card width="300" height="200" style="background-color: #53BD71;">

                    </v-card>
                    <v-card></v-card>
                    <v-card></v-card>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>

    <!-- <v-col sm="7" class="align-start" v-for="item in progressMenu" :key="name">
            <v-card flat>
                <v-btn style="display: inline-block;" size="x-small" :color="item.color" :icon="item.icon">
                    <v-icon size="small" color="white">{{ item.icon }}</v-icon>
                </v-btn>
                <v-card-title style="display: inline-block;"
                    class="text-center pa-0 ml-2 text-subtitle-1 font-weight-medium">
                    {{ item.name }}
                </v-card-title>
                <v-card-text class="text-caption pa-0 ml-5" style="color: #707070;">
                    Spent <span style="color: #53BD71;">${{ item.spent }}</span> of ${{ item.limit }}
                </v-card-text>
            </v-card>
            <v-progress-linear model-value="20" :color="item.color"></v-progress-linear>
        </v-col>
        <v-col sm="5" class="align-end">
            <v-card width="300" style="background-color: #53BD71;">
                AAAAAA</v-card>
            <v-card></v-card>
            <v-card></v-card>
        </v-col> -->
</template>
<script>
export default {
    data: () => ({
        progressMenu:
            [{ name: "Education", icon: "mdi-school-outline", color: "#46BDC6", spent: 40, limit: 100 },
            { name: "Entertainment", icon: "mdi-drama-masks", color: "#FF8301", spent: 10, limit: 50 },
            { name: "Food", icon: "mdi-food-fork-drink", color: "#213B80", spent: 68, limit: 150 },
            { name: "Groceries", icon: "mdi-bread-slice-outline", color: "#00BC38", spent: 100, limit: 200 },
            { name: "Healthcare", icon: "mdi-healthcare", color: "#AD3B9B", spent: 100, limit: 100 },
            { name: "Housing", icon: "mdi-home-city", color: "#FF373C", spent: 1750, limit: 1750 },
            { name: "Miscellaneous", icon: "mdi-shape", color: "#B0866D", spent: 0, limit: 50 },
            { name: "Office", icon: "mdi-", color: "#E4759D", spent: 0, limit: 20 },
            { name: "Pets", icon: "mdi", color: "#783F05", spent: 0, limit: 100 },
            { name: "Shopping", icon: "mdi-", color: "#386BBC", spent: 20, limit: 100 },
            { name: "Subscriptions", icon: "mdi-", color: "#4F7F88", spent: 35, limit: 50 },
            { name: "Transportation", icon: "mdi-", color: "#FFB900", spent: 30, limit: 100 },
            { name: "Travel", icon: "mdi-", color: "#8E7CC3", spent: 0, limit: 100 },
            { name: "Utilities", icon: "mdi-", color: "#009EDF", spent: 160, limit: 300 }],
        align: true
    }),
    methods: {
        progressValue(spent, limit) {
            return spent / limit * 100;
        }
    }
}
</script>