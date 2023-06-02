import { Request, Response } from 'express';

const AuthController = {
  login: async (req: Request, res: Response) => {
    try {
      // Lógica de autenticación aquí

      // Ejemplo de autenticación para el usuario admin
      if (req.body.username === 'admin' && req.body.password === 'admin') {
        // Crear el objeto de usuario admin
        const adminUser = {
          username: 'admin',
          role: 'admin',
        };

        return res.status(200).json({ user: adminUser });
      }

      // Ejemplo de autenticación para el usuario empresa
      if (req.body.username === 'empresa' && req.body.password === 'empresa') {
        // Crear el objeto de usuario empresa
        const empresaUser = {
          username: 'empresa',
          role: 'empresa',
        };

        return res.status(200).json({ user: empresaUser });
      }

      // Ejemplo de autenticación para el usuario trabajador
      if (req.body.username === 'trabajador' && req.body.password === 'trabajador') {
        // Crear el objeto de usuario trabajador
        const trabajadorUser = {
          username: 'trabajador',
          role: 'trabajador',
        };

        return res.status(200).json({ user: trabajadorUser });
      }

      // Si las credenciales de inicio de sesión son inválidas, devolvemos un mensaje de error
      res.status(401).json({ message: 'Credenciales de inicio de sesión inválidas' });
    } catch (error: any) {
      res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
    }
  },
};

export default AuthController;
