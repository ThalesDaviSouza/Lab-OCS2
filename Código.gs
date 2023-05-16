function doGet(e){
  Logger.log(e)
  return HtmlService.createTemplateFromFile("index").evaluate();
}

function saveProduct(product, price){
  let planilha = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1PY_2y5kv0vSsab-VFdNcn6MhfoDStWvRiE8oxwjxpi4/edit?usp=sharing")
  let aba = planilha.getSheetByName('Produtos')
  aba.appendRow([product.name, product.price, product.type, new Date()])
}

function include(partial){
  return HtmlService.createHtmlOutputFromFile(partial).getContent();
}
