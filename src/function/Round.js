export default function Round(number){
    const fraction = number-Math.floor(number)
    if(fraction < 0.25){
        return Math.floor(number)
    }else if(fraction > 0.25 &&  fraction < 0.75){
        return Math.floor(number)+0.5
    }else{
        return Math.round(number)
    }
}