function insert(num){
    document.form.input.value = document.form.input.value+num;
}
function equal(){
    var exp = document.form.input.value;
    if(exp){
        document.form.input.value = eval(exp);
    }
}
function clean(){
    document.form.input.value = "";
}
function back(){
    var exp = document.form.input.value;
    document.form.input.value = exp.substring(0,exp.length-1);
}