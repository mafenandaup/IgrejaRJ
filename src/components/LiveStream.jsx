import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Play, 
  Users, 
  MessageCircle, 
  Share2, 
  Heart,
  Send,
  Maximize
} from 'lucide-react';
import VideoPlayer from './VideoPlayer';

const LiveStream = ({ 
  isLive = false, 
  streamUrl = "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1", // Default to a working YouTube video
  chatEnabled = true,
  viewerCount = 0 
}) => {
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: "João Silva", message: "Que benção este culto!", time: "19:32" },
    { id: 2, user: "Maria Santos", message: "Amém! Glória a Deus", time: "19:33" },
    { id: 3, user: "Pedro Costa", message: "Orando por todos", time: "19:34" }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      id: Date.now(),
      user: "Você",
      message: newMessage,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, message]);
    setNewMessage('');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Transmissão ao Vivo - Igreja Comunidade',
          text: 'Assista nossa transmissão ao vivo!',
          url: window.location.href
        });
      } catch (err) {
        console.log('Erro ao compartilhar:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  if (!isLive) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
          <Play className="w-12 h-12 text-muted-foreground" />
        </div>
        <h3 className="text-2xl font-bold church-text-dark mb-4">Transmissão Offline</h3>
        <p className="text-muted-foreground mb-6">
          No momento não há transmissão ao vivo. Confira nossos horários de culto.
        </p>
        <Button 
          className="bg-primary hover:bg-primary/90"
          onClick={() => document.getElementById('horarios')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Ver Horários
        </Button>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Main Video Player */}
      <div className="lg:col-span-2">
        <Card className="overflow-hidden">
          <div className="relative aspect-video bg-black">
            {/* Live Stream Embed */}
            <iframe
              src={streamUrl}
              title="Transmissão ao Vivo"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            
            {/* Live Badge */}
            <Badge className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-ping" />
              AO VIVO
            </Badge>

            {/* Viewer Count */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              <Users className="w-4 h-4 inline mr-1" />
              {viewerCount} assistindo
            </div>
          </div>

          {/* Video Info */}
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold church-text-dark mb-2">
                  Culto ao Vivo - Igreja Comunidade
                </h3>
                <p className="text-muted-foreground">
                  Participe conosco desta experiência de adoração e comunhão
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="flex items-center space-x-2"
              >
                <Share2 className="w-4 h-4" />
                <span>Compartilhar</span>
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Button className="bg-primary hover:bg-primary/90 flex-1">
                <Heart className="w-4 h-4 mr-2" />
                Curtir
              </Button>
              <Button variant="outline" className="flex-1">
                <MessageCircle className="w-4 h-4 mr-2" />
                Comentar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Live Chat */}
      {chatEnabled && (
        <div className="lg:col-span-1">
          <Card className="h-full flex flex-col">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg church-text-dark flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat ao Vivo
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-96">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-sm church-text-primary">
                        {msg.user}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {msg.time}
                      </span>
                    </div>
                    <p className="text-sm text-foreground bg-secondary/50 rounded-lg px-3 py-2">
                      {msg.message}
                    </p>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="border-t p-4">
                <form onSubmit={handleSendMessage} className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                  <Button 
                    type="submit" 
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-2">
                  Seja respeitoso e mantenha o foco na adoração
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default LiveStream;

