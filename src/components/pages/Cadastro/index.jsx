import { useState } from 'react';
import '../../../assets/css/cadastro.css';

import { ProgressBar } from './components/ProgressBar';
import { FormNavigation } from './components/FormNavigation';
import { Step1GeneralInfo } from './components/Step1GeneralInfo';
import { Step2Diagnostico } from './components/Step2Diagnostico';
import { Step3Socioeconomico } from './components/Step3Socioeconomico'; // 1. Novo import aqui
import { Step4Educacao } from './components/Step4Educacao';
import { Step5Saude } from './components/Step5Saude';
import { Step6Rotina } from './components/Step6Rotina';
import { Step7Finalizacao } from './components/Step7Finalizacao';

export function Cadastro() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;
  
  const [formData, setFormData] = useState({});

  const updateData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep((prev) => prev + 1);
    window.scrollTo(0, 0);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados Prontos para Envio:', formData);
    alert('Cadastro simulado com sucesso! Verifique o console.');
  };

  return (
    <main className="form-main">
      <div className="container">
        <div className="form-wrapper">
          <header className="form-header">
            <h1>Censo Autista</h1>
            <ProgressBar current={currentStep} total={totalSteps} />
          </header>

          <form id="censusForm" onSubmit={handleSubmit}>
            
            {currentStep === 1 && (
              <Step1GeneralInfo data={formData} updateData={updateData} />
            )}
            
            {currentStep === 2 && (
              <Step2Diagnostico data={formData} updateData={updateData} />
            )}

            
            {currentStep === 3 && (
              <Step3Socioeconomico data={formData} updateData={updateData} />
            )}
           
            {currentStep === 4 && (
              <Step4Educacao data={formData} updateData={updateData} />
            )}

            {currentStep === 5 && (
              <Step5Saude data={formData} updateData={updateData} />
            )}

            {currentStep === 6 && (
              <Step6Rotina data={formData} updateData={updateData} />
            )}

            {currentStep === 7 && (
              <Step7Finalizacao data={formData} updateData={updateData} />
            )}

            <FormNavigation 
              currentStep={currentStep} 
              totalSteps={totalSteps} 
              onNext={handleNext} 
              onPrev={handlePrev} 
            />
          </form>
        </div>
      </div>
    </main>
  );
}