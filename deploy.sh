#!/bin/bash

# Script de implantação para o site siteomodeiprod

echo "Iniciando implantação do site"

# Atualizar repositório (se estiver usando Git)
if [ -d ".git" ]; then
  echo "Atualizando código do repositório Git..."
  git pull
  if [ $? -ne 0 ]; then
    echo "Falha ao atualizar o código. Encerrando implantação."
    exit 1
  fi
fi

# Instalar dependências
echo "Instalando dependências..."
npm install
if [ $? -ne 0 ]; then
  echo "Falha ao instalar dependências. Encerrando implantação."
  exit 1
fi

# Construir aplicação
echo "Construindo aplicação..."
npm run build
if [ $? -ne 0 ]; then
  echo "Falha ao construir a aplicação. Encerrando implantação."
  exit 1
fi

# Verificar se PM2 está instalado
if ! command -v pm2 &> /dev/null; then
  echo "PM2 não está instalado. Instalando globalmente..."
  npm install -g pm2
  if [ $? -ne 0 ]; then
    echo "Falha ao instalar PM2. Encerrando implantação."
    exit 1
  fi
fi

# Iniciar/reiniciar aplicação com PM2
if pm2 list | grep -q "siteomodeiprod"; then
  echo "Reiniciando aplicação no PM2..."
  pm2 restart siteomodeiprod
else
  echo "Iniciando aplicação no PM2..."
  pm2 start npm --name "siteomodeiprod" -- start
fi

if [ $? -ne 0 ]; then
  echo "Falha ao iniciar/reiniciar aplicação no PM2. Encerrando implantação."
  exit 1
fi

# Salvar configuração do PM2
echo "Salvando configuração do PM2..."
pm2 save

echo "Implantação concluída com sucesso!"
echo "Para acessar o site, configure o Nginx conforme as instruções no arquivo DEPLOYMENT.md"