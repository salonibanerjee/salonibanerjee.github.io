var mini = true;

function toggleSidebar() {

  /*if((document.getElementById("mySidebar").style.width == "0.1px") OR (document.getElementById("mySidebar").style.width == "200px"))
    togglesmolSidebar();

  else*/ if (mini) {
    console.log("opening sidebar");
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    this.mini = false;
  } else {
    console.log("closing sidebar");
    document.getElementById("mySidebar").style.width = "85px";
    document.getElementById("main").style.marginLeft = "85px";
    this.mini = true;
  }
}

/*---------------------------------------------------*/