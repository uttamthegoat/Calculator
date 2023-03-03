let btn=document.getElementById("btn");
        let btnText=document.getElementById("btnText");
        let btnIcon=document.getElementById("btnIcon");

        btn.onclick= function(){
            document.body.classList.toggle("dark-theme");

            if(document.body.classList.contains("dark-theme")){
                btnText.innerHTML="Dark";
                btnIcon.src="Calculator_theme_dark.png";
            }
            else{
                btnText.innerHTML="Light";
                btnIcon.src="Calculator_theme_sun.png";
            }
        }