window.onload = () =>{

   let buttons = document.getElementsByTagName("button");
    for(let i = 0; i <= buttons.length; i++){
        buttons[i].onclick= () => {
            let clicked = buttons[i];
            console.log(clicked.id);
            switch(clicked.id)
            {
                case 'buttonPantry': window.open('https://github.com/rjs-creates/ePantry-App');  break;
                case 'buttonPhoto': window.open('https://github.com/rjs-creates/FhottoShoppe');  break;
                case 'buttonMine': window.open('https://github.com/rjs-creates/Minesweeper');  break;
                case 'buttonMolecule': window.open('https://github.com/rjs-creates/Periodic-Table');  break;
                case 'buttonMotor': window.open('https://github.com/rjs-creates/Motorcycle-Picker');  break;
                case 'buttonUser': window.open('https://github.com/rjs-creates/Account-Message-manager');  break;
                case 'buttonResume' : window.open("./misc/Resume.pdf") ; break;
                case 'buttonVehicle' : window.open("https://github.com/rjs-creates/Vehicle-Picker") ; break;
                case 'buttonPixel' : window.open("https://github.com/rjs-creates/Pointy-Pixels") ; break;
                case 'buttonAsp' : window.open("https://github.com/rjs-creates/Earth-Shattering-Asp-app") ; break;

            }
        }
    }
}

