export default function(){
    const $connectionInfo = document.createElement('div');
    $connectionInfo.classList.add('popUpTopInfo');
    if(event.type === "offline"){
        $connectionInfo.classList.add('danger');
        $connectionInfo.textContent = "Sa ha perdido la conexion"
    }
    else if (event.type === "online"){
        $connectionInfo.classList.remove('danger')
        $connectionInfo.classList.add('info')
        $connectionInfo.textContent = "Se ha recuperado la conexion"
    }
    setTimeout(()=>{
        document.body.removeChild($connectionInfo);
    },1500)
    document.body.insertAdjacentElement('afterbegin',$connectionInfo)
}