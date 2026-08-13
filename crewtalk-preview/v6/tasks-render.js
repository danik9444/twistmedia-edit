function statusLabel(status){return({approved:'אושרה',in_progress:'בביצוע',problem:'בעיה',completed:'הושלמה',cancelled:'בוטלה'}[status]||status)}
function renderTasks(){
  const query=($('taskSearch')?.value||'').trim().toLowerCase();
  const filter=$('taskFilter')?.value||'open';
  const shown=tasks.filter(task=>filter==='all'||(filter==='open'?!['completed','cancelled'].includes(task.status):task.status===filter)).filter(task=>!query||[task.title,task.description,task.location,task.code,...task.assignees.map(workerName)].join(' ').toLowerCase().includes(query));
  $('taskList').innerHTML=shown.map(task=>`<article class="taskCard"><div class="taskMain"><div class="taskTitle"><b>${esc(task.title)}</b><div class="badges">${task.safety?'<span class="badge warn">⚠️ רגיש</span>':''}${task.photo?'<span class="badge">📷 צילום</span>':''}${!task.assignees.length?'<span class="badge un">ללא שיוך</span>':''}</div></div><small>${esc(task.location||'ללא מיקום')} · ${esc(task.code)}</small><p>${esc(task.description)}</p><div class="assignees">${task.assignees.map(id=>`<span>${esc(workerName(id))}</span>`).join('')}</div></div><div class="taskSide"><span class="status ${task.status}">${statusLabel(task.status)}</span><button class="editBtn" onclick="editTask(${task.id})">✎ ערוך</button></div></article>`).join('')||'<div class="placeholder">אין משימות בתצוגה הזאת.</div>';
  const open=tasks.filter(task=>!['completed','cancelled'].includes(task.status)).length;
  const running=tasks.filter(task=>task.status==='in_progress').length;
  const problems=tasks.filter(task=>task.status==='problem').length;
  const done=tasks.filter(task=>task.status==='completed').length;
  $('summary').innerHTML=`<span><b>${open}</b>פתוחות</span><span><b>${running}</b>בביצוע</span><span><b>${problems}</b>בעיות</span><span><b>${done}</b>הושלמו</span>`;
}
