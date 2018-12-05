const mydate = new Date();

export let currentDate ='';
currentDate += mydate.getDate();
currentDate += '.' + (+mydate.getMonth() + 1);
currentDate += '.' + mydate.getFullYear();

