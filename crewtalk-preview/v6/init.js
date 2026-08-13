function toast(message){$('notice').textContent=message;$('notice').hidden=false;clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('notice').hidden=true,2600)}
renderRecipients();renderTasks();syncButtons();
