function solve(input){
     let n =Number(input.shift());
      let asigneeCollection={};
     for (let index = 0; index < n; index++) {
         const [asigne,taskId,title,status,estimatedPoints]=input.shift().split(":");
         if(!asigneeCollection.hasOwnProperty(asigne)){

            asigneeCollection[asigne]=[];
         }
         asigneeCollection[asigne].push({taskId,title,status,estimatedPoints});
       
        

     }
      //console.log(JSON.stringify(asigneeCollection));
     for (const line of input) {
       let tokens=line.split(':');
       let command=tokens[0];
       if(command==="Add New"){
         asigne=tokens[1];
         taskId=tokens[2];
         title=tokens[3];
         let status=tokens[4];
         estimatedPoints=tokens[5];
        if(asigneeCollection.hasOwnProperty(asigne)){

          asigneeCollection[asigne].push({taskId,title,status,estimatedPoints});

        } else{

          console.log(`Assignee ${asigne} does not exist on the board!`)
        }

       


       }else if( command=="Change Status"){
        asigne=tokens[1];
        taskId=tokens[2];
       let newStatus=tokens[3];
        if(asigneeCollection.hasOwnProperty(asigne) && asigneeCollection[asigne].hasOwnProperty(taskId)){
          asigneeCollection[asigne].status=newStatus;
        }
        else if(!asigneeCollection.hasOwnProperty(asigne)){
          console.log(`Assignee ${asigne} does not exist on the board!`);
        }
        else if(!asigneeCollection[asigne].hasOwnProperty(taskId)){
          console.log(`Task with ID ${taskId} does not exist for ${asigne}!`);
        }


       }else if(command==="Remove Task"){
        asigne=tokens[1];
        let index=Number(tokens[2]);
        if(!asigneeCollection.hasOwnProperty(asigne)){
          console.log(`Assignee ${asigne} does not exist on the board!`)
         
        }else if(index<0 || index>asigneeCollection[asigne].length){
          console.log(`Index is out of range!`);
        }else{
          asigneeCollection[asigne].splice(index,1);
        }

       }
        
     }

 //console.log(JSON.stringify(asigneeCollection, null,2));
 let TodoAllTasks=

Object.values(asigneeCollection)
 .reduce((totalPointsSum, tasks) => {
     return totalPointsSum + tasks.filter(t => t.status === status)
         .map(t => Number(t.points))
         .reduce((a, b) => a + b, 0);
 }, 0)
 }

solve([
'5',
'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
'Peter:BOP-1211:POC:Code Review:5',
'Georgi:BOP-1212:Investigation Task:Done:2',
'Mariya:BOP-1213:New Account Page:In Progress:13',
'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
'Change Status:Peter:BOP-1290:ToDo',
'Remove Task:Mariya:1',
'Remove Task:Joro:1',
])