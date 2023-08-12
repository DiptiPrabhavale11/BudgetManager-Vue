<template>
    <v-card class="mx-auto overflow-hidden" height="400">
        <v-app-bar dark>
            <v-flex width="100" class="ml-2" style="background-color: blueviolet;border-radius: 15%;" >
                <v-icon color="white">mdi-currency-usd</v-icon>
            </v-flex>
            <v-toolbar-title  append-icon="mdi-school-outline" style="color: blueviolet;">Budgetwise</v-toolbar-title>
            <v-tabs :align-with-title="align" class="ml-0">
                <v-tab>Home</v-tab>
                <v-tab>Community</v-tab>
                <v-tab>FAQ</v-tab>
            </v-tabs>
            <v-avatar class="mr-4">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-avatar>
            <v-text class="mr-2">Dipti Prabhavale</v-text>
            <v-icon class="mr-2" dark>mdi-chevron-down</v-icon>
        </v-app-bar>

        <v-navigation-drawer permanent location="left" width="200">
            <!-- <template v-slot:prepend>
                <v-list-item lines="two" prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
                    title="Jane Smith" subtitle="Logged in"></v-list-item>
            </template>

            <v-divider></v-divider> -->

            <v-list density="compact" nav>
                <v-list-item class="text-subtitle-1" v-for="item in menu" 
                :title="item.name"
                :value="item.name">
                </v-list-item>
                
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>
<script>
export default {
    data: () => ({
        drawer: false,
        menu: [{name:"Overview"}, 
        {name:"Budget"}, 
        {name:"Transaction"}, 
        {name:"Trends"},
        {name:"Saving Goals"},
        {name:"Alerts"}],
        align: true
    }),
}
</script>