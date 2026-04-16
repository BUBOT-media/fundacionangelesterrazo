'use client';

import { useState } from 'react';
import { socialLinks } from '@/lib/socialLinks';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactoPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    acceptsPrivacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataObj = new FormData(e.target as HTMLFormElement);
    
    if (!formDataObj.get('acceptsPrivacy')) {
      alert(t('contact.form.privacyAlert'));
      return;
    }
    
    setIsSubmitting(true);
    
    formDataObj.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '');

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataObj
    });

    const data = await response.json();
    setSubmitStatus(data.success ? "success" : "error");
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '', acceptsPrivacy: false });
    
    // Resetear el estado después de unos segundos
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-linear-to-b from-gray-50 to-white py-16 lg:py-15">
        <div className="container-70 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-fade-in-down font-aurantiaca" style={{ color: '#271637' }}>
            {t('contact.title')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700 animate-fade-in-up">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-12 lg:py-16">
        <div className="container-70 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div className="animate-slide-in-left">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#271637', fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>
                {t('contact.info.title')}
              </h2>
              
              <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="flex items-start">
                  <div className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#271637' }}>
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>{t('contact.info.email')}</h3>
                    <a href="mailto:info@fundacionangelesterrazo.gal" className="transition-colors" style={{ color: '#e00053' }}>
                      info@fundacionangelesterrazo.gal
                    </a>
                  </div>
                </div>
                {/* <div className="flex items-start">
                  <div className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#271637' }}>
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>{t('contact.info.email')}</h3>
                    <a href="mailto:info@fundacionangelesterrazo.gal" className="transition-colors" style={{ color: '#e00053' }}>
                      fat@fundacionangelesterrazo.gal
                    </a>
                  </div>
                </div>
                  {/* Teléfono *\/}
                  <div className="flex items-start mt-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#271637' }}>
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92V19a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13.81.37 1.6.7 2.34a2 2 0 01-.45 2.11l-.27.27a16 16 0 006.58 6.58l.27-.27a2 2 0 012.11-.45c.74.33 1.53.57 2.34.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>Teléfono</h3>
                      <a href="tel:+34886447293" className="transition-colors" style={{ color: '#e00053' }}>
                        +34 886 447 293
                      </a>
                    </div>
                  </div> */}
              </div>

              {/* Redes sociales */}
              <div className="mt-10 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>{t('contact.social.title')}</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-white transition-colors"
                      style={{ backgroundColor: '#271637' }}
                      aria-label={social.name}
                    >
                      <social.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  ))}  
                </div>
              </div>
            </div>

            {/* Formulario de contacto */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200 animate-slide-in-right hover-lift transition-smooth">
              <h2 className="text-2xl font-bold mb-6 animate-fade-in-up" style={{ color: '#271637', fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>
                {t('contact.form.title')}
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">
                    {t('contact.form.success')}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.name')} <span style={{ color: '#e00053' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-2 transition-colors"
                    style={{borderColor: '#e00053'}}
                    onFocus={(e) => e.target.style.borderColor = '#e00053'}
                    placeholder={t('contact.form.name.placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.email')} <span style={{ color: '#e00053' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-2 transition-colors"
                    style={{borderColor: '#e00053'}}
                    onFocus={(e) => e.target.style.borderColor = '#e00053'}
                    placeholder={t('contact.form.email.placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-2 transition-colors"
                    style={{borderColor: '#e00053'}}
                    onFocus={(e) => e.target.style.borderColor = '#e00053'}
                    placeholder={t('contact.form.phone.placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.subject')} <span style={{ color: '#e00053' }}>*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-2 transition-colors"
                    style={{borderColor: '#e00053'}}
                    onFocus={(e) => e.target.style.borderColor = '#e00053'}
                  >
                    <option value="">{t('contact.form.subject.placeholder')}</option>
                    <option value="premio">{t('contact.form.subject.premio')}</option>
                    <option value="participacion">{t('contact.form.subject.participacion')}</option>
                    <option value="actividades">{t('contact.form.subject.actividades')}</option>
                    <option value="colaboraciones">{t('contact.form.subject.colaboraciones')}</option>
                    <option value="prensa">{t('contact.form.subject.prensa')}</option>
                    <option value="otra">{t('contact.form.subject.otra')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.message')} <span style={{ color: '#e00053' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-2 transition-colors resize-none"
                    style={{borderColor: '#e00053'}}
                    onFocus={(e) => e.target.style.borderColor = '#e00053'}
                    placeholder={t('contact.form.message.placeholder')}
                  />
                </div>

                {/* Protección de datos */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>
                    {t('contact.form.privacy.title')}
                  </h3>
                  <p className="text-xs text-gray-600 mb-3">
                    {t('contact.form.privacy.text')}
                  </p>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="acceptsPrivacy"
                      name="acceptsPrivacy"
                      checked={formData.acceptsPrivacy}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 border-gray-300 rounded"
                      style={{accentColor: '#e00053'}}
                    />
                    <label htmlFor="acceptsPrivacy" className="ml-2 text-sm text-gray-700">
                      {t('contact.form.privacy.accept')} <span style={{ color: '#e00053' }}>*</span>
                    </label>
                  </div>
                </div>

                <p className="text-xs text-gray-500 italic">
                  {t('contact.form.required')}
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white font-semibold py-3 px-6 rounded-lg focus:ring-2 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#e00053' }}
                >
                  {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
