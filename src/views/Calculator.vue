<template>
  <h1 class="text-3xl h-32 bg-green-700 text-green-100 flex justify-center items-center">{{t('calculator_title')}}</h1>
  <div class="bg-gray-100 flex w-full">
  <div class="m-auto py-10">
    <div class="h-10 text-right">
      <span class="text-3xl w-32 " style="direction:rtl">{{result===""? '0.': result}}</span>
    </div>
    <div class="h-8 flex justify-between">
      <span class="h-10 text-sm text-right" v-if="oper">{{prev}} {{oper}} {{curr}}</span>
      <span v-if="par">( {{pprev}} {{poper}} {{pcurr}} )</span>
    </div>
    <div class="grid grid-cols-4 gap-1">
      <button class="border rounded w-12 h-12 p-2 bg-gray-500" @click="press('(')">(</button>
      <button class="border rounded w-12 h-12 p-2 bg-gray-500" @click="press(')')">)</button>
      <button class="border rounded w-12 h-12 p-2 bg-red-300" @click="press('c')">C</button>
      <button class="border rounded w-12 h-12 p-2 bg-gray-500" @click="press('/')">/</button>
      <button class="border rounded w-12 h-12 p-2" @click="press('7')">7</button>
      <button class="border rounded w-12 h-12 p-2" @click="press('8')">8</button>
      <button class="border rounded w-12 h-12 p-2" @click="press('9')">9</button>
      <button class="border rounded w-12 h-12 p-2 bg-gray-500" @click="press('*')">X</button>
      <button class="border rounded w-12 h-12 p-2" @click="press('4')">4</button>
      <button class="border rounded w-12 h-12 p-2" @click="press('5')">5</button>
      <button class="border rounded w-12 h-12 p-2" @click="press('6')">6</button>
      <button class="border rounded w-12 h-12 p-2 bg-gray-500" @click="press('-')">-</button>
      <button class="border rounded w-12 h-12 p-2" @click="press('1')">1</button>
      <button class="border rounded w-12 h-12 p-2" @click="press('2')">2</button>
      <button class="border rounded w-12 h-12 p-2" @click="press('3')">3</button>
      <button class="border rounded w-12 h-12 p-2 bg-gray-500" @click="press('+')">+</button>
      <button class="border rounded w-12 h-12 p-2 bg-gray-500" @click="press('pm')">+/-</button>
      <button class="border rounded w-12 h-12 p-2" @click="press('0')">0</button>
      <button class="border rounded w-12 h-12 p-2 bg-gray-500" @click="press('.')">.</button>
      <button class="border rounded w-12 h-12 p-2 bg-green-400" @click="press('=')">=</button>

    </div>
  </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { ref, computed, onMounted, onUnmounted } from 'vue';

export default {
  name: "Calculator",
  setup() {
    const result = computed({
      get: () => curr.value
    });
    const prev = ref("");
    const oper = ref("");
    const curr = ref("");
    const pprev = ref("");
    const poper = ref("");
    const pcurr = ref("");
    const par = ref(false);

    const { t, locale } = useI18n();

    const operations = ['+', '-', '*', '/', ];
    const numbers = ['0', '1', '2', '3', '4','5','6','7','8','9'];
    
    function appendValue(val) {
      if (par.value) {
        pcurr.value+=val;
      }
      else {
        curr.value += val;
      }
    }

    function clear() {
      prev.value='';
      oper.value='';
      curr.value='';
      pprev.value='';
      poper.value='';
      pcurr.value='';
      par.value=false;

    }
    
    function calculate() {
      if (par.value) {
        if (poper.value === '+') {
          pcurr.value  = +pcurr.value + +pprev.value;
        }
        else if (poper.value==='-') {
          pcurr.value  = +pprev.value - +pcurr.value;
        }
        else if (poper.value==='*') {
          pcurr.value  = +pcurr.value * +pprev.value;
        }
        else if (poper.value==='/') {
          pcurr.value  = +pprev.value / +pcurr.value;
        }
        pprev.value = "";
        poper.value = "";
      }
      else {
        if (oper.value === '+') {
          curr.value  = +curr.value + +prev.value;
        }
        else if (oper.value==='-') {
          curr.value  = +prev.value - +curr.value;
        }
        else if (oper.value==='*') {
          curr.value  = +curr.value * +prev.value;
        }
        else if (oper.value==='/') {
          curr.value  = +prev.value / +curr.value;
        }
        prev.value  = "";
        oper.value="";
      }
    }
    function applyOperation(val) {
      calculate();
      if (par.value) {
        pprev.value = pcurr.value;
        pcurr.value = '';
        poper.value = val;
      } else {
        prev.value = curr.value;
        curr.value = '';
        oper.value = val;
      }
    }

    function plusminus() {
      if (par.value) {
        pcurr.value = 0 - +pcurr.value;
      } else {
        curr.value = 0 - +curr.value;
      }
    }

    function openPar() {
      par.value=true;
    }

    function closePar() {
      calculate(); 
      curr.value = pcurr.value; //save the partial result
      pcurr.value='';
      par.value=false;
    }

    function press(val) {
      if (val === '=' || val === "Enter") calculate();
      else if (operations.includes(val)) applyOperation(val);
      else if (val === "pm") plusminus();
      else if (val === "c" || val === "Escape") clear();
      else if (val === ".") appendValue(val);
      else if (val === "(") openPar();
      else if (val === ")") closePar();
      else if (numbers.includes(val)) appendValue(val);
      else {
        console.log(val);
      } 
    }

    //  add / remove listener for keyboard input
    const handleKeydown = (e) => press (e.key);
    onMounted( () => window.addEventListener('keydown', handleKeydown) )
    onUnmounted( () => window.removeEventListener('keydown', handleKeydown) ) 

    return { t, locale, result, prev, oper, curr, press, par, pprev, poper, pcurr }
  }
}
</script>

<style>

</style>