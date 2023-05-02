function doGet(e){
  Logger.log(e)
  return HtmlService.createHtmlOutputFromFile("index")
}

function saveProduct(product, price){
  let planilha = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1PY_2y5kv0vSsab-VFdNcn6MhfoDStWvRiE8oxwjxpi4/edit?usp=sharing")
  let aba = planilha.getSheetByName('Produtos')
  aba.appendRow([product, price, new Date()])
}
