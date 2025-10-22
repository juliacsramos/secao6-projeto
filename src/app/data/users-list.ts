import { IUser } from '../interfaces/user/user.interface';
// eu digo que a minha lista de usuários é um array do tipo IUser
export const UsersList: IUser[] = [
    {
        nome: 'João Silva',
        email: 'joao.silva@email.com',
        senha: 'hash123456',
        idade: 28,
        endereco: {
            rua: 'Rua das Flores',
            numero: 123,
            cidade: 'São Paulo',
            estado: 'SP',
            pais: 'Brasil'
        },
        telefone: '11987654321',
        ativo: true,
        funcao: 'Desenvolvedor Senior',
        dataCadastro: '2023-01-15T18:45:00',
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: '2023-10-21T14:30:00'
        }
    },
    {
        nome: 'Maria Santos',
        email: 'maria.santos@email.com',
        senha: 'hash789012',
        idade: 32,
        endereco: {
            rua: 'Avenida Brasil',
            numero: 456,
            cidade: 'Rio de Janeiro',
            estado: 'RJ',
            pais: 'Brasil'
        },
        telefone: '21976543210',
        ativo: true,
        funcao: 'Product Manager',
        dataCadastro: '2023-02-20T18:45:00',
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: '2023-10-20T18:45:00'
        }
    },
    {
        nome: 'Pedro Oliveira',
        email: 'pedro.oliveira@email.com',
        senha: 'hash345678',
        idade: 45,
        endereco: {
            rua: 'Rua da Paz',
            numero: 789,
            cidade: 'Curitiba',
            estado: 'PR',
            pais: 'Brasil'
        },
        telefone: '41988765432',
        ativo: false,
        funcao: 'Arquiteto de Software',
        dataCadastro: '2023-03-10T18:45:00',
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: '2023-09-15T10:20:00'
        }
    },
    {
        nome: 'Ana Souza',
        email: 'ana.souza@email.com',
        senha: 'hash901234',
        idade: 29,
        endereco: {
            rua: 'Rua XV de Novembro',
            numero: 1010,
            cidade: 'Porto Alegre',
            estado: 'RS',
            pais: 'Brasil'
        },
        telefone: '51998876543',
        ativo: true,
        funcao: 'UX Designer',
        dataCadastro: '2023-04-05T18:45:00',
        status: {
            online: true,
            verificado: false,
            assinaturaAtiva: true,
            ultimoAcesso: '2023-10-21T16:15:00'
        }
    },
    {
        nome: 'Lucas Mendes',
        email: 'lucas.mendes@email.com',
        senha: 'hash567890',
        idade: 35,
        endereco: {
            rua: 'Avenida Paulista',
            numero: 2020,
            cidade: 'São Paulo',
            estado: 'SP',
            pais: 'Brasil'
        },
        telefone: '11977889900',
        ativo: true,
        funcao: 'Tech Lead',
        dataCadastro: '2023-05-15T18:45:00',
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: '2023-10-21T17:00:00'
        }
    }
];