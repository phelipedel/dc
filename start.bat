@echo off
echo ==========================================
echo    Project Launcher - Inicializando...
echo ==========================================
echo.

echo [1/3] Verificando Node.js...
node --version > nul 2>&1
if %errorlevel% neq 0 (
    echo ERRO: Node.js nao encontrado!
    echo Por favor, instale o Node.js em: https://nodejs.org
    pause
    exit /b 1
)
echo Node.js encontrado!

echo.
echo [2/3] Instalando dependencias...
call npm install
if %errorlevel% neq 0 (
    echo ERRO: Falha ao instalar dependencias!
    pause
    exit /b 1
)

echo.
echo [3/3] Iniciando o servidor...
echo.
echo ==========================================
echo    Servidor iniciado com sucesso!
echo    Acesse: http://localhost:3000
echo ==========================================
echo.
call npm run dev