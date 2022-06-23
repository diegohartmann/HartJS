//#region STRINGS ==========================================================================================================================================================================================
export const numberFromString   = (_string:string) => +(_string.trim());
export const reverseString      = (_string:string) => _string.split('').reverse().join('');
export const isEmtpyString      = (_string:string) => _string===undefined||_string===null||_string.length===0;
export const replacedAllFrom    = (_string:string, _from:string, _to:string='') => _string.split(_from).join(_to);
//#endregion STRING

//#region ARRAYS ==========================================================================================================================================================================================
export const arrayCloneFrom     = (_array:[]) =>  _array.slice();
export const shuffleArray       = (_array:[]) =>  suffleHelper(_array);
export const isEmtpyArray       = (_array:[]) =>  !Array.isArray(_array)||_array.length===0;
export const biggestNumInArray  = (_array:[]) =>  _array.reduce((_anterior,_current)=> _anterior>_current?_anterior:_current);
export const smallestNumInArray = (_array:[]) =>  _array.reduce((_anterior,_current)=> _anterior<_current?_anterior:_current);
export const arrayBySelector    = (_nodeListSelector:string) =>  Array.from(document.querySelectorAll(_nodeListSelector));
export const addToEndOfArray    = (_originalArray:[], _el:any) => {if(Array.isArray(_el)){_el.forEach(_e=>{_originalArray.push(_e)});return}_originalArray.push(_el)};
export const addToStartOfArray  = (_originalArray:[], _el:any) => {if(Array.isArray(_el)){_el.reverse().forEach(_e=>{_originalArray.unshift(_e)});return}_originalArray.unshift(_el)};
export const mergeTwoArrays = (_arr1:[], _arr2:[]) => _arr1.push.apply(_arr1, _arr2)
export const getLastElementFrom = (_array:[] | string) => _array.slice(-1)

//#endregion ARRAY

//#region NUMBERS ==========================================================================================================================================================================================
export const isEven             = (_n:number) =>  _n%2 == 0;
export const sum                = (..._nums:[number]) =>  sumHelper(_nums);
export const multiplicate       = (..._nums:[number]) =>  multHelper(_nums);
export const randomFloatBetween = (_min:number, _max:number) =>  randomFloatHelper(_min,_max);
export const randomIntBetween   = (_min:number, _max:number) =>  Math.floor(randomFloatHelper(_min,_max));
//#endregion NUMBER

//#region HTML-ELEMENTS ==========================================================================================================================================================================================
// export const hideEl             = _el => {_el.classList.add('hide')};
// export const showEl             = _el => {_el.classList.remove('hide')};
// export const toggleElShow       = _el => {_el.classList.toggle('hide')};
// export const activeEl           = _el => {_el.classList.add('active')};
// export const desactiveEl        = _el => {_el.classList.remove('active')};
// export const toggleElActive     = _el => {_el.classList.toggle('active')};
// export const swapNodes          = (_node1,_node2) => {swapNodesHelper(_node1,_node2)};
// export const createNode         = (_htmlString:string) => {return createNodeHelper(_htmlString)};
// export const appendNode         = (_el:Node | null,_htmlString:string | null) => _el?.appendChild(createNodeHelper(_htmlString));
//#endregion HTML-ELEMENTS 

//#region WINDOW-EVENTS ==========================================================================================================================================================================================
export const onWindowLoad       = (_callback:()=>void) => {window.addEventListener('load',_callback)};
export const onWindowScroll     = (_callback:()=>void) => {window.addEventListener('scroll',_callback)};
export const onWindowOnline     = (_callback:()=>void) => {window.addEventListener('online',_callback)};
export const onWindowOffline    = (_callback:()=>void) => {window.addEventListener('offline',_callback)};
export const onPageHide         = (_callback:()=>void) => {window.addEventListener('pagehide',_callback)};
export const onPageShow         = (_callback:()=>void) => {window.addEventListener('pageshow',_callback)};
//#endregion WINDOW-EVENTS 

//#region BETTER-WORKFLOW ==========================================================================================================================================================================================
export const resetElementScroll = (_el:any) => _el.scrollTo(0,0);
export const typeOf             = (_el:any) => typeOfHelper(_el);
export const log                = (_message:any) => console.log(_message);
export const table              = (_object: [] | {}) => console.table(_object);
export const removeLocalData    = (_key:string) => localStorage.removeItem(_key);
export const loadLocalData      = (_key:string) => localStorage.getItem(_key);
export const saveLocalData      = (_key:string, _value:string) => localStorage.setItem(_key,_value);

export const copyToClipboard = (_text:string|number) => navigator.clipboard.writeText(`${_text}`)

//#endregion BETTER-WORKFLOW


//#region HELPER-FUNCTIONS ==========================================================================================================================================================================================
function suffleHelper(_array:[]){
    for (let i = _array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [_array[i], _array[j]] = [_array[j], _array[i]];
    }
    return _array;
}
// function swapNodesHelper(_node1:Node,_node2: Node){
//         function optionTrue(){_node2?.parentNode.insertBefore(_node1,_node2)}
//         function optionFalse(){_node1?.replaceWith(_node2); _node2?.parentNode.insertBefore(_node1, _node2?.nextElementSibling)}
//         _node1 ===_node2?.nextElementSibling ? optionTrue():optionFalse();
// }
function sumHelper(_nums:[number]){
    let sum = 0;
    _nums.forEach((_n:number)=>{
        sum += _n;
    })
    return sum;
}
function multHelper(_nums:[number]){
    let mult = 1;
    _nums.forEach((_n:number)=>{
        mult *= _n;
    })
    return mult;
}
// function createNodeHelper(_htmlString:string | null) : Node | null{
//     const placeholder=document?.createElement('div');
//     placeholder.innerHTML=_htmlString ?? ``;
//     return placeholder.firstElementChild;
// }
function randomFloatHelper(_min:number,_max: number){
    return _min+Math.random()*(_max-_min+1)
}
function typeOfHelper(_el:any){
    return Object.prototype.toString.call(_el).replace('[object ','').replace(']','');
}
//#endregion HELPER-FUNCTIONS
