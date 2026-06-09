export function FormNavigation({ currentStep, totalSteps, onNext, onPrev }) {
  return (
    <div className="form-navigation">
      {currentStep > 1 && (
        <button type="button" className="btn btn-secondary" id="prevBtn" onClick={onPrev}>
          Anterior
        </button>
      )}
      
      {currentStep < totalSteps ? (
        <button type="button" className="btn btn-primary" id="nextBtn" onClick={onNext}>
          Próximo
        </button>
      ) : (
        <button type="submit" className="btn btn-primary" id="submitBtn">
          Enviar Cadastro
        </button>
      )}
    </div>
  );
}