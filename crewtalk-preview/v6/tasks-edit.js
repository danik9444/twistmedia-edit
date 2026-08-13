function editTask(id){
  const task=tasks.find(item=>item.id===id);if(!task)return;
  editingId=id;
  $('editTitle').value=task.title;$('editDesc').value=task.description;$('editLocation').value=task.location||'';$('editStatus').value=task.status;$('editSafety').checked=!!task.safety;$('editPhoto').checked=!!task.photo;
  $('editAssignees').innerHTML=workers.map(worker=>`<button type="button" class="${task.assignees.includes(worker.id)?'on':''}" onclick="toggleEditAssignee(${worker.id})">${task.assignees.includes(worker.id)?'✓ ':''}${esc(worker.name)}</button>`).join('');
  $('editBack').classList.add('on');
}
function toggleEditAssignee(id){const task=tasks.find(item=>item.id===editingId);if(!task)return;const at=task.assignees.indexOf(id);if(at>=0)task.assignees.splice(at,1);else task.assignees.push(id);editTask(editingId)}
function closeEdit(){$('editBack').classList.remove('on');editingId=null}
function saveEdit(event){event.preventDefault();const task=tasks.find(item=>item.id===editingId);if(!task)return;task.title=$('editTitle').value.trim();task.description=$('editDesc').value.trim();task.location=$('editLocation').value.trim();task.status=$('editStatus').value;task.safety=$('editSafety').checked;task.photo=$('editPhoto').checked;closeEdit();renderTasks();toast('המשימה עודכנה')}
