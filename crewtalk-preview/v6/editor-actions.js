function editParsed(index,key,value){parsed[index][key]=value;renderEditor()}
function moveTask(index,direction){const target=index+direction;if(target<0||target>=parsed.length)return;const item=parsed[index];parsed[index]=parsed[target];parsed[target]=item;renderEditor()}
function removeParsed(index){parsed.splice(index,1);renderEditor()}
function addParsedTask(){parsed.push({id:'draft-'+Date.now(),title:'',description:'',location:'',safety:false,photo:false,assignees:[]});renderEditor()}
function toggleParsedAssignee(index,id){const list=parsed[index].assignees;const at=list.indexOf(id);if(at>=0)list.splice(at,1);else list.push(id);renderEditor()}
