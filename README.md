# Projs
## getParams 
Captura as variaveis do link<br>
Exemplo: https://site.com.br?id=1&text=Testando
```javascript
var id = getParams("id"); // variavel id receberar o valor 1
var text = getParams("text"); // variavel text receberar o valor Testando
```


## Visualização Modal Simples

Um modal sem usar a biblioteca jQuery.

### Uso básico

#### Instalação

Inclua os arquivos CSS e JS.
```html
<link href="style.css" rel="stylesheet"/>
<script type="application/javascript" src="script.js"></script>
```

#### Adicione o gatilho

```html
<button data-target="modal_dialog_ID" data-toggle="modal">Abrir modal</button>
```

#### Create the Modal

```html
<div id="modal_dialog_ID" class="modal">
    <div class="modal-window">
        <span class="close" data-dismiss="modal">&times;</span>
        ...
    </div>
</div>
```

#### Demo
[modal.html](https://faurelia.github.io/simple-modal-view/modal.html).
