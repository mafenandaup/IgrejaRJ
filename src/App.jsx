import React, { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { 
  Church, 
  Users, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Heart,
  Play,
  Menu,
  X
} from 'lucide-react';
import LiveStream from './components/LiveStream';
import VideoPlayer from './components/VideoPlayer';
import GoogleMap from './components/GoogleMap';
import './App.css';

// Import images
import igrejaInterior from './assets/Gabrielmeodeia.webp';
import cultoPessoas from './assets/Gabrielmeodeia.webp';
import eventosReligiosos from './assets/eventos_religiosos.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLiveStreamActive, setIsLiveStreamActive] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Sample video URLs (placeholder for demonstration)
  const videos = [
    {
      title: "Culto de Domingo - Mensagem Especial",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: cultoPessoas
    },
    {
      title: "Evento Especial - Batismo",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: eventosReligiosos
    }
  ];

  const ministries = [
    {
      title: "Ministério dos Homens",
      description: "Fortalecendo a liderança masculina na fé",
      icon: <Users className="w-8 h-8" />,
      color: "church-bg-card"
    },
    {
      title: "Ministério das Mulheres", 
      description: "Empoderamento feminino através da palavra",
      icon: <Heart className="w-8 h-8" />,
      color: "church-bg-card"
    },
    {
      title: "Ministério de Casais",
      description: "Fortalecendo os laços matrimoniais",
      icon: <Users className="w-8 h-8" />,
      color: "church-bg-card"
    },
    {
      title: "Ministério Jovem",
      description: "Preparando a próxima geração",
      icon: <Heart className="w-8 h-8" />,
      color: "church-bg-card"
    }
  ];

  const schedules = [
    {
      day: "Domingo",
      events: [
        { time: "09:00", event: "Escola Dominical" },
        { time: "10:30", event: "Culto Matutino" },
        { time: "19:00", event: "Culto Vespertino" }
      ]
    },
    {
      day: "Quarta-feira",
      events: [
        { time: "19:30", event: "Culto de Oração" }
      ]
    },
    {
      day: "Sexta-feira",
      events: [
        { time: "19:30", event: "Culto de Jovens" }
      ]
    }
  ];

  const events = [
    {
      title: "Conferência Anual",
      date: "15-17 de Março",
      description: "Três dias de adoração e ensinamento",
      image: eventosReligiosos
    },
    {
      title: "Retiro Espiritual",
      date: "22-24 de Abril",
      description: "Fim de semana de renovação espiritual",
      image: cultoPessoas
    },
    {
      title: "Batismo",
      date: "5 de Maio",
      description: "Celebração de novas vidas em Cristo",
      image: igrejaInterior
    }
  ];

  useEffect(() => {
    // Simulate live stream status check
    const checkLiveStream = () => {
      // For demo purposes, set to true to show live stream
      setIsLiveStreamActive(true);
    };

    checkLiveStream();
    const interval = setInterval(checkLiveStream, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background church-font-primary">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Church className="w-8 h-8 church-text-primary" />
            <span className="text-2xl font-bold church-text-dark">Igreja Comunidade</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="hover:text-primary transition-colors">Início</button>
            <button onClick={() => scrollToSection('sobre')} className="hover:text-primary transition-colors">Sobre</button>
            <button onClick={() => scrollToSection('ministerios')} className="hover:text-primary transition-colors">Ministérios</button>
            <button onClick={() => scrollToSection('horarios')} className="hover:text-primary transition-colors">Horários</button>
            <button onClick={() => scrollToSection('eventos')} className="hover:text-primary transition-colors">Eventos</button>
            <button onClick={() => scrollToSection('transmissao')} className="hover:text-primary transition-colors">Transmissão</button>
            <button onClick={() => scrollToSection('contato')} className="hover:text-primary transition-colors">Contato</button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="text-left hover:text-primary transition-colors">Início</button>
              <button onClick={() => scrollToSection('sobre')} className="text-left hover:text-primary transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('ministerios')} className="text-left hover:text-primary transition-colors">Ministérios</button>
              <button onClick={() => scrollToSection('horarios')} className="text-left hover:text-primary transition-colors">Horários</button>
              <button onClick={() => scrollToSection('eventos')} className="text-left hover:text-primary transition-colors">Eventos</button>
              <button onClick={() => scrollToSection('transmissao')} className="text-left hover:text-primary transition-colors">Transmissão</button>
              <button onClick={() => scrollToSection('contato')} className="text-left hover:text-primary transition-colors">Contato</button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${igrejaInterior})` }}
        />
        <div className="absolute inset-0 church-hero-overlay" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 fade-in church-font-display">
            IGREJA
          </h1>
          <h2 className="text-3xl md:text-5xl church-font-display mb-6 slide-in-left church-text-accent-warm">
            Comunidade de Fé
          </h2>
          <p className="text-xl md:text-2xl mb-8 slide-in-right">
            Um lugar onde todos são bem-vindos para adorar, crescer e servir
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              onClick={() => scrollToSection('transmissao')}
            >
              <Play className="w-5 h-5 mr-2" />
              Assistir Transmissão
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              onClick={() => scrollToSection('sobre')}
            >
              Conheça Nossa Igreja
            </Button>
          </div>
        </div>
      </section>

      {/* Live Stream Status */}
      {isLiveStreamActive && (
        <div className="fixed top-20 right-4 z-40 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg animate-pulse">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-ping" />
            <span className="text-sm font-medium">AO VIVO</span>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="sobre" className="py-20 church-bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="text-4xl md:text-5xl font-bold church-text-primary mb-4 church-font-display">
              Sobre Nossa Igreja
            </h2>
            <div className="church-section-divider" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 slide-in-left">
              <h3 className="text-3xl font-bold church-text-accent-warm church-font-display">Nossa Missão</h3>
              <p className="text-lg church-text-secondary leading-relaxed">
                Somos uma comunidade cristã dedicada a compartilhar o amor de Deus através da adoração, 
                do ensino da palavra e do serviço ao próximo. Nossa igreja é um lugar onde pessoas de 
                todas as idades e origens podem encontrar esperança, propósito e uma família espiritual.
              </p>
              <p className="text-lg church-text-secondary leading-relaxed">
                Acreditamos na transformação de vidas através do evangelho e no poder da comunhão 
                para fortalecer nossa fé e impactar positivamente nossa cidade.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm bg-orange-500/20 text-orange-400 border-orange-500/30">
                  <Users className="w-4 h-4 mr-2" />
                  500+ Membros
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm bg-green-500/20 text-green-400 border-green-500/30">
                  <Calendar className="w-4 h-4 mr-2" />
                  Fundada em 1985
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm bg-blue-500/20 text-blue-400 border-blue-500/30">
                  <Heart className="w-4 h-4 mr-2" />
                  Família Acolhedora
                </Badge>
              </div>
            </div>
            
            <div className="relative slide-in-right">
              <img 
                src={cultoPessoas} 
                alt="Comunidade da Igreja" 
                className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section id="ministerios" className="py-20 church-bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="text-4xl md:text-5xl font-bold church-text-primary mb-4 church-font-display">
              Nossos Ministérios
            </h2>
            <p className="text-xl church-text-secondary max-w-2xl mx-auto">
              Diferentes formas de servir e crescer em comunidade
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ministries.map((ministry, index) => (
              <Card key={index} className="ministry-card scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}>
                    {ministry.icon}
                  </div>
                  <CardTitle className="text-xl church-text-primary church-font-display">{ministry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center church-text-secondary">
                    {ministry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="horarios" className="py-20 church-bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="text-4xl md:text-5xl font-bold church-text-primary mb-4 church-font-display">
              Horários de Cultos
            </h2>
            <div className="church-section-divider" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {schedules.map((schedule, index) => (
              <Card key={index} className="schedule-card slide-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <CardTitle className="text-2xl church-text-accent-warm text-center church-font-display">
                    {schedule.day}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {schedule.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors duration-300">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 church-text-accent-cool" />
                        <span className="font-medium church-text-primary">{event.time}</span>
                      </div>
                      <span className="text-sm church-text-secondary">{event.event}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="eventos" className="py-20 church-bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold church-text-dark mb-4">
              Próximos Eventos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Participe dos nossos eventos especiais e fortaleça sua fé
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="church-card overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary text-white">
                    {event.date}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl church-text-dark">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{event.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Stream Section */}
      <section id="transmissao" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold church-text-dark mb-4">
              Transmissão ao Vivo
            </h2>
            <div className="church-section-divider" />
          </div>
          
          <div className="max-w-6xl mx-auto">
            <LiveStream 
              isLive={isLiveStreamActive}
              streamUrl="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1"
              chatEnabled={true}
              viewerCount={Math.floor(Math.random() * 200) + 50}
            />
            
            {/* Video Archive */}
            {!isLiveStreamActive && (
              <div className="mt-12">
                <h3 className="text-3xl font-bold church-text-dark mb-8 text-center">
                  Cultos Anteriores
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {videos.map((video, index) => (
                    <div key={index} className="relative group cursor-pointer">
                      <div className="video-container">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors rounded-lg">
                          <Play className="w-16 h-16 text-white" />
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold church-text-dark mt-3">{video.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 church-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Estamos aqui para você. Venha nos visitar ou entre em contato
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="church-card">
              <CardHeader>
                <CardTitle className="text-2xl church-text-dark">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 church-text-primary" />
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-muted-foreground">Rua da Fé, 123 - Centro<br />São Paulo, SP - 01234-567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 church-text-primary" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-muted-foreground">(11) 1234-5678</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 church-text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">contato@igrejacomunidade.com.br</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <GoogleMap 
              address="Rua da Fé, 123 - Centro, São Paulo, SP - 01234-567"
              lat={-23.5505}
              lng={-46.6333}
              zoom={15}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Church className="w-8 h-8 text-primary" />
                <span className="text-2xl font-bold">Igreja Comunidade</span>
              </div>
              <p className="text-white/80">
                Uma comunidade de fé, esperança e amor, servindo a Deus e ao próximo.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('sobre')} className="block hover:text-primary transition-colors">Sobre Nós</button>
                <button onClick={() => scrollToSection('ministerios')} className="block hover:text-primary transition-colors">Ministérios</button>
                <button onClick={() => scrollToSection('eventos')} className="block hover:text-primary transition-colors">Eventos</button>
                <button onClick={() => scrollToSection('transmissao')} className="block hover:text-primary transition-colors">Transmissão</button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Horários de Culto</h4>
              <div className="space-y-2 text-white/80">
                <p>Domingo: 09:00, 10:30, 19:00</p>
                <p>Quarta: 19:30</p>
                <p>Sexta: 19:30</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2025 Igreja Comunidade. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
