# Antações Mão no código

## GITHUB ACTIONS em Hospedagem Compartilhada

GitHub Actions

Para config github actions usamos o seguinte arquivo:

/.github/workflows/main.yml
```
on:
  push:
    branches:
      - main
name: 🚀 Deploy website on push
jobs:
  web-deploy:
    name: 🎉 Deploy
    runs-on: ubuntu-latest
    steps:
      - name: 🚚 Get latest code
        uses: actions/checkout@v2
      - name: 📂 Sync files
        uses: SamKirkland/FTP-Deploy-Action@4.0.0
        with:
          server: ${{ secrets.ftp_host }}
          username: ${{ secrets.ftp_user }}
          password: ${{ secrets.ftp_password }}
          server-dir: public_html/         
```
Vriar as secrets para esconder os dados de acesso ao host


## Browser-Sync

[browser-sync start -f . --server]

