# TechQuiz — Teste seus conhecimentos!

Jogo de perguntas e respostas sobre tecnologia para o evento **Mundo SENAI** (curso de Desenvolvimento de Sistemas).

## Como executar

1. Abra a pasta `TechQuiz`.
2. Abra o arquivo **`index.html`** no navegador (duplo clique ou arraste para o navegador).
3. Não é necessário internet, servidor ou instalação.

### Estrutura

```
TechQuiz/
├── index.html
├── style.css
├── script.js
└── README.md
```

Opcional no Windows: use `Abrir TechQuiz.bat` ou `Abrir TechQuiz (sem janela preta).vbs` para abrir em modo aplicativo (Edge/Chrome).

## Regras do jogo

- 5 categorias, 10 perguntas cada (50 no total)
- 20 segundos por pergunta
- 100 pontos por acerto
- Ranking local (top 10) no navegador via `localStorage`
- Desempate por menor tempo total da partida

## Tecnologias

HTML5, CSS3 e JavaScript puro. Sem frameworks, APIs ou recursos externos.

## Testes manuais recomendados

1. Validar nome vazio e nome curto
2. Iniciar em cada uma das 5 categorias
3. Responder certa e errada; conferir pontuação
4. Deixar o tempo zerar (conta como em branco)
5. Tentar clicar duas vezes na mesma pergunta
6. Finalizar e conferir tela de resultados (inclui categoria)
7. Verificar ranking após atualizar a página
8. Limpar ranking
9. Redimensionar a janela (celular/tablet/desktop)
10. Usar sem conexão com a internet
