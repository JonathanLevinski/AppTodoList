export class Tarefa {

  todo: string = ""
  status: string;
  

    constructor(todo, status){
        this.todo = todo;
        this.status = "Em andamento";
        
    }    
}