import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const verifyAdminToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token de acceso no proporcionado' });
  }
  jwt.verify(token, 'secretKey', (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ message: 'Token de acceso no válido' });
    }
    req.userId = decoded.id;
    next();
  });
};

export const verifyEmpresaToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token de acceso no proporcionado' });
  }
  jwt.verify(token, 'secretKey', (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ message: 'Token de acceso no válido' });
    }
    req.userId = decoded.id;
    next();
  });
};

export const verifyTrabajadorToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token de acceso no proporcionado' });
  }
  jwt.verify(token, 'secretKey', (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ message: 'Token de acceso no válido' });
    }
    req.userId = decoded.id;
    next();
  });
};
