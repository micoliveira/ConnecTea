import { useForm } from '../../../hooks/useForm';

export function RegisterForm({ onSwitch }) {
  // Inicializando o nosso Custom Hook
  const { values, handleChange, resetForm } = useForm({
    name: '',
    cpf: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados prontos para enviar para a API:", values);
    resetForm(); // Resetar o formulário após o envio
  };

  return (
    <form className="auth-form active" onSubmit={handleSubmit}>
      <h2>Criar nova conta</h2>
      <p className="form-subtitle">Preencha os dados abaixo para se cadastrar</p>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="registerName">Nome completo</label>
          <input 
            type="text" 
            id="registerName" 
            name="name" 
            value={values.name}
            onChange={handleChange}
            required 
            placeholder="Seu nome" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="registerCPF">CPF</label>
          <input 
            type="text" 
            id="registerCPF" 
            name="cpf" 
            value={values.cpf}
            onChange={handleChange}
            required 
            placeholder="000.000.000-00" 
            maxLength="14" 
          />
        </div>
      </div>
      
      {/* ... (outros campos de email e senha omitidos para brevidade, mas seguem a mesma lógica) ... */}
      
      <div className="form-group">
        <label className="checkbox-label">
          <input 
            type="checkbox" 
            name="terms" 
            checked={values.terms}
            onChange={handleChange}
            required 
          />
          <span>Aceito os <a href="/termos-de-uso">termos de uso</a> e <a href="/politica-privacidade">política de privacidade</a></span>
        </label>
      </div>
      
      <button type="submit" className="btn btn-primary btn-full">Criar conta</button>
      
      <div className="form-divider"><span>ou</span></div>
      
      <p className="form-footer">
        Já tem uma conta? <a href="#login" className="switch-form" onClick={(e) => { e.preventDefault(); onSwitch(); }}>Faça login aqui</a>
      </p>
    </form>
  );
}