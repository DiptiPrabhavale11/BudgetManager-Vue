<template>
    <v-row class="mb-4">
        <v-col cols="8" class="mt-3 ml-3 pa-0">
            <v-text class="text-center font-weight-medium">Recent Transactions</v-text>
        </v-col>
        <v-col cols="2" class="mt-1">
            <v-text class="text-center text-subtitle-2 font-weight-regular">See all</v-text>
        </v-col>
        <v-col cols="10" class="pa-0 ml-3">
            <v-card flat class="mt-1" v-for="record in transactions" :key="name" rounded height="70"
                style="border: solid 1px #DDDDDD;">
                <v-avatar style="display: inline-block;" class="pa-0 ml-2 mb-5">
                    <v-img :src="record.icon"></v-img>
                </v-avatar>

                <v-card-text style="display: inline-block;"
                    class="text-center pa-0 ml-3 mt-2 text-subtitle-1 font-weight-medium">
                    {{ record.name }}
                    <span class="text-caption font-weight-medium text-left" style="display: block;color: #707070;">
                        {{ record.category }}
                    </span>
                </v-card-text>

                <span style="display:inline-block; float:right;" class="mt-4 mr-3">
                    <v-icon dark class="mt-1 ml-1">mdi-chevron-right</v-icon>
                </span>

                <v-card-text style="display: inline-block;float:right;"
                    class="align-end text-right pa-0 mr-5 mt-3 text-subtitle-1 font-weight-medium">
                    ${{ record.amount }}
                    <span class="text-caption font-weight-medium text-left" style="display: block;color: #707070;">
                        {{ record.date }}
                    </span>
                </v-card-text>

            </v-card>

        </v-col>
    </v-row>
</template>
<script>
export default {
    data: () => ({
        transactions: [
            { name: "Cold Brew", icon: "./Food.png", category: "Starbucks", amount: 5.92, date: "03-30-2022" },
            { name: "Coursera", icon: "./education.png", category: "Education", amount: "39.00", date: "03-12-2022" },
            { name: "AppleTree", icon: "./groceries.png", category: "Groceries", amount: 3.98, date: "03-03-2022" },
            { name: "BKST-U-PENN", icon: "./shopping.png", category: "Shopping", amount: 49.89, date: "03-10-2022" }
        ],
    })
}
</script>