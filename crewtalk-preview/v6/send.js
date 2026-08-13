function prepareSend(){
  if(!selected.size){toast('בחר לפחות עובד אחד לפני שליחה');return;}
  if(!$('taskText').value.trim())return;
  editorPurpose='send';
  parsed=makeDrafts($('taskText').value.trim());
  openAnalysis();
}
