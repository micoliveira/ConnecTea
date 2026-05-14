import { useState } from 'react';
import { ForgotPasswordModal } from '../../../ForgotPasswordModal';

export function LoginForm({ onSwitch }) {
  // Estado que controla o "caderno aberto/fechado" do modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tentativa de login enviada!");
  };

  return (
    <>
      <form className="auth-form active" onSubmit={handleSubmit}>
        <h2>Bem-vindo de volta!</h2>
        <p className="form-subtitle">Entre com suas credenciais para acessar o sistema</p>
        
        <div className="form-group">
          <label htmlFor="loginEmail">E-mail</label>
          <input type="email" id="loginEmail" name="email" required placeholder="seu@email.com" />
        </div>
        
        <div className="form-group">
          <label htmlFor="loginPassword">Senha</label>
          <input type="password" id="loginPassword" name="password" required placeholder="••••••••" />
        </div>
        
        <div className="form-options">
          <label className="checkbox-label">
            <input type="checkbox" name="remember" />
            <span>Lembrar-me</span>
          </label>
          {/* Ao clicar, mudamos o estado para true, "abrindo" o modal */}
          <a 
            href="#recuperar" 
            className="forgot-link"
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
          >
            Esqueceu a senha?
          </a>
        </div>
        
        <button type="submit" className="btn btn-primary btn-full">Entrar</button>
        
        <div className="form-divider">
          <span>ou</span>
        </div>
        
        <p className="form-footer">
          Não tem uma conta?{' '}
          <a href="#cadastro" className="switch-form" onClick={(e) => {
            e.preventDefault();
            onSwitch();
          }}>
            Cadastre-se aqui
          </a>
        </p>
      </form>

      {/* Renderizamos o Modal passando o estado e a função para fechá-lo */}
      <ForgotPasswordModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}