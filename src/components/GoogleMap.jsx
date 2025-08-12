import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { MapPin, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const GoogleMap = ({ 
  address = "Rua da Fé, 123 - Centro, São Paulo, SP - 01234-567",
  lat = -23.5505,
  lng = -46.6333,
  zoom = 15,
  className = ""
}) => {
  // Encode address for Google Maps URLs
  const encodedAddress = encodeURIComponent(address);
  
  // Google Maps embed URL
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWTgHz-TK7VCg&q=${encodedAddress}&zoom=${zoom}`;
  
  // Google Maps directions URL
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  
  // Google Maps view URL
  const viewUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardHeader>
        <CardTitle className="text-2xl church-text-dark flex items-center">
          <MapPin className="w-6 h-6 mr-2 church-text-primary" />
          Localização
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {/* Map Container */}
        <div className="relative w-full h-64 bg-muted">
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Igreja"
            className="rounded-b-lg"
          />
          
          {/* Overlay with address info */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="font-medium church-text-dark text-sm mb-1">
                  Igreja Comunidade
                </p>
                <p className="text-xs text-muted-foreground">
                  {address}
                </p>
              </div>
              <div className="flex space-x-2 ml-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 px-2"
                  onClick={() => window.open(viewUrl, '_blank')}
                >
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="p-4 space-y-3">
          <Button 
            className="w-full bg-primary hover:bg-primary/90"
            onClick={() => window.open(directionsUrl, '_blank')}
          >
            <MapPin className="w-4 h-4 mr-2" />
            Como Chegar
          </Button>
          
          <div className="grid grid-cols-2 gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open(viewUrl, '_blank')}
            >
              Ver no Maps
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Igreja Comunidade',
                    text: 'Localização da Igreja Comunidade',
                    url: viewUrl
                  });
                } else {
                  navigator.clipboard.writeText(viewUrl);
                  alert('Link copiado para a área de transferência!');
                }
              }}
            >
              Compartilhar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoogleMap;

