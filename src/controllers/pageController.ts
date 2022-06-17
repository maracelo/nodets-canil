import { Request, Response } from 'express';

import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) =>{
    let list = Pet.getAll();

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals'
        },
        list
    });
}

export const dogs = (req: Request, res: Response) =>{
    let list = Pet.getFromType('dog');
    
    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Todos os Cachorros',
            background: 'banner_dog'
        },
        list
    });
}
export const cats = (req: Request, res: Response) =>{
    let list = Pet.getFromType('cat');

    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Todos os Gatos',
            background: 'banner_cat'
        },
        list
    });
}

export const fishes = (req: Request, res: Response) =>{
    let list = Pet.getFromType('fish');

    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Todos os Peixes',
            background: 'banner_fish'
        },
        list
    });
}