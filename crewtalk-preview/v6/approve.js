function approveParsed(){
  if(parsed.length===0){toast('הוסף לפחות משימה אחת');return;}
  const invalid=parsed.findIndex(item=>!item.title.trim()||!item.description.trim());
  if(invalid>=0){toast('יש משימה שחסרים בה פרטים');return;}
  const lines=[];
  parsed.forEach((item,index)=>{
    lines.push(`${index+1}. ${item.title}`);
    lines.push(item.description);
    if(item.location)lines.push(`מיקום: ${item.location}`);
    lines.push('');
  });
  $('taskText').value=lines.join('\n');
  autoSize();
  const stamp=Date.now();
  const approved=parsed.map((item,index)=>({id:stamp+index,title:item.title,description:item.description,location:item.location,status:'approved',safety:item.safety,photo:item.photo,assignees:[...item.assignees],code:`TSK-${String(stamp+index).slice(-5)}`}));
  tasks=tasks.concat(approved);
  closeAnalysis();
  renderTasks();
  syncButtons();
  toast('המשימות אושרו ונשמרו');
}
