import { loginRepostitory } from '../repositories';
import jwt from 'jsonwebtoken';
import AppError from '../../../shared/helpers/app-error';

interface Props {
  email: string;
  password: string;
}

interface Response {
  token: string;
}

const loginService = async ({ email, password }: Props): Promise<Response> => {
  if (!email.length) throw new AppError('O email é obrigatório', 400);
  if (!password.length) throw new AppError('O email é obrigatório', 400);

  const client = await loginRepostitory({ email });

  if (!client) throw new AppError('Cliente não encontrado', 400);

  if (client.password !== password) throw new AppError('Senha incorreta', 400);

  const token = jwt.sign(
    { id: client.id, name: client.name },
    process.env.PRIVATE_TOKEN_KEY as string,
    { expiresIn: '72h' }
  );

  return { token };
};

export default loginService;
