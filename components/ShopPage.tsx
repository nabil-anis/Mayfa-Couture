import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const ShopPage: React.FC = () => {
  const [color, setColor] = useState('Charcoal Black');
  const [fabric, setFabric] = useState('Nida');
  const [embellishment, setEmbellishment] = useState('None');
  const [notes, setNotes] = useState('');

  const handleSendToWhatsApp = () => {
    const message = `
Hello Mayfa Couture,

I would like to place a custom order with the following details:
- *Color:* ${color}
- *Fabric:* ${fabric}
- *Embellishment:* ${embellishment}
- *Additional Notes:* ${notes || 'N/A'}

Please let me know the next steps. Thank you!
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const InputField: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
    <div>
      <label className="block text-sm font-medium text-charcoal-black/80 dark:text-cream-white/80 mb-2">
        {label}
      </label>
      {children}
    </div>
  );

  const Select: React.FC<{ value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; children: React.ReactNode }> = ({ value, onChange, children }) => (
     <select
        value={value}
        onChange={onChange}
        className="w-full bg-cream-white/50 dark:bg-charcoal-black/50 border border-sage-green/50 dark:border-soft-gold/30 rounded-sm py-2 px-3 focus:ring-2 focus:ring-soft-gold focus:border-soft-gold transition-all duration-300"
      >
        {children}
      </select>
  );

  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-playfair text-charcoal-black dark:text-cream-white mb-6">
            Custom Abayas
          </h1>
          <p className="text-lg text-charcoal-black/80 dark:text-cream-white/80 leading-relaxed">
            Craft an abaya that is uniquely yours. Select your preferences below and let us bring your vision to life.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-sage-green/10 dark:bg-charcoal-black/20 p-8 rounded-lg shadow-lg">
          <div className="space-y-6">
            <InputField label="Color">
              <Select value={color} onChange={(e) => setColor(e.target.value)}>
                <option>Charcoal Black</option>
                <option>Sage Green</option>
                <option>Cream White</option>
                <option>Deep Olive</option>
                <option>Soft Gold</option>
              </Select>
            </InputField>
            
            <InputField label="Fabric">
              <Select value={fabric} onChange={(e) => setFabric(e.target.value)}>
                <option>Nida</option>
                <option>Crepe</option>
                <option>Satin</option>
                <option>Linen</option>
              </Select>
            </InputField>

            <InputField label="Embellishment">
              <Select value={embellishment} onChange={(e) => setEmbellishment(e.target.value)}>
                <option>None</option>
                <option>Sleeve Embroidery</option>
                <option>TikTok Icon</option>
                <option>Lace Trim</option>
              </Select>
            </InputField>

            <InputField label="Notes">
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                placeholder="Any specific requests? (e.g., length, sleeve style)"
                className="w-full bg-cream-white/50 dark:bg-charcoal-black/50 border border-sage-green/50 dark:border-soft-gold/30 rounded-sm py-2 px-3 focus:ring-2 focus:ring-soft-gold focus:border-soft-gold transition-all duration-300"
              />
            </InputField>

            <button
              onClick={handleSendToWhatsApp}
              className="w-full bg-soft-gold text-charcoal-black font-semibold py-3 px-8 rounded-sm hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-md dark:shadow-soft-gold/10"
            >
              Send via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;