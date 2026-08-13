function makeDrafts(text){
  let parts=[String(text||'')];
  ['\n',';','.'].forEach(separator=>{
    parts=parts.flatMap(part=>part.split(separator));
  });
  parts=parts.map(part=>part.trim()).filter(part=>part.length>3);
  if(!parts.length)parts=[String(text||'').trim()];
  return parts.map((part,index)=>{
    const words=part.split(' ').filter(Boolean);
    let location='';
    for(let i=0;i<words.length-1;i++){
      if(words[i]==='קומה'||words[i]==='חדר'){location=words[i]+' '+words[i+1];break;}
    }
    const safety=words.includes('לא')||words.includes('אל')||words.includes('אסור');
    return {id:'draft-'+index,title:words.slice(0,6).join(' ')||'משימה',description:part,location,safety,photo:words.includes('צילום')||words.includes('תמונה'),assignees:[...selected]};
  });
}
function analyzeTasks(purpose='review'){
  const text=$('taskText').value.trim();
  if(!text){$('taskText').focus();return;}
  editorPurpose=purpose;
  parsed=makeDrafts(text);
  openAnalysis();
}
function openAnalysis(){
  $('analysisBack').classList.add('on');
  $('analysisTitle').textContent=editorPurpose==='send'?'בדיקה ושיוך לפני שליחה':'בדיקת המשימות שנקלטו';
  renderEditor();
}
function closeAnalysis(){$('analysisBack').classList.remove('on')}
function esc(value){const box=document.createElement('div');box.textContent=String(value||'');return box.innerHTML}
function criticalHtml(text){return String(text||'').split(' ').map(word=>{const clean=word.replaceAll(',','').replaceAll('.','').replaceAll(':','');const important=['לא','אל','אסור','לפני','אחרי','בלי'].includes(clean)||[...clean].some(ch=>ch>='0'&&ch<='9');return important?'<mark>'+esc(word)+'</mark>':esc(word)}).join(' ')}
