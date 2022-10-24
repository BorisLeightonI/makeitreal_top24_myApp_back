const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  try {
    // En al back con minuculas en el front con mayuscula
    const { authorization } = req.headers

    //Para verificar el encabezado llega
    if (!authorization) {
      throw new Error("Sin código de autorización")
    }

    //Es para separar la palabra bearer del token
    const [_, token] = authorization.split(" ")

    // Para verificar que trae un token
    if (!token) {
      throw new Error("Sin Token")
    }

    //Reversión de la codificación del token
    const { id } = jwt.verify(token, process.env.SECRET_KEY)

    //Mutar el objeto user (req.user) para poder acceder a el más adelante
    req.userId = id
    console.log('Autorizado');
    next()
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
}