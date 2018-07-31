const controller={init:function(){catsModel.currentCat=catsModel.cats[0],catListViewer.init(),catViewer.init()},getCurrent:function(){return catsModel.currentCat},getCats:function(){return catsModel.cats},setCurrent:function(t){catsModel.currentCat=t},clickCount:function(){catsModel.currentCat.clicks++,catViewer.render()}};let catsModel={cats:[{name:"Kedi",image:"./img/1.jpg",id:0,clicks:0},{name:"Graven",image:"./img/2.jpg",id:1,clicks:0},{name:"Fluffikins",image:"./img/3.jpg",id:2,clicks:0},{name:"Fangster",image:"./img/4.jpg",id:3,clicks:0},{name:"Mr. Widdershins",image:"./img/5.jpg",id:4,clicks:0}],currentCat:null};const catListViewer={init:function(){this.catList=document.querySelector("#catList"),this.render()},render:function(){let t="",e=controller.getCats();e.forEach(e=>{t+=`\n                <li class="catButton">${e.name}</li> \n                `,catList.innerHTML=t}),catList.addEventListener("click",t=>{e.forEach(e=>{t.target.innerHTML===e.name&&(controller.setCurrent(e),catViewer.render())})})}},catViewer={init:function(){this.catDisplay=document.querySelector("#catDisplay"),this.clickCounter=document.querySelector("#clicks"),catDisplay.addEventListener("click",t=>{"catImage"===t.target.className&&controller.clickCount()}),this.render()},render:function(){let t="",e=controller.getCurrent();t=`\n            <img src="${e.image}" class="catImage">\n            <p>Name: ${e.name}</p>\n            <p>ID#: ${e.id}</p>\n            <p>Number of clicks:<span id="clicks">${e.clicks}</span><p>\n        `,catDisplay.innerHTML=t}};controller.init();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIuanMiLCJtb2RlbC5qcyIsInZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PSBjb250cm9sbGVyID09PT09PT09PT09IC8vIFxyXG5jb25zdCBjb250cm9sbGVyID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyBzZXRzIGN1cnJlbnQgY2F0IHRvIGZpcnN0IGluIGFycmF5XHJcbiAgICAgICAgY2F0c01vZGVsLmN1cnJlbnRDYXQgPSBjYXRzTW9kZWwuY2F0c1swXTtcclxuICAgICAgICBjYXRMaXN0Vmlld2VyLmluaXQoKTtcclxuICAgICAgICBjYXRWaWV3ZXIuaW5pdCgpO1xyXG4gICAgfSxcclxuICAgIC8vIGluaXRzIHZpZXdzXHJcbiAgICBnZXRDdXJyZW50OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBjYXRzTW9kZWwuY3VycmVudENhdDtcclxuICAgIH0sXHJcbiAgICBnZXRDYXRzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBjYXRzTW9kZWwuY2F0cztcclxuICAgIH0sXHJcbiAgICAvLyBzZXRzIGN1cnJlbnRseSB2aWV3ZWQgY2F0IHRvIG9ialxyXG4gICAgc2V0Q3VycmVudDogZnVuY3Rpb24ob2JqKXtcclxuICAgICAgICBjYXRzTW9kZWwuY3VycmVudENhdCA9IG9iajtcclxuICAgIH0sXHJcbiAgICAvLyBjbGljayBjb3VudGVyXHJcbiAgICBjbGlja0NvdW50OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNhdHNNb2RlbC5jdXJyZW50Q2F0LmNsaWNrcysrO1xyXG4gICAgICAgIGNhdFZpZXdlci5yZW5kZXIoKTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnRyb2xsZXIuaW5pdCgpO1xyXG4vLyBmdW5jdGlvbiBjb250cm9sbGVySW5pdCgpe1xyXG4vLyAgICAgbW9kZWxJbml0KCk7XHJcbi8vICAgICB2aWV3SW5pdCgpO1xyXG4vLyB9XHJcbi8vIGZ1bmN0aW9uIGdldENhdHMoKXtcclxuLy8gICAgIHJldHVybiBnZXRBbGxDYXRzKCk7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIHNldEN1cnJlbnQoY2F0KXtcclxuLy8gICAgIGNhdHNNb2RlbC5jdXJyZW50Q2F0ID0gY2F0O1xyXG4vLyB9XHJcbi8vIGZ1bmN0aW9uIGNsaWNrQ291bnQoKXtcclxuLy8gICAgIGNhdHNNb2RlbC5jdXJyZW50Q2F0LmNsaWNrcysrO1xyXG4vLyAgICAgY2xpY2tSZW5kZXIoKTtcclxuLy8gfVxyXG4iLCIvLyA9PT09PT09PT09IE1vZGVsID09PT09PT0gLy9cclxubGV0IGNhdHNNb2RlbCA9IHtcclxuICAgIGNhdHM6IFt7IFxyXG4gICAgICAgICAgICBuYW1lOiBcIktlZGlcIixcclxuICAgICAgICAgICAgaW1hZ2U6IFwiLi9pbWcvMS5qcGdcIixcclxuICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgIGNsaWNrczogMCBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIG5hbWU6IFwiR3JhdmVuXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi4vaW1nLzIuanBnXCIsXHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBjbGlja3M6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJGbHVmZmlraW5zXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi4vaW1nLzMuanBnXCIsXHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICBjbGlja3M6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJGYW5nc3RlclwiLFxyXG4gICAgICAgICAgICBpbWFnZTogXCIuL2ltZy80LmpwZ1wiLFxyXG4gICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgY2xpY2tzOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiTXIuIFdpZGRlcnNoaW5zXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi4vaW1nLzUuanBnXCIsXHJcbiAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgICBjbGlja3M6IDBcclxuICAgICAgICB9XSxcclxuICAgICAgICBjdXJyZW50Q2F0OiBudWxsXHJcbn07XHJcblxyXG4vLyBmdW5jdGlvbiBtb2RlbEluaXQoKXtcclxuLy8gICAgIGlmKCFsb2NhbFN0b3JhZ2UuY2F0cyl7XHJcbi8vICAgICAgICAgbG9jYWxTdG9yYWdlLmNhdHMgPSBKU09OLnN0cmluZ2lmeShjYXRzKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBmdW5jdGlvbiBnZXRBbGxDYXRzKCl7XHJcbi8vICAgICAvLyBjYXRzLmZvckVhY2goKGNhdCkgPT4ge1xyXG4vLyAgICAgLy8gICAgIGNvbnNvbGUubG9nKGNhdC5uYW1lKTtcclxuLy8gICAgIC8vICAgICBjb25zb2xlLmxvZyhjYXQuaW1hZ2UpO1xyXG4vLyAgICAgLy8gICAgIGNvbnNvbGUubG9nKGNhdC5pZCk7XHJcbi8vICAgICAvLyB9KTtcclxuLy8gICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5jYXRzKTtcclxuLy8gfVxyXG4vLyBmdW5jdGlvbiBhZGQob2JqKSB7XHJcbi8vICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmNhdHMpO1xyXG4vLyAgICAgZGF0YS5wdXNoKG9iaik7XHJcbi8vICAgICBsb2NhbFN0b3JhZ2UuY2F0cyA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4vLyB9IiwiLy8gPT09PT09PT09PSB2aWV3ID09PT09PT09PSAvL1xyXG5jb25zdCBjYXRMaXN0Vmlld2VyID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyBzZWxlY3QgRE9NIGVsZW1lbnRzXHJcbiAgICAgICAgdGhpcy5jYXRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdExpc3QnKVxyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCBodG1sU3RyID0gJyc7XHJcbiAgICAgICAgbGV0IGNhdHMgPSBjb250cm9sbGVyLmdldENhdHMoKTtcclxuICAgICAgICBjYXRzLmZvckVhY2goKGNhdCkgPT4ge1xyXG4gICAgICAgICAgICBodG1sU3RyICs9IGBcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNhdEJ1dHRvblwiPiR7Y2F0Lm5hbWV9PC9saT4gXHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgY2F0TGlzdC5pbm5lckhUTUwgPSBodG1sU3RyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGNhdExpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoY2F0Q29weSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhjYXRDb3B5KTtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBjYXRDb3B5ID0gZS50YXJnZXQuaW5uZXJIVE1MO1xyXG4gICAgICAgIC8vICAgICAgICAgY2F0cy5mb3JFYWNoKChjYXQpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhjYXQubmFtZSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coY2F0Q29weSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYoY2F0Lm5hbWUgPT09IGNhdENvcHkpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNldEN1cnJlbnQoY2F0Q29weSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgICAgICBjYXRWaWV3ZXIucmVuZGVyKCk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgY2F0TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlubmVySFRNTCk7XHJcbiAgICAgICAgICAgIGNhdHMuZm9yRWFjaCgoY2F0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihlLnRhcmdldC5pbm5lckhUTUwgPT09IGNhdC5uYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuc2V0Q3VycmVudChjYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdFZpZXdlci5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBjYXRWaWV3ZXIgPSB7XHJcbiAgICBpbml0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuY2F0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXREaXNwbGF5Jyk7XHJcbiAgICAgICAgdGhpcy5jbGlja0NvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xpY2tzJyk7XHJcbiAgICAgICAgY2F0RGlzcGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnY2F0SW1hZ2UnKXtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuY2xpY2tDb3VudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29udHJvbGxlci5nZXRDdXJyZW50KCkpO1xyXG4gICAgICAgIGxldCBodG1sU3RyID0gJyc7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRDYXQgPSBjb250cm9sbGVyLmdldEN1cnJlbnQoKTtcclxuICAgICAgICBodG1sU3RyID0gYFxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7Y3VycmVudENhdC5pbWFnZX1cIiBjbGFzcz1cImNhdEltYWdlXCI+XHJcbiAgICAgICAgICAgIDxwPk5hbWU6ICR7Y3VycmVudENhdC5uYW1lfTwvcD5cclxuICAgICAgICAgICAgPHA+SUQjOiAke2N1cnJlbnRDYXQuaWR9PC9wPlxyXG4gICAgICAgICAgICA8cD5OdW1iZXIgb2YgY2xpY2tzOjxzcGFuIGlkPVwiY2xpY2tzXCI+JHtjdXJyZW50Q2F0LmNsaWNrc308L3NwYW4+PHA+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBjYXREaXNwbGF5LmlubmVySFRNTCA9IGh0bWxTdHI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGNvbnN0IGNhdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0TGlzdCcpO1xyXG4vLyBmdW5jdGlvbiBjYXRMaXN0UmVuZGVyKCl7XHJcbi8vICAgICBsZXQgaHRtbFN0ciA9ICcnO1xyXG4vLyAgICAgbGV0IGNhdHMgPSBjb250cm9sbGVyLmdldENhdHMoKTtcclxuLy8gICAgIGNhdExpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdjYXQgbGlzdCBjbGlja2VkJyk7XHJcbi8vICAgICB9KTtcclxuLy8gICAgIGNhdHMuZm9yRWFjaCgoY2F0KSA9PiB7XHJcbi8vICAgICAgICAgaHRtbFN0ciArPSBgXHJcbi8vICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNhdEJ1dHRvblwiPiR7Y2F0Lm5hbWV9PC9saT5cclxuLy8gICAgICAgICBgO1xyXG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKGh0bWxTdHIpO1xyXG4vLyAgICAgICAgIGNhdExpc3QuaW5uZXJIVE1MID0gaHRtbFN0cjtcclxuLy8gICAgIH0pO1xyXG4vLyB9XHJcbi8vIGNvbnN0IGNhdFZpZXdlciA9IHtcclxuLy8gICAgIGluaXQ6IGZ1bmN0aW9uKCl7XHJcbi8vICAgICAgICAgLy8gc2VsZWN0IERPTSBlbGVtZW50c1xyXG4vLyAgICAgICAgIHRoaXMuY2F0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXREaXNwbGF5Jyk7XHJcbi8vICAgICAgICAgdGhpcy5jbGlja0NvdW50RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGlja3MnKTtcclxuLy8gICAgICAgICAvLyBhZGQgZXZlbnRsaXN0ZW5lciB0byBjYXQgZGlzcGxheSBcclxuLy8gICAgICAgICBjYXREaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuLy8gICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NOYW1lID0gJ2NhdEltYWdlJyl7XHJcbi8vICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmNsaWNrQ291bnQoKTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbi8vICAgICB9LFxyXG4vLyAgICAgcmVuZGVyOiBmdW5jdGlvbigpe1xyXG4vLyAgICAgICAgIGxldCBjdXJyZW50Q2F0ID0gY29udHJvbGxlci5nZXRDdXJyZW50KCk7XHJcbi8vICAgICAgICAgbGV0IGRpc3BsYXkgPSAnJztcclxuLy8gICAgICAgICBjbGlja0NvdW50RGlzcGxheS5pbm5lckhUTUwgPSBjdXJyZW50Q2F0LmNsaWNrcztcclxuLy8gICAgICAgICBpZigpXHJcbi8vICAgICB9XHJcblxyXG4vLyB9XHJcbi8vIGNvbnNvbGUubG9nKCdjb250cm9sbGVyIGNvbm5lY3RlZCEnKTtcclxuLy8gY29uc3QgY2F0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRMaXN0Jyk7XHJcbi8vIGNvbnN0IGNhdFBpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXREaXNwbGF5Jyk7XHJcbi8vIC8vIGFkZCBldmVudCBsaXN0ZW5lciB0byBVTCB0YXJnZXRcclxuLy8gY2F0TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhdENsaWNrKTtcclxuLy8gLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGNhdCBwaWNzXHJcbi8vIGNhdFBpYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQ291bnQpO1xyXG4vLyAvLyBjb25zb2xlLmxvZygndmlldyBjb25uZWN0ZWQnKTtcclxuLy8gZnVuY3Rpb24gdmlld0luaXQoKXtcclxuLy8gICAgIHRoaXMuY2F0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRMaXN0Jyk7XHJcbi8vICAgICB0aGlzLmNhdERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0RGlzcGxheScpO1xyXG4vLyAgICAgdGhpcy5jbGlja0NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NsaWNrcycpO1xyXG4vLyB9XHJcbi8vIGZ1bmN0aW9uIGNhdENsaWNrKGNhdCl7XHJcbi8vICAgICBsZXQgY2F0TmFtZSA9IGNhdC50YXJnZXQudGV4dENvbnRlbnQ7XHJcbi8vICAgICAvLyBjb25zb2xlLmxvZyhjYXROYW1lKTtcclxuLy8gICAgIGNhdFJlbmRlcihjYXROYW1lKTtcclxuLy8gfVxyXG4vLyBmdW5jdGlvbiBjYXRMaXN0UmVuZGVyKCl7XHJcbi8vICAgICBsZXQgaHRtbFN0ciA9ICcnO1xyXG4vLyAgICAgZ2V0Q2F0cygpLmZvckVhY2goKGNhdCkgPT4ge1xyXG4vLyAgICAgICAgIGh0bWxTdHIgKz0gYFxyXG4vLyAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjYXRCdXR0b25cIj4ke2NhdC5uYW1lfTwvbGk+XHJcbi8vICAgICAgICAgYFxyXG4vLyAgICAgfSk7XHJcbi8vICAgICB0aGlzLmNhdExpc3QuaW5uZXJIVE1MID0gaHRtbFN0cjtcclxuLy8gfVxyXG4vLyBmdW5jdGlvbiBjYXRSZW5kZXIoY2F0TmFtZSl7XHJcbi8vICAgICBsZXQgY2F0VmlldyA9ICcnO1xyXG4vLyAgICAgLy8gbG9vcCB0aHJ1IGNhdHMgYXJyYXkgYW5kIG1hdGNoIGNhdE5hbWUgdG8gY2F0Lm5hbWVcclxuLy8gICAgIGdldENhdHMoKS5mb3JFYWNoKChjYXQpID0+IHtcclxuLy8gICAgICAgICBpZihjYXQubmFtZSA9PT0gY2F0TmFtZSl7XHJcbi8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNhdCk7XHJcbi8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNhdE5hbWUpO1xyXG4vLyAgICAgICAgICAgICBjYXRWaWV3ID0gYFxyXG4vLyAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2NhdC5pbWFnZX1cIiBjbGFzcz1cImNhdEltYWdlXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8cD5OYW1lOiAke2NhdC5uYW1lfTwvcD5cclxuLy8gICAgICAgICAgICAgICAgIDxwPklEIzogJHtjYXQuaWR9PC9wPlxyXG4vLyAgICAgICAgICAgICAgICAgPHA+TnVtYmVyIG9mIGNsaWNrczo8c3BhbiBpZD1cImNsaWNrc1wiPjA8L3NwYW4+PHA+XHJcbi8vICAgICAgICAgICAgIGBcclxuLy8gICAgICAgICBjYXREaXNwbGF5LmlubmVySFRNTCA9IGNhdFZpZXc7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNhdC5uYW1lKTtcclxuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhjYXROYW1lKTtcclxuLy8gICAgICAgICAvLyBpZihjYXQubmFtZSA9PT0gY2F0TmFtZSl7XHJcbi8vICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdoZWxsbycpO1xyXG4vLyAgICAgICAgIC8vIH1cclxuLy8gICAgIH0pO1xyXG4vLyB9XHJcbi8vIGZ1bmN0aW9uIGNsaWNrUmVuZGVyKGNsaWNrcyl7XHJcbi8vICAgICBjb25zdCBjbGlja0NvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xpY2tzJyk7XHJcbi8vICAgICBjbGlja0NvdW50ZXIuaW5uZXJIVE1MID0gY2xpY2tzO1xyXG4vLyB9Il19