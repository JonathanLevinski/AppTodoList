import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefa.model';
import { TAREFAS } from '../mock_tarefa';

// Import the library
import { FilterPipe } from '../filter.pipe';
@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
    ngOnInit(): void {
        // throw new Error("Method not implemented.");
    }
    Tarefas: Tarefa[]
    selectedList: Tarefa;
    to_do = TAREFAS;
    tarefaSelect
    filterargs = { status: "" };
    constructor() {
        this.Tarefas = [
            { todo: "Aprender JavaScript", status: "pendencia" },
            { todo: "Aprender TypeScript", status: "em andamento" },
            { todo: "Aprender Angular", status: "em andamento" },
            { todo: "Aprender HTML/CSS/", status: "finalizado" },
            { todo: "Aprender Leitura Dinamica", status: "postergado: para segundo semestre" },
        ]
    }

    addtoDo(todo) {
        let tarefaSelect = new Tarefa(todo, true);
        this.Tarefas.push(tarefaSelect);
    }

    removetoDo(Tar) {
        let index = this.Tarefas.indexOf(Tar);
        this.Tarefas.splice(index, 1);
        console.log(this.Tarefas)
    }
    onSelect(to_do: Tarefa) {
        this.selectedList = to_do
    }
    removetoDofinish() {
        const list = this.Tarefas
        for (let j = 0; j < list.length; j++) {
            if (list[j].status == "finalizado") {
                this.Tarefas.splice(j, 1)
                console.log("Finalizado")
            }            
        }
        return
    }
    removeAll(){
        const list = this.Tarefas
        for (let j = 0; j < list.length; j++) {           
                this.Tarefas.splice(j, 100)
                console.log("AllDelete")          
        }
        return
    }
}
