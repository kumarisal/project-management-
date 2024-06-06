*{
    box-sizing: border-box;
}
body{
    margin: 0px;
    padding: 0px;
    background-color:#E0DDAA ;
    
}
.toolbo-container{
    height: 5rem;
    background-color: #141E27;
    display: flex;
    align-items: center;
    
    
    
}
.toolbo-priority-cont{
    height: 3rem;
    background-color: #EEEDDE;
    width: 18rem;
    margin-left: 5rem ;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 3px;

}
.action-btn-cont{
    background-color:#EEEDDE ;
    height: 3rem;
    width: 10rem;
    margin-left: 5rem;
    background-color:  lightgray ;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
}
.colour{
    background-color: blueviolet;
    height: 1.5rem;
    width: 3rem;
}
.lp{
    background-color: lightcoral;
}
.b{
    background-color: blue;
}
.gr{
    background-color: greenyellow;
}
.bl{
    background-color: black;
}.add-btn{
    font: size 1.5rem;
}
.remove-btn{
    font: size 1.5rem;
}
.modal-cont{
    background-color: #E0DDAA;
    height: 50vh;
    width: 50vw;
    display: none;
    position: absolute;
    left: 25vw;
    top: 25vh;
}
.text-cont{
    outline: none;
    resize: none;
    border: none;
    background-color: #EEEDDE;
    height: 100%;
    width:75% ;
    font-size: 2rem;
    padding: 2rem;
    border-right: solid #141E27;
}
.priority-colour-cont{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 25%;
    background-color: #EEEDDE;
}
.priority-colour{
    height: 3rem;
    width:5rem;

}
.active{
    border: 2px solid rgba(145, 161, 162, 0.363);
}
.main-cont{
    margin-top: 2rem;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 2rem;
    

}
.ticket-cont{
    background-color: #aeb39f;
    height: 10rem;
    width: 15rem;

}
.ticket-colour{
    height: 1rem;

}
.ticket-id{
    height: 1.5rem;
    background-color: #EEEDDE;

}
.task-area{
    height: calc(100%-1rem-1.5rem);
    padding:5px ;
    font-size:1.25rem; ;

}