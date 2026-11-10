@echo off
chcp 65001 >nul
title TechQuiz
cd /d "%~dp0"

set "HTML=%~dp0index.html"

if not exist "%HTML%" (
    echo.
    echo  [ERRO] Arquivo index.html nao encontrado.
    echo  Coloque este .bat na mesma pasta do TechQuiz.
    echo.
    pause
    exit /b 1
)

REM Tenta Microsoft Edge em modo aplicativo (sem barra do navegador)
where msedge >nul 2>&1
if %errorlevel%==0 (
    start "" msedge --app="file:///%HTML:\=/%" --window-size=900,800
    exit /b 0
)

if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" (
    start "" "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" --app="file:///%HTML:\=/%" --window-size=900,800
    exit /b 0
)

if exist "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" (
    start "" "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" --app="file:///%HTML:\=/%" --window-size=900,800
    exit /b 0
)

REM Tenta Google Chrome em modo aplicativo
where chrome >nul 2>&1
if %errorlevel%==0 (
    start "" chrome --app="file:///%HTML:\=/%" --window-size=900,800
    exit /b 0
)

if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
    start "" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" --app="file:///%HTML:\=/%" --window-size=900,800
    exit /b 0
)

if exist "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" (
    start "" "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" --app="file:///%HTML:\=/%" --window-size=900,800
    exit /b 0
)

if exist "%LocalAppData%\Google\Chrome\Application\chrome.exe" (
    start "" "%LocalAppData%\Google\Chrome\Application\chrome.exe" --app="file:///%HTML:\=/%" --window-size=900,800
    exit /b 0
)

REM Fallback: abre no navegador padrao do Windows
start "" "%HTML%"
exit /b 0
