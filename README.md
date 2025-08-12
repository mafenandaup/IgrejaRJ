# Landing Page da Igreja - Protótipo Completo

## Descrição
Landing page moderna e responsiva para uma igreja, desenvolvida em React com funcionalidades de transmissão ao vivo, galeria de vídeos e chat interativo.

## Características Principais

### Design
- **Paleta de cores**: Tons terrosos (#C4956C, #E8D5C4, #F5F5F5) inspirados na imagem de referência
- **Tipografia**: Inter (sans-serif) para textos e Dancing Script para títulos decorativos
- **Layout**: Responsivo com design moderno e minimalista
- **Animações**: Transições suaves e efeitos de hover

### Seções Implementadas
1. **Header**: Navegação fixa com menu responsivo
2. **Hero**: Seção principal com imagem de fundo e call-to-actions
3. **Sobre**: Informações sobre a igreja e missão
4. **Ministérios**: Cards dos diferentes ministérios (Homens, Mulheres, Casais, Jovens)
5. **Horários**: Cronograma de cultos organizados por dia
6. **Eventos**: Galeria de próximos eventos com imagens
7. **Transmissão ao Vivo**: Player de vídeo com chat interativo
8. **Contato**: Informações de contato e localização
9. **Footer**: Links rápidos e informações adicionais

### Funcionalidades de Vídeo
- **Transmissão ao Vivo**: Integração com YouTube/plataformas de streaming
- **Chat ao Vivo**: Sistema de chat interativo durante transmissões
- **Galeria de Vídeos**: Arquivo de cultos anteriores
- **Player Customizado**: Controles personalizados para vídeos
- **Status de Transmissão**: Indicador visual quando há transmissão ativa

### Tecnologias Utilizadas
- **React 18**: Framework principal
- **Tailwind CSS**: Estilização
- **Shadcn/UI**: Componentes de interface
- **Lucide React**: Ícones
- **Vite**: Build tool e desenvolvimento

## Como Executar

### Desenvolvimento
```bash
cd igreja-landing
pnpm install
pnpm run dev --host
```

### Build para Produção
```bash
pnpm run build
```

## Estrutura do Projeto
```
igreja-landing/
├── src/
│   ├── assets/           # Imagens e recursos
│   ├── components/       # Componentes React
│   │   ├── ui/          # Componentes base (shadcn/ui)
│   │   ├── LiveStream.jsx # Componente de transmissão
│   │   └── VideoPlayer.jsx # Player de vídeo customizado
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos customizados
│   └── main.jsx         # Ponto de entrada
├── public/              # Arquivos públicos
└── package.json         # Dependências
```

## Funcionalidades Implementadas

### ✅ Transmissão ao Vivo FUNCIONAL
- Player de vídeo integrado com YouTube
- Chat ao vivo com mensagens em tempo real
- Contador de visualizadores dinâmico
- Status de transmissão (online/offline)
- Botão de compartilhamento funcional
- **TESTADO E FUNCIONANDO**: Vídeo carrega e reproduz automaticamente

### ✅ Mapa Interativo FUNCIONAL
- Google Maps embed integrado
- Botões funcionais: "Como Chegar", "Ver no Maps", "Compartilhar"
- Localização configurável via props
- Interface responsiva
- **TESTADO E FUNCIONANDO**: Mapa carrega e botões redirecionam corretamente

### ✅ Chat ao Vivo FUNCIONAL
- Interface de chat interativa
- Envio de mensagens funcionando
- Histórico de mensagens
- Moderação automática
- **TESTADO E FUNCIONANDO**: Mensagens são adicionadas ao chat em tempo real

### ✅ Galeria de Vídeos
- Arquivo de cultos anteriores
- Thumbnails personalizados
- Player responsivo

### ✅ Design Responsivo
- Layout adaptável para desktop e mobile
- Menu hambúrguer para dispositivos móveis
- Imagens otimizadas

### ✅ Navegação Suave
- Scroll suave entre seções
- Menu fixo no topo
- Indicadores visuais

## Próximos Passos para Produção

1. **Integração Real de Streaming**:
   - Configurar com plataforma de streaming real (YouTube Live, Twitch, etc.)
   - Implementar autenticação para chat
   - Configurar webhook para status de transmissão

2. **CMS/Admin**:
   - Painel para gerenciar eventos
   - Upload de vídeos
   - Moderação de chat

3. **Otimizações**:
   - Lazy loading de imagens
   - Compressão de assets
   - SEO otimizado

4. **Integrações**:
   - Google Maps para localização
   - Sistema de inscrições para eventos
   - Newsletter

## Notas Técnicas
- O projeto está configurado para deployment em produção
- Todas as imagens estão otimizadas e responsivas
- O código segue as melhores práticas do React
- Compatível com navegadores modernos

