import jwt from 'jsonwebtoken';
import AppError from '../../../shared/helpers/app-error';
import { loginMasterUserRepository } from '../repositories';

interface Props {
  user: string;
  password: string;
}

interface Response {
  token: string;
}

const loginMasterUserService = async ({
  password,
  user,
}: Props): Promise<Response> => {
  if (!user.length) throw new AppError('Usuário é obrigatório', 400);
  if (!password.length) throw new AppError('A senha é obrigatória', 400);

  const masterUser = await loginMasterUserRepository({ user });

  if (!masterUser) throw new AppError('Usuário não encontrado', 400);
  if (masterUser.password !== password)
    throw new AppError('Senha inválida', 400);

  const token = jwt.sign(
    { id: masterUser.id, user: masterUser.user },
    process.env.PRIVATE_TOKEN_KEY as string,
    { expiresIn: '72h' }
  );

  return { token };
};

export default loginMasterUserService;
