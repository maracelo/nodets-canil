type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish'

export const createMenuObject = (activeMenu: MenuOptions) =>{
    let returnObject = {
        all: true,
        dog: false,
        cat: false,
        fish: false
    }

    if(activeMenu !== ''){
        returnObject.all = false;
        returnObject[activeMenu] = true;
    }

    return returnObject;
}