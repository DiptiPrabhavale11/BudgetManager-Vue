<template>
    <v-card class="mx-auto overflow-hidden">
        <v-app-bar dark>
            <v-flex width="100" class="ml-2">
                <v-img width="40" height="40" src="../../public/logo.png"></v-img>
            </v-flex>
            
            <v-text class="ml-2 text-h5 pa-2" append-icon="mdi-school-outline"
                style="color: #5157BF;">Budgetwise</v-text>
            <v-row class="ml-5">
                <v-tabs :align-with-title="align" style="color: #707070;">
                    <v-tab>Home</v-tab>
                    <v-tab>Community</v-tab>
                    <v-tab>FAQ</v-tab>
                </v-tabs>
            </v-row>

            <v-spacer></v-spacer>
            <v-avatar class="mr-4" image="DiptiPrabhavale.jpeg">
            </v-avatar>
            <v-text class="mr-2">Dipti Prabhavale</v-text>
            <v-icon class="mr-2" dark>mdi-chevron-down</v-icon>
        </v-app-bar>

        <v-navigation-drawer permanent location="left" width="200">
            <v-list density="compact" nav>
                <v-list-item class="text-subtitle-1" v-for="item in menu" :title="item.name" :value="item.name">
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>
<script>
export default {
    data: () => ({
        drawer: false,
        menu: [{ name: "Overview" },
        { name: "Budget" },
        { name: "Transaction" },
        { name: "Trends" },
        { name: "Saving Goals" },
        { name: "Alerts" }],
        align: true
    }),
}
</script>