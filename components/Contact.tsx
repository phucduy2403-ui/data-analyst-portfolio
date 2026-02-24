import React from 'react';
import { SectionId } from '../types';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { portfolioData } from '../constants/data';

export const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-20 mb-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">{portfolioData.contact.title}</h2>
              <p className="text-gray-400 mb-8">
                {portfolioData.contact.description}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center text-gray-300">
                  <div className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center mr-4 text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>{portfolioData.personal.email}</span>
                </div>
                <div className="flex items-center text-gray-300">
                   <div className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center mr-4 text-blue-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>{portfolioData.personal.phone}</span>
                </div>
                <div className="flex items-center text-gray-300">
                   <div className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center mr-4 text-blue-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>{portfolioData.personal.address}</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Họ Tên</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder={portfolioData.contact.form.namePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder={portfolioData.contact.form.emailPlaceholder}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Tin Nhắn</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder={portfolioData.contact.form.messagePlaceholder}
                />
              </div>
              <button 
                type="button"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-all transform hover:scale-[1.02]"
              >
                Gửi Tin Nhắn <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};