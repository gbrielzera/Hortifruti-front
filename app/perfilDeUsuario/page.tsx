// pages/profile.tsx
"use client";

import { 
  User, 
  Camera
} from 'lucide-react';

import { useState } from 'react';
import Header from '@/app/components/itensPages/Header';
import Footer from '@/app/components/itensPages/Footer';

interface FormData {
  nome: string;
  cep: string;
  cpf: string;
  endereco: string;
  numero: string;
  email: string;
  complemento: string;
  telefone: string;
}

export default function ProfilePage() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    cep: '',
    cpf: '',
    endereco: '',
    numero: '',
    email: '',
    complemento: '',
    telefone: ''
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile data saved:', formData);
  };

  const handlePhotoClick = () => {
    console.log('Change photo clicked');
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  const handleChangePassword = () => {
    console.log('Change password clicked');
  };

  const handleEmailSubmit = (email: string) => {
    console.log('Footer email submitted:', email);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userName="Maria" />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Card */}
          <div className="flex-shrink-0">
            <div className="bg-gray-200 rounded-3xl p-8 w-80">
              <div className="flex flex-col items-center">
                {/* Profile Photo */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gray-300 rounded-full border-4 border-gray-400 flex items-center justify-center">
                    <User className="w-16 h-16 text-gray-500" />
                  </div>
                  <button
                    onClick={handlePhotoClick}
                    className="absolute bottom-0 right-0 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                  >
                    <Camera className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* User Info */}
                <h2 className="text-xl font-bold text-gray-800 mb-1">Maria Ribeiro</h2>
                <p className="text-gray-600 mb-1">(61)9999-99990</p>
                <p className="text-gray-600 text-sm text-center mb-8">Asa Sul, Brasília - DF, 70390-000</p>

                {/* Click to change photo text */}
                <p className="text-center text-sm text-gray-600 mb-8">
                  Clique na foto<br />para alterar
                </p>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-8 rounded-lg transition-colors"
                >
                  Sair
                </button>
              </div>
            </div>
          </div>

          {/* Edit Form */}
          <div className="flex-1">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Mantenha seus dados sempre atualizados
              </h2>
              <h3 className="text-lg font-semibold text-gray-700 mb-6">Editar Dados:</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nome */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      value={formData.nome}
                      onChange={(e) => handleInputChange('nome', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* CEP */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CEP
                    </label>
                    <input
                      type="text"
                      value={formData.cep}
                      onChange={(e) => handleInputChange('cep', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* CPF */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CPF
                    </label>
                    <input
                      type="text"
                      value={formData.cpf}
                      onChange={(e) => handleInputChange('cpf', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Endereço */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Endereço
                    </label>
                    <input
                      type="text"
                      value={formData.endereco}
                      onChange={(e) => handleInputChange('endereco', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Número */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Numero
                    </label>
                    <input
                      type="text"
                      value={formData.numero}
                      onChange={(e) => handleInputChange('numero', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Complemento */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Complemento
                    </label>
                    <input
                      type="text"
                      value={formData.complemento}
                      onChange={(e) => handleInputChange('complemento', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Telefone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      value={formData.telefone}
                      onChange={(e) => handleInputChange('telefone', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end space-x-4 pt-6">
                  <button
                    type="button"
                    onClick={handleChangePassword}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Mudar Senha
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Salvar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer onEmailSubmit={handleEmailSubmit} />
    </div>
  );
}