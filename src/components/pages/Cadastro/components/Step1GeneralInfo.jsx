export function Step1GeneralInfo({ data, updateData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const novoDado = { [name]: value };

    // Sempre que dia, mês ou ano mudar, recalcula idade e dataNascimento
    const dia  = name === 'diaNascimento'  ? value : data.diaNascimento  || '';
    const mes  = name === 'mesNascimento'  ? value : data.mesNascimento  || '';
    const ano  = name === 'anoNascimento'  ? value : data.anoNascimento  || '';

    if (dia && mes && ano && ano.length === 4) {
      // Monta a data no formato YYYY-MM-DD para o banco
      const dataFormatada = `${ano}-${mes.padStart(2,'0')}-${dia.padStart(2,'0')}`;
      novoDado.dataNascimento = dataFormatada;

      // Calcula a idade
      const hoje = new Date();
      const nascimento = new Date(dataFormatada);
      let idade = hoje.getFullYear() - nascimento.getFullYear();
      const aindaNaoFezAniversario =
        hoje.getMonth() < nascimento.getMonth() ||
        (hoje.getMonth() === nascimento.getMonth() && hoje.getDate() < nascimento.getDate());
      if (aindaNaoFezAniversario) idade--;
      novoDado.idade = idade >= 0 ? idade : '';
    }

    updateData(novoDado);
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
          <label>Data de nascimento: *</label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="number"
              name="diaNascimento"
              value={data.diaNascimento || ''}
              onChange={handleChange}
              placeholder="Dia"
              min="1"
              max="31"
              required
              style={{ width: '70px' }}
            />
            <input
              type="number"
              name="mesNascimento"
              value={data.mesNascimento || ''}
              onChange={handleChange}
              placeholder="Mês"
              min="1"
              max="12"
              required
              style={{ width: '70px' }}
            />
            <input
              type="number"
              name="anoNascimento"
              value={data.anoNascimento || ''}
              onChange={handleChange}
              placeholder="Ano"
              min="1900"
              max={new Date().getFullYear()}
              required
              style={{ width: '90px' }}
            />
          </div>
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