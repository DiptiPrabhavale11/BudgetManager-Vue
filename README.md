# Budget Management Application

* ## Technologies/libraries used ##

  The front-end is developed using [Vue.js](https://vuejs.org/guide/introduction.html#what-is-vue), [Vuetify](https://vuetifyjs.com/en/components/all/), Javascript, HTML, and CSS. Apart from this main technological stack, I have used [chart.js](https://www.chartjs.org/docs/4.3.3/) and the supportive vue plugin [Vue-ChartJS](https://vue-chartjs.org/migration-guides/) for implementing charts. For rendering different icons, I have used [Material Design Icons](https://pictogrammers.com/library/mdi/)
  
  The Backend is mocked using json-server. This local server will fetch the data froma  mock data file named db.js

* ## Project setup - How to download and run the project? ##

    * <b> STEP 1:</b> Dowload or clone the repository using command ``` git clone https://github.com/DiptiPrabhavale11/BudgetManager-Vue.git ```
    * <b> STEP 2:</b> Go to BudgetManager-Vue folder and run ``` npm install ``` .
    * <b> STEP 3:</b> To start the local backend server run the command ``` npm run server ```. It will serve mock data from db.json 
    * <b> STEP 4:</b> Execute ``` npm run serve ```. It will start the application at http://locahost:8080
 
* ## Functionalities ##
  
  *  <b>[Home Page](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/blob/main/src/components/Dashboard.vue)</b>
  
      The overall homepage comprises various components such as AppHeader, Statistics, Barchart, TransactionDetails, BankAndCreditCards, SavingGoal,s etc. Each component is responsible for its independent functionality. Vue store i.e [vuex](https://vuex.vuejs.org/) is used for sharing the common data between all of these components. Also, [Axios](https://www.npmjs.com/package/axios) is used to fetch data from the server.
     
      ![image](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/assets/113642858/a9511a0d-ecae-4206-822d-7d2d512561da)

  *  <b>[Application Header](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/blob/main/src/components/AppHeader.vue)</b>
 
      This is a separate component for navigating across different pages. It also contains left navigation bar with various other links to pages such as Transactions, Trends etc.
      ![image](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/assets/113642858/d0db9540-fe35-4270-a575-9684911a380e)


  *  <b>[6 Month Snapshot](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/blob/main/src/components/BarChart.vue)</b>
  
      This is a separate component responsible for rendering a stacked bar chart. The main purpose of this component is to showcase the trends in a user's spending per category over the last six months. It uses chart.js and vue-chartjs to render the chart. We can eliminate a few categories and compare the remaining categories just by clicking the legend labels.
     
      ![image](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/assets/113642858/4def6bcf-d1e2-48a1-81a0-8a8cde3e8c4f)

  *  <b>[Recent Transactions](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/blob/main/src/components/TransactionDetails.vue)</b>
 
      This component is responsible for maintaining the details of recent transactions. It indicates the recent transaction, it's category, the amount spent, and the date of the transaction.
     
      ![image](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/assets/113642858/be0b89ef-f7ac-4c53-b5ef-5c5603fd13cd)

  *  <b>[Bank & Credit Cards](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/blob/main/src/components/BankAndCardDetails.vue)</b>

      This component shows the current bank balance per card.
      ![image](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/assets/113642858/e611c22f-ffd5-43d9-8457-b485d27f7c13)

  *  <b>[Saving Goals](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/blob/main/src/components/SavingGoals.vue)</b>
 
      If a user has set any saving goals then this component tracks the progress for it. It renders the completion percentage through a  circular progress bar. It shows the details of total savings by the particular date.
     
      ![image](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/assets/113642858/3f31095d-765c-4bd5-964f-518aa0b86060)

  *  <b>[Budget Dialog](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/blob/main/src/components/BudgetUpdateDialog.vue)</b>
 
      This dialog gives a provision to update the expense per category. Once the amount and category are updated, it auto-calculates the remaining amount along with the updation of the spent amount for that category. Additionally, it updates the overall budget also.
      ![image](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/assets/113642858/a52030bc-e472-4c7d-8fdd-2de03bf70874)


  *  <b>[Negative Budget Handling](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/blob/main/src/components/Statistics.vue)</b>
 
      If the user updates the amount for any category that is bigger than the overall budget then after the successful update it reflects negative amounts across that category and the overall budget statistics tile. It will render these amounts in red color to alert the user.
     
      ![image](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/assets/113642858/e4d6d2cd-d02c-44d5-a2f6-65e4fdc75869)

  *  <b>[Routing](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/blob/main/src/router/index.js)</b>
 
      The application header provides two different links for COmmunity and FAQs. It will load the respective components depending on the user selection.
      ![image](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/assets/113642858/dde40afb-6a20-4757-9a4e-e1a178f2ca33)



