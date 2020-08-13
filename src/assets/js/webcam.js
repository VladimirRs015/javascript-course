export default  function (){
    const $video = document.querySelector('#videoStream')
    function callbackError(error){
       if(error.name === 'NotFoundError'){
        let error = document.createElement('p')
        let errorText = document.createTextNode('No hemos podido establecer conexion con la camara')
        error.appendChild(errorText) 
        $video.insertAdjacentElement('afterbegin',error)
       } 
    // alert('Hubo un error')
    }
    navigator.mediaDevices.getUserMedia({video:true , audio:true}).then(stream=>{
        console.log(stream)
        $video.srceObject= stream
    }).catch(callbackError)
    // navigator.getUserMedia({
    //     video:true
    // },(stream)=>{
    //     console.log(String)
    // },callbackError)

    
}