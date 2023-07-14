const { Size, Product, Category, Color } = require('../db');

const filterBySizeRouter = async (req, res) => {
    const { sizes } = req.query;

    try {
        const size = await Size.findOne({
            where: {
                name: sizes
            }
        });

        if (!size) {
            res.status(404).json({ message: 'Size no encontrada' });
            return;
        }
        const productsSize = await Product.findAll({
            include: [
                {
                    model: Size,
                    where: {
                        name: sizes,
                    },
                    attributes: ['name']
                },
                {
                    model: Category,
                    attributes: ['name']
                },
                {
                    model: Color,
                    attributes: ['name']
                },
       
            ]
        });

        res.status(200).send(productsSize)
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}


/*    const sizeOne = await Product.findAll({
       where: {
           size: {
               [Op.eq]: 1,
           }
       }
   });
   const sizeTwo = await Product.findAll({
       where: {
           size: {
               [Op.eq]: 2,
           }
       }
   });
   const sizeThree = await Product.findAll({
       where: {
           size: {
               [Op.eq]: 3,
           }
       }
   });
   const sizeResponse = {
       1: sizeOne,
       2: sizeTwo,
       3: sizeThree,
   }
 
 
   if (!size) {
       res.status(404).json({ message: 'Talle no encontrado' });
   } else if (size in sizeResponse) {
       res.status(201).send(sizeResponse[size])
   } else {
       res.status(404).send({ message: 'Talle no existe' })
   }
 
} catch (error) {
   res.status(400).send(error);
   console.log(error);
}
}
*/


module.exports = filterBySizeRouter;


