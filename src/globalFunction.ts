export function isNumberKey(event) : any {
    if(event.charCode >= 48 && event.charCode <= 57){
        return true;
    }
    return false;
}

export function getDateFormat(date) : any {
    let dt = new Date(date);
    let year  = dt.getFullYear();
    let month = (dt.getMonth() + 1).toString().padStart(2, "0");
    let day   = dt.getDate().toString().padStart(2, "0");
    return month + '/' + day + '/' + year;
}

export function EncodeDecodeBase64(value,changeTo:string){
    if(changeTo == 'encode'){
        return btoa(value);
    }else{
        return atob(value);
    }
}