# 🚀 Como Iniciar o ConnecTea

## ✅ Pré-requisitos

- Node.js (v14+)
- Python 3.8+
- npm ou yarn

---

## 📦 Instalação

### **1. Backend (Python)**

```bash
cd ConnecTea/backend
python -m venv venv

# Windows
venv\Scripts\activate

# Mac/Linux
source venv/bin/activate

# Instalar dependências
pip install flask flask-cors

# Iniciar o servidor
python app.py
```

**Saída esperada:**
```
Banco de dados 'connectea.db' criado com sucesso!
Iniciando servidor Flask na porta 5000...
 * Running on http://127.0.0.1:5000
```

---

### **2. Frontend (React)**

```bash
cd ConnecTea

# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

**Saída esperada:**
```
VITE v X.X.X  ready in XXX ms

➜  Local:   http://localhost:5173/
```

---

## 🎮 Testando o Fluxo

1. **Abra** http://localhost:5173 no navegador
2. **Clique** em "Login" no menu (ou vá diretamente para `/login`)
3. **Clique** na aba "Cadastrar"
4. **Preencha** o formulário de registro rápido:
   - Nome: `João Silva`
   - CPF: `123.456.789-00`
   - Email: `joao@email.com`
   - Senha: `senha123`
   - Confirmar senha: `senha123`
   - ✅ Aceite os termos
5. **Clique** em "Criar conta" ou "Preenchimento completo de dados"
6. **Preencha** os 7 passos do formulário de cadastro
7. **Clique** em "Enviar Cadastro"
8. **Veja** a mensagem de sucesso!

---

## 📊 Verificar Dados no Banco

O banco de dados SQLite é criado automaticamente em:
```
ConnecTea/backend/connectea.db
```

Para visualizar os dados, use o SQLBrowser ou execute:
```bash
cd backend
python -c "import sqlite3; c = sqlite3.connect('connectea.db'); print(c.execute('SELECT * FROM RESPONSAVEL').fetchall())"
```

---

## 🔗 Endpoints Disponíveis

| Método | URL | Descrição |
|--------|-----|-----------|
| POST | `/api/registro-rapido` | Registrar novo usuário |
| POST | `/api/login` | Fazer login |
| POST | `/api/cadastro` | Submeter formulário completo |

---

## 🐛 Troubleshooting

### **"ConnectionRefusedError" ao submeter formulário**
- Verifique se o backend está rodando em http://localhost:5000
- Abra o console de desenvolvimento (F12) para ver o erro exato

### **"CORS error"**
- Certifique-se de que `from flask_cors import CORS` e `CORS(app)` estão no app.py

### **Porta já está em uso**
- Backend: `python app.py` rodando em porta diferente? Mude em `app.py` linha: `app.run(debug=True, port=5000)`
- Frontend: `npm run dev` rodando em porta diferente? Atualize `API_BASE_URL` em `src/services/api.js`

---

## 📚 Documentação Completa

Veja [GUIA_INTEGRACAO.md](GUIA_INTEGRACAO.md) para detalhes técnicos e arquivos modificados.

---

## ✨ Features Implementadas

✅ Navegação do login para formulário completo  
✅ Registro rápido na aba de cadastro  
✅ Formulário multi-step (7 passos)  
✅ Integração com backend Python/Flask  
✅ Banco de dados SQLite automático  
✅ Mensagens de sucesso/erro  
✅ Validações client-side  
✅ CORS configurado  
✅ Criptografia de senha (SHA256)  

---

Pronto! Seu sistema está funcionando! 🎉
