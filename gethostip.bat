@echo off

for /f "tokens=1" %%i in ('hostname') do set host=%%i
for /f "tokens=1" %%i in ('ping -4 %host% -n 1 ^| findstr /i "Pinging"') do set ip=%%i
set ip=%ip:~8%
setx MY_IP %ip%
echo A gép IP címe: %ip%
echo A környezeti változó: %MY_IP%
