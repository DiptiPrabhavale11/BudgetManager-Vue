<template>
    <v-row>
        <v-col cols="12" class="mt-1 ml-4 pa-0">
            <v-text class="text-center font-weight-medium">Bank & Credi Cards </v-text>
        </v-col>
        <v-col cols="10">
            <v-card flat v-for="record in cards" :key="name" rounded height="70"
                style="border: solid 1px #DDDDDD;">
                <v-avatar style="display: inline-block;" class="pa-0 ml-2 mb-5">
                    <v-img :src="record.icon"></v-img>
                </v-avatar>

                <v-card-text style="display: inline-block;"
                    class="text-center pa-0 ml-3 mt-3 text-subtitle-1 font-weight-medium">
                    {{ record.name }}
                    <span class="text-caption font-weight-medium text-left" style="display: block;color: #707070;">
                        {{ record.category }}
                    </span>
                </v-card-text>

                <span style="display:inline-block; float:right;" class="mt-4 mr-3">
                    <v-icon dark class="mt-1 ml-1">mdi-chevron-up</v-icon>
                </span>

                <v-card-text style="display: inline-block;float:right;color: #5157BF;"
                    class="align-end text-right pa-0 mr-5 mt-3 text-subtitle-2">
                    {{ record.date }}
                    <span class=" text-left text-subtitle-1 font-weight-bold" style="display: block;color:#5157BF">
                        ${{ record.amount }}
                    </span>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
export default {
    data: () => ({
        cards: [
            { 
                name: "Bank of America", 
                icon: "./bofa.png", 
                category: "...4765", 
                amount: 1326.23, 
                date: "Balance" 
            },
        ],
    })
}
</script>