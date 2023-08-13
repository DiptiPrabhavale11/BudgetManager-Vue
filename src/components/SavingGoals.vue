<template>
    <v-row>
        <v-col cols="9" class="pa-3 mt-1 mb-1 ml-1">
            <v-text class="text-center font-weight-medium">Saving Goals</v-text>
        </v-col>
        <v-col cols="1">
            <v-icon>mdi-plus</v-icon>
        </v-col>
        <v-col cols="10">
            <v-card height="220">
                <v-row>
                    <v-col cols="7" class="ma-3">
                        <v-text class="ml-3 mt-1 text-center font-weight-medium">Italy Trip</v-text>
                    </v-col>
                    <v-col cols="3" class="ma-3 align-end">
                        <v-text style="color: #5157BF;" class="ml-3 mt-1 text-center text-caption font-weight-medium">See
                            Details</v-text>
                    </v-col>
                </v-row>
                <v-row class="ma-2">
                    <v-col cols="4">
                        <v-progress-circular :rotate="360" :size="120" :width="25" model-value="50" color="#53BD71">
                            <span>$300</span>
                            <br />
                            <!-- <div style="color: #707070;display: block" class="text-caption">text inside</div> -->
                        </v-progress-circular>
                    </v-col>
                    <v-col cols="8" class="mt-5">
                        <v-text class="ml-3 mt-1 text-center font-weight-regular">
                            Total Savings: $300 of $3000
                        </v-text>
                        <br/>
                        <v-text class="ml-3 mt-1 text-center font-weight-regular">
                            by April 15, 2022
                        </v-text>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
export default {
    name:"SavingGoals",
    data: () => ({
        
    })
}
</script>