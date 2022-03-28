<template>
  <div class="container">
    <h1 class="text-center"> Welcome to Todolist App</h1>
    <div class="box"> 
      <div class="row mt-5" style="center;">
      <div class="col-xs-12 col-md-4">
        <form>
          <div class="form">
            <label for="">Todolist</label>
            <input type="text" class="form-control" size="10" ref="textbox" v-model="newtodolist" placeholder="Input to do list here...">
          </div>
            <button type="button" class="btn btn-warning" v-on:click="addTodo">Save</button>
        </form>
      </div>
         <div class="col-xs-12 col-md-8 pt-4">
          <ul class="list">
            <li class="list-group-item disabled" v-for="(todolist,index) in todolists" :key="index">
            {{todolist.text}}
            <button type="button" class="btn btn-danger float-right" v-on:click="removeTodo(index)">Remove</button>
            </li>
          </ul>
         </div>
    </div></div>
   
  </div>

</template>

<script>
export default {
  data() {
        return {
        todolists :[
        {text : "Task 1"},
        {text : "Task 2"},
        ],
        newtodolist : ""
        }
  },
  methods: {
      addTodo:function(){
        this.todolists.push({text:this.newtodolist});
        this.$refs.textbox.focus()
        this.newtodolist = "" 
        },
      removeTodo:function(index){
        this.todolists.splice(index,1);
        }
  },
}

 </script>
 <style>
 .box {
   text-align: center;
 }
 </style>