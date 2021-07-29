const paisesServicios = require('../servicios/paises.servicios.js');

module.exports = (app) => {

    app.get("/paises/", async (req, res) => {
        try {

            const consultaPais = await paisesServicios.mostrarPaises(req.body);

            if (consultaPais.length > 0) { res.status(200).json(consultaPais); }

            else { res.status(404).json("El Pais no existe"); }

        } catch (error) { res.status(500).json({ Error: error.message }); }

    });

    app.post("/paisesFiltro/", async (req, res) => {

        try {

            const consultaPais = await paisesServicios.mostrarPaises(req.body);

            if (consultaPais.length > 0) { res.status(200).json(consultaPais); }

            else {
                res.status(404).json({
                    error: `No Hay datos para mostar`
                });
            }



        } catch (error) { res.status(500).json({ Error: error.message }); }

    });

    app.post("/paises/", async (req, res) => {

        const crearPais = await paisesServicios.crearPais(req.body);

        if (crearPais.length > 0) {
            res.status(201).json({
                mensaje: `Pais creado correctamente ! `
            });
        }

        else { res.status(400).json({ mensaje: "Error al Crear Pais" }); }

    });

}