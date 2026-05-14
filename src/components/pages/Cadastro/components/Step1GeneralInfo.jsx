export function Step1GeneralInfo({ data, updateData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData({ [name]: value });
  };

  return (
    <section className="form-section active">
      <h2>1. Informações Gerais</h2>
      <div className="form-group">
        <label htmlFor="nomeCompleto">Nome completo da pessoa com TEA: *</label>
        <input 
          type="text" 
          id="nomeCompleto" 
          name="nomeCompleto" 
          value={data.nomeCompleto || ''} 
          onChange={handleChange}
          required 
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="dataNascimento">Data de nascimento: *</label>
          <input 
            type="date" 
            id="dataNascimento" 
            name="dataNascimento" 
            value={data.dataNascimento || ''}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="idade">Idade: *</label>
          <input 
            type="number" 
            id="idade" 
            name="idade" 
            value={data.idade || ''}
            readOnly 
          />
        </div>
      </div>
      {/* ... restante dos campos da seção 1 */}
    </section>
  );
}