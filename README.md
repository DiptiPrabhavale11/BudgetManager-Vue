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
  
  *  <b>Home Page</b>
      The overall homepage comprises various components such as AppHeader, Statistics, Barchart, TransactionDetails, BankAndCreditCards, SavingGoal,s etc. Each component is responsible for its independent functionality. Vue store i.e [vuex](https://vuex.vuejs.org/) is used for sharing the common data between all of these components. Also, [Axios](https://www.npmjs.com/package/axios) is used to fetch data from the server.
     
      ![image](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/assets/113642858/a9511a0d-ecae-4206-822d-7d2d512561da)

  *  <b>Application Header</b>
  
      ![image](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/assets/113642858/d0db9540-fe35-4270-a575-9684911a380e)


  *  <b>6 Month Snapshot</b>
  
      ![image](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/assets/113642858/4def6bcf-d1e2-48a1-81a0-8a8cde3e8c4f)


  *  <b>Recent Transactions</b>

      ![image](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/assets/113642858/be0b89ef-f7ac-4c53-b5ef-5c5603fd13cd)


  *  <b>Bank & Credit Cards</b>

      ![image](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/assets/113642858/e611c22f-ffd5-43d9-8457-b485d27f7c13)

  *  <b>Saving Goals</b>

      ![image](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/assets/113642858/3f31095d-765c-4bd5-964f-518aa0b86060)

  *  <b>Budget Dialog</b>

      ![image](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/assets/113642858/a52030bc-e472-4c7d-8fdd-2de03bf70874)


  *  <b>Negative Budget Handling</b>

      ![image](https://github.com/DiptiPrabhavale11/BudgetManager-Vue/assets/113642858/e4d6d2cd-d02c-44d5-a2f6-65e4fdc75869)


