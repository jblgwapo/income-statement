<template lang="html">
  <section>
    <header>Income Statement</header>

    <!-- Wrapper -->
    <div view="wide">

      <div>
        <h1>Input</h1>
        <div frame>
          <h3>Revenue</h3>

          <table>
            <tr header>
              <td>Sales</td>
              <td></td><td><input type="number" v-model="sales"></td>
            </tr>

            <tr>
              <td>Cost of Goods Sold</td>
            </tr>
            <tr>
              <td>Materials</td>
              <td><input type="number" v-model="materials"></td>
            </tr>
            <tr>
              <td>Labor</td>
              <td><input type="number" v-model="labor"></td>
            </tr>
            <tr>
              <td>Overhead</td>
              <td><input type="number" v-model="overhead"></td>
            </tr>

            <tr header>
              <td>Gross Margin</td>
              <td></td><td right>{{gross_margin}}</td>
            </tr>


          <br>

          <!--  Expenses  -->
            <tr header>
              <td>Operating Expenses</td>
            </tr>


            <tr>
              <td>Selling Expenses</td>
              <td><input type="number" v-model="selling"></td>
            </tr>
            <tr>
              <td>Administrative Expenses</td>
              <td><input type="number" v-model="admin"></td>
            </tr>
            <tr>
              <td>Depreciation and Amortization</td>
              <td><input type="number" v-model="depreciation"></td>
            </tr>

            <tr header>
              <td>Operating Income</td>
              <td></td><td right>{{operating_income}}</td>
            </tr>

            <br>
            <!-- Other -->

            <tr header>
              <td>Other Income and Expenses</td>
            </tr>


            <tr>
              <td>Interest Revenue</td>
              <td><input type="number" v-model="selling"></td>
            </tr>
            <tr>
              <td>Interest Expense</td>
              <td><input type="number" v-model="admin"></td>
            </tr>
            <tr>
              <td>Extraordinary Items</td>
              <td><input type="number" v-model="depreciation"></td>
            </tr>

            <br>
            <!-- Tax -->

            <tr header>
              <td>Income before Tax</td>
            </tr>
            <tr>
              <td>Income Tax</td>
              <td><input type="number" v-model="depreciation"></td>
              <td right>{{taxed}}</td>
            </tr>
            <br>
            <tr header>
              <td><em>Net Income</em></td>
              <td></td><td right>{{net_income}}</td>
            </tr>



          </table>







          <br>
            <button type="button" name="button">Add</button>
          <br><br>
          <h3>Expenses</h3>
            <input type="text" name="" value=""> <input type="text" name="" value="">
            <br>
            <button type="button" name="button">Add</button>
        </div>
      </div>

      <div>
        <h1>Preview</h1>
        <div frame>
            adsdadas
        </div>
      </div>

      <div>
        <h1>Activities</h1>
        <div frame>
            adsdadas
        </div>
      </div>

    </div>

  </section>
</template>

<script>
export default {
  name:'income',

  computed:{
    /* Sales */
    sales:{
      get(){
        return this.$store.state.income_statement.sales
      },
      set(val){
        val = (val==undefined || isNaN(val) ? 0 : val )
        this.$store.state.income_statement.sales = val;
      }
    },
    materials:{
      get(){
        return this.$store.state.income_statement.materials
      },
      set(val){
        val = (val==undefined || isNaN(val) ? 0 : val )
        this.$store.state.income_statement.materials = val;
      }
    },
    labor:{
      get(){
        return this.$store.state.income_statement.labor
      },
      set(val){
        val = (val==undefined || isNaN(val) ? 0 : val )
        this.$store.state.income_statement.labor = val;
      }
    },
    overhead:{
      get(){
        return this.$store.state.income_statement.overhead
      },
      set(val){
        val = (val==undefined || isNaN(val) ? 0 : val )
        this.$store.state.income_statement.overhead = val;
      }
    },

    /* Expenses */
    selling:{
      get(){
        return this.$store.state.income_statement.selling
      },
      set(val){
        val = (val==undefined || isNaN(val) ? 0 : val )
        this.$store.state.income_statement.selling = val;
      }
    },
    admin:{
      get(){
        return this.$store.state.income_statement.admin
      },
      set(val){
        val = (val==undefined || isNaN(val) ? 0 : val )
        this.$store.state.income_statement.admin = val;
      }
    },
    depreciation:{
      get(){
        return this.$store.state.income_statement.depreciation
      },
      set(val){
        val = (val==undefined || isNaN(val) ? 0 : val )
        this.$store.state.income_statement.depreciation = val;
      }
    },
    operation:{
      get(){
        return this.$store.state.income_statement.operation
      },
      set(val){
        val = (val==undefined || isNaN(val) ? 0 : val )
        this.$store.state.income_statement.operation = val;
      }
    },

    /* Other */
    revenue:{
      get(){
        return this.$store.state.income_statement.revenue
      },
      set(val){
        val = (val==undefined || isNaN(val) ? 0 : val )
        this.$store.state.income_statement.revenue = val;
      }
    },
    expense:{
      get(){
        return this.$store.state.income_statement.expense
      },
      set(val){
        val = (val==undefined || isNaN(val) ? 0 : val )
        this.$store.state.income_statement.expense = val;
      }
    },
    extra:{
      get(){
        return this.$store.state.income_statement.extra
      },
      set(val){
        val = (val==undefined || isNaN(val) ? 0 : val )
        this.$store.state.income_statement.extra = val;
      }
    },

    tax:{
      get(){
        return this.$store.state.income_statement.tax
      },
      set(val){
        val = (val==undefined || isNaN(val) ? 0 : val )
        this.$store.state.income_statement.tax = val;
      }
    },


    // Auto Compute
    gross_margin(){
      return Number(this.sales) + Number(this.materials) + Number(this.labor) + Number(this.overhead)
    },

    operating_income(){
      var expense = this.selling + this.admin + this.depreciation
      return this.gross_margin - expense;
    },
    taxed(){
      return 0;
    },
    net_income(){
      return 0;
    }



  }
}
</script>

<style lang="scss" scoped>
  table{
    width: 100%;

    input{
      width: 100%;
      text-align: right;
      font-weight: inherit;
    }
    & td:first-child{
      padding-left: 10px;
    }

    [header]{
      font-weight: bold;
      padding-left: 0px;
      td{
        padding: 0;
      }
    }

  }



</style>
