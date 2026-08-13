function toast(msg){$('notice').textContent=msg;$('notice').hidden=false;clearTimeout(toast.t);toast.t=setTimeout(()=>$('notice').hidden=true,2600)}
renderRecipients();renderTasks();syncButtons();