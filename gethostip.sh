#!/bin/bash

# Lekérdezi a gép IP címét
IP=$(hostname -I | awk '{print $1}')

# Beállítja a környezeti változót
export MY_IP=$IP

# Kiírja az IP címet és a környezeti változót a konzolra
echo "A gép IP címe: $IP"
echo "A környezeti változó: $MY_IP"
