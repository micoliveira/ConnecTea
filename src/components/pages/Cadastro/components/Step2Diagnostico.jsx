export function Step2Diagnostico({ data, updateData }) {
  // Função para capturar o que o usuário digita e atualizar o estado central
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData({ [name]: value });
  };

  return (
    <section className="form-section active">
      <h2>2. Diagnóstico e Acompanhamento</h2>
      <p className="form-subtitle">Informações sobre o laudo e acompanhamento profissional.</p>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="idadeDiagnostico">Idade em que recebeu o diagnóstico:</label>
          <input 
            type="number" 
            id="idadeDiagnostico" 
            name="idadeDiagnostico" 
            value={data.idadeDiagnostico || ''} 
            onChange={handleChange} 
            placeholder="Ex: 3"
            min="0"
            max="100"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="nivelSuporte">Nível de Suporte (TEA): *</label>
          <select 
            id="nivelSuporte" 
            name="nivelSuporte" 
            value={data.nivelSuporte || ''} 
            onChange={handleChange} 
            required
          >
            <option value="">Selecione...</option>
            <option value="1">Nível 1 (Suporte Leve)</option>
            <option value="2">Nível 2 (Suporte Moderado)</option>
            <option value="3">Nível 3 (Suporte Substancial)</option>
            <option value="investigacao">Ainda em investigação</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="profissionais">Profissionais de saúde que acompanham (Neurologista, Psicólogo, Fonoaudiólogo, etc.):</label>
        <textarea 
          id="profissionais" 
          name="profissionais" 
          value={data.profissionais || ''} 
          onChange={handleChange} 
          rows="3"
          placeholder="Descreva os profissionais e as terapias atuais..."
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="medicacoes">Medicações em uso contínuo (se houver):</label>
        <textarea 
          id="medicacoes" 
          name="medicacoes" 
          value={data.medicacoes || ''} 
          onChange={handleChange} 
          rows="2"
          placeholder="Ex: Risperidona, Aripiprazol..."
        ></textarea>
      </div>
    </section>
  );
}