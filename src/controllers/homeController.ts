import { Request, Response } from 'express';
import { Product } from '../models/Product';
import {Op} from 'sequelize'

//Importando o arquivo mysql.ts
import { sequelize } from '../instances/mysql'
import { User } from '../models/User';

export const home = async (req: Request, res: Response)=>{
    const user = User.build({
        name:'Maeve',
        age:24
    })
    await user.save()

    //Puxar os usuários que estão no BD
   /* let users = await User.findAll({
        attributes: {exclude: ['name']}
        where:{name: 'A'}
        where:{
            name:{
                [Op.gt]:20, > 20 (GT greater than)
                [Op.gte]:100,  > 100 (GT GREATER THAN OR EQUAL)
                [Op.lt]:50,   50
                [Op.lte]:80,  <= 80
                [Op.between]:[10,100]
                [Op.in]: 10
                [Op.notIn]: 20
                [Op.like]:'%A'
            }
        }
    })*/
    
    
    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        user
    });
};