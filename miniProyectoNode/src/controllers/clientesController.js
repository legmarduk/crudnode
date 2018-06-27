const controller = {};

controller.list = (req , res)=>{  // metodo
   
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM clientes',(err, clientesrows)=>{
            if(err){
                res.json(err); // en caso de error muestra json con el error
            }
            
            res.render('clientes',{
                data: clientesrows //paso a data la respuesta de la query
           });
        });
    })
};

controller.save = (req , res) => {
    const data = req.body;
    req.getConnection((err,conn) => {
        conn.query('INSERT INTO clientes set ?', [data],(err, rows)=>{
           
            res.redirect('/');
        });
    })
};

controller.delete = (req,res) =>{
    const id = req.params.id;
    //const{id} = req.params; otra forma de obtener el id
    
    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM clientes WHERE id =?',[id], (err,rows)=>{
            res.redirect('/');
        });
    });

};

controller.edit = (req, res) =>{
    const id = req.params.id;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM clientes WHERE id=?',[id],(err,cliente)=>{
            res.render('editarcliente',{
                data: cliente[0] // rows es lo que trae la query si no tiene error
            })
        })
    });
};

controller.update = (req, res) =>{
    const id = req.params.id;
    const newCliente = req.body;

    req.getConnection((err, conn)=>{
        conn.query('UPDATE clientes set ? where id=?',[newCliente,id], (err, rows)=>{
            res.redirect('/');
        });
    });

};

module.exports = controller;