var mini = true;

function closeSidebar() {
  
    console.log("closing smol sidebar");
    document.getElementById("mySidebar").style.width = "1px";
    document.getElementById("main").style.marginLeft = "1px";
    this.mini = true;
  
}


function toggleSidebar() {

  /*if((document.getElementById("mySidebar").style.width == "0.1px") OR (document.getElementById("mySidebar").style.width == "200px"))
    togglesmolSidebar();

  else*/ if (mini) {
    console.log("opening sidebar");
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    this.mini = false;
  } else {
    console.log("closing sidebar");
    document.getElementById("mySidebar").style.width = "85px";
    document.getElementById("main").style.marginLeft = "85px";
    this.mini = true;
  }
}

/*---------------------------------------------------*/