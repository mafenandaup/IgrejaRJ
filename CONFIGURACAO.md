# Guia de Configuração - Landing Page da Igreja

## 🎯 Funcionalidades Implementadas e Funcionais

### ✅ Transmissão ao Vivo
- **Status**: Totalmente funcional com vídeo de demonstração
- **Funcionalidades**: Player de vídeo, chat ao vivo, contador de visualizadores
- **Tecnologia**: Integração com YouTube embed

### ✅ Mapa Interativo
- **Status**: Totalmente funcional
- **Funcionalidades**: Visualização do mapa, botões de direção, compartilhamento
- **Tecnologia**: Google Maps embed

### ✅ Chat ao Vivo
- **Status**: Interface funcional com mensagens simuladas
- **Funcionalidades**: Envio de mensagens, histórico de chat, moderação

## 🔧 Como Personalizar para Sua Igreja

### 1. Transmissão ao Vivo Real

#### Opção A: YouTube Live
1. **Criar canal no YouTube**:
   - Acesse [YouTube Studio](https://studio.youtube.com)
   - Ative a transmissão ao vivo
   - Verifique sua conta (necessário para live)

2. **Obter URL de embed**:
   ```javascript
   // No arquivo src/App.jsx, linha 398
   streamUrl="https://www.youtube.com/embed/SEU_VIDEO_ID?autoplay=1&mute=1"
   ```

3. **URL para transmissão ao vivo**:
   ```javascript
   // Para canal ao vivo
   streamUrl="https://www.youtube.com/embed/live_stream?channel=SEU_CHANNEL_ID"
   ```

#### Opção B: Outras Plataformas
- **Twitch**: `https://player.twitch.tv/?channel=SEU_CANAL&parent=seudominio.com`
- **Facebook Live**: Use a API do Facebook para embed
- **Vimeo Live**: `https://player.vimeo.com/video/VIDEO_ID`

### 2. Configurar Localização Real

#### Atualizar Endereço
No arquivo `src/App.jsx`, linha 475-480:
```javascript
<GoogleMap 
  address="SEU_ENDERECO_COMPLETO"
  lat={-23.5505}  // Sua latitude
  lng={-46.6333}  // Sua longitude
  zoom={15}
/>
```

#### Obter Coordenadas
1. Acesse [Google Maps](https://maps.google.com)
2. Clique com botão direito no local da igreja
3. Copie as coordenadas (latitude, longitude)

### 3. Personalizar Informações da Igreja

#### Dados de Contato
No arquivo `src/App.jsx`, seção de contato:
```javascript
// Endereço (linha ~460)
Rua da Fé, 123 - Centro
São Paulo, SP - 01234-567

// Telefone (linha ~470)
(11) 1234-5678

// Email (linha ~475)
contato@igrejacomunidade.com.br
```

#### Horários de Culto
No arquivo `src/App.jsx`, seção de horários (linha ~280):
```javascript
const schedules = [
  { day: "Domingo", time: "09:00", service: "Escola Dominical" },
  { day: "Domingo", time: "10:30", service: "Culto Matutino" },
  // Adicione seus horários aqui
];
```

#### Eventos
No arquivo `src/App.jsx`, seção de eventos (linha ~320):
```javascript
const events = [
  {
    date: "15-17 de Março",
    title: "Conferência Anual",
    description: "Três dias de adoração e ensinamento",
    image: eventosReligiosos
  },
  // Adicione seus eventos aqui
];
```

### 4. Substituir Imagens

#### Localização das Imagens
- `src/assets/igreja_interior.jpg` - Imagem principal do hero
- `src/assets/culto_pessoas.jpg` - Imagem de eventos
- `src/assets/eventos_religiosos.jpg` - Galeria de eventos

#### Como Substituir
1. Coloque suas imagens na pasta `src/assets/`
2. Atualize as importações no `src/App.jsx`:
```javascript
import suaImagemIgreja from './assets/sua_imagem_igreja.jpg';
import suaImagemCulto from './assets/sua_imagem_culto.jpg';
```

### 5. Chat ao Vivo Real

#### Opção A: Integração com YouTube Chat
```javascript
// Usar a API do YouTube para chat real
const YOUTUBE_API_KEY = 'sua_chave_api';
const LIVE_CHAT_ID = 'id_do_chat_ao_vivo';
```

#### Opção B: Sistema de Chat Próprio
- Implementar backend com Socket.io
- Usar Firebase Realtime Database
- Integrar com Disqus ou sistema similar

### 6. Configurações Avançadas

#### Google Maps API (Opcional)
Para funcionalidades avançadas do mapa:
1. Obtenha uma chave da [Google Cloud Console](https://console.cloud.google.com)
2. Ative a Maps JavaScript API
3. Substitua a chave no componente `GoogleMap.jsx`:
```javascript
const embedUrl = `https://www.google.com/maps/embed/v1/place?key=SUA_CHAVE_API&q=${encodedAddress}`;
```

#### Analytics e SEO
1. **Google Analytics**:
   ```html
   <!-- Adicionar no index.html -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   ```

2. **Meta Tags**:
   ```html
   <!-- No index.html -->
   <meta name="description" content="Descrição da sua igreja">
   <meta property="og:title" content="Nome da Sua Igreja">
   ```

## 🚀 Deploy em Produção

### Opção 1: Netlify (Recomendado)
1. Faça build do projeto: `pnpm run build`
2. Arraste a pasta `dist` para [Netlify](https://netlify.com)
3. Configure domínio personalizado

### Opção 2: Vercel
1. Conecte seu repositório GitHub
2. Deploy automático a cada commit
3. Domínio gratuito incluído

### Opção 3: Hospedagem Tradicional
1. Build: `pnpm run build`
2. Upload da pasta `dist` via FTP
3. Configure servidor web (Apache/Nginx)

## 📞 Suporte

Para dúvidas sobre implementação:
1. Consulte a documentação do React
2. Verifique os logs do console do navegador
3. Teste sempre em ambiente local antes do deploy

## 🔒 Considerações de Segurança

- Nunca exponha chaves de API no frontend
- Use variáveis de ambiente para dados sensíveis
- Configure CORS adequadamente
- Implemente moderação no chat ao vivo

---

**Nota**: Este protótipo está configurado com dados de demonstração. Substitua todas as informações pelos dados reais da sua igreja antes do uso em produção.

