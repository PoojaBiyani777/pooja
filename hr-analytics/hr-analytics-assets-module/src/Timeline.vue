<template>
  <div id="timeline">
 
  <v-container fluid>
    <v-layout justify-space-around class="mb-2">
      <span class="back-arrow">
        <v-icon>keyboard_backspace</v-icon>
        </span>
    </v-layout>
  </v-container>

  <div class="number"><p>+91(928)276-1827</p></div>
  <div class="name"><p>(Muhhammad Atif)</p></div>


 <v-container fluid>
    <v-layout justify-space-around class="mb-2">
      <span class="timeline-symbol">
        <v-icon>history</v-icon>
        </span>
    </v-layout>
  </v-container>

  <div class="timeline-lable">
            <p>Timeline</p>
  </div>

  <div class="monthyear">
            <p>Sept 2018</p>
  </div>





<div class="line">

 <div class="up-arrow">&uarr;</div>
<br/><br/><br/><br/><br><br>
<div class="circle"></div><br/><br/><br/><br/><br><br>
<div class="circle"></div><br/><br/><br/><br/><br><br>
<div class="circle"></div><br/><br/><br/><br/><br><br>
<div class="circle"></div><br/><br/><br/><br/><br><br>
<div class="circle"></div><br/><br/><br/><br/><br><br>


</div>


  

<div class="datum" >
  <div v-for="i in arrayData" >
    <p class="details"><b>You made a call to : {{ i.name }}</b></p>
    <p class="date">{{i.date}} at {{i.time}}</p>
    <p class="notes"><b>Notes :</b> {{i.notes}}</p>
    <hr> </hr>
  </div>

    <div v-for="i in data" >
    {{i}}
  </div>
</div>

 




  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'Timeline',
  data(){
    return{
      arrayData : [
        {
          name: 'Mohammad Atif',
          date: 'Sept 2nd',
          time: '12:10pm',
          notes: 'call back later'
        },
        {
          name: 'Mohammad Atif',
          date: 'Sept 3rd',
          time: '12:10pm',
          notes: 'no response'
        },
        {  
          name: 'Mohammad Atif',
          date: 'Sept 4th',
          time: '10.15am',
          notes: 'busy in the meeting'
        }
      ]
    }
  }
}









</script>




   