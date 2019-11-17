<template>
  <div id="calculator">
    <div class="top">
      <span @click="calculator" class="clear">c</span>
      <div class="screen">{{result}}</div>
    </div>
    <div class="keys">
      <span @click="calculator">7</span>
      <span @click="calculator">8</span>
      <span @click="calculator">9</span>
      <span @click="calculator" class="operator">+</span>
    </div>
    <div class="keys">
      <span @click="calculator">4</span>
      <span @click="calculator">5</span>
      <span @click="calculator">6</span>
      <span @click="calculator" class="operator">-</span>
    </div>
    <div class="keys">
      <span @click="calculator">1</span>
      <span @click="calculator">2</span>
      <span @click="calculator">3</span>
      <span @click="calculator" class="operator">/</span>
    </div>
    <div class="keys">
      <span @click="calculator">0</span>
      <span @click="calculator">.</span>
      <span @click="calculator" class="eval">=</span>
      <span @click="calculator" class="operator">x</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "calculator",
  components: {},
  data() {
    return {
      calSymbol: "",
      equalSign: false,
      UsedColSymbol: false,
      lastNumber: "",
      result: ""
    };
  },
  created() {},
  computed: {},
  watch: {
    radix() {
      this.setRadix();
    }
  },
  methods: {
    numberFunc(str) {
      if (this.UsedColSymbol) {
        this.result = "";
        this.UsedColSymbol = false;
      }
      if (this.equalSign) {
        this.result = "";
        this.equalSign = false;
      }
      this.result += str;
    },
    symbolFunc(str) {
      this.UsedColSymbol = true;
      this.lastNumber = this.result;
      this.calSymbol = str;
    },
    equalFunc() {
      if (this.calSymbol === "+") {
        this.result = parseFloat(this.lastNumber) + parseFloat(this.result);
      } else if (this.calSymbol === "-") {
        this.result = parseFloat(this.lastNumber) - parseFloat(this.result);
      } else if (this.calSymbol === "x") {
        this.result = parseFloat(this.lastNumber) * parseFloat(this.result);
      } else if (this.calSymbol === "/") {
        this.result = parseFloat(this.lastNumber) / parseFloat(this.result);
      }
      this.equalSign = true;
    },
    pointFunc() {
      if (!this.result.includes(".")) {
        this.result += ".";
      }
    },
    clearFunc() {
      this.result = "";
      this.calSymbol = "";
      this.lastNumber = "";
    },
    calculator(e) {
      const str = e.target.innerHTML;
      switch (str) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          this.numberFunc(str);
          break;
        case "+":
        case "-":
        case "x":
        case "/":
          this.symbolFunc(str);
          break;
        case "=":
          this.equalFunc();
          break;
        case ".":
          this.pointFunc();
          break;
        case "c":
          this.clearFunc();
          break;
      }
    }
  }
};
</script>

<style scoped>
#calculator {
  width: 325px;
  height: auto;
  margin: 100px auto;
  background-color: #9dd2ea;
  padding: 20px 20px 9px 20px;
  background: linear-gradient(#9dd2ea, #8bceec);
  border-radius: 3px;
  box-shadow: 0 4px #009de4, 0 10px 15px rgba(0, 0, 0, 0.2);
}

.top span.clear {
  float: left;
}
.top div.screen {
  width: 212px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  float: right;
  padding: 0 10px;
  box-shadow: inset 0 4px rgba(0, 0, 0, 0.2);
  text-align: right;
  line-height: 40px;
  letter-spacing: 1px;
  font-size: 17px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  color: white;
}

.keys,
.top {
  display: inline-block;
}
.top span.clear,
.keys span {
  float: left;
  position: relative;
  top: 0;
  width: 66px;
  height: 36px;
  cursor: pointer;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 4px rgba(0, 0, 0, 0.2);
  margin: 0 7px 11px 0;
  color: #888;
  line-height: 36px;
  text-align: center;
  transition: all 0.2s ease;
}

.keys span.operator {
  background-color: #fff0f5;
}
.keys span.eval {
  background-color: #f1ff92;
  box-shadow: 0 4px #9da853;
  color: #888e5f;
}
.top span.clear {
  background-color: #ff9fa8;
  box-shadow: 0 4px #ff7c87;
  color: white;
}

.keys span:hover {
  background-color: #9c89f6;
}
.keys span.eval:hover {
  background-color: #abb850;
  box-shadow: 0 4px #717a33;
  color: white;
}
.top span.clear:hover {
  background-color: #f68991;
  box-shadow: 0 4px #03545d;
  color: white;
}

.keys span:active {
  box-shadow: 0 0 #717a33;
  top: 4px;
}
.top span.clear:active {
  box-shadow: 0 0 #717a33;
  top: 4px;
}

.radix {
  color: #25848e;
  padding: 5px 0;
}
.radix [type="radio"],
.radix label {
  cursor: pointer;
}
</style>
