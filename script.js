function formular(form){
    for (let i = 0; i < form.length; i++){
        if(form[i].value.length == 0){
            form[i].value = "du mangler dette felt"
        }
        else{
            return
        }
    }


}