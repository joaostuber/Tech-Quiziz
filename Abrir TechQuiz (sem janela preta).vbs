' TechQuiz — launcher silencioso (sem janela preta do CMD)
Set fso = CreateObject("Scripting.FileSystemObject")
Set sh  = CreateObject("WScript.Shell")

pasta = fso.GetParentFolderName(WScript.ScriptFullName)
html  = pasta & "\index.html"

If Not fso.FileExists(html) Then
  MsgBox "Arquivo index.html nao encontrado." & vbCrLf & "Coloque este script na mesma pasta do TechQuiz.", vbCritical, "TechQuiz"
  WScript.Quit 1
End If

' Converte caminho para file:/// URL
url = "file:///" & Replace(html, "\", "/")

' Ordem de tentativa: Edge → Chrome → navegador padrão
edge1 = sh.ExpandEnvironmentStrings("%ProgramFiles(x86)%") & "\Microsoft\Edge\Application\msedge.exe"
edge2 = sh.ExpandEnvironmentStrings("%ProgramFiles%") & "\Microsoft\Edge\Application\msedge.exe"
chrome1 = sh.ExpandEnvironmentStrings("%ProgramFiles%") & "\Google\Chrome\Application\chrome.exe"
chrome2 = sh.ExpandEnvironmentStrings("%ProgramFiles(x86)%") & "\Google\Chrome\Application\chrome.exe"
chrome3 = sh.ExpandEnvironmentStrings("%LocalAppData%") & "\Google\Chrome\Application\chrome.exe"

If fso.FileExists(edge1) Then
  sh.Run """" & edge1 & """ --app=""" & url & """ --window-size=900,800", 1, False
ElseIf fso.FileExists(edge2) Then
  sh.Run """" & edge2 & """ --app=""" & url & """ --window-size=900,800", 1, False
ElseIf fso.FileExists(chrome1) Then
  sh.Run """" & chrome1 & """ --app=""" & url & """ --window-size=900,800", 1, False
ElseIf fso.FileExists(chrome2) Then
  sh.Run """" & chrome2 & """ --app=""" & url & """ --window-size=900,800", 1, False
ElseIf fso.FileExists(chrome3) Then
  sh.Run """" & chrome3 & """ --app=""" & url & """ --window-size=900,800", 1, False
Else
  ' Abre com o programa padrão associado a .html
  sh.Run """" & html & """", 1, False
End If
