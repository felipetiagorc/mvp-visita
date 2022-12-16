## Getting Started


#/components/UpLoadForm/

* 'FileInput.jsx': é o 'input' html personalizado pra receber arquivos. 
   - a função do celular tirar foto é possível graças a propriedade html capture="environment".
   - já a propriedade accept='image/*' (tem que ver se vamos aceitar PDF). 
   - Mas validações de Tipo e Tamanho do arquivo ficam no "/utils/uploadMulterFolder.js" - e lá já está aceitando: PDF + JPG, JPEG, PNG.
   - Tamanho do arquivo = 2MB
   - Tamanho do nome do arquivo = 60 caracters


* 'Form.js': 
  State: [image]
  1. Onde usa o FileInput, e armazena o estado da imagem selecionada, passando para o 'FilePreview'.
  
  2. Também recebe como prop a função 'pushImages' do seu componente pai 'index.jsx', que tem como estado um array de todos arquivos selecionados.
   
* 'Index.js': é o pai. 
   State: [images] = mantem todas imagens selecionadas. 
   TODO=fazer isso pelo id. pra poder remover qdo cancelar

   1. recebe a lista de documentos exigidos e renderiza um "form" pra cada documento.
   2. 

Importante: accept e capture

