# 📋 Guia de Integração: Formulário com Backend

## 🎯 Resumo da Solução Implementada

Você agora consegue:
1. ✅ Acessar o formulário de cadastro completo a partir da aba de "Cadastrar" no login
2. ✅ Registrar-se rapidamente na tela de login
3. ✅ Submeter dados do formulário multi-step para o backend
4. ✅ Ver mensagens de sucesso/erro em ambas as páginas

---

## 📍 Fluxo de Navegação

```
Página de Login (tabs: Entrar/Cadastrar)
    ↓
[Aba de Cadastrar] → Formulário Rápido + Botão "Preenchimento completo de dados"
    ↓
Página de Cadastro (7 passos multi-step)
    ↓
[Submissão] → Envia para Backend (/api/cadastro)
    ↓
Mensagem de Sucesso/Erro
```

---

## 🛠️ Arquivos Modificados

### **Frontend (React)**

1. **[src/services/api.js](src/services/api.js)**
   - Novo arquivo com funções para comunicar com a API
   - Contém: `cadastroService.submeterCadastro()` e `loginService.fazerLogin()`

2. **[src/components/pages/Login/components/RegisterForm.jsx](src/components/pages/Login/components/RegisterForm.jsx)**
   - Adicionado: navegação para `/cadastro` com botão
   - Adicionado: integração com API para registro rápido
   - Adicionado: mensagens de sucesso/erro
   - Adicionado: validação de senhas

3. **[src/components/pages/Cadastro/index.jsx](src/components/pages/Cadastro/index.jsx)**
   - Adicionado: estado de carregamento (`isLoading`)
   - Adicionado: mensagem de feedback
   - Modificado: `handleSubmit` para chamar `cadastroService.submeterCadastro()`
   - Modificado: passa `isLoading` para `FormNavigation`

4. **[src/components/pages/Cadastro/components/FormNavigation.jsx](src/components/pages/Cadastro/components/FormNavigation.jsx)**
   - Adicionado: prop `isLoading`
   - Adicionado: desabilita botões durante carregamento
   - Adicionado: mostra "Enviando..." no botão de envio

5. **CSS Updates**
   - [src/assets/css/cadastro.css](src/assets/css/cadastro.css): estilos para mensagens
   - [src/assets/css/login.css](src/assets/css/login.css): estilos para mensagens de autenticação

### **Backend (Python/Flask)**

1. **[backend/app.py](backend/app.py)**
   - Adicionado: `hash_senha()` para segurança
   - Adicionado: endpoint `/api/registro-rapido` (POST)
   - Adicionado: endpoint `/api/login` (POST)
   - Adicionado: endpoint `/api/cadastro` (POST) - modificado para receber mais dados

---

## 🚀 Como Usar

### **1. Iniciar o Backend**

```bash
cd ConnecTea/backend
python app.py
```

O servidor rodará em `http://localhost:5000`

### **2. Iniciar o Frontend**

```bash
cd ConnecTea
npm run dev
```

---

## 📊 Endpoints da API

### **1. Registro Rápido**
```
POST /api/registro-rapido
Content-Type: application/json

{
  "name": "João Silva",
  "cpf": "123.456.789-00",
  "email": "joao@email.com",
  "password": "senha123"
}

Response:
{
  "sucesso": true,
  "mensagem": "Registro realizado com sucesso!",
  "email": "joao@email.com"
}
```

### **2. Login**
```
POST /api/login
Content-Type: application/json

{
  "email": "joao@email.com",
  "senha": "senha123"
}

Response:
{
  "sucesso": true,
  "mensagem": "Login realizado com sucesso!",
  "id_responsavel": 1,
  "email": "joao@email.com"
}
```

### **3. Submeter Cadastro Completo**
```
POST /api/cadastro
Content-Type: application/json

{
  "nomeCompleto": "João Silva",
  "dataNascimento": "2015-01-15",
  "idade": 9,
  ... (outros campos dos 7 passos)
}

Response:
{
  "sucesso": true,
  "mensagem": "Dados salvos com sucesso!"
}
```

---

## 🔧 Configurações Importantes

### **URL da API (Frontend)**
Arquivo: `src/services/api.js`
```javascript
const API_BASE_URL = 'http://localhost:5000';
```

Se precisar mudar a porta ou domínio, atualize aqui.

### **Porta do Backend (Python)**
Arquivo: `backend/app.py`
```python
if __name__ == '__main__':
    app.run(debug=True, port=5000)
```

---

## ⚠️ Validações Implementadas

### **Frontend**
- ✅ Senha e confirmação de senha devem ser iguais
- ✅ Aceitar termos de uso é obrigatório
- ✅ Email é obrigatório

### **Backend**
- ✅ Email é obrigatório
- ✅ Senha é criptografada com SHA256
- ✅ Email único (não permite duplicatas)

---

## 🐛 Possíveis Ajustes Futuros

1. **Autenticação JWT**: Implementar tokens para sessões persistes
2. **Validação de Email**: Adicionar verificação de email único
3. **CPF Validation**: Validar formato e duplicidade do CPF
4. **Armazenamento de Dados Completos**: Salvar todos os 7 passos do formulário no BD
5. **Upload de Arquivos**: Se houver anexos no formulário

---

## 📝 Resumo das Mudanças

| Arquivo | Tipo | Descrição |
|---------|------|-----------|
| `api.js` | ✨ Novo | Serviço de comunicação com API |
| `RegisterForm.jsx` | ✏️ Modificado | Integração com API + navegação |
| `Cadastro/index.jsx` | ✏️ Modificado | Integração com API + loading |
| `FormNavigation.jsx` | ✏️ Modificado | Suporte a loading state |
| `cadastro.css` | ✏️ Modificado | Estilos de mensagens |
| `login.css` | ✏️ Modificado | Estilos de mensagens |
| `app.py` | ✏️ Modificado | Novos endpoints de autenticação |

---

## ✅ Teste o Sistema

1. Acesse http://localhost:3000 (ou a porta do seu Vite)
2. Vá para a página de Login
3. Clique na aba "Cadastrar"
4. Tente registrar um novo usuário
5. Depois clique em "Preenchimento completo de dados"
6. Preencha os 7 passos do formulário
7. Clique em "Enviar Cadastro"
8. Verifique as mensagens de sucesso/erro
9. Abra o banco de dados `connectea.db` para verificar se os dados foram salvos

---

## 🎓 Próximos Passos

1. Implementar autenticação persistente (sessões/JWT)
2. Proteger rotas authenticated
3. Adicionar mais validações nos passos do formulário
4. Implementar upload de documentos
5. Criar dashboard com dados do usuário
