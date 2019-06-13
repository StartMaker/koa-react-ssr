//节流
export function throt(fn) {
    let timer = null;
    return function (ev) {
        console.log(ev);
        console.log(!timer);
        if(!timer){
            fn(ev);
            timer = setTimeout(() => {
                timer = null;
            },1000);
        }
    }
}