# fis3-parser-uri
fis3-parser-uri

### 为什么有这个需求
标准的__inline、__uri等语法是在standard阶段，在单页应用中，大部分页面实际上是模板，需要在parse阶段处理。但是，单文件编译的顺序是先parse，后standard，这就导致了模板中的__inline等语法无效。
