export function forApi(publicList){
    return {type:"publicApi/entries",payload:publicList}
}
export function forCat(categoryList){
    return {type:"publicApi/category",payload:categoryList}
}
export function forEnt(article){
    return {type:"publicApi/entry" , payload:article}
}