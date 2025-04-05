# Guia de Implantação na VPS

Este guia fornece instruções para implantar este site em uma VPS.

## Requisitos

- VPS com sistema Linux (preferencialmente Ubuntu/Debian)
- Node.js (versão 18.x ou superior)
- PM2 (gerenciador de processos para Node.js)
- Nginx (servidor web)
- Certbot (para SSL/HTTPS)

## Passo a Passo

### 1. Preparação do Servidor

```bash
# Atualizar pacotes
sudo apt update
sudo apt upgrade -y

# Instalar Node.js (se ainda não estiver instalado)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verificar instalação
node -v
npm -v

# Instalar PM2 globalmente
sudo npm install -g pm2
```

### 2. Transferir Código para o Servidor

Existem várias maneiras de transferir seu código para o servidor:

#### Opção 1: Usando Git

```bash
# Instalar Git (se necessário)
sudo apt install git -y

# Clonar o repositório
git clone <seu-repositorio> /var/www/siteomodeiprod
cd /var/www/siteomodeiprod
```

#### Opção 2: Usando SCP/SFTP

Transfira os arquivos do seu computador local para o servidor:

```bash
# Exemplo com scp (a partir do seu computador local):
scp -r /caminho/local/siteomodeiprod usuario@seu-servidor:/var/www/
```

### 3. Configurar e Construir o Projeto

```bash
# Navegar até a pasta do projeto (se ainda não estiver nela)
cd /var/www/siteomodeiprod

# Instalar dependências
npm install

# Criar build de produção
npm run build
```

### 4. Configurar PM2 para Gerenciar o Aplicativo

```bash
# Iniciar o aplicativo com PM2
pm2 start npm --name "siteomodeiprod" -- start

# Configurar PM2 para iniciar automaticamente após reinicialização do servidor
pm2 startup
# Execute o comando que o PM2 sugere

# Salvar configuração atual do PM2
pm2 save
```

### 5. Configurar Nginx como Proxy Reverso

```bash
# Instalar Nginx (se ainda não estiver instalado)
sudo apt install nginx -y

# Criar configuração do site
sudo nano /etc/nginx/sites-available/siteomodeiprod
```

Adicione a seguinte configuração:

```nginx
server {
    listen 80;
    server_name seu-dominio.com www.seu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Ative a configuração:

```bash
# Criar link simbólico
sudo ln -s /etc/nginx/sites-available/siteomodeiprod /etc/nginx/sites-enabled/

# Testar configuração do Nginx
sudo nginx -t

# Reiniciar Nginx
sudo systemctl restart nginx
```

### 6. Configurar HTTPS com Certbot (Recomendado)

```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obter certificado SSL
sudo certbot --nginx -d seu-dominio.com -d www.seu-dominio.com

# Seguir as instruções do Certbot para configurar HTTPS
```

Certbot irá atualizar automaticamente sua configuração Nginx para redirecionar HTTP para HTTPS.

### 7. Configurar Firewall (Opcional, mas recomendado)

```bash
# Instalar UFW (Uncomplicated Firewall)
sudo apt install ufw -y

# Configurar regras básicas
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https

# Ativar firewall
sudo ufw enable
```

## Atualizações Futuras

Para atualizar o site no futuro:

```bash
# Navegar até a pasta do projeto
cd /var/www/siteomodeiprod

# Atualizar código (se usar Git)
git pull

# Ou: substituir arquivos manualmente se não usar Git

# Instalar novas dependências (se houver)
npm install

# Construir novamente
npm run build

# Reiniciar a aplicação
pm2 restart siteomodeiprod
```

## Solução de Problemas

### Verificar Logs do PM2
```bash
pm2 logs siteomodeiprod
```

### Verificar Logs do Nginx
```bash
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

### Reiniciar Serviços
```bash
# Reiniciar PM2
pm2 restart siteomodeiprod

# Reiniciar Nginx
sudo systemctl restart nginx
```