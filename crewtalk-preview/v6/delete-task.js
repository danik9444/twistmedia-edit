function deleteTask(){
  if(editingId===null)return;
  if(!confirm('למחוק את המשימה?'))return;
  tasks=tasks.filter(item=>item.id!==editingId);
  closeEdit();renderTasks();toast('המשימה נמחקה');
}
